---
name: supplier-payment-terms-optimization
category: finance
description: >
  Models the cash flow and discount trade-offs of extending or shortening payment terms across the vendor base.
  Use when someone asks about optimizing supplier payment terms, wants to analyze early payment discounts,
  is evaluating the cost of extending accounts payable, or needs to understand the working capital impact
  of changing vendor payment schedules.
tags: [accounts-payable, working-capital, cash-flow, vendor-management, supply-chain-finance]
author: community
---

# Supplier Payment Terms Optimization

This skill analyzes the financial trade-offs of adjusting payment terms across the vendor base, quantifying the working capital benefit against the cost of forgoing early payment discounts or damaging supplier relationships.

## Analysis Workflow

### 1. Gather Inputs
Collect or request the following for each vendor segment or individual supplier:
- Current payment terms (e.g., Net 30, 2/10 Net 30)
- Annual spend with each vendor
- Early payment discount offered (if any), expressed as percentage and discount window
- Proposed new payment terms (extension or shortening)
- Company's cost of capital or weighted average cost of capital (WACC)
- Current Days Payable Outstanding (DPO)

### 2. Calculate the Cost of Early Payment Discount
For any vendor offering a discount (e.g., 2/10 Net 30):

**Annualized cost of discount = (Discount % / (1 - Discount %)) × (365 / (Net Days - Discount Days))**

Example: 2/10 Net 30 → (0.02 / 0.98) × (365 / 20) = **37.2% annualized cost**

Compare this rate to the company's WACC or short-term borrowing rate:
- If annualized discount cost > WACC → **take the discount** (it's cheaper than borrowing)
- If annualized discount cost < WACC → **skip the discount, extend payment**

### 3. Model Working Capital Impact of Term Extension
For each vendor or segment being evaluated for extended terms:

**Additional cash released = (Annual Spend / 365) × (New DPO - Current DPO)**

Aggregate across all vendors to find total working capital freed.

Calculate the annualized value of that freed cash:
**Working capital benefit = Cash Released × WACC**

### 4. Assess Supplier Risk and Relationship Cost
Flag vendors where extension may carry risk:
- **Critical / sole-source suppliers**: extension risk is high — model a risk-adjusted penalty
- **Small suppliers** (<$1M annual spend): may lack financing capacity; consider supply chain finance programs
- **Vendors already at industry-maximum terms**: limited room to extend without relationship damage

Segment vendors into a 2×2 matrix:
| | Low Financial Impact | High Financial Impact |
|---|---|---|
| **Low Relationship Risk** | Extend terms | Extend terms aggressively |
| **High Relationship Risk** | Hold or negotiate | Consider supply chain finance |

### 5. Evaluate Supply Chain Finance (SCF) as a Bridge
When extending terms risks supplier strain, model an SCF program:
- Supplier receives early payment from a bank/third party at a rate tied to the buyer's credit rating
- Buyer pays the bank at the extended term
- Net benefit = spread between supplier's borrowing cost and SCF rate × invoice volume

**SCF value to supplier = (Supplier borrowing rate - SCF rate) × Annual spend**

### 6. Build the Optimization Recommendation
Rank vendors by net financial benefit per dollar of spend, adjusted for risk tier. Recommend one of four actions per vendor:
1. **Take discount** — annualized cost < WACC
2. **Extend terms** — low relationship risk, material working capital benefit
3. **Enroll in SCF** — high relationship risk but extension is desirable
4. **Hold current terms** — marginal benefit or strategic relationship constraint

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 bullet points)
- Total incremental working capital available
- Estimated annualized value at current WACC
- Number of vendors recommended for each action
- Key risks and mitigation

**Vendor-Level Analysis Table**
| Vendor | Annual Spend | Current Terms | Proposed Terms | DPO Change
