---
name: loan-amortization-scheduling
description: >
  Generates complete amortization tables for business loans, breaking down each payment into principal, interest, and remaining balance components. Use when someone asks to "schedule loan payments," wants to "see how a loan breaks down," needs to "calculate amortization," is "taking out a business loan and wants to plan repayments," or asks "how much interest will I pay over the life of a loan."
category: finance
tags: [amortization, loans, business-finance, payment-schedule, interest]
author: community
---

# Loan Amortization Scheduling

This skill generates full amortization tables for business loans, showing every payment period's principal, interest, and remaining balance, and Claude will use it whenever a user needs to understand or plan loan repayment over time.

## Amortization Calculation Workflow

1. **Collect loan parameters** — Gather principal amount, annual interest rate, loan term (in months or years), payment frequency (monthly, quarterly, annually), and start date. If any are missing, ask before proceeding.

2. **Calculate the periodic payment** — Use the standard amortization formula:
   - `M = P × [r(1+r)^n] / [(1+r)^n - 1]`
   - Where `P` = principal, `r` = periodic interest rate (annual rate ÷ periods per year), `n` = total number of payments
   - Round to 2 decimal places; adjust the final payment to absorb any rounding difference.

3. **Build the amortization schedule row by row** — For each payment period:
   - Interest portion = Remaining Balance × periodic interest rate
   - Principal portion = Periodic Payment − Interest portion
   - New balance = Previous balance − Principal portion
   - Date = Start date + one period increment

4. **Validate totals** — Confirm that:
   - Sum of all principal payments = original loan amount
   - Final balance = $0.00 (or within $0.01 rounding tolerance)
   - Total interest paid is clearly stated

5. **Handle edge cases** — If the user provides a balloon payment, interest-only period, or extra payments, adjust the schedule accordingly and note the deviation from standard amortization.

6. **Summarize key metrics** — Always compute and display:
   - Total amount paid over loan life
   - Total interest paid
   - Effective interest cost as a percentage of principal
   - Break-even point (period where cumulative principal exceeds cumulative interest)

## Output Format

Produce the following sections in order:

**Loan Summary Block** (before the table):
```
Principal:        $[amount]
Annual Rate:      [rate]%
Term:             [n] months ([x] years)
Payment Frequency: Monthly / Quarterly / Annual
Periodic Payment: $[amount]
First Payment:    [date]
Last Payment:     [date]
```

**Amortization Table** (Markdown table):
| Period | Date | Payment | Principal | Interest | Cumulative Interest | Remaining Balance |
|--------|------|---------|-----------|----------|---------------------|-------------------|
| 1 | YYYY-MM-DD | $X,XXX.XX | $X,XXX.XX | $X,XXX.XX | $X,XXX.XX | $XXX,XXX.XX |
| ... | ... | ... | ... | ... | ... | ... |

- Show every row for loans ≤ 24 periods
- For loans > 24 periods, show first 3, last 3, and every 12th period (annual snapshots), with a note that the full table is available on request
- All monetary values formatted with commas and 2 decimal places

**Totals Footer Row** — bold final row with summed Payment, Principal, and Interest columns.

**Key Metrics Block** (after the table):
```
Total Paid:              $[amount]
Total Interest:          $[amount]
Interest as % of Principal: [X.XX]%
Principal > Interest at: Period [n] ([date])
```
