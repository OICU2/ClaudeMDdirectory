---
name: financial-close-bottleneck-log
description: >
  Identifies and documents recurring delays in the monthly financial close process by mapping task dependencies, owner gaps, and average completion lags. Use when someone says the close is taking too long, asks why month-end keeps slipping, wants to find who or what is blocking the books from closing, needs to document close process inefficiencies, or is trying to reduce the number of days to close.
category: finance
tags: [financial-close, bottleneck-analysis, month-end, process-improvement, accounting-ops]
author: community
---

# Financial Close Bottleneck Log

This skill analyzes and documents recurring delays in the monthly financial close process by mapping task dependencies, identifying owner gaps, and calculating completion lags so finance teams can take targeted corrective action.

## Bottleneck Identification Workflow

1. **Gather close timeline data** — Ask the user to provide: the target close date, actual close dates for the last 3–6 months, a list of close tasks (or request they describe the current close checklist), and task owners by name or role.

2. **Map the close task sequence** — Reconstruct the dependency chain of close activities in order:
   - Sub-ledger reconciliations (AP, AR, payroll, fixed assets)
   - Intercompany eliminations
   - Accruals and journal entries
   - Management reporting consolidation
   - Final review and sign-off
   Flag which tasks are predecessors to others and cannot begin until upstream tasks are complete.

3. **Calculate completion lags** — For each task, determine:
   - Scheduled due date (day of month, e.g., T+3)
   - Average actual completion date across the review period
   - Lag = actual minus scheduled (in business days)
   - Flag any task with a lag ≥ 1 business day as a bottleneck candidate.

4. **Identify owner gaps** — Look for patterns where:
   - A single owner controls multiple sequential tasks (single-point-of-failure)
   - Tasks have no named owner or coverage during leave periods
   - The same owner appears in the top 3 lagging tasks across multiple months

5. **Classify bottleneck type** — Assign each identified bottleneck one of these root-cause categories:
   - **Data dependency**: upstream system or team delivers data late
   - **Capacity constraint**: owner lacks time or bandwidth
   - **Process gap**: no documented procedure or checklist exists
   - **Approval delay**: sign-off or review step is unscheduled or informal
   - **Tool limitation**: manual workaround slows execution

6. **Prioritize by impact** — Rank bottlenecks by: (lag in days × number of downstream tasks blocked). Surface the top 3–5 highest-impact items.

## Output Format

Produce a structured **Financial Close Bottleneck Log** with the following sections:

---

**Close Performance Summary**
- Review period (e.g., Jan–Jun 2024)
- Target close day: T+X
- Average actual close day: T+X
- Average total slip: X business days

**Bottleneck Registry** (table format)

| # | Task Name | Owner/Role | Scheduled Day | Avg Actual Day | Lag (days) | Bottleneck Type | Downstream Tasks Blocked |
|---|-----------|------------|---------------|----------------|------------|-----------------|--------------------------|

**Top 3–5 Priority Bottlenecks** (narrative bullets)
- For each: describe the delay pattern, root cause classification, and one specific recommended fix (e.g., "Add a T+1 data feed SLA with the payroll vendor," "Assign a backup owner for fixed asset recons during controller travel").

**Owner Gap Summary**
- List any owners appearing as single points of failure with recommended mitigation.

**Suggested Quick Wins**
- Up to 3 changes that could reduce close time within the next cycle without system changes.

---

Length: The bottleneck registry should include every task with a lag ≥ 1 day. Narrative sections should be concise — 2–4 sentences per bottleneck. Use plain business language, no jargon beyond standard accounting terminology.
