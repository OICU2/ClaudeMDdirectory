---
name: service-volume-seasonality-model
description: >
  Analyzes historical service request or transaction volume data to identify and quantify recurring seasonal demand patterns, then produces staffing and resource pre-allocation recommendations. Use when someone says "our call center gets slammed every holiday season," asks about predicting demand spikes, wants to understand cyclical volume trends, needs help planning headcount for peak periods, or wants to avoid being caught understaffed during recurring busy periods.
category: operations
tags: [forecasting, staffing, demand-planning, seasonality, workforce-management]
author: community
---

# Service Volume Seasonality Model

This skill analyzes historical service or transaction volume data to surface seasonal demand patterns and generate concrete staffing and resource pre-allocation recommendations that Claude produces whenever someone needs to anticipate and prepare for cyclical demand fluctuations.

## Analysis Workflow

### 1. Data Intake and Scoping
- Ask for historical volume data at the finest available granularity (hourly, daily, weekly, monthly) covering at least 2 full years
- Identify the service type: inbound calls, tickets, transactions, orders, appointments, or similar
- Clarify relevant dimensions: channel, region, product line, customer segment
- Confirm what resources are being planned: agents, servers, inventory, physical capacity

### 2. Baseline and Trend Decomposition
- Separate long-term growth trend from seasonal signal using a multiplicative or additive decomposition depending on whether amplitude scales with volume
- Calculate the overall average volume as the baseline reference
- Identify and flag any anomalies or one-time events (COVID disruptions, system outages, promotions) that should be excluded from the seasonal model

### 3. Seasonal Pattern Quantification
- Compute seasonal indices for each relevant period: month-of-year, week-of-year, day-of-week, and hour-of-day if data permits
- A seasonal index above 1.0 means that period runs above baseline; below 1.0 means below
- Rank periods by severity: label the top 20% as HIGH demand, middle 60% as NORMAL, bottom 20% as LOW
- Identify the single peak period and the single trough period explicitly
- Flag any secondary peaks or shoulder seasons that are commonly overlooked

### 4. Staffing and Resource Calculation
- Apply seasonal indices to a user-provided or estimated future baseline volume to generate period-specific volume forecasts
- Use a provided or assumed handle time, throughput rate, or service rate to convert volume to required resource units
- Add a configurable buffer (default 15%) to account for forecast uncertainty and absenteeism
- Calculate lead time requirements: when resources must be hired, trained, contracted, or provisioned before each peak

### 5. Pre-Allocation Recommendations
- Specify exact periods requiring above-baseline resourcing and by how much (e.g., "+35% agents needed weeks 48–52")
- Recommend whether to use permanent hires, temporary staff, cross-training, overtime, or capacity reservation contracts for each peak
- Identify periods where resources can be safely reduced or redeployed
- Flag the earliest action date for each recommendation given typical hiring or procurement lead times

## Output Format

Produce a structured report with the following sections:

**Seasonal Demand Summary**
- A table of seasonal indices by period (month or week), sorted chronologically
- Clearly labeled HIGH / NORMAL / LOW tags per period
- Peak period and trough period called out explicitly

**Volume Forecast by Period**
- Table showing: Period | Baseline Volume | Seasonal Index | Forecasted Volume | % vs. Baseline

**Resource Requirement Plan**
- Table showing: Period | Required Resources | Baseline Resources | Delta | Buffer-Adjusted Requirement

**Pre-Allocation Action Calendar**
- Chronological list of recommended actions with: Action | Target Period | Deadline to Execute | Resource Type | Quantity

**Key Risks and Assumptions**
- Bullet list of data limitations, assumption sensitivities, and conditions that would invalidate the model

Keep all tables aligned and readable in plain text. Flag any period where data coverage is thin (fewer than 2 observed cycles) with a ⚠️ warning. Default to conservative (higher) estimates when data is ambiguous.
