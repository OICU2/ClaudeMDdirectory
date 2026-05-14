---
name: interest-rate-swap-valuation
description: >
  Calculates the mark-to-market value of interest rate swap agreements by discounting fixed and floating leg cash flows against current yield curve data. Use when someone asks to value an interest rate swap, wants to know the fair value or MTM of a swap position, needs to calculate swap PV or present value, is working with fixed-for-floating agreements, or wants to determine if a swap is in-the-money or out-of-the-money.
category: finance
tags: [derivatives, interest-rates, fixed-income, discounting, yield-curve]
author: community
---

# Interest Rate Swap Valuation

This skill computes the mark-to-market value of interest rate swaps by modeling fixed and floating leg cash flows and discounting them using current zero or discount rates from the yield curve.

## Valuation Workflow

### 1. Collect Swap Terms
Gather the following inputs from the user or context:
- Notional principal amount
- Trade date and maturity date
- Fixed rate (coupon) and payment frequency (annual, semi-annual, quarterly)
- Floating rate index (e.g., SOFR, LIBOR, EURIBOR) and reset frequency
- Day count conventions (e.g., 30/360, Actual/360, Actual/365)
- Payer/receiver designation (who pays fixed)

### 2. Build the Cash Flow Schedule
- Generate all remaining fixed leg payment dates and amounts:
  - Fixed Payment = Notional × Fixed Rate × Day Count Fraction
- Generate all remaining floating leg payment dates and estimated amounts:
  - Use current forward rates implied by the yield curve for each reset period
  - Floating Payment = Notional × Forward Rate × Day Count Fraction
- Account for any already-reset periods using the known floating rate

### 3. Source or Construct the Discount Curve
- Use provided zero rates, OIS rates, or swap rates to build a discount factor curve
- If only par swap rates are given, bootstrap to derive zero rates
- Interpolate (linear on log-discount factors or cubic spline) for intermediate dates
- Discount Factor: DF(t) = exp(−r(t) × t) for continuous, or (1 + r/n)^(−n×t) for periodic

### 4. Discount Each Leg
- Fixed Leg PV = Σ [Fixed Payment(i) × DF(t_i)]
- Floating Leg PV = Σ [Floating Payment(i) × DF(t_i)]
- For the floating leg final period, include notional if using the bond method, or use replicating portfolio approach

### 5. Compute MTM Value
- From the perspective of the fixed-rate payer:
  - Swap Value = PV(Floating Leg) − PV(Fixed Leg)
- From the perspective of the fixed-rate receiver:
  - Swap Value = PV(Fixed Leg) − PV(Floating Leg)
- State clearly whether the position is an asset (+) or liability (−)

### 6. Sensitivity Metrics (if requested)
- **DV01 / PV01**: Change in value for a 1 basis point parallel shift in rates
- **Duration**: Weighted average time to cash flows
- **Breakeven Rate**: The fixed rate that sets current swap value to zero (par rate)

## Output Format

Produce a structured valuation summary with the following sections:

**Swap Summary**
- Notional, fixed rate, floating index, maturity, payer/receiver side

**Cash Flow Table**
- Columns: Payment Date | Fixed Payment | Floating Payment | Discount Factor | PV Fixed | PV Floating
- Show all remaining periods; use a table format

**Valuation Result**
- PV of Fixed Leg: $X,XXX,XXX.XX
- PV of Floating Leg: $X,XXX,XXX.XX
- **MTM Value (to [party]): $X,XXX,XXX.XX [Asset / Liability]**

**Sensitivity (if calculable)**
- DV01: $X,XXX per bp
- Par/Breakeven Rate: X.XX%

**Assumptions**
- List any assumed yield curve data, interpolation method, day count conventions, or missing inputs

Flag any missing inputs explicitly and state
