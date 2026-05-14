---
name: statutory-vs-gaap-income-reconciliation
description: >
  Identifies, classifies, and schedules the permanent and temporary differences between statutory taxable income and GAAP pre-tax book income to support the tax provision calculation and footnote disclosures. Use when someone says "reconcile book income to taxable income," asks about "permanent and temporary differences," wants to "build a tax provision schedule," needs to "explain the effective tax rate variance," or is preparing "ASC 740 footnote disclosures."
category: finance
tags: [tax, gaap, statutory, tax-provision, asc740, deferred-tax, reconciliation]
author: community
---

# Statutory vs. GAAP Income Reconciliation

This skill builds a structured schedule of permanent and temporary differences between GAAP pre-tax income and statutory taxable income, producing outputs suitable for tax provision workpapers and financial statement footnotes under ASC 740.

## Reconciliation Workflow

### 1. Establish the Starting Point
- Confirm GAAP pre-tax book income (loss) as the reconciliation anchor.
- Identify the applicable tax jurisdiction(s) and statutory rate(s).
- Note the fiscal year and entity type (C-Corp, S-Corp, partnership, etc.).

### 2. Identify and Classify Permanent Differences
Permanent differences affect taxable income but never reverse. Collect and categorize:
- **Book-to-tax addbacks (increase taxable income):** Meals & entertainment disallowance (50% or 100%), fines and penalties, officer life insurance premiums, lobbying expenses, excess executive compensation (IRC §162(m)).
- **Book-to-tax reductions (decrease taxable income):** Tax-exempt interest income (municipal bonds), dividends-received deduction (DRD), Section 199A deduction, life insurance proceeds.
- Label each item with the applicable IRC section or GAAP guidance driving the difference.

### 3. Identify and Classify Temporary Differences
Temporary differences create deferred tax assets (DTAs) or deferred tax liabilities (DTLs). Collect and categorize:
- **DTL-generating (taxable temporary differences):** Accelerated depreciation (MACRS vs. straight-line), installment sales revenue recognition, prepaid expenses deducted currently for tax.
- **DTA-generating (deductible temporary differences):** Warranty reserves, bad debt allowances (§166), deferred revenue recognized for book but not yet for tax, stock-based compensation (ISO vs. NQSO timing), net operating loss (NOL) carryforwards, lease liabilities (ASC 842 vs. tax treatment), accrued liabilities not yet deductible.
- For each temporary difference, record: beginning balance, current-year origination or reversal, and ending balance.

### 4. Compute Statutory Taxable Income
```
GAAP Pre-Tax Book Income
+ Permanent Addbacks
− Permanent Deductions
+ Temporary Difference Originations (DTL)
− Temporary Difference Originations (DTA)
+/− Temporary Difference Reversals
= Estimated Statutory Taxable Income
```

### 5. Compute the Tax Provision (ASC 740)
- **Current tax expense:** Taxable income × statutory rate, adjusted for credits (R&D, foreign tax, etc.).
- **Deferred tax expense/benefit:** Net change in DTA/DTL balances × enacted rate.
- **Total income tax provision:** Current + Deferred.
- Apply valuation allowance if realization of any DTA is not "more likely than not."

### 6. Effective Tax Rate (ETR) Reconciliation
Build the rate reconciliation table required by ASC 740-10-50:
- Start with statutory rate × GAAP pre-tax income = expected tax.
- Add/subtract the tax effect of each permanent difference.
- Show discrete items (return-to-provision adjustments, law changes, valuation allowance changes) separately.
- Arrive at actual income tax provision and resulting ETR.

### 7. Quality Checks
- Confirm the DTA/DTL roll-forward ties to the balance sheet.
- Verify the current tax expense approximates cash taxes paid ± changes in taxes payable.
- Ensure NOL carryforwards are tracked with expiration dates and limitation flags (§382).
- Cross-check
