---
name: service-health-check-endpoint-design
description: >
  Designs standardized health check endpoint contracts for microservices, covering response schemas, dependency probing, and readiness vs. liveness distinctions. Use when someone asks about health check endpoints, wants to design a health API for their service, needs to define readiness or liveness probes, is setting up Kubernetes health checks, or wants to standardize how microservices report their status.
category: developer
tags: [microservices, health-checks, api-design, kubernetes, observability]
author: community
---

# Service Health Check Endpoint Design

This skill generates complete, standardized health check endpoint contracts for microservices, including route definitions, response schemas, dependency probe logic, and clear readiness versus liveness semantics.

## Health Check Design Workflow

### 1. Clarify Service Context
Identify before generating:
- Runtime/framework (Express, FastAPI, Spring Boot, Go net/http, etc.)
- Deployment target (Kubernetes, ECS, bare metal, etc.)
- External dependencies (databases, caches, message brokers, downstream APIs)
- SLA requirements (acceptable probe intervals, failure thresholds)

### 2. Define the Two Required Endpoints

**Liveness — `/health/live`**
- Purpose: Answers "is the process alive and not deadlocked?"
- Must NEVER check external dependencies
- Must respond within 50ms
- Returns 200 if the process is running, 500 if the process is in an unrecoverable state
- State to check: goroutine/thread health, critical background workers, catastrophic memory state

**Readiness — `/health/ready`**
- Purpose: Answers "can this instance serve traffic right now?"
- MUST check all hard dependencies (DB connection, required caches, critical downstream services)
- Returns 200 only when all required dependencies pass
- Returns 503 when any required dependency fails
- Distinguishes between required (blocks readiness) and optional (reported but non-blocking) dependencies

### 3. Design the Response Schema

**Liveness response schema:**
```json
{
  "status": "ok | error",
  "timestamp": "<ISO-8601>",
  "uptime_seconds": 3600
}
```

**Readiness response schema:**
```json
{
  "status": "ok | degraded | error",
  "timestamp": "<ISO-8601>",
  "version": "<semver or commit SHA>",
  "dependencies": {
    "<dependency-name>": {
      "status": "ok | error",
      "latency_ms": 12,
      "required": true,
      "message": "<optional human-readable detail>"
    }
  }
}
```

- `degraded` status: all required deps pass, but one or more optional deps fail — return HTTP 200
- `error` status: one or more required deps fail — return HTTP 503
- Never expose internal stack traces, credentials, or sensitive config in responses

### 4. Specify Dependency Probe Logic
For each dependency, define:
- **Probe type**: ping (TCP connect), query (lightweight read), publish (write round-trip)
- **Timeout**: hard cap per dependency (recommend 2–5s)
- **Circuit behavior**: if a dep has been failing for N consecutive checks, mark as permanently degraded until restart or explicit reset
- **Example probes**:
  - PostgreSQL: `SELECT 1`
  - Redis: `PING`
  - HTTP dependency: `GET /health/ready` with 3s timeout
  - Kafka: metadata fetch for required topic

### 5. Define Kubernetes Probe Configuration
Generate matching probe stanzas:
```yaml
livenessProbe:
  httpGet:
    path: /health/live
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 15
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 2
```
Explain the rationale for each timing value based on the service's startup characteristics.

### 6. Apply Security and Operational Rules
- Health endpoints must NOT require authentication
- Health endpoints must be excluded from rate limiting
- Do NOT return
