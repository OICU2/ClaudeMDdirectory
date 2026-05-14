---
name: ops-vendor-invoice-matching
description: >
  Matches incoming vendor invoices against corresponding purchase orders and flags any discrepancies in quantity, unit price, payment terms, or line items for resolution. Use when someone says "we received an invoice from a vendor," asks about "matching invoices to POs," or wants to "reconcile a supplier invoice." Also activates when someone needs to "check if an invoice matches our purchase order" or wants to "identify billing discrepancies from a vendor."
category: operations
tags: [invoicing, procurement, accounts-payable, vendor-management, reconciliation]
author: community
---

# Vendor Invoice Matching

This skill compares vendor invoices against purchase orders line by line, identifies mismatches in price, quantity, or terms, and produces a structured discrepancy report with recommended resolution actions.

## Matching Workflow

1. **Collect Inputs** — Gather the following before proceeding:
   - Purchase Order (PO) number, date, and issuing entity
   - Invoice number, date, and vendor details
   - Line items from both documents: description, quantity, unit price, totals
   - Agreed payment terms (net days, early payment discounts)

2. **Normalize Data** — Align units of measure, currency, and item descriptions across both documents. Flag any items that appear on the invoice but not the PO (and vice versa).

3. **Run Line-Item Comparison** — For each line, check:
   - **Quantity**: Invoice quantity vs. PO quantity vs. goods receipt quantity (if provided)
   - **Unit Price**: Invoice price vs. PO contracted price (flag if variance > 0%)
   - **Line Total**: Confirm unit price × quantity matches stated line total
   - **Description Match**: Confirm item descriptions or SKUs correspond

4. **Check Header-Level Terms** — Verify:
   - Payment terms (e.g., Net 30 on PO vs. Net 15 on invoice)
   - Tax amounts and applicable rates
   - Shipping/freight charges (authorized vs. billed)
   - Invoice total vs. sum of line totals

5. **Classify Each Discrepancy** — Assign a type and severity:
   - **Price Variance** (Minor < 1%, Moderate 1–5%, Major > 5%)
   - **Quantity Variance**
   - **Unauthorized Charge**
   - **Terms Mismatch**
   - **Missing Line Item**
   - **Duplicate Invoice Risk**

6. **Recommend Resolution Actions** — For each discrepancy:
   - Minor variance: note and approve with memo
   - Moderate/Major price variance: contact vendor for credit memo or revised invoice
   - Unauthorized charge: dispute and place invoice on hold
   - Terms mismatch: escalate to procurement/legal for clarification
   - Duplicate risk: cross-reference invoice register before payment

## Output Format

Produce a structured **Invoice Match Report** with the following sections:

---

**INVOICE MATCH REPORT**

**Summary**
- PO Number: [value]
- Invoice Number: [value]
- Vendor: [name]
- Match Status: ✅ Clean Match / ⚠️ Discrepancies Found / 🚫 Hold — Review Required

---

**Line-Item Comparison Table**

| Line | Description | PO Qty | Inv Qty | PO Unit Price | Inv Unit Price | Variance | Status |
|------|-------------|--------|---------|---------------|----------------|----------|--------|
| 1    | [item]      | [n]    | [n]     | $[x]          | $[x]           | $[diff]  | ✅/⚠️/🚫 |

---

**Discrepancy Log**

For each issue found:
- **Discrepancy #[n]**: [Type] — [Description of mismatch]
- **Severity**: Minor / Moderate / Major
- **Recommended Action**: [Specific next step and responsible party]

---

**Payment Recommendation**
- Approved Amount: $[value]
- Disputed Amount: $[value]
- Action: Approve for payment / Hold pending resolution / Partial payment of $[value]
- Next Step: [Specific action with owner and deadline]

---

Keep the report factual and free of assumptions. If input data is incomplete, list
