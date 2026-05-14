---
name: marketing-meeting-agenda-builder
category: marketing
description: >
  Generates structured weekly or quarterly marketing meeting agendas based on current campaign status, KPIs, and team priorities. Use when someone says "help me plan a marketing meeting," asks about "what to cover in our marketing sync," wants to "build an agenda for the marketing team," needs to "organize a quarterly marketing review," or is "preparing for a campaign status meeting."
tags: [marketing, meetings, agenda, planning, campaigns]
author: community
---

# Marketing Meeting Agenda Builder

This skill creates focused, time-boxed marketing meeting agendas by gathering campaign status, KPIs, and team priorities, then outputting a structured agenda ready to share with stakeholders.

## Workflow

1. **Gather context** — Ask the user for the following if not already provided:
   - Meeting type (weekly sync, monthly review, quarterly planning)
   - Meeting duration (e.g., 30 min, 60 min, 90 min)
   - Active campaigns or initiatives (names, channels, current status)
   - Key metrics or KPIs to review (e.g., leads, CAC, ROAS, pipeline contribution)
   - Blockers, decisions needed, or open issues
   - Team size and attendees (optional, for tailoring depth)

2. **Determine meeting type structure:**
   - **Weekly sync**: Focus on campaign pulse checks, blockers, and next 7-day priorities. Keep items tight and action-oriented.
   - **Monthly review**: Include performance vs. targets, budget pacing, channel breakdowns, and wins/learnings.
   - **Quarterly planning**: Add strategic objectives, budget allocation, campaign roadmap, and team capacity discussion.

3. **Assign time blocks** — Divide total meeting duration across agenda items proportionally. Prioritize high-urgency items early. Reserve the last 5–10 minutes for action items and owners.

4. **Assign owners** — For each agenda item, prompt the user for or infer a DRI (Directly Responsible Individual) label (e.g., "Campaign Manager," "Demand Gen Lead").

5. **Flag missing inputs** — If KPIs or campaign statuses are vague or absent, insert a placeholder and note what data should be pulled before the meeting (e.g., "Pull last week's paid search report from Google Ads dashboard").

6. **Apply best practices:**
   - Lead with data before discussion
   - Separate reporting items from decision items
   - Keep each agenda item to a single clear outcome (review, decide, align, or inform)
   - Avoid open-ended topics without a stated goal

## Output Format

Produce a structured agenda using the following format:

```
MEETING: [Meeting Type] — Marketing Team
DATE: [Date or "TBD"]
DURATION: [X minutes]
FACILITATOR: [Name or "TBD"]
ATTENDEES: [List or "Marketing Team"]

---

AGENDA

[HH:MM – HH:MM] 1. [Agenda Item Title] ([X min]) — Owner: [Name/Role]
   Goal: [One sentence — what we're here to do]
   Inputs needed: [Data, doc, or report to review in advance]

[HH:MM – HH:MM] 2. [Agenda Item Title] ([X min]) — Owner: [Name/Role]
   Goal: [One sentence]
   Inputs needed: [Data or "None"]

... (repeat for all items)

[HH:MM – HH:MM] [LAST SLOT] Action Items & Owners ([X min])
   Goal: Confirm next steps, owners, and deadlines before close

---

PRE-MEETING CHECKLIST
- [ ] [Data or report to pull]
- [ ] [Doc or dashboard to share]
- [ ] [Any async updates to send in advance]

POST-MEETING
Action Items:
| Task | Owner | Due Date |
|------|-------|----------|
| ...  | ...   | ...      |
```

- Length scales with meeting duration: 30-min meetings get 4–5 items; 60-min get 6–8; 90-min get 8–10.
- Use plain text formatting compatible with Slack, Notion, Google Docs, or email.
- If the user requests a specific tool format (e.g., Notion table, Google Doc outline), adapt structure
