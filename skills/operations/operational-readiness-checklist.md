---
name: operational-readiness-checklist
description: >
  Generates structured pre-launch or pre-change readiness checklists that verify all operational
  prerequisites, approvals, and rollback plans are in place before deployment. Use when someone says
  "are we ready to deploy", asks about launch readiness, wants to verify a change is safe to ship,
  needs to confirm production prerequisites, or is preparing for a go/no-go decision.
category: operations
tags: [deployment, readiness, checklist, operations, launch]
author: community
---

# Operational Readiness Checklist

Generates a comprehensive go/no-go checklist for deployments, releases, or operational changes by evaluating prerequisites, approvals, risks, and rollback plans.

## Checklist Generation Workflow

1. **Identify the change type** — Determine if this is a software deployment, infrastructure change, database migration, configuration update, or feature flag rollout. Ask if not stated.

2. **Assess scope and risk** — Establish the blast radius: which systems are affected, what user traffic is impacted, and what the criticality level is (low/medium/high/critical).

3. **Build the checklist in these mandatory sections:**

   **Pre-Change Prerequisites**
   - All required code reviews completed and approved
   - CI/CD pipeline passing (build, unit tests, integration tests)
   - Security scan completed with no blocking findings
   - Dependency versions pinned and verified
   - Environment variables and secrets confirmed in target environment
   - Infrastructure capacity verified (CPU, memory, disk, connection limits)

   **Approvals & Signoffs**
   - Engineering lead approval obtained
   - Product owner sign-off for user-facing changes
   - Security review completed (if applicable)
   - Change Advisory Board (CAB) approval (if required by org policy)
   - On-call engineer notified and available during deployment window

   **Observability Readiness**
   - Monitoring dashboards identified and bookmarked
   - Alert thresholds reviewed and confirmed active
   - Log aggregation confirmed flowing to correct environment
   - Error tracking (e.g., Sentry, Datadog) verified for new service version
   - Baseline metrics captured pre-change for comparison

   **Rollback Plan**
   - Rollback procedure documented step-by-step
   - Rollback tested in staging or confirmed executable
   - Rollback time estimate provided (must be under defined SLA)
   - Data migration reversibility confirmed (or acknowledged as irreversible)
   - Feature flags or kill switches identified if applicable

   **Communication Plan**
   - Stakeholders notified of deployment window
   - Customer-facing status page update plan defined (if applicable)
   - Incident response contacts listed and reachable
   - Post-deployment verification owner assigned

   **Post-Deployment Validation**
   - Smoke test steps defined
   - Success criteria stated with measurable thresholds (e.g., error rate < 0.1%)
   - Soak period duration defined before marking deployment complete
   - Rollback trigger conditions explicitly stated

4. **Flag blockers** — Mark any incomplete or unknown items as `🔴 BLOCKING` vs. items that are optional or informational as `🟡 RECOMMENDED`.

5. **Issue a readiness verdict** — Based on the checklist state, conclude with GO, NO-GO, or CONDITIONAL GO with specific conditions required to proceed.

## Output Format

Produce a structured markdown document with the following layout:

```
## Operational Readiness Checklist — [Change Name]
**Date:** [date]
**Change Type:** [type]
**Risk Level:** [Low / Medium / High / Critical]
**Deployment Window:** [time or TBD]

---

### ✅ Pre-Change Prerequisites
- [ ] [item] — [status or note]

### ✅ Approvals & Signoffs
- [ ] [item] — [owner]

### ✅ Observability Readiness
- [ ] [item]

### ✅ Rollback Plan
- [ ] [item]

### ✅ Communication Plan
- [ ] [item]

### ✅ Post-Deployment Validation
- [ ] [item]

---

### 🔴 Blocking Items
[List any unresolved blocking items]

### Readiness Verdict
**[GO / NO-GO / CONDITIONAL GO
