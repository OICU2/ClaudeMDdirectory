---
name: vendor-payment-management
description: >
  Manages vendor invoices, payment scheduling, and cash flow optimization for businesses. Use when someone says "I need to pay my vendors," asks about managing supplier invoices, wants to optimize payment timing, needs help prioritizing which bills to pay first, or is trying to avoid late fees while preserving cash.
category: finance
tags: [vendors, invoices, accounts-payable, cash-flow, payments]
author: community
---

# Vendor Payment Management

This skill helps businesses track outstanding vendor invoices, schedule payments strategically, and balance cash flow needs against vendor relationships and payment terms.

## Payment Management Workflow

1. **Inventory all outstanding invoices**: Collect vendor name, invoice number, amount, invoice date, due date, payment terms (Net 15/30/60), and any early payment discount offers (e.g., 2/10 Net 30).

2. **Classify each invoice by urgency**:
   - **Critical**: Overdue or due within 3 days — pay immediately
   - **High**: Due within 7 days or vendor offers early-pay discount worth capturing
   - **Standard**: Due within 30 days — schedule normally
   - **Deferrable**: Due 30+ days out or vendor has flexible terms

3. **Calculate early payment discount value**: For a 2/10 Net 30 discount, compute the annualized return: `(Discount% / (1 - Discount%)) × (365 / (Pay Period - Discount Period))`. If annualized return exceeds your cost of capital, take the discount.

4. **Map payments against cash flow forecast**: Plot payment due dates against projected cash inflows for the next 30/60/90 days. Flag any weeks where outflows exceed available cash by more than 20%.

5. **Prioritize payment order** using this hierarchy:
   - Vendors supplying goods/services critical to operations
   - Vendors with late fee penalties that exceed 1.5% monthly
   - Long-term strategic vendors where relationship risk is high
   - Commodity vendors with multiple substitutes

6. **Identify deferral and negotiation opportunities**: For cash-constrained periods, flag invoices where payment terms could be extended. Draft short payment extension request language for each vendor if needed.

7. **Build a payment run schedule**: Group payments into weekly batches aligned with your cash position. Specify payment method (ACH, check, wire) based on vendor preference and processing time needed.

8. **Track payment metrics**: Calculate Days Payable Outstanding (DPO) = `(Accounts Payable / COGS) × Days in Period`. Flag if DPO drops below industry norms (signal of over-paying early) or rises above 75 days (signal of strained relationships).

## Output Format

Produce a structured payment management report with these sections:

**Invoice Summary Table**
| Vendor | Invoice # | Amount | Due Date | Terms | Discount Available | Priority |
|--------|-----------|--------|----------|-------|--------------------|----------|
(One row per invoice, sorted by due date ascending)

**Cash Flow Snapshot**
- Available cash balance: $X
- Total outstanding payables: $X
- Payments due this week: $X
- Payments due next 30 days: $X
- Projected shortfall (if any): $X on [date]

**Payment Schedule**
- Week 1 batch: [list vendors, amounts, method, dates]
- Week 2 batch: [list vendors, amounts, method, dates]
- Deferred items: [vendor, original due date, proposed new date, rationale]

**Recommended Actions**
- Numbered list of 3–6 specific actions (capture discount X, call vendor Y, defer invoice Z)
- Flag any vendor relationships at risk due to delayed payment

**Key Metrics**
- Current DPO: X days
- Total early-pay discounts available: $X
- Estimated late fees at risk if deferred: $X