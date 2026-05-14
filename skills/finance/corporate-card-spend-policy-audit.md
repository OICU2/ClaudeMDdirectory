---
name: corporate-card-spend-policy-audit
description: >
  Analyzes corporate card transactions against company spend policy rules to identify violations, missing documentation, and unapproved purchases. Use when someone says "review our card transactions," asks about "out-of-policy expenses," wants to "audit employee spending," needs to "flag policy violations in purchases," or is trying to "find missing receipts on corporate cards."
category: finance
tags: [expense-audit, corporate-cards, spend-policy, compliance, procurement]
author: community
---

# Corporate Card Spend Policy Audit

This skill compares corporate card transaction data against defined spend policy rules to surface out-of-policy purchases, missing receipts, unapproved vendor categories, and limit breaches for finance or compliance review.

## Audit Workflow

### 1. Gather Inputs
- Request transaction export (CSV, Excel, or pasted data) with columns: date, cardholder, vendor, amount, category, receipt attached (Y/N), business justification
- Request or confirm the active spend policy rules, including:
  - Per-transaction limits by category (meals, travel, software, etc.)
  - Restricted or unapproved vendor categories (e.g., entertainment, gambling, personal care)
  - Receipt requirement threshold (e.g., required for all transactions over $25)
  - Pre-approval requirements (e.g., software purchases over $500)
  - Prohibited merchant category codes (MCCs) if available

### 2. Classify Each Transaction
For every transaction, evaluate against each policy rule:
- **Over-limit:** Amount exceeds per-category spending cap
- **Restricted category:** Vendor or MCC maps to a prohibited category
- **Missing receipt:** No receipt attached and amount exceeds receipt threshold
- **Missing justification:** Business purpose field is blank or generic ("misc," "other")
- **Pre-approval required:** Transaction type or amount requires prior approval with no approval record present
- **Duplicate:** Same vendor, same amount, same cardholder within 3 days
- **Weekend/holiday spend:** Flags non-travel transactions on weekends for review

### 3. Assign Severity
- **High:** Restricted category, pre-approval violation, duplicate charge
- **Medium:** Over limit, missing receipt on high-value transaction (>$100)
- **Low:** Missing justification, missing receipt on low-value transaction, weekend spend

### 4. Aggregate by Cardholder
Group violations by employee. Calculate total flagged spend and number of violations per person. Note repeat offenders (same violation type appearing 3+ times).

### 5. Identify Systemic Patterns
Look across the full dataset for:
- Vendor names appearing repeatedly across multiple cardholders
- Categories with disproportionate violation rates
- Time periods (end of quarter, month-end) with spending spikes

## Output Format

Produce a structured audit report with the following sections:

**Summary Block**
- Total transactions reviewed
- Total flagged transactions and % of total
- Total dollar value of flagged spend
- Breakdown by violation type (table: violation type | count | total $)

**Flagged Transaction Table**
Columns: Transaction Date | Cardholder | Vendor | Amount | Category | Violation Type | Severity | Recommended Action
One row per flagged transaction. Sort by severity (High → Medium → Low), then by amount descending.

**Cardholder Violation Summary**
Table: Cardholder Name | Total Transactions | Flagged Count | Flagged Amount | Top Violation Type | Repeat Offender (Y/N)

**Systemic Findings**
Bullet list of patterns observed across the dataset (e.g., "4 employees charged [Vendor X], which is an unapproved software vendor").

**Recommended Actions**
Numbered list of concrete next steps (e.g., "Request receipts from [Name] for 6 transactions totaling $842," "Block MCC 7995 at card issuer level," "Require manager pre-approval for all software purchases").

Output as structured markdown. If data volume is large (>200 rows), summarize the flagged transaction table to High severity only and note that full detail is available on request.
