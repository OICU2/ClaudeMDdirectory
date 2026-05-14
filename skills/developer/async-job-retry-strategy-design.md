---
name: async-job-retry-strategy-design
category: developer
description: >
  Designs a robust exponential backoff and dead-letter queue strategy for handling background job failures in asynchronous processing systems. Use when someone asks about retrying failed jobs, wants to handle message queue failures, needs a dead-letter queue setup, is designing background worker resilience, or asks how to prevent job loss in async pipelines.
tags: [async, background-jobs, retry-logic, dead-letter-queue, resilience]
author: community
---

# Async Job Retry Strategy Design

This skill produces a concrete exponential backoff and dead-letter queue (DLQ) strategy for background job systems, and activates when users need to handle transient failures, prevent infinite retry loops, or recover lost jobs in async processing architectures.

## Strategy Design Workflow

### 1. Gather System Context
Ask for or infer:
- Message broker/queue technology (SQS, RabbitMQ, Kafka, Sidekiq, BullMQ, etc.)
- Job types and expected failure modes (transient vs. permanent errors)
- Acceptable latency for retries and maximum job age
- Downstream consumers or SLA requirements

### 2. Define Retry Policy with Exponential Backoff
- Set a **base delay** (e.g., 1–5 seconds) and a **multiplier** (commonly 2x)
- Apply jitter to prevent thundering herd: `delay = base * (2^attempt) + random(0, base)`
- Define a **max retry count** (typically 3–7 attempts depending on job criticality)
- Classify errors: retry only transient errors (network timeouts, rate limits, temporary unavailability); immediately DLQ permanent errors (validation failures, missing records)
- Set a **max delay cap** (e.g., 15–30 minutes) to prevent extreme back-off

**Formula:**
```
delay(attempt) = min(base_delay * (2 ^ attempt) + jitter, max_delay)
```

### 3. Design the Dead-Letter Queue
- Route jobs to DLQ after exhausting all retries or on permanent errors
- Preserve original message payload, error metadata, attempt count, timestamps, and stack trace
- Tag DLQ messages with failure reason category (transient/permanent/unknown)
- Set DLQ message retention to at least 14 days
- Configure DLQ-specific alarms/alerts for monitoring thresholds (e.g., alert if DLQ depth > 10)

### 4. Implement DLQ Recovery Process
- Provide a **manual replay mechanism**: inspect DLQ message, fix root cause, re-enqueue to original queue
- Provide a **bulk replay option** with filtering by error type or time range
- Never auto-replay from DLQ without human review or automated root-cause validation
- Log every replay action with operator identity and timestamp

### 5. Add Observability
- Emit metrics per job type: attempt count, failure rate, DLQ enqueue rate, processing latency
- Create dashboards showing retry queue depth over time
- Set alerts for: retry rate spike, DLQ growth, jobs exceeding max age

### 6. Document Edge Cases
- Idempotency: ensure job handlers are safe to run multiple times (use idempotency keys)
- Poison pills: detect jobs that always fail and fast-track to DLQ after N attempts
- Clock skew and scheduler drift for delay-based queues
- Backpressure handling if retry volume overwhelms workers

## Output Format

Produce the following sections in order:

1. **Retry Policy Table** — Markdown table with columns: Attempt #, Delay (seconds), Cumulative Wait, Notes
2. **Backoff Formula** — Code block with the exact formula and example values filled in for the user's stack
3. **DLQ Configuration Spec** — Bullet list covering queue name, retention, routing rules, alert thresholds, and message schema (fields to preserve)
4. **Recovery Runbook** — Numbered steps for how an operator replays or discards DLQ jobs
5. **Observability Checklist** — Bullet list of metrics, log fields, and alert conditions to implement
6. **Code Snippet (optional)** — If the user's language/framework is known, provide a working retry handler implementation (Node.js/BullMQ, Python/
