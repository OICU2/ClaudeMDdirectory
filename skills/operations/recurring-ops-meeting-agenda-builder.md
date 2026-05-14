---
name: recurring-ops-meeting-agenda-builder
description: >
  Builds structured, ready-to-send agendas for recurring operational review meetings by
  consolidating standing topics, open action items, and current KPI status into a single
  coherent document. Use when someone says "put together the agenda for our ops review,"
  asks to "prep for the weekly operations meeting," wants to "pull together our standing
  agenda with action items," needs to "build out the ops sync agenda," or says "get the
  recurring meeting agenda ready."
category: operations
tags: [meetings, agenda, operations, action-items, kpis]
author: community
---

# Recurring Ops Meeting Agenda Builder

This skill generates a complete, structured agenda for recurring operational review meetings by organizing standing topics, surfacing open action items, and incorporating current KPI status into a time-boxed, role-assigned document ready to share with attendees.

## Agenda Construction Workflow

1. **Collect meeting context** — Ask for or confirm: meeting name, cadence (weekly/biweekly/monthly), duration, attendees/roles, and meeting date. If a previous agenda exists, request it to carry forward open items.

2. **Pull standing topics** — Identify the fixed recurring sections this team always covers (e.g., safety, financials, headcount, customer escalations, pipeline, project status). If not provided, prompt the user to list them or offer a default ops review template.

3. **Surface open action items** — Ask for the list of unresolved action items from the prior meeting, including owner and original due date. Mark overdue items explicitly. If none are provided, include a placeholder section with instructions to populate before sending.

4. **Incorporate KPI status** — Request current values for key metrics tracked in this review (e.g., revenue vs. target, on-time delivery %, ticket volume, budget burn). Assign a RAG status (Red/Amber/Green) to each based on thresholds provided or implied. If no data is available, flag each metric as "TBD — owner to update before meeting."

5. **Time-box each section** — Allocate minutes to each agenda item based on total meeting duration. Prioritize: open action items (15–20%), KPI review (25–30%), standing topics (40–50%), new business/AOB (10–15%).

6. **Assign facilitators and owners** — Label each agenda item with the name or role responsible for presenting or leading discussion.

7. **Flag items needing pre-work** — Identify any topics requiring preparation (data pulls, written updates, decisions to be made) and note what is needed and from whom.

## Output Format

Produce a formatted meeting agenda with the following structure:

---

**[Meeting Name] — [Date]**
**Duration:** [X minutes] | **Facilitator:** [Name/Role]
**Attendees:** [List]

---

**PRE-WORK REQUIRED**
- [ ] [Action] — Owner: [Name] — Due: [Date/time before meeting]

---

**OPEN ACTION ITEMS** ([X min])
| # | Action Item | Owner | Due Date | Status |
|---|-------------|-------|----------|--------|
| 1 | [Item] | [Name] | [Date] | 🔴 Overdue / 🟡 In Progress / 🟢 Complete |

---

**KPI SCORECARD** ([X min]) — Led by: [Name/Role]
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| [Metric] | [Target] | [Value] | 🔴 / 🟡 / 🟢 |

---

**STANDING TOPICS**
1. [Topic] ([X min]) — Led by: [Name/Role]
   - Key discussion point or prompt
2. [Topic] ([X min]) — Led by: [Name/Role]

---

**NEW BUSINESS / AOB** ([X min])
- Open floor for items not on agenda

---

**ACTION ITEMS CAPTURED THIS MEETING**
| Action | Owner | Due Date |
|--------|-------|----------|
| [To be populated during meeting] | | |

---

**Next Meeting:** [Date] | **Agenda Due:** [Date]

---

Deliver the agenda as plain markdown suitable for pasting into email, Notion, Confluence, or a
