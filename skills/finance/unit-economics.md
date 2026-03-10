---
name: unit-economics
description: >
  Analyzes per-unit profitability metrics to evaluate business health and scalability. Use when
  someone asks "is my business profitable per customer," wants to calculate CAC or LTV, needs to
  understand contribution margin, is evaluating whether to scale a product line, or asks "how much
  does it cost to acquire a customer."
category: finance
tags: [unit-economics, cac, ltv, contribution-margin, profitability]
author: community
---

# Unit Economics Analyzer

This skill calculates and interprets per-unit profitability metrics — CAC, LTV, contribution margin, payback period, and LTV:CAC ratio — to determine whether a business model is viable and worth scaling.

## Unit Economics Workflow

### 1. Gather Inputs
Collect the following data points (ask if missing):
- **Revenue side:** Average revenue per customer (ARPC), average order value (AOV), purchase frequency, gross margin %, average customer lifespan or churn rate
- **Cost side:** Total sales & marketing spend, number of new customers acquired in the same period, variable costs per unit (COGS, fulfillment, support)
- **Time period:** Monthly, quarterly, or annual figures (must be consistent)

### 2. Calculate Core Metrics

**Customer Acquisition Cost (CAC)**
```
CAC = Total Sales & Marketing Spend / Number of New Customers Acquired
```

**Customer Lifetime Value (LTV)**
```
LTV = ARPC × Gross Margin % × Average Customer Lifespan
   OR
LTV = (ARPC × Gross Margin %) / Monthly Churn Rate
```

**Contribution Margin per Unit**
```
Contribution Margin = Revenue per Unit − Variable Costs per Unit
Contribution Margin % = Contribution Margin / Revenue per Unit × 100
```

**Payback Period**
```
Payback Period (months) = CAC / (Monthly Revenue per Customer × Gross Margin %)
```

**LTV:CAC Ratio**
```
LTV:CAC = LTV / CAC
```

### 3. Interpret Results Against Benchmarks

| Metric | Unhealthy | Acceptable | Healthy |
|---|---|---|---|
| LTV:CAC | < 1x | 1x–3x | > 3x |
| Payback Period | > 18 months | 12–18 months | < 12 months |
| Contribution Margin | < 0% | 0–20% | > 20% |
| Gross Margin | < 30% | 30–50% | > 50% |

### 4. Identify Leverage Points
Based on results, flag which lever has the most impact:
- **High CAC:** Review channel mix, improve conversion rates, test organic acquisition
- **Low LTV:** Address churn, increase purchase frequency, expand product offerings, raise prices
- **Low contribution margin:** Audit variable costs, renegotiate supplier terms, increase AOV
- **Long payback period:** Optimize early monetization, offer annual plans, reduce CAC

### 5. Sensitivity Analysis
Model at least two scenarios:
- **Pessimistic:** 20% worse CAC, 20% lower LTV
- **Optimistic:** 20% lower CAC, 20% higher LTV

Show how LTV:CAC and payback period shift across scenarios.

## Output Format

Produce a structured report with these sections:

**1. Input Summary** — List all inputs used, flag any assumptions made for missing data.

**2. Metrics Dashboard** — Present all calculated metrics in a table:
| Metric | Value | Benchmark | Status |

**3. Health Assessment** — 2–4 sentence plain-English verdict on whether the unit economics support scaling, maintaining, or restructuring the business.

**4. Top 3 Recommendations** — Numbered list, each with: the specific metric to improve, the action to take, and the expected directional impact.

**5. Sensitivity Table** — 3-column table showing Pessimistic / Base / Optimistic outcomes for LTV:CAC and Payback Period.

Length: Concise but complete. No metric should be presented without interpretation. Flag any inputs that are estimated or assumed.
