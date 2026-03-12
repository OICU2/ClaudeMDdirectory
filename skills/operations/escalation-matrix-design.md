---
name: escalation-matrix-design
category: operations
description: >
  Creates a tiered escalation framework defining who owns each issue type, response thresholds, and resolution paths across the organization. Use when someone says "we don't know who handles this," asks about escalation paths or ownership gaps, wants to define incident response tiers, needs to document who to contact when things go wrong, or is building an on-call or escalation policy from scratch.
tags: [escalation, incident-response, operations, ownership, process-design]
author: community
---

# Escalation Matrix Design

This skill builds a structured, tiered escalation matrix that maps issue types to owners, defines response time thresholds per severity level, and documents resolution paths so any team member knows exactly what to do when something goes wrong.

## Escalation Matrix Design Workflow

### 1. Gather Context
Before building the matrix, collect:
- **Organization type**: engineering team, customer support, IT ops, cross-functional, etc.
- **Issue domains**: product bugs, security incidents, infrastructure outages, customer complaints, compliance issues, etc.
- **Team structure**: roles, team names, on-call rotations, and any existing ownership documentation
- **Existing tools**: ticketing system (Jira, PagerDuty, ServiceNow), communication channels (Slack, email, phone)
- **SLA constraints**: any existing contractual or internal response time commitments

If context is missing, ask 3–5 targeted clarifying questions before proceeding.

### 2. Define Severity Tiers
Establish 3–5 severity levels with clear, objective criteria:

| Tier | Label | Criteria Example |
|------|-------|-----------------|
| P0 | Critical | Full outage, data loss, security breach, revenue impact >$X/min |
| P1 | High | Degraded service, major feature broken, >N users impacted |
| P2 | Medium | Partial failure, workaround exists, limited user impact |
| P3 | Low | Minor bug, cosmetic issue, single user affected |
| P4 | Informational | Feature request, question, no service impact |

Criteria must be measurable or observable — avoid vague language like "important" or "urgent."

### 3. Map Issue Types to Owners
For each issue domain identified:
- Assign a **primary owner** (role or team, not individual names)
- Assign a **secondary owner** (backup/escalation target)
- Identify the **executive sponsor** for P0/P1 if applicable
- Note **cross-functional dependencies** (e.g., legal must be looped in for data breaches)

### 4. Define Response and Resolution Thresholds
For each severity tier, specify:
- **Time to acknowledge** (TTAck): when someone must confirm they've seen the issue
- **Time to respond** (TTR): when initial action or update must occur
- **Time to resolve** (TTRes): target for full resolution
- **Escalation trigger**: what condition causes automatic escalation to the next tier (e.g., no acknowledgment within TTAck window)

### 5. Document Escalation Paths
For each tier, write a clear step-by-step path:
1. Issue detected → logged in [tool]
2. Auto-notify [primary owner] via [channel]
3. If no acknowledgment in [X minutes] → notify [secondary owner]
4. If unresolved in [Y minutes] → escalate to [manager/director/VP]
5. For P0/P1 → open war room in [channel], notify [stakeholder list]

### 6. Add Communication Templates
Provide fill-in-the-blank templates for:
- Initial incident notification
- Status update (cadence: every X minutes for P0, every X hours for P1)
- Resolution summary / post-mortem trigger

### 7. Review for Coverage Gaps
Check:
- Every issue domain has at least one owner
- No single point of failure (every owner has a backup)
- After-hours coverage is addressed for P0/P1
- Handoff process between time zones or shifts is defined

---

## Output Format

Produce the following deliverables in order:

**1. Severity Tier Table**
Markdown table with: Tier | Label | Criteria | TTAck | TTR | TTRes | Escalation Trigger

**2. Escalation Matrix
