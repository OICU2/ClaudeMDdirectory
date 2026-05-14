---
name: customer-rebate-accrual-model
description: >
  Calculates period-end rebate accruals based on customer purchase volumes, tiered rebate schedules,
  and projected year-end attainment. Use when someone asks about rebate accruals, needs to estimate
  customer rebate liabilities, wants to model tiered rebate schedules, is closing the books and needs
  accrual entries, or is trying to true-up rebate reserves.
category: finance
tags: [rebates, accruals, revenue, close, customer-incentives]
author: community
---

# Customer Rebate Accrual Model

This skill builds a period-end rebate accrual model that estimates the liability owed to customers based on their purchase volumes, tiered rebate rates, and expected full-year attainment, and produces journal entry amounts and supporting schedules.

## Rebate Accrual Workflow

### 1. Collect Inputs
Gather the following for each customer or customer group:
- **YTD purchase volume** (units or dollars)
- **Full-year purchase forecast** or expected attainment rate (%)
- **Tiered rebate schedule**: thresholds and corresponding rebate rates (e.g., 0–$500K = 1%, $500K–$1M = 2%, >$1M = 3%)
- **Rebates already paid or credited** in the current period
- **Period start and end dates**

### 2. Determine Expected Full-Year Volume
- If an attainment forecast is provided, use it directly.
- Otherwise, annualize YTD volume: `Projected Annual = (YTD Volume / Elapsed Months) × 12`
- Apply any known seasonality or customer-provided purchase commitments as overrides.

### 3. Apply Tiered Rebate Schedule
For each customer, calculate the rebate on projected annual volume:
- Identify which tier(s) the projected volume falls into.
- Apply a **blended rate** across tiers (not just the highest tier) unless the contract specifies otherwise.
- Formula: `Expected Annual Rebate = Σ (volume in each tier × tier rate)`

### 4. Calculate Period Accrual
- `Accrual Rate = Elapsed Period / Full Year` (e.g., 9/12 for Q3 close)
- `Cumulative Rebate Earned = Expected Annual Rebate × Accrual Rate`
- `Period Accrual = Cumulative Rebate Earned − Rebates Already Paid/Credited`
- Flag negative values (over-accrual) separately for review.

### 5. Summarize and Validate
- Sum accruals across all customers.
- Compare total accrual to prior period for reasonableness (flag variances >15%).
- Note customers approaching a tier threshold where a small volume increase would materially change their rebate rate.
- Document any manual overrides or assumptions.

### 6. Prepare Journal Entry
- **Debit**: Net Sales / Revenue (or contra-revenue account per policy)
- **Credit**: Accrued Customer Rebates (balance sheet liability)
- Amount: total period accrual

## Output Format

Produce the following three sections:

**1. Customer Rebate Accrual Schedule (table)**
| Customer | YTD Volume | Projected Annual Volume | Blended Rebate Rate | Expected Annual Rebate | Cumulative Earned | Prior Payments | Period Accrual |
|---|---|---|---|---|---|---|---|
One row per customer, totals row at bottom.

**2. Journal Entry Summary**
```
DR  Net Sales / Revenue          $[amount]
CR  Accrued Customer Rebates     $[amount]
Period: [start date] – [end date]
Basis: [attainment assumption, e.g., "YTD annualized" or "customer forecast"]
```

**3. Flags and Notes**
- Customers within 10% of a tier threshold (volume sensitivity alert)
- Any over-accrual situations
- Customers where attainment assumption differs from YTD run rate by >20%
- Recommended true-up actions if year-end attainment looks materially different from forecast
