---
name: ops-labor-productivity-index-builder
description: >
  Calculates output-per-labor-hour ratios across teams, shifts, or departments to surface where workforce productivity is lagging behind targets or peers. Use when someone says "our team productivity is uneven," asks about "labor efficiency by shift," wants to "compare output per worker," needs to "find where we're losing labor hours," or is trying to "build a productivity index for operations."
category: operations
tags: [labor-productivity, workforce-analytics, operations, shift-analysis, efficiency-metrics]
author: community
---

# Labor Productivity Index Builder

Computes output-per-labor-hour ratios across teams or shifts and ranks them to identify underperforming units, which Claude activates when asked to analyze workforce efficiency or compare labor productivity across operational groups.

## Calculation Workflow

1. **Collect input data** — Request the following for each team/shift:
   - Total units produced (or equivalent output metric: orders fulfilled, tasks completed, revenue generated)
   - Total labor hours worked (headcount × hours, or direct timesheet totals)
   - Time period (shift, day, week, month)
   - Optional: target output rate or benchmark standard

2. **Calculate the Labor Productivity Index (LPI) per unit**
   - Formula: `LPI = Total Output ÷ Total Labor Hours`
   - Express as: units/hour, orders/labor-hour, or $revenue/labor-hour depending on context

3. **Normalize for comparison** — If units differ across teams, convert to a normalized index:
   - `Normalized LPI = (Team LPI ÷ Baseline or Average LPI) × 100`
   - Baseline = company average, top performer, or stated target

4. **Rank all teams/shifts** from highest to lowest normalized LPI

5. **Flag underperformers** — Mark any unit scoring below:
   - 80 of baseline as **Critical** (red)
   - 80–94 as **At Risk** (yellow)
   - 95–105 as **On Target** (green)
   - 106+ as **High Performer** (blue)

6. **Diagnose gaps** — For each underperforming unit, prompt for or infer contributing factors:
   - Absenteeism or short-staffing
   - Machine downtime or material delays
   - Skill mix or training gaps
   - Scheduling inefficiencies (e.g., excessive shift overlap, poor peak coverage)

7. **Calculate productivity gap cost** (if wage data is available):
   - `Lost Output = (Benchmark LPI − Actual LPI) × Labor Hours`
   - `Opportunity Cost = Lost Output × Unit Value`

## Output Format

Produce a structured report with the following sections:

**Summary Table** (one row per team/shift):
| Team/Shift | Output | Labor Hours | LPI (units/hr) | Normalized LPI | Status |
|---|---|---|---|---|---|

**Ranked Performance List** — Ordered from highest to lowest LPI with status flag and percentage above/below benchmark.

**Gap Analysis** — Bullet list for each At Risk or Critical unit:
- Team name, LPI score, gap from benchmark (absolute and %)
- Likely contributing factors (based on provided context or flagged as "unknown — investigate")
- Estimated lost output per period

**Opportunity Cost Summary** (if wage/value data provided):
- Total lost output units across all underperformers
- Estimated dollar value of productivity gap
- Top 1–2 teams where intervention would yield highest return

**Recommended Actions** — 3–5 specific, prioritized next steps (e.g., "Audit shift B staffing levels for Tuesdays and Wednesdays where LPI drops 22% below baseline").

Length: concise — the table and gap analysis are the core deliverable. Skip sections where data is unavailable but note what data would enable them.
