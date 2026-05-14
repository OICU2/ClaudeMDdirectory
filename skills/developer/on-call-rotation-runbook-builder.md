---
name: on-call-rotation-runbook-builder
description: >
  Generates a structured on-call runbook with escalation paths, alert playbooks, and diagnostic commands for a specific service. Use when someone says "create a runbook for my service," asks to "document our on-call procedures," wants to "build an incident response guide," needs to "set up on-call documentation," or requests "alert playbooks for our team."
category: developer
tags: [on-call, runbook, incident-response, devops, sre]
author: community
---

# On-Call Rotation Runbook Builder

This skill produces a complete, production-ready on-call runbook including escalation procedures, common alert playbooks, and copy-paste diagnostic commands for a named service.

## Runbook Generation Workflow

1. **Collect service context** — If not provided, ask for: service name, primary language/stack, hosting environment (k8s, EC2, Lambda, etc.), monitoring tools in use (PagerDuty, Datadog, Prometheus, etc.), and team size.

2. **Define the runbook structure** — Build the document in this exact order:
   - Service overview (purpose, criticality tier, SLA/SLO targets)
   - On-call contact list with roles (primary, secondary, escalation manager, stakeholder)
   - Escalation policy (time thresholds for each escalation tier, e.g. 15 min → secondary, 30 min → manager)
   - Alert playbooks (one per common alert type)
   - General diagnostic commands
   - Rollback and mitigation procedures
   - Post-incident checklist

3. **Write alert playbooks** — For each alert (target 5–8 common ones based on the stack), include:
   - Alert name and trigger condition
   - Severity level (P1–P4)
   - Immediate triage steps (numbered, imperative)
   - Diagnostic commands with expected output descriptions
   - Resolution steps
   - Escalation trigger (when to escalate and to whom)

4. **Generate diagnostic commands** — Tailor commands to the stated stack. Include commands for:
   - Log inspection (`kubectl logs`, `journalctl`, CloudWatch Logs Insights queries, etc.)
   - Resource utilization checks (CPU, memory, disk, connection pools)
   - Network and dependency health checks (`curl`, `dig`, `nc`, service mesh checks)
   - Database/cache inspection queries
   - Recent deployment verification

5. **Populate escalation matrix** — Create a table mapping alert severity to: response time SLA, who is paged, communication channel, and stakeholder notification requirement.

6. **Add a war room template** — Include a fill-in-the-blank incident channel message template and a status update cadence guide (e.g., every 15 min for P1).

7. **Append a runbook maintenance section** — Specify review cadence (quarterly recommended), owner role, and a change log table.

## Output Format

Produce a single Markdown document with the following structure and approximate length (800–1500 words depending on service complexity):

```
# On-Call Runbook: [Service Name]
**Last Updated:** [Date] | **Owner:** [Team/Role] | **Criticality:** [Tier]

## 1. Service Overview
## 2. On-Call Contacts & Escalation Policy
  - Contact table (Role | Name | Pager Handle | Backup)
  - Escalation timeline diagram (text-based)
## 3. Alert Playbooks
  ### [Alert Name] — [Severity]
  - Trigger | Triage Steps | Commands | Resolution | Escalate If
  (repeat for each alert)
## 4. General Diagnostic Commands
  - Grouped by category with inline comments
## 5. Rollback Procedures
## 6. War Room & Communication Templates
## 7. Post-Incident Checklist
## 8. Runbook Maintenance
  - Review schedule | Owner | Change log table
```

All commands must be in fenced code blocks with the correct language tag. Tables must use GitHub-flavored Markdown. Severity levels must be consistently P1 (critical/revenue impact) through P4 (informational). Placeholder values must use `[BRACKETED_CAPS]` format so engineers can find and replace them quickly.
