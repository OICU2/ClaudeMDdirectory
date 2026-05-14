---
name: ops-idle-time-cost-quantifier
category: operations
description: >
  Estimates the financial cost of staff and equipment idle time by correlating utilization gaps with hourly cost rates across operational units. Use when someone says "we have too much downtime," asks about the cost of underutilized resources, wants to quantify idle capacity losses, needs to justify staffing changes, or is trying to understand the financial impact of low equipment utilization.
tags: [operations, cost-analysis, utilization, workforce, equipment]
author: community
---

# Idle Time Cost Quantifier

Calculates the dollar cost of staff and equipment idle time by mapping utilization gaps against loaded hourly rates across each operational unit, producing a ranked cost exposure report.

## Calculation Workflow

1. **Collect inputs per operational unit:**
   - Resource name/ID and type (staff role or equipment type)
   - Total available hours in the analysis period (shift hours × headcount or machine count)
   - Actual productive/utilized hours in the same period
   - Fully loaded hourly cost rate (for staff: salary + benefits + overhead; for equipment: depreciation + maintenance + energy + operator cost)

2. **Compute idle time per unit:**
   - Idle hours = Available hours − Utilized hours
   - Utilization rate (%) = (Utilized hours ÷ Available hours) × 100
   - Utilization gap (%) = 100% − Utilization rate

3. **Compute idle cost per unit:**
   - Idle cost = Idle hours × Fully loaded hourly rate
   - If the user provides a target utilization benchmark (e.g., 85%), also calculate:
     - Excess idle hours = Idle hours − (Available hours × (1 − target utilization))
     - Avoidable idle cost = Excess idle hours × Hourly rate

4. **Aggregate and rank:**
   - Sum total idle costs across all units
   - Rank units from highest to lowest idle cost
   - Flag any unit with utilization below 60% as a critical exposure

5. **Apply period normalization if needed:**
   - If the user provides partial-period data, annualize: Annualized cost = (Idle cost ÷ days in period) × 365
   - State the annualization assumption explicitly

6. **Surface root cause prompts:**
   - For the top 3 cost drivers, ask or note: scheduling gaps, demand variability, maintenance windows, or skills mismatch — whichever the user has indicated or seems most applicable.

## Output Format

Produce a structured report with these exact sections:

**Summary Line**
One sentence: total estimated idle cost for the period and number of units analyzed.

**Unit-Level Breakdown Table**
| Unit | Type | Available Hrs | Utilized Hrs | Utilization % | Idle Hrs | Hourly Rate | Idle Cost | Avoidable Cost* |
List all units, sorted by Idle Cost descending. Mark critical units (< 60% utilization) with ⚠️.

**Top Cost Drivers**
Bullet list of the 3 highest-cost idle sources with a one-line note on likely contributing factor.

**Aggregate Totals**
- Total idle cost (period)
- Total avoidable idle cost vs. benchmark (if benchmark provided)
- Annualized projection (if applicable)

**Assumptions & Data Gaps**
Bullet list of any rates estimated, missing inputs, or caveats affecting accuracy.

**Recommended Next Steps**
2–4 specific, prioritized actions (e.g., "Rebalance shift scheduling for Unit X to close 120-hour monthly gap worth $9,600").

Keep the report concise — no narrative padding between sections.
