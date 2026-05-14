---
name: days-payable-outstanding-optimization-model
description: >
  Calculates the cash flow benefit of extending supplier payment terms and quantifies the trade-off against early-payment discount opportunities. Use when someone asks about optimizing payment terms, wants to analyze days payable outstanding, is evaluating whether to take supplier early-payment discounts, or needs to model the working capital impact of changing when invoices are paid. Also triggers when someone wants to compare the cost of holding cash versus capturing vendor discounts.
category: finance
tags: [working-capital, accounts-payable, cash-flow, dpo, supplier-terms]
author: community
---

# Days Payable Outstanding Optimization Model

This skill builds a structured DPO optimization model that calculates the cash flow benefit of extending payment terms and compares it against the annualized cost of forgoing early-payment discounts, helping finance teams make data-driven accounts payable decisions.

## Analysis Workflow

### Step 1: Collect Inputs
Gather the following from the user. If not provided, use clearly labeled assumptions:
- **Current DPO** (days): average days currently taken to pay suppliers
- **Target DPO** (days): proposed extended payment terms
- **Annual COGS or total payables spend** ($): basis for calculation
- **Early-payment discount terms** (e.g., "2/10 net 30" means 2% discount if paid in 10 days instead of 30)
- **Cost of capital or opportunity rate** (%): what the company earns or pays on cash (use 8–12% as default if unknown)
- **Number of suppliers offering discounts** and what share of spend they represent

### Step 2: Calculate Cash Flow Benefit of Extending DPO
Use this formula:

**Additional Cash Released = (Target DPO − Current DPO) / 365 × Annual Payables Spend**

This is the one-time working capital benefit of moving from current to target DPO. Then calculate the annual yield on that freed cash:

**Annual Benefit = Additional Cash Released × Cost of Capital**

### Step 3: Calculate Cost of Forgoing Early-Payment Discounts
For each discount term (e.g., 2/10 net 30):

**Annualized Cost of Forgoing Discount = Discount % / (1 − Discount %) × 365 / (Net Days − Discount Days)**

Example for 2/10 net 30:
= 2% / 98% × 365 / 20 = **37.2% annualized cost**

Compare this annualized cost to the company's cost of capital:
- If annualized discount cost > cost of capital → **take the discount**
- If annualized discount cost < cost of capital → **skip the discount, extend terms**

### Step 4: Calculate Net Trade-Off
For each supplier segment:
- **Discount Value Foregone** = Discount % × Spend from discount-eligible suppliers
- **Cash Benefit Gained** = Extended DPO cash × Cost of Capital
- **Net Position** = Cash Benefit Gained − Discount Value Foregone

### Step 5: Sensitivity Analysis
Run the model across three scenarios:
- **Conservative**: Current DPO + 15 days extension, cost of capital at low end
- **Base**: Current DPO + target extension, stated cost of capital
- **Aggressive**: Maximum feasible DPO extension, high cost of capital

Flag if extending DPO beyond 90 days may signal supplier risk or damage relationships.

### Step 6: Decision Framework
Apply these rules:
1. Always take discounts where annualized cost > 15% unless severe liquidity constraints exist
2. Extend terms selectively — prioritize large-spend, low-leverage suppliers
3. Quantify relationship risk for critical or sole-source suppliers separately
4. If the company has revolving credit available below 8%, extending terms rarely beats taking 2/10 discounts

## Output Format

Produce a structured report with these sections:

**1. Executive Summary** (3–5 bullet points)
- Net cash flow impact of proposed DPO change
- Recommended action on early-payment discounts
- Annual working capital improvement

**2. DPO Extension Model Table**
| Metric | Current State | Target State | Delta |
|---|---|---|---|
| DPO (days) | | | |
| Cash Tied in Pay
