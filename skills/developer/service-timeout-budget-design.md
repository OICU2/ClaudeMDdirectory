---
name: service-timeout-budget-design
description: >
  Calculates and documents appropriate timeout values for each service dependency based on SLA requirements and cascading failure risk. Use when someone asks about setting timeouts for microservices, wants to design a timeout strategy for distributed systems, needs to prevent cascading failures from slow dependencies, or is figuring out how long to wait before failing a service call. Also triggers when someone mentions their services are hanging, queuing up, or causing downstream failures.
category: developer
tags: [distributed-systems, resilience, microservices, sla, fault-tolerance]
author: community
---

# Service Timeout Budget Design

This skill calculates and documents safe timeout values for each service dependency by working backward from SLA targets, accounting for call chain depth, and preventing cascading failures across a distributed system.

## Timeout Budget Design Workflow

### 1. Gather System Inputs
Collect the following before calculating any timeout:
- **End-to-end SLA target** (e.g., p99 response time of 500ms)
- **Service dependency map**: list each downstream call and whether calls are sequential or parallel
- **Observed or estimated latency** for each dependency (p50, p95, p99)
- **Retry policy**: how many retries are configured per call
- **Thread/connection pool sizes**: max concurrent requests each service can hold

### 2. Calculate the Timeout Budget
Use this formula for sequential call chains:

```
Timeout Budget = SLA Target × 0.8   ← reserve 20% for overhead
Per-hop Timeout = Budget / number_of_sequential_hops
```

For parallel fan-out calls:
```
Per-hop Timeout = Budget × 0.9      ← all parallel calls share the same wall-clock budget
```

Adjust per-hop timeout downward if retries are configured:
```
Effective Timeout Per Attempt = Per-hop Timeout / (retry_count + 1)
```

### 3. Apply Cascading Failure Safety Rules
- **Never set a downstream timeout equal to or greater than the upstream caller's timeout.** Each layer must have a strictly smaller timeout than the layer above it.
- Enforce a minimum floor: no timeout should be less than `p99_latency × 1.5` for that dependency (to avoid premature failures under normal load).
- If `p99_latency × 1.5 > per-hop budget`, flag this as an **SLA breach risk** — the SLA target is too aggressive for the observed latency.
- Services with no SLA dependency (background jobs, async workers) should still have timeouts: use `p99 × 3` as a safe default.

### 4. Document the Timeout Table
For each service dependency, record:

| Dependency | Role | p99 Latency | Recommended Timeout | Retry Count | Effective Attempt Timeout | Notes |
|---|---|---|---|---|---|---|
| payment-service | sequential | 120ms | 200ms | 2 | 67ms | Critical path |
| inventory-service | parallel | 80ms | 400ms | 1 | 200ms | Fan-out call |

### 5. Identify and Flag Risks
After filling the table, check for:
- **Timeout inversions**: any upstream timeout ≤ downstream timeout → mark as CRITICAL
- **Retry amplification**: if `attempt_timeout × (retries + 1) > hop_budget` → reduce retries or increase budget
- **Missing circuit breakers**: any dependency with p99 > 200ms and no circuit breaker noted → recommend adding one
- **Single points of failure**: sequential dependencies with no fallback and timeout < p99 × 2 → flag for fallback design

### 6. Recommend Circuit Breaker Thresholds (if applicable)
When timeouts alone are insufficient, pair each high-latency dependency with:
- **Open threshold**: trip after `X` consecutive timeouts (recommend 5)
- **Half-open probe interval**: wait `timeout × 10` before retrying
- **Close threshold**: require `3` consecutive successes to close

## Output Format

Produce a structured Markdown document with the following sections:

1. **System Summary** — SLA target, total hop count, budget breakdown (2–4 sentences)
2. **Timeout Budget Calculation** — show the math step by step for sequential and parallel paths
3. **
