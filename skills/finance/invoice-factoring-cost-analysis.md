---
name: invoice-factoring-cost-analysis
description: >
  Calculates the true annualized cost of invoice factoring arrangements by analyzing discount rates, advance percentages, reserve releases, and fee structures against the opportunity cost of waiting for customer payment. Use when someone asks about factoring invoices, wants to know if selling receivables makes sense, is considering a factoring agreement, needs to compare factoring costs to a bank line of credit, or asks whether they should factor their accounts receivable.
category: finance
tags: [factoring, accounts-receivable, cash-flow, working-capital, invoice-financing]
author: community
---

# Invoice Factoring Cost Analysis

This skill computes the true annualized cost of a factoring arrangement and compares it to the opportunity cost of waiting for payment, helping businesses decide whether factoring their invoices is financially justified.

## Analysis Workflow

### 1. Gather Required Inputs
Collect the following from the user:
- Invoice face value (e.g., $50,000)
- Advance rate percentage (e.g., 80% — amount factor pays upfront)
- Factoring fee / discount rate (e.g., 3% of invoice face value)
- Additional fees: origination, due diligence, wire transfer, monthly minimums
- Expected days until customer pays (e.g., Net 60)
- Reserve release: when and how the remaining balance is returned
- Business's cost of capital or alternative borrowing rate (if known)

### 2. Calculate Net Proceeds
```
Advance Amount       = Invoice Value × Advance Rate
Factoring Fee        = Invoice Value × Discount Rate
Additional Fees      = Sum of all flat/percentage fees
Reserve Amount       = Invoice Value − Advance Amount
Net Proceeds Day 1   = Advance Amount − Factoring Fee − Additional Fees
Total Received       = Net Proceeds Day 1 + Reserve Amount (at payment)
Total Cost           = Invoice Value − Total Received
```

### 3. Calculate Annualized Percentage Rate (APR)
```
Holding Period (days) = Expected customer payment days
Periodic Rate         = Total Cost / Net Proceeds Day 1
APR                   = Periodic Rate × (365 / Holding Period)
```
Express APR as a percentage. This is the true annualized cost of the factoring arrangement.

### 4. Calculate Opportunity Cost of Waiting
If the business does NOT factor:
- Estimate what $1 of delayed cash is worth using their cost of capital or a benchmark rate (default to 8–12% annualized if unknown)
- Opportunity cost = Net Proceeds Day 1 × (Cost of Capital / 365) × Holding Period
- This is the implicit cost of waiting for payment without factoring

### 5. Compare and Recommend
Run a side-by-side comparison:
- **Factor:** Cash available today, known APR cost
- **Wait:** Cash available in N days, opportunity cost incurred
- **Break-even rate:** The APR at which factoring and waiting cost the same
- Flag if the factoring APR exceeds 40% — this is typically a high-cost arrangement
- Flag if advance rate is below 70% — significant capital is tied up in reserve

### 6. Sensitivity Check
Show how the total cost changes if:
- Customer pays 15 days early or 15 days late
- Factor charges an additional monthly fee after 30 days
- Advance rate drops by 5 percentage points

## Output Format

Produce a structured analysis with these sections:

**Deal Summary Table**
| Metric | Value |
|---|---|
| Invoice Face Value | $X |
| Advance Rate | X% |
| Amount Advanced Today | $X |
| Factoring Fee | $X |
| Additional Fees | $X |
| Net Cash Day 1 | $X |
| Reserve Released | $X |
| Total Cost of Factoring | $X |
| Annualized Cost (APR) | X% |

**Opportunity Cost Comparison**
- State the opportunity cost of waiting in dollars
- State the cost of factoring in dollars
- State whether factoring is cheaper, more expensive, or roughly equivalent
- Provide a one-sentence verdict

**Sensitivity Table**
Show APR under 3 scenarios: early payment, on-time payment, late payment

**Recommendation**
2–4 sentences. State whether factoring makes financial sense given
