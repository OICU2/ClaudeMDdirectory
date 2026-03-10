---
name: microservices-architecture
description: >
  Designs and builds loosely coupled microservices systems that scale independently. Use when someone wants to break a monolith apart, asks about service boundaries or domain decomposition, needs to design inter-service communication, wants to implement an event-driven architecture, or is building a distributed system from scratch.
category: developer
tags: [microservices, distributed-systems, architecture, api-design, scalability]
author: community
---

# Microservices Architecture

This skill guides Claude to design production-ready microservices architectures with clear service boundaries, communication patterns, and operational concerns addressed from the start.

## Architecture Design Process

### 1. Define Service Boundaries
- Apply Domain-Driven Design: identify bounded contexts before drawing service lines
- One service owns one business capability (e.g., `order-service`, `inventory-service`, `payment-service`)
- Services own their data — no shared databases; each service has its own datastore
- Size heuristic: a service should be rewritable by one team in two weeks
- Flag any proposed service that requires synchronous calls to more than two other services — redesign the boundary

### 2. Choose Communication Patterns
- **Synchronous (REST/gRPC):** use only for real-time queries where the caller needs an immediate response
- **Asynchronous (events/messages):** use for state changes, cross-domain workflows, and anything that can tolerate eventual consistency
- Define an event schema contract (e.g., CloudEvents) for all published events
- Implement the Saga pattern for distributed transactions — never use two-phase commit
- Use an API Gateway for all external-facing traffic; never expose internal services directly

### 3. Design for Failure
- Every service must implement circuit breakers (Hystrix, Resilience4j, or equivalent)
- Define retry policies with exponential backoff and jitter
- All inter-service calls must have timeouts — no open-ended waits
- Design for idempotency on all message consumers and mutating API endpoints
- Use the outbox pattern to guarantee at-least-once event delivery

### 4. Data Management
- Assign one primary datastore per service (choose the right tool: relational, document, key-value, time-series)
- Expose data to other services only via API or events — never via direct DB access
- Use CQRS where read and write load profiles differ significantly
- Handle schema evolution with backward-compatible changes; version breaking changes

### 5. Operational Readiness
- Each service must expose `/health` (liveness) and `/ready` (readiness) endpoints
- Structured JSON logging with a correlation/trace ID propagated across all service calls
- Emit RED metrics per service: Rate, Errors, Duration
- Use distributed tracing (OpenTelemetry) from day one
- Each service ships its own Dockerfile and deploys independently via CI/CD

## Output Format

Produce the following artifacts in order:

1. **Service Inventory Table** — Markdown table with columns: Service Name | Responsibility | Datastore | Publishes Events | Consumes Events

2. **Architecture Diagram (text)** — ASCII or Mermaid `graph LR` diagram showing services, API Gateway, message broker, and datastores with labeled communication style (sync/async) on each edge

3. **Service Contract Stubs** — For each service, provide:
   - REST endpoints (method + path + one-line description) OR gRPC service definition
   - Event schemas (name, key fields, publisher, consumers)

4. **Technology Recommendations** — Bulleted list mapping each concern (API gateway, message broker, service mesh, observability) to a concrete tool choice with a one-line justification

5. **Risk Register** — Markdown table with columns: Risk | Likelihood | Impact | Mitigation — minimum 4 rows covering the highest-priority distributed systems pitfalls for this specific design

Keep total output under 600 lines. Prioritize completeness of structure over exhaustive code samples.