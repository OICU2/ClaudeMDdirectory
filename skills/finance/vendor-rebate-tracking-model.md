---
name: vendor-rebate-tracking-model
description: >
  Tracks earned and accrued vendor rebates against purchase thresholds and calculates expected cash receipts by rebate agreement period. Use when someone asks about vendor rebate calculations, wants to track rebate accruals against purchasing targets, needs to forecast rebate income from supplier agreements, is reconciling rebate receivables on the balance sheet, or wants to model tiered rebate structures tied to volume commitments.
category: finance
tags: [rebates, vendor-management, accruals, accounts-receivable, procurement]
author: community
---

# Vendor Rebate Tracking Model

This skill builds a structured model to track earned and accrued vendor rebates against purchase thresholds, calculate tier attainment, and forecast expected cash receipts across rebate agreement periods.

## Rebate Tracking Workflow

### 1. Capture Agreement Terms
Collect the following for each vendor rebate agreement:
- Vendor name and agreement ID
- Agreement period (start date, end date)
- Rebate type: flat rate, tiered volume, or growth-based
- Tier structure: purchase thresholds (e.g., $0–$500K = 1%, $500K–$1M = 2%, >$1M = 3%)
- Payment terms: when cash is received (e.g., quarterly, annually, 60 days after period end)
- Cumulative vs. incremental tier calculation method

### 2. Log Purchases by Period
- Record actual purchases by vendor, by month or quarter
- Accumulate YTD or period-to-date spend against each agreement's threshold ladder
- Flag vendors approaching a tier threshold (within 10% of next tier) for procurement review

### 3. Calculate Earned Rebates
- **Cumulative method**: Apply the highest attained rate to all purchases once a tier is crossed
- **Incremental method**: Apply each rate only to spend within that tier band
- Formula example (cumulative): `Earned Rebate = Total Spend × Attained Rate`
- Formula example (incremental): Sum across bands: `(Tier Max - Tier Min) × Tier Rate` for completed tiers, plus `(YTD Spend - Last Tier Floor) × Current Rate` for active tier

### 4. Accrue Rebates on the Balance Sheet
- Accrue rebates monthly as a receivable: `Rebate Receivable += Monthly Earned Rebate`
- Book entry: Debit Rebate Receivable (asset), Credit Rebate Income or COGS offset
- Track accrual vs. cash received to maintain an open receivable balance
- At period end, reconcile accrued balance to vendor statements

### 5. Forecast Expected Cash Receipts
- Project remaining spend to period end using run-rate or budget figures
- Calculate expected total earned rebate at period end
- Subtract cash already received to get expected receivable cash inflow
- Bucket forecasted receipts into the appropriate cash flow period per payment terms

### 6. Variance and Attainment Reporting
- Calculate tier attainment %: `YTD Spend / Threshold to Next Tier × 100`
- Show gap-to-next-tier in dollars
- Compare accrued rebate to prior year and to budget
- Flag agreements at risk of falling short of minimum thresholds (if clawback provisions exist)

## Output Format

Produce a structured rebate tracking summary with the following sections:

**1. Rebate Agreement Summary Table**
| Vendor | Agreement Period | Rebate Type | Current Tier | YTD Spend | Earned Rebate | Accrued Balance | Next Tier Gap |
(One row per active agreement)

**2. Tier Attainment Detail**
For each vendor: list all tiers, spend allocated to each tier, rate applied, and rebate earned per tier. Show cumulative vs. incremental breakdown if applicable.

**3. Rebate Accrual Roll-Forward**
Opening balance → Accruals added → Cash received → Closing receivable balance, by period.

**4. Cash Receipt Forecast**
Table of expected rebate cash inflows by vendor and by receipt period (month/quarter), based on projected full-period spend and payment terms.

**5. Alerts and Action Items**
- Vendors within 10% of next tier threshold (opportunity to accelerate spend)
- Vendors
