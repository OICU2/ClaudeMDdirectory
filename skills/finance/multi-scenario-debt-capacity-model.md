---
name: multi-scenario-debt-capacity-model
description: >
  Builds a structured debt capacity model across base, downside, and stress scenarios using projected EBITDA and coverage ratio constraints. Use when someone asks how much debt a company can support, wants to model maximum leverage under different economic conditions, needs to stress-test a capital structure, is sizing a credit facility or LBO debt stack, or wants to understand borrowing capacity given coverage ratio covenants.
category: finance
tags: [debt-capacity, leveraged-finance, credit-analysis, scenario-modeling, capital-structure]
author: community
---

# Multi-Scenario Debt Capacity Model

This skill builds a three-scenario debt capacity model that calculates maximum supportable debt based on projected EBITDA and user-defined or market-standard coverage ratio floors, producing a structured output suitable for credit memos, lender presentations, or internal capital planning.

## Modeling Workflow

### Step 1: Gather Inputs
Collect or ask for the following:
- **EBITDA projections** for Years 1–5 (or minimum Year 1 and a growth rate)
- **Coverage ratio constraints**: Minimum Interest Coverage Ratio (ICR) and/or Debt/EBITDA ceiling per scenario
- **Interest rate assumption**: all-in cost of debt (or ask for spread + base rate)
- **Scenario definitions** (use defaults below if not provided):
  - **Base**: Management projections as stated
  - **Downside**: EBITDA haircut of 15–20% vs. base
  - **Stress**: EBITDA haircut of 30–40% vs. base

### Step 2: Define Scenario Parameters
For each scenario, establish:
| Parameter | Base | Downside | Stress |
|---|---|---|---|
| EBITDA haircut | 0% | 15–20% | 30–40% |
| Min ICR floor | 2.5x | 2.0x | 1.5x |
| Max Debt/EBITDA | 5.5x | 4.5x | 3.5x |

Adjust these if the user provides covenant terms or sector-specific norms (e.g., infrastructure may allow higher leverage; retail may require lower).

### Step 3: Calculate Debt Capacity per Scenario
For each scenario, apply **both** constraints and take the **lower** result:

**Method A — ICR Constraint:**
- Max Annual Interest = EBITDA ÷ Min ICR
- Max Debt (ICR) = Max Annual Interest ÷ Interest Rate

**Method B — Leverage Constraint:**
- Max Debt (Leverage) = EBITDA × Max Debt/EBITDA Multiple

**Binding Constraint:** `Min(Max Debt ICR, Max Debt Leverage)`

Repeat for each year if multi-year EBITDA is provided; flag the year where debt capacity is lowest (the "trough year").

### Step 4: Sensitivity Analysis
Run a sensitivity table varying:
- Interest rate: ±100bps in 50bps increments
- EBITDA haircut: ±5% around each scenario assumption
- Coverage floor: ±0.25x around each scenario floor

### Step 5: Identify Headroom and Flags
- **Headroom**: If existing or proposed debt is provided, calculate buffer = Max Debt − Proposed Debt
- **Covenant breach risk**: Flag any scenario/year where headroom falls below 10%
- **Trough year**: Identify lowest debt capacity year across all scenarios

## Output Format

Produce the following sections in order:

---

**DEBT CAPACITY SUMMARY**

| Scenario | EBITDA | Min ICR | Max Leverage | Max Debt (ICR) | Max Debt (Leverage) | **Binding Capacity** |
|---|---|---|---|---|---|---|
| Base | $Xm | 2.5x | 5.5x | $Xm | $Xm | **$Xm** |
| Downside | $Xm | 2.0x | 4.5x | $Xm | $Xm | **$Xm** |
| Stress | $Xm | 1.5x | 3.5x | $Xm | $Xm | **$
