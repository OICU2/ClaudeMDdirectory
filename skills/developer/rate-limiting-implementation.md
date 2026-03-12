---
name: rate-limiting-implementation
category: developer
description: >
  Designs and implements rate limiting strategies for APIs and backend services. Use when someone asks about throttling API requests, needs to prevent abuse or overuse of endpoints, wants to implement per-user quotas, or needs to choose between token bucket, sliding window, or fixed window algorithms. Also applies when someone mentions requests being too frequent, needing to enforce usage tiers, or controlling traffic to protect service stability.
tags: [rate-limiting, api, backend, throttling, distributed-systems]
author: community
---

# Rate Limiting Implementation

This skill guides the design and implementation of rate limiting logic for APIs, covering algorithm selection, data structures, storage backends, and enforcement patterns including token bucket, sliding window, and per-user quota management.

## Algorithm Selection

1. **Identify the use case first:**
   - Fixed window: simple counters per time period (e.g., 100 req/min); fast but allows burst at window edges
   - Sliding window log: accurate per-user tracking using timestamps; higher memory cost
   - Sliding window counter: hybrid approach balancing accuracy and memory efficiency
   - Token bucket: allows controlled bursting; ideal for bursty but bounded traffic
   - Leaky bucket: smooths output rate; good for upstream protection

2. **Choose storage backend:**
   - Redis (preferred): atomic operations via Lua scripts or `INCR`/`EXPIRE`; supports distributed deployments
   - In-memory (e.g., Node.js Map, Python dict): single-instance only; use for simple cases or testing
   - Database: avoid for hot-path rate limiting; too slow

## Implementation Steps

1. **Define rate limit dimensions:**
   - Per IP address (unauthenticated endpoints)
   - Per API key or user ID (authenticated endpoints)
   - Per route or resource type
   - Global service-wide limits

2. **Token bucket implementation:**
   ```
   - Store: { tokens: float, last_refill: timestamp }
   - On each request:
     1. Calculate elapsed time since last_refill
     2. Add (elapsed * refill_rate) tokens, cap at bucket_capacity
     3. If tokens >= 1: subtract 1, allow request
     4. Else: reject with 429
   - Use Redis Lua script for atomicity
   ```

3. **Sliding window counter implementation:**
   ```
   - Use two fixed-window counters: current window + previous window
   - Weighted count = prev_count * (1 - elapsed_in_current_window / window_size) + curr_count
   - If weighted count < limit: allow and increment curr_count
   - Else: reject with 429
   ```

4. **Per-user quota enforcement:**
   - Separate daily/monthly quota counters from per-second rate limits
   - Store quota usage in persistent storage (DB) for billing accuracy
   - Use Redis for real-time rate limits; sync to DB asynchronously
   - Expose quota status in response headers

5. **Return correct HTTP responses:**
   - `429 Too Many Requests` on rejection
   - Always include headers:
     - `X-RateLimit-Limit`: max requests allowed
     - `X-RateLimit-Remaining`: requests left in window
     - `X-RateLimit-Reset`: Unix timestamp when window resets
     - `Retry-After`: seconds until client may retry

6. **Handle edge cases:**
   - Clock skew in distributed systems: use server-side timestamps only
   - Redis unavailability: define fail-open vs fail-closed policy explicitly
   - Race conditions: use atomic Redis operations (Lua scripts or pipelines)
   - Graceful degradation: log limit events; alert on abnormal rejection rates

## Middleware Pattern

- Implement as middleware/interceptor before route handlers
- Extract identifier (IP, user ID, API key) early in the request lifecycle
- Short-circuit the request pipeline on rejection — do not proceed to business logic
- Log: identifier, endpoint, limit type, and decision (allow/reject) for observability

## Output Format

Produce the following for each implementation request:

1. **Algorithm recommendation** with 2–3 sentence justification based on the stated use case
2. **Data model** — keys, fields, and TTL strategy for chosen storage backend
3. **Core logic** — pseudocode or working code in the user's language/framework showing the rate limit
