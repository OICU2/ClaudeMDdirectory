---
name: saas-metrics-dashboard-design
description: >
  Builds a structured dashboard tracking ARR, MRR, expansion revenue, churn, and net revenue retention from raw subscription data. Use when someone says "analyze my subscription data," asks about "SaaS metrics," wants to "track recurring revenue," needs to "calculate churn or NRR," or is trying to "understand expansion revenue trends."
category: finance
tags: [saas, metrics, dashboard, arr, mrr, churn, nrr, subscription-analytics]
author: community
---

# SaaS Metrics Dashboard Design

This skill transforms raw subscription data into a structured metrics dashboard covering ARR, MRR, expansion revenue, churn, and net revenue retention, and Claude will use it whenever someone needs to measure or visualize the health of a subscription business.

## Dashboard Construction Workflow

### 1. Identify and Validate Input Data
- Confirm the data source contains: customer ID, subscription start/end dates, plan type, monthly or annual contract value, and any upgrade/downgrade events.
- Flag missing fields and request them before proceeding.
- Normalize billing cadence: convert annual contracts to MRR by dividing ACV by 12.

### 2. Calculate Core Metrics

**MRR (Monthly Recurring Revenue)**
- Sum all active subscription values normalized to monthly amounts for a given snapshot date.
- Segment into: New MRR (new customers), Expansion MRR (upgrades/add-ons), Contraction MRR (downgrades), Churned MRR (cancellations), Reactivation MRR.

**ARR (Annual Recurring Revenue)**
- ARR = MRR × 12. Do not sum annual contracts directly unless they are non-renewing one-time deals.

**Churn Rate**
- Logo Churn = (Customers lost in period / Customers at start of period) × 100
- Revenue Churn = (MRR lost to churn in period / MRR at start of period) × 100
- Calculate both gross and net revenue churn separately.

**Net Revenue Retention (NRR)**
- NRR = ((Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) / Starting MRR) × 100
- Benchmark: >100% indicates growth from existing customers alone.

**Expansion Revenue**
- Isolate upgrade events and add-on purchases per cohort.
- Express as absolute MRR added and as a percentage of starting MRR.

### 3. Segment and Cohort Analysis
- Break all metrics by customer segment (SMB, Mid-Market, Enterprise) if plan or ACV data permits.
- Build a monthly cohort retention table showing revenue retained from each acquisition month.
- Identify top expansion and highest churn cohorts.

### 4. Trend and Benchmark Comparison
- Plot each metric across the last 12 months minimum.
- Flag metrics against SaaS benchmarks:
  - NRR: <90% poor, 90–110% healthy, >110% best-in-class
  - Monthly revenue churn: >2% is a red flag
  - Expansion MRR should offset at least 50% of churned MRR for sustainable growth

### 5. Identify Alerts and Insights
- Surface the top 3 risks (e.g., rising churn in a specific segment, declining expansion rate).
- Surface the top 3 opportunities (e.g., cohorts with high NRR ripe for upsell campaigns).

## Output Format

Produce the following sections in order:

**1. Metrics Summary Table** (Markdown table)
| Metric | Current Period | Prior Period | MoM Change | Benchmark |
covering MRR, ARR, New MRR, Expansion MRR, Churned MRR, Net MRR Change, Logo Churn %, Revenue Churn %, NRR %.

**2. MRR Waterfall** — A text-based or ASCII waterfall showing: Starting MRR → +New → +Expansion → −Contraction → −Churn → Ending MRR.

**3. Cohort Retention Table** — Rows = acquisition month, Columns = months since acquisition (M0–M12), values = % MRR retained.

**4. Segment Breakdown**
