---
name: vendor-early-payment-discount-analysis
description: >
  Evaluates whether accepting vendor early payment discounts generates better returns than deploying that cash elsewhere based on annualized discount rates. Use when someone asks about early payment discounts, wonders if paying invoices early is worth it, wants to evaluate a 2/10 net 30 discount offer, or needs to decide whether to take a vendor discount or hold cash. Also triggers when someone asks about optimizing accounts payable or comparing discount terms across suppliers.
category: finance
tags: [accounts-payable, working-capital, discount-analysis, cash-management, vendor-management]
author: community
---

# Vendor Early Payment Discount Analysis

This skill calculates the annualized return of accepting vendor early payment discounts and compares it against the company's cost of capital or alternative cash deployment rate to produce a clear take/skip recommendation.

## Analysis Workflow

### 1. Collect Discount Terms
Extract or ask for the following inputs:
- Discount percentage (e.g., 2%)
- Discount payment window (e.g., pay within 10 days)
- Standard net payment due date (e.g., net 30)
- Invoice amount (optional, for absolute dollar impact)

### 2. Calculate Annualized Discount Rate
Use the standard formula:

```
Annualized Rate = (Discount% / (1 - Discount%)) × (365 / (Net Days - Discount Days))
```

Example for 2/10 net 30:
- `(0.02 / 0.98) × (365 / 20) = 2.04% × 18.25 = 37.2%`

### 3. Identify the Hurdle Rate
Determine what the company would otherwise earn or pay with that cash:
- Cost of capital / WACC (if known)
- Line of credit interest rate
- Money market or short-term investment yield
- Default assumption if none provided: use 8–12% as a typical benchmark and note the assumption

### 4. Compare and Decide
- If annualized discount rate **exceeds** the hurdle rate → **Take the discount**
- If annualized discount rate **falls below** the hurdle rate → **Skip the discount, pay on net terms**
- If rates are within 2–3% of each other → flag as a borderline case and recommend considering non-financial factors (supplier relationship, cash flow timing)

### 5. Apply Across Multiple Vendors (if applicable)
If multiple discount terms are provided:
- Calculate annualized rate for each
- Rank by return from highest to lowest
- Apply hurdle rate cutoff to segment into take/skip buckets
- Calculate aggregate annual savings if all "take" discounts are accepted

### 6. Flag Edge Cases
- Discount windows shorter than 5 days: flag as operationally difficult to capture consistently
- Discount rates implying annualized returns above 100%: verify inputs, likely a data entry error
- Negative net benefit scenarios where borrowing to pay early costs more than the discount saves

## Output Format

Produce a structured response with the following sections:

**Discount Terms Summary**
- Restate the terms as entered (e.g., "2/10 net 30 on $50,000 invoice")

**Annualized Return Calculation**
- Show the formula with numbers filled in
- State the resulting annualized rate clearly

**Hurdle Rate Comparison**
- State the hurdle rate used and its source (provided or assumed)
- Show the spread between discount rate and hurdle rate

**Recommendation**
- One clear verdict: TAKE or SKIP (or BORDERLINE)
- One sentence of reasoning

**Dollar Impact (if invoice amount provided)**
- Discount savings in dollars
- Annual savings projection if the same terms apply to recurring invoices

**Multi-Vendor Table (if multiple vendors)**
| Vendor | Terms | Annualized Rate | vs. Hurdle | Decision |
|--------|-------|-----------------|------------|----------|

Keep the response concise — under 300 words for a single vendor, under 500 for multi-vendor. Always show the math so the user can verify or adjust assumptions.
