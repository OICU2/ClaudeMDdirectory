---
name: cross-team-queue-backlog-report
description: >
  Aggregates unresolved task and ticket backlogs across multiple teams into a single prioritized report for operational review. Use when someone says "show me what's backed up across teams," asks about "cross-team backlog status," wants to "review unresolved tickets by team," needs a "queue health report," or asks "what are all teams behind on." Surfaces bottlenecks, aging items, and priority imbalances in one consolidated view.
category: operations
tags: [backlog, tickets, queue-management, multi-team, reporting]
author: community
---

# Cross-Team Queue Backlog Report

Consolidates unresolved tasks and tickets from multiple teams into a single prioritized operational report, surfacing aging items, blockers, and queue health signals for leadership or ops review.

## Workflow

1. **Identify teams in scope** — Confirm which teams are included. If not specified, ask or infer from context (e.g., all teams in the org, specific departments).

2. **Collect backlog data per team** — For each team, gather:
   - Total open/unresolved items
   - Items by status (e.g., New, In Progress, Blocked, Awaiting Response)
   - Item age buckets: <1 day, 1–3 days, 4–7 days, 8–14 days, >14 days
   - Priority distribution (Critical, High, Medium, Low)
   - Items with no assignee or no recent activity (stale items)

3. **Flag critical signals** — Identify and call out:
   - Any Critical or High items older than 3 days
   - Teams with queues growing faster than they are resolving
   - Items marked Blocked with no documented blocker owner
   - Queues where >20% of items are stale (no activity in 5+ days)

4. **Rank teams by backlog severity** — Score each team using a simple rubric:
   - Volume of unresolved items (weighted by priority)
   - Percentage of aging items (>7 days)
   - Number of blocked items
   - Assign a severity label: 🔴 Critical / 🟡 At Risk / 🟢 Healthy

5. **Identify cross-team dependencies** — Note any tickets that are blocked on another team's action. List the dependency pair (Team A waiting on Team B).

6. **Draft operational recommendations** — For each 🔴 or 🟡 team, provide 1–2 specific actions (e.g., "Reassign 4 unowned Critical items," "Escalate 3 blocked items to Engineering lead").

## Output Format

Produce a structured Markdown report with the following sections:

```
# Cross-Team Queue Backlog Report
**Date:** [date]
**Teams Covered:** [list]
**Report Period:** [timeframe]

---

## Executive Summary
[3–5 bullet points: total open items, number of critical flags, teams at risk, top blockers]

---

## Team-by-Team Breakdown

### [Team Name] — 🔴 Critical / 🟡 At Risk / 🟢 Healthy
| Metric | Value |
|---|---|
| Total Open Items | X |
| Critical/High | X |
| Stale (>7 days) | X |
| Blocked | X |
| Unassigned | X |

**Aging Breakdown:** <1d: X | 1–3d: X | 4–7d: X | 8–14d: X | >14d: X

**Flags:** [bullet list of specific concerns]
**Recommended Actions:** [1–2 specific actions]

[Repeat for each team]

---

## Cross-Team Dependencies
| Waiting Team | Blocked On | Item Count | Oldest Item Age |
|---|---|---|---|
| Team A | Team B | X | X days |

---

## Priority Action List
Ranked list of the top 5–10 items requiring immediate attention across all teams, with team, item ID or title, age, and suggested next step.
```

- Length scales with number of teams; 3–6 teams typically produces a 1–2 page report.
- Use tables for structured data; use bullets for flags and recommendations.
- If data is incomplete
