---
name: accounts-payable-payment-run-optimizer
description: >
  Analyzes vendor invoices and available cash to sequence payment runs that capture early payment discounts while preserving minimum cash reserves. Use when someone says "we need to run payments," asks about "which vendors to pay this week," wants to "optimize our payment schedule," is deciding "whether to take the 2/10 net 30 discount," or needs to "prioritize invoices for the payment batch."
category: finance
tags: [accounts-payable, cash-management, vendor-payments, discount-optimization, treasury]
author: community
---

# Accounts Payable Payment Run Optimizer

Sequences and prioritizes vendor payments to maximize early payment discount capture while ensuring the ending cash balance never falls below a defined reserve threshold.

## Payment Run Optimization Workflow

### 1. Gather Required Inputs
Collect the following before proceeding:
- Current available cash balance
- Minimum cash reserve requirement (hard floor — never breach this)
- List of open invoices with: vendor name, invoice amount, due date, discount terms (e.g., 2/10 net 30), discount deadline
- Payment run date (today's date or scheduled run date)

### 2. Calculate Discount Opportunity for Each Invoice
For every invoice with discount terms:
- **Discount amount** = Invoice amount × discount percentage
- **Annualized ROI** = (Discount % / (Net days − Discount days)) × 365
- **Deadline status**: Flag invoices where the discount deadline is within 0–3 days as URGENT, 4–7 days as PRIORITY, and 8+ days as STANDARD

### 3. Classify Every Invoice
Assign one of four tiers:
- **Tier 1 — Capture Discount (URGENT)**: Discount deadline ≤ 3 days, annualized ROI > 15%
- **Tier 2 — Capture Discount (PRIORITY)**: Discount deadline 4–7 days, annualized ROI > 15%
- **Tier 3 — Pay at Due Date**: No discount available, or annualized ROI ≤ 15%, due within 7 days
- **Tier 4 — Defer**: Due date > 7 days away, no compelling discount

### 4. Build the Payment Sequence
- Sort all Tier 1 invoices by annualized ROI descending
- Sort all Tier 2 invoices by annualized ROI descending
- Append Tier 3 invoices sorted by due date ascending
- Exclude Tier 4 invoices from this run

### 5. Apply Cash Constraint Check
Working down the sorted list:
- Running total starts at current available cash
- Include each invoice only if: (current cash − payment amount) ≥ minimum cash reserve
- Mark any invoice that would breach the reserve as DEFERRED — flag it with the shortfall amount
- Stop adding invoices once cash constraint is reached

### 6. Validate and Flag Risks
- Flag any invoice that is past due regardless of tier — escalate these immediately
- Flag vendors with invoices in both Tier 1 and Tier 4 (potential relationship risk if discount missed)
- Note if the minimum reserve leaves insufficient room to capture any Tier 1 discounts — recommend treasury review

## Output Format

Produce a structured payment run report with the following sections:

**Header Block**
- Payment run date
- Starting cash balance
- Minimum cash reserve
- Total payments in this run
- Projected ending cash balance
- Total discount dollars captured

**Payment Queue Table** (one row per approved invoice)
| Priority | Vendor | Invoice # | Amount | Discount Terms | Discount Deadline | Discount Captured | Annualized ROI | Running Cash Balance |
|----------|--------|-----------|--------|----------------|-------------------|-------------------|----------------|----------------------|

**Deferred Invoices Table**
List invoices excluded from this run with reason: cash constraint, not yet due, or low ROI. Include next recommended payment date.

**Summary Metrics**
- Total discount dollars available vs. captured (and % capture rate)
- Discount dollars left on table (deferred Tier 1/2 invoices)
- Days of cash remaining after run (ending balance ÷ average daily spend if provided)

**Recommendations**
- Bullet list of 2–5 specific actions (
