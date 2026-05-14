---
name: peak-demand-staffing-model
description: >
  Models expected service demand peaks across time periods and calculates minimum staffing levels
  required to maintain target response times. Use when someone asks about staffing for busy periods,
  wants to know how many agents or staff they need, is trying to reduce wait times during peak hours,
  needs to plan coverage for high-volume windows, or wants to calculate minimum headcount for a
  service team.
category: operations
tags: [staffing, workforce-planning, demand-forecasting, operations, scheduling]
author: community
---

# Peak Demand Staffing Model

This skill builds a time-period demand forecast and calculates minimum staffing levels using queuing theory to meet a user-defined response time target.

## Staffing Model Workflow

### 1. Gather Inputs
Collect the following before proceeding. Ask for any that are missing:
- **Time periods**: Granularity (hourly, 30-min, daily) and range (day, week, month)
- **Demand data**: Historical volume per period (tickets, calls, orders, visits, etc.)
- **Target response time (SLA)**: e.g., "answer within 2 minutes" or "resolve within 4 hours"
- **Average handle time (AHT)**: How long one unit of demand takes to service
- **Target service level**: Percentage of demand that must meet SLA (e.g., 80% within 20 seconds)
- **Shrinkage factor**: Expected unavailability (breaks, training, absence) — default to 30% if unknown

### 2. Identify Demand Peaks
- Calculate average and peak volume per time period
- Flag periods where volume exceeds 120% of average as **peak windows**
- Identify top 3 peak windows by volume
- Note day-of-week or seasonal patterns if multi-week data is provided

### 3. Calculate Required Agents per Period
Use the **Erlang C formula** for queue-based services (calls, chats, tickets):

```
Utilization (ρ) = (Arrival Rate × AHT) / Number of Agents
Erlang C → Probability of waiting → Expected wait time
Iterate agent count until target service level is met
```

For non-queue workloads (e.g., scheduled tasks, deliveries):
```
Raw FTEs needed = (Volume × AHT) / Available minutes per period
```

Apply shrinkage:
```
Staffed headcount = Raw FTEs / (1 - Shrinkage %)
```

### 4. Build the Staffing Table
- Produce a row for each time period
- Columns: Period | Forecasted Volume | Raw FTEs Needed | Shrinkage-Adjusted Headcount | Peak Flag
- Highlight peak periods clearly

### 5. Provide Recommendations
- State the **single highest staffing requirement** (the ceiling for scheduling)
- Recommend a **base staffing level** (covers 80%+ of periods)
- Suggest **flex/on-call coverage** to handle peak delta
- Flag if any SLA targets are mathematically unachievable at given AHT and volume

## Output Format

Produce the following sections in order:

**1. Input Summary** — Bullet list confirming the inputs used (volume, AHT, SLA target, shrinkage)

**2. Demand Peak Analysis** — Short paragraph identifying peak windows and patterns, followed by a ranked list of top 3 peak periods with volume figures

**3. Staffing Requirements Table** — Markdown table with columns:
`| Time Period | Forecasted Volume | Min Agents (Raw) | Min Agents (w/ Shrinkage) | Peak? |`

**4. Staffing Recommendations** — 3–5 bullet points covering: peak headcount ceiling, base staffing level, flex coverage gap, and any SLA risk flags

**5. Assumptions & Caveats** — Bullet list of any defaults applied (e.g., assumed shrinkage, estimated AHT) and limitations of the model

Keep the full output to one structured response. Use a table for the staffing data. Flag gaps or missing inputs explicitly rather than silently assuming values.
