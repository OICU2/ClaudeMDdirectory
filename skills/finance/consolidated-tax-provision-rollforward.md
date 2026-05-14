---
name: consolidated-tax-provision-rollforward
description: >
  Tracks current and deferred tax components across multiple legal entities and builds a
  consolidated tax provision rollforward schedule for period-end close. Use when someone says
  "prepare the tax provision," asks about "deferred tax rollforward," wants to "consolidate
  tax balances across entities," needs to "reconcile the effective tax rate," or is working
  on "period-end tax close."
category: finance
tags: [tax-provision, deferred-tax, consolidation, period-end-close, effective-tax-rate]
author: community
---

# Consolidated Tax Provision Rollforward

This skill builds a structured consolidated tax provision rollforward schedule by collecting current and deferred tax inputs across entities, applying rate changes and temporary differences, and producing a period-end close-ready output with an effective tax rate reconciliation.

## Workflow

### 1. Gather Inputs
Collect the following for each entity before proceeding:
- Legal entity name and jurisdiction
- Pre-tax book income (current period)
- Statutory tax rate (federal + state/local blended, if applicable)
- Prior period deferred tax asset (DTA) and deferred tax liability (DTL) balances
- Current period temporary differences (originating and reversing), categorized by type:
  - Depreciation / accelerated cost recovery
  - Accruals not yet deductible
  - Stock-based compensation
  - Net operating loss (NOL) carryforwards
  - Valuation allowances
  - Other (specify)
- Permanent differences (non-deductible expenses, exempt income)
- Discrete items (return-to-provision adjustments, rate change impacts, prior period corrections)
- Any intercompany tax-sharing agreement terms

### 2. Compute Entity-Level Tax Provision
For each entity:
1. **Current tax expense** = (Pre-tax book income − Temporary differences − Permanent differences) × Statutory rate
2. **Deferred tax expense/benefit** = Net change in DTA/DTL balances driven by temporary differences × Enacted rate
3. **Total tax provision** = Current tax expense + Deferred tax expense/benefit + Discrete items
4. **Effective tax rate (ETR)** = Total tax provision ÷ Pre-tax book income
5. Flag any valuation allowance changes with supporting rationale (more-likely-than-not assessment)
6. Apply rate change remeasurement to all deferred balances if statutory rate changed in the period

### 3. Build the Rollforward Schedule
For each temporary difference category and each entity, populate:

| Column | Description |
|---|---|
| Opening balance | DTA/DTL at start of period |
| Originating differences | New temporary differences created |
| Reversing differences | Prior temporary differences that reversed |
| Rate change adjustment | Remeasurement due to enacted rate change |
| Valuation allowance movement | Increases/decreases to VA |
| Closing balance | DTA/DTL at end of period |

### 4. Consolidate Across Entities
1. Aggregate entity-level DTA/DTL balances line by line
2. Eliminate intercompany tax-sharing receivables/payables
3. Classify DTAs and DTLs as current vs. non-current per jurisdiction (or net by jurisdiction where legally enforceable right to offset exists)
4. Sum current tax expense and deferred tax expense across all entities
5. Compute consolidated pre-tax income and consolidated ETR

### 5. ETR Reconciliation
Prepare a rate bridge from statutory rate to actual ETR:
- Start: Federal statutory rate
- Add/subtract: State and local taxes (net of federal benefit)
- Add/subtract: Permanent differences (meals, fines, tax-exempt income)
- Add/subtract: Stock-based compensation (excess tax benefits)
- Add/subtract: Valuation allowance changes
- Add/subtract: Return-to-provision adjustments
- Add/subtract: Foreign rate differentials
- Add/subtract: Other discrete items
- Result: Effective tax rate

### 6. Validation Checks
Run these checks before finalizing:
- Confirm closing DTA/DTL balances reconcile to balance sheet tax line items
- Confirm total provision ties to income tax expense on the income statement
- Verify no DTL offsets DTA across jurisdictions unless legally permissible
- Flag any
