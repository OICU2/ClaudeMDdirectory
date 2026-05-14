---
name: saas-arr-movement-analysis
category: finance
description: >
  Breaks down annual recurring revenue changes into new, expansion, contraction, and churn
  components to produce a structured ARR bridge report. Use when someone asks about ARR
  movement, wants to understand revenue retention trends, needs to analyze SaaS growth
  components, is trying to reconcile beginning and ending ARR, or wants to build an ARR
  waterfall or bridge chart.
tags: [saas, arr, revenue, finance, subscription]
author: community
---

# SaaS ARR Movement Analysis

This skill decomposes ARR changes across a period into the five standard movement buckets—New, Expansion, Contraction, Churn, and Net New—and delivers a reconciled ARR bridge report with commentary.

## ARR Movement Workflow

### 1. Gather Inputs
Collect or request the following from the user:
- Beginning ARR (start of period)
- Ending ARR (end of period)
- Breakdown data by customer or cohort (preferred): new logos, expansions, contractions, churned logos
- Time period (month, quarter, or year)
- Currency and whether figures are in thousands, millions, etc.

If raw customer-level data is provided (e.g., a table of customer ARR at two points in time), compute the components directly:
- **New ARR**: Revenue from customers with $0 ARR at period start and >$0 at period end
- **Expansion ARR**: Positive ARR delta for customers present in both periods
- **Contraction ARR**: Negative ARR delta (expressed as a negative number) for customers present in both periods with reduced ARR
- **Churned ARR**: Revenue from customers with >$0 ARR at period start and $0 at period end (expressed as a negative number)
- **Net New ARR**: New + Expansion + Contraction + Churn (should reconcile: Beginning ARR + Net New ARR = Ending ARR)

### 2. Validate the Bridge
Confirm the reconciliation check:
```
Beginning ARR + New ARR + Expansion ARR + Contraction ARR + Churned ARR = Ending ARR
```
Flag any discrepancy and ask the user to verify source data if the bridge does not close.

### 3. Compute Key Metrics
Calculate and include:
- **Net Revenue Retention (NRR)**: `(Beginning ARR + Expansion + Contraction + Churn) / Beginning ARR × 100`
- **Gross Revenue Retention (GRR)**: `(Beginning ARR + Contraction + Churn) / Beginning ARR × 100`
- **Expansion Rate**: `Expansion ARR / Beginning ARR × 100`
- **Churn Rate**: `|Churned ARR| / Beginning ARR × 100`
- **Quick Ratio**: `(New ARR + Expansion ARR) / (|Contraction ARR| + |Churned ARR|)`

### 4. Interpret the Results
Provide a brief narrative covering:
- Whether growth is driven by new logos or expansion of existing customers
- Whether churn or contraction is the larger drag
- NRR benchmark context (world-class SaaS NRR > 120%, healthy > 100%, concerning < 90%)
- Any anomalies (e.g., expansion exceeding new ARR, high contraction relative to churn)

## Output Format

Produce the report in three sections:

**Section 1 — ARR Bridge Table**
A formatted table with columns: Component | ARR Amount | % of Beginning ARR

| Component       | ARR        | % of Beg. ARR |
|-----------------|------------|---------------|
| Beginning ARR   | $X,XXX,XXX | —             |
| + New ARR       | $XXX,XXX   | X.X%          |
| + Expansion ARR | $XXX,XXX   | X.X%          |
| − Contraction   | ($XXX,XXX) | (X.X%)        |
| − Churn         | ($XXX,XXX) | (X.X%)        |
| = Ending ARR    | $X,XXX,XXX | —             |
| Net New ARR     | $XXX,XXX   |
