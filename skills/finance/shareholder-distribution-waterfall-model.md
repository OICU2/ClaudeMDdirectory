---
name: shareholder-distribution-waterfall-model
description: >
  Models how exit proceeds flow through equity classes based on liquidation preferences, participation rights, and common stock payouts. Use when someone asks about "how much each investor gets in an exit," wants to "model a cap table waterfall," is analyzing "liquidation preferences," needs to "calculate payout by share class," or is evaluating "participating vs non-participating preferred" outcomes.
category: finance
tags: [cap-table, liquidation-preference, exit-analysis, venture-finance, equity-distribution]
author: community
---

# Shareholder Distribution Waterfall Model

This skill models the sequential distribution of exit proceeds across equity classes, applying liquidation preferences, participation rights, and conversion logic to determine per-shareholder payouts across multiple exit scenarios.

## Waterfall Modeling Workflow

### 1. Gather Inputs
Collect the following before modeling:
- **Exit proceeds**: Total liquidity event amount (acquisition price or IPO proceeds available to equity)
- **Share classes**: All preferred series (Seed, Series A, B, etc.) and common stock
- **For each preferred class**:
  - Shares outstanding
  - Original issue price (OIP)
  - Liquidation preference multiple (1x, 1.5x, 2x)
  - Participation rights: non-participating, fully participating, or capped participating (specify cap)
  - Seniority/priority ranking (most senior to junior)
- **Common stock**: Shares outstanding (including options/warrants if fully diluted)
- **Option pool**: Size and whether included in fully diluted share count

### 2. Calculate Liquidation Stack
Apply preferences in seniority order:
1. **Senior preferred** gets min(liquidation preference amount, remaining proceeds)
2. **Next preferred series** gets min(its preference, remaining proceeds)
3. Continue down seniority stack until proceeds exhausted or all preferences satisfied
4. Track remaining proceeds after each layer

Liquidation preference = OIP × preference multiple × shares outstanding

### 3. Apply Participation Rights
After preferences are paid, distribute remaining proceeds based on participation type:

- **Non-participating preferred**: Holders choose the higher of (a) their liquidation preference already received OR (b) converting to common and sharing pro-rata. Model both and apply whichever yields more. Remove from residual pool if they keep preference.
- **Fully participating preferred**: Holders keep their liquidation preference AND participate pro-rata in residual proceeds alongside common, as-converted.
- **Capped participating preferred**: Participate in residual proceeds until total received equals cap (e.g., 3x OIP), then stop; excess goes to common.

### 4. Distribute Residual to Common
- Remaining proceeds after all preferred payouts split pro-rata among common shareholders (and participating preferred on as-converted basis)
- Calculate per-share value for common

### 5. Run Multiple Exit Scenarios
Model at minimum three exit values:
- **Low exit**: Below total preference stack (preferences not fully covered)
- **Mid exit**: Preferences covered, limited upside
- **High exit**: Significant residual after preferences (conversion attractive)

### 6. Calculate Per-Investor Returns
For each shareholder/class:
- Total proceeds received
- Return multiple (proceeds ÷ invested capital)
- IRR if investment dates are provided
- Ownership percentage vs. proceeds percentage (to highlight preference impact)

### 7. Identify Conversion Breakeven Points
Calculate the exit value at which each preferred class would prefer to convert to common rather than take their liquidation preference. This is the "crossover point."

Crossover = (preference amount × total fully diluted shares) ÷ preferred shares on as-converted basis

## Output Format

Produce the following structured output:

**1. Input Summary Table**
| Class | Shares | OIP | Preference | Multiple | Participation | Seniority |
List all classes in priority order.

**2. Waterfall Distribution Table** (one column per exit scenario)
| Class | $Xm Exit | $Ym Exit | $Zm Exit |
| Seed Preferred | $X | $X | $X |
| Series A Preferred | $X | $X | $X |
| Common Stock | $X | $X | $X |
| **Total** | **$Xm** | **$Ym** | **$Zm** |

**3.
