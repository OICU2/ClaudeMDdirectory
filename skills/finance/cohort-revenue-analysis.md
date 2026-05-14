---
name: cohort-revenue-analysis
description: >
  Segments customers by acquisition cohort and tracks cumulative revenue, retention rates, and lifetime value trends over time. Use when someone says "analyze our cohort revenue," asks about "customer lifetime value by cohort," wants to "track retention across acquisition periods," needs to "understand revenue trends by signup month," or asks "how are different customer groups performing over time."
category: finance
tags: [cohort-analysis, revenue, retention, ltv, customer-analytics]
author: community
---

# Cohort Revenue Analysis

This skill segments customers by acquisition period and produces cumulative revenue, retention rates, and LTV trends, used whenever cohort-level financial performance needs to be measured or compared.

## Analysis Workflow

1. **Define cohort grouping**: Confirm the cohort period (monthly is default; weekly or quarterly if volume warrants). Identify the acquisition event (first purchase, signup, subscription start).

2. **Establish required data fields**: Confirm availability of customer ID, acquisition date, transaction date, and transaction amount. Flag missing fields before proceeding.

3. **Build cohort index**: Assign each customer a cohort label (e.g., `2023-01`) and calculate periods elapsed since acquisition (Period 0, 1, 2, ...).

4. **Calculate per-cohort metrics**:
   - **Retention rate**: Active customers in period N ÷ cohort size at Period 0
   - **Cumulative revenue**: Running sum of all revenue per customer from Period 0 through Period N
   - **Average revenue per user (ARPU)**: Total cohort revenue ÷ active customers in that period
   - **Cumulative LTV**: Total revenue ÷ original cohort size at each period

5. **Identify trends and anomalies**:
   - Compare retention curves across cohorts — flag cohorts dropping more than 20% faster than average
   - Highlight cohorts with above/below average cumulative LTV at Period 3, 6, and 12
   - Note any cohort where revenue per retained customer is accelerating (expansion revenue signal)

6. **Attribute drivers**: Cross-reference cohort performance with acquisition channel, product tier, or seasonality if data is available. Surface the top 1–2 likely drivers of divergence between best and worst performing cohorts.

7. **Project forward**: For cohorts with at least 6 months of data, extrapolate LTV at 12 and 24 months using the observed retention decay curve. State confidence level based on data completeness.

## Output Format

Produce the following sections in order:

**Cohort Summary Table**
A markdown table with columns: Cohort | Size | Period-1 Retention | Period-3 Retention | Period-6 Retention | Cumulative LTV (3M) | Cumulative LTV (6M) | Cumulative LTV (12M)

**Retention Curve Narrative**
2–3 sentences describing the overall retention shape (steep early drop, gradual decline, plateau) and which cohorts deviate from the norm.

**LTV Trend Analysis**
Bullet list of 3–5 findings comparing LTV growth across cohorts. Include specific numbers. Call out the best and worst performing cohorts and the magnitude of difference.

**Key Drivers**
2–4 bullet points identifying what appears to separate high-performing from low-performing cohorts, labeled by confidence level (High / Medium / Low).

**Recommendations**
3 numbered, specific actions — one targeting retention improvement, one targeting revenue expansion within retained cohorts, one targeting acquisition quality for future cohorts.

**Projections (if applicable)**
A small table: Cohort | Projected 12M LTV | Projected 24M LTV | Confidence. Include only cohorts with ≥6 periods of data.
