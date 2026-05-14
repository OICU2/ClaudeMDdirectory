---
name: service-to-service-timeout-matrix
description: >
  Maps all inter-service call paths in a distributed system and generates recommended timeout and retry configurations based on each dependency's SLA commitments. Use when someone says "our services are timing out," asks about "what timeouts should I set," or wants to "configure retries between services," "document service dependencies," or "build a timeout strategy for our microservices."
category: developer
tags: [microservices, timeouts, retries, sla, distributed-systems]
author: community
---

# Service-to-Service Timeout Matrix

This skill analyzes inter-service call paths and produces a concrete timeout and retry configuration matrix based on each service's SLA, ensuring downstream failures don't cascade into system-wide outages.

## Workflow

1. **Inventory all services** — Ask the user to list every service in scope, or extract them from provided architecture docs, code, or config files.

2. **Map call paths** — For each service, identify all outbound synchronous calls (HTTP, gRPC, DB, cache, external APIs). Build a directed dependency graph: `Caller → Callee`.

3. **Collect SLA data per dependency** — For each callee, gather:
   - Published or expected p99 response time
   - Acceptable error rate threshold
   - Whether the call is on the critical path (user-facing) or background

4. **Apply timeout calculation rules**:
   - **Timeout = p99 latency × 2** as a baseline; never set below p95
   - For critical-path calls: cap at 2–3× p99 to preserve UX
   - For non-critical/async calls: allow up to 5× p99
   - Add network jitter buffer: +50–100ms for internal, +200–500ms for external
   - Caller's total timeout must be less than its own SLA minus all other downstream timeouts in the same request chain

5. **Apply retry strategy rules**:
   - Retry only on idempotent operations and transient errors (5xx, connection reset, timeout)
   - **Max retries**: 2–3 for critical path, 1–2 for non-critical
   - **Backoff**: exponential with jitter; base delay = 100ms, max delay = 2s
   - **Retry budget**: total retry time must not exceed 50% of the caller's own timeout
   - Do NOT retry on 4xx client errors or non-idempotent writes unless explicitly safe

6. **Flag risks** — Identify and call out:
   - Timeout chains where sum of downstream timeouts exceeds the caller's SLA
   - Missing circuit breaker opportunities (high-traffic + fragile dependency)
   - Any service with no retry strategy on a critical-path call

7. **Generate configuration output** — Produce ready-to-use config snippets for the user's stack (e.g., Resilience4j, Hystrix, Envoy, Axios, `fetch` with AbortController, Go `context.WithTimeout`).

## Output Format

Produce the following sections in order:

**1. Dependency Graph Summary**
A plain-text or Markdown table listing every `Caller → Callee` edge with: call type (sync/async), critical path (yes/no), and callee p99 SLA.

**2. Timeout & Retry Matrix**
A Markdown table with columns:
`Caller | Callee | Recommended Timeout | Max Retries | Retry Backoff | Notes`

One row per call path. Notes column flags risks or assumptions.

**3. Chain Validation**
For each critical-path request chain, show the timeout budget math:
```
UserService → OrderService (800ms) → PaymentService (400ms) → Stripe (2000ms)
Total chain: 3200ms — exceeds UserService SLA of 2000ms ⚠️
```

**4. Configuration Snippets**
Provide copy-paste config blocks for the user's framework/language. Include comments explaining each value. If framework is unknown, output generic YAML and one language-specific example.

**5. Recommendations**
Bulleted list of the top 3–5 highest-priority changes, ordered by risk reduction impact.
