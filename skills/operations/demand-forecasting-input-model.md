---
name: demand-forecasting-input-model
description: >
  Structures historical volume data and seasonal variables into a clean, analysis-ready forecasting input model for operational planning. Use when someone says "we need to forecast demand," asks about building a staffing model, wants to plan inventory levels based on historical trends, needs to prepare data for a capacity planning exercise, or is trying to understand seasonal patterns in their volume data.
category: operations
tags: [forecasting, demand-planning, capacity-planning, staffing, inventory]
author: community
---

# Demand Forecasting Input Model

This skill transforms raw historical volume data and contextual variables into a structured forecasting input model that supports staffing, inventory, and capacity planning decisions.

## Model Construction Workflow

1. **Gather historical volume data**
   - Ask for time-series volume data (units, transactions, calls, orders, etc.)
   - Confirm the granularity: daily, weekly, or monthly
   - Identify the minimum recommended lookback period: 2 full years for seasonal detection, 1 year minimum
   - Flag and document any gaps, anomalies, or known disruptions (e.g., COVID, supply shocks, promotions)

2. **Identify and encode seasonal variables**
   - Extract day-of-week index (1–7) if data is daily
   - Extract week-of-year (1–52) and month (1–12)
   - Flag holidays and local market events that correlate with volume spikes or drops
   - Ask whether the business follows fiscal or calendar year; adjust period labeling accordingly

3. **Incorporate external demand drivers**
   - Prompt the user to identify known leading indicators (e.g., marketing spend, weather, economic index, sales pipeline)
   - Map each driver to a lag period (e.g., "marketing spend leads volume by 2 weeks")
   - Note which drivers are controllable (internal) vs. uncontrollable (external)

4. **Calculate baseline metrics**
   - Compute average volume per period and standard deviation
   - Identify peak periods: top 10% of volume weeks/months
   - Identify trough periods: bottom 10% of volume weeks/months
   - Calculate year-over-year growth rate per comparable period

5. **Apply seasonality indexing**
   - Calculate a seasonality index for each period: `Period Average ÷ Overall Average`
   - Index values above 1.0 = above-average demand; below 1.0 = below-average
   - Normalize indices so they sum to the number of periods in a cycle

6. **Structure the input model table**
   - Each row = one time period (day/week/month)
   - Required columns: Period Label, Date, Raw Volume, Seasonality Index, YoY Growth Rate, External Driver Values, Anomaly Flag (Y/N), Notes
   - Add a Forecast-Ready Volume column: raw volume adjusted for flagged anomalies

7. **Validate the model**
   - Check that seasonality indices average to 1.0 across the full cycle
   - Confirm no more than 5% of rows carry anomaly flags without explanation
   - Verify external driver columns have no more than 10% missing values before use

## Output Format

Produce the following three artifacts:

**1. Input Model Table**
A structured table (Markdown or CSV-ready) with all columns from Step 6. Minimum 12 rows of example data populated if real data is provided; otherwise generate a labeled template with column definitions.

**2. Variable Summary Block**
A concise list of:
- Time range covered
- Granularity
- Peak and trough periods (with index values)
- YoY growth rate (overall and by season)
- External drivers included and their lag assumptions
- Count of anomaly-flagged periods and reasons

**3. Planning Readiness Notes**
3–5 bullet points flagging:
- Data quality issues that must be resolved before forecasting
- Variables with insufficient history or coverage
- Recommended next steps (e.g., "run regression against Driver X," "collect 6 more months before modeling Q4")
- Which planning use cases the model is ready to support now (staffing, inventory, capacity) and which require additional data
