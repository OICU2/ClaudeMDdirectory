---
name: working-capital-facility-sizing-model
description: >
  Models optimal revolving credit facility size based on seasonal cash conversion cycles and peak working capital requirements. Use when someone asks how large their credit line should be, wants to size a revolving facility, needs to understand peak borrowing needs, is analyzing seasonal working capital gaps, or wants to model cash conversion cycle impact on credit requirements.
category: finance
tags: [working-capital, credit-facility, cash-conversion-cycle, revolving-credit, liquidity]
author: community
---

# Working Capital Facility Sizing Model

This skill calculates the optimal revolving credit facility size by modeling seasonal cash conversion cycles, peak working capital requirements, and appropriate credit cushion buffers.

## Core Workflow

### 1. Collect Inputs
Gather the following from the user:
- **Revenue**: Annual revenue and monthly/quarterly breakdown (to identify seasonality)
- **Cash Conversion Cycle components**:
  - Days Sales Outstanding (DSO)
  - Days Inventory Outstanding (DIO)
  - Days Payables Outstanding (DPO)
  - CCC = DSO + DIO − DPO
- **Cost of Goods Sold (COGS)** and **operating expense** run rate
- **Seasonal patterns**: Which months/quarters represent peak working capital demand
- **Existing cash reserves** available to fund operations
- **Growth rate** assumption for the planning period

### 2. Calculate Baseline Working Capital Need
- Compute daily revenue: `Annual Revenue / 365`
- Compute daily COGS: `Annual COGS / 365`
- Baseline working capital = `(DSO × Daily Revenue) + (DIO × Daily COGS) − (DPO × Daily COGS)`

### 3. Model Seasonal Peak
- Apply monthly revenue and COGS distribution to find the peak month(s)
- Recalculate working capital at peak using peak-month daily figures
- Peak working capital = `(DSO × Peak Daily Revenue) + (DIO × Peak Daily COGS) − (DPO × Peak Daily COGS)`
- Identify the trough (minimum working capital month) for reference

### 4. Determine Net Facility Requirement
- Net peak need = Peak Working Capital − Available Cash Reserves
- Apply a **growth buffer**: multiply net peak need by `(1 + growth rate)`
- Apply a **liquidity cushion** (typically 15–25% of net peak need) to absorb forecast variance
- **Recommended facility size** = `Net peak need × (1 + growth rate) × (1 + cushion %)`

### 5. Stress Test
- Run a downside scenario: extend DSO by 15 days, compress DPO by 10 days, assume 10–15% revenue shortfall
- Recalculate facility need under stress
- Report stressed facility size alongside base case

### 6. Benchmark and Sanity Check
- Express facility as a percentage of annual revenue (typical range: 10–20% for most industries)
- Express facility as a multiple of monthly COGS (typical range: 1–3×)
- Flag if the result falls outside industry norms and explain why

## Output Format

Produce a structured report with the following sections:

**1. Input Summary Table**
| Metric | Value |
|---|---|
| Annual Revenue | $X |
| DSO | X days |
| DIO | X days |
| DPO | X days |
| CCC | X days |
| Peak Month(s) | Month(s) |
| Available Cash | $X |
| Growth Assumption | X% |

**2. Working Capital Calculations**
- Baseline working capital: $X
- Peak working capital: $X (in [month], [X]% above baseline)
- Trough working capital: $X (in [month])
- Seasonal swing: $X

**3. Facility Sizing**
- Net peak need (after cash): $X
- Growth-adjusted need: $X
- Recommended facility size (with cushion): **$X**
- Cushion percentage used: X%

**4. Stress Test Results**
- Stressed DSO / DPO assumptions
- Stressed facility requirement: $X
- Recommendation: size to base or stress case (with rationale)

**5. Benchmarks**
- Facility as % of revenue: X% (
