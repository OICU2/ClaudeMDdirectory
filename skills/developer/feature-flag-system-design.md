---
name: feature-flag-system-design
description: >
  Architects a complete feature flag system for controlled rollouts, A/B testing, and kill-switch functionality. Use when someone says "design a feature flag system," asks about "rolling out features safely," wants to "implement A/B testing infrastructure," needs a "kill switch for features," or is planning "gradual feature rollouts" across environments.
category: developer
tags: [feature-flags, system-design, rollouts, a-b-testing, infrastructure]
author: community
---

# Feature Flag System Design

This skill designs a production-ready feature flag system architecture covering data models, evaluation logic, targeting rules, rollout strategies, and operational tooling when a user needs controlled feature delivery infrastructure.

## System Design Workflow

### 1. Requirements Gathering
- Identify flag types needed: boolean toggles, multivariate, percentage rollouts, user targeting
- Clarify environments: local, staging, production, per-region
- Determine evaluation context: server-side, client-side, or edge
- Establish consistency requirements: sticky bucketing, session vs. user-level targeting

### 2. Data Model Design
Define the core flag schema:
```
Flag {
  id: string
  key: string (e.g., "checkout-v2")
  type: enum(boolean | string | number | json)
  defaultValue: any
  rules: Rule[]
  status: enum(active | archived | killed)
  metadata: { owner, created, description }
}

Rule {
  conditions: Condition[]
  percentage: 0-100
  value: any
  priority: number
}

Condition {
  attribute: string (e.g., "userId", "country", "plan")
  operator: enum(eq | in | gte | lte | regex | semver)
  value: any
}
```

### 3. Evaluation Engine
Build flag evaluation in strict priority order:
1. **Kill switch check** — if flag is killed, return default immediately
2. **Environment filter** — skip rules not applicable to current environment
3. **Rule matching** — evaluate conditions top-to-bottom by priority
4. **Percentage bucketing** — hash(userId + flagKey) % 100 for sticky, deterministic assignment
5. **Default fallback** — return flag default if no rule matches

Use MurmurHash or FNV-1a for bucketing to ensure uniform distribution.

### 4. Targeting Strategies
- **Boolean toggle**: Simple on/off, no conditions
- **Percentage rollout**: Increment from 0% → 100% over time; use canary (1%) → pilot (10%) → broad (50%) → full (100%)
- **User segment targeting**: Match on attributes (beta users, paid plans, geography)
- **A/B test**: Split users into named variants with traffic allocation summing to 100%
- **Scheduled flags**: Auto-enable/disable based on timestamp

### 5. Storage and Delivery Architecture
Choose based on scale:
- **Small-scale**: PostgreSQL/MySQL table + in-process cache with TTL (30–60s)
- **Medium-scale**: Redis for flag state + pub/sub for invalidation
- **Large-scale**: CDN-edge delivery (Cloudflare Workers/Lambda@Edge) + SSE/WebSocket push for real-time updates

Flag evaluation should never add more than 1–5ms latency. Cache aggressively; invalidate on write.

### 6. Kill Switch Design
- Every flag must have a kill switch path that bypasses all rules
- Kill switch state stored separately from flag config for fast reads
- Global kill switch endpoint: `POST /flags/{key}/kill` sets status immediately
- SDKs must poll kill switch state independently from full flag config

### 7. Audit and Observability
- Log every flag evaluation: `{ flagKey, userId, ruleMatched, valueServed, timestamp }`
- Emit metrics: evaluation count, cache hit rate, latency p50/p99
- Track flag change history: who changed what, when, with diff
- Alert on: kill switch activations, evaluation errors, stale cache

### 8. SDK Contract
Define a consistent interface across languages:
```
evaluate(flagKey, context, defaultValue) → value
getAllFlags(context) → Map<string, value>
onFlagChange(flagKey, callback) → unsubscribe
```
Context must
