---
name: roi-analysis
category: finance
description: >
  Calculates and interprets return on investment for projects, marketing campaigns, and capital expenditures. Use when someone asks "is this worth the investment," wants to evaluate project profitability, needs to compare competing investments, asks about payback period, or wants to know if a campaign paid off.
tags: [roi, finance, investment, profitability, capital-expenditure]
author: community
---

# ROI Analysis

Calculates ROI, payback period, and profitability metrics for any investment scenario, then delivers a clear verdict with supporting numbers.

## Analysis Workflow

1. **Identify investment type** — project, marketing campaign, capex, hiring, tooling, or other. Adjust relevant cost/benefit categories accordingly.

2. **Gather inputs** — extract or request:
   - Total investment cost (upfront + ongoing)
   - Time horizon (months or years)
   - Expected or actual returns (revenue, savings, or value generated)
   - Discount rate if NPV is relevant (default to 10% if unstated)

3. **Calculate core metrics**:
   - **ROI (%)** = ((Net Return − Investment Cost) / Investment Cost) × 100
   - **Payback Period** = Investment Cost / Annual Net Return
   - **Net Profit** = Total Returns − Total Costs
   - **NPV** (if multi-year) = sum of discounted cash flows minus initial investment
   - **Annualized ROI** if the time horizon exceeds 1 year

4. **Benchmark the result** — compare against common thresholds:
   - Marketing campaigns: 400–500% ROI is strong
   - Capital projects: 15–25% ROI is typical
   - General business investments: payback under 2 years is favorable

5. **Identify key sensitivities** — flag the 1–2 assumptions that most affect the outcome (e.g., conversion rate, utilization rate, revenue ramp timeline).

6. **State a clear verdict** — good investment, marginal, or poor, with the single most important reason.

## Output Format

Produce a structured response with these sections:

**Investment Summary**
- One-line description of what is being evaluated and over what timeframe

**Key Inputs**
- Bullet list of costs and returns used in the calculation

**Results**
| Metric | Value |
|---|---|
| ROI | X% |
| Net Profit | $X |
| Payback Period | X months/years |
| NPV (if applicable) | $X |

**Verdict**
One to three sentences: whether to proceed, why, and the most critical assumption to validate.

**Sensitivity Note**
One or two bullets naming variables that would flip the verdict if they changed significantly.

Show all formulas used. If inputs are incomplete, state what is assumed and why.