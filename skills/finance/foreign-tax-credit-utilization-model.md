---
name: foreign-tax-credit-utilization-model
description: >
  Maps foreign-source income and tax paid by jurisdiction to calculate available foreign tax credits and optimize their utilization against domestic tax liability. Use when someone needs to calculate foreign tax credits, asks about offsetting taxes paid abroad, wants to avoid double taxation on international income, is trying to maximize FTC utilization across tax baskets, or needs to determine excess credit carryforward amounts.
category: finance
tags: [foreign-tax-credit, international-tax, tax-optimization, FTC, cross-border-income]
author: community
---

# Foreign Tax Credit Utilization Model

This skill calculates available foreign tax credits by jurisdiction and income basket, then optimizes their utilization against domestic tax liability to minimize overall tax burden and track carryforwards.

## FTC Calculation Workflow

### Step 1: Collect Input Data
Gather the following for each jurisdiction:
- Country name and applicable tax treaty status
- Gross foreign-source income (by income category: general, passive, GILTI, PTEP, branch)
- Foreign taxes paid or accrued (in local currency and USD)
- Applicable foreign tax rate
- Domestic taxable income and pre-credit tax liability
- Prior-year FTC carryforward balances (by basket, up to 10-year window)

### Step 2: Classify Income Into Baskets
Separate income into IRS-defined limitation baskets:
- **Passive basket**: dividends, interest, royalties, rents from foreign sources
- **General basket**: active business income, wages, services income
- **GILTI basket**: global intangible low-taxed income from CFCs
- **Branch basket**: income from foreign branch operations
- **Section 901(j) basket**: income from sanctioned countries (non-creditable — flag separately)

### Step 3: Calculate the FTC Limitation Per Basket
Apply the IRC §904 formula for each basket:

```
FTC Limitation = (Foreign-Source Taxable Income / Worldwide Taxable Income) × U.S. Tax Before Credits
```

- Use separate-basket calculations; do not blend across baskets
- Apply FEIE exclusion adjustments if the taxpayer claims §911 exclusion (reduces foreign income in formula)
- Adjust for disallowed taxes: taxes on excluded income, taxes reimbursed by employer, taxes on income not subject to U.S. tax

### Step 4: Determine Creditable vs. Excess Foreign Taxes
For each basket:
- **Creditable amount** = lesser of (foreign taxes paid) or (FTC limitation)
- **Excess foreign taxes** = foreign taxes paid − FTC limitation (if positive)
- Flag excess credits for carryback (1 year) or carryforward (10 years)
- Apply carryback before carryforward; use oldest carryforward credits first (FIFO)

### Step 5: Optimize Credit Utilization
Run the following checks:
1. **High-tax kickout**: Reclassify passive income taxed above 90% of U.S. rate to general basket
2. **GILTI haircut**: Apply 20% disallowance on GILTI basket credits (only 80% of foreign taxes on GILTI are creditable); check §250 deduction interaction
3. **Treaty benefits**: Note if treaty reduces withholding rate (credits limited to treaty-reduced rate)
4. **Alternative minimum tax**: Check AMTFTC limitation (90% cap) if applicable
5. **Deduction vs. credit election**: Compare total tax under credit election vs. deduction election (deduction favorable when foreign rates are low or income is small)

### Step 6: Calculate Net U.S. Tax Liability
```
Net U.S. Tax = U.S. Tax Before Credits − FTC Used − Other Credits
Remaining FTC (carryforward) = Creditable Amount − FTC Used
```

### Step 7: Summarize Carryforward Schedule
For each basket, produce a year-by-year carryforward table showing:
- Year generated
- Original excess credit
- Amount used in subsequent years
- Remaining balance
- Expiration year (10 years from generation year)

## Output Format

Produce a structured report with the following sections:

**1. Income & Tax Summary Table**
| Jurisdiction | Basket | Gross Income (USD) | Foreign Tax Paid (USD) | Effective Foreign
