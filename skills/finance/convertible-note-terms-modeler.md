---
name: convertible-note-terms-modeler
description: >
  Models the economic impact of convertible note terms on founder dilution at conversion. Use when someone asks about convertible note terms, wants to understand how a discount rate or valuation cap affects their equity, or needs to model dilution from SAFE or convertible note financing rounds.
category: finance
tags: [convertible-notes, dilution, cap-table, startup-finance, SAFE]
author: community
---

# Convertible Note Terms Modeler

This skill calculates and compares the founder dilution outcomes of convertible note terms — including discount rates, valuation caps, and interest accrual — at the moment of conversion into equity.

## Modeling Workflow

1. **Collect inputs** — Gather all required note terms before calculating:
   - Principal amount invested
   - Interest rate (annual) and accrual period (months)
   - Discount rate (e.g., 20%)
   - Valuation cap (e.g., $8M)
   - Conversion trigger (e.g., Series A priced round)
   - Pre-money valuation at conversion
   - New money raised in the priced round
   - Existing shares outstanding (pre-money, fully diluted)

2. **Calculate accrued principal** — Compute total conversion amount:
   - Accrued interest = Principal × Annual Rate × (Months / 12)
   - Total conversion amount = Principal + Accrued Interest

3. **Determine effective conversion price** — Apply whichever mechanism is more favorable to the investor:
   - **Discount method:** Priced round price per share × (1 − discount rate)
   - **Cap method:** Valuation cap ÷ Pre-money fully diluted shares
   - **Effective price** = lower of the two (most investor-favorable)

4. **Calculate shares issued to note holder:**
   - Shares from conversion = Total conversion amount ÷ Effective conversion price

5. **Build post-conversion cap table:**
   - Total post-money shares = Existing shares + New investor shares + Note conversion shares + Option pool (if applicable)
   - Founder ownership % = Founder shares ÷ Total post-money shares

6. **Run scenario comparison** — Model at least three scenarios side by side:
   - No note (straight equity baseline)
   - Note converts via discount only
   - Note converts via cap only
   - Combined worst-case (most dilutive)

7. **Flag key risk thresholds:**
   - Warn if effective discount exceeds 35% (aggressive terms)
   - Warn if cap implies pre-money valuation below current traction benchmarks
   - Note if interest accrual materially changes conversion shares (>5% difference)

## Output Format

Produce a structured report with these sections:

**Inputs Summary**
— Bulleted list of all inputs used, with units

**Conversion Price Calculation**
— Show discount method price, cap method price, and which applies with a one-line explanation

**Shares & Dilution Table**
```
Stakeholder        | Shares  | Pre-Conv % | Post-Conv %
Founders           | X       | X%         | X%
Existing Investors | X       | X%         | X%
Note Holder        | X       | —          | X%
New Investors      | X       | —          | X%
Option Pool        | X       | X%         | X%
TOTAL              | X       | 100%       | 100%
```

**Scenario Comparison**
— Side-by-side table showing founder % under each scenario (baseline, discount, cap, worst-case)

**Key Findings**
— 3–5 plain-English bullet points interpreting the numbers: which term drives most dilution, whether the cap or discount is binding, and whether interest accrual is material

**Recommendations**
— 2–3 specific, actionable negotiating points for the founder based on the model output (e.g., "Raising the cap from $8M to $10M recovers X% founder ownership")
