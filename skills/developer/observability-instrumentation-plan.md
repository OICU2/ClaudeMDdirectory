---
name: observability-instrumentation-plan
description: >
  Produces a structured tracing, metrics, and logging instrumentation plan for a service or application. Use when someone says "help me instrument this service," asks about "what should I trace or measure," wants to "add observability to my app," needs to "plan monitoring for a new feature," or says "what spans and metrics should I add."
category: developer
tags: [observability, tracing, metrics, logging, instrumentation, opentelemetry]
author: community
---

# Observability Instrumentation Plan

This skill generates a complete instrumentation plan mapping key operations to distributed trace spans, metric counters/histograms, and structured log events for any service or application.

## Instrumentation Planning Workflow

1. **Identify service boundaries and entry points** — List all inbound interfaces (HTTP endpoints, queue consumers, cron jobs, gRPC methods). Each entry point becomes a root span.

2. **Map critical operation paths** — Trace the request lifecycle through the service: external calls, database queries, cache interactions, background jobs, and branching logic. Each discrete operation that can fail, be slow, or has business significance becomes a child span.

3. **Define spans** for each operation:
   - Name using `verb.noun` convention (e.g., `db.query`, `cache.get`, `payment.charge`)
   - List required span attributes (user ID, tenant ID, resource identifiers, operation-specific context)
   - Identify span kind: `SERVER`, `CLIENT`, `PRODUCER`, `CONSUMER`, or `INTERNAL`
   - Note error conditions that should set span status to `ERROR` and record exceptions

4. **Define metrics** for each critical path:
   - **Counters**: operations attempted, succeeded, failed (e.g., `orders.created.total`, `auth.failures.total`)
   - **Histograms**: latency distributions for external calls and expensive operations (e.g., `db.query.duration_ms`)
   - **Gauges**: current queue depth, active connections, cache size where applicable
   - Specify all cardinality-safe labels/dimensions for each metric

5. **Define structured log events** at key moments:
   - Request received / response sent (INFO, include trace ID, status, duration)
   - Business-significant state transitions (INFO, include entity ID and before/after state)
   - External call failures and retries (WARN, include downstream service, error code, attempt number)
   - Unexpected errors and panics (ERROR, include full context and stack reference)
   - Enforce: no PII, secrets, or high-cardinality free-text in log fields

6. **Identify SLI candidates** — Flag which metrics directly support latency, availability, error rate, or throughput SLIs. Note recommended alert thresholds where obvious.

7. **Note instrumentation library recommendations** — Suggest OpenTelemetry SDK, language-specific clients, or existing libraries appropriate to the stack if mentioned.

## Output Format

Produce the plan in the following structure:

---

### Service Overview
One paragraph summarizing the service's role and the instrumentation scope.

### Spans

| Span Name | Kind | Parent | Key Attributes | Error Conditions |
|-----------|------|--------|----------------|-----------------|
| `http.server.request` | SERVER | root | `http.method`, `http.route`, `http.status_code`, `user.id` | status >= 500 |
| `db.query` | CLIENT | handler span | `db.system`, `db.name`, `db.operation`, `db.statement` (sanitized) | query error |
| *(continue for all operations)* | | | | |

### Metrics

| Metric Name | Type | Labels | Description | SLI? |
|-------------|------|--------|-------------|------|
| `http_requests_total` | Counter | `method`, `route`, `status_code` | Total HTTP requests | Yes — error rate |
| `http_request_duration_ms` | Histogram | `method`, `route` | Request latency | Yes — latency |
| *(continue)* | | | | |

### Structured Log Events

| Event | Level | When | Required Fields |
|-------|-------|------|-----------------|
| `request.received` | INFO | Start of every request | `trace_id`, `method`, `route`, `request_id` |
