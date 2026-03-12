---
name: invoice-reconciliation
description: >
  Matches invoices against purchase orders and payment records to identify discrepancies,
  unresolved balances, and missing documentation. Use when someone says "reconcile these
  invoices," asks about unmatched payments, wants to find billing discrepancies, needs to
  clear outstanding balances, or is auditing vendor accounts.
category: finance
tags: [invoices, reconciliation, accounts-payable, discrepancies, purchase-orders]
author: community
---

# Invoice Reconciliation

Systematically matches invoices to purchase orders and payment records to surface discrepancies, duplicate charges, and unresolved balances so finance teams can resolve exceptions quickly.

## Reconciliation Workflow

1. **Ingest source documents** — Accept invoice list, PO register, and payment ledger as structured data (CSV, JSON, or pasted table). Confirm all three inputs are present before proceeding.

2. **Normalize fields** — Standardize vendor names, invoice numbers, dates (ISO 8601), and amounts (two decimal places, consistent currency) across all three sources.

3. **Three-way match** — For each invoice:
   - Find the corresponding PO by PO number or vendor + amount proximity
   - Find the corresponding payment by invoice number or reference code
   - Flag if any leg is missing

4. **Classify each record** into one of five statuses:
   - ✅ **Matched** — Invoice, PO, and payment align within tolerance
   - ⚠️ **Amount Mismatch** — Values differ beyond tolerance (default ±$0.01 or ±0.1%)
   - 🔴 **Unmatched Invoice** — No corresponding PO or payment found
   - 🟡 **Paid Without PO** — Payment exists but no authorizing PO
   - ⏳ **Unpaid** — Invoice and PO exist but no payment recorded

5. **Calculate balances** — Sum total invoiced, total paid, and net outstanding per vendor and in aggregate.

6. **Identify patterns** — Flag vendors with repeated mismatches, invoices older than 60/90/120 days unpaid, and potential duplicate invoices (same vendor + amount within 30 days).

7. **Recommend actions** — For each exception category, provide a specific next step (e.g., "Request revised invoice from Vendor X," "Obtain retroactive PO approval for payment #4821").

## Output Format

Produce the following sections in order:

### Summary Table
| Metric | Count | Amount |
|---|---|---|
| Total Invoices | — | — |
| Fully Matched | — | — |
| Exceptions | — | — |
| Net Outstanding | — | — |

### Exception Detail Table
One row per exception with columns: Invoice #, Vendor, Invoice Date, Invoice Amount, PO Amount, Payment Amount, Status, Recommended Action.

### Vendor Balance Summary
Grouped by vendor: total invoiced, total paid, outstanding balance, exception count.

### Aged Outstanding Report
Unpaid invoices grouped by aging bucket: 0–30 days, 31–60 days, 61–90 days, 90+ days.

### Findings & Next Steps
Bullet list of top issues (max 10) with specific, assigned-sounding action items and priority (High / Medium / Low).

Length scales with data volume. For datasets under 50 invoices, show full detail tables. For larger sets, show summary tables plus a full exception-only detail table.
