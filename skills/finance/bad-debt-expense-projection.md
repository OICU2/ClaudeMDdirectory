---
name: bad-debt-expense-projection
description: >
  Projects future bad debt expense by analyzing historical write-off rates, aging bucket trends,
  and customer credit scores to build a forward-looking reserve estimate. Use when someone asks
  about estimating uncollectible accounts, wants to forecast bad debt expense, needs to set
  allowance for doubtful accounts, is reviewing accounts receivable reserve adequacy, or wants
  to model credit loss exposure for an upcoming period.
category: finance
tags: [bad-debt, accounts-receivable, credit-risk, forecasting, allowance-for-doubtful-accounts]
author: community
---

# Bad Debt Expense Projection

This skill builds a structured forward-looking bad debt expense estimate using historical write-off data, AR aging analysis, and credit quality inputs, and Claude will use it whenever someone needs to quantify expected credit losses or set reserve levels.

## Bad Debt Projection Workflow

### Step 1: Gather Inputs
Request the following data from the user if not already provided:
- Accounts receivable aging schedule (current, 30, 60, 90, 120+ days buckets)
- Historical write-off amounts by period (minimum 2–3 years preferred)
- Total AR balance per period corresponding to write-off history
- Customer credit score distribution or risk tier breakdown (if available)
- Industry or company-specific collection policies (e.g., write-off threshold, days to charge-off)

### Step 2: Calculate Historical Write-Off Rates
- Compute average write-off rate: `Total Write-Offs / Total AR Balance` for each historical period
- Break down by aging bucket if historical data supports it (bucket-specific loss rates are more accurate)
- Identify trend direction: is the write-off rate increasing, decreasing, or stable?
- Flag any anomaly years (e.g., pandemic-period spikes) and note whether to include or exclude them from the baseline

### Step 3: Apply Aging Bucket Loss Rates
Use industry benchmarks if historical bucket-level data is unavailable. Common starting assumptions:
- Current (0–30 days): 0.5–1%
- 31–60 days: 2–4%
- 61–90 days: 5–10%
- 91–120 days: 15–25%
- 120+ days: 40–75%

Apply the calculated or benchmark rate to each bucket's current balance:
`Estimated Loss = Aging Bucket Balance × Loss Rate`

Sum across all buckets to get the **total reserve requirement**.

### Step 4: Adjust for Credit Score / Risk Tier Data
If customer credit score or risk tier data is available:
- Segment AR by risk tier (e.g., low / medium / high risk)
- Apply differentiated loss rates per tier rather than a single blended rate
- Recalculate total reserve with tier-weighted rates

### Step 5: Compute Forward Bad Debt Expense
- **Required Reserve** = Total estimated loss from Step 3 (adjusted by Step 4 if applicable)
- **Existing Allowance Balance** = Current balance in the Allowance for Doubtful Accounts
- **Bad Debt Expense for Period** = Required Reserve − Existing Allowance Balance
  - If positive: record bad debt expense (debit Bad Debt Expense, credit Allowance)
  - If negative: reverse excess reserve (debit Allowance, credit Bad Debt Expense)

### Step 6: Sensitivity Analysis
Run at least two alternate scenarios:
- **Optimistic**: Apply the lowest historical write-off rate observed
- **Pessimistic**: Apply the highest historical write-off rate or a stressed rate (+25–50% above base)
- Present the range of bad debt expense outcomes across scenarios

## Output Format

Produce a structured projection report with the following sections:

**1. Input Summary**
- AR aging schedule with balances per bucket (table)
- Historical write-off rate summary (table: period, write-offs, AR balance, rate)

**2. Loss Rate Assumptions**
- Table showing each aging bucket, applied loss rate, source (historical or benchmark), and rationale for any adjustments

**3. Reserve Calculation**
- Table: Aging Bucket | Balance | Loss Rate | Estimated Loss
- Total Required Reserve (bolded)
- Existing Allowance Balance
- **Bad Debt Expense for Period** (bolded,
