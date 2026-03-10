---
name: forecast-modeling
category: research
description: >
  Builds quantitative models that project future states using current data, historical trends, and statistical techniques. Use when someone asks to predict future values, wants to model growth trajectories, needs to forecast revenue or demand, asks what numbers will look like next quarter, or wants to project outcomes based on existing data.
tags: [forecasting, modeling, statistics, data-analysis, projections]
author: community
---

# Forecast Modeling

This skill builds structured quantitative forecasts with explicit assumptions, chosen methodology, and scenario analysis whenever someone needs to project future states from current data.

## Forecast Modeling Workflow

1. **Clarify the target variable** — Identify exactly what is being forecast (revenue, users, units, churn rate, etc.) and the time horizon (weeks, quarters, years).

2. **Audit available data** — Catalog what historical data exists, its granularity, and any known gaps or anomalies. Ask the user to supply data if not provided.

3. **Identify drivers and assumptions** — List 3–7 key variables that influence the forecast (growth rate, seasonality, market size, conversion rate, etc.). State each assumption explicitly with a numeric value or range.

4. **Select methodology** — Choose the appropriate model type based on data availability:
   - **Linear/exponential trend** — for steady growth with sufficient history
   - **Moving average or exponential smoothing** — for noisy short-term data
   - **Regression model** — when multiple input drivers are available
   - **Cohort or S-curve model** — for adoption or churn dynamics
   - **Top-down / bottom-up** — for market-sizing scenarios

5. **Build the base case** — Construct a period-by-period projection table using the chosen method and stated assumptions.

6. **Generate scenarios** — Produce at minimum three scenarios:
   - **Bear case** — pessimistic but plausible inputs
   - **Base case** — most likely inputs
   - **Bull case** — optimistic but plausible inputs

7. **Identify key sensitivities** — Flag the 2–3 assumptions where a small change produces the largest swing in output. State the numeric impact (e.g., "A 5% change in retention rate shifts Year 2 revenue by ±$120K").

8. **Flag model limitations** — Note what the model cannot account for (black swans, missing data, structural breaks) in a dedicated section.

## Output Format

Produce a forecast report with these clearly labeled sections:

- **Forecast Summary** — One paragraph: what is being forecast, over what horizon, and the base-case headline number.
- **Assumptions Table** — Markdown table listing each assumption, its value in each scenario, and the rationale.
- **Projection Table** — Markdown table with time periods as columns and key metrics as rows, showing all three scenarios.
- **Sensitivity Analysis** — Bulleted list of top 2–3 drivers with numeric swing estimates.
- **Methodology Note** — 2–4 sentences explaining which model was used and why.
- **Limitations** — Bulleted list of 3–5 explicit caveats.

Length: as long as the data requires; do not pad. Use tables for numeric data, prose only for qualitative context.