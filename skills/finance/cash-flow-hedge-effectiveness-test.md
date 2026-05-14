---
name: cash-flow-hedge-effectiveness-test
description: >
  Runs quantitative hedge effectiveness testing for a designated cash flow hedge relationship and documents results for audit purposes. Use when someone says "test our hedge effectiveness," asks about whether a hedge qualifies under ASC 815 or IFRS 9, wants to run a dollar-offset or regression analysis on a hedging relationship, needs to document hedge effectiveness for auditors, or is trying to determine if a cash flow hedge remains highly effective.
category: finance
tags: [hedging, derivatives, ASC815, IFRS9, risk-management]
author: community
---

# Cash Flow Hedge Effectiveness Testing

This skill runs quantitative hedge effectiveness tests for designated cash flow hedge relationships and produces audit-ready documentation following ASC 815 or IFRS 9 standards.

## Hedge Effectiveness Testing Workflow

### 1. Gather Hedge Relationship Inputs
Request the following from the user if not already provided:
- **Hedged item**: Description, notional amount, currency, reset/payment dates
- **Hedging instrument**: Derivative type (swap, cap, collar, forward), notional, strike/rate, maturity
- **Accounting standard**: ASC 815 (US GAAP) or IFRS 9
- **Test method**: Dollar-offset method or regression analysis
- **Historical data**: At least 8–10 periods of fair value or cash flow changes for both the hedged item and hedging instrument
- **Hedge designation date** and **testing period**

### 2. Select and Apply the Effectiveness Method

**Dollar-Offset Method (Cumulative or Periodic):**
- Calculate change in fair value or present value of cash flows for the hedging instrument (ΔHI) and hedged item (ΔHedged)
- Compute offset ratio: `Ratio = ΔHI / ΔHedged`
- Highly effective range: **80%–125%** (i.e., ratio between -0.80 and -1.25 for opposite-direction changes)
- Flag any period outside this range as a potential effectiveness failure

**Regression Analysis (if selected or if dollar-offset is inconclusive):**
- Run OLS regression: `ΔHedged Item = α + β(ΔHedging Instrument) + ε`
- Assess:
  - **R²**: Must be ≥ 0.80
  - **Slope (β)**: Must fall between -0.80 and -1.25
  - **F-statistic p-value**: Must be < 0.05
- Summarize regression statistics in tabular form

### 3. Identify Sources of Ineffectiveness
- Notional mismatches
- Timing differences between hedged item cash flows and derivative settlements
- Credit risk of counterparty
- Off-market terms at inception
- Basis differences (e.g., SOFR vs. Prime rate)

Quantify the ineffective portion to be recognized immediately in earnings (OCI adjustment excluded).

### 4. Apply Standard-Specific Rules

**ASC 815:**
- Confirm hedge meets "highly effective" threshold prospectively and retrospectively
- Document critical terms match (if using shortcut method, flag separately)
- Note whether the hypothetical derivative method is used for the hedged item benchmark

**IFRS 9:**
- Confirm hedge ratio is not intentionally skewed to reduce ineffectiveness
- Verify economic relationship exists between hedged item and instrument
- Confirm credit risk does not dominate the value change
- Note rebalancing requirements if hedge ratio needs adjustment

### 5. Document Audit Trail
Compile all inputs, calculations, assumptions, and conclusions into a structured memo.

## Output Format

Produce a structured **Hedge Effectiveness Test Report** with the following sections:

---

**HEDGE EFFECTIVENESS TEST REPORT**

**Hedge Relationship Summary**
| Field | Detail |
|---|---|
| Hedged Item | |
| Hedging Instrument | |
| Designation Date | |
| Testing Period | |
| Accounting Standard | |
| Test Method | |

**Quantitative Test Results**

*Dollar-Offset (if applicable):*
| Period | ΔHedging Instrument | ΔHedged Item | Offset Ratio | Pass/Fail |
|---|---|---|---|---|

*Regression Results (if applicable):*
