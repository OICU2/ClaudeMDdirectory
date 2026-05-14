---
name: service-resumption-checklist-builder
description: >
  Generates a structured, prioritized checklist of verification steps required before safely resuming operations after an incident or planned outage. Use when someone says "we're ready to bring the service back up," asks about steps to restore service after downtime, or wants to verify system readiness before ending maintenance mode. Also activates when someone needs a post-incident recovery plan or wants to confirm all systems are healthy before resuming traffic.
category: operations
tags: [incident-response, operations, checklist, service-recovery, outage]
author: community
---

# Service Resumption Checklist Builder

Builds a tailored, phase-ordered verification checklist for safely resuming a service or system after an incident or planned outage, ensuring no critical steps are skipped before traffic or users are restored.

## Checklist Construction Workflow

1. **Gather context before generating** — Ask for the following if not provided:
   - Type of outage (incident vs. planned maintenance)
   - Affected systems or services (e.g., database, API, frontend, third-party integrations)
   - Root cause or change that was made (if known)
   - Environment (production, staging, hybrid)
   - Any regulatory or SLA constraints

2. **Structure the checklist in these mandatory phases:**

   **Phase 1 — Infrastructure Verification**
   - Confirm all affected hosts/containers are running and passing health checks
   - Verify disk, memory, and CPU are within acceptable thresholds
   - Confirm network connectivity between service tiers (database, cache, API, CDN)
   - Check that load balancers and reverse proxies are configured correctly
   - Validate TLS certificates are valid and not expiring within 30 days

   **Phase 2 — Data Integrity**
   - Confirm database is in a consistent, non-corrupted state
   - Verify replication lag is within acceptable bounds (if applicable)
   - Check that any pending migrations have completed successfully
   - Validate backup integrity and confirm a recent backup exists
   - If data was restored, verify row counts or checksums against known-good baseline

   **Phase 3 — Application Readiness**
   - Confirm application startup logs show no fatal errors
   - Verify all required environment variables and secrets are populated
   - Check that dependent services and APIs are reachable and responding
   - Run smoke tests or synthetic transactions against critical user paths
   - Confirm feature flags and configuration are set to intended state

   **Phase 4 — Observability & Alerting**
   - Verify metrics pipelines are ingesting data (Datadog, Prometheus, CloudWatch, etc.)
   - Confirm log aggregation is active and recent logs are visible
   - Check that all critical alerts are active and not silenced
   - Validate dashboards show current data, not stale or missing panels
   - Confirm on-call rotation is active and paged responders are standing down

   **Phase 5 — Traffic Restoration**
   - Notify stakeholders and support teams before restoring traffic
   - Restore traffic gradually (canary or percentage-based rollout if possible)
   - Monitor error rate, latency, and throughput during ramp-up
   - Confirm no spike in 5xx errors or failed transactions
   - Declare service restored and update status page

   **Phase 6 — Post-Resumption**
   - Schedule or assign a post-incident review (PIR/RCA) if incident-related
   - Document timeline, actions taken, and resolution in the incident log
   - Confirm any temporary workarounds or bypasses have been removed or ticketed
   - Notify affected customers or stakeholders per SLA requirements
   - Archive logs and artifacts relevant to the incident

3. **Customize based on context** — Add or remove checklist items based on the specific system type provided. For example:
   - **Database outage**: add replication verification, connection pool reset steps
   - **Kubernetes workload**: add pod readiness probe confirmation, PVC mount validation
   - **Third-party dependency failure**: add vendor status page check, circuit breaker reset
   - **Security incident**: add credential rotation verification, access audit before resumption

4. **Flag blocking vs. advisory items** — Mark each item as:
   - 🔴 **BLOCKING** — must be confirmed before any traffic is restored
   - 🟡 **ADVISORY** — recommended but does not block resumption
   -
