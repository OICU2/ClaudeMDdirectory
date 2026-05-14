---
name: third-party-api-failure-handling-design
description: >
  Designs retry logic, fallback strategies, and error classification systems for external API integrations. Use when someone asks how to handle API downtime, wants to make their integration more resilient, needs to design retry logic for a third-party service, is dealing with flaky external dependencies, or wants to classify and respond to different API failure modes.
category: developer
tags: [api-integration, error-handling, resilience, retry-logic, fault-tolerance]
author: community
---

# Third-Party API Failure Handling Design

This skill produces a complete failure-handling strategy for external API integrations, covering error classification, retry policies, fallback behavior, and observability — activated whenever someone needs to make an integration resilient against external service unavailability or instability.

## Failure Handling Design Workflow

### 1. Classify the Error Space First
Separate errors into distinct categories before designing any response logic:

- **Transient errors** (retry eligible): 429 rate limit, 503 service unavailable, 504 gateway timeout, network timeouts, connection resets
- **Client errors** (do not retry): 400 bad request, 401 unauthorized, 403 forbidden, 422 unprocessable entity — retrying wastes resources
- **Server errors** (retry with caution): 500 internal server error (sometimes transient), 502 bad gateway
- **Ambiguous errors**: timeouts where the request may have succeeded — require idempotency checks before retrying

### 2. Design the Retry Policy
For each transient error class, define:

- **Max attempts**: Start with 3–5; increase only if the operation is non-critical and idempotent
- **Backoff strategy**:
  - Exponential backoff: `delay = base * 2^attempt` (e.g., 1s, 2s, 4s, 8s)
  - Add jitter: `delay = random(0, base * 2^attempt)` to prevent thundering herd
- **Retry budget**: Cap total retry time (e.g., no more than 30s total) rather than just attempt count
- **Respect `Retry-After` headers**: If the API returns one, use it instead of your own backoff
- **Idempotency requirement**: Only retry if the operation is safe to repeat, or use idempotency keys

### 3. Define Fallback Strategies
Choose one or more based on the operation's criticality:

| Scenario | Fallback Strategy |
|---|---|
| Read operation, stale data acceptable | Return cached response with staleness indicator |
| Write operation, can be deferred | Queue to durable message queue, process async |
| Non-critical enrichment | Return partial response without the enriched data |
| Critical path, no alternative | Fail fast with clear error, surface to user |
| Multiple providers available | Failover to secondary provider |

### 4. Implement the Circuit Breaker
Prevent cascading failures when an API is consistently down:

- **Closed state**: Normal operation; track failure rate over a rolling window (e.g., last 60s)
- **Open state**: Triggered when failure rate exceeds threshold (e.g., >50% of calls in window); reject calls immediately without hitting the API
- **Half-open state**: After a cooldown period (e.g., 30s), allow one probe request; if it succeeds, close the circuit
- Define separate circuits per endpoint or operation type, not one global circuit

### 5. Add Timeout Layers
Set timeouts at every level — never rely on the API to respond in time:

- **Connection timeout**: Time to establish TCP connection (e.g., 3s)
- **Read timeout**: Time to receive first byte after connecting (e.g., 10s)
- **Total request timeout**: Hard cap on the full operation including retries (e.g., 30s)
- **Downstream propagation**: If your service has its own SLA, ensure your timeout + retry budget fits within it

### 6. Design Observability Hooks
Instrument every failure path:

- Log error class, HTTP status, attempt number, elapsed time, and endpoint on every failure
- Emit metrics: error rate by type, retry rate, circuit breaker state transitions, fallback activation count
- Alert on: circuit breaker opening, retry rate exceeding baseline, error rate spike, fall
