---
name: ops-regulatory-deadline-calendar-builder
description: >
  Assembles a structured compliance deadline calendar from applicable regulatory requirements, mapped to responsible owners and lead-time buffers. Use when someone says "we need to track our compliance deadlines," asks about "when our regulatory filings are due," or wants to "build a compliance calendar," "map out our regulatory obligations," or "figure out who owns each compliance requirement." Parses regulatory inputs and produces an actionable, owner-assigned deadline calendar with buffer milestones.
category: operations
tags: [compliance, regulatory, calendar, deadlines, operations]
author: community
---

# Regulatory Deadline Calendar Builder

This skill constructs a structured compliance deadline calendar by mapping regulatory requirements to filing deadlines, responsible owners, and lead-time buffer milestones, and activates whenever someone needs to organize, visualize, or assign ownership over regulatory obligations.

## Workflow

### 1. Gather Regulatory Inputs
Ask the user to provide:
- **Applicable regulations or frameworks** (e.g., SOC 2, GDPR, FDA 510(k), SEC filings, state tax deadlines, OSHA reporting)
- **Jurisdiction(s)** (federal, state, international)
- **Organization type and size** (affects which requirements apply)
- **Fiscal/calendar year basis** (calendar year vs. custom fiscal year)
- **Known owners or departments** (Legal, Finance, HR, IT, Operations)

If the user provides a partial list, surface likely missing obligations based on the stated industry and jurisdiction before proceeding.

### 2. Identify and Validate Deadlines
For each regulatory requirement:
- Extract the **statutory or regulatory due date** (hard deadline)
- Note whether the deadline is **fixed annual**, **rolling**, **event-triggered**, or **recurring periodic**
- Flag any deadlines with **penalty exposure** for lateness
- Identify dependencies (e.g., audit must complete before filing)

### 3. Calculate Lead-Time Buffers
Apply standard buffer milestones working backward from each hard deadline:
- **Draft/preparation start**: 30–90 days prior (scale to complexity)
- **Internal review**: 10–14 days prior
- **Final sign-off**: 5–7 days prior
- **Submission buffer**: 1–2 days prior
Adjust buffer windows when the user specifies tight staffing or external auditor dependencies.

### 4. Assign Responsible Owners
For each deadline:
- Assign a **primary owner** (person or department)
- Assign a **secondary/backup owner**
- Note any **external parties** required (auditors, counsel, regulators)
Use the user-supplied owner list; if gaps exist, prompt the user to confirm ownership before finalizing.

### 5. Validate and Flag Conflicts
- Check for **deadline clustering** (multiple major filings within the same two-week window) and flag resource conflicts
- Identify any **predecessor dependencies** that could cascade delays
- Surface any **upcoming deadlines within 60 days** as high-priority items requiring immediate action

## Output Format

Produce the calendar in three sections:

**Section 1 — Master Deadline Table**
A markdown table with columns:
`Regulation/Requirement | Jurisdiction | Hard Deadline | Frequency | Primary Owner | Secondary Owner | Penalty Risk (Y/N)`

**Section 2 — Buffer Milestone Schedule**
A markdown table with columns:
`Requirement | Preparation Start | Internal Review Due | Sign-Off Due | Submission Buffer | Hard Deadline`
Sort chronologically by Hard Deadline.

**Section 3 — Risk & Conflict Flags**
A bulleted list of:
- Deadlines within 60 days (marked **[URGENT]**)
- Clustered deadline windows requiring resource planning
- Missing owner assignments requiring confirmation
- Any regulatory requirements likely applicable but not yet addressed

Total output length: as long as necessary to be complete; do not truncate rows. If more than 20 deadlines exist, group by quarter in collapsible sections noted with `### Q1`, `### Q2`, etc.
