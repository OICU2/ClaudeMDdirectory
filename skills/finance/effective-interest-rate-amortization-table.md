---
name: effective-interest-rate-amortization-table
description: >
  Produces a period-by-period amortization table for bonds or loans using the effective interest rate method, separating cash interest paid from non-cash discount or premium amortization. Use when someone asks about amortizing a bond discount or premium, wants to build an amortization schedule using the effective interest method, needs to separate cash vs. non-cash interest expense, or is accounting for debt issued at a price other than par value.
category: finance
tags: [bonds, amortization, effective-interest, debt, accounting]
author: community
---

# Effective Interest Rate Amortization Table

This skill builds a complete amortization table for debt instruments (bonds payable or notes) under the effective interest rate method, breaking out cash interest, interest expense, discount/premium amortization, and carrying value for each period.

## Inputs to Collect

Before building the table, confirm these values with the user:

1. **Face value (par value)** of the debt instrument
2. **Issue price** (proceeds received at issuance)
3. **Stated (coupon) interest rate** and whether it is annual or semi-annual
4. **Effective (market) interest rate** at issuance
5. **Payment frequency** (annual, semi-annual, quarterly)
6. **Term** (number of periods or years to maturity)

If the user omits any value, ask for it before proceeding. Infer discount vs. premium automatically: issue price < face value = discount; issue price > face value = premium.

## Calculation Rules

Follow these steps for each period:

1. **Cash Interest Paid** = Face Value × Stated Rate per Period
2. **Interest Expense** = Beginning Carrying Value × Effective Rate per Period
3. **Amortization Amount**:
   - Discount: Interest Expense − Cash Interest Paid (positive, increases carrying value)
   - Premium: Cash Interest Paid − Interest Expense (positive, decreases carrying value)
4. **Ending Carrying Value** = Beginning Carrying Value ± Amortization Amount
5. **Unamortized Discount/Premium** = Previous balance − Amortization Amount

Repeat until the final period, where the ending carrying value must equal face value. Apply a rounding adjustment in the final period if a small residual (≤ $1) exists due to rounding; flag it explicitly.

Use the effective rate per period = annual effective rate ÷ payments per year (or the equivalent periodic rate if compounded).

## Output Format

Produce the following in order:

### 1. Summary Block
- Face value, issue price, discount or premium amount
- Stated rate and effective rate (both annual and per-period)
- Payment frequency and total number of periods

### 2. Amortization Table

Render as a markdown table with these columns:

| Period | Beginning Carrying Value | Cash Interest Paid | Interest Expense | Amortization | Unamortized Discount/Premium | Ending Carrying Value |

- All monetary values rounded to 2 decimal places
- Period column uses sequential integers (1, 2, 3…)
- Include a **Totals row** summing Cash Interest Paid, Interest Expense, and Amortization columns

### 3. Notes Section
- State whether a discount or premium is being amortized
- Flag any final-period rounding adjustment
- Note the income statement impact (interest expense per period) vs. cash flow impact (cash interest paid per period)
- Add a brief explanation of why carrying value converges to face value at maturity
