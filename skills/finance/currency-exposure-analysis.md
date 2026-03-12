---
name: currency-exposure-analysis
description: >
  Identifies and quantifies foreign exchange risk across revenue streams, expenses, and contracts
  denominated in multiple currencies. Use when someone asks about FX risk or currency exposure,
  wants to understand how exchange rate fluctuations affect their business, needs to assess
  multi-currency contract risk, or is trying to hedge foreign currency positions. Also activates
  when someone mentions currency mismatch between income and costs.
category: finance
tags: [fx-risk, foreign-exchange, hedging, multi-currency, treasury]
author: community
---

# Currency Exposure Analysis

This skill systematically maps and quantifies foreign exchange risk across all currency-denominated positions so Claude can surface net exposure, risk concentration, and hedging priorities.

## Analysis Workflow

1. **Inventory all currency positions**
   - List every currency appearing in revenue, expenses, assets, liabilities, or contracts
   - Separate by transaction type: recurring revenue, one-time payments, fixed contracts, variable costs
   - Note payment timing: spot (< 30 days), short-term (30–180 days), long-term (> 180 days)

2. **Classify exposure type for each position**
   - **Transaction exposure**: known future cash flows in foreign currency (invoices, contracts)
   - **Translation exposure**: foreign subsidiary financials consolidated into home currency
   - **Economic exposure**: competitive position affected by exchange rate shifts (e.g., pricing power vs. foreign competitors)

3. **Quantify gross exposure per currency**
   - Calculate total inflows and outflows per currency over the analysis period
   - Convert to base currency using current spot rates
   - Flag positions exceeding 5% of total revenue or operating costs as material

4. **Calculate net exposure**
   - Offset natural hedges: subtract outflows from inflows in the same currency
   - Identify residual unhedged exposure after natural offsets
   - Note any currency pairs with high correlation that create indirect exposure

5. **Stress test key exposures**
   - Apply ±5%, ±10%, and ±20% exchange rate moves to each material exposure
   - Calculate P&L impact in base currency for each scenario
   - Identify break-even exchange rates for contracts or deals

6. **Assess existing hedges**
   - Document any forwards, options, swaps, or natural hedges already in place
   - Calculate hedge ratio: hedged notional ÷ gross exposure per currency
   - Identify gaps between current hedges and full coverage

7. **Prioritize risks**
   - Rank currencies by: (1) size of net exposure, (2) volatility of the currency pair, (3) time horizon
   - Flag any currency with low liquidity or restricted convertibility as elevated risk

## Output Format

Produce a structured report with these sections:

**1. Exposure Summary Table**
| Currency | Gross Inflows | Gross Outflows | Net Exposure (Base CCY) | % of Revenue | Exposure Type |
|----------|--------------|----------------|------------------------|--------------|---------------|

**2. Material Exposures** (those exceeding 5% threshold)
- One paragraph per currency explaining the source, timing, and business context

**3. Stress Test Results**
- Table showing P&L impact at −20%, −10%, −5%, +5%, +10%, +20% moves for each material currency

**4. Hedge Coverage Summary**
- Current hedge ratio per currency
- Unhedged residual in base currency
- Maturity profile of existing hedges

**5. Risk Priorities & Recommendations**
- Ranked list of top 3–5 exposures requiring action
- For each: suggested hedging instrument (forward, option, natural hedge adjustment), rationale, and urgency (immediate / next quarter / monitor)

**6. Key Assumptions**
- Base currency used
- Analysis period
- Spot rates applied
- Data gaps or limitations noted

Length: concise for small portfolios (1–2 currencies), comprehensive for complex multi-currency operations. Always flag data gaps explicitly rather than estimating silently.
