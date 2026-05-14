---
name: direct-vs-indirect-cost-reclassification
description: >
  Reviews expense line items and reclassifies direct versus indirect costs to produce cleaner gross margin reporting aligned with GAAP standards. Use when someone says "our gross margin looks off," asks about reclassifying costs, wants to separate COGS from operating expenses, needs to clean up cost categorization, or is preparing financials for investor review. Triggers on phrases like "cost allocation," "reclassify expenses," or "fix our gross margin."
category: finance
tags: [cost-accounting, gross-margin, GAAP, COGS, expense-classification]
author: community
---

# Direct vs. Indirect Cost Reclassification

This skill audits expense line items, reclassifies them as direct (COGS) or indirect (operating expense) costs, and produces restated gross margin figures aligned with GAAP standards.

## Reclassification Workflow

1. **Collect inputs**: Request the chart of accounts, trial balance or expense ledger, and any existing P&L. Ask for the company's revenue model (product, SaaS, services, manufacturing) — classification rules differ by business type.

2. **Apply GAAP classification rules**:
   - **Direct costs (COGS)**: Expenses directly tied to producing revenue — raw materials, direct labor, cloud hosting for SaaS products, merchant fees, packaging, shipping to customer, manufacturing overhead directly attributable to production.
   - **Indirect costs (OpEx)**: Expenses not directly tied to production — sales salaries, marketing spend, G&A, office rent, executive compensation, legal/accounting fees, R&D (unless capitalizable under ASC 350).
   - **Common misclassifications to flag**:
     - Customer success salaries buried in COGS when they belong in OpEx
     - Developer salaries for internal tooling posted to COGS instead of R&D
     - General office rent allocated to COGS without a defensible usage split
     - Payment processing fees missing from COGS entirely

3. **Flag ambiguous items**: For costs that could legitimately sit in either category (e.g., shared infrastructure, partially customer-facing engineering), document the allocation rationale and apply a consistent percentage split. Note any items requiring management judgment.

4. **Restate gross margin**: Recalculate revenue minus reclassified COGS to produce a corrected gross margin figure. Compute the delta from the original reported gross margin.

5. **Validate reasonableness**: Compare restated gross margin % against industry benchmarks for the company's sector. Flag if the result is an outlier that warrants additional review.

## Output Format

Produce the following in order:

**1. Reclassification Table**
A line-item table with columns: `Expense Name | Original Category | Reclassified Category | Amount | Reason for Change`. Mark unchanged items as "No Change."

**2. Gross Margin Restatement Summary**
```
Revenue:                  $X
Original COGS:            $X  →  Gross Margin: X%
Reclassified COGS:        $X  →  Restated Gross Margin: X%
Delta:                    +/- $X (+/- X pp)
```

**3. Ambiguous Items Log**
Bullet list of any items requiring management judgment, with the allocation method applied and the alternative treatment considered.

**4. Notes for Auditors or Investors**
2–4 sentences summarizing the methodology, the most material reclassifications made, and any policy decisions that should be documented in the company's accounting policies.
