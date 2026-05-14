---
name: cost-of-capital-estimation
description: >
  Estimates a business's weighted average cost of capital (WACC) by calculating the blended return required across debt, equity, and hybrid financing instruments. Use when someone asks "what is our cost of capital," wants to evaluate whether a project clears the hurdle rate, needs to discount future cash flows, or is trying to determine the minimum acceptable return on investment. Also activates when someone mentions WACC, capital structure analysis, or blended financing costs.
category: finance
tags: [wacc, capital-structure, valuation, corporate-finance, discount-rate]
author: community
---

# Cost of Capital Estimation

This skill calculates a company's weighted average cost of capital (WACC) by gathering capital structure inputs, computing component costs, and producing a blended rate suitable for investment decisions and DCF analysis.

## WACC Estimation Workflow

### Step 1: Gather Capital Structure Inputs
Request or identify the following for each financing component:
- **Debt**: Total book or market value of interest-bearing debt, interest rate or yield to maturity, and marginal tax rate
- **Equity**: Market capitalization (preferred) or book equity, and equity type (common vs. preferred)
- **Hybrid instruments** (if applicable): Convertible notes, mezzanine debt, warrants — classify each as closer to debt or equity
- **Total capital**: Sum of all components (use market values where available; flag if using book values)

### Step 2: Calculate Cost of Each Component

**Cost of Debt (Kd)**
- Use the effective interest rate or yield to maturity on existing debt
- Apply the tax shield: `Kd (after-tax) = interest rate × (1 − marginal tax rate)`
- If multiple debt tranches exist, compute a weighted average across them

**Cost of Common Equity (Ke)**
Use one or more of these methods, noting which was applied:
1. **CAPM**: `Ke = Risk-Free Rate + Beta × Equity Risk Premium`
   - Risk-free rate: current 10-year government bond yield
   - Beta: use levered beta from comparable public companies if private; re-lever if needed using Hamada equation
   - Equity risk premium: 4–6% for developed markets; adjust for country risk if relevant
2. **Dividend Growth Model**: `Ke = (D1 / P0) + g` — use only if dividends are stable and predictable
3. **Build-up method**: for private companies — risk-free rate + industry risk premium + size premium + company-specific risk

**Cost of Preferred Equity (Kp)**
- `Kp = Annual Preferred Dividend / Net Proceeds per Share`
- No tax shield applies

**Hybrid Instruments**
- Assign a debt/equity split based on economic substance
- Apply appropriate cost to each portion

### Step 3: Calculate Capital Structure Weights
- `Weight of Debt (Wd) = Market Value of Debt / Total Capital`
- `Weight of Equity (We) = Market Capitalization / Total Capital`
- `Weight of Preferred (Wp) = Market Value of Preferred / Total Capital`
- Confirm weights sum to 100%; flag significant deviations from industry norms

### Step 4: Compute WACC
```
WACC = (Wd × Kd_after_tax) + (We × Ke) + (Wp × Kp) + (W_hybrid × K_hybrid)
```

### Step 5: Sanity Checks
- Compare result against industry benchmarks (e.g., tech: 8–12%, utilities: 5–8%, retail: 7–10%)
- Flag if WACC is below risk-free rate (likely input error) or above 20% (verify inputs)
- Note sensitivity to beta and equity risk premium — these drive the most uncertainty
- State whether the rate is nominal or real, and the currency basis

## Output Format

Produce a structured report with the following sections:

**1. Capital Structure Summary Table**
| Component | Market Value | Weight (%) |
|-----------|-------------|------------|
| Debt | $X | X% |
| Common Equity | $X | X% |
| Preferred Equity | $X | X% |
| **Total** | **$X** | **100%** |

**2. Component Cost Calculations**
- Show
