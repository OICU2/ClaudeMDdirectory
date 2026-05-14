---
name: service-graceful-shutdown-design
description: >
  Designs graceful shutdown sequences for services to safely drain in-flight requests and release resources without data loss or corruption. Use when someone asks about shutting down a service cleanly, wants to handle SIGTERM gracefully, needs to drain active connections before stopping, or is dealing with data loss on container restarts. Also activates when someone asks how to handle pod termination in Kubernetes or wants zero-downtime deployments.
category: developer
tags: [shutdown, reliability, kubernetes, signals, lifecycle]
author: community
---

# Graceful Shutdown Design

This skill designs complete shutdown sequences for services, covering signal handling, connection draining, resource cleanup, and timeout budgets to prevent data loss or dropped requests during restarts or deployments.

## Shutdown Design Workflow

### 1. Identify Service Context
- Determine runtime environment: bare metal, Docker, Kubernetes, serverless
- Identify the language/framework (Node.js, Go, Python/FastAPI, Java/Spring, etc.)
- Enumerate all open resource types: HTTP connections, DB pools, message queue consumers, caches, file handles, background workers, scheduled jobs

### 2. Map the Signal Chain
- **SIGTERM**: Primary shutdown signal (Kubernetes, Docker, systemd) — begin graceful shutdown
- **SIGINT**: Ctrl+C / interactive — treat same as SIGTERM
- **SIGKILL**: Cannot be caught — set `terminationGracePeriodSeconds` (K8s) or `--stop-timeout` (Docker) to avoid hitting this
- Register signal handlers before the server starts accepting traffic

### 3. Define the Shutdown Sequence
Execute in this strict order:
1. **Stop accepting new requests** — remove from load balancer or close the listening socket
2. **Signal in-flight requests to finish** — set a draining flag; reject new work with `503 Service Unavailable`
3. **Drain active connections** — wait for open HTTP keep-alive connections and WebSockets to close
4. **Stop background workers** — finish the current job iteration, do not start new ones
5. **Flush message queue consumers** — commit offsets (Kafka) or ack/nack pending messages (RabbitMQ/SQS)
6. **Close database connections** — finish active transactions, then close pool
7. **Flush logs and metrics** — ensure telemetry is not lost
8. **Exit with code 0**

### 4. Set Timeout Budgets
- Define a **total shutdown budget** (typically 25–30s for Kubernetes with a 30s grace period)
- Allocate per-phase timeouts so the sum is under the budget:
  - Request draining: 15s
  - Worker/queue draining: 5s
  - DB and connection cleanup: 3s
  - Log flush: 2s
- Force-exit after the budget with `process.exit(1)` or equivalent to avoid zombie processes

### 5. Kubernetes-Specific Considerations
- Set `terminationGracePeriodSeconds` to budget + 5s buffer
- Add a `preStop` hook (sleep 5s) to allow endpoint removal before SIGTERM arrives
- Configure `readinessProbe` to fail immediately on shutdown so traffic stops routing
- Never rely on SIGKILL as the shutdown mechanism

### 6. Validate the Design
- Confirm every resource type identified in Step 1 has a corresponding cleanup step
- Verify timeout sum does not exceed grace period
- Check that the service returns `503` (not `200`) for new requests after shutdown begins
- Ensure idempotent shutdown (calling shutdown twice does not panic or corrupt state)

## Output Format

Produce the following sections in order:

**Shutdown Sequence Diagram** — numbered list showing each phase with its timeout budget and what resource it handles.

**Signal Handler Code Snippet** — language-specific implementation registering SIGTERM/SIGINT, showing the shutdown function call and a force-exit fallback timer.

**Resource Cleanup Checklist** — table with columns: Resource | Shutdown Action | Timeout | Order.

**Kubernetes/Docker Config** — YAML snippet showing `terminationGracePeriodSeconds`, `preStop` hook, and readiness probe changes (if applicable).

**Edge Cases & Risks** — bullet list of 3–5 failure modes specific to the service (e.g., long-running
