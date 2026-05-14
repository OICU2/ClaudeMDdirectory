---
name: preferred-equity-return-modeling
description: >
  Models preferred equity return stacks including liquidation preferences, participation rights, and conversion scenarios across multiple investor classes. Use when someone asks about preferred stock waterfall analysis, wants to calculate investor returns at exit, needs to model liquidation preference payouts, is analyzing participating vs. non-participating preferred scenarios, or wants to understand how proceeds distribute across a cap table at different exit valuations.
category: finance
tags: [preferred-equity, cap-table, waterfall, liquidation-preference, venture-finance]
author: community
---

# Preferred Equity Return Modeling

This skill builds structured waterfall models for preferred equity distributions, calculating per-class and per-investor returns across liquidation preference, participation, and conversion scenarios at any given exit valuation.

## Waterfall Modeling Workflow

**1. Gather Inputs**
Collect for each investor class:
- Investment amount and share count
- Preference multiple (1x, 1.5x, 2x, etc.)
- Preference type: non-participating, fully participating, or capped participating (specify cap)
- Seniority / priority stack order (Series C senior to B senior to A, etc.)
- Conversion ratio (typically 1:1 unless anti-dilution adjustments apply)
- Any accrued dividends (cumulative vs. non-cumulative)

**2. Define Exit Scenarios**
Model at minimum three exit valuations:
- Below liquidation preference sum (distressed exit)
- Between preference sum and full conversion value (preference dominates)
- Above conversion breakeven (conversion may dominate)
Use a sensitivity table spanning 0.5x to 5x+ invested capital where relevant.

**3. Execute the Waterfall in Priority Order**

For each exit valuation, apply this sequence:

- **Step 1 — Senior liquidation preferences:** Pay out senior preferred classes first up to their preference amount (investment × multiple + accrued dividends). If proceeds are insufficient, distribute pro rata within the same seniority tier.
- **Step 2 — Junior liquidation preferences:** Repeat for each successive seniority tier.
- **Step 3 — Participation (if applicable):** For participating preferred classes, distribute remaining proceeds pro rata alongside common, as if converted, up to any participation cap. Non-participating preferred holders do not receive Step 3 proceeds unless they convert.
- **Step 4 — Common distribution:** Remaining proceeds go to common shareholders (including any preferred that converted or exhausted participation caps).

**4. Model Conversion Decision**
For each non-participating preferred class, calculate:
- Payout if they take liquidation preference
- Payout if they convert to common and share pro rata
- Flag the breakeven exit valuation where conversion becomes superior
- Apply the greater-of logic: holders will convert when conversion value > preference value

**5. Handle Anti-Dilution Adjustments (if triggered)**
- Broad-based weighted average: recalculate conversion price and resulting share count
- Full ratchet: reset conversion price to new round price, recalculate shares
- Update common equivalent share counts before running Step 3–4 distributions

**6. Compute Per-Investor Metrics**
For each investor class at each exit valuation:
- Total proceeds received ($)
- Return multiple (MOIC)
- IRR (if investment dates and exit date are provided)
- Effective ownership % of exit proceeds vs. nominal cap table %

## Output Format

Produce the following structured output:

**Cap Table Summary Table**
Columns: Investor Class | Shares | Investment | Preference Multiple | Preference Type | Seniority

**Waterfall Distribution Table** (one table per exit scenario, or combined sensitivity matrix)
Columns: Exit Valuation | [Class A Proceeds] | [Class B Proceeds] | [Common Proceeds] | Total Check

**Conversion Analysis Table**
Columns: Investor Class | Preference Payout | Conversion Payout | Breakeven Exit Valuation | Decision at Each Exit

**Per-Investor Return Summary**
Columns: Investor Class | Exit Valuation | Proceeds | MOIC | IRR (if dates provided)

**Key Findings (3–5 bullet points)**
- State which exit range each class dominates or underperforms
- Identify cliff points where common shareholders begin receiving meaningful proceeds
- Flag any classes whose participation caps are binding and at what valuation
- Note anti-dilution impact on
