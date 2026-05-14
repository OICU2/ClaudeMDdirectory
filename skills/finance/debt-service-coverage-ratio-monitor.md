---
name: debt-service-coverage-ratio-monitor
description: >
  Monitors Debt Service Coverage Ratio against loan covenant thresholds on a rolling basis and flags periods where projected cash flow risks a breach. Use when someone says "check our DSCR covenant compliance," asks about "debt service coverage risk," wants to "monitor loan covenants against cash flow projections," needs to "flag DSCR breach risk," or is reviewing "rolling coverage ratio trends."
category: finance
tags: [dscr, loan-covenants, cash-flow, debt-service, covenant-compliance]
author: community
---

# Debt Service Coverage Ratio Monitor

This skill calculates and tracks DSCR on a rolling basis against defined loan covenant thresholds, identifies periods at risk of breach, and surfaces actionable warnings before a violation occurs.

## DSCR Monitoring Workflow

1. **Collect Inputs**
   - Net Operating Income (NOI) or EBITDA by period (monthly, quarterly, or annual)
   - Total debt service per period: principal repayment + interest obligations
   - Covenant threshold(s): minimum DSCR required by each loan agreement (e.g., 1.25x)
   - Lookback window for rolling calculation (e.g., trailing twelve months)
   - Projection horizon (e.g., next 4 quarters of forecasted cash flow)

2. **Calculate DSCR Per Period**
   - Formula: `DSCR = Net Operating Income / Total Debt Service`
   - Apply the rolling window: sum NOI and debt service over the trailing period, not point-in-time
   - Flag any period where DSCR < covenant threshold as a **breach**
   - Flag any period where DSCR is between threshold and threshold + 0.10x as a **warning zone**

3. **Run Projection Analysis**
   - Apply forecasted NOI and scheduled debt service to future periods
   - Identify the first future period where DSCR is projected to breach or enter the warning zone
   - Calculate the NOI shortfall required to trigger a breach: `Shortfall = (Covenant Threshold × Debt Service) − Projected NOI`
   - Calculate the percentage decline in NOI that would cause a breach

4. **Identify Contributing Factors**
   - Flag periods with elevated debt service (balloon payments, rate resets, new draws)
   - Flag periods with compressed NOI (seasonality, known revenue gaps, cost spikes)
   - Cross-reference multiple covenant tests if different lenders have different thresholds

5. **Generate Recommendations**
   - If breach is imminent (≤1 period away): recommend lender notification, covenant waiver discussion, or cash infusion options
   - If in warning zone: recommend cash flow acceleration, expense deferral, or debt restructuring review
   - If compliant but trending down: recommend monitoring frequency increase and sensitivity analysis

## Output Format

Produce a structured DSCR Monitor Report with the following sections:

**1. Covenant Summary Table**
| Period | NOI | Total Debt Service | DSCR | Threshold | Status |
|--------|-----|--------------------|------|-----------|--------|
List each period chronologically. Status = ✅ Compliant / ⚠️ Warning / 🚨 Breach.

**2. Rolling DSCR Trend**
Narrative description of the trailing trend: direction, velocity of change, and whether the ratio is improving or deteriorating.

**3. Breach Risk Analysis**
- Earliest projected breach period (if any)
- NOI shortfall amount and percentage decline that would trigger breach
- Probability qualitative assessment: Low / Medium / High based on trend

**4. Stress Scenarios**
Two to three scenarios showing DSCR under different NOI assumptions:
- Base case
- Downside case (e.g., −10% NOI)
- Severe downside (e.g., −20% NOI)

**5. Recommended Actions**
Bullet list of 2–4 specific, time-bound actions ranked by urgency.

Report length: concise but complete. Use tables for period data, plain prose for analysis, and bullets for recommendations. Do not pad with generic financial disclaimers.
