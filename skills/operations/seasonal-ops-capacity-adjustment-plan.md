---
name: seasonal-ops-capacity-adjustment-plan
description: >
  Models expected demand fluctuations by season and generates staffing, inventory, and resource adjustment recommendations for each period. Use when someone says "we need to plan for peak season," asks about "how to handle holiday demand spikes," wants to "adjust staffing for slow months," is concerned about "seasonal inventory buildup," or needs to "prepare operations for summer/winter/Q4 changes."
category: operations
tags: [seasonal-planning, capacity-management, staffing, inventory, demand-forecasting]
author: community
---

# Seasonal Operations Capacity Adjustment Plan

This skill analyzes business demand patterns across seasons and produces a structured, period-by-period plan with specific staffing, inventory, and resource recommendations that Claude generates whenever someone needs to align operational capacity with seasonal demand cycles.

## Workflow

### 1. Gather Business Context
Before generating recommendations, collect the following (ask if not provided):
- Business type and primary products/services
- Historical demand data or known seasonal patterns (e.g., "Q4 is 3x normal volume")
- Current baseline: headcount, inventory levels, key resources (equipment, warehouse space, etc.)
- Lead times for hiring, ordering inventory, or provisioning resources
- Geographic region and any relevant holidays or local events
- Budget constraints or caps on scaling

### 2. Define Seasonal Periods
Map the business calendar into distinct operational phases:
- Identify 3–6 named periods (e.g., Off-Peak, Pre-Season Ramp, Peak, Post-Peak Wind-Down)
- Assign approximate months and expected demand index relative to baseline (e.g., Off-Peak = 60%, Peak = 180%)
- Flag transition windows where capacity changes must be initiated ahead of the period

### 3. Model Capacity Requirements Per Period
For each defined period, calculate or estimate:
- **Staffing**: Required FTE count, recommended mix of full-time vs. temporary/contract workers, shift structure changes
- **Inventory**: Target stock levels as a multiplier of baseline, reorder timing relative to period start, safety stock buffers
- **Resources**: Equipment utilization targets, facility/space needs, vendor or third-party capacity bookings (e.g., 3PL overflow, temp agencies)

### 4. Generate Adjustment Actions with Timing
For each transition between periods, produce a specific action checklist:
- What to do (hire, order, contract, reduce, release)
- How much (specific numbers or ranges)
- When to initiate (X weeks before period start, accounting for lead times)
- Who owns the action (role, not individual)

### 5. Flag Risks and Contingencies
- Identify the top 2–3 risks per period (e.g., late hiring, supplier delays, demand exceeding forecast by >20%)
- Provide a contingency trigger and response for each risk

## Output Format

Produce a structured markdown document with the following sections:

```
# Seasonal Capacity Adjustment Plan — [Business Type] — [Year or Planning Horizon]

## Business Baseline
- Baseline headcount: X
- Baseline monthly inventory units: X
- Key resources: [list]

## Seasonal Demand Overview
| Period | Months | Demand Index | Volume vs. Baseline |
|--------|--------|--------------|---------------------|
| ...    | ...    | ...          | ...                 |

## Period-by-Period Recommendations

### [Period Name] ([Month Range])
**Demand Outlook:** [1–2 sentences]

**Staffing:**
- Target headcount: X FTE + Y temporary
- Actions: [specific hiring/reduction steps]
- Initiate by: [date or weeks before period]

**Inventory:**
- Target stock level: X units / X weeks of supply
- Reorder trigger: [specific threshold]
- Initiate orders by: [date or weeks before period]

**Resources:**
- [Specific resource adjustments with quantities and timing]

**Transition Checklist:**
- [ ] [Action] — Owner: [Role] — Due: [Timing]
- [ ] ...

**Risks & Contingencies:**
- Risk: [description] → Trigger: [condition] → Response: [action]

---
[Repeat for each period]

## Summary Timeline
[A simple week-by-week or month-by-month action calendar covering all periods]
```

- Length: Comprehensive but scannable
