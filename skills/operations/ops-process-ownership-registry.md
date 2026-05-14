---
name: ops-process-ownership-registry
description: >
  Builds a structured registry that maps every operational process to an accountable owner, review cadence, and last-updated date. Use when someone says "we don't know who owns this process," asks about creating a process inventory, or wants to track operational accountability. Also activates when someone needs to audit process documentation, establish review schedules, or answer "who is responsible for X."
category: operations
tags: [process-ownership, operations, accountability, registry, documentation]
author: community
---

# Ops Process Ownership Registry

This skill builds a comprehensive, structured registry mapping operational processes to their owners, review cadences, and maintenance dates so accountability gaps are visible and actionable.

## Registry Building Workflow

1. **Gather process scope** — Ask the user to list all operational domains in scope (e.g., onboarding, incident response, billing, deployments). If they're unsure, prompt with common categories: People Ops, Engineering Ops, Finance, Customer Support, Security, Infrastructure.

2. **For each process, collect four fields:**
   - **Process Name** — a short, unambiguous label (e.g., "Employee Offboarding Checklist")
   - **Accountable Owner** — a specific person or role title, not a team name (e.g., "Head of HR" not "HR team")
   - **Review Cadence** — how often the process should be reviewed: Weekly / Monthly / Quarterly / Annually / Ad hoc
   - **Last Updated Date** — exact date (YYYY-MM-DD) or "Unknown" if not documented

3. **Flag registry gaps immediately:**
   - Mark any process with no named owner as `⚠️ UNOWNED`
   - Mark any process with Last Updated > 12 months ago as `🔴 STALE`
   - Mark any process with no review cadence as `❓ NO CADENCE`

4. **Group processes by domain** — Organize rows under domain headers so the registry is scannable, not a flat list.

5. **Generate a summary health section** — After the table, calculate and display: total processes, % owned, % reviewed in last 6 months, count of stale entries.

6. **Recommend immediate actions** — List the top 3–5 highest-priority gaps to resolve first, ranked by operational risk (unowned critical processes first).

## Output Format

Produce a Markdown document with the following structure:

```
# Operational Process Ownership Registry
Last Generated: [DATE]

## [Domain Name]

| Process Name | Accountable Owner | Review Cadence | Last Updated | Status |
|---|---|---|---|---|
| [name] | [owner] | [cadence] | [YYYY-MM-DD] | ✅ / ⚠️ / 🔴 / ❓ |

## [Next Domain]
...

---

## Registry Health Summary
- Total Processes: X
- Owned: X (XX%)
- Reviewed in Last 6 Months: X (XX%)
- Stale Entries: X
- Missing Cadence: X

## Priority Actions
1. [Highest-risk gap with specific recommended next step]
2. ...
```

Output must be copy-paste ready into Notion, Confluence, or a Markdown file. No narrative paragraphs inside the registry table. Status column uses emoji flags only.
