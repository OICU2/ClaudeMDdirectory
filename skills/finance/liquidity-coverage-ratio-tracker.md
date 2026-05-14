---
name: liquidity-coverage-ratio-tracker
description: >
  Monitors high-quality liquid assets (HQLA) against projected net cash outflows to assess
  liquidity coverage ratio (LCR) compliance on a rolling basis. Use when someone asks about
  LCR compliance, wants to check if their liquid assets cover short-term obligations, needs
  to track liquidity buffer sufficiency, is concerned about Basel III liquidity requirements,
  or wants to model net cash outflow stress scenarios.
category: finance
tags: [liquidity, Basel III, LCR, HQLA, cash-flow, regulatory-compliance, risk-management]
author: community
---

# Liquidity Coverage Ratio Tracker

This skill calculates and monitors the Liquidity Coverage Ratio by comparing high-quality liquid assets against stressed net cash outflows over a 30-day window, flagging compliance breaches and trends for regulatory reporting.

## LCR Calculation Workflow

### 1. Collect HQLA Inputs
Categorize assets into Level 1, Level 2A, and Level 2B per Basel III definitions:
- **Level 1**: Central bank reserves, sovereign debt (0% risk-weight) — applied at 100% market value, no cap
- **Level 2A**: Agency securities, covered bonds, sovereign debt (20% risk-weight) — applied at 85% of market value, capped at 40% of total HQLA
- **Level 2B**: Corporate bonds (BBB- to A+), equities, RMBS — applied at 50–75% of market value, capped at 15% of total HQLA

Compute:
```
Total HQLA = Level 1 + (Level 2A × 0.85) + (Level 2B × applicable haircut)
Apply cap: Level 2 assets ≤ 40% of adjusted HQLA
Apply cap: Level 2B assets ≤ 15% of adjusted HQLA
```

### 2. Compute Net Cash Outflows (30-Day Stress Scenario)
Apply Basel III run-off rates to each liability/commitment category:

| Category | Run-off Rate |
|---|---|
| Retail deposits (stable) | 3% |
| Retail deposits (less stable) | 10% |
| Unsecured wholesale (non-financial) | 25–40% |
| Unsecured wholesale (financial) | 100% |
| Secured funding (Level 1 collateral) | 0% |
| Committed credit facilities (retail) | 5% |
| Committed credit facilities (corporate) | 10% |
| Undrawn liquidity facilities (financial) | 100% |

Apply inflow offsets (capped at 75% of gross outflows):
```
Net Cash Outflows = Gross Outflows − min(Qualifying Inflows, 0.75 × Gross Outflows)
```

### 3. Calculate LCR
```
LCR = Total HQLA / Net Cash Outflows × 100%
```
- **Minimum threshold**: 100% (Basel III fully phased-in standard)
- Flag as **NON-COMPLIANT** if LCR < 100%
- Flag as **BUFFER WARNING** if 100% ≤ LCR < 110%
- Flag as **COMPLIANT** if LCR ≥ 110%

### 4. Rolling Basis Monitoring
- Recalculate LCR daily or at each data refresh
- Track 30-day rolling trend: record daily LCR values, compute 7-day and 30-day moving averages
- Identify breach events: consecutive days below 100% trigger escalation flag
- Compute headroom: `HQLA Surplus/Deficit = Total HQLA − Net Cash Outflows`

### 5. Stress Scenario Sensitivity
Run three scenarios automatically:
- **Base**: standard Basel III run-off rates
- **Moderate stress**: run-off rates +15% across all categories
- **Severe stress**: run-off rates +30% across all categories, inflow cap tightened to 50%

Report LCR under each scenario.

## Output Format

Produce a structured LCR compliance report with the following sections:

**1. LC
