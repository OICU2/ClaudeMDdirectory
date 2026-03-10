---
name: investment-evaluation
description: >
  Evaluates potential investments using financial metrics including ROI, payback period, and NPV analysis.
  Use when someone says "should I invest in this," asks about evaluating a business opportunity, wants to
  assess whether a project is worth funding, mentions comparing investment options, or needs to justify a
  capital expenditure decision.
category: finance
tags: [investment, ROI, NPV, financial-analysis, capital-budgeting]
author: community
---

# Investment Evaluation

This skill guides Claude through structured financial analysis of potential investments using ROI, payback period, and NPV to produce a clear go/no-go assessment.

## Evaluation Workflow

1. **Gather Inputs** — Collect the following before calculating: initial investment cost, expected annual cash inflows, expected annual costs/outflows, project lifespan (years), and discount rate (use 10% if not provided).

2. **Calculate ROI**
   - Formula: `(Net Profit / Cost of Investment) × 100`
   - Net Profit = Total Returns − Initial Investment
   - Flag as strong if ROI > 20%, acceptable if 10–20%, weak if < 10%

3. **Calculate Payback Period**
   - Formula: `Initial Investment / Annual Net Cash Flow`
   - Flag as strong if < 2 years, acceptable if 2–5 years, risky if > 5 years

4. **Calculate NPV**
   - Discount each year's net cash flow: `Cash Flow / (1 + r)^t`
   - Sum all discounted cash flows, then subtract the initial investment
   - Positive NPV = value-creating; Negative NPV = value-destroying

5. **Assess Risk Factors** — Identify at least three risks: market risk, execution risk, liquidity risk, competitive risk, or regulatory risk based on context provided.

6. **Render Verdict** — Combine all three metrics into a recommendation: Proceed, Proceed with Caution, or Do Not Proceed.

## Output Format

Produce a structured investment brief with the following sections:

**Investment Summary**
- One sentence describing the investment being evaluated

**Financial Metrics Table**
| Metric | Value | Assessment |
|---|---|---|
| ROI | X% | Strong / Acceptable / Weak |
| Payback Period | X years | Strong / Acceptable / Risky |
| NPV | $X | Positive / Negative |

**Key Assumptions**
- Bullet list of 3–5 assumptions used in calculations (discount rate, growth rate, cost estimates, etc.)

**Risk Factors**
- Bullet list of 3–5 specific risks with one-line explanation each

**Recommendation**
- Bold verdict: **Proceed** / **Proceed with Caution** / **Do Not Proceed**
- 2–3 sentences explaining the reasoning based on the metrics
- One sentence on the single most important condition or risk to monitor

Keep the total output under 400 words. If critical inputs are missing, ask for them before calculating.