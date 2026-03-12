---
name: webhook-integration-setup
description: >
  Builds production-ready webhook endpoints with full validation, security, and reliability features.
  Use when someone says "set up a webhook," asks about receiving webhook payloads, wants to integrate
  with a third-party service via webhooks, needs to verify webhook signatures, or wants to handle
  webhook retries and failures.
category: developer
tags: [webhooks, api, security, backend, integrations]
author: community
---

# Webhook Integration Setup

This skill generates complete webhook endpoint implementations including payload validation, HMAC signature verification, idempotency handling, and retry-safe logic — used whenever a user needs to receive and process external HTTP callbacks reliably.

## Webhook Implementation Workflow

### 1. Clarify Requirements
Before generating code, confirm:
- Which service is sending the webhook (Stripe, GitHub, Twilio, custom, etc.)
- Language/framework in use (Express, FastAPI, Rails, etc.)
- Where secrets are stored (env vars, secrets manager)
- Whether idempotency is required (avoid duplicate processing)

### 2. Signature Verification
Always implement signature verification first — reject unverified requests before any processing:
- Use the service's documented algorithm (typically HMAC-SHA256)
- Compare signatures using constant-time comparison (`hmac.compare_digest` or equivalent) to prevent timing attacks
- Read the raw request body before any parsing — parsers mutate the buffer
- Return `401` for invalid signatures, never `400` or `200`

Example pattern (Node.js/Express):
```js
const rawBody = req.rawBody; // must be captured before json() middleware
const sig = req.headers['x-signature-256'];
const expected = 'sha256=' + crypto
  .createHmac('sha256', process.env.WEBHOOK_SECRET)
  .update(rawBody)
  .digest('hex');
if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
  return res.status(401).send('Invalid signature');
}
```

### 3. Payload Validation
After signature check, validate the payload structure:
- Parse JSON and validate required top-level fields
- Check `event` or `type` field exists and is a known value
- Validate timestamps are recent (reject events older than 5 minutes to prevent replay attacks)
- Return `400` with a descriptive message for malformed payloads

### 4. Idempotency Handling
Webhooks are delivered at-least-once — implement deduplication:
- Extract the unique event ID from the payload header or body (e.g., `X-Request-Id`, `event.id`)
- Check against a short-lived store (Redis, DB table, in-memory cache with TTL)
- If already processed, return `200` immediately — do not reprocess
- Store the event ID after successful processing, not before

### 5. Respond Fast, Process Async
- Return `200 OK` within 3–5 seconds or the sender will retry
- Offload heavy processing to a background queue (BullMQ, Celery, Sidekiq, etc.)
- Acknowledge receipt immediately: `res.status(200).json({ received: true })`
- If a queue is unavailable, return `503` so the sender retries later

### 6. Retry Logic Awareness
Handle retries gracefully on your side:
- All business logic must be idempotent (safe to run twice)
- Log each event with its ID, type, timestamp, and processing result
- On processing failure, return `500` — this signals the sender to retry
- Return `200` only when the event is durably accepted (queued or processed)

### 7. Error Handling & Logging
- Wrap the entire handler in try/catch
- Log failures with full context: event type, ID, error message, stack trace
- Never expose internal error details in the HTTP response body
- Set up alerts for sustained `5xx` rates on the webhook endpoint

## Output Format

For each webhook integration, produce the following:

**1. Endpoint Handler** (complete, runnable code file)
- Full route handler with signature verification, validation, idempotency check, async dispatch, and error handling
- All security steps present and in the correct order

**2. Environment Variables List**
```
WEBHOOK_SECRET=        # signing
