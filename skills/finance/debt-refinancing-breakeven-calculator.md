---
name: debt-refinancing-breakeven-calculator
category: finance
description: >
  Calculates the breakeven period for refinancing existing debt by comparing prepayment penalties against projected interest savings over the new loan term. Use when someone asks "should I refinance my loan," wants to know "when will refinancing pay off," is wondering whether to break their mortgage early, mentions prepayment penalties alongside a lower rate offer, or wants to compare keeping versus replacing existing debt.
tags: [refinancing, debt, breakeven, mortgage, interest-savings]
author: community
---

# Debt Refinancing Breakeven Calculator

This skill computes the exact month at which refinancing savings overtake upfront costs, giving a clear go/no-go threshold based on how long the borrower plans to stay in the loan.

## Calculation Workflow

1. **Gather existing loan details**
   - Current outstanding principal balance
   - Current interest rate and remaining term (months)
   - Prepayment penalty (flat fee or percentage of balance — calculate dollar amount if percentage)

2. **Gather new loan details**
   - New interest rate
   - New loan term (months)
   - Closing costs / origination fees
   - Any other upfront fees (appraisal, title, etc.)

3. **Calculate total upfront cost to refinance**
   - `Total Upfront Cost = Prepayment Penalty + All Closing Costs + Fees`

4. **Calculate monthly payments for both loans**
   - Use standard amortization formula: `M = P × [r(1+r)^n] / [(1+r)^n - 1]`
   - Where `P` = principal, `r` = monthly rate (annual rate ÷ 12), `n` = number of months
   - Compute `Old Monthly Payment` and `New Monthly Payment`

5. **Calculate monthly savings**
   - `Monthly Savings = Old Monthly Payment − New Monthly Payment`
   - If monthly savings ≤ 0, refinancing provides no payment relief — flag this explicitly and note whether the benefit is term reduction or total interest saved instead

6. **Calculate breakeven period**
   - `Breakeven Months = Total Upfront Cost ÷ Monthly Savings`
   - Round up to the nearest whole month

7. **Calculate total interest comparison**
   - `Remaining Interest (Current Loan) = (Old Monthly Payment × Remaining Months) − Remaining Principal`
   - `Total Interest (New Loan) = (New Monthly Payment × New Term Months) − Remaining Principal`
   - `Total Interest Savings = Remaining Interest − (Total Interest New Loan + Total Upfront Cost)`

8. **Assess the decision**
   - If the borrower's intended remaining loan duration > Breakeven Months → refinancing is financially beneficial
   - If duration ≤ Breakeven Months → refinancing costs more than it saves
   - If total interest savings are negative → refinancing increases overall cost regardless of monthly payment drop

9. **Flag edge cases**
   - Rate reduction < 0.5% — savings may be marginal, highlight sensitivity
   - Prepayment penalty > 3% of balance — extended breakeven likely
   - New term longer than remaining term — lower payment but higher total interest cost possible

## Output Format

Produce a structured report with the following sections:

---

**Refinancing Breakeven Analysis**

| Item | Value |
|---|---|
| Current Loan Balance | $X |
| Current Rate / New Rate | X% → X% |
| Prepayment Penalty | $X |
| Total Closing Costs | $X |
| **Total Upfront Cost** | **$X** |
| Old Monthly Payment | $X |
| New Monthly Payment | $X |
| Monthly Savings | $X |
| **Breakeven Period** | **X months (X years, X months)** |

**Total Interest Comparison**
- Interest remaining on current loan: $X
- Total interest on new loan: $X
- Net savings after upfront costs: $X (or Net Loss: $X)

**Recommendation**
One paragraph stating whether refinancing makes sense, the breakeven month as a calendar date (if loan start date is provided), and one sentence on sensitivity (e.g., "If you leave within X months, you will not recoup costs").

**⚠ Flags** (only if applicable)
