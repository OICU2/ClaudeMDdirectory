---
name: commission-accrual-schedule-builder
description: >
  Builds monthly sales commission accrual journal entries by mapping earned commissions to the correct revenue recognition periods and tracking open deal pipeline status. Use when someone says "accrue commissions this month," asks about "commission expense timing," wants to "match commission costs to revenue," needs to "build a commission accrual schedule," or is trying to "reconcile pipeline commissions to closed deals."
category: finance
tags: [commissions, accruals, revenue-recognition, sales-ops, journal-entries]
author: community
---

# Commission Accrual Schedule Builder

This skill constructs a structured monthly commission accrual schedule that aligns commission expense recognition with deal close dates, revenue periods, and pipeline stage, then produces the corresponding journal entry data.

## Accrual Schedule Workflow

### 1. Collect Required Inputs
Prompt the user for the following if not provided:
- Commission period (month/year)
- Rep name(s) or territory
- Deal list with: deal name, close date, ARR or deal value, commission rate, and pipeline stage (Closed Won, Closed Lost, or open stage %)
- Whether commissions are paid on booking, cash receipt, or revenue recognition
- Any clawback or holdback policy (e.g., 90-day clawback on churn)

### 2. Categorize Deals by Recognition Trigger
Sort deals into three buckets:
- **Fully Earned**: Closed Won deals within the period — full commission accrues now
- **Pipeline Estimate**: Open deals weighted by stage probability — accrue at probability-adjusted value
- **Pending/At-Risk**: Deals inside clawback window — flag as contingent liability, do not fully recognize

### 3. Calculate Commission Amounts
For each deal:
- `Commission Amount = Deal Value × Commission Rate`
- `Weighted Pipeline Commission = Deal Value × Commission Rate × Stage Probability %`
- Sum totals by rep, then by period

### 4. Map to Revenue Recognition Period
- Match each commission accrual to the month the associated revenue is recognized (not necessarily the payment date)
- If revenue is recognized ratably (e.g., SaaS subscription), spread commission over the same schedule only if ASC 340-40 capitalization rules apply — otherwise expense in full at booking
- Flag any deals where revenue recognition period differs from commission payment period

### 5. Build Journal Entry
For each accrual line:
- **Debit**: Commission Expense (or Prepaid Commission Asset if capitalizing under ASC 340-40)
- **Credit**: Accrued Commissions Payable
- Include: date, deal reference, rep name, amount, GL account codes if provided

### 6. Pipeline Reconciliation Note
- List total open pipeline commission exposure by stage
- Show variance between probability-weighted accrual and worst-case (100% of open pipeline)
- Flag deals expected to close within 30 days for next-period accrual planning

## Output Format

Produce four clearly labeled sections:

**1. Commission Accrual Summary Table**
Markdown table with columns: Rep Name | Deal Name | Close Date | Deal Value | Rate | Commission Amount | Recognition Period | Accrual Status (Earned / Weighted / Contingent)

**2. Pipeline Exposure Table**
Markdown table with columns: Deal Name | Stage | Probability % | Full Commission | Weighted Accrual

**3. Journal Entry Block**
Formatted as:
```
Date: [YYYY-MM-DD]
Memo: Commission accrual — [Period]
  DR  Commission Expense          $[amount]
  CR  Accrued Commissions Payable $[amount]
```
One entry per rep or one consolidated entry, depending on user preference.

**4. Notes & Flags**
Bullet list of: clawback risks, recognition timing mismatches, deals requiring next-period follow-up, and any assumptions made about rates or probabilities.
