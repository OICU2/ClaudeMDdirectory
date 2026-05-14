---
name: interperiod-tax-allocation-schedule
description: >
  Builds a structured schedule allocating income tax expense between current and deferred components across reporting periods for GAAP compliance. Use when someone asks about interperiod tax allocation, needs to separate current from deferred tax expense, wants to reconcile book income to taxable income across periods, is preparing ASC 740 tax provision schedules, or needs to track temporary differences and their tax effects over time.
category: finance
tags: [tax, deferred-tax, ASC-740, GAAP, tax-provision]
author: community
---

# Interperiod Tax Allocation Schedule

This skill builds a complete interperiod tax allocation schedule that splits total income tax expense into current and deferred components, tracks temporary differences, and ensures GAAP compliance under ASC 740 across one or more reporting periods.

## Workflow

1. **Gather inputs**: Collect pretax book income, enacted tax rate(s), taxable income (or book-tax differences), beginning deferred tax asset/liability balances, and any valuation allowances.

2. **Identify and classify temporary differences**: List each temporary difference (e.g., depreciation, warranty reserves, deferred revenue, stock compensation, bad debt allowance). Label each as either:
   - *Taxable temporary difference* → future deferred tax liability (DTL)
   - *Deductible temporary difference* → future deferred tax asset (DTA)

3. **Calculate current tax expense**: Multiply taxable income by the enacted tax rate. This is the current portion — the actual tax owed to tax authorities for the period.

4. **Calculate deferred tax expense or benefit**:
   - Compute ending DTA and DTL balances: (cumulative temporary difference) × enacted tax rate
   - Deferred tax expense = ending DTL − beginning DTL
   - Deferred tax benefit = ending DTA − beginning DTA
   - Net deferred tax expense/(benefit) = change in net deferred tax liability position

5. **Apply valuation allowance**: If it is more likely than not that some DTA will not be realized, record a valuation allowance. Increase or decrease the allowance as conditions change, recording the adjustment through income tax expense.

6. **Reconcile total tax expense**: Verify:
   - Current tax expense + Deferred tax expense/(benefit) = Total income tax expense
   - Total income tax expense ÷ Pretax book income = Effective tax rate
   - Cross-check effective rate against statutory rate; explain significant variances (permanent differences, rate changes, discrete items).

7. **Roll forward deferred tax balances**: Update the DTA/DTL rollforward table from beginning to ending balances, showing additions, reversals, and rate change adjustments.

8. **Flag disclosure items**: Note any uncertain tax positions (ASC 740-10), rate reconciliation line items exceeding 5% of expected tax, carryforward attributes with expiration dates, and intraperiod allocation considerations.

## Output Format

Produce the following sections in order:

**1. Inputs Summary Table**
| Item | Amount |
List pretax book income, taxable income, statutory rate, beginning DTA/DTL balances.

**2. Temporary Differences Schedule**
| Difference | Type | Book Basis | Tax Basis | Difference | Tax Effect |
One row per temporary difference; subtotal DTAs and DTLs separately.

**3. Current Tax Expense Calculation**
Single calculation block: Taxable income × rate = current tax expense.

**4. Deferred Tax Expense/(Benefit) Calculation**
Show ending vs. beginning net deferred tax position; derive the deferred component.

**5. Valuation Allowance Analysis**
State whether an allowance is required, the amount, and the realization assessment rationale.

**6. Total Tax Expense Reconciliation**
| Component | Amount |
Current + Deferred = Total; effective rate stated explicitly.

**7. Effective Rate Reconciliation**
| Item | % of Pretax Income |
Statutory rate adjusted for permanent differences, state taxes, discrete items, and other variances to arrive at the effective rate.

**8. DTA/DTL Rollforward Table**
| Balance Sheet Item | Beginning | Additions | Reversals | Ending |
One row per temporary difference category plus valuation allowance.

**9. Key Disclosures Checklist**
Bullet list of required ASC 
