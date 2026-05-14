---
name: subscription-lifetime-value-cohort-model
description: >
  Builds a cohort-based lifetime value model for subscription customers by combining monthly retention curves, average revenue per user, and gross margin to project cumulative value over time. Use when someone asks about customer lifetime value, wants to model subscription LTV by cohort, needs to project revenue from a subscriber base, or is trying to understand how long it takes to recoup customer acquisition costs. Also activates when someone wants to compare LTV across different customer segments or pricing tiers.
category: finance
tags: [ltv, subscriptions, cohort-analysis, retention, saas-metrics]
author: community
---

# Subscription Lifetime Value Cohort Model

This skill builds a structured, cohort-based LTV model that projects cumulative customer value over time using retention curves, ARPU, and gross margin, and Claude will use it whenever someone needs to quantify the long-term financial value of subscription customers.

## Model Construction Workflow

### 1. Gather Required Inputs
Collect or prompt for the following inputs before building the model:
- **Cohort definition**: monthly or quarterly cohort start dates, cohort sizes
- **Retention curve**: monthly retention rates (e.g., Month 1: 85%, Month 2: 78%, ...) or a churn rate to generate a retention curve
- **ARPU**: average monthly revenue per user (can vary by tier or cohort if available)
- **Gross margin**: percentage of revenue after direct costs (e.g., 70%)
- **Time horizon**: how many months to project (default to 24 months if not specified)
- **Optional**: CAC (customer acquisition cost) per cohort for payback period calculation

### 2. Build the Retention Schedule
- If only churn rate is provided, generate retention using: `Retention(t) = (1 - monthly_churn)^t`
- If a retention curve is provided, apply it directly month by month
- Create a table: rows = months since acquisition (0 through N), columns = cohorts
- Each cell = starting cohort size × retention rate at that month

### 3. Calculate Monthly Cohort Revenue
- For each cohort × month cell: `Revenue = Active Customers × ARPU`
- Apply gross margin: `Gross Profit = Revenue × Gross Margin %`
- Sum across all active cohorts per calendar month for blended totals

### 4. Calculate Cumulative LTV per Customer
- Cumulative LTV at month T = `Σ(t=0 to T) [Retention(t) × ARPU × Gross Margin]`
- Present as a per-customer metric (not total cohort)
- Highlight the month where LTV crosses CAC (payback month) if CAC is provided

### 5. Sensitivity Analysis
- Run LTV at ±5 and ±10 percentage point shifts in monthly churn rate
- Run LTV at ±10% ARPU
- Show how payback period changes under each scenario

### 6. Segment Comparison (if multiple tiers/cohorts)
- Build a side-by-side LTV table comparing segments
- Flag which segment has the highest 12-month and 24-month LTV
- Note if any segment has a payback period exceeding the average customer lifespan

## Output Format

Produce the following structured output:

**1. Input Summary Table**
A brief table confirming all inputs used (cohort size, ARPU, churn, gross margin, horizon).

**2. Retention Schedule**
A month-by-month table (rows = months 0–24, columns = % retained and active customer count) for each cohort or the base cohort if only one is provided.

**3. Cumulative LTV Table**
A table with columns: Month | Active Customers | Monthly Revenue | Monthly Gross Profit | Cumulative LTV per Customer. Bold the row where LTV first exceeds CAC.

**4. Key Metrics Summary**
- 12-month LTV per customer
- 24-month LTV per customer
- CAC payback period (if CAC provided)
- Average customer lifespan (1 / monthly churn rate)
- LTV:CAC ratio (if CAC provided)

**5. Sensitivity Table**
A compact table showing 12-month and 24-month LTV under 5 churn/ARPU scenarios.
