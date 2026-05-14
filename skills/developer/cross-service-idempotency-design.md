---
name: cross-service-idempotency-design
description: >
  Designs idempotency keys and retry-safe operation patterns for distributed systems to prevent duplicate side effects. Use when someone asks about preventing duplicate charges, handling retry storms, making API calls safe to repeat, designing idempotent endpoints, or building fault-tolerant service integrations.
category: developer
tags: [distributed-systems, idempotency, reliability, api-design, microservices]
author: community
---

# Cross-Service Idempotency Design

This skill designs idempotency keys, retry-safe patterns, and deduplication strategies for distributed service calls when Claude detects risk of duplicate side effects.

## Idempotency Design Workflow

### 1. Classify Operations by Safety Profile
- **Naturally idempotent**: GET, DELETE-by-ID, PUT with full replacement — no key needed
- **Requires idempotency key**: POST (payments, emails, orders), any operation with money/state mutation
- **Non-idempotent by nature**: counter increments, log appends — redesign as upserts or use deduplication windows

### 2. Design the Idempotency Key
Generate keys that are:
- **Client-controlled**: caller generates the key before the first attempt (UUID v4 or deterministic hash)
- **Deterministic for business operations**: `sha256(user_id + operation_type + business_context)` — same intent always produces same key
- **Scoped**: include service name, environment, and version to prevent cross-context collisions
- **Time-bounded**: keys expire after 24–48 hours unless the operation requires permanent deduplication

Key format template:
```
{service}:{operation}:{client_id}:{idempotency_token}
```
Example: `payment-svc:charge:usr_123:idem_a3f9b2c1`

### 3. Server-Side Deduplication Logic
Implement in this order:
1. **Check deduplication store** (Redis, DB) before executing — return cached response if key exists
2. **Lock on key** (optimistic or pessimistic) to block concurrent duplicate requests
3. **Execute operation** and atomically store result with the key
4. **Set TTL** on the stored result matching the key expiration window
5. **Return same response** for all duplicates — including same HTTP status code, not just 200

### 4. Retry-Safe Client Patterns
- Always attach the **same idempotency key** on every retry of the same logical operation
- Use **exponential backoff with jitter**: `min(cap, base * 2^attempt) + random(0, base)`
- Retry only on **transient errors**: 429, 500, 502, 503, 504 — never retry 400, 401, 403, 409
- Set a **retry budget**: maximum 3–5 attempts with a total timeout ceiling
- On **409 Conflict** (key collision with different payload): generate a new key and treat as a new operation

### 5. Multi-Step Saga Idempotency
For operations spanning multiple services:
- Assign one **root idempotency key** to the entire saga
- Derive **child keys** per step: `sha256(root_key + step_name)`
- Store saga state transitions atomically with step keys
- On resume after failure: replay from last confirmed step using child keys — already-completed steps return cached results

### 6. Common Pitfalls to Fix
| Antipattern | Fix |
|---|---|
| Server generates the key | Move key generation to the client before first call |
| Key scoped to request ID | Key must be scoped to logical business operation |
| Different response on retry | Cache full response object, not just success flag |
| No expiry on keys | Always set TTL; clarify business deduplication window |
| Retrying on 400 errors | 400 means bad input — retrying won't fix it |

## Output Format

Produce a structured design document with these sections:

**1. Operation Safety Audit** — table listing each operation, its mutability class, and whether an idempotency key is required

**2. Key Schema** — exact key format with field definitions, example values, and TTL policy

**3. Deduplication Flow** — numbered pseudocode or sequence diagram (text-based) showing
