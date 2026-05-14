---
name: ops-labor-cost-per-shift-variance-log
description: >
  Tracks and compares actual versus planned labor costs across individual shifts to identify overspend patterns and scheduling inefficiencies. Use when someone says "our labor costs are running over budget," asks about shift-level payroll discrepancies, wants to understand why a specific shift cost more than expected, needs to find patterns in overtime or scheduling waste, or is trying to reconcile planned versus actual staffing spend.
category: operations
tags: [labor-cost, shift-management, variance-analysis, scheduling, payroll]
author: community
---

# Labor Cost Per Shift Variance Log

This skill analyzes planned versus actual labor costs at the individual shift level, surfaces overspend patterns, and identifies scheduling inefficiencies that Claude will activate when payroll or shift cost discrepancies are raised.

## Variance Analysis Workflow

1. **Collect shift data inputs** — Gather the following for each shift: shift date, shift type (opening/mid/closing/overnight), planned headcount, actual headcount, planned hours, actual hours, planned wage rate(s), actual wages paid, and any overtime recorded.

2. **Calculate variance per shift** — For each shift compute:
   - Cost Variance = Actual Labor Cost − Planned Labor Cost
   - Variance % = (Cost Variance / Planned Labor Cost) × 100
   - Hours Variance = Actual Hours − Planned Hours
   - Headcount Delta = Actual Staff − Planned Staff

3. **Flag threshold breaches** — Mark any shift where variance exceeds ±10% as a warning and ±20% as critical. Flag shifts with unplanned overtime (any hours beyond scheduled shift length billed at premium rate).

4. **Identify patterns across shifts** — Group variances by:
   - Day of week (which days consistently run over or under)
   - Shift type (which shift category — opening, closing, etc. — is the problem)
   - Manager or location (if data is available)
   - Time period (weekly or monthly trend direction)

5. **Diagnose root causes** — For each flagged shift, assess likely cause from: late call-outs requiring last-minute replacements, underestimated demand leading to added staff, excessive overtime due to poor handoff timing, scheduled staff not showing (ghost shifts), or inaccurate wage rate assumptions in the plan.

6. **Generate recommendations** — For each identified pattern, produce a specific corrective action: adjust template schedules, revise rate assumptions, add buffer headcount to high-variance shifts, enforce clock-out compliance, or flag for manager review.

## Output Format

Produce a structured variance log with the following sections:

**Shift-Level Variance Table**
A table with columns: Date | Shift Type | Planned Cost | Actual Cost | Variance ($) | Variance (%) | Status (OK / Warning / Critical) | Likely Cause

**Summary Statistics**
- Total planned labor cost for the period
- Total actual labor cost for the period
- Net variance ($ and %)
- Number of shifts by status (OK / Warning / Critical)
- Total unplanned overtime hours and cost

**Pattern Findings**
Bullet list of 3–5 identified patterns (e.g., "Friday closing shifts averaged +18% over plan for 4 consecutive weeks").

**Recommended Actions**
Numbered list of specific corrective actions tied directly to identified patterns, each with an owner role (e.g., Scheduler, Store Manager, Payroll) and a suggested timeline (immediate / next scheduling cycle / monthly review).

Output length scales with data volume — a single week of shifts should fit within one structured response; multi-week logs should be summarized with a full table appended.
