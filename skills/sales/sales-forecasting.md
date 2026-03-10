---
name: sales-forecasting
description: >
  Projects future sales revenue by analyzing pipeline data, historical close rates, and seasonal patterns. Use when someone says "forecast our sales," asks about "expected revenue next quarter," wants to "predict pipeline outcomes," needs to "estimate close rates," or asks "how much will we sell." Combines quantitative analysis with deal-stage weighting to produce actionable revenue projections.
category: sales
tags: [forecasting, pipeline, revenue, close-rates, sales-analytics]
author: community
---

# Sales Forecasting Skill

This skill builds structured revenue forecasts from pipeline data, historical performance, and close rate assumptions, producing tiered projections Claude uses when asked to predict or estimate future sales outcomes.

## Forecasting Workflow

1. **Gather inputs** — Request or identify: current pipeline by stage, average deal size, historical close rates per stage, average sales cycle length, and time period to forecast.

2. **Segment the pipeline by stage** — Assign weighted probability to each deal stage:
   - Prospecting / Early: 5–15%
   - Qualified / Discovery: 20–35%
   - Proposal / Demo: 40–60%
   - Negotiation / Verbal Commit: 70–85%
   - Closed/Won: 100%
   - Adjust weights if the user provides their own historical close rates — always prefer actuals over defaults.

3. **Calculate weighted pipeline value** — Multiply deal value × stage probability for each deal, then sum across all deals to produce a weighted forecast.

4. **Layer in historical patterns** — If historical data is available, apply a win-rate multiplier (actual closed ÷ pipeline entered over prior periods). Flag if current pipeline conversion appears above or below historical baseline.

5. **Apply time-horizon adjustments** — For deals with cycle lengths extending beyond the forecast window, apply a timing haircut proportional to the remaining days needed to close.

6. **Build three scenarios**:
   - **Conservative**: weighted pipeline × 0.75, or bottom-quartile historical close rate
   - **Base case**: weighted pipeline × 1.0, or median historical close rate
   - **Optimistic**: weighted pipeline × 1.25, or top-quartile historical close rate

7. **Identify forecast risks** — Flag: pipeline concentration in a single deal or stage, deals stalled longer than average cycle time, insufficient pipeline to meet quota (pipeline coverage ratio below 3×).

8. **State assumptions explicitly** — List every assumption used so the user can adjust inputs and rerun.

## Output Format

Produce a structured forecast report with these sections:

**Forecast Summary Table**
| Scenario | Projected Revenue | Key Assumption |
|---|---|---|
| Conservative | $X | Close rate: X% |
| Base Case | $X | Close rate: X% |
| Optimistic | $X | Close rate: X% |

**Pipeline Breakdown** — Table showing each deal stage: number of deals, total value, probability weight, weighted value.

**Coverage Analysis** — One line: current pipeline total ÷ quota = coverage ratio, with a pass/warn/fail indicator (3× = pass, 2–3× = warn, <2× = fail).

**Top Risks** — Bulleted list of 2–4 specific risks identified from the data (e.g., "Deal X at $200K represents 40% of base case — single-deal concentration risk").

**Assumptions Used** — Numbered list of every assumption applied.

Length: concise. Avoid narrative filler. All numbers should be dollar-formatted with commas. If input data is incomplete, state exactly what is missing and what default assumption was used in its place.