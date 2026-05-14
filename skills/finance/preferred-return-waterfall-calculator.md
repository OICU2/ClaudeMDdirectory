---
name: preferred-return-waterfall-calculator
description: >
  Calculates LP and GP distribution splits across preferred return thresholds, catch-up provisions, and carried interest tiers in private equity waterfall structures. Use when someone asks about waterfall distributions, wants to model preferred return hurdles, needs to calculate carried interest splits, or is trying to determine how profits flow between LPs and GPs at each tier of an investment structure.
category: finance
tags: [waterfall, preferred-return, carried-interest, private-equity, lp-gp-distributions]
author: community
---

# Preferred Return Waterfall Calculator

Models multi-tier investment waterfall structures to compute exact LP and GP distribution amounts at each hurdle rate, catch-up provision, and carried interest tier.

## Waterfall Calculation Workflow

### 1. Collect Required Inputs
- Total distributable proceeds (capital gains + income)
- Total LP capital contributed
- Total GP capital contributed (if any)
- Preferred return rate (IRR hurdle, e.g. 8%)
- Investment hold period (to calculate accrued preferred return)
- Catch-up provision: percentage and whether it is 100% or partial (e.g. 80/20)
- Carried interest rate (e.g. 20%)
- Waterfall type: American (deal-by-deal) or European (whole-fund)

### 2. Calculate Accrued Preferred Return
- Compute accrued preferred return on LP capital: `LP Capital × ((1 + hurdle_rate)^years - 1)`
- If simple interest: `LP Capital × hurdle_rate × years`
- Note whether preferred return compounds annually or accrues simply

### 3. Tier 1 — Return of Capital
- Distribute LP capital first (100% to LPs)
- Distribute GP capital if applicable (100% to GP)
- Remaining proceeds after this tier = `Total Proceeds − LP Capital − GP Capital`

### 4. Tier 2 — Preferred Return
- Distribute accrued preferred return amount entirely to LPs
- If remaining proceeds < accrued preferred return, LPs receive all remaining proceeds and GP receives nothing
- Remaining proceeds after this tier = `Tier 1 remainder − accrued preferred return`

### 5. Tier 3 — GP Catch-Up
- Determine catch-up target: GP should reach its carried interest percentage of total profits paid so far
- Formula: `Catch-up amount = (carried_interest_rate / (1 − carried_interest_rate)) × preferred_return_paid`
- Example (20% carry): GP catch-up = `(0.20 / 0.80) × preferred_return_paid`
- If catch-up is partial (e.g. 50/50 during catch-up), split accordingly until GP is caught up
- If remaining proceeds < full catch-up amount, GP receives all remaining proceeds

### 6. Tier 4 — Carried Interest Split
- All remaining proceeds split: `(1 − carried_interest_rate)` to LPs, `carried_interest_rate` to GP
- Example: 80% LP / 20% GP on all remaining profits

### 7. Aggregate and Validate
- Sum each party's receipts across all tiers
- Verify total distributions equal total distributable proceeds
- Compute effective LP IRR and GP multiple on invested capital (MOIC)

## Output Format

Produce a structured waterfall table followed by a summary block:

**Inputs Summary**
- List all inputs used (capital, hurdle rate, hold period, catch-up terms, carry %)

**Waterfall Distribution Table**

| Tier | Description | Total Amount | LP Receives | GP Receives | LP % | GP % |
|------|-------------|--------------|-------------|-------------|------|------|
| 1 | Return of Capital | $X | $X | $X | X% | X% |
| 2 | Preferred Return (X% hurdle) | $X | $X | $0 | 100% | 0% |
| 3 | GP Catch-Up | $X | $X | $X | X% | X% |
| 4 | Carried Interest Split | $X | $X | $X | X% | X% |
| **Total** | | **$X** | **$X** | **$
