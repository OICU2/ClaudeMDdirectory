---
name: service-recovery-protocol-builder
description: >
  Designs structured, step-by-step recovery procedures for common service failures including escalation paths, customer communication scripts, and resolution timelines. Use when someone says "our service is down and we need a recovery plan," asks about how to handle outages or service disruptions, wants to create incident response procedures, needs escalation workflows for technical failures, or is building runbooks for operations teams.
category: operations
tags: [incident-response, runbooks, escalation, service-reliability, operations]
author: community
---

# Service Recovery Protocol Builder

This skill generates complete, actionable recovery protocols for service failures, producing structured runbooks with detection steps, escalation paths, customer communication templates, and resolution timelines that operations teams can execute immediately.

## Protocol Construction Workflow

**Step 1: Identify the Failure Scenario**
- Capture the service or component affected (e.g., API gateway, database, authentication service, payment processor)
- Determine failure type: full outage, degraded performance, data inconsistency, or partial availability
- Establish blast radius: how many users/systems are impacted and at what severity level (P1/P2/P3/P4)

**Step 2: Define Detection and Triage**
- List specific symptoms that confirm the failure (error codes, metric thresholds, alert names)
- Specify which monitoring tools surface the issue (Datadog, PagerDuty, CloudWatch, etc.)
- Include initial health-check commands or dashboard links the on-call engineer runs first
- Set a triage time limit (e.g., 5 minutes to confirm, 15 minutes to classify severity)

**Step 3: Build the Escalation Path**
- Define who is notified at each severity level with role titles and contact methods
- P1: Immediate page to on-call engineer + engineering lead + VP Engineering within 5 minutes
- P2: Page on-call engineer; escalate to lead if unresolved in 30 minutes
- P3/P4: Ticket created; assigned during business hours
- Include backup contacts for each role and escalation trigger conditions

**Step 4: Write the Recovery Procedure**
- Number every action sequentially — no ambiguous steps
- Include exact commands, config changes, or rollback procedures with placeholders for environment-specific values
- Add decision branches: "If X, go to step 7; if Y, proceed to step 5"
- Specify who owns each step (on-call engineer, DBA, infra team, vendor support)
- Set time-boxed checkpoints: if not resolved in N minutes, execute next escalation or fallback

**Step 5: Draft Customer Communication Scripts**
- Initial acknowledgment (within 15 minutes of confirmed incident): short, factual, no speculation
- Status update template (every 30 minutes during active incident): progress, next update time
- Resolution notice: what happened, what was fixed, steps taken to prevent recurrence
- Tailor tone by channel: status page (neutral/technical), email (empathetic/clear), social (brief/reassuring)

**Step 6: Define Resolution and Post-Incident Actions**
- Specify the criteria that confirm full resolution (all metrics green, error rate below threshold, customer validation)
- List immediate post-resolution checks (cache warm-up, queue drain, data reconciliation)
- Schedule post-mortem within 24–48 hours for P1/P2 incidents
- Identify owner for the post-mortem document and follow-up action tracking

## Output Format

Produce a complete protocol document with the following sections in order:

```
# Recovery Protocol: [Service/Failure Name]
**Severity Level:** P1 / P2 / P3 / P4
**Last Updated:** [Date placeholder]
**Owner:** [Role placeholder]

---

## 1. Failure Signatures
- Symptom 1 (with specific metric or error)
- Symptom 2
- Confirming check: [command or dashboard link]

## 2. Escalation Matrix
| Severity | First Contact | Escalation Trigger | Second Contact |
|----------|--------------|-------------------|----------------|
| P1       | ...          | 5 min no response | ...            |

## 3. Recovery Steps
1. [Specific action] — Owner: [Role] — Time limit: X min
2. [Specific action] — Owner: [Role] — Time limit: X
