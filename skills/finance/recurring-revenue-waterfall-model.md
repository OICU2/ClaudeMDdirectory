---
name: recurring-revenue-waterfall-model
description: >
  Models monthly recurring revenue movements by tracking new, expansion, contraction, and churned revenue across cohorts in a structured waterfall format. Use when someone asks to analyze MRR growth, wants to understand revenue retention by cohort, needs to break down ARR movements, or is trying to model subscription revenue dynamics. Also activates when someone asks about net revenue retention, gross churn calculations, or building an MRR bridge.
category: finance
tags: [mrr, arr, saas, cohort-analysis, revenue-modeling, churn, retention]
author: community
---

# Recurring Revenue Waterfall Model

This skill builds a structured MRR waterfall that decomposes recurring revenue changes into new, expansion, contraction, and churned components across time periods and customer cohorts.

## Workflow

### 1. Gather Inputs
Collect or request the following before modeling:
- Starting MRR and time range (months or quarters)
- Customer cohort definitions (by start month, segment, or product tier)
- Revenue movement categories to track: New MRR, Expansion MRR, Contraction MRR, Churned MRR, Reactivation MRR
- Whether to model actuals, forecast, or both
- Currency and rounding conventions

### 2. Define the Waterfall Structure
Build the model using this standard MRR bridge formula per period:

```
Ending MRR = Beginning MRR
           + New MRR          (first-time paying customers)
           + Expansion MRR    (upsells, seat additions, upgrades)
           - Contraction MRR  (downgrades, seat reductions)
           - Churned MRR      (cancellations, non-renewals)
           + Reactivation MRR (previously churned customers returning)
```

### 3. Build Cohort Tracking
- Assign each customer to an origination cohort (month they became paying)
- Track each cohort's MRR contribution in every subsequent period
- Calculate cohort retention rate: `Cohort MRR(t) / Cohort MRR(t0)`
- Flag cohorts with contraction or churn for deeper analysis

### 4. Calculate Key Metrics Per Period
- **Gross MRR Churn Rate**: `(Churned MRR + Contraction MRR) / Beginning MRR`
- **Net MRR Churn Rate**: `(Churned MRR + Contraction MRR - Expansion MRR) / Beginning MRR`
- **Net Revenue Retention (NRR)**: `(Beginning MRR + Expansion - Contraction - Churn) / Beginning MRR`
- **Quick Ratio**: `(New MRR + Expansion MRR) / (Contraction MRR + Churned MRR)`

### 5. Build Forecast Assumptions (if modeling forward)
- Apply historical average churn rate to existing cohorts
- Apply expansion rate as % of cohort MRR at each tenure milestone
- Layer in new MRR based on sales pipeline or growth rate assumptions
- Stress-test with bear/base/bull scenarios by adjusting churn and expansion inputs

### 6. Validate the Model
- Confirm `Sum of all cohort MRRs = Total MRR` for every period
- Verify waterfall reconciles: Beginning + movements = Ending MRR
- Check that no customer appears in multiple cohorts in the same period

## Output Format

Produce the following sections in order:

**1. MRR Waterfall Table**
A period-by-period table (columns = months/quarters) with rows:
- Beginning MRR
- + New MRR
- + Expansion MRR
- − Contraction MRR
- − Churned MRR
- + Reactivation MRR
- = Ending MRR
- Net MRR Change
- Net MRR Change %

**2. Cohort Retention Grid**
A matrix where rows = origination cohorts and columns = months since start (M0–M24+), showing MRR retention % at each tenure point. Highlight cells below 80% retention.

**3. Key Metrics Summary**
A table showing per period: Gross Churn Rate, Net Churn
