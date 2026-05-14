---
name: cash-flow-sensitivity-waterfall
description: >
  Constructs a cash flow sensitivity waterfall that quantifies how changes in key drivers such as collection timing, COGS, and capex spending shift the projected ending cash balance. Use when someone asks "how sensitive is our cash position to payment delays," wants to stress-test a cash flow forecast, or needs to visualize which levers have the biggest impact on ending cash. Also activates when someone says "show me what moves the needle on cash" or wants a bridge analysis from a base case to a downside or upside scenario.
category: finance
tags: [cash-flow, sensitivity-analysis, waterfall, forecasting, scenario-analysis]
author: community
---

# Cash Flow Sensitivity Waterfall

This skill builds a structured waterfall analysis that isolates and quantifies the cash impact of individual driver changes — collection timing, COGS, capex, payables, and revenue — bridging a base case ending cash balance to a stressed or optimized scenario.

## Workflow

1. **Establish the Base Case**
   - Identify or prompt the user for: starting cash balance, forecast period (monthly or quarterly), and the base case ending cash balance.
   - If not provided, ask for the three to five most material line items: revenue/collections, COGS/operating expenses, capex, and net working capital movements.

2. **Identify the Sensitivity Drivers**
   - Extract or prompt for the specific drivers to stress-test. Default set:
     - **Collection timing**: days sales outstanding (DSO) shift in days
     - **COGS / operating expenses**: percentage change in run-rate spend
     - **Capex**: dollar amount deferred, accelerated, or eliminated
     - **Payables stretch**: days payable outstanding (DPO) shift in days
     - **Revenue volume**: percentage change in top-line
   - For each driver, capture: direction of change (increase/decrease), magnitude, and whether the impact is one-time or recurring within the period.

3. **Quantify Each Driver's Cash Impact**
   - **DSO shift**: Cash impact = (Annual Revenue / 365) × ΔDays. Positive DSO increase reduces cash; negative increases it.
   - **COGS change**: Cash impact = Base COGS × Δ%. Cost increase reduces cash.
   - **Capex change**: Cash impact = dollar delta directly (deferral adds cash, acceleration removes it).
   - **DPO shift**: Cash impact = (Annual COGS / 365) × ΔDays. DPO extension adds cash.
   - **Revenue change**: Cash impact = ΔRevenue × assumed collection rate (default 100% unless DSO adjustment already applied).
   - Flag any double-counting risk if both revenue and DSO are being stressed simultaneously.

4. **Build the Waterfall Sequence**
   - Order drivers from largest absolute cash impact to smallest.
   - Each bar/step represents a single driver's incremental cash effect.
   - Cumulative running total updates after each step.
   - Final bar lands on the stressed or optimized ending cash balance.

5. **Apply Scenario Labels**
   - Label each scenario clearly: Base Case, Downside (e.g., collections slow + costs rise), Upside (e.g., capex deferred + DPO stretched).
   - If multiple scenarios requested, produce a separate waterfall per scenario or a side-by-side summary table.

6. **Validate and Sanity-Check**
   - Confirm: Base Case Ending Cash + Sum of All Driver Impacts = Scenario Ending Cash.
   - Flag if any single driver represents more than 50% of total variance — note concentration risk.
   - Note if ending cash goes negative in any scenario and at what point in the period that occurs.

## Output Format

Produce the following in order:

**1. Assumptions Table**
A compact table listing each driver, the base case value, the stressed/changed value, and the delta used in the calculation.

**2. Waterfall Table**
| Step | Driver | Cash Impact ($) | Cumulative Cash Balance ($) |
|------|--------|----------------|----------------------------|
| 0 | Base Case Ending Cash | — | $X |
| 1 | [Driver 1 — largest impact] | ±$X | $X |
| 2 | [Driver 2] | ±$X | $X |
|
