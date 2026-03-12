---
name: background-job-queue-design
description: >
  Designs background job processing systems with production-ready configurations for queues, workers, retry logic, and failure handling. Use when someone asks about job queue architecture, wants to set up background processing, needs help with worker concurrency, or is designing retry and dead-letter queue strategies. Also triggers when someone asks about task queues, async job processing, or message broker patterns.
category: developer
tags: [queues, background-jobs, workers, retry-logic, dead-letter-queue, async-processing]
author: community
---

# Background Job Queue Design

This skill designs complete background job processing systems, covering queue topology, worker concurrency, retry policies, and dead-letter handling whenever someone needs async task processing architecture.

## Design Workflow

### 1. Gather Requirements
Ask or infer:
- **Job types**: CPU-bound, I/O-bound, or mixed?
- **Volume**: jobs per second/minute/hour
- **Latency SLA**: how quickly must jobs start after enqueue?
- **Failure tolerance**: acceptable failure rate and max retries
- **Stack**: language, framework, existing infrastructure (Redis, RabbitMQ, Postgres, SQS, etc.)

### 2. Choose Queue Backend
Match backend to requirements:

| Backend | Best For |
|---|---|
| **Redis + BullMQ/Sidekiq** | High throughput, simple setup, sub-second latency |
| **RabbitMQ** | Complex routing, fanout, multi-consumer patterns |
| **AWS SQS** | Managed, serverless, cloud-native workloads |
| **Postgres (pgmq/que)** | Transactional enqueue, existing Postgres stack |
| **Kafka** | Event streaming, replay, ordered processing at scale |

### 3. Define Queue Topology
Design queues by priority and job type:
```
queues:
  critical:    # payments, auth — 1-3 workers, no delay
  default:     # standard jobs — 5-10 workers
  bulk:        # reports, exports — 2-3 workers, lower priority
  scheduled:   # cron-like — 1 worker, polling interval
```
- Separate queues for different SLAs, not job categories
- Use priority queues only when strict ordering is required
- Avoid single-queue designs for mixed workloads

### 4. Configure Worker Concurrency
```
Rules:
- I/O-bound jobs (HTTP calls, DB queries): concurrency = 2–5× CPU cores
- CPU-bound jobs (image processing, encoding): concurrency = CPU cores − 1
- Mixed: start at 2× cores, load test to tune
- Set per-queue worker limits to prevent starvation
- Use process-level workers for CPU-bound; thread/async for I/O-bound
```

### 5. Design Retry Policy
Every job type needs explicit retry configuration:
```yaml
retry_policy:
  max_attempts: 3–5        # never infinite
  backoff: exponential     # base: 2s, cap: 1 hour
  jitter: true             # prevent thundering herd
  retryable_errors:        # allowlist, not blocklist
    - NetworkTimeoutError
    - RateLimitError
  non_retryable_errors:    # fail immediately
    - ValidationError
    - NotFoundError
```
- Log retry attempts with job ID, attempt number, and error
- Emit metrics on retry rate per queue

### 6. Configure Dead-Letter Queue (DLQ)
```
DLQ rules:
- Route jobs here after max_attempts exceeded
- Preserve: original payload, error history, attempt timestamps
- Alert on DLQ depth threshold (e.g., > 10 jobs)
- Build admin UI or CLI to inspect and replay DLQ jobs
- Set DLQ retention: 7–30 days depending on compliance needs
- Never silently discard failed jobs
```

### 7. Add Observability
Required instrumentation:
- **Metrics**: queue depth, job duration, throughput, error rate, retry rate
- **Tracing**: propagate trace IDs from enqueue → execute
- **Logging**: structured logs with `job_id`, `queue`, `attempt`, `duration`, `status`
- **Alerting**: queue depth spike
