---
name: ops-knowledge-transfer-plan
description: >
  Creates a structured knowledge transfer plan for team members who are departing, transitioning roles, or going on extended leave. Use when someone says "we need to document what Sarah knows before she leaves," asks about offboarding a team member, wants to capture institutional knowledge, needs to plan a handoff for a role transition, or is worried about a single point of failure when someone exits the team.
category: operations
tags: [knowledge-transfer, offboarding, documentation, handoff, succession]
author: community
---

# Ops Knowledge Transfer Plan

This skill generates a comprehensive, time-boxed knowledge transfer plan including documentation tasks, shadowing schedules, and risk prioritization when a team member is departing or transitioning.

## Knowledge Capture Workflow

1. **Identify the departing/transitioning person** — Confirm their role, last day or transition date, and the name of the person receiving the knowledge (if known).

2. **Inventory critical knowledge domains** — Ask or infer the key areas this person owns:
   - Systems and tools they administer or have unique access to
   - Recurring processes they run (daily, weekly, monthly, quarterly)
   - Relationships they manage (vendors, clients, stakeholders)
   - Undocumented tribal knowledge and workarounds
   - On-call or incident response responsibilities

3. **Prioritize by risk** — Classify each knowledge domain:
   - **Critical (P1):** No documented backup; operations break without it
   - **High (P2):** Documented but not practiced by anyone else
   - **Medium (P3):** Known by at least one other person informally
   - **Low (P4):** Fully documented and practiced by others

4. **Build the timeline** — Work backward from the last day, allocating time in three phases:
   - **Week 1–2:** Document P1 and P2 items; create runbooks, access inventories, and process guides
   - **Week 2–3:** Live shadowing sessions for P1 items; receiver observes while departing person narrates
   - **Week 3–Last Day:** Reverse shadowing — receiver drives, departing person reviews and corrects

5. **Define documentation deliverables** — For each P1/P2 domain, specify:
   - What document needs to be created or updated
   - Who writes the first draft (departing person) and who reviews it (receiver)
   - Where it will live (wiki, runbook folder, etc.)
   - Done criteria (e.g., "receiver can execute without assistance")

6. **Schedule shadowing sessions** — Produce a calendar of specific sessions:
   - Name the process being transferred
   - Duration and format (screen share, in-person, async recording)
   - Whether a real event exists to observe or if it must be simulated

7. **Identify gaps and risks** — Flag any P1 items that cannot be fully transferred in the available time and recommend mitigation (e.g., retain on contract, escalate to manager, delay transition).

8. **Assign a knowledge transfer owner** — One person (usually the receiver's manager) is responsible for tracking completion and unblocking delays.

## Output Format

Produce a structured Knowledge Transfer Plan document with the following sections:

**Header**
- Departing person, role, last/transition date
- Receiving person(s) and their role
- Plan owner and created date

**Knowledge Domain Inventory Table**
| Domain | Priority | Owner | Receiver | Status |
|--------|----------|-------|----------|--------|
| (one row per domain) | P1–P4 | | | Not Started / In Progress / Done |

**Phase Timeline**
- Three labeled phases with date ranges and objectives for each

**Documentation Checklist**
- Bulleted list per domain: document name, author, reviewer, location, due date

**Shadowing Schedule**
- Table: Session name | Date | Duration | Format | Lead | Observer | Notes

**Risk Register**
- Any P1 items at risk of incomplete transfer with mitigation actions

**Success Criteria**
- 3–5 measurable statements confirming transfer is complete (e.g., "Receiver has completed the monthly billing close without assistance")

Length: 400–700 words for the full plan. Use tables and bullet points throughout. Avoid prose paragraphs except in the Risk Register and Success Criteria sections.
