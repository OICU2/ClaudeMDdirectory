---
name: service-ownership-handoff-readiness-checklist
description: >
  Evaluates whether a service is ready to be safely transferred to a new owning team by assessing documentation, runbooks, alerting, and test coverage. Use when someone says a team is taking over a service, asks if a service is ready to hand off, wants to transfer ownership of a microservice, needs to check handoff readiness, or is planning a team migration for a codebase.
category: developer
tags: [documentation, operations, handoff, runbooks, reliability]
author: community
---

# Service Ownership Handoff Readiness Checklist

Audits a service across five critical readiness dimensions and produces a scored checklist that tells the current and incoming team exactly what must be completed before ownership transfer is safe.

## Handoff Readiness Assessment Process

### Step 1: Gather Context
Ask the user (or infer from available files) for:
- Service name and primary language/framework
- Links or contents of: README, architecture docs, runbooks, CI/CD config, alerting config, on-call rotation setup, test suite
- The target receiving team and their familiarity level (new to codebase, new to domain, or both)
- Desired handoff date if known

### Step 2: Evaluate Each Dimension

Score each dimension: ✅ Ready / ⚠️ Partial / ❌ Missing

**1. Documentation**
- README covers: purpose, architecture overview, local setup, environment variables, dependencies
- Architecture diagram exists and is current (check for stale dates or missing components)
- Decision log or ADRs present for non-obvious design choices
- API contracts documented (OpenAPI, protobuf, or equivalent)
- Known limitations and tech debt explicitly listed

**2. Runbooks**
- Runbook exists for every alert that pages on-call
- Each runbook includes: symptom description, diagnostic steps, remediation steps, escalation path
- Runbooks tested or reviewed within last 6 months
- Deployment and rollback procedure documented step-by-step
- Dependency failure procedures documented (what to do if DB, cache, or upstream is down)

**3. Alerting & Observability**
- Alerts exist for: latency, error rate, saturation, and availability (USE/RED signals)
- Alert thresholds reviewed and tuned (not just default values)
- Dashboards exist in monitoring tool (Grafana, Datadog, etc.) covering key metrics
- Logs are structured and queryable; key log lines are documented
- Distributed tracing is instrumented for critical paths
- Runbook links are embedded in alert definitions

**4. Test Coverage**
- Unit test coverage ≥ 70% on critical business logic (note actual % if known)
- Integration tests cover primary workflows and failure scenarios
- End-to-end or contract tests exist for external-facing APIs
- Tests run in CI on every PR with enforced pass requirement
- Load/performance baseline documented so regressions are detectable

**5. Operational Knowledge Transfer**
- At least one shadowing session scheduled (incoming team observes an on-call rotation or incident)
- On-call rotation updated to include incoming team members
- Escalation contacts documented (subject matter experts, vendor support, upstream team contacts)
- Service dependencies mapped and dependency owners identified
- SLOs defined and communicated to incoming team
- Changelog or incident history accessible for the last 90 days

### Step 3: Identify Blockers vs. Recommendations
- **Blocker**: Any ❌ in Runbooks, Alerting, or Operational Knowledge Transfer
- **Blocker**: Documentation ❌ on more than 2 items
- **Blocker**: Test coverage below 50% with no mitigation plan
- **Recommendation**: Any ⚠️ item — flag with suggested remediation action and estimated effort

### Step 4: Generate Remediation Plan
For every Blocker and Recommendation, produce:
- Specific action required
- Who should own it (current team, incoming team, or shared)
- Estimated effort (hours or days)
- Whether it blocks handoff or can be completed post-handoff

## Output Format

Produce a structured report with the following sections:

---
**Service Handoff Readiness Report: [Service Name]**
**Handoff Date Target:** [date or TBD]
**Overall Status:** 🔴
