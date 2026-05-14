---
name: overtime-cost-projection-model
description: >
  Calculates projected overtime costs by role and department based on current workload trends and staffing levels. Use when someone asks about overtime budget forecasts, wants to estimate labor cost overruns, needs to plan staffing to avoid overtime, asks how much overtime will cost next quarter, or wants to analyze which departments are driving overtime expenses.
category: operations
tags: [overtime, labor-costs, workforce-planning, budgeting, staffing]
author: community
---

# Overtime Cost Projection Model

This skill builds a structured overtime cost projection broken down by role and department, using workload trends and current staffing data to forecast labor cost exposure.

## Projection Workflow

1. **Gather inputs** — Collect or prompt for: current headcount by role/department, standard hours per week, actual hours worked (last 4–8 weeks), overtime rate multiplier (default 1.5x), base hourly or salary rates per role, and projection horizon (weeks or months).

2. **Calculate baseline overtime** — For each role: `Weekly OT Hours = MAX(0, Actual Avg Hours - Standard Hours)`. Annualize or project forward: `Projected OT Hours = Weekly OT Hours × Projection Weeks`.

3. **Apply cost multipliers** — `OT Cost per Role = Projected OT Hours × Base Hourly Rate × OT Multiplier`. Sum across all roles within each department for department-level totals.

4. **Identify trend direction** — Flag roles where overtime hours are increasing week-over-week (>10% growth) as high-risk. Flag stable or declining as low-risk.

5. **Model staffing scenarios** — For high-risk roles, calculate the headcount addition needed to eliminate overtime: `Additional FTEs Needed = Total Projected OT Hours / Standard Hours per Worker per Period`. Compare hire cost vs. continued overtime cost.

6. **Summarize findings** — Rank departments by projected overtime spend. Highlight the top 3 cost drivers and break-even point for hiring vs. paying overtime.

## Output Format

Produce a structured report with these sections:

**Overtime Cost Projection Summary**
- Projection period and assumptions table (headcount, standard hours, OT rate, base wages)

**Department Breakdown Table**
| Department | Role | Avg Weekly OT Hrs | Projected OT Hrs | Base Rate | OT Cost Projection | Trend |
|---|---|---|---|---|---|---|

**Total Projected Overtime Cost** — single dollar figure with confidence range if data is limited

**High-Risk Roles** — bulleted list with weekly OT hours, growth rate, and projected quarterly cost

**Staffing Scenarios**
- For each high-risk role: cost to hire 1 FTE vs. cost of continued overtime over the projection period, with recommendation

**Recommended Actions** — 3–5 prioritized actions to reduce overtime exposure, with estimated savings per action

Length: concise tables preferred over prose. Flag any missing inputs that would improve accuracy.
