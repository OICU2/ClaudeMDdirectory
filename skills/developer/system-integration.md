---
name: system-integration
description: >
  Designs and implements integrations between disparate software systems using APIs, webhooks, message queues, and middleware patterns. Use when someone says "connect these two systems," asks about syncing data between platforms, wants to set up a webhook pipeline, needs to integrate a third-party API, or is building an event-driven architecture between services.
category: developer
tags: [integration, api, webhooks, message-queues, middleware]
author: community
---

# System Integration Skill

This skill guides Claude through designing and implementing robust integrations between software systems, covering API connections, webhook pipelines, message queues, and middleware patterns.

## Integration Workflow

### 1. Clarify Integration Requirements
- Identify source and destination systems (names, versions, protocols)
- Determine data flow direction: unidirectional, bidirectional, or event-driven
- Establish sync strategy: real-time, near-real-time, or batch
- Confirm authentication methods available (OAuth2, API keys, mTLS, HMAC)
- Ask about volume, frequency, and latency tolerances upfront

### 2. Choose the Right Integration Pattern
Select based on requirements:
- **Direct API call**: Low-volume, synchronous, request/response (REST, GraphQL, SOAP)
- **Webhook**: Event-driven push from source to destination; use when source supports outbound hooks
- **Message queue (MQ)**: Decoupled, async, high-volume; use RabbitMQ, SQS, Kafka, or Pub/Sub
- **ETL/pipeline**: Batch transformation; use when data shape differs significantly between systems
- **Middleware/iPaaS**: Use when connecting 3+ systems or needing no-code glue (Zapier, MuleSoft, n8n)
- **CDC (Change Data Capture)**: Database-level sync using Debezium, DMS, or Kafka Connect

### 3. Design the Integration Architecture
- Define the data contract: request/response schema, event payload shape, field mappings
- Identify transformation requirements (field renaming, type coercion, enrichment, filtering)
- Plan error handling strategy: retries with exponential backoff, dead-letter queues, alerting
- Design idempotency: deduplication keys, upsert logic, at-least-once vs exactly-once delivery
- Document rate limits and throttling behavior for each external system

### 4. Implement the Integration
Produce working code with these components:
- **Auth layer**: Token refresh logic, credential storage (env vars or secrets manager)
- **Client wrapper**: Typed API client with timeout, retry, and circuit breaker
- **Payload transformer**: Map source schema to destination schema with validation
- **Error handler**: Catch transient vs permanent failures, log with correlation IDs
- **Webhook receiver** (if applicable): Signature verification, async processing, 200 response within 3s
- **Queue consumer** (if applicable): Visibility timeout handling, batch processing, DLQ routing

### 5. Harden the Integration
- Add structured logging with request/response metadata (never log secrets)
- Implement health check endpoint or monitoring hook
- Write integration tests using recorded fixtures or sandbox environments
- Add alerting for failure rate thresholds and queue depth spikes
- Document rollback procedure and circuit breaker thresholds

## Output Format

Produce all of the following for each integration:

**1. Architecture Decision Record (short)**
- Pattern chosen and why
- Trade-offs acknowledged (e.g., "chose webhook over polling to reduce latency; trade-off is added complexity in signature verification")

**2. Data Contract / Schema**
```json
// Source payload → Transformed destination payload, with field mapping table
```

**3. Implementation Code**
- Language matching the user's stack
- Single file or clearly separated modules (client, transformer, handler)
- Inline comments on non-obvious logic only
- All secrets via environment variables

**4. Error Handling Matrix**
| Error Type | HTTP/Queue Code | Retry? | Action |
|------------|-----------------|--------|--------|
| Rate limit | 429 | Yes, backoff | Wait X seconds |
| Auth failure | 401 | No | Alert + stop |
| Bad payload | 400 | No | DLQ + log |
| Timeout | 408/504 | Yes, 3x | Exponential backoff |

**5.