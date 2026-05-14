---
name: ops-labor-split-shift-cost-model
description: >
  Calculates the total cost impact of split-shift scheduling across roles, including gap-time premiums,
  productivity loss estimates, and role-weighted labor costs. Use when someone asks about split-shift
  expenses, wants to understand the true cost of broken shifts, needs to compare split versus straight
  shift scheduling costs, or is trying to quantify productivity loss from non-consecutive scheduling.
  Also activates when someone mentions gap-time penalties or labor cost modeling for shift workers.
category: operations
tags: [labor-cost, scheduling, shift-operations, workforce-planning, cost-modeling]
author: community
---

# Split-Shift Cost Model

This skill calculates the full financial impact of split-shift scheduling by factoring in gap-time premiums, productivity degradation, and role-specific labor rates, helping operations teams make data-driven scheduling decisions.

## Cost Modeling Workflow

**Step 1: Gather Required Inputs**
Collect the following for each role being analyzed:
- Base hourly wage per role (e.g., cashier: $15/hr, supervisor: $22/hr)
- Number of employees per role on split shifts
- Standard shift length (hours) and gap duration (hours between segments)
- Applicable gap-time premium rate (flat dollar or percentage over base wage — check local labor law or CBA)
- Number of split-shift days per scheduling period (weekly or monthly)

**Step 2: Calculate Gap-Time Premium Cost**
For each role:
- `Gap Premium Cost = (Gap Premium Rate) × (Number of Employees) × (Split-Shift Days per Period)`
- If premium is percentage-based: `Gap Premium Rate = Base Hourly Wage × Premium % × Gap Hours`
- If flat rate: use the fixed statutory or negotiated amount per occurrence

**Step 3: Estimate Productivity Loss Cost**
Apply industry-standard productivity degradation estimates for split-shift workers:
- Default assumption: 10–20% productivity reduction during the second shift segment (use 15% if no internal data exists)
- `Productivity Loss Cost = Base Hourly Wage × Second Segment Hours × Productivity Loss % × Number of Employees × Split-Shift Days`
- Flag if the role involves complex cognitive tasks (bump estimate to 20–25%) versus routine physical tasks (10–12%)

**Step 4: Calculate Total Cost per Role**
`Role Total Cost = (Base Labor Cost for Split Hours) + (Gap Premium Cost) + (Productivity Loss Cost)`

**Step 5: Aggregate and Compare**
- Sum all role costs for total split-shift cost burden per period
- Calculate equivalent straight-shift cost: `Straight Shift Cost = Base Hourly Wage × Total Shift Hours × Number of Employees × Days`
- Compute cost delta: `Split-Shift Premium = Total Split Cost − Straight Shift Baseline`
- Express as a percentage overage for executive clarity

**Step 6: Flag Risk Factors**
Automatically note the following if present:
- Gap durations under 2 hours (higher turnover and compliance risk)
- Roles with statutory split-shift penalties (varies by jurisdiction — flag California, New York, and EU jurisdictions)
- High-skill roles where productivity loss estimates should be reviewed with actual performance data

## Output Format

Produce a structured cost breakdown report with the following sections:

**1. Inputs Summary Table**
| Role | Employees | Base Wage | Shift Hours | Gap Hours | Gap Premium | Days/Period |
(Populate with all entered values)

**2. Cost Breakdown Table**
| Role | Base Labor Cost | Gap Premium Cost | Productivity Loss Cost | Role Total |
(One row per role, with calculated values; include totals row)

**3. Straight-Shift Baseline**
Single line showing the equivalent cost if all shifts were scheduled as straight shifts.

**4. Cost Delta Summary**
- Total split-shift cost: $X
- Straight-shift baseline: $X
- Additional cost burden: $X (Y% premium)

**5. Risk Flags**
Bulleted list of any flagged conditions from Step 6. If none, state "No risk flags identified."

**6. Recommendation Note**
One to two sentences interpreting whether the split-shift cost delta is justified given operational necessity, or whether straight-shift restructuring warrants further analysis.

Length: concise enough to fit a single page;
