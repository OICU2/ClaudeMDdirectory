---
name: deferred-tax-asset-liability-schedule
description: >
  Builds a deferred tax asset and liability rollforward schedule organized by temporary difference category to support accurate balance sheet tax reporting. Use when someone says "build a deferred tax schedule," asks about temporary differences between book and tax, wants to reconcile deferred tax balances, needs to prepare ASC 740 supporting workpapers, or is analyzing changes in deferred tax assets and liabilities across periods.
category: finance
tags: [tax, deferred-tax, ASC-740, balance-sheet, rollforward]
author: community
---

# Deferred Tax Asset and Liability Schedule

This skill builds a structured deferred tax asset (DTA) and deferred tax liability (DTL) rollforward schedule by temporary difference category, used to support balance sheet tax reporting under ASC 740 or IFRS IAS 12.

## Workflow

### 1. Gather Inputs
Collect the following before building the schedule:
- Applicable statutory tax rate (federal + state blended, if applicable)
- Beginning-of-period DTA/DTL balances by category (or confirm if this is the first period)
- List of temporary difference categories (e.g., depreciation, accrued liabilities, stock compensation, lease obligations, goodwill, NOL carryforwards, revenue recognition, warranty reserves)
- Book vs. tax basis differences for each category at period end
- Any valuation allowance positions and supporting rationale
- Jurisdiction (U.S. GAAP ASC 740 vs. IFRS IAS 12) to apply correct presentation rules

### 2. Classify Each Temporary Difference
For each category, determine:
- **Deductible temporary difference** → gives rise to a DTA (e.g., accrued expenses not yet deductible, NOL carryforwards)
- **Taxable temporary difference** → gives rise to a DTL (e.g., accelerated tax depreciation, installment sale gains)
- Whether the item is **current period originating** or a **reversal** of a prior period difference

### 3. Calculate Gross DTA/DTL per Category
```
Temporary Difference Amount × Enacted Tax Rate = Gross DTA or DTL
```
- Use the enacted rate expected to apply when the difference reverses
- Flag any categories subject to indefinite reversal (e.g., goodwill amortization for DTLs)
- Identify carryforward expiration dates for NOLs and tax credits

### 4. Build the Rollforward per Category
For each temporary difference category, compute:
```
Ending Balance = Beginning Balance + Current Year Provision + Rate Change Adjustment + Other (OCI, equity, acquisitions)
```
Track each column separately:
- Beginning gross DTA/DTL
- Current year origination / (reversal)
- Tax rate change impact
- OCI or equity adjustments (e.g., stock compensation windfalls)
- Ending gross DTA/DTL

### 5. Apply Valuation Allowance
- Assess realizability under the "more likely than not" standard (ASC 740) or "probable" (IAS 12)
- Record a valuation allowance against any DTA where realization is uncertain
- Roll forward the valuation allowance separately with explanations for changes

### 6. Net Classification (ASC 740)
Under ASC 740-10-45 (post-ASU 2015-17):
- Present all DTAs and DTLs as **noncurrent** on the balance sheet
- Net DTAs against DTLs within the same tax jurisdiction
- Show separate jurisdiction netting where required

### 7. Tie to Financial Statements
- Confirm ending net DTA/DTL agrees to the balance sheet line items
- Reconcile the net change in deferred taxes to the deferred tax expense/benefit in the income statement
- Identify any amounts recorded to OCI (e.g., unrealized gains/losses, pension)

## Output Format

Produce the following structured output:

**1. Summary Table — Deferred Tax Asset and Liability Schedule**
A table with rows = temporary difference categories and columns:

| Category | Type | Beg. Balance | Origination / (Reversal) | Rate Change | OCI/Equity | End. Gross Balance | Valuation Allowance | Net DTA / (DTL) |
|---|---|---|---|---|---|---|
