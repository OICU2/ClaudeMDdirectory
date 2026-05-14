---
name: capex-vs-opex-classification-review
description: >
  Evaluates expenditure line items against capitalization policy criteria and flags costs that have been misclassified between capital and operating expense accounts. Use when someone says "review our capex classifications," asks whether a cost should be capitalized or expensed, wants to audit expenditure accounts for misclassified items, needs help applying capitalization thresholds, or is preparing for an audit and needs to validate expense treatment. Supports US GAAP and IFRS frameworks.
category: finance
tags: [capex, opex, capitalization, expenditure-classification, accounting]
author: community
---

# CapEx vs OpEx Classification Review

This skill systematically evaluates expenditure line items against capitalization policy criteria, identifies misclassified costs, and produces a structured reclassification report with accounting rationale.

## Classification Workflow

### Step 1: Establish Policy Baseline
- Ask for or confirm the organization's capitalization threshold (e.g., $2,500, $5,000, $25,000)
- Confirm accounting framework in use: US GAAP (ASC 360, ASC 350), IFRS (IAS 16, IAS 38), or internal policy
- Identify asset categories in scope: PP&E, software (internal-use vs. external), leasehold improvements, intangibles

### Step 2: Apply the Four-Test Classification Filter
For each expenditure line item, evaluate against all four criteria:

1. **Threshold Test** — Does the cost meet or exceed the capitalization dollar threshold?
2. **Useful Life Test** — Does the asset have a useful life extending beyond one accounting period (typically >12 months)?
3. **Future Economic Benefit Test** — Does the cost create or enhance a future economic benefit for the entity?
4. **Identifiability Test** — Can the cost be separately identified, measured, and attributed to a specific asset?

An item must pass ALL four tests to qualify as CapEx. Failure on any test = OpEx.

### Step 3: Apply Category-Specific Rules
- **Repairs & Maintenance**: Expense unless the cost extends useful life, adds new capability, or replaces a major component
- **Software Development**: Expense planning/preliminary phase; capitalize application development phase; expense post-implementation (ASC 350-40)
- **Leasehold Improvements**: Capitalize if threshold met; amortize over shorter of lease term or useful life
- **Spare Parts & Standby Equipment**: Capitalize if meet threshold and held for more than one period; otherwise inventory or expense
- **Borrowing Costs**: Capitalize qualifying borrowing costs during construction period under IAS 23 / ASC 835-20 if applicable
- **Training, Advertising, Routine Maintenance**: Always OpEx — no exceptions

### Step 4: Flag Misclassifications
Identify and label each item as one of:
- 🔴 **Misclassified as CapEx → Should be OpEx**: e.g., routine repair booked to fixed asset register
- 🟡 **Misclassified as OpEx → Should be CapEx**: e.g., qualifying improvement expensed below radar
- 🟢 **Correctly Classified**: No action needed
- ⚪ **Requires Additional Information**: Document what data is needed to make a determination

### Step 5: Quantify Impact
For each misclassification, calculate or estimate:
- Dollar amount of reclassification
- P&L impact: expensing CapEx understates assets and overstates current-period expense; capitalizing OpEx overstates assets and understates expense
- Balance sheet impact on total assets and equity
- Tax timing differences if applicable

## Output Format

Produce a structured classification review report with the following sections:

---

**CapEx vs. OpEx Classification Review**
*Framework: [GAAP/IFRS] | Capitalization Threshold: $[X] | Period: [Q/Year]*

**Summary Table**

| # | Description | Amount | Current Classification | Recommended Classification | Status | Rationale |
|---|-------------|--------|----------------------|---------------------------|--------|-----------|
| 1 | [Item name] | $X,XXX | OpEx | CapEx | 🟡 Misclassified | [One-line reason] |

**Misclassification Detail**

For each flag
