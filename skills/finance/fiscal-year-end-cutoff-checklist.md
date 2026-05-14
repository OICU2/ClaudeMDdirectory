---
name: fiscal-year-end-cutoff-checklist
description: >
  Generates a comprehensive period-end revenue and expense cutoff checklist to ensure all transactions are recorded in the correct fiscal year. Use when someone says "we're closing the books," asks about year-end cutoff procedures, wants to verify revenue recognition timing, needs to review accruals before period close, or is preparing for an audit and needs to confirm proper cutoff. Covers accounts receivable, accounts payable, inventory, accruals, and deferred items.
category: finance
tags: [accounting, fiscal-year-end, cutoff, accruals, period-close]
author: community
---

# Fiscal Year-End Cutoff Checklist

This skill generates a structured, actionable checklist for verifying that revenues and expenses are recorded in the correct fiscal period, used whenever a team is approaching period close or year-end.

## Checklist Generation Workflow

1. **Confirm scope inputs** — Ask for the fiscal year-end date, entity name, and any known high-risk areas (e.g., large contracts, pending shipments, multi-element arrangements) before generating.

2. **Revenue Cutoff Items**
   - Verify all shipments made on or before year-end are invoiced and recorded; confirm no post-close shipments are included in current period revenue.
   - Review shipping logs and bill of lading dates for the last 5–10 business days of the period and the first 5–10 days of the new period.
   - Confirm FOB terms (shipping point vs. destination) for in-transit goods to determine proper period of recognition.
   - Check deferred revenue balances: ensure advance payments for services not yet rendered are excluded from current-period revenue.
   - Validate percentage-of-completion contracts: confirm revenue recognized matches actual progress as of the cutoff date.
   - Review credit memos and returns issued after year-end that relate to current-period sales.

3. **Expense and Accounts Payable Cutoff Items**
   - Match all vendor invoices received after year-end to the period the goods or services were received; accrue if received before cutoff but not yet invoiced.
   - Review receiving logs for the last and first 10 business days to catch unvouchered receipts.
   - Confirm purchase orders with partial receipts: only received portions should be accrued.
   - Validate prepaid expense schedules: ensure amounts covering future periods are reclassified from expense to prepaid asset.
   - Check payroll cutoff: accrue wages, bonuses, and benefits earned but unpaid as of year-end.
   - Review recurring vendor contracts (rent, utilities, subscriptions) for accruals covering the stub period.

4. **Accruals and Estimates**
   - Confirm accrued liabilities schedule is complete: legal fees, audit fees, insurance, property taxes.
   - Verify warranty and returns reserves are updated based on current-year sales data.
   - Ensure interest accruals on all debt instruments are calculated through the exact year-end date.
   - Review commission calculations: confirm accrual covers all earned commissions on closed-period revenue.

5. **Inventory and Cost of Goods Sold**
   - Confirm physical inventory count date aligns with year-end; if counted earlier, verify roll-forward adjustments are applied.
   - Review consignment inventory: exclude goods held on consignment from owned inventory.
   - Confirm goods in transit are recorded in the correct entity's books based on FOB terms.

6. **Supporting Documentation Steps**
   - Obtain cutoff memos from warehouse, shipping, and receiving teams confirming last transaction dates.
   - Pull a sub-ledger-to-general-ledger reconciliation for AR and AP as of the cutoff date.
   - Document all manual journal entries posted in the final week with preparer, reviewer, and business justification.
   - Retain evidence (signed confirmations, system reports) for each checklist item for audit file.

## Output Format

Produce the checklist as a structured Markdown document with the following sections:

- **Header**: Entity name, fiscal year-end date, preparer, review date
- **Sections**: Numbered sections matching the workflow above (Revenue, Expenses/AP, Accruals, Inventory, Documentation)
- **Each checklist item**: Formatted as a checkbox `[ ]` followed by the action, responsible party field (`Owner: ___`), and status field (`Status:
