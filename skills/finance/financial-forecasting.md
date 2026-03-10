---
name: financial-forecasting
category: finance
description: >
  Projects future revenue, expenses, and cash position using historical data and current trends.
  Use when someone says "forecast our financials," asks about future cash flow, wants to project
  revenue growth, needs to model expenses over time, or is planning a budget for upcoming quarters.
tags: [forecasting, revenue, cash-flow, budgeting, financial-modeling]
author: community
---

# Financial Forecasting

This skill builds forward-looking financial projections by analyzing current trends, growth rates, and cost structures, and Claude will use it whenever someone needs to estimate future financial position.

## Forecasting Workflow

1. **Gather baseline data** — Collect the last 3–12 months of actuals: revenue by stream, fixed costs, variable costs, one-time items, and current cash balance.

2. **Identify growth drivers** — Ask the user for known variables: expected customer growth rate, pricing changes, headcount additions, planned capex, seasonality patterns, or pipeline conversion rates.

3. **Separate fixed vs. variable costs** — Classify each expense line as fixed (rent, salaries, subscriptions) or variable (COGS, commissions, usage-based tools). Variable costs must scale with the revenue or volume driver you've identified.

4. **Build monthly projections** — Project out 3, 6, or 12 months (match the user's stated horizon). For each month calculate:
   - Revenue = prior period × (1 + growth rate) ± known adjustments
   - Variable costs = revenue × variable cost ratio
   - Fixed costs = prior period + any known step changes
   - EBITDA = Revenue − Total Costs
   - Ending cash = Beginning cash + EBITDA − debt service − capex

5. **Apply scenarios** — Always produce three cases:
   - **Base case**: current trend continues
   - **Upside case**: 20–30% better on top-line, costs held flat
   - **Downside case**: 20–30% revenue miss, fixed costs unchanged

6. **Flag cash runway** — If any scenario shows cash balance dropping below 3 months of burn, explicitly call it out with the projected date of concern.

7. **State assumptions explicitly** — Every number that isn't sourced from actuals must be labeled as an assumption with its basis.

## Output Format

Produce a structured report with the following sections:

**Assumptions Table**
A bullet list of every input assumption: growth rate, cost ratios, starting cash, headcount changes, etc.

**Monthly Projection Table**
A markdown table with columns: Month | Revenue | Variable Costs | Fixed Costs | EBITDA | Cash Balance — repeated for each scenario (base, upside, downside).

**Summary Callouts**
- End-of-period revenue (3 scenarios)
- End-of-period cash (3 scenarios)
- Break-even month (if currently unprofitable)
- Cash runway warning (if applicable)

**Key Risks**
3–5 bullet points describing what could cause the downside case to materialize and what levers the user controls.

Length: as long as the table requires; summary callouts should be concise (1–2 lines each). Use markdown tables and headers throughout.