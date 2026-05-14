---
name: cross-service-circuit-breaker-design
description: >
  Designs circuit breaker patterns, thresholds, and fallback strategies for inter-service
  communication in distributed systems. Use when someone asks about preventing cascading
  failures, wants to configure circuit breaker thresholds, is dealing with service
  reliability issues between microservices, or needs to design fault tolerance for
  distributed API calls.
category: developer
tags: [circuit-breaker, distributed-systems, microservices, fault-tolerance, resilience]
author: community
---

# Cross-Service Circuit Breaker Design

This skill analyzes service dependencies and produces concrete circuit breaker configurations, state transition thresholds, and fallback strategies to prevent cascading failures in distributed systems.

## Circuit Breaker Design Workflow

### 1. Identify Service Call Profile
- Determine call volume (requests/sec), typical latency (p50/p95/p99), and acceptable degradation
- Classify the dependency: critical path (user-facing), background (async), or optional (enrichment)
- Identify the failure modes: timeout, error response, connection refused, slow response

### 2. Define State Transition Thresholds

**Closed → Open (trip conditions):**
- Failure rate threshold: typically 50% over a rolling window (start at 60% for lenient, 40% for strict)
- Minimum request volume before tripping: 10–20 requests in the window to avoid false positives on low traffic
- Rolling window size: 10–60 seconds (shorter for latency-sensitive, longer for bursty traffic)
- Slow call threshold: define "slow" as 2× p95 latency; count slow calls toward failure rate

**Open → Half-Open (recovery probe):**
- Wait duration: start at 5–30 seconds; use exponential backoff for repeated failures (5s → 10s → 30s → 60s)
- Probe request count: 1–5 requests allowed through in half-open state

**Half-Open → Closed (recovery success):**
- Consecutive successes required: 3–5 successful probes before fully closing
- Reset failure counter on close

### 3. Select Circuit Breaker Scope
- **Per-instance**: isolates failures to a single downstream pod; requires aggregation for meaningful stats
- **Per-service**: aggregates across all instances; recommended default
- **Per-endpoint**: fine-grained; use when one endpoint is flaky but others are stable

### 4. Design Fallback Strategies
Match fallback to dependency classification:
- **Critical path**: return cached data with staleness header, or degrade gracefully (empty list vs. error)
- **Background/async**: queue the request for retry, emit a metric, continue without blocking
- **Optional/enrichment**: omit the enriched data, return base response, log the skip

### 5. Configure Timeout Alignment
- Set circuit breaker timeout ≤ downstream SLA; never let circuit breaker wait longer than the caller's own timeout
- Add a buffer: if downstream SLA is 200ms, set timeout at 150ms to trip before the caller times out
- Use separate connect timeout (50–100ms) and read timeout

### 6. Define Metrics and Alerting
- Alert on circuit open events immediately (PagerDuty/Slack)
- Track: open duration, half-open probe success rate, fallback invocation rate
- Dashboard: circuit state per service, failure rate trends, recovery time

### 7. Technology-Specific Configuration

**Resilience4j (Java):**
```yaml
resilience4j.circuitbreaker:
  instances:
    payment-service:
      slidingWindowType: COUNT_BASED
      slidingWindowSize: 20
      failureRateThreshold: 50
      slowCallRateThreshold: 80
      slowCallDurationThreshold: 500ms
      waitDurationInOpenState: 15s
      permittedNumberOfCallsInHalfOpenState: 3
      minimumNumberOfCalls: 10
```

**Hystrix/Resilience4j (Python/Go):** provide equivalent configuration mapping if a different language is specified.

**Istio/Service Mesh:** provide `DestinationRule` outlier detection configuration with `consecutiveGatewayErrors`, `interval`, `baseEjectionTime
