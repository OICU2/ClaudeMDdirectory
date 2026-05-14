---
name: cross-service-latency-budget-design
description: >
  Allocates latency budgets across microservices and external dependencies to meet an end-to-end
  response time SLA. Use when someone asks about meeting response time targets across services,
  wants to distribute latency allowances across a call chain, is designing microservice timeouts,
  needs to debug where latency budget is being consumed, or asks how to hit an end-to-end SLA
  with multiple downstream dependencies.
category: developer
tags: [microservices, performance, latency, sla, distributed-systems]
author: community
---

# Cross-Service Latency Budget Design

This skill decomposes an end-to-end response time SLA into per-service latency budgets across a microservice call chain, accounting for network overhead, retries, and tail latencies.

## Latency Budget Allocation Workflow

### 1. Establish the End-to-End SLA
- Confirm the target SLA percentile (p50, p95, p99). Default to **p99** unless specified.
- Identify whether the SLA is user-facing (e.g., HTTP response) or internal (e.g., async pipeline).
- Extract the hard deadline in milliseconds (e.g., 500ms total).

### 2. Map the Call Chain
- List every service and external dependency in request order.
- Identify parallel vs. sequential calls. Parallel branches share a budget slot; sequential calls consume budget in series.
- Note which calls are **synchronous** (blocking) vs. **asynchronous** (fire-and-forget, excluded from budget).

### 3. Reserve Overhead Budget
Subtract non-negotiable overhead from the total SLA before allocating to services:
- **Network round-trips**: 2–5ms per hop (LAN), 20–80ms (cross-region/internet).
- **Load balancer / API gateway**: 1–3ms.
- **Serialization / deserialization**: 0.5–2ms per service boundary.
- **Safety margin**: Reserve 10–15% of total budget for variance buffer.

### 4. Allocate Per-Service Budgets
Apply these allocation rules in order:

1. **External dependencies first** (databases, third-party APIs, payment providers): assign realistic p99 baselines from observed metrics or vendor SLAs. These are least flexible.
2. **Critical path services**: assign budgets proportional to their computational complexity.
3. **Supporting services** (auth, feature flags, config): cap at 10–20ms each; enforce caching aggressively.
4. **Parallel call groups**: budget = slowest single call in the group (not sum).
5. No single internal service should consume >40% of the remaining budget after overhead.

### 5. Define Timeout and Retry Policy Per Service
For each allocated budget slot:
- **Timeout** = allocated budget × 0.9 (leave 10% for caller overhead).
- **Retries**: only allow 1 retry if `timeout × 2 < remaining budget at that point`; otherwise no retry.
- **Circuit breaker threshold**: trip if p99 latency exceeds allocated budget for >5% of requests over a 30s window.

### 6. Validate the Budget
- Sum all sequential budgets + overhead. Confirm total ≤ SLA target.
- Simulate worst-case: all services hit their p99 simultaneously. If sum exceeds SLA, identify candidates for caching, parallelization, or budget reduction.
- Flag any service with an allocated budget less than its observed p95 — this is a risk item requiring architectural change.

### 7. Document Assumptions and Risk Items
- List services where observed data is unavailable (estimated budgets).
- Flag external dependencies outside your control.
- Note which budgets require caching or connection pooling to be achievable.

## Output Format

Produce the following artifacts:

**1. Budget Allocation Table**
| Service / Dependency | Type | Sequential/Parallel | Allocated Budget (ms) | Timeout (ms) | Retries | Risk Level |
|---|---|---|---|---|---|---|
| API Gateway | Internal | Sequential | 3ms | — | — | Low |
| Auth Service | Internal | Sequential | 15ms | 13ms | 0 | Low |
| Product DB (PostgreSQL) | External | Sequential | 80ms
