---
name: shift-handover-report-generation
description: >
  Generates structured shift handover reports that summarize open issues, completed tasks, and critical alerts for operational continuity. Use when someone says "create a handover report," asks to "summarize the shift," wants to "brief the incoming team," needs to "document end-of-shift status," or requests a "shift transition summary." Ensures nothing critical is missed between operational team transitions.
category: operations
tags: [shift-handover, reporting, operations, incident-management, continuity]
author: community
---

# Shift Handover Report Generation

This skill produces a complete, structured shift handover report that captures critical alerts, open issues, completed work, and key actions for the incoming team — activated whenever a user needs to formally transition operational responsibility between shifts.

## Workflow

1. **Gather shift details** — Ask for (or extract from provided context): shift date, start/end time, outgoing team/person name, incoming team/person name, and operational area or system scope.

2. **Collect incident and alert data** — Request or identify: any active incidents with severity level and current status, triggered alerts and whether they were resolved or remain open, and any ongoing escalations or tickets.

3. **Document completed tasks** — List work finished during the shift, including ticket IDs or references, actions taken, and outcomes achieved.

4. **Identify open and pending items** — Capture tasks not yet completed, issues actively being investigated, dependencies waiting on third parties, and any items explicitly deferred to the next shift.

5. **Extract critical handover notes** — Highlight anything the incoming team must know immediately: system degradations, customer-impacting issues, scheduled maintenance windows, or time-sensitive actions required within the next 1–2 hours.

6. **Define required actions for incoming team** — List concrete next steps with priority (P1/P2/P3), owner if known, and any deadlines or SLA considerations.

7. **Confirm completeness** — Before finalizing, check that every open issue has a status, every critical alert has a resolution note or escalation path, and no ambiguous items are left without context.

## Output Format

Produce a Markdown report with the following exact sections:

```
# Shift Handover Report
**Date:** [Date]
**Shift:** [Start Time] – [End Time]
**Outgoing:** [Name/Team]
**Incoming:** [Name/Team]
**Environment/Scope:** [System, region, or service area]

---

## 🔴 Critical Alerts & Active Incidents
| ID | Description | Severity | Status | Action Needed |
|----|-------------|----------|--------|---------------|
| [ticket/alert ID] | [brief description] | P1/P2/P3 | Open/Monitoring/Escalated | [specific next action] |

---

## ✅ Completed This Shift
- [Task/ticket ID]: [What was done and outcome]
- [Task/ticket ID]: [What was done and outcome]

---

## 🟡 Open & Pending Items
| Item | Status | Owner | Notes |
|------|--------|-------|-------|
| [description] | [In Progress/Blocked/Pending] | [name or team] | [context] |

---

## 📋 Required Actions for Incoming Team
1. [P1] [Specific action] — Due by [time or SLA deadline]
2. [P2] [Specific action] — [context]
3. [P3] [Specific action] — [context]

---

## 📝 Additional Notes
[Any system behaviors, workarounds in place, stakeholder communications sent, or upcoming scheduled events the incoming team should know about.]

---
*Report generated: [timestamp] | Verified by: [outgoing team member]*
```

- Keep each entry concise: one to two lines maximum per item.
- Flag any item without a clear owner or next action with `⚠️ NEEDS OWNER`.
- If severity or status is unknown, prompt the user to clarify before finalizing.
- Total report length should be scannable in under two minutes by an incoming operator.
