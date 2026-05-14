---
name: ops-asset-downtime-cost-calculator
description: >
  Calculates the revenue and productivity cost of equipment or system downtime by mapping asset outages to affected output volume and workforce impact. Use when someone says "how much did that outage cost us," asks about the financial impact of equipment being down, or wants to quantify lost production from a system failure. Also triggers when someone needs to justify maintenance spend against downtime losses or wants to estimate the cost of a future planned outage.
category: operations
tags: [downtime, cost-analysis, operations, maintenance, revenue-impact]
author: community
---

# Asset Downtime Cost Calculator

This skill computes the total financial cost of equipment or system downtime by combining lost revenue, idle labor, SLA penalties, and recovery costs — triggered whenever someone needs to quantify the business impact of an asset outage.

## Calculation Workflow

1. **Gather asset and outage inputs**
   - Asset or system name
   - Downtime duration (hours and minutes)
   - Time of occurrence (peak vs. off-peak, shift schedule)
   - Number of shifts or workers idled

2. **Collect revenue baseline**
   - Revenue per hour the asset generates when running (or ask for daily/monthly revenue to derive hourly rate)
   - Output units per hour (units, transactions, throughput) if revenue-per-unit is easier to supply
   - Utilization rate at time of failure (was it running at full capacity?)

3. **Calculate lost revenue**
   - `Lost Revenue = Hourly Revenue Rate × Downtime Hours × Utilization Rate`
   - If partial output was maintained via workaround, subtract partial throughput value

4. **Calculate idle labor cost**
   - Identify workers unable to perform primary tasks during outage
   - `Idle Labor Cost = Number of Workers × Average Hourly Wage × Downtime Hours`
   - Include burden rate (benefits multiplier, typically 1.25–1.40×) if known

5. **Add secondary costs**
   - **Overtime/recovery labor**: hours × overtime rate to catch up on lost production
   - **SLA or contract penalties**: flat fees or percentage penalties owed to customers
   - **Emergency repair costs**: parts, expedited shipping, contractor callout fees
   - **Scrap or spoilage**: materials wasted due to interrupted process

6. **Sum total cost**
   - `Total Downtime Cost = Lost Revenue + Idle Labor + Overtime Labor + SLA Penalties + Repair Costs + Scrap`

7. **Apply clarifying assumptions**
   - If any input is missing, state the assumption used (e.g., "Assumed 85% utilization based on industry average")
   - Flag which cost components were estimated vs. provided

8. **Benchmark against maintenance cost (if requested)**
   - Compare total downtime cost to the cost of preventive maintenance that could have avoided the outage
   - Compute break-even: how many outage-hours of prevention the maintenance budget buys

## Output Format

Produce a structured cost breakdown in this order:

```
ASSET DOWNTIME COST SUMMARY
Asset: [name]
Outage Duration: [X hrs Y min]
Occurrence: [date/shift/peak status]

COST BREAKDOWN
─────────────────────────────────────
Lost Revenue:          $[amount]
Idle Labor Cost:       $[amount]
Recovery Overtime:     $[amount]
SLA / Contract Penalties: $[amount]
Repair & Parts:        $[amount]
Scrap / Spoilage:      $[amount]
─────────────────────────────────────
TOTAL DOWNTIME COST:   $[amount]

KEY METRICS
• Cost per hour of downtime: $[amount]
• % attributed to lost revenue: [X]%
• % attributed to labor: [X]%

ASSUMPTIONS
- [List each assumption made for missing inputs]

RECOMMENDATION (if maintenance benchmark requested)
- Preventive maintenance cost: $[amount]
- Break-even downtime avoided: [X hours/year]
- Net savings from prevention: $[amount]
```

Keep all numbers to two decimal places. Flag estimated figures with an asterisk (*). If critical inputs are missing and cannot be reasonably assumed, ask for them before producing the summary.
