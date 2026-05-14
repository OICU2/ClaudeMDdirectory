---
name: treasury-yield-curve-scenario-builder
description: >
  Models the impact of parallel, flattening, and steepening yield curve shifts on a fixed-income portfolio's duration and market value. Use when someone wants to stress-test a bond portfolio, asks about yield curve risk, wants to model interest rate scenarios, needs to analyze duration exposure, or is evaluating how rate changes affect portfolio value.
category: finance
tags: [fixed-income, yield-curve, duration, interest-rate-risk, portfolio-analysis]
author: community
---

# Treasury Yield Curve Scenario Builder

This skill constructs parallel, flattening, and steepening yield curve shift scenarios and calculates the resulting duration-weighted market value impact for each position in a fixed-income portfolio.

## Scenario Construction Workflow

### 1. Collect Portfolio Inputs
Request or parse the following for each position:
- Security identifier (CUSIP, ticker, or description)
- Par/face value
- Current market price (as % of par or dollar value)
- Modified duration (or Macaulay duration + yield to convert)
- Maturity or key-rate bucket (2Y, 5Y, 10Y, 30Y)
- Convexity (optional, for second-order adjustment)

### 2. Define Yield Curve Scenarios
Build three standard scenarios plus one custom scenario:

| Scenario | 2Y Shift | 5Y Shift | 10Y Shift | 30Y Shift |
|---|---|---|---|---|
| Parallel Up +100bps | +100 | +100 | +100 | +100 |
| Parallel Down -100bps | -100 | -100 | -100 | -100 |
| Bull Flattener | -50 | -25 | 0 | +25 |
| Bear Steepener | +25 | +50 | +75 | +100 |
| Custom | user-defined | user-defined | user-defined | user-defined |

Prompt the user for custom scenario values if they want one.

### 3. Calculate Price Impact Per Position
For each position under each scenario:

**First-order (duration) approximation:**
ΔP ≈ −ModifiedDuration × Δy × MarketValue

**Second-order adjustment (if convexity provided):**
ΔP ≈ (−ModifiedDuration × Δy + 0.5 × Convexity × Δy²) × MarketValue

Where Δy is the yield shift in decimal form (e.g., 100bps = 0.01), mapped to the position's maturity bucket.

For positions spanning multiple key-rate buckets, interpolate the shift linearly between the two nearest buckets.

### 4. Aggregate Portfolio Results
- Sum position-level ΔP values to get total portfolio dollar impact
- Calculate portfolio-level weighted average duration: Σ(Duration_i × MV_i) / Σ(MV_i)
- Calculate percentage change in total market value: ΔP_total / MV_total
- Flag positions with the largest absolute dollar loss under each scenario

### 5. Identify Key Risk Concentrations
- Identify which maturity bucket drives the most risk
- Note any curve-shape mismatches (e.g., barbell vs. bullet exposure)
- Highlight positions where convexity meaningfully offsets duration loss

## Output Format

Produce a structured report with the following sections:

**Portfolio Summary Table**
| Position | Par Value | Market Value | Mod. Duration | Key-Rate Bucket |
One row per position, totals row at bottom.

**Scenario Impact Table**
| Scenario | Portfolio ΔMV ($) | Portfolio ΔMV (%) | Worst Single Position |
One row per scenario, sorted by severity of loss.

**Position-Level Detail (for each scenario)**
Compact table: Position | Yield Shift Applied | ΔPrice ($) | ΔPrice (%)

**Risk Concentration Summary**
- 3–5 bullet points identifying dominant risk buckets, curve exposure type, and hedging observations.

**Assumptions & Limitations**
- List any inputs that were assumed or estimated
- Note that duration is a linear approximation and large shifts will understate losses for non-callable bonds and overstate them for callable/prepayable securities
