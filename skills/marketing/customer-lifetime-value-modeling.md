---
name: customer-lifetime-value-modeling
description: >
  Builds statistical and predictive models to calculate, segment, and act on customer lifetime value (CLV). Use when someone asks how to calculate customer lifetime value, wants to segment customers by profitability, needs to allocate marketing budget between acquisition and retention, or asks which customers are worth keeping. Activate when someone mentions LTV, CLV, customer value scoring, or churn-weighted revenue modeling.
category: marketing
tags: [clv, ltv, customer-segmentation, retention, predictive-modeling]
author: community
---

# Customer Lifetime Value Modeling

This skill builds complete CLV models—from data requirements through segmentation and budget recommendations—and activates whenever someone needs to quantify, predict, or act on the long-term revenue value of customers.

## CLV Modeling Workflow

### 1. Clarify the Business Context
Before modeling, establish:
- **Business model**: subscription, transactional, marketplace, or hybrid
- **Data availability**: transaction history length, customer IDs, timestamps, revenue per transaction
- **Goal**: retrospective reporting, predictive scoring, or budget allocation decisions
- **Time horizon**: 12-month, 3-year, or lifetime CLV target

### 2. Choose the Right CLV Formula

**Simple Historical CLV** (use when <12 months data or quick estimate needed):
```
CLV = Average Order Value × Purchase Frequency × Customer Lifespan
```

**Discounted CLV** (use for financial planning with known churn):
```
CLV = (Margin per Period × Retention Rate) / (1 + Discount Rate - Retention Rate)
```

**Probabilistic CLV — BG/NBD Model** (use for non-contractual businesses with 2+ years of data):
- Requires: recency, frequency, monetary value (RFM) per customer
- Tools: Python `lifetimes` library, or SQL + spreadsheet approximation
- Output: predicted purchases in next N days × predicted AOV × margin

**Subscription CLV** (use for SaaS or recurring revenue):
```
CLV = (MRR × Gross Margin) / Customer Churn Rate
```

### 3. Gather and Prepare Data
Minimum required fields:
- `customer_id`, `order_date`, `order_revenue`, `order_cost` (if available)
- Derived: `first_purchase_date`, `last_purchase_date`, `total_orders`, `total_revenue`

Data quality checks to perform:
- Remove duplicate transactions
- Flag and handle refunds separately
- Identify one-time buyers vs. repeat customers
- Segment new vs. mature cohorts (customers <90 days old distort averages)

### 4. Segment Customers by CLV Tier

Calculate CLV per customer, then apply tiering:

| Tier | Criteria | Label | Strategy |
|------|----------|-------|----------|
| 1 | Top 20% by CLV | Champions | Loyalty programs, upsell, referral ask |
| 2 | Middle 30% | Potentials | Reactivation, cross-sell, email nurture |
| 3 | Bottom 50% | Low-value | Low-cost retention or controlled churn |

Use k-means clustering or simple percentile cutoffs depending on data size.

### 5. Apply CLV to Budget Allocation

**Customer Acquisition Cost (CAC) ceiling**:
```
Max CAC = CLV × Target Payback Ratio (typically 0.3–0.5)
```

**Channel ROI comparison**:
- Calculate average CLV of customers acquired per channel
- Compare against CAC per channel
- Rank channels by CLV:CAC ratio (target ≥ 3:1)

**Retention vs. acquisition tradeoff**:
- If top-tier churn > 5%/month: prioritize retention spend
- If CLV:CAC ratio < 2:1 on acquisition: pause new channel spend, fix retention first

### 6. Validate the Model
- Backtest: use historical data to predict CLV for a past cohort, compare to actual revenue
- Sanity checks: CLV should exceed CAC for profitable segments; CLV by cohort should increase over time
- Confidence ranges: report CLV as a range (P25–P75), not a single number

##
