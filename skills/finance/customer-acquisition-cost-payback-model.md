---
name: customer-acquisition-cost-payback-model
description: >
  Calculates the number of months required to recover customer acquisition cost based on gross margin and monthly revenue inputs. Use when someone asks about CAC payback period, wants to know how long it takes to recoup marketing spend, is modeling customer unit economics, wants to analyze acquisition cost recovery, or is building a payback period analysis for investors or internal planning.
category: finance
tags: [cac, unit-economics, payback-period, saas, customer-acquisition]
author: community
---

# CAC Payback Period Model

Computes how many months it takes to recover the cost of acquiring a customer using gross margin contribution, and surfaces key unit economics benchmarks when someone is analyzing acquisition efficiency.

## CAC Payback Calculation Workflow

1. **Gather required inputs** — Collect or prompt for:
   - **CAC**: Total cost to acquire one customer (ad spend + sales + onboarding amortized)
   - **MRR or ACV per customer**: Monthly or annual contract value
   - **Gross margin %**: Contribution margin after direct cost of goods/service delivery (e.g., 70%)

2. **Derive monthly gross margin contribution**:
   - If input is MRR: `Monthly GM Contribution = MRR × Gross Margin %`
   - If input is ACV: convert to MRR first → `MRR = ACV / 12`, then apply margin

3. **Calculate CAC Payback Period**:
   - `Payback Months = CAC / Monthly GM Contribution`
   - Round to one decimal place

4. **Apply benchmark context**:
   - < 12 months → Excellent (typical SaaS best-in-class)
   - 12–18 months → Healthy
   - 18–24 months → Acceptable but watch churn
   - > 24 months → Concerning; flag cash flow risk and churn sensitivity

5. **Run sensitivity analysis** if the user has uncertain inputs:
   - Vary gross margin ±10 percentage points
   - Vary MRR ±20%
   - Present results as a small table showing payback months across scenarios

6. **Flag missing assumptions** — If churn data is available, note that payback period must be shorter than average customer lifetime; compute LTV/CAC ratio as a supplementary check:
   - `LTV = Monthly GM Contribution / Monthly Churn Rate`
   - `LTV:CAC Ratio` (healthy threshold: > 3×)

7. **Highlight actionable levers** — Identify which variable (CAC reduction, pricing increase, or margin improvement) has the largest impact on shortening payback.

## Output Format

Produce a structured response with the following sections:

**1. Input Summary** — Restate the key assumptions in a short bullet list.

**2. Payback Calculation** — Show the formula with actual numbers plugged in and the final result in bold (e.g., **Payback Period: 14.3 months**).

**3. Benchmark Assessment** — One sentence placing the result in context against industry norms.

**4. Sensitivity Table** (if inputs are uncertain or requested):

| Gross Margin | MRR | Payback (Months) |
|---|---|---|
| 60% | $400 | 20.8 |
| 70% | $500 | 14.3 |
| 80% | $600 | 10.4 |

**5. LTV:CAC Ratio** — Include only if churn rate is provided or can be estimated.

**6. Key Levers** — 2–3 bullet points on which inputs to optimize and by how much to hit a target payback threshold.

Keep the response concise; avoid prose padding. Use numbers throughout.
