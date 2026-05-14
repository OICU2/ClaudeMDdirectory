---
name: nol-carryforward-utilization-scheduler
description: >
  Projects annual utilization of net operating loss carryforwards against forecasted taxable income while applying Section 382 ownership change limitations. Use when someone asks about NOL scheduling, wants to model how much of their tax loss carryforwards they can use each year, or needs to apply Section 382 annual limitation caps to an NOL utilization waterfall. Also activates when someone is forecasting future tax liability and wants to offset it with existing NOL balances or needs to determine when NOL carryforwards will be fully consumed.
category: finance
tags: [tax, nol, section-382, carryforward, tax-planning]
author: community
---

# NOL Carryforward Utilization Scheduler

This skill builds a year-by-year schedule showing how net operating loss carryforwards are absorbed against projected taxable income, incorporating Section 382 annual caps where an ownership change has occurred.

## NOL Utilization Scheduling Workflow

### 1. Gather Inputs
Collect the following before building the schedule:
- **NOL inventory**: Each NOL tranche with origination year, amount, and expiration year (post-TCJA NOLs originated after 12/31/2017 carry forward indefinitely; pre-TCJA NOLs expire after 20 years)
- **Section 382 status**: Whether an ownership change occurred (>50% change in 5% shareholders within a 3-year testing period), the effective date, and the calculated Section 382 annual limitation (equity value at ownership change × applicable federal long-term tax-exempt rate)
- **Taxable income forecast**: Pre-NOL taxable income projections for each year in the schedule horizon (typically 5–20 years)
- **TCJA 80% limitation**: Confirm whether NOLs are subject to the 80% of taxable income cap (applies to NOLs arising after 12/31/2017)

### 2. Stratify NOL Tranches
Separate the NOL inventory into two pools:
- **Pre-2018 NOLs**: Subject to 20-year expiration, usable at 100% of taxable income (or Section 382 cap if applicable), consumed first by convention unless taxpayer elects otherwise
- **Post-2017 NOLs**: Indefinite carryforward, subject to 80% of taxable income limitation per year

### 3. Apply Section 382 Annual Limitation
If an ownership change occurred:
- The Section 382 annual limitation caps total NOL utilization per year (across all tranches) to the calculated annual amount
- Unused limitation in a given year carries forward and stacks onto the next year's available cap (cumulative unused limitation)
- Built-in gains (BIG) rules may allow utilization above the base annual limit during the recognition period (5 years post-change); flag if applicable
- If the loss corporation had a net unrealized built-in loss (NUBIL), additional restrictions apply to built-in losses recognized post-change

### 4. Build the Annual Utilization Schedule
For each forecast year, apply in this order:
1. Determine gross taxable income before NOL deduction
2. Apply Section 382 annual cap (plus any carryforward of unused limitation) to set the maximum NOL deductible
3. Within that cap, apply the 80% of taxable income limit to post-2017 NOL tranches
4. Consume pre-2018 NOL tranches first (FIFO by vintage year), respecting expiration deadlines
5. Apply remaining capacity to post-2017 NOL tranches
6. Calculate: NOL utilized, remaining NOL balance per tranche, expired NOLs (if any), taxable income after NOL, and estimated tax liability (apply the applicable corporate tax rate, default 21%)
7. Roll forward remaining NOL balances to the next year

### 5. Flag Risk Items
Identify and annotate:
- Pre-2018 NOL tranches at risk of expiring unutilized
- Years where the Section 382 cap is the binding constraint vs. years where taxable income is the binding constraint
- Any year where the cumulative Section 382 limitation carryforward creates a utilization spike
- Scenarios where total NOL balance will never be fully utilized given the forecast

### 6. Sensitivity Scenarios (Optional)
If taxable income projections are uncertain, produce
