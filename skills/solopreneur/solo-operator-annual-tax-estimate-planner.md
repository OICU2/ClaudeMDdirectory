---
name: solo-operator-annual-tax-estimate-planner
description: >
  Calculates quarterly estimated tax obligations for self-employed individuals by analyzing revenue, deductible expenses, and self-employment tax rates to prevent IRS underpayment penalties. Use when someone says "I'm worried about my tax bill," asks about quarterly estimated taxes, wants to know how much to set aside for taxes, is concerned about owing money at tax time, or needs to figure out their self-employment tax burden.
category: solopreneur
tags: [taxes, quarterly-estimates, self-employment, cash-flow, irs]
author: community
---

# Solo Operator Annual Tax Estimate Planner

This skill projects quarterly estimated federal tax obligations for solopreneurs and freelancers, calculating self-employment tax, income tax, and safe harbor amounts to prevent underpayment penalties.

## Tax Estimation Workflow

### Step 1: Gather Financial Inputs
Ask the user for the following if not already provided:
- **Gross revenue** (YTD actual + projected remainder of year)
- **Deductible business expenses** (YTD actual + projected)
- **Filing status** (single, married filing jointly, head of household)
- **Other household income** (spouse income, W-2 jobs, investments)
- **Prior year total tax liability** (from last year's tax return, line 24 on Form 1040)
- **State of residence** (for state tax note)
- **Payments already made** (estimated payments submitted so far this year)

### Step 2: Calculate Net Self-Employment Income
```
Net SE Income = Gross Revenue − Business Deductions
SE Tax Deduction = Net SE Income × 0.9235 × 0.153
Deductible SE Amount = SE Tax Deduction × 0.50
Adjusted Gross Income (AGI) = Net SE Income − Deductible SE Amount − other above-the-line deductions
```

### Step 3: Calculate Federal Income Tax
- Apply standard deduction based on filing status:
  - Single: $14,600 (2024)
  - Married Filing Jointly: $29,200 (2024)
  - Head of Household: $21,900 (2024)
- Apply current federal tax brackets to taxable income
- Add SE tax to income tax for total federal tax liability

### Step 4: Apply Safe Harbor Rules
Two safe harbor options — use whichever is **smaller** to avoid penalties:
- **Option A:** Pay 100% of prior year tax liability (110% if prior year AGI > $150,000)
- **Option B:** Pay 90% of current year estimated tax liability

### Step 5: Calculate Per-Quarter Payment
```
Remaining Tax Owed = Total Annual Tax − Payments Already Made
Quarters Remaining = (count of unpaid due dates: Apr 15, Jun 15, Sep 15, Jan 15)
Payment Per Quarter = Remaining Tax Owed ÷ Quarters Remaining
```

### Step 6: Flag Risk Factors
Warn the user if any of the following apply:
- Payments already missed for passed quarters
- Income is highly variable (suggest conservative high estimate)
- Prior year liability is unavailable (default to 90% current year method)
- State estimated taxes may also apply (prompt them to check)

## Output Format

Produce a structured summary with the following sections:

---

**📊 Tax Estimate Summary — [Current Year]**

**Your Numbers**
- Projected Gross Revenue: $X
- Projected Business Deductions: $X
- Net Self-Employment Income: $X

**Federal Tax Breakdown**
- Self-Employment Tax (15.3%): $X
- SE Deduction (50%): $X
- Estimated Federal Income Tax: $X
- **Total Estimated Federal Tax: $X**

**Safe Harbor Calculation**
- Option A (prior year method): $X/year → $X/quarter
- Option B (90% current year): $X/year → $X/quarter
- ✅ Recommended method: [A or B] — saves $X

**Quarterly Payment Schedule**
| Due Date | Amount Due | Cumulative Paid |
|---|---|---|
| April 15 | $X | $X |
| June 15 | $X | $X |
| September 15 | $X |
