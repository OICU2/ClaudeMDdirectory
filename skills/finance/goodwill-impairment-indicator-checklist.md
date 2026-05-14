---
name: goodwill-impairment-indicator-checklist
description: >
  Generates a structured checklist of quantitative and qualitative indicators to assess whether goodwill impairment testing is required under ASC 350 or IAS 36. Use when someone asks about goodwill impairment triggers, wants to evaluate whether an impairment test is needed, is preparing for an annual impairment review, or needs to document indicators for an audit. Also activates when someone says "check if we need to test goodwill" or "assess impairment indicators."
category: finance
tags: [goodwill, impairment, ASC350, IAS36, financial-reporting]
author: community
---

# Goodwill Impairment Indicator Checklist

This skill generates a structured, standard-referenced checklist of quantitative and qualitative impairment indicators to help finance teams determine whether interim or annual goodwill impairment testing is required.

## Workflow

1. **Identify the applicable standard**: Ask or infer whether the entity reports under US GAAP (ASC 350-20) or IFRS (IAS 36). If unclear, generate checklists for both and label them separately.

2. **Gather context** (ask if not provided):
   - Reporting period and date of assessment
   - Industry or reporting unit description
   - Whether this is an interim or annual assessment
   - Any known events (e.g., restructuring, market downturn, management change)

3. **Populate the qualitative indicators checklist** across these categories:
   - **Macroeconomic conditions**: Deterioration in general economic conditions, interest rate increases, credit market tightening
   - **Industry and market conditions**: Decline in market demand, increased competition, regulatory changes, commodity price shifts
   - **Cost factors**: Raw material cost increases, labor cost pressures, margin compression trends
   - **Financial performance**: Reporting unit underperformance vs. prior periods or budget, negative cash flows, declining revenue
   - **Entity-specific events**: Restructuring, loss of key personnel, litigation, changes in business strategy, loss of a major customer or contract
   - **Carrying amount vs. fair value signals**: Carrying amount of net assets exceeds market capitalization; recent impairment in related assets

4. **Populate the quantitative indicators checklist**:
   - Market cap below book value of equity (public entities)
   - Sustained decline (≥10–15%) in projected cash flows vs. prior year estimate
   - Significant negative variance to budget (typically >10%) for two or more consecutive periods
   - Increase in discount rate ≥100bps since last test
   - Revenue decline ≥10% year-over-year in the reporting unit
   - EBITDA margin decline of ≥200bps vs. prior period or acquisition model

5. **Assign a risk flag to each indicator**:
   - 🔴 **Present** — indicator is confirmed
   - 🟡 **Possible** — indicator may apply; further review needed
   - ⚪ **Not Present** — indicator does not apply
   - ❓ **Unknown** — insufficient data to assess

6. **Summarize the assessment**:
   - Count of red and yellow flags
   - Recommendation: Proceed to Step 1 qualitative assessment only, perform quantitative test, or no test required at this time
   - Note any disclosure considerations under ASC 350-20-50 or IAS 36.134

## Output Format

Produce a markdown document with the following structure:

```
# Goodwill Impairment Indicator Assessment
**Entity / Reporting Unit:** [name or placeholder]
**Assessment Date:** [date]
**Applicable Standard:** [ASC 350 / IAS 36 / Both]
**Assessment Type:** [Interim / Annual]

---

## Qualitative Indicators

| # | Indicator | Category | Status | Notes |
|---|-----------|----------|--------|-------|
| 1 | [indicator text] | [category] | 🔴 / 🟡 / ⚪ / ❓ | [brief note] |
...

## Quantitative Indicators

| # | Indicator | Threshold | Observed Value | Status | Notes |
|---|-----------|-----------|----------------|--------|-------|
| 1 | [indicator text] | [threshold] | [value if known
