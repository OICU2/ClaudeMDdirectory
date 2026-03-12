---
name: tax-provision-calculation
category: finance
description: >
  Estimates current and deferred tax liabilities using temporary differences, NOL carryforwards, and applicable statutory tax rates. Use when someone asks to calculate a tax provision, needs help with ASC 740 or IAS 12 tax accounting, wants to estimate deferred tax assets and liabilities, is working through an end-of-period tax accrual, or needs to reconcile effective tax rate to statutory rate.
tags: [tax, accounting, deferred-tax, ASC740, finance]
author: community
---

# Tax Provision Calculation

This skill walks through the full current and deferred tax provision calculation, including temporary difference scheduling, NOL analysis, and effective tax rate reconciliation, and activates whenever a user needs to estimate or model income tax expense under GAAP or IFRS.

## Calculation Workflow

### 1. Gather Inputs
Collect the following before proceeding:
- Pretax book income (GAAP/IFRS)
- Applicable statutory tax rate(s) (federal, state, blended)
- List of permanent differences (non-deductible expenses, exempt income)
- List of temporary differences (depreciation timing, accruals, deferred revenue, stock comp, etc.)
- Existing deferred tax asset (DTA) and deferred tax liability (DTL) balances from prior period
- NOL carryforward balances and expiration schedule
- Valuation allowance assessment (if any)

### 2. Compute Taxable Income
```
Taxable Income = Pretax Book Income
  + Permanent Differences (addbacks)
  - Permanent Differences (exclusions)
  + / - Temporary Difference Reversals (current year originating or reversing)
  - NOL Utilized (subject to 80% limitation under TCJA if applicable)
```

### 3. Calculate Current Tax Expense
```
Current Tax Expense = Taxable Income × Statutory Tax Rate
```
Flag if taxable income is negative (no current tax; potential NOL carryforward created).

### 4. Schedule Temporary Differences
Build a table with columns:
- Difference type
- Book basis
- Tax basis
- Temporary difference (book minus tax)
- DTA or DTL classification
- Ending balance (current year)
- Prior year balance
- Change (originating or reversing)

Multiply ending temporary differences by the enacted future tax rate to get DTA/DTL balances.

### 5. Assess Valuation Allowance
- Determine if it is more likely than not (>50%) that DTAs will be realized
- Consider sources of future taxable income: reversing DTLs, projections, tax planning strategies
- Record or adjust valuation allowance as needed; valuation allowance changes flow through deferred tax expense

### 6. Calculate Deferred Tax Expense
```
Deferred Tax Expense = Change in Net DTL position
  = (Ending Net DTL - Beginning Net DTL)
  + Valuation Allowance Change
```
A net increase in DTL (or decrease in DTA) = deferred tax expense.
A net decrease in DTL (or increase in DTA) = deferred tax benefit.

### 7. Total Tax Provision
```
Total Income Tax Expense = Current Tax Expense + Deferred Tax Expense
Effective Tax Rate = Total Income Tax Expense / Pretax Book Income
```

### 8. ETR Reconciliation
Reconcile from statutory rate to effective rate, itemizing:
- State and local taxes (net of federal benefit)
- Permanent differences (meals, fines, tax-exempt income)
- Stock-based compensation (excess tax benefits/deficiencies)
- R&D tax credits
- Uncertain tax positions (ASC 740-10 / FIN 48 reserves)
- Valuation allowance changes
- Rate differentials (foreign operations)
- Other discrete items

## Output Format

Produce a structured response with the following sections:

**1. Inputs Summary** — bullet list of all values used

**2. Taxable Income Bridge** — step-by-step table showing book-to-tax adjustments with running total

**3. Current Tax Expense** — single calculation line with result

**4. Temporary Difference Schedule** — formatted table (difference type | book basis | tax basis | temp diff | DTA/DTL |
