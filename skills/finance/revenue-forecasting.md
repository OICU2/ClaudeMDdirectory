---
name: revenue-forecasting
description: >
  Projects future revenue using pipeline data, historical growth rates, and market conditions. Use when someone says "forecast our revenue," asks about "projected sales for next quarter," wants to "build a revenue model," needs to "estimate annual recurring revenue growth," or asks "what will we make next year."
category: finance
tags: [forecasting, revenue, financial-modeling, pipeline, growth]
author: community
---

# Revenue Forecasting

This skill builds structured revenue forecasts by combining pipeline analysis, growth rate assumptions, and market factors, activating whenever someone needs forward-looking revenue projections.

## Forecasting Workflow

1. **Gather inputs** — Ask for: current revenue (MRR/ARR or trailing 12-month), pipeline value with stage breakdown, historical growth rate (MoM or YoY), churn rate, and any known market or seasonality factors.

2. **Segment revenue streams** — Separate existing recurring revenue, expansion revenue from current customers, new business from pipeline, and one-time or transactional revenue.

3. **Apply conversion assumptions** — Use pipeline stage probabilities (e.g., discovery: 10%, proposal: 30%, negotiation: 60%, verbal commit: 90%) unless the user provides custom rates. State assumptions explicitly.

4. **Build the forecast model**:
   - **Base case**: Apply current growth rate with standard pipeline conversion
   - **Bull case**: Increase conversion rates by 15–20% and reduce churn by 20%
   - **Bear case**: Reduce conversion rates by 20%, increase churn by 15%, apply market headwind discount (5–15%)

5. **Adjust for time horizon**:
   - 1 quarter: Weight pipeline heavily (70%) over run-rate growth (30%)
   - 1 year: Balance pipeline (40%), run-rate (40%), and market assumptions (20%)
   - 2–3 years: Weight market growth rate and TAM expansion most heavily

6. **Validate the output** — Check if the forecast implies reasonable growth multiples. Flag if projections exceed 3× historical growth without clear justification.

## Output Format

Produce a structured forecast with the following sections:

**Assumptions Summary** (bullet list of every input used, including defaults)

**Revenue Forecast Table**:
| Period | Bear Case | Base Case | Bull Case |
|--------|-----------|-----------|-----------|
| Q1     | $X        | $X        | $X        |
| Q2     | $X        | $X        | $X        |
| ...    | ...       | ...       | ...       |

**Key Drivers** — 3–5 bullet points explaining what moves the needle most in this forecast

**Risks & Assumptions to Monitor** — 2–4 specific variables that would cause the forecast to miss

**Confidence Note** — One sentence rating forecast confidence (High/Medium/Low) with the primary reason

Keep the full output to one page equivalent. Use dollar amounts with consistent units (K, M, B). If critical inputs are missing, ask for them before producing numbers rather than guessing silently.