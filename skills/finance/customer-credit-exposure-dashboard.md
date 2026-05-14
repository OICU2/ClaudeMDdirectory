---
name: customer-credit-exposure-dashboard
description: >
  Aggregates outstanding invoices, credit limits, and payment history per customer to produce a ranked credit risk exposure report. Use when someone says "show me our credit exposure," asks about customer credit risk, wants to review who owes the most, needs a credit limit utilization summary, or is preparing for a credit risk review meeting.
category: finance
tags: [credit-risk, accounts-receivable, invoicing, exposure, customer-analytics]
author: community
---

# Customer Credit Exposure Dashboard

This skill compiles outstanding invoices, credit limits, and payment behavior per customer into a ranked exposure report that credit managers can act on immediately.

## Workflow

1. **Collect input data** — Request or ingest the following:
   - Outstanding invoices (customer ID, invoice date, due date, amount, currency)
   - Credit limits per customer
   - Payment history (average days to pay, late payment count, last payment date)
   - Any existing credit holds or flags

2. **Calculate per-customer metrics** — For each customer compute:
   - **Total Outstanding**: Sum of all unpaid invoice amounts
   - **Credit Utilization %**: (Total Outstanding / Credit Limit) × 100
   - **Overdue Amount**: Sum of invoices past due date
   - **Days Sales Outstanding (DSO)**: Average days between invoice date and payment date
   - **Overdue %**: (Overdue Amount / Total Outstanding) × 100
   - **Risk Score**: Weighted composite — weight credit utilization (40%), overdue % (35%), DSO vs. terms (25%)

3. **Classify risk tier** — Assign each customer a tier:
   - 🔴 **High Risk**: Credit utilization ≥ 90% OR overdue % ≥ 50% OR DSO > 2× payment terms
   - 🟡 **Medium Risk**: Credit utilization 60–89% OR overdue % 25–49% OR DSO 1.5–2× terms
   - 🟢 **Low Risk**: All metrics below medium thresholds

4. **Rank customers** — Sort descending by: (1) risk tier severity, (2) total overdue amount, (3) credit utilization %

5. **Flag actionable alerts**:
   - Customers exceeding credit limit
   - Invoices overdue > 60 days
   - Customers with 3+ late payments in last 12 months
   - Rapid utilization increase (>20 percentage points month-over-month if data available)

6. **Summarize portfolio-level stats** — Totals and averages across all customers for executive summary.

## Output Format

Produce a structured report with three sections:

---

### Executive Summary
- Total portfolio exposure: $X
- Total overdue: $X (X% of portfolio)
- Customers by risk tier: X High / X Medium / X Low
- Top 3 immediate actions required

---

### Customer Exposure Table (ranked)

| Rank | Customer | Outstanding | Credit Limit | Utilization % | Overdue | DSO | Risk Tier | Alerts |
|------|----------|-------------|--------------|---------------|---------|-----|-----------|--------|
| 1    | ...      | ...         | ...          | ...           | ...     | ... | 🔴 High   | ...    |

Include all customers. Flag cells in red-tier rows with ⚠️ where thresholds are breached.

---

### Recommended Actions
List 3–7 specific, prioritized actions in this format:
- **[Customer Name]** — [Action] by [suggested deadline] — Reason: [metric that triggered it]

Example: **Acme Corp** — Place credit hold or request payment plan by Friday — Reason: 112% utilization + $42K overdue >90 days

---

If input data is incomplete, state explicitly which fields are missing and what assumptions were made before proceeding.
