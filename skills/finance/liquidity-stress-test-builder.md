---
name: liquidity-stress-test-builder
description: >
  Constructs multi-scenario liquidity stress tests that model cash shortfalls under adverse conditions including delayed receivables, accelerated payables, and revenue downside assumptions. Use when someone says "model our cash position under stress," asks about "what happens to liquidity if collections slow down," or wants to "build a worst-case cash flow scenario," "stress test our runway," or "analyze liquidity risk under different assumptions."
category: finance
tags: [liquidity, stress-testing, cash-flow, scenario-analysis, treasury]
author: community
---

# Liquidity Stress Test Builder

This skill constructs structured, multi-scenario liquidity stress tests that quantify cash shortfalls and runway impacts when someone needs to analyze liquidity risk under adverse operating conditions.

## Stress Test Construction Workflow

### 1. Establish the Baseline
- Collect or prompt for: starting cash balance, current monthly burn rate, existing credit facilities (drawn/undrawn), and baseline receivables/payables aging schedule
- Define the stress test time horizon (default: 13-week rolling, with 12-month extension)
- Identify the business model type (B2B, B2C, SaaS, manufacturing, etc.) to calibrate realistic stress assumptions

### 2. Define the Three Core Shock Levers

**Receivables Delay Shock**
- Baseline: current DSO (Days Sales Outstanding)
- Mild stress: DSO +15 days (e.g., customers pay slower due to economic pressure)
- Severe stress: DSO +30–45 days, plus a bad debt write-off assumption (default: 5–10% of AR)
- Model which receivable tranches are at risk (concentration risk: any single customer >20% of AR gets flagged)

**Payables Acceleration Shock**
- Baseline: current DPO (Days Payable Outstanding)
- Mild stress: DPO compressed by 10 days (vendors tighten terms)
- Severe stress: DPO compressed by 20–30 days, plus prepayment demands on 15–25% of payables
- Flag any debt covenants or supplier contracts that could trigger early payment

**Revenue Downside Shock**
- Mild: 15–20% revenue reduction for the stress period
- Severe: 30–40% revenue reduction; model both sudden-drop and gradual-decline curves
- For subscription/SaaS: model churn acceleration (e.g., +2x normal monthly churn rate)
- For transactional: model volume decline and price compression separately

### 3. Build the Scenario Matrix
Combine shocks into four named scenarios:

| Scenario | Receivables | Payables | Revenue |
|---|---|---|---|
| Base Case | No change | No change | No change |
| Mild Stress | +15 days DSO | −10 days DPO | −15% |
| Severe Stress | +35 days DSO, 5% bad debt | −25 days DPO | −35% |
| Catastrophic | +50 days DSO, 10% bad debt | −30 days DPO, 20% prepay demand | −50% |

### 4. Calculate Cash Shortfall and Runway
For each scenario compute:
- **Weekly net cash position** = Opening cash + collections − disbursements − debt service
- **Minimum cash trough**: the lowest point reached and the week it occurs
- **Runway**: weeks until cash reaches minimum operating threshold (prompt user to define; default $500K or 4 weeks of burn)
- **Liquidity gap**: shortfall amount if trough breaches threshold

### 5. Identify Mitigation Levers
For each scenario breaching the threshold, enumerate ranked response options:
- Draw on revolving credit facility (state available capacity and any covenant constraints)
- Accelerate collections: early payment discounts (model cost at 1–2% of collected AR)
- Defer discretionary capex (prompt user to identify deferrable spend)
- Payroll and headcount actions (flag as last resort; note cash timing impact)
- Asset monetization or factoring (model at 85–90 cents on the dollar)

### 6. Sensitivity Table
Produce a sensitivity matrix showing runway (in weeks) across a grid of:
- Revenue decline (rows): 0%, 15%, 
