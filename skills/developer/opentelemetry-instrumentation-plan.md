---
name: opentelemetry-instrumentation-plan
description: >
  Designs a comprehensive distributed tracing and observability instrumentation plan using OpenTelemetry standards. Use when someone asks about adding observability to their services, wants to instrument their application with OpenTelemetry, needs to map out spans and traces across microservices, or is trying to correlate logs metrics and traces. Also activates when someone wants to understand where to add tracing in their codebase or needs a distributed tracing strategy.
category: developer
tags: [opentelemetry, observability, distributed-tracing, instrumentation, monitoring]
author: community
---

# OpenTelemetry Instrumentation Plan

This skill produces a structured instrumentation plan that maps spans, metrics, and log correlation points across services, giving teams a concrete implementation roadmap for OpenTelemetry-based observability.

## Instrumentation Planning Workflow

### 1. Gather Service Context
- Identify all services, their languages/runtimes, and communication protocols (HTTP, gRPC, messaging queues, etc.)
- Note existing logging frameworks, monitoring tools, and any partial instrumentation already in place
- Ask for or infer entry points: API gateways, user-facing endpoints, background jobs, scheduled tasks

### 2. Define Trace Boundaries
- Identify the root span for each user-facing or system-initiated operation
- Map propagation paths: how trace context travels across service calls (W3C TraceContext headers, B3, etc.)
- Flag async boundaries (message queues, event buses) where context injection and extraction are required
- Identify fan-out patterns (parallel calls) that require child span management

### 3. Map Span Coverage
For each service, define:
- **Service entry spans**: incoming HTTP handlers, queue consumers, gRPC server handlers
- **Outbound call spans**: HTTP client calls, database queries, cache operations, external API calls
- **Business logic spans**: meaningful units of work worth tracing (e.g., order processing, payment validation)
- **Error boundaries**: where exceptions should set span status to ERROR and record exception events

### 4. Define Metrics Instrumentation
Specify the following metric types per service:
- **Counters**: request counts, error counts, retries, cache hits/misses
- **Histograms**: request latency, payload sizes, queue processing time
- **Gauges**: active connections, queue depth, thread pool utilization
- Label/attribute strategy: which dimensions to attach (service name, environment, status code, endpoint)

### 5. Log Correlation Strategy
- Inject `trace_id` and `span_id` into all log records within an active span context
- Specify log framework integration: `opentelemetry-instrumentation-logging` (Python), `logback-otel` (Java), etc.
- Define structured log fields that align with OTel semantic conventions
- Map log severity levels to span event annotations where appropriate

### 6. Auto-Instrumentation vs. Manual Instrumentation Decisions
- List libraries/frameworks where auto-instrumentation covers the need (e.g., `opentelemetry-instrumentation-django`, `opentelemetry-instrumentation-express`)
- List gaps where manual spans are required for business logic
- Flag performance-sensitive paths where instrumentation sampling should be considered

### 7. Collector and Export Configuration
- Recommend OTLP exporter configuration (endpoint, protocol: grpc vs http/protobuf)
- Define resource attributes: `service.name`, `service.version`, `deployment.environment`
- Suggest sampling strategy: always-on for dev, tail-based or probabilistic for production
- Identify backend target (Jaeger, Tempo, Honeycomb, Datadog, etc.) and any backend-specific notes

### 8. Prioritization
- Rank instrumentation tasks by observability impact: critical paths first
- Flag quick wins (auto-instrumentation drops) vs. high-effort manual work
- Note any instrumentation that requires code changes vs. configuration-only changes

## Output Format

Produce the plan in the following structure:

---

**Service Inventory Table**
| Service | Language | Protocols | Auto-Instrument Available |
|---------|----------|-----------|--------------------------|
| ...     | ...      | ...       | ...                       |

**Trace Map**
For each service: list root spans, child spans, and propagation points as a numbered or nested list with span names in `code style`.

**Metrics
