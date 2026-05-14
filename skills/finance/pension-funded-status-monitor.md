---
name: pension-funded-status-monitor
description: >
  Monitors defined benefit pension plan funded status by comparing plan assets to projected benefit obligations (PBO) and flagging contribution requirements. Use when someone asks about pension funding levels, wants to check if a pension plan is underfunded or overfunded, needs to calculate funded ratios, is concerned about minimum required contributions, or wants to assess pension liability exposure.
category: finance
tags: [pension, defined-benefit, funded-status, PBO, actuarial]
author: community
---

# Pension Funded Status Monitor

This skill evaluates defined benefit pension plan health by calculating funded ratios, identifying shortfalls or surpluses, and flagging regulatory contribution triggers based on plan assets versus projected benefit obligations.

## Analysis Workflow

1. **Collect Plan Data**
   - Plan assets (fair market value at measurement date)
   - Projected Benefit Obligation (PBO) or Accumulated Benefit Obligation (ABO)
   - Actuarial assumptions: discount rate, expected return on assets, mortality table, salary growth rate
   - Prior year funded status for trend comparison
   - Jurisdiction (US ERISA, UK TPR, EU IORP, etc.) to apply correct regulatory thresholds

2. **Calculate Funded Ratio**
   - Funded Ratio = Plan Assets ÷ PBO × 100
   - Funded Status (Dollar) = Plan Assets − PBO
   - Flag classification:
     - ≥ 100%: Fully funded or overfunded
     - 80–99%: Moderately underfunded — monitor closely
     - 60–79%: Significantly underfunded — contribution acceleration likely required
     - < 60%: Critically underfunded — immediate regulatory action probable

3. **Assess Contribution Requirements**
   - For US plans: Apply ERISA minimum funding standards; flag if funded ratio triggers at-risk status (< 80%) or PBGC variable-rate premium exposure
   - Calculate minimum required contribution (MRC) estimate: shortfall amortized over 7-year period
   - Identify whether quarterly contributions are required (plans with prior-year funding shortfalls)
   - Note credit balance availability to offset contributions

4. **Sensitivity Analysis**
   - Recalculate PBO with discount rate ±50 bps to show liability sensitivity
   - Recalculate funded ratio with asset return ±10% to show market sensitivity
   - Flag if a 1% discount rate decrease would push plan below 80% threshold

5. **Trend and Risk Flags**
   - Compare current funded ratio to prior 3 years if data available
   - Flag deteriorating trend (declining ratio year-over-year)
   - Identify concentration risk if asset allocation data is provided
   - Note upcoming benefit payment obligations if cash flow data is available

## Output Format

Produce a structured report with the following sections:

**PENSION FUNDED STATUS REPORT**
- Measurement Date:
- Plan Assets: $[X]
- Projected Benefit Obligation: $[X]
- Funded Ratio: [X]%
- Dollar Surplus / (Deficit): $[X]
- Status Classification: [Fully Funded / Moderately Underfunded / Significantly Underfunded / Critically Underfunded]

**REGULATORY FLAGS**
- List each triggered threshold with the specific rule or regulation
- Estimated minimum required contribution (annual)
- PBGC or equivalent premium exposure (if applicable)

**SENSITIVITY SUMMARY**
- 3-column table: Scenario | Adjusted PBO or Assets | Resulting Funded Ratio

**RECOMMENDED ACTIONS**
- Numbered list of 3–5 specific actions ranked by urgency (e.g., increase contributions, restructure asset allocation, review actuarial assumptions, consult plan actuary)

**DATA GAPS**
- List any missing inputs that would improve accuracy, and state assumptions used in their place

Length: concise but complete — no section should be omitted even if an estimate is used. Flag all estimates explicitly with "(estimated)" notation.
