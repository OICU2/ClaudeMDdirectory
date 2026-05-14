---
name: customer-credit-limit-scoring-model
description: >
  Designs a structured scoring framework for evaluating and setting customer credit limits based on
  quantitative financial signals and industry benchmarks. Use when someone wants to assess customer
  creditworthiness, asks about setting credit limits for business customers, needs a model to
  evaluate payment risk, wants to score customers for credit exposure, or is building a credit
  policy for accounts receivable.
category: finance
tags: [credit-risk, scoring-model, accounts-receivable, financial-analysis, credit-policy]
author: community
---

# Customer Credit Limit Scoring Model

This skill builds a weighted scoring framework that translates customer financial data, payment behavior, and industry risk benchmarks into a recommended credit limit with a defined risk tier.

## Scoring Framework Construction

**Step 1: Gather Input Variables**
Collect the following data points from the customer:
- Payment history: days sales outstanding (DSO), late payment frequency, delinquency incidents (last 12–24 months)
- Financial ratios: current ratio, debt-to-equity, interest coverage ratio, gross margin
- Business profile: years in operation, industry sector, annual revenue
- External signals: credit bureau score (D&B Paydex, Experian Business, or equivalent), any public filings or liens

**Step 2: Assign Weighted Scores Across Five Dimensions**

| Dimension | Weight | Scoring Criteria |
|---|---|---|
| Payment History | 30% | Score 1–5: 1 = chronic late/defaults, 5 = always on-time |
| Financial Health Ratios | 25% | Score 1–5 based on ratio benchmarks (e.g., current ratio >2 = 5, <1 = 1) |
| Industry Default Rate | 20% | Score 1–5 using sector default benchmarks (e.g., construction higher risk than software) |
| Business Stability | 15% | Score 1–5: years in operation, revenue consistency |
| External Credit Rating | 10% | Map bureau score to 1–5 scale |

Calculate: **Composite Score = Σ(dimension score × weight)**, resulting in a value between 1.0 and 5.0.

**Step 3: Map Score to Risk Tier and Credit Limit**

| Composite Score | Risk Tier | Recommended Credit Limit |
|---|---|---|
| 4.5 – 5.0 | Tier 1 – Low Risk | Up to $500K or 15% of customer annual revenue |
| 3.5 – 4.4 | Tier 2 – Moderate Risk | $100K–$250K or 8% of annual revenue |
| 2.5 – 3.4 | Tier 3 – Elevated Risk | $25K–$75K with net-30 terms only |
| 1.5 – 2.4 | Tier 4 – High Risk | $5K–$15K, prepayment or secured terms recommended |
| 1.0 – 1.4 | Tier 5 – Decline | Do not extend credit; escalate to credit committee |

**Step 4: Apply Override Conditions**
Flag and adjust the recommendation if any of the following apply:
- Active lien, judgment, or bankruptcy filing → automatic Tier 5
- DSO > 90 days in past 6 months → drop one tier
- New customer with no payment history → cap at Tier 3 regardless of financial ratios
- Customer revenue exceeds $50M → escalate to manual credit committee review

**Step 5: Document Rationale**
For each scoring decision, record the input value, the score assigned, and the benchmark used. This creates an audit trail for credit policy compliance.

## Output Format

Produce a **Credit Limit Scoring Report** with the following sections:

1. **Customer Summary** — Name, industry, annual revenue, years in operation
2. **Dimension Scores Table** — Each of the five dimensions with input data, raw score (1–5), weight, and weighted contribution
3. **Composite Score** — Final calculated value (e.g., 3.8 / 5.0)
4. **Risk Tier Assignment** — Tier label with one-sentence justification
5. **Recommended Credit Limit** — Specific dollar figure
