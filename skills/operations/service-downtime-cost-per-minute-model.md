---
name: service-downtime-cost-per-minute-model
description: >
  Calculates the financial and operational cost of each minute a service is unavailable, enabling data-driven prioritization of incident response and infrastructure investments. Use when someone asks "how much does downtime cost us," wants to justify redundancy spending, needs to quantify SLA breach impact, is building an incident severity framework, or wants to understand the revenue risk of an outage.
category: operations
tags: [incident-response, cost-modeling, sre, reliability, business-impact]
author: community
---

# Service Downtime Cost-Per-Minute Model

This skill builds a structured cost model that quantifies the per-minute financial and operational impact of service downtime, giving teams a concrete foundation for prioritizing reliability investments and incident escalation thresholds.

## Cost Modeling Workflow

### 1. Gather Required Inputs
Prompt the user for the following if not already provided:
- **Annual recurring revenue (ARR)** or monthly revenue attributed to the affected service
- **Percentage of revenue dependent on the service** (e.g., 100% for a payments API, 30% for an internal tool)
- **Peak vs. off-peak traffic distribution** (hours per day at peak, rough revenue split)
- **Average hourly fully-loaded engineering cost** (salary + benefits + overhead; use $150/hr as default if unknown)
- **Number of engineers typically engaged during an incident** (P1, P2, P3 separately if possible)
- **Support/customer success cost per incident** (tickets, calls, escalations — estimate if needed)
- **SLA penalty structure** (credits owed per hour or per percentage of downtime, if applicable)
- **Estimated customer churn risk** (% of affected customers likely to churn per hour of downtime, even if approximate)

### 2. Calculate Direct Revenue Loss Per Minute
```
Monthly Revenue Attributable to Service
÷ (30 × 24 × 60)  →  baseline revenue per minute

Adjust for time of day:
- Peak minute rate = (peak revenue share % × monthly revenue) ÷ (peak hours × 60 × 30)
- Off-peak minute rate = (off-peak revenue share % × monthly revenue) ÷ (off-peak hours × 60 × 30)
```

### 3. Calculate Operational Cost Per Minute
```
Incident labor cost/min = (engineers on call × hourly rate) ÷ 60
Support cost/min = (avg tickets per incident × cost per ticket) ÷ avg incident duration in minutes
Total ops cost/min = incident labor + support cost
```

### 4. Calculate SLA Penalty Exposure Per Minute
```
If SLA = 99.9% uptime over 30 days → allowable downtime = 43.2 minutes/month
Credit rate = (monthly contract value × credit percentage) ÷ minutes of breach
Penalty/min = credit rate once SLA threshold is crossed
```

### 5. Calculate Churn-Adjusted Cost Per Minute
```
Customers at risk = total customer count × % affected by service
Churn cost/min = (customers at risk × churn rate per hour ÷ 60) × average customer lifetime value (LTV)
```

### 6. Build the Composite Model
```
Total cost/min (baseline)   = revenue loss + ops cost + churn cost
Total cost/min (SLA breach) = revenue loss + ops cost + churn cost + SLA penalties

Build a severity table:
| Duration | Baseline Cost | SLA Breach Cost | Cumulative |
|----------|--------------|-----------------|------------|
| 1 min    |              |                 |            |
| 5 min    |              |                 |            |
| 15 min   |              |                 |            |
| 30 min   |              |                 |            |
| 1 hour   |              |                 |            |
| 4 hours  |              |                 |            |
```

### 7. Derive Investment Justification Thresholds
- Calculate **break-even point** for redundancy or reliability investments: `annual investment cost ÷ cost per minute ÷ 525,600` = minutes of downtime per year the investment must prevent to break even
- Flag incident severity th
