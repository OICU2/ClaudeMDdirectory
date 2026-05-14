---
name: intercompany-cash-sweep-reconciliation
category: finance
description: >
  Reconciles daily or weekly cash pool sweeps between parent and subsidiary accounts to ensure intercompany balances net to zero. Use when someone says "our intercompany cash sweep is out of balance," asks about reconciling treasury pool transactions, wants to identify why subsidiary account balances don't offset, needs to investigate cash concentration discrepancies, or is troubleshooting a zero-balance notional pooling mismatch.
tags: [intercompany, cash-management, treasury, reconciliation, cash-pooling]
author: community
---

# Intercompany Cash Sweep Reconciliation

This skill guides Claude through the systematic process of identifying, tracing, and resolving discrepancies in intercompany cash pool sweeps so that all participating entity balances net to zero.

## Reconciliation Workflow

### 1. Collect Source Data
- Gather the master account (header account) statement for the sweep period
- Collect individual subsidiary/notional account statements for the same date range
- Obtain the treasury management system (TMS) or ERP sweep transaction log
- Request the intercompany loan ledger entries if physical sweeps are used

### 2. Establish Expected Net Position
- Sum all subsidiary end-of-day or end-of-period balances
- Add the header account balance
- Expected result: net = 0 (zero-balance pooling) or a single consolidated balance (notional pooling)
- Document any agreed-upon threshold tolerance (e.g., ±$500 for FX rounding)

### 3. Map Each Sweep Transaction
For each sweep entry:
- Match the debit on the subsidiary account to the corresponding credit on the header account (or vice versa)
- Confirm value date alignment — timing mismatches are the most common source of breaks
- Flag any transaction appearing in the TMS log but missing from the bank statement, and vice versa
- Note currency, entity ID, and account number on every line

### 4. Identify Break Categories
Classify each unmatched item:
- **Timing break**: transaction posted in TMS but not yet settled at the bank (check next-day statement)
- **Missing sweep**: subsidiary balance was nonzero at sweep cutoff but no sweep was triggered (check sweep threshold settings)
- **Duplicate entry**: same sweep posted twice in ERP but once at bank
- **FX conversion variance**: cross-currency sweeps with rate differences between TMS and bank
- **Entity setup error**: new or closed entity not enrolled in the pool structure

### 5. Resolve Each Break
- For timing breaks: mark as in-transit and confirm clearance within 1–2 business days
- For missing sweeps: rerun the sweep manually or escalate to treasury operations
- For duplicates: reverse the duplicate ERP entry with proper approval
- For FX variances: book an intercompany FX adjustment journal entry to the designated variance account
- For entity setup errors: update pool configuration with the bank and TMS

### 6. Confirm Net-Zero After Adjustments
- Recompute the net position after all corrections
- Obtain sign-off from treasury manager and accounting lead
- Archive the reconciliation worksheet with break details and resolution notes

## Output Format

Produce a structured reconciliation report with the following sections:

**Header**
- Entity/pool name, sweep period (date or date range), currency, preparer name, date

**Summary Table**
| Account | Entity | Opening Balance | Sweep Amount | Closing Balance |
|---|---|---|---|---|
(one row per participating account, totals row at bottom showing net position)

**Break Register**
| Break ID | Account | Amount | Category | Description | Resolution | Status |
|---|---|---|---|---|---|---|
(one row per unmatched item; Status = Open / Resolved / In-Transit)

**Net Position Confirmation**
- Pre-adjustment net: $X
- Post-adjustment net: $0 (or explain residual if within tolerance)
- Tolerance applied: $Y

**Action Items**
- Numbered list of any remaining open items, owner, and due date

Keep the report concise — no narrative padding. All amounts in functional currency with original currency noted for cross-currency sweeps.
