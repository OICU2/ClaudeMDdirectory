---
name: subscription-revenue-modeling
description: >
  Models recurring revenue metrics and subscription business health for SaaS and subscription companies. Use when someone asks about MRR calculations, wants to analyze churn impact, needs to forecast subscription revenue, asks how to model expansion revenue or upsells, or wants to understand net revenue retention. Produces structured financial models with clear assumptions and scenario analysis.
category: finance
tags: [saas, mrr, churn, recurring-revenue, financial-modeling]
author: community
---

# Subscription Revenue Modeling

This skill builds and analyzes recurring revenue models including MRR movement, churn analysis, expansion revenue, and cohort-based forecasting for subscription businesses.

## Modeling Workflow

1. **Establish the MRR Waterfall components**
   - Starting MRR (prior period closing balance)
   - New MRR (new customers × average contract value / 12)
   - Expansion MRR (upgrades, seat additions, upsells from existing customers)
   - Contraction MRR (downgrades, seat reductions — record as negative)
   - Churned MRR (lost customers × their MRR — record as negative)
   - Ending MRR = Starting + New + Expansion + Contraction + Churned

2. **Calculate core subscription metrics**
   - **Gross MRR Churn Rate** = Churned MRR / Starting MRR
   - **Net MRR Churn Rate** = (Churned MRR + Contraction MRR − Expansion MRR) / Starting MRR
   - **Net Revenue Retention (NRR)** = (Starting MRR + Expansion + Contraction + Churned) / Starting MRR × 100
   - **Customer Churn Rate** = Churned Customers / Starting Customer Count
   - **Average Revenue Per Account (ARPA)** = Total MRR / Total Customers
   - **LTV** = ARPA / Gross MRR Churn Rate
   - **LTV:CAC Ratio** = LTV / Customer Acquisition Cost

3. **Build cohort-based revenue retention**
   - Group customers by acquisition month/quarter
   - Track each cohort's MRR retention over time (Month 0 = 100%)
   - Identify retention curves by segment (SMB vs. Mid-Market vs. Enterprise)
   - Flag cohorts with accelerated churn for root cause analysis

4. **Model expansion revenue streams**
   - Seat-based expansion: additional users × per-seat price
   - Tier upgrades: delta between old and new plan × customer count upgrading
   - Usage-based overage: units above threshold × overage rate
   - Cross-sell attach rate: percentage of base adopting add-on products

5. **Run scenario analysis**
   - **Base case**: current churn and expansion rates held constant
   - **Optimistic**: churn reduced by 20%, expansion rate increased by 15%
   - **Pessimistic**: churn increases by 30%, new bookings decline by 25%
   - Calculate ending ARR, NRR, and implied valuation multiple for each scenario

6. **Apply key modeling rules**
   - Always distinguish gross churn from net churn — they tell different stories
   - NRR above 100% means the business grows from existing customers alone
   - Use logo churn and revenue churn separately; enterprise skews revenue churn lower
   - Annualize monthly rates carefully: Annual Churn ≠ Monthly Churn × 12
   - Correct annualization: Annual Retention = (1 − Monthly Churn Rate)^12

## Output Format

Produce a structured response with these sections:

**MRR Waterfall Table** — Monthly columns showing Starting MRR, New, Expansion, Contraction, Churned, and Ending MRR with period-over-period growth rate.

**Key Metrics Dashboard** — Bulleted list of calculated metrics (Gross Churn, Net Churn, NRR, ARPA, LTV, LTV:CAC) with the formula used and the resulting figure.

**Cohort Retention Summary** — Table or percentage grid showing revenue retention by cohort age (Month 1 through Month 12+), with benchmark comparisons where applicable (e.g., best-in-class Saa