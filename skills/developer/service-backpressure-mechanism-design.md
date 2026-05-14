---
name: service-backpressure-mechanism-design
description: >
  Designs backpressure handling strategies for high-throughput services to prevent queue overflow and cascading failures under load. Use when someone asks about handling traffic spikes, wants to prevent queue buildup in their service, is dealing with downstream service overload, needs to stop cascading failures across microservices, or wants to implement load shedding in a distributed system.
category: developer
tags: [backpressure, distributed-systems, resilience, queuing, load-shedding]
author: community
---

# Service Backpressure Mechanism Design

This skill designs concrete backpressure strategies for high-throughput services, producing architecture decisions, implementation patterns, and configuration values tailored to the user's stack and traffic profile.

## Backpressure Design Workflow

### 1. Gather Service Context
Ask for or infer:
- Service role (producer, consumer, intermediary)
- Transport layer (HTTP, gRPC, message queue, TCP stream)
- Current queue/buffer implementation (in-memory, Redis, Kafka, RabbitMQ, etc.)
- Expected throughput (requests/sec or messages/sec) and burst multiplier
- Downstream dependencies and their SLAs
- Acceptable latency budget and error tolerance (fail fast vs. retry)

### 2. Identify Backpressure Point
Determine where pressure must be applied:
- **Source throttling**: slow producers directly (pull-based preferred over push)
- **Ingestion layer**: rate-limit at API gateway or load balancer
- **Queue boundary**: cap queue depth and reject or pause intake when exceeded
- **Worker pool**: limit concurrency and signal upstream when pool is saturated
- **Downstream caller**: propagate backpressure signals (HTTP 429, gRPC RESOURCE_EXHAUSTED, NACK) back through the call chain

### 3. Select Primary Mechanism
Choose based on transport and topology:

| Scenario | Recommended Mechanism |
|---|---|
| HTTP API under spike | Token bucket rate limiter + 429 with Retry-After header |
| Internal gRPC service | Flow control via gRPC window size + RESOURCE_EXHAUSTED propagation |
| Kafka consumer lag | Consumer pause/resume API triggered by lag threshold |
| RabbitMQ queue | `basic.qos` prefetch count + NACK with requeue=false at saturation |
| In-process async queue | Bounded blocking queue (capacity = worker_count × buffer_factor) |
| Pub/sub fan-out | Subscriber-side admission control with dead-letter queue |

### 4. Define Load Shedding Policy
Specify what happens when backpressure cannot be absorbed:
- **Priority shedding**: drop lowest-priority work first (define priority tiers)
- **Probabilistic shedding**: reject with probability proportional to overload ratio
- **Tail drop vs. head drop**: for queues, choose which end to drop from
- **Circuit breaker integration**: open circuit after N consecutive rejections to stop pressure propagation
- **Graceful degradation path**: define reduced-functionality response when shedding occurs

### 5. Set Concrete Thresholds
Provide specific values, not ranges:
- Queue depth limit = `(avg_processing_time_ms × target_throughput_rps) × 1.5`
- Rate limit = `p95_sustainable_rps` measured under normal load
- Worker pool size = `(target_throughput × avg_latency_sec) + 20% headroom` (Little's Law)
- Circuit breaker: open at 50% error rate over 10-second window; half-open after 30 seconds
- Retry-After header value = `queue_drain_time_estimate_sec`

### 6. Design Observability Hooks
Specify metrics to emit:
- `queue.depth` (gauge, sampled every 1s)
- `backpressure.rejected_total` (counter, labeled by reason)
- `backpressure.active` (gauge, 0 or 1, for alerting)
- `worker.saturation` = active_workers / max_workers (gauge)
- Alert threshold: page when `queue.depth > 80%` of limit for > 60 seconds

### 7. Validate Against Failure Modes
Check the design against:
