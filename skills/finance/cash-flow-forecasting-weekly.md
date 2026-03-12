---
name: cash-flow-forecasting-weekly
description: >
  Builds rolling 13-week cash flow projections by analyzing receivables, payables, and recurring transaction patterns.
  Use when someone says "show me our cash runway," asks about upcoming cash shortfalls, wants to project weekly liquidity,
  needs to plan for large payments, or is trying to understand when the business might run out of cash.
category: finance
tags: [cash-flow, forecasting, liquidity, working-capital, treasury]
author: community
---

# Weekly Rolling 13-Week Cash Flow Forecasting

This skill builds a structured 13-week (rolling quarter) cash flow forecast by categorizing inflows and outflows, identifying patterns, and projecting weekly net cash positions so Claude can surface liquidity risks and surpluses early.

## Forecast Construction Workflow

### 1. Establish the Starting Point
- Ask for or confirm the current cash and cash-equivalent balance across all accounts
- Note the forecast start date (default: the upcoming Monday)
- Identify the reporting currency

### 2. Gather Inflow Data
- **Accounts Receivable**: Pull aged AR schedule; apply historical collection timing (e.g., 30% collected in week of invoice, 50% at 30 days, 20% at 60 days)
- **Recurring Revenue**: Identify subscription, retainer, or contract payments with known dates and amounts
- **Expected New Sales**: Use pipeline data or a conservative estimate provided by the user; flag as probabilistic
- **Other Inflows**: Tax refunds, asset sales, loan draws, investment deposits — note each as confirmed or estimated

### 3. Gather Outflow Data
- **Accounts Payable**: Pull aged AP; map each invoice to its due date or expected payment date
- **Payroll**: Fixed payroll dates, amounts including taxes and benefits
- **Debt Service**: Loan principal and interest payments with exact dates
- **Recurring Fixed Costs**: Rent, SaaS subscriptions, insurance, utilities — assign to specific weeks
- **Variable Operating Costs**: COGS-linked payments, commissions, contractor payments — estimate based on revenue assumptions
- **One-Time or Irregular Payments**: Capital expenditures, tax installments, legal fees — include if known or flagged as contingent

### 4. Identify Patterns and Anomalies
- Flag weeks where outflows cluster (e.g., payroll + rent + quarterly tax in same week)
- Identify seasonal patterns if historical data is available
- Note any weeks where a single large inflow or outflow dominates the projection

### 5. Build the Weekly Projection
For each of the 13 weeks, calculate:
- **Opening Cash** = prior week closing balance
- **Total Inflows** = sum of all confirmed and estimated receipts
- **Total Outflows** = sum of all confirmed and estimated payments
- **Net Cash Flow** = Total Inflows − Total Outflows
- **Closing Cash** = Opening Cash + Net Cash Flow
- **Minimum Cash Buffer Check**: Compare closing cash to a stated or assumed minimum operating reserve (default: 4 weeks of fixed costs)

### 6. Scenario Layering
- **Base Case**: All confirmed amounts, estimated items at face value
- **Downside Case**: Delay AR collections by 1–2 weeks, reduce new sales inflows by 20–30%
- **Upside Case**: Accelerate collections, include pipeline deals closing early
- Flag which weeks breach the minimum cash buffer in any scenario

### 7. Recommendations
- Identify the earliest week with a projected cash shortfall
- Suggest specific levers: accelerate collections on named invoices, defer discretionary payments, draw on credit facility, negotiate extended terms with specific vendors
- Quantify the gap: how much additional cash or how many days of delay would close the shortfall

## Output Format

Produce the following sections in order:

**1. Summary Block (plain text, 4–6 lines)**
- Forecast period (dates)
- Starting cash balance
- Lowest projected cash balance and the week it occurs
- Whether any scenario breaches the minimum cash buffer and when
- Top 1–2 risks and top 1 opportunity

**2. 13-Week Cash Flow Table (markdown table)**

| Week | Dates | Opening Cash | Inflows | Outflows | Net Flow | Closing Cash | Buffer OK? |
|------|-------|-------------|---------|----------|----------|
