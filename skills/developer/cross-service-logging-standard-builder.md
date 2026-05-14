---
name: cross-service-logging-standard-builder
description: >
  Defines a consistent structured logging standard across microservices, specifying required fields, severity levels, and correlation ID propagation rules. Use when someone asks about standardizing logs across services, wants to enforce logging consistency in a distributed system, needs to define a logging contract for microservices, asks how to implement correlation IDs across services, or wants to create a shared logging schema for their platform.
category: developer
tags: [logging, microservices, observability, distributed-systems, structured-logging]
author: community
---

# Cross-Service Logging Standard Builder

This skill generates a complete, opinionated structured logging standard for microservice architectures, including field schemas, severity level definitions, and correlation ID propagation rules, activated when teams need to align logging behavior across multiple services.

## Logging Standard Workflow

### 1. Gather Context
Ask for (or infer from context):
- Primary language/runtime(s) in use (Node.js, Java, Python, Go, etc.)
- Existing log aggregation platform (Datadog, ELK, Splunk, CloudWatch, etc.)
- Number of services and communication style (REST, gRPC, event-driven)
- Any existing logging conventions already in place

### 2. Define the Required Log Schema
Every log entry across all services MUST include these fields:

| Field | Type | Description |
|---|---|---|
| `timestamp` | ISO 8601 string | UTC time of the event |
| `level` | string | Severity level (see below) |
| `service` | string | Service name (e.g., `order-service`) |
| `version` | string | Service version (e.g., `1.4.2`) |
| `correlation_id` | string | UUID4 propagated across the full request chain |
| `trace_id` | string | Distributed trace ID (OpenTelemetry-compatible) |
| `span_id` | string | Current span ID |
| `message` | string | Human-readable description of the event |
| `environment` | string | `production`, `staging`, `development` |
| `host` | string | Hostname or pod name |
| `request_id` | string | Unique ID for the individual HTTP/gRPC request |

Optional but strongly recommended:
- `user_id` — authenticated user identifier (hashed if PII-sensitive)
- `duration_ms` — elapsed time for operations
- `error.type`, `error.message`, `error.stack` — structured error details
- `http.method`, `http.path`, `http.status_code` — for HTTP requests

### 3. Define Severity Levels
Use exactly these five levels (no custom levels):

| Level | When to Use |
|---|---|
| `DEBUG` | Internal state details useful during development only; never enabled in production by default |
| `INFO` | Normal operational events: service start, request received, job completed |
| `WARN` | Recoverable issues or unexpected conditions that did not cause failure |
| `ERROR` | Failures that affect a specific operation but the service remains running |
| `FATAL` | Unrecoverable failures that cause service shutdown |

Rules:
- Log at `INFO` for all successful external calls
- Log at `ERROR` for all 5xx responses and caught exceptions
- Never use `console.log` or print statements as substitutes for structured log entries

### 4. Correlation ID Propagation Rules
- **Origin services** generate a UUID4 `correlation_id` if none is present in the incoming request
- Propagate `correlation_id` via HTTP header: `X-Correlation-ID`
- Propagate via gRPC metadata key: `x-correlation-id`
- Propagate via message queue message headers/attributes for event-driven flows
- Every outbound call (HTTP, gRPC, queue publish) MUST attach the current `correlation_id`
- Log the `correlation_id` on every log line — never only on the first entry
- Never regenerate a `correlation_id` mid-chain; only originate at system entry points (API gateway, consumer entrypoints)

### 5. Enforcement Rules
- Reject log entries missing `correlation_id`, `service`, or `timestamp` at the aggregator level
- Use a shared logging library/wrapper per language rather than configuring each service independently
- Validate log schema in
