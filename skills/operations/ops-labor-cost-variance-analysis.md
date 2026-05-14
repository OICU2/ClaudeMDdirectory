---
name: ops-labor-cost-variance-analysis
description: >
  Analyzes the gap between planned and actual labor costs across operational units to surface overspend patterns and staffing inefficiencies. Use when someone says "our labor costs are over budget," asks about staffing cost variances, wants to understand why payroll came in higher than planned, needs to identify which departments are overspending on labor, or is trying to explain a labor cost discrepancy to leadership.
category: operations
tags: [labor-costs, variance-analysis, workforce-planning, budgeting, staffing]
author: community
---

# Labor Cost Variance Analysis

This skill compares planned versus actual labor costs at the unit, department, or site level to identify where overspend is occurring, why, and what operational patterns are driving it.

## Analysis Workflow

1. **Establish the baseline inputs** — Collect planned labor budget (by period and unit), actual labor spend, headcount planned vs. actual, hours scheduled vs. hours worked, and any applicable wage rates or overtime thresholds.

2. **Calculate raw variance** — For each unit: `Variance = Actual Labor Cost − Planned Labor Cost`. Express as both absolute dollar amount and percentage of plan (`Variance % = Variance / Planned × 100`).

3. **Decompose the variance into root causes** — Break each unit's variance into contributing factors:
   - **Rate variance**: Actual wage rate vs. planned rate (e.g., unexpected overtime, off-cycle raises, agency staff premiums)
   - **Volume variance**: Actual hours worked vs. planned hours (e.g., demand spikes, absenteeism backfill, poor scheduling)
   - **Mix variance**: Shift in labor mix toward higher-cost roles or shifts (e.g., senior staff covering junior roles)

4. **Rank units by variance magnitude** — Sort from highest overspend to lowest. Flag any unit exceeding a threshold (default: >5% over plan or >$10,000 absolute, adjustable based on context provided).

5. **Identify patterns across units** — Look for shared drivers: Is overtime concentrated in specific shifts or days? Are multiple sites experiencing the same rate variance? Is absenteeism a systemic issue?

6. **Assess staffing efficiency** — Calculate labor cost per output unit where possible (revenue per labor dollar, units produced per hour, customers served per FTE). Flag units with worsening efficiency ratios even if dollar variance is small.

7. **Generate corrective action signals** — For each flagged unit, tag the primary driver and suggest a targeted action:
   - Overtime-driven → Review scheduling practices, assess if headcount is understaffed
   - Agency/temp-driven → Evaluate permanent hire ROI vs. continued temp spend
   - Absenteeism-driven → Flag for HR; assess whether coverage policy is inflating costs
   - Rate-driven → Verify if wage increases were captured in the budget reforecast

## Output Format

Produce a structured variance report with the following sections:

**1. Summary Table**
| Unit | Planned ($) | Actual ($) | Variance ($) | Variance (%) | Primary Driver |
|------|-------------|------------|--------------|--------------|----------------|
One row per operational unit, sorted by variance % descending. Bold rows exceeding the flagging threshold.

**2. Top Offenders Breakdown** (narrative, 2–4 sentences per flagged unit)
State the unit name, variance amount, primary root cause, and one specific recommended action.

**3. Pattern Observations** (3–6 bullet points)
Call out cross-unit trends, systemic issues, and any units that are under-budget and why.

**4. Recommended Actions by Priority**
Numbered list, highest-impact items first. Each action must name the responsible owner (e.g., Operations Manager, Scheduling, HR), the lever to pull, and the expected cost impact if addressed.

**5. Data Gaps / Assumptions**
List any inputs that were missing or estimated, and note how they affect confidence in the analysis.

Length: Concise enough to present to an operations director in 10 minutes. Avoid narrative padding; every sentence should carry a decision-relevant insight.
