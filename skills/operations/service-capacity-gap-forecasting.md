---
name: service-capacity-gap-forecasting
description: >
  Projects future service delivery capacity against expected demand to identify staffing or resource shortfalls before they create operational bottlenecks. Use when someone says "we're worried about keeping up with demand," asks about staffing levels for an upcoming period, wants to know if their team can handle projected workload, mentions a gap between current capacity and future needs, or needs to plan hiring or resource allocation for a growth scenario.
category: operations
tags: [capacity-planning, workforce-forecasting, resource-management, staffing, operations]
author: community
---

# Service Capacity Gap Forecasting

This skill analyzes current service capacity against projected demand to surface specific staffing or resource shortfalls, timelines, and recommended actions before gaps become operational crises.

## Capacity Gap Forecasting Workflow

### 1. Gather Baseline Capacity Inputs
Collect or prompt the user for:
- Current headcount or resource units (FTEs, machines, seats, etc.)
- Effective capacity per unit (hours/day, tickets/week, calls/hour, etc.)
- Current utilization rate (actual vs. theoretical max)
- Known capacity constraints (PTO, ramp time for new hires, attrition rate)

### 2. Establish Demand Projections
Collect or estimate:
- Current demand volume (units per time period)
- Projected demand growth (percentage, seasonality, or event-driven spikes)
- Forecast horizon (next 30/60/90 days, quarter, year)
- Confidence level of the forecast (historical trend, sales pipeline, executive estimate)

### 3. Calculate Effective Capacity
- **Effective Capacity = Headcount × Capacity per Unit × Utilization Rate**
- Apply attrition: subtract expected departures over the forecast horizon
- Apply ramp time: new hires at 50% capacity for first 4–6 weeks (adjust if user provides different data)
- Flag if utilization is already above 80% — indicate burnout/quality risk

### 4. Identify the Gap
- **Capacity Gap = Projected Demand − Effective Capacity**
- Calculate gap at each interval in the forecast horizon (monthly or quarterly)
- Determine the date when capacity first falls short of demand (the "breach point")
- Quantify gap in concrete units: number of FTEs short, tickets unhandled, hours unmet

### 5. Model Resolution Scenarios
For each identified gap, generate at least two options:
- **Hire-to-close**: How many hires needed by what date, accounting for ramp time
- **Efficiency-to-close**: What throughput improvement (%) would eliminate the gap
- **Hybrid**: Partial hiring + partial process improvement
- Note lead times — if breach point is within hiring lead time, flag as urgent

### 6. Highlight Risks and Assumptions
- State every assumption explicitly (growth rate, utilization target, ramp time)
- Flag scenarios where demand uncertainty is high
- Note if current utilization leaves no buffer for demand spikes

## Output Format

Produce a structured forecast report with the following sections:

**1. Capacity Snapshot (table)**
| Metric | Current | End of Forecast Period |
|--------|---------|------------------------|
| Headcount | X | X (after attrition) |
| Effective Capacity | X units/period | X units/period |
| Projected Demand | X units/period | X units/period |
| Gap | — | +/- X units/period |

**2. Breach Point**
One sentence: "At current trajectory, capacity falls short of demand on [DATE], with a shortfall of [X units/period]."

**3. Gap Scenarios (bullet list)**
- Scenario A — Hire: [N] additional [role] by [DATE] to close gap, accounting for [X]-week ramp
- Scenario B — Efficiency: Increase throughput by [X]% through [specific lever] to close gap
- Scenario C — Hybrid: [N] hires + [X]% efficiency gain

**4. Recommended Action**
One concrete recommendation with rationale, including urgency level (immediate / within 30 days / planning horizon).

**5. Key Assumptions**
Bulleted list of every assumption made. Flag which assumptions most significantly affect the forecast.

Length: Concise — fit in one screen if possible. Use numbers throughout. Avoid
