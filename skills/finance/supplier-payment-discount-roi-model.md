---
name: supplier-payment-discount-roi-model
description: >
  Calculates the annualized return on taking early-payment discounts from suppliers and compares it against the company's cost of capital, borrowing rate, or opportunity cost of cash. Use when someone asks whether to take a supplier discount, mentions terms like "2/10 net 30" or similar payment terms, wants to evaluate early payment offers, or needs to decide between paying early versus holding cash. Also activates when someone asks about optimizing accounts payable or working capital trade-offs.
category: finance
tags: [accounts-payable, working-capital, discount-rate, cash-management, supplier-terms]
author: community
---

# Supplier Early-Payment Discount ROI Model

This skill evaluates whether taking a supplier's early-payment discount generates a better annualized return than the company's cost of borrowing or investing idle cash, and produces a clear accept/reject recommendation with supporting calculations.

## Analysis Workflow

1. **Extract payment terms** from the user's input. Identify:
   - Discount percentage (e.g., 2%)
   - Discount period in days (e.g., pay within 10 days)
   - Net payment period in days (e.g., pay by day 30)
   - Invoice amount (if provided; otherwise use $100,000 as a normalized example)

2. **Calculate the annualized cost of the discount** using the standard formula:
   ```
   Annualized Rate = (Discount % / (1 - Discount %)) × (365 / (Net Days - Discount Days))
   ```
   Example for 2/10 net 30:
   ```
   (0.02 / 0.98) × (365 / 20) = 2.0408% × 18.25 = 37.2%
   ```

3. **Identify the company's comparison rate** from user input. Accept any of:
   - Cost of borrowing (line of credit rate, loan rate)
   - Weighted average cost of capital (WACC)
   - Short-term investment yield (money market, T-bill rate)
   - If none provided, ask the user for this rate before proceeding. Do not assume a default.

4. **Compute the dollar savings or cost** for the specific invoice amount:
   - Dollar discount = Invoice Amount × Discount %
   - Opportunity cost of early payment = Invoice Amount × (Comparison Rate × Days Accelerated / 365)
   - Net benefit = Dollar discount − Opportunity cost

5. **Make the decision**:
   - If Annualized Discount Rate > Comparison Rate → **Take the discount** (earns more than the cost of capital)
   - If Annualized Discount Rate < Comparison Rate → **Skip the discount** (cheaper to hold cash or borrow elsewhere)
   - If rates are within 2 percentage points → flag as a **borderline case** and note qualitative factors

6. **Flag qualitative considerations** where relevant:
   - Cash liquidity constraints (even a favorable discount may not be viable if cash is tight)
   - Supplier relationship value
   - Whether the company can systematically capture discounts at scale
   - Tax treatment of discounts if the user's jurisdiction is mentioned

## Output Format

Produce a structured response with these sections:

**Payment Terms Summary**
- Terms as stated (e.g., 2/10 net 30)
- Days accelerated: X days
- Discount amount on invoice: $X

**Annualized Return Calculation**
- Formula shown explicitly with numbers substituted
- Annualized discount rate: X.XX%

**Comparison**
| Metric | Value |
|---|---|
| Annualized discount rate | X.XX% |
| Company comparison rate | X.XX% |
| Spread (discount rate − comparison rate) | X.XX% |
| Net dollar benefit on this invoice | $X |

**Recommendation**
One clear sentence: Take the discount / Skip the discount / Borderline — with the primary reason stated.

**Sensitivity Note**
Show the break-even comparison rate (the rate at which the decision flips), so the user understands how sensitive the result is to their cost of capital assumption.

If the user provides multiple invoices or a monthly payables volume, aggregate the annualized dollar impact across all invoices and present a monthly/annual benefit summary in addition to the per-invoice analysis
