---
name: subscription-churn-revenue-impact-calculator
description: >
  Calculates the trailing and forward revenue impact of customer churn by cohort, tier, and cancellation reason to quantify MRR erosion. Use when someone asks about churn impact on revenue, wants to understand MRR loss from cancellations, needs to break down subscription attrition by customer segment, is trying to forecast revenue erosion from churn trends, or wants to quantify the financial damage of customer turnover.
category: finance
tags: [churn, mrr, subscription, revenue, saas, cohort-analysis, arr]
author: community
---

# Subscription Churn Revenue Impact Calculator

This skill analyzes customer churn data to calculate trailing MRR erosion and forward revenue impact, segmented by cohort, subscription tier, and cancellation reason, and presents actionable financial summaries.

## Analysis Workflow

### 1. Gather Required Inputs
Request or locate the following data before proceeding:
- **Churned customers list**: customer ID, subscription tier, MRR at cancellation, cancellation date, cancellation reason
- **Active customer baseline**: total customers and MRR per tier at period start
- **Time range**: trailing period (e.g., last 3/6/12 months) and forecast horizon (e.g., next 3/6 months)
- **Cohort definition**: acquisition month/quarter or tier enrollment date

If data is missing, state exactly what is needed and proceed with available data, noting assumptions.

### 2. Calculate Trailing Churn Metrics
For each segment (tier, cohort, cancellation reason):

- **Churned MRR** = sum of MRR for all churned customers in period
- **Churn Rate (%)** = (Churned MRR / Beginning MRR) × 100
- **Customer Churn Rate (%)** = (Churned Customers / Beginning Customer Count) × 100
- **Average MRR per churned customer** = Churned MRR / Churned Customer Count
- **Revenue Concentration**: flag if top 10% of churned accounts represent >50% of lost MRR

### 3. Segment by Cancellation Reason
Group churned MRR into reason buckets:
- Price/affordability
- Product gaps / missing features
- Competitor switch
- Business closure / downsizing
- Non-payment / involuntary
- Unknown / no reason given

Calculate MRR lost and customer count per bucket. Flag the top reason driving MRR loss, not just volume.

### 4. Cohort Retention Analysis
For each acquisition cohort:
- Calculate months-to-churn distribution (median, P25, P75)
- Identify cohorts with above-average churn rates
- Calculate **Cohort LTV erosion**: expected vs. actual revenue retained through current period

### 5. Forward Revenue Impact Projection
Using trailing churn rates by tier:
- **Projected MRR loss (monthly)** = Current MRR per tier × Tier churn rate
- **Cumulative MRR erosion** = Sum of projected monthly losses over forecast horizon
- **ARR impact** = Annualized MRR loss if current churn rate holds
- **Break-even retention improvement needed**: calculate the churn rate reduction required to offset projected erosion

Apply a sensitivity table: show impact at current rate, rate −25%, and rate −50%.

### 6. Flag Anomalies and Risks
- Churn rate acceleration: compare last 30 days vs. prior 60-day average
- High-value account concentration risk (single churned account >5% of total MRR lost)
- Involuntary churn share exceeding 20% (indicates billing/payment issue, not product)
- Cohorts churning faster than historical baseline

## Output Format

Produce a structured report with these sections:

**CHURN REVENUE IMPACT SUMMARY**
```
Period: [start date] – [end date]
Forecast Horizon: [X months]

TRAILING IMPACT
─────────────────────────────────────────
Total Churned MRR:         $[X]
Total Churned Customers:   [N]
Blended MRR Churn Rate:    [X]%
Blended Customer Churn:    [X]%

BY TIER
Tier        |
