---
name: seasonal-demand-staffing-gap-analysis
description: >
  Compares projected seasonal demand fluctuations against current staffing levels to identify
  coverage gaps that require advance hiring or scheduling changes. Use when someone says "we're
  worried about being understaffed this holiday season," asks about staffing up for peak periods,
  wants to know if current headcount can handle projected volume spikes, needs to plan hiring
  timelines around seasonal demand, or is trying to avoid coverage shortfalls during busy periods.
category: operations
tags: [staffing, workforce-planning, seasonal-demand, capacity-planning, scheduling]
author: community
---

# Seasonal Demand & Staffing Gap Analysis

This skill analyzes projected demand curves against current staffing capacity to surface specific coverage gaps, quantify shortfalls, and produce a prioritized action plan for hiring or schedule adjustments ahead of seasonal shifts.

## Analysis Workflow

### 1. Gather Inputs
Collect or prompt the user for:
- **Demand data**: Historical volume by week/month for the past 1–3 years (units, transactions, calls, customers — whatever the relevant metric is), plus any known upcoming factors (new product launches, marketing campaigns, market expansion)
- **Current staffing**: Headcount by role, average hours per week, full-time vs. part-time split, and known attrition or planned departures
- **Productivity benchmarks**: Units/transactions per staff member per hour or day
- **Lead times**: Typical time-to-hire and onboarding duration per role
- **Constraints**: Budget caps, geographic limits, scheduling rules (max hours, overtime policies)

### 2. Build the Demand Forecast
- Calculate the baseline demand trend from historical data
- Apply seasonality multipliers by month or week (e.g., December = 1.4× baseline)
- Layer in any known demand drivers to produce a weekly or monthly projected volume

### 3. Calculate Required Staffing
- Divide projected demand volume by the productivity benchmark to get required labor hours per period
- Convert to FTE equivalents using average weekly hours
- Add a buffer (default 10–15%, adjustable) for absenteeism, training time, and variability

### 4. Compare Against Current Capacity
- Map current headcount × available hours per period
- Subtract capacity from requirement for each period
- Flag periods where the gap exceeds 5% of required capacity as a coverage risk

### 5. Identify Gap Types
Classify each gap:
- **Acute spike gap**: Short-duration high demand (< 4 weeks) — recommend overtime, temp workers, or cross-training
- **Sustained seasonal gap**: Multi-week shortfall — recommend contract hires or permanent hires with adjusted start dates
- **Role-specific gap**: Shortfall concentrated in one function — recommend targeted hiring or internal redeployment
- **Lead-time-critical gap**: Gap starts within the hiring lead time — flag as urgent, escalate timeline

### 6. Build the Action Plan
For each gap period:
- State the magnitude (FTE shortfall and volume at risk)
- Recommend the specific intervention (hire X FTEs, add Y overtime hours, activate temp agency)
- Set a decision deadline based on lead time (e.g., "Must post roles by [date] to be staffed by [date]")
- Note cost implication if budget data was provided

## Output Format

Produce a structured report with these sections:

**1. Demand Forecast Summary**
Table with columns: Period | Projected Volume | vs. Prior Year | Demand Index
Cover 12 months or the relevant planning horizon, weekly or monthly granularity.

**2. Staffing Capacity vs. Requirement**
Table with columns: Period | Required FTEs | Current Capacity (FTEs) | Gap (FTEs) | Gap % | Risk Level (Low/Medium/High/Critical)
Highlight Critical and High rows.

**3. Gap Analysis Narrative**
3–6 bullet points calling out the most significant gaps, their causes, and their business impact if unaddressed.

**4. Action Plan**
Numbered list ordered by decision deadline urgency:
- Period affected
- Gap type
- Recommended intervention
- Headcount or hours needed
- Decision deadline
- Estimated cost impact (if data available)

**5. Key Assumptions & Data Gaps**
Bullet list of assumptions made and any missing data that would sharpen the analysis. Include a direct ask for any critical
