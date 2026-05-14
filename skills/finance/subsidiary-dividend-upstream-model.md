---
name: subsidiary-dividend-upstream-model
description: >
  Models the optimal timing and amount of dividends flowing from subsidiaries to parent entities, accounting for withholding taxes, local minimum cash requirements, and intercompany cash pooling constraints. Use when someone asks about upstreaming cash from subsidiaries, wants to optimize dividend repatriation from foreign entities, or needs to model intercompany dividend flows with tax efficiency. Also activates when someone says "how much can we pull up from subsidiaries" or wants to analyze subsidiary cash repatriation strategy.
category: finance
tags: [dividends, treasury, intercompany, withholding-tax, cash-repatriation]
author: community
---

# Subsidiary Dividend Upstream Model

This skill builds a structured dividend optimization model showing how much cash each subsidiary can upstream to the parent, when to do it, and at what tax cost — used whenever treasury or finance teams need to plan intercompany cash repatriation.

## Modeling Workflow

1. **Collect subsidiary inputs for each entity:**
   - Current cash balance and projected operating cash flow (next 12 months)
   - Minimum local cash reserve (operating expenses × coverage ratio, typically 2–3 months)
   - Retained earnings available for distribution (legal entity cap table)
   - Applicable withholding tax (WHT) rate on dividends (per tax treaty or domestic rate)
   - Any regulatory restrictions on dividend remittance (central bank approvals, thin-cap rules)

2. **Calculate distributable surplus per subsidiary:**
   - `Distributable Cash = Current Cash − Minimum Local Reserve − Committed CapEx − Debt Service`
   - `Legal Cap = Retained Earnings available per local GAAP`
   - `Upstreamable Amount = MIN(Distributable Cash, Legal Cap)`
   - Flag entities where legal cap is the binding constraint vs. cash constraint

3. **Apply withholding tax and net proceeds:**
   - `Net Dividend to Parent = Upstreamable Amount × (1 − WHT Rate)`
   - Layer in any WHT credits available at the parent level
   - Identify treaty-reduced rates vs. statutory rates and flag planning opportunities

4. **Sequence dividends by timing:**
   - Group into: immediate (current quarter), near-term (1–2 quarters), deferred (3–4 quarters)
   - Prioritize high-cash/low-WHT entities first to maximize early net proceeds
   - Flag entities requiring board resolutions, regulatory filings, or FX conversion lead times

5. **Model FX impact:**
   - Convert each dividend at current spot and a stressed rate (±10%)
   - Compute FX sensitivity: change in parent USD proceeds per 1% move in each currency
   - Recommend hedging for material exposures (>$5M equivalent)

6. **Aggregate to parent-level cash forecast:**
   - Sum net dividends by quarter
   - Compare to parent funding needs (debt maturities, buybacks, capex)
   - Identify funding gaps or surplus and recommend recycling strategy

7. **Identify optimization levers:**
   - Entities with sub-optimal WHT rates where treaty elections or holding structure changes apply
   - Cash trapped in high-WHT jurisdictions — flag for alternative repatriation (royalties, management fees, intercompany loans)
   - Entities near retained earnings limits — recommend timing of additional profits before next dividend

## Output Format

Produce a structured report with the following sections:

**1. Subsidiary Summary Table** (one row per entity)
| Entity | Country | Cash Balance | Min Reserve | Upstreamable | WHT % | Net to Parent | Timing |
|--------|---------|-------------|-------------|-------------|-------|--------------|--------|

**2. Consolidated Upstream Forecast**
- Total gross dividends by quarter (Q1–Q4)
- Total WHT cost by quarter
- Total net proceeds to parent by quarter
- Cumulative net proceeds vs. parent funding need

**3. Binding Constraints List**
- Entities blocked by legal cap, regulatory approval, or minimum cash rules
- Estimated resolution timeline and required actions

**4. Tax Efficiency Analysis**
- Effective blended WHT rate across portfolio
- Top 3 opportunities to reduce WHT cost with specific actions and estimated savings

**5. Recommendations**
- Prioritized action list (entity, action, owner, deadline, expected net proceeds impact)
- Risk flags (FX
