---
name: service-request-volume-forecasting
description: >
  Projects future incoming service request volumes using historical data to support staffing and resource planning decisions. Use when someone asks "how many tickets will we get next month," wants to plan support staffing levels, needs to anticipate seasonal demand spikes, is preparing a capacity plan for a service desk, or wants to understand future workload based on past trends.
category: operations
tags: [forecasting, capacity-planning, service-desk, staffing, demand-planning]
author: community
---

# Service Request Volume Forecasting

This skill analyzes historical service request data to generate volume forecasts and staffing recommendations that help operations teams prepare for future demand.

## Forecasting Workflow

### 1. Gather Historical Data
Ask for or analyze the following inputs:
- Historical request volumes (minimum 3 months; 12+ months preferred)
- Time granularity available (daily, weekly, monthly)
- Any known anomalies (outages, migrations, one-time events to exclude)
- Upcoming known events that may affect volume (product launches, seasonal peaks, planned changes)

### 2. Identify Patterns
Analyze the data for:
- **Trend**: Is volume growing, declining, or flat over time? Calculate period-over-period growth rate.
- **Seasonality**: Identify recurring weekly cycles (e.g., Monday spikes), monthly patterns (e.g., end-of-month surges), and annual cycles (e.g., Q4 load).
- **Volatility**: Calculate coefficient of variation (std dev / mean) to characterize predictability.
- **Outliers**: Flag and optionally exclude anomalous weeks/months that would distort the baseline.

### 3. Select Forecasting Method
Choose based on data availability:
- **< 3 months of data**: Simple moving average with stated low confidence
- **3–11 months**: Weighted moving average favoring recent periods (apply 3:2:1 weights to last three months)
- **12+ months**: Decomposition method — separate trend, seasonality, and residual; project each component forward
- **Known future events**: Apply manual adjustment multipliers on top of statistical forecast

### 4. Calculate the Forecast
- Produce point estimates for each forecast period (week or month)
- Calculate a confidence range: ±1 standard deviation of historical residuals for "likely" range; ±2 standard deviations for "outer" range
- State growth rate assumption explicitly
- Separate forecast by request category if category-level data is available

### 5. Translate to Staffing Implications
- Divide forecasted volume by current average handle rate (requests per agent per period)
- Account for shrinkage (meetings, training, PTO) — default to 30% shrinkage factor unless actual data is provided
- Output required FTE count per period
- Flag periods where forecasted demand exceeds current capacity by >15%

### 6. Validate and Caveat
- Compare forecast to the most recent actuals as a sanity check
- State all assumptions explicitly
- List key risks that could cause the forecast to be wrong (e.g., product changes, economic shifts, system migrations)

## Output Format

Produce a structured forecast report with the following sections:

**Summary** (3–5 sentences): Forecast headline, key trend, and top staffing implication.

**Historical Baseline Table**
| Period | Actual Volume | Period-over-Period Change |
|--------|--------------|--------------------------|
| [data rows] | | |

**Volume Forecast Table**
| Forecast Period | Point Estimate | Likely Range (±1σ) | Outer Range (±2σ) |
|----------------|---------------|---------------------|-------------------|
| [forecast rows] | | | |

**Staffing Requirements Table**
| Period | Forecasted Volume | Required FTE (w/ shrinkage) | Current Capacity | Gap |
|--------|------------------|----------------------------|-----------------|-----|
| [rows] | | | | |

**Key Assumptions**: Bulleted list of every assumption made (growth rate, seasonality factors, shrinkage rate, excluded outliers).

**Risks & Caveats**: Bulleted list of conditions that would invalidate the forecast.

**Recommended Actions**: 2–5 specific, time-bound action items based on the forecast findings.

Length: Concise tables with a narrative summary. Avoid padding. If input data is limited,
