---
name: service-volume-to-staffing-ratio-model
description: >
  Projects required staffing levels based on forecasted service volume inputs to ensure optimal resourcing. Use when someone asks how many staff they need for an expected volume, wants to model staffing for a demand forecast, needs to avoid overstaffing or understaffing a team, is planning headcount for a new service tier, or wants to translate ticket/call/request projections into FTE requirements.
category: operations
tags: [staffing, workforce-planning, capacity-planning, forecasting, headcount]
author: community
---

# Service Volume to Staffing Ratio Model

This skill calculates and presents required staffing levels from forecasted service volumes, applying utilization rates, handle times, and shift coverage logic to produce actionable headcount recommendations.

## Modeling Workflow

1. **Collect inputs** — Gather or prompt for: expected volume (units/day or units/hour), average handle time (AHT) per unit, target utilization rate (%), operating hours per shift, number of shifts per day, and any shrinkage factor (breaks, training, absences — typically 20–30%).

2. **Calculate raw capacity needed**
   - Convert volume to an hourly rate: `Hourly Volume = Daily Volume ÷ Operating Hours`
   - Calculate productive hours needed: `Hours Needed = (Volume × AHT in hours)`
   - Apply shrinkage: `Adjusted Hours = Hours Needed ÷ (1 - Shrinkage %)`

3. **Apply utilization rate**
   - `FTE Required = Adjusted Hours ÷ (Hours per Shift × Utilization Rate)`
   - Round up to the nearest whole number for scheduling purposes.

4. **Account for shift coverage**
   - If multiple shifts: multiply FTE per shift by number of shifts.
   - If 24/7 coverage: apply a coverage multiplier (typically 4.2× for continuous coverage accounting for days off).

5. **Run sensitivity scenarios** — Automatically produce three staffing projections:
   - **Conservative**: volume × 0.8 (low demand)
   - **Base**: volume × 1.0 (expected demand)
   - **Peak**: volume × 1.25 (high demand or seasonal surge)

6. **Flag risks** — Identify if utilization rate exceeds 85% (burnout risk), if FTE count is fractional below 0.5 (consider cross-training instead of hiring), or if volume-to-staff ratio implies queue buildup.

## Output Format

Produce a structured response with these sections:

**Inputs Confirmed**
A bullet list of every variable used in the model, with assumed defaults flagged.

**Staffing Calculation**
Show the step-by-step math for the base case with labeled equations so the user can audit and adjust.

**Staffing Summary Table**

| Scenario | Daily Volume | FTEs Required | Utilization |
|----------|-------------|---------------|-------------|
| Conservative | X | X | X% |
| Base | X | X | X% |
| Peak | X | X | X% |

**Recommendations**
2–4 bullet points covering hiring targets, scheduling approach, and any risk flags surfaced in step 6.

**Assumptions to Validate**
A short list of inputs the user should confirm or refine to improve model accuracy.
