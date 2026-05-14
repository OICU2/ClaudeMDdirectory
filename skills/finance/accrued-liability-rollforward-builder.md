---
name: accrued-liability-rollforward-builder
description: >
  Builds a complete period rollforward schedule for accrued liability accounts by tracking opening balances, new accruals, cash payments, and reversals. Use when someone says "build me an accrued liability rollforward," asks about "tracking accrual movements," wants to "reconcile accrued expenses over a period," needs to "show the rollforward for accrued liabilities," or is trying to "explain the change in accrued liabilities between periods."
category: finance
tags: [accruals, liability, rollforward, reconciliation, close]
author: community
---

# Accrued Liability Rollforward Builder

This skill constructs a structured period rollforward schedule for one or more accrued liability accounts, tracing every movement from opening balance to closing balance, and is activated when a user needs to explain, reconcile, or present changes in accrued liabilities across a reporting period.

## Rollforward Build Workflow

1. **Gather inputs** — Collect or prompt for: account name(s), reporting period (start and end dates), opening balance per GL or prior period close, and the currency.

2. **Identify movement categories** — For each accrued liability account, capture the following line items:
   - **Opening Balance** — Balance at the start of the period (prior period ending balance)
   - **New Accruals** — Expenses recognized and accrued during the period (debit expense, credit accrued liability)
   - **Accrual True-Ups / Adjustments** — Changes to estimates, catch-up accruals, or corrections
   - **Cash Payments** — Actual invoices paid or disbursements that reduce the accrual (debit accrued liability, credit cash/AP)
   - **Reversals** — Accruals reversed in the current period that were set up in prior periods
   - **Reclassifications / FX Impact** — Any balance sheet reclassifications or foreign exchange translation effects
   - **Closing Balance** — Sum of all movements; must agree to the GL ending balance

3. **Validate the math** — Confirm: Opening Balance + New Accruals + Adjustments − Cash Payments − Reversals ± Reclassifications/FX = Closing Balance. Flag any out-of-balance condition immediately.

4. **Reconcile to GL** — Compare the closing balance from the rollforward to the GL trial balance for the same account and period. Note any variance and request supporting detail if a gap exists.

5. **Request supporting schedules if needed** — If the user has not provided invoice data, journal entry listings, or payment runs, prompt for: JE detail by account, AP aging or payment register, and any manual accrual workpapers.

6. **Handle multiple accounts** — If multiple accrued liability accounts are in scope (e.g., accrued compensation, accrued professional fees, accrued warranty), produce a separate rollforward tab or section for each, plus a consolidated summary.

7. **Flag anomalies** — Call out: negative closing balances, reversals exceeding the opening balance, large unexplained adjustments (>10% of opening balance), or missing cash payments where accruals are aging beyond the expected settlement window.

## Output Format

Produce the rollforward as a structured table per account, followed by a summary section:

**Per-Account Table:**
```
Account: [Account Name] | Period: [Start Date] – [End Date] | Currency: [XXX]

Line Item                        | Amount      | Notes
---------------------------------|-------------|-----------------------------
Opening Balance                  | $XX,XXX     | Per prior period close / GL
+ New Accruals                   | $XX,XXX     | [Source: JE #, estimate basis]
+ Accrual Adjustments / True-Ups | $XX,XXX     | [Explain if material]
− Cash Payments                  | ($XX,XXX)   | [Payment dates / AP ref]
− Reversals                      | ($XX,XXX)   | [Original accrual date]
± Reclassifications / FX Impact  | $XX,XXX     | [Explain if applicable]
---------------------------------|-------------|-----------------------------
Closing Balance (Rollforward)    | $XX,XXX     |
GL Ending Balance                | $XX,XXX     | Per trial balance
Variance                         |
