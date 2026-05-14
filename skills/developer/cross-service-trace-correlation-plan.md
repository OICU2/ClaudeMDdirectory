---
name: cross-service-trace-correlation-plan
description: >
  Designs a distributed tracing correlation strategy across microservices to connect request spans into end-to-end visibility. Use when someone asks about tracing requests across services, wants to correlate logs between microservices, needs to debug distributed system latency, asks how to implement trace context propagation, or wants to connect spans into a unified request flow.
category: developer
tags: [distributed-tracing, microservices, observability, opentelemetry, correlation]
author: community
---

# Cross-Service Trace Correlation Plan

This skill produces a concrete distributed tracing correlation strategy that connects request spans across microservices into complete end-to-end visibility, activated when users need to instrument, debug, or architect tracing across service boundaries.

## Correlation Strategy Design Process

### 1. Inventory the Service Topology
- Identify all services in the request path (entry point → downstream dependencies)
- Note communication protocols per hop: HTTP, gRPC, message queues (Kafka, RabbitMQ, SQS), async workers
- Flag services that cross trust boundaries (external APIs, third-party SaaS) where headers may be stripped

### 2. Select and Standardize the Trace Context Format
- Default to **W3C TraceContext** (`traceparent`, `tracestate` headers) for HTTP and gRPC — it is vendor-neutral and widely supported
- For message queues: embed `traceparent` in message metadata/headers, not the payload body
- For async/batch jobs: generate a root span at job creation; pass `trace_id` as a job parameter
- Document the chosen format explicitly so all teams align

### 3. Define Span Hierarchy and Naming Conventions
- Root span: created at the entry service (API gateway or first backend service)
- Child spans: created per service boundary crossing, per significant internal operation (DB query, external call, cache hit/miss)
- Naming pattern: `<service>.<operation>` (e.g., `order-service.create_order`, `inventory-service.check_stock`)
- Enforce `service.name`, `service.version`, and `environment` as required span attributes

### 4. Instrument Context Propagation Per Protocol
- **HTTP/gRPC**: Use OpenTelemetry SDK auto-instrumentation where available; verify headers are forwarded by proxies/load balancers (Envoy, Nginx)
- **Kafka/SQS**: Inject context into message headers at produce time; extract at consume time before processing begins
- **Database calls**: Create child spans around queries; include `db.statement` (sanitized), `db.system`, `db.name`
- **Cache layers**: Instrument cache hits and misses as spans with `cache.hit` boolean attribute

### 5. Handle Sampling Strategy
- Use **head-based sampling** at the root service with a consistent rate (e.g., 10% baseline, 100% for errors)
- Propagate the sampling decision downstream via `traceparent` flags — never re-sample mid-trace
- Add **tail-based sampling** rules for high-latency or error traces if using a collector (e.g., OpenTelemetry Collector, Jaeger)

### 6. Centralize Collection and Correlation
- Route all spans to a single collector pipeline (OpenTelemetry Collector recommended) before forwarding to backend (Jaeger, Zipkin, Tempo, Datadog, Honeycomb)
- Ensure `trace_id` is also injected into structured logs (`"trace_id": "<value>"`) so logs and traces correlate in the observability platform
- Add `span_id` to log lines emitted within a span's scope

### 7. Validate End-to-End Connectivity
- Generate a test request and verify the full trace appears in the backend with no orphaned spans
- Check for broken trace links: orphaned spans indicate a missing propagation step
- Confirm P95/P99 latency attribution is correctly distributed across services in flame graphs

## Output Format

Produce a structured plan with the following sections:

**1. Service Topology Diagram** (ASCII or list format)
- Show each service, the protocol connecting them, and which services are already instrumented

**2. Propagation Specification Table**
| Hop | From Service | To Service | Protocol | Propagation Method | Context Key |
|-----|-------------|------------|----------
