---
name: third-party-service-fallback-design
description: >
  Drafts a comprehensive fallback and circuit-breaker strategy for each external service dependency in a codebase. Use when someone says "our app goes down when a third-party API fails," asks about handling external service outages, wants to design resilience for payment processors or email providers, needs to define retry and timeout policies, or is building a degraded-mode experience for unreliable dependencies.
category: developer
tags: [resilience, circuit-breaker, fallback, availability, distributed-systems]
author: community
---

# Third-Party Service Fallback Design

This skill analyzes external service dependencies and produces a concrete fallback and circuit-breaker strategy per service, including timeout thresholds, retry logic, and degraded-mode behavior to keep the application available under failure conditions.

## Dependency Analysis & Strategy Design

1. **Inventory all external dependencies** — Identify every third-party service in the codebase (APIs, payment processors, auth providers, email/SMS services, storage, queues, feature-flag services, analytics).

2. **Classify each dependency by criticality:**
   - **Hard dependency**: app cannot function without it (e.g., auth, primary database)
   - **Soft dependency**: app can degrade gracefully (e.g., analytics, email, recommendations)
   - **Background dependency**: async, non-blocking (e.g., logging, metrics)

3. **Define timeout thresholds per service:**
   - Connection timeout: time to establish TCP/HTTP connection (default suggestion: 2–5s)
   - Read timeout: time to receive full response (default suggestion: 5–15s)
   - Overall deadline: hard ceiling for total call duration
   - Justify each threshold based on service SLA and user-facing impact

4. **Design retry logic per service:**
   - Max retry attempts (suggest 2–3 for synchronous calls, higher for async)
   - Backoff strategy: exponential backoff with jitter (formula: `min(cap, base * 2^attempt) + random(0, jitter)`)
   - Retryable vs. non-retryable errors (retry 429/503; do NOT retry 400/401/403/404)
   - Total retry budget to avoid cascade delays

5. **Design circuit-breaker parameters:**
   - Failure threshold to open the circuit (e.g., 5 failures in 30s, or 50% error rate)
   - Half-open probe interval (e.g., attempt one request every 10s)
   - Success threshold to close the circuit (e.g., 2 consecutive successes)
   - Metrics to track: error rate, latency p95, consecutive failures

6. **Define degraded-mode behavior per service:**
   - What the app returns or does when the circuit is open
   - Cached response strategy (TTL, stale-while-revalidate)
   - Queue-and-retry for non-time-sensitive operations
   - User-facing messaging (silent degradation vs. visible error)
   - Feature flags to disable dependent features

7. **Specify observability hooks:**
   - Log circuit state transitions (closed → open → half-open)
   - Emit metrics for failure count, circuit state, fallback activations
   - Alert thresholds for sustained open-circuit state

## Output Format

Produce a **Service Resilience Strategy Document** with one section per external dependency:

```
## [Service Name] ([criticality: hard/soft/background])

**Purpose:** [what the app uses this service for]

**Timeouts:**
- Connection: Xs
- Read: Xs
- Overall deadline: Xs

**Retry Policy:**
- Max attempts: N
- Backoff: exponential with jitter, base Xms, cap Xs
- Retryable errors: [list]
- Non-retryable errors: [list]

**Circuit Breaker:**
- Open threshold: [N failures / X% error rate] in [window]
- Half-open probe: every Xs
- Close threshold: N consecutive successes

**Degraded-Mode Behavior:**
- [Specific fallback action — cache hit, default value, queue, disable feature]
- User-facing impact: [none / visible message / feature disabled]

**Observability:**
- Logs: [events to log]
- Metrics: [counters/gau
