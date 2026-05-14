---
name: api-client-retry-logic-design
category: developer
description: >
  Designs comprehensive retry and exponential backoff strategies for API client integrations,
  including retry limits, jitter configurations, and error classification schemas. Use when
  someone asks about handling flaky APIs, wants to make API calls more resilient, needs to
  configure retry behavior for HTTP clients, or is dealing with rate limiting and transient
  failures. Also activates when someone asks how to avoid thundering herd problems or needs
  to classify which errors should and should not trigger retries.
tags: [api, resilience, retry, backoff, http-client]
author: community
---

# API Client Retry Logic Design

This skill produces a complete retry and backoff strategy specification for API clients, covering attempt limits, delay calculations, jitter, and per-endpoint error classification, activated whenever resilience or fault-tolerance for outbound HTTP calls is needed.

## Retry Strategy Design Process

### 1. Gather Context
Identify from the user's codebase or description:
- HTTP client library in use (axios, fetch, got, requests, HttpClient, etc.)
- Target API(s) and their known rate limit headers (`Retry-After`, `X-RateLimit-*`)
- Current SLA or latency budget for the operation
- Whether calls are user-facing (interactive) or background (batch/async)

### 2. Define Retry Limits Per Endpoint Class

Categorize endpoints and assign max attempts:

| Endpoint Class | Max Attempts | Rationale |
|---|---|---|
| Read (GET, idempotent) | 4–5 | Safe to repeat; low risk |
| Write (POST, non-idempotent) | 2–3 | Risk of duplicate side effects |
| Idempotent Write (PUT/DELETE with key) | 3–4 | Safe if server is idempotent |
| Webhook delivery / async fire-and-forget | 6–8 | High tolerance, background |

### 3. Calculate Backoff Delays

Use **exponential backoff** as the base formula:

```
delay(attempt) = base_delay * (multiplier ^ attempt)
```

Recommended defaults:
- `base_delay`: 500ms (interactive) or 1000ms (background)
- `multiplier`: 2
- `max_delay`: 30s (interactive) or 120s (background)
- Cap: `delay = min(delay(attempt), max_delay)`

Always honor `Retry-After` headers when present — use that value instead of calculated delay.

### 4. Apply Jitter

Prevent thundering herd by adding jitter to every delay:

**Full jitter** (preferred for distributed systems):
```
jittered_delay = random_between(0, delay(attempt))
```

**Decorrelated jitter** (preferred for aggressive backoff):
```
jittered_delay = random_between(base_delay, previous_delay * 3)
```

**Equal jitter** (balanced option):
```
jittered_delay = (delay(attempt) / 2) + random_between(0, delay(attempt) / 2)
```

Default recommendation: **Full jitter** unless the client is the sole consumer of the API.

### 5. Classify Errors as Retryable or Non-Retryable

**Always retry (transient):**
- `408` Request Timeout
- `429` Too Many Requests (respect `Retry-After`)
- `500` Internal Server Error
- `502` Bad Gateway
- `503` Service Unavailable
- `504` Gateway Timeout
- Network errors: `ECONNRESET`, `ETIMEDOUT`, `ENOTFOUND` (DNS transient), connection refused

**Never retry (permanent failures):**
- `400` Bad Request — fix the payload
- `401` Unauthorized — refresh token first, then retry once; else fail
- `403` Forbidden — not a transient issue
- `404` Not Found — resource does not exist
- `405` Method Not Allowed
- `409` Conflict — only retry if explicitly idempotent
- `410` Gone
- `422` Unprocessable Entity — validation failure
- `501` Not Implemented

**Retry with caution (context-dependent):**
- `401` — attempt one token refresh cycle,
