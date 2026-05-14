---
name: project-margin-at-completion-forecast
description: >
  Estimates the final gross margin for in-progress projects by comparing budgeted costs to actuals and projected costs to completion. Use when someone asks "what will our final margin be on this project," wants to forecast project profitability, needs to estimate cost at completion, is reviewing project financial health, or wants to know if a project is tracking to budget.
category: finance
tags: [project-finance, margin-analysis, forecasting, cost-management, earned-value]
author: community
---

# Project Margin at Completion Forecast

This skill calculates the projected final gross margin for in-progress projects using actuals-to-date, remaining cost estimates, and contract value, and flags margin risk or opportunity versus the original budget.

## Forecast Workflow

### 1. Gather Required Inputs
Request or confirm the following data points:
- **Contract Value / Revenue**: Total billable amount (fixed-price or estimated-at-completion for T&M)
- **Original Budgeted Cost**: Total cost budget at project start
- **Original Budgeted Margin**: Budgeted gross margin ($ and %)
- **Actual Costs to Date**: All costs incurred so far (labor, materials, subcontractors, overhead)
- **Estimate to Complete (ETC)**: Projected remaining costs to finish the project
- **Percent Complete**: Either cost-based or milestone-based completion percentage

If ETC is not provided, calculate it using one of these methods (ask user which applies):
- **Re-estimated ETC**: User provides a fresh bottom-up estimate of remaining work
- **Performance-based ETC**: `ETC = (Remaining Budget) / Cost Performance Index (CPI)`
  - CPI = Actual Cost / Earned Value
  - Earned Value = % Complete × Budget at Completion

### 2. Calculate Key Metrics

**Estimate at Completion (EAC)**
`EAC = Actual Costs to Date + Estimate to Complete`

**Projected Gross Margin $**
`Projected Margin $ = Contract Value − EAC`

**Projected Gross Margin %**
`Projected Margin % = (Projected Margin $ / Contract Value) × 100`

**Variance at Completion (VAC)**
`VAC = Original Budgeted Margin $ − Projected Margin $`
- Positive VAC = tracking better than budget
- Negative VAC = margin erosion / overrun risk

**Cost Performance Index (CPI)**
`CPI = Earned Value / Actual Costs to Date`
- CPI < 1.0 signals cost overrun trend
- CPI > 1.0 signals under-budget performance

**Burn Rate Check**
`Remaining Budget Available = Original Budget − Actual Costs to Date`
`Budget Cushion / Deficit = Remaining Budget Available − ETC`

### 3. Assess Margin Risk
Apply the following thresholds and flag accordingly:

| Projected Margin % vs. Budget | Status |
|-------------------------------|--------|
| Within ±2 percentage points | 🟢 On Track |
| 2–5 points below budget | 🟡 At Risk |
| 5–10 points below budget | 🟠 Margin Erosion |
| >10 points below budget or negative | 🔴 Critical Overrun |

Identify and call out specific drivers of variance if data is available:
- Labor overruns (hours × rate vs. budget)
- Scope additions not reflected in contract value
- Subcontractor or material cost increases
- Productivity or efficiency losses (low CPI)

### 4. Sensitivity Analysis (if data permits)
Show margin outcomes under three ETC scenarios:
- **Optimistic**: ETC reduced by 10%
- **Base Case**: ETC as provided
- **Pessimistic**: ETC increased by 15%

## Output Format

Produce a structured forecast report with these sections:

---

**Project Margin at Completion Forecast**
*Project: [Name] | As of: [Date]*

**Contract Summary**
- Contract Value: $X
- Original Budget: $X
- Budgeted Gross Margin: $X (X%)

**Performance to Date**
- % Complete: X%
- Actual Costs to Date: $X
-
