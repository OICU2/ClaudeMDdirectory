---
name: service-level-objective-budget-calculator
category: operations
description: >
  Calculates the engineering and operational cost required to achieve and maintain a defined service level objective across critical workflows. Use when someone asks "what will it cost to hit 99.9% uptime," wants to understand the error budget for a service, needs to calculate SLO compliance costs, is planning reliability investments, or wants to know how much downtime they can afford before breaching an SLA.
tags: [slo, sre, reliability, operations, budgeting]
author: community
---

# SLO Budget Calculator

This skill calculates error budgets, downtime allowances, and engineering investment required to achieve and sustain a target service level objective for any workflow or system.

## Calculation Workflow

### 1. Gather SLO Inputs
Collect the following from the user or infer from context:
- **Target SLO** (e.g., 99.9%, 99.95%, 99.99%)
- **Time window** (rolling 30 days, calendar month, quarterly, annual)
- **Service type** (API, pipeline, database, user-facing app, background job)
- **Current baseline** (measured uptime/error rate if available)
- **Traffic volume** (requests/day or events/day)

### 2. Calculate Error Budget
Use the formula:
```
Error Budget = (1 - SLO Target) × Time Window
```

Convert to concrete units:
- **Minutes/month of allowed downtime**
- **Allowed failed requests** (if request-based SLO)
- **Remaining budget** if current reliability data is provided

Reference table (monthly, 30-day window):
| SLO     | Downtime Allowed | Failed Requests (at 1M req/day) |
|---------|-----------------|----------------------------------|
| 99.0%   | 7h 18m          | 300,000                         |
| 99.5%   | 3h 39m          | 150,000                         |
| 99.9%   | 43m 49s         | 30,000                          |
| 99.95%  | 21m 54s         | 15,000                          |
| 99.99%  | 4m 22s          | 3,000                           |

### 3. Identify Cost Drivers
Break down the investment required across these categories:

**Infrastructure Costs**
- Redundancy tier needed (active-passive, active-active, multi-region)
- Estimated infrastructure multiplier per tier:
  - 99.0–99.5%: 1.2–1.5× baseline infra cost
  - 99.9%: 1.5–2.0× (redundant components, automated failover)
  - 99.95%: 2.0–3.0× (multi-AZ, load balancing, chaos testing)
  - 99.99%: 3.0–5.0× (multi-region active-active, full redundancy)

**Engineering Labor**
- Estimate on-call burden: hours/month per SLO tier
  - 99.0%: ~5–10 eng-hours/month
  - 99.9%: ~10–20 eng-hours/month
  - 99.95%: ~20–40 eng-hours/month
  - 99.99%: ~40–80 eng-hours/month (dedicated SRE function often required)
- Multiply by loaded engineer cost (default: $150/hr if not specified)

**Tooling and Observability**
- Monitoring, alerting, incident management platform costs
- Estimate: $500–$5,000/month depending on scale and SLO tier

**Incident Response Cost**
- Mean time to detect (MTTD) and mean time to recover (MTTR) drive cost
- Estimate: Cost per incident = (MTTR in hours) × (eng-hours per incident) × (loaded rate)
- Factor in expected incident frequency based on error budget consumption rate

### 4. Calculate Total Monthly SLO Cost
```
Total Monthly Cost =
  Infrastructure Delta Cost
  + (On-Call Hours × Loaded Eng Rate)
  + Tooling Cost
  + (Expected Incidents × Cost Per Incident)
```
