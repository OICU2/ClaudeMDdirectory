---
name: platform-scalability-engineering
description: >
  Designs and implements horizontally scalable system architectures for platforms under increasing load.
  Use when someone says "our system can't handle traffic spikes," asks about scaling infrastructure,
  wants to design for high availability, needs to eliminate bottlenecks, or is planning for 10x user growth.
category: developer
tags: [scalability, distributed-systems, architecture, infrastructure, performance]
author: community
---

# Platform Scalability Engineering

This skill designs and implements horizontal scaling strategies, identifies bottlenecks, and produces concrete architecture plans for systems that must grow under load.

## Scalability Engineering Workflow

### 1. Assess Current Architecture
- Identify stateful vs stateless components
- Map all single points of failure (databases, caches, queues, auth services)
- Determine current scaling limits: connections, memory, CPU, I/O
- Classify bottlenecks: CPU-bound, I/O-bound, network-bound, or lock-contention

### 2. Define Scaling Requirements
- Establish target RPS, concurrent users, and p99 latency SLOs
- Identify read-heavy vs write-heavy workload patterns
- Determine data consistency requirements (strong vs eventual)
- Clarify geographic distribution needs

### 3. Design Horizontal Scaling Strategy

**Stateless Application Tier**
- Externalize all session state to Redis or a distributed cache
- Use connection pooling (PgBouncer for Postgres, ProxySQL for MySQL)
- Place stateless services behind a load balancer (round-robin, least-connections, or consistent hash)
- Package services as containers with health check endpoints

**Data Tier**
- Implement read replicas for read-heavy workloads; route reads via application logic or proxy
- Apply database sharding by tenant ID, user ID range, or hash key when write throughput is the bottleneck
- Introduce a caching layer (Redis/Memcached) for hot-path queries with explicit TTL and invalidation strategy
- Use CQRS to separate read and write models when query patterns diverge

**Async & Queue-Based Decoupling**
- Move non-critical synchronous calls to async workers (Celery, BullMQ, SQS consumers)
- Apply backpressure: set queue depth limits and dead-letter queues
- Use event streaming (Kafka, Kinesis) when consumers must replay or fan out events

**Infrastructure Layer**
- Define autoscaling policies: scale out at 60% CPU/memory, scale in at 30% with cooldown periods
- Use a CDN to offload static assets and cacheable API responses
- Implement circuit breakers (Hystrix, resilience4j) between services to prevent cascade failures
- Deploy across multiple availability zones with active-active or active-passive failover

### 4. Eliminate Specific Bottlenecks

| Symptom | Root Cause | Solution |
|---|---|---|
| DB CPU spikes | Missing indexes, N+1 queries | EXPLAIN ANALYZE, add composite indexes, eager load |
| Connection exhaustion | No pooling | PgBouncer in transaction mode |
| Hot cache keys | Uneven key distribution | Key hashing, local L1 cache, jitter on expiry |
| Slow deploys under load | Rolling restart gaps | Blue-green or canary deployment |
| Write throughput ceiling | Single primary DB | Sharding or CQRS with write-optimized store |

### 5. Validate and Observe
- Define load tests using k6, Locust, or Gatling targeting 2x expected peak
- Set up dashboards for: RPS, error rate, p50/p95/p99 latency, queue depth, DB connection count
- Implement distributed tracing (OpenTelemetry) to surface slow spans across services
- Establish runbooks for scale-out events and degraded-mode operation

## Output Format

Produce a scalability design document with these sections:

1. **Bottleneck Diagnosis** — numbered list of identified constraints with evidence or reasoning
2. **Target Architecture Diagram** — ASCII or Mermaid diagram showing components, data flows, and scaling boundaries
3. **Scaling Plan** — ordered implementation steps with estimated impact per step (High/Medium/Low)
4. **Configuration Snippets** — concrete code or config for the 2-3 highest-impact