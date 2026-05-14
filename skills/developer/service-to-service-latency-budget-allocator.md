---
name: service-to-service-latency-budget-allocator
description: >
  Breaks down an end-to-end latency SLO into per-service time budgets across a distributed call chain.
  Use when someone says "allocate my latency budget," asks about "how to split latency across services,"
  or wants to "distribute my SLO across a microservices chain." Also activates when someone describes
  an end-to-end p99 target and needs per-hop breakdowns, or asks "how much latency can each service take."
category: developer
tags: [latency, slo, distributed-systems, performance, microservices]
author: community
---

# Service-to-Service Latency Budget Allocator

This skill takes an end-to-end latency SLO and a distributed call chain description, then produces a concrete per-service latency budget with allocation rationale.

## Allocation Workflow

1. **Collect inputs** — Extract the following from the user's request:
   - End-to-end latency target (e.g., p99 < 500ms)
   - Percentile(s) to budget for (p50, p95, p99, p999)
   - List of services in the call chain, including whether calls are sequential or parallel
   - Any known constraints (e.g., "DB must have at least 50ms", "payment service is external")

2. **Identify call chain topology** — Map out the execution path:
   - Sequential calls add latency (A → B → C = sum of all budgets)
   - Parallel calls are bounded by the slowest branch (max, not sum)
   - Fan-out/fan-in patterns use the max of parallel legs plus coordination overhead

3. **Reserve overhead budget** — Subtract fixed costs before allocating to services:
   - Network hops: 1–5ms per hop depending on geography (default: 2ms per internal hop)
   - Serialization/deserialization: 0.5–2ms per boundary
   - Load balancer / service mesh overhead: 1–3ms per hop
   - Total overhead = (number of network hops × per-hop cost) + serde costs

4. **Apply allocation strategy** — Choose one of the following, defaulting to weighted-by-complexity:
   - **Equal split**: Divide remaining budget evenly across sequential services
   - **Weighted by complexity**: Assign larger budgets to services with DB calls, external I/O, or heavy computation; smaller budgets to passthrough/aggregator services
   - **Constraint-first**: Honor stated hard constraints first, split the remainder proportionally

5. **Validate the allocation** — Check that:
   - Sum of sequential budgets + overhead ≤ end-to-end target
   - Max of parallel branches + overhead ≤ end-to-end target
   - Each budget is realistic (flag any service allocated < 5ms as a risk)
   - Any external/third-party services are flagged as uncontrollable latency risks

6. **Identify risks and recommendations** — For each service:
   - Flag if its budget is tight relative to typical latency for its role (e.g., a DB-backed service with < 20ms is risky)
   - Recommend caching, async processing, or parallelization where budgets are infeasible
   - Note which services should instrument and alert at 80% of their budget

## Output Format

Produce a structured breakdown with the following sections:

**1. Input Summary**
- End-to-end target, percentile, and topology (1–3 lines)

**2. Overhead Deduction Table**
| Overhead Component | Cost |
|--------------------|------|
| Network hop (×N)   | Xms  |
| Serde (×N)         | Xms  |
| **Total overhead** | Xms  |
| **Remaining budget** | Xms |

**3. Per-Service Budget Table**
| Service | Role | Call Type | Allocated Budget | Notes |
|---------|------|-----------|-----------------|-------|
| api-gateway | entry point | sequential | 20ms | passthrough, minimal logic |
| auth-service | sequential | sequential | 30ms | JWT validation + cache lookup |
| ... | | | | |

**4. Call Chain Validation**
- Show the math: sequential sum + overhead =
