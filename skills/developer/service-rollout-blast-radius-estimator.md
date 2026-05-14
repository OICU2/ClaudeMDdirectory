---
name: service-rollout-blast-radius-estimator
description: >
  Analyzes downstream service dependencies and traffic patterns to estimate the customer-impact blast radius of a staged deployment before it begins. Use when someone says "what's the blast radius of this rollout," asks about deployment risk or customer impact scope, wants to estimate how many users a staged deploy could affect, needs to assess rollout safety before pushing to production, or is planning a canary or phased deployment and wants dependency mapping.
category: developer
tags: [deployment, risk-assessment, dependencies, rollout, observability]
author: community
---

# Service Rollout Blast Radius Estimator

Analyzes service dependency graphs, traffic volumes, and rollout stage percentages to produce a concrete customer-impact estimate before a deployment begins.

## Analysis Workflow

1. **Identify the target service**: Confirm the service name, version delta, and type of change (config, binary, schema, API contract).

2. **Map direct downstream consumers**: Ask for or inspect the service's dependency graph. List every service, job, or client that calls the target service, including async consumers (queues, event streams).

3. **Classify dependency criticality**:
   - **Hard dependencies**: Callers that fail or degrade immediately if the target service errors.
   - **Soft dependencies**: Callers with fallback logic, circuit breakers, or graceful degradation.
   - **Async consumers**: Jobs or pipelines that may lag but eventually fail.

4. **Gather traffic data**: For each dependent service, collect (or estimate):
   - Requests per second or daily active calls to the target service.
   - % of the dependent service's total traffic that relies on the target service.
   - Current error budget / SLO headroom.

5. **Apply the rollout stage multiplier**: Given the proposed stage percentage (e.g., 5%, 10%, 25%, 100%), calculate how much traffic will hit the new version at each stage.

6. **Estimate customer exposure**:
   - Start from leaf-node user-facing services and trace back through the dependency chain.
   - Calculate: `exposed_users = total_user_base × stage_percentage × dependency_call_rate × (1 - fallback_coverage)`.
   - Flag any single points of failure where one service failure cascades with no fallback.

7. **Identify compounding risks**:
   - Shared infrastructure (databases, caches, message brokers) used by multiple dependents.
   - Services already operating near SLO limits.
   - Rollout timing conflicts (peak traffic windows, other concurrent deploys).

8. **Recommend safe stage gates**: Suggest specific percentage thresholds and observe windows (e.g., "hold at 5% for 30 min, watch error rate on ServiceX before proceeding to 25%").

## Output Format

Produce a structured blast radius report with these sections:

```
## Blast Radius Report: [Service Name] vX.Y.Z

### Rollout Summary
- Change type: [binary | config | schema | API contract]
- Proposed stages: [e.g., 5% → 25% → 100%]
- Estimated rollout window: [timeframe]

### Dependency Map
| Dependent Service | Type | Criticality | Daily Calls to Target | Fallback? |
|---|---|---|---|---|
| ServiceA | sync | hard | 2.4M | no |
| ServiceB | async | soft | 800K | yes (retry queue) |

### Customer Impact by Stage
| Stage | % Traffic | Estimated Exposed Users | Risk Level |
|---|---|---|---|
| 5% | 5% | ~12,000 users | LOW |
| 25% | 25% | ~60,000 users | MEDIUM |
| 100% | 100% | ~240,000 users | HIGH if defect exists |

### Critical Risk Flags
- [List any SPOFs, SLO-constrained services, or compounding risks]

### Recommended Stage Gates
1. [Specific condition to observe before advancing each stage]
2. ...

### Rollback Trigger Criteria
- Error rate on [ServiceX] exceeds [Y]% for [Z] minutes → halt and rollback
```

Report length scales with dependency complexity. For simple services (1–3 dependents), the full report should fit in under 40 lines. For
