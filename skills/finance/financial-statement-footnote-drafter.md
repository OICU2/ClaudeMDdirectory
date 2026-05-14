---
name: financial-statement-footnote-drafter
description: >
  Generates compliant footnote disclosures for financial statements covering significant accounting policies, estimates, and contingent liabilities. Use when someone says "draft footnotes for our financials," asks about "disclosing a contingent liability," wants to "document our accounting policies," needs to "write a footnote for revenue recognition," or is preparing "notes to financial statements." Supports US GAAP and IFRS frameworks.
category: finance
tags: [financial-statements, footnotes, disclosures, accounting, compliance, GAAP, IFRS]
author: community
---

# Financial Statement Footnote Drafter

This skill drafts technically compliant, audit-ready footnote disclosures for financial statements based on trial balance inputs, accounting policy details, or contingency descriptions provided by the user.

## Workflow

### Step 1: Gather Required Inputs
Before drafting, confirm the following with the user if not already provided:
- **Reporting framework**: US GAAP (ASC) or IFRS (IAS/IFRS)
- **Entity type**: Public, private, nonprofit, or governmental
- **Reporting period**: Fiscal year-end or interim period dates
- **Footnote type(s) needed**: Choose from categories below
- **Relevant figures**: Account balances, ranges, or estimates from the trial balance
- **Industry**: Affects specific disclosure requirements (e.g., banking, insurance, real estate)

### Step 2: Identify Footnote Category
Map the request to one or more standard footnote categories:

1. **Summary of Significant Accounting Policies** — basis of presentation, consolidation, revenue recognition, inventory method, depreciation, lease accounting
2. **Revenue Recognition** — performance obligations, transaction price allocation, contract assets/liabilities (ASC 606 / IFRS 15)
3. **Debt and Credit Facilities** — terms, covenants, maturity schedules, weighted average interest rates
4. **Leases** — ROU assets, lease liabilities, maturity table (ASC 842 / IFRS 16)
5. **Income Taxes** — effective rate reconciliation, deferred tax assets/liabilities, valuation allowances (ASC 740 / IAS 12)
6. **Contingent Liabilities** — probable vs. reasonably possible, estimated ranges, legal proceedings (ASC 450 / IAS 37)
7. **Fair Value Measurements** — Level 1/2/3 hierarchy, valuation techniques (ASC 820 / IFRS 13)
8. **Going Concern** — conditions, management's plans, substantial doubt language (ASC 205-40 / IAS 1)
9. **Subsequent Events** — recognized vs. non-recognized, event description (ASC 855 / IAS 10)
10. **Related Party Transactions** — nature, amounts, terms (ASC 850 / IAS 24)

### Step 3: Apply Disclosure Standards
For each footnote drafted:
- Cite the applicable authoritative standard (e.g., "In accordance with ASC 606...")
- Include all **required** disclosure elements under the standard; flag any **encouraged but optional** elements
- Use precise accounting language consistent with the standard's terminology
- Insert bracketed placeholders `[AMOUNT]`, `[DATE]`, `[ENTITY NAME]` for figures not yet provided
- Flag any disclosures where management judgment or legal counsel input is required

### Step 4: Handle Contingent Liabilities Specifically
For contingency footnotes, apply a three-tier assessment framework:
- **Probable + Estimable**: Accrue the liability; disclose the nature, accrued amount, and range if the estimate exceeds the accrual
- **Probable + Not Estimable**: Disclose without accrual; state that an estimate cannot be made
- **Reasonably Possible**: Disclose the nature and estimated range; explicitly state no accrual was recorded and why
- **Remote**: No disclosure required unless a guarantee; note this determination for the user
- Always include the boilerplate: "It is reasonably possible that the ultimate outcome could differ materially from management's estimate."

### Step 5: Quality Check Before Delivery
Review the draft against:
- [ ] All required disclosure elements for the cited standard are present
- [ ] No materiality thresholds violated (flag if balances seem below typical
