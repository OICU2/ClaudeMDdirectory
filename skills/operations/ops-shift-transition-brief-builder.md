---
name: ops-shift-transition-brief-builder
description: >
  Generates structured shift handover briefs that capture open tasks, active incidents, anomalies, and priority items for incoming team members. Use when someone says "I need to hand off my shift," asks for help writing a shift summary, wants to document what the next team needs to know, needs to create an end-of-shift report, or is preparing a turnover brief for an incoming crew.
category: operations
tags: [shift-handover, incident-management, operations, handoff, team-coordination]
author: community
---

# Shift Transition Brief Builder

This skill generates a comprehensive, structured shift handover document that ensures incoming team members have everything they need to continue operations without gaps or dropped context.

## Workflow

1. **Gather shift details** — Ask the user for: shift period (date/time range), team or department name, and outgoing team lead or contact name if not provided.

2. **Collect open tasks** — Prompt the user to list all tasks that were started but not completed, including owner, current status, and next action required.

3. **Capture active incidents** — Ask for any ongoing incidents, outages, or escalations: incident ID or name, severity level, current status, assigned responder, and what action is pending.

4. **Document anomalies and observations** — Ask for anything unusual observed during the shift: system behavior, process deviations, customer issues, or environmental factors that may require monitoring.

5. **Identify priority items** — Ask the user which items are highest priority for the incoming team and what the expected resolution timeline is.

6. **Note scheduled events** — Capture any upcoming deadlines, maintenance windows, meetings, or expected escalations during the next shift.

7. **Record key contacts** — Confirm who to reach for escalation, which vendors or stakeholders are engaged, and any on-call contacts the incoming team should know.

8. **Assemble and format** — Compile all inputs into the structured brief format below. Clarify ambiguous entries before finalizing. Flag any sections where information is missing.

## Output Format

Produce a brief using this exact structure:

---

**SHIFT TRANSITION BRIEF**
**Shift Period:** [Start date/time] → [End date/time]
**Outgoing Team / Lead:** [Name or team identifier]
**Incoming Team / Lead:** [Name or team identifier, if known]
**Brief Prepared:** [Timestamp]

---

**🔴 OPEN INCIDENTS**
| ID / Name | Severity | Status | Owner | Next Action |
|-----------|----------|--------|-------|-------------|
| [entry]   | [P1–P4]  | [status] | [name] | [action] |

---

**🟡 OPEN TASKS**
| Task | Status | Owner | Next Action | Due |
|------|--------|-------|-------------|-----|
| [entry] | [status] | [name] | [action] | [time] |

---

**🔵 ANOMALIES & OBSERVATIONS**
- [Bullet each anomaly with context: what was observed, when, and whether it was resolved or requires monitoring]

---

**⚡ PRIORITY ITEMS FOR INCOMING TEAM**
1. [Highest priority item with brief context]
2. [Second priority]
3. [Continue as needed]

---

**📅 UPCOMING EVENTS / WATCH ITEMS**
- [Scheduled maintenance, deadlines, expected callbacks, or known triggers]

---

**📞 KEY CONTACTS**
| Role | Name | Contact |
|------|------|---------|
| [role] | [name] | [phone/slack/email] |

---

**📝 ADDITIONAL NOTES**
[Any context that does not fit above — decisions made, approvals granted, or situational awareness the incoming team needs]

---

Length should match the complexity of the shift. Sparse shifts produce concise briefs; high-activity shifts produce detailed ones. Every section must appear even if the entry is "None during this shift" — do not omit sections.
