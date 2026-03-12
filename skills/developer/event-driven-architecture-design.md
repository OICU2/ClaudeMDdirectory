---
name: event-driven-architecture-design
category: developer
description: >
  Designs event-driven system architectures including event schemas, producer-consumer patterns,
  message broker configuration, and idempotency guarantees. Use when someone asks about designing
  an event-driven system, wants to decouple services using events, needs help with message queues
  or Kafka topics, or is building an async microservices architecture.
tags: [event-driven, architecture, messaging, kafka, microservices]
author: community
---

# Event-Driven Architecture Design

This skill designs complete event-driven architectures — covering event schemas, broker topology, producer/consumer patterns, and reliability guarantees — whenever a user needs to build or refactor a system around asynchronous events.

## Architecture Design Workflow

### 1. Identify Domain Events
- Extract business events from the described domain (e.g., `OrderPlaced`, `PaymentProcessed`, `InventoryReserved`)
- Classify each event: **domain events** (facts that happened), **commands** (intent to act), or **queries** (read-model requests)
- Determine event ownership: which bounded context/service is the authoritative producer

### 2. Define Event Schemas
- Use CloudEvents or a custom envelope with these mandatory fields:
  - `eventId` (UUID v4) — for deduplication
  - `eventType` (string) — namespaced, e.g., `com.shop.order.placed.v1`
  - `source` (URI) — originating service
  - `timestamp` (ISO 8601)
  - `correlationId` — for distributed tracing
  - `version` (semver) — for schema evolution
- Design payload: include all facts needed to process the event without callbacks; avoid embedding entities by reference only
- Specify schema format: Avro (preferred for Kafka), Protobuf, or JSON Schema; register in a schema registry

### 3. Design Producer Patterns
- **Transactional Outbox**: Write events to an outbox table in the same DB transaction as the state change; a relay process publishes to the broker — prevents dual-write failures
- **Event Sourcing** (if applicable): State is derived from the event log; aggregate emits events on every state transition
- Define producer guarantees: `at-least-once` delivery with idempotent consumers (preferred) or `exactly-once` via broker transactions

### 4. Design Consumer Patterns
- Assign each consumer a **consumer group** (Kafka) or **subscription** (Pub/Sub, SNS/SQS)
- Implement **idempotency**: store `eventId` in a processed-events table; skip if already seen
- Define **ordering requirements**: use partition keys (Kafka) or FIFO queues (SQS) for ordered processing per entity
- Handle **poison pills**: dead-letter queue (DLQ) after N retries with exponential backoff (e.g., 1s, 2s, 4s, max 5 retries)
- Apply **consumer competition** for scaling vs. **fan-out** for independent processing pipelines

### 5. Configure Message Broker Topology
For **Kafka**:
- Topic naming: `{domain}.{entity}.{event-type}` (e.g., `payments.transaction.completed`)
- Partition count: based on peak throughput / consumer parallelism; minimum 3 for HA
- Replication factor: 3 for production
- Retention: event-sourcing use cases → indefinite; operational events → 7–30 days
- Enable `enable.idempotence=true` on producers; set `acks=all`

For **RabbitMQ**:
- Use topic exchanges with routing keys matching event types
- Durable queues + persistent messages for reliability
- Set `x-dead-letter-exchange` on all consumer queues

For **AWS SNS/SQS**:
- SNS topic per event type → fan-out to SQS queues per consumer
- Enable SQS long polling; set visibility timeout > max processing time
- Configure DLQ with `maxReceiveCount`

### 6. Address Reliability and Consistency
- **Saga pattern** for distributed transactions: choreography (events trigger next step) or orchestration (central coordinator)
- **Compensating events**: define rollback events for each step in a
