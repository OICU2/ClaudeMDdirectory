---
name: prepaid-expense-amortization-schedule
description: >
  Generates a month-by-month amortization schedule for prepaid expenses, mapping each journal entry to the correct accounting period. Use when someone says "amortize a prepaid expense," asks about "spreading a prepaid cost over time," wants to "create a prepaid amortization schedule," needs to "expense a prepaid payment monthly," or asks how to "recognize a prepaid asset over its useful life."
category: finance
tags: [prepaid-expenses, amortization, accounting, journal-entries, accrual-accounting]
author: community
---

# Prepaid Expense Amortization Schedule

This skill generates a complete month-by-month amortization schedule for any prepaid expense, including periodic journal entries and a running balance, whenever a user needs to recognize a prepaid asset over its coverage period.

## Amortization Schedule Workflow

1. **Collect inputs** — Gather the following before proceeding; ask if any are missing:
   - Total prepaid amount (e.g., $12,000)
   - Payment date or asset recognition start date
   - Coverage start date and coverage end date (or number of months)
   - Expense account name (e.g., "Prepaid Insurance," "Prepaid Rent")
   - Corresponding expense account (e.g., "Insurance Expense," "Rent Expense")

2. **Calculate monthly amortization amount** — Divide the total prepaid amount by the number of months in the coverage period. If the coverage period does not align to full months, calculate a prorated amount for partial first and last months using the formula: `(days in partial month / total days in month) × monthly amount`.

3. **Map entries to accounting periods** — Assign each amortization entry to the correct calendar month. The first entry falls in the first month of coverage (not necessarily the payment month). Each subsequent entry falls in the next consecutive calendar month until the balance reaches zero.

4. **Build the schedule row by row** — For each period include:
   - Period number
   - Month/Year (e.g., Jan 2025)
   - Debit: Expense account with the amortization amount
   - Credit: Prepaid asset account with the same amount
   - Beginning balance of the prepaid asset
   - Amortization amount for the period
   - Ending balance of the prepaid asset

5. **Validate totals** — Confirm that the sum of all amortization entries equals the original prepaid amount and the ending balance on the final period is $0.00.

6. **Flag accounting period mismatches** — If the payment date falls in a different fiscal period than the coverage start date, note this explicitly and remind the user to record the initial prepaid asset entry separately.

## Output Format

Produce the following in order:

**Summary Block**
```
Prepaid Expense:     [Account Name]
Total Amount:        $X,XXX.XX
Coverage Period:     [Start Date] – [End Date]
Number of Periods:   X months
Monthly Amount:      $X,XXX.XX
```

**Amortization Schedule Table**

| # | Month     | Beginning Balance | Amortization | Ending Balance | Debit (Expense) | Credit (Prepaid) |
|---|-----------|-------------------|--------------|----------------|-----------------|------------------|
| 1 | Jan 2025  | $12,000.00        | $1,000.00    | $11,000.00     | $1,000.00       | $1,000.00        |
| … | …         | …                 | …            | …              | …               | …                |
| N | [Last Mo] | $1,000.00         | $1,000.00    | $0.00          | $1,000.00       | $1,000.00        |
| **Total** |  |                   | **$12,000.00** |              | **$12,000.00**  | **$12,000.00**   |

**Journal Entry Template (repeat each period)**
```
Dr. [Expense Account]      $X,XXX.XX
    Cr. [Prepaid Account]              $X,XXX.XX
Memo: Amortization of prepaid [description] for [Month Year]
```

**Notes section** — Flag any partial months, fiscal year crossovers,
