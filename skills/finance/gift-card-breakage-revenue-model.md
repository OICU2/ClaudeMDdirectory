---
name: gift-card-breakage-revenue-model
description: >
  Estimates unredeemed gift card revenue to recognize as breakage income using historical redemption patterns and applicable accounting standards (ASC 606, IFRS 15). Use when someone asks about gift card breakage revenue, wants to calculate unredeemed gift card income, needs to estimate breakage rates for financial reporting, is setting up a breakage recognition policy, or wants to model gift card liability rundown over time.
category: finance
tags: [revenue-recognition, gift-cards, breakage, ASC606, IFRS15, retail-finance]
author: community
---

# Gift Card Breakage Revenue Model

This skill builds a structured breakage income model for unredeemed gift cards, applying proportional or remote-likelihood recognition methods in line with ASC 606 / IFRS 15, and outputs a period-by-period revenue schedule with supporting assumptions.

## Breakage Modeling Workflow

### 1. Collect Inputs
Gather the following before modeling:
- **Issuance data**: Gift card sales by cohort (month/quarter issued, face value, volume)
- **Redemption history**: Cumulative redemptions per cohort over time (at least 24–36 months preferred)
- **Escheatment laws**: Jurisdiction-specific dormancy periods and remittance rules
- **Accounting standard**: ASC 606 (US GAAP) or IFRS 15; confirm proportional vs. remote-likelihood approach
- **Current liability balance**: Deferred revenue balance on the books

### 2. Calculate Historical Breakage Rate
- For each cohort, compute: `Breakage Rate = (Face Value Issued − Total Redeemed to Date) / Face Value Issued`
- Plot cumulative redemption curves by cohort age (months since issuance)
- Identify the redemption plateau — the point where incremental redemptions drop below a threshold (e.g., <1% of remaining balance per quarter)
- Derive an **expected breakage percentage** (e.g., weighted average across 3–5 cohort years)
- Flag if breakage rates differ materially by card type, channel, or denomination

### 3. Select Recognition Method
- **Proportional method (ASC 606 default)**: Recognize breakage in proportion to actual redemptions. For every dollar redeemed, recognize `breakage_rate / (1 − breakage_rate)` dollars of breakage income simultaneously.
- **Remote-likelihood method**: Recognize remaining unredeemed balance only when redemption becomes remote (typically after escheatment period passes and no legal obligation remains).
- Document the chosen method and rationale; note if a change from prior year triggers a cumulative catch-up.

### 4. Build the Period Model
For each reporting period:
1. **Opening liability**: Deferred revenue balance brought forward
2. **New issuances**: Gift cards sold in period (increases liability)
3. **Redemptions**: Cards redeemed (reduces liability, recognized as product/service revenue)
4. **Breakage income**: Calculated per chosen method (reduces liability, recognized as other revenue)
5. **Escheatment remittances**: Amounts remitted to state (reduces liability, not revenue)
6. **Closing liability**: Opening + Issuances − Redemptions − Breakage − Escheatment

Formula (proportional):
```
Breakage_t = Redemptions_t × (Expected_Breakage_Rate / (1 − Expected_Breakage_Rate))
```

### 5. Sensitivity & Scenario Analysis
- Run three scenarios: **Base** (historical average rate), **Conservative** (−2 pp), **Aggressive** (+2 pp)
- Show impact on revenue and liability balance for each scenario across the forecast horizon
- Flag if estimated breakage rate exceeds 10% — auditors and regulators scrutinize high rates

### 6. Disclosure & Compliance Checks
- Confirm breakage rate assumption is disclosed in revenue recognition footnote
- Verify escheatment compliance: unclaimed property laws vary by state; do not recognize revenue on amounts that must be remitted
- Note any material changes in redemption patterns (e.g., post-COVID shifts) that require assumption refresh
- Assess whether a liability adequacy test is needed if closing balance seems understated

## Output Format

Produce the following sections in order:

**1. Assumption Summary Table**
|
