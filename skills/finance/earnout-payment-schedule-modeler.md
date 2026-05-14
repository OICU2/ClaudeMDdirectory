---
name: earnout-payment-schedule-modeler
description: >
  Models post-acquisition earnout payment schedules based on performance milestones, revenue thresholds,
  and agreed-upon payout formulas. Use when someone says "we have an earnout clause in our acquisition,"
  asks about "how much earnout will be paid out," wants to "model earnout payments over time," needs to
  "structure milestone-based acquisition payments," or is trying to "calculate earnout liability" for
  accounting or negotiation purposes.
category: finance
tags: [earnout, mergers-and-acquisitions, financial-modeling, payment-schedules, deal-structuring]
author: community
---

# Earnout Payment Schedule Modeler

This skill builds detailed, period-by-period earnout payment schedules from deal terms and performance inputs, producing tables and formulas Claude uses whenever someone needs to model, audit, or negotiate earnout structures post-acquisition.

## Earnout Modeling Workflow

### 1. Gather Deal Parameters
Collect the following before modeling — ask for any missing inputs:
- **Earnout period**: Start date, end date, and measurement intervals (annual, quarterly, monthly)
- **Maximum earnout**: Total cap on aggregate payments
- **Performance metric(s)**: Revenue, EBITDA, gross profit, unit sales, or custom KPI
- **Threshold structure**: Choose from:
  - *Binary*: Hit target → full payment; miss → zero
  - *Linear/pro-rata*: Payment scales proportionally between floor and ceiling
  - *Tiered*: Different payout rates at defined bands
  - *Accelerator/cliff*: Bonus multiplier above a stretch target
- **Payout formula or rate**: Dollar amount per unit, percentage of metric, or fixed tranches
- **Baseline / budget figures**: Agreed forecast used as the target
- **Carryforward / catch-up provisions**: Whether missed periods can be recovered in later periods
- **Discount rate** (optional): For presenting NPV of earnout liability

### 2. Build the Period-by-Period Schedule

For each measurement period:
1. Record the **target metric value** (from deal terms or agreed budget)
2. Record the **actual or projected metric value**
3. Calculate **achievement rate**: `Actual ÷ Target × 100%`
4. Apply the payout formula:
   - *Binary*: `IF achievement ≥ 100% THEN max_period_payment ELSE 0`
   - *Linear*: `MAX(0, MIN(achievement_rate, 1)) × max_period_payment`
   - *Tiered*: Map achievement rate to the correct band and apply that band's rate
   - *Accelerator*: Apply base rate up to 100%, then accelerator rate on the excess
5. Apply any **carryforward logic** (add deficit or credit from prior periods)
6. Apply **cumulative cap check**: `MIN(period_payment, max_earnout − cumulative_paid_to_date)`
7. Record **cumulative earnout paid** after each period

### 3. Handle Edge Cases
- **Partial periods**: Pro-rate targets for stub periods at deal close or end
- **Metric adjustments**: Note any normalized/adjusted metric definitions (e.g., excluding acquisition costs)
- **Change-of-control clauses**: Flag if a secondary sale triggers acceleration
- **Dispute adjustments**: Show alternate scenario columns if metric definitions are contested

### 4. Sensitivity Analysis
Build at least three scenarios:
- **Bear case**: 70–80% of target achievement
- **Base case**: 95–105% of target achievement
- **Bull case**: 120%+ of target achievement (test accelerator provisions)

Show total earnout paid and NPV under each scenario.

## Output Format

Produce the following sections in order:

**1. Deal Summary Table**
A concise table listing: earnout period, maximum earnout, measurement frequency, performance metric, payout structure type, and applicable formula.

**2. Period-by-Period Payment Schedule**
A table with columns:
`Period | Target Metric | Actual/Projected Metric | Achievement % | Gross Payment | Carryforward Adjustment | Net Payment | Cumulative Paid | Remaining Cap`

Rows for every measurement period plus a **Totals** row.

**3. Payout Formula Reference**
Plain-English description
