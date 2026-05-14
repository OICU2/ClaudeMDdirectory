---
name: bank-reconciliation-exception-report
description: >
  Identifies and categorizes unmatched transactions between bank statements and general ledger entries to accelerate monthly reconciliation sign-off. Use when someone says "our books don't match the bank," asks about outstanding reconciling items, wants to find unmatched transactions, needs to close the month-end reconciliation, or is trying to explain a bank balance variance.
category: finance
tags: [reconciliation, bank-statement, general-ledger, month-end-close, exceptions]
author: community
---

# Bank Reconciliation Exception Report

This skill analyzes discrepancies between bank statement data and general ledger entries, categorizes each exception by type and likely cause, and produces a structured report to accelerate sign-off.

## Reconciliation Workflow

1. **Collect inputs** — Request the following if not provided:
   - Bank statement ending balance and date
   - General ledger (GL) cash account ending balance and date
   - List of bank transactions (date, description, amount, reference)
   - List of GL cash entries (date, description, amount, journal entry number)

2. **Calculate the gross variance** — Subtract GL balance from bank balance to establish the total unexplained difference before itemizing exceptions.

3. **Match transactions** — Pair bank and GL entries using amount, date proximity (±5 business days), and reference numbers. Flag unmatched items on either side.

4. **Categorize each exception** using these standard types:
   - **Outstanding Check** — In GL, not yet cleared the bank
   - **Deposit in Transit** — In GL, not yet credited by bank
   - **Bank-Only Item** — On bank statement, missing from GL (e.g., bank fees, interest, NSF returns)
   - **GL-Only Item** — In GL, absent from bank (e.g., duplicate entry, posting error)
   - **Timing Difference** — Matched but posted in different accounting periods
   - **Amount Mismatch** — Same transaction, different amounts on each side (transposition, partial payment)

5. **Assign risk level** to each exception:
   - **High** — Amount > $10,000 or item is >30 days old
   - **Medium** — Amount $1,000–$10,000 or item is 15–30 days old
   - **Low** — Amount < $1,000 and item is <15 days old

6. **Verify the math** — Confirm: Bank Balance ± Outstanding Checks ± Deposits in Transit ± Other Adjustments = Adjusted Bank Balance = Adjusted GL Balance. Flag if it does not reconcile to zero.

7. **Recommend resolution actions** for each exception:
   - Outstanding checks: confirm with AP or void and reissue if stale
   - Bank-only items: prepare journal entry to record in GL
   - GL-only items: investigate for duplicate posting or reversed entry
   - Amount mismatches: obtain source documents to determine correct figure

## Output Format

Produce the following sections in order:

**1. Reconciliation Summary Table**
| Item | Bank Balance | GL Balance |
|------|-------------|------------|
| Ending Balance | $X | $X |
| Total Adjustments | $X | $X |
| Adjusted Balance | $X | $X |
| Variance | **$0 (or $X unexplained)** | |

**2. Exception Register**
A table with columns: Exception ID | Category | Date | Description | Bank Amount | GL Amount | Difference | Risk Level | Recommended Action

**3. Exceptions by Category Summary**
Count and total dollar value per category (Outstanding Checks, Deposits in Transit, etc.)

**4. High-Risk Items Requiring Immediate Attention**
Bulleted list of High-risk exceptions with one-line resolution instructions each.

**5. Reconciliation Status**
One of three statuses:
- ✅ **Reconciled** — Adjusted balances agree; exceptions documented and explainable
- ⚠️ **Reconciled with Items** — Balances agree but open items require follow-up within 5 business days
- ❌ **Unreconciled** — Unexplained variance remains; do not sign off; escalate to controller

Format numbers with commas and two decimal places. Use a table for the exception register. Keep recommended actions to one sentence each.
