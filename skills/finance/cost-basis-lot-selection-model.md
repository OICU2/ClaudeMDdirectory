---
name: cost-basis-lot-selection-model
description: >
  Evaluates FIFO, LIFO, and specific identification methods to determine the optimal lot selection strategy for minimizing tax liability on asset disposals. Use when someone asks about selling stocks or crypto tax efficiently, wants to minimize capital gains taxes, is deciding which tax lots to sell, or needs to compare cost basis accounting methods for an asset sale.
category: finance
tags: [tax-optimization, capital-gains, cost-basis, lot-selection, investing]
author: community
---

# Cost Basis Lot Selection Model

This skill analyzes FIFO, LIFO, and specific identification lot selection methods across a portfolio of holdings to identify the strategy that minimizes realized tax liability for a given disposal.

## Lot Selection Workflow

1. **Gather holding data**: Collect each tax lot's acquisition date, purchase price per share/unit, and quantity. If not provided, ask for this before proceeding.

2. **Identify the disposal parameters**: Confirm the number of units to sell, the current market price, and the investor's marginal tax rate for short-term (ordinary income) and long-term (preferential) capital gains.

3. **Classify each lot**: Label every lot as short-term (held ≤ 365 days) or long-term (held > 365 days) based on the sale date.

4. **Model each method**:
   - **FIFO**: Sell oldest lots first. Calculate realized gain/loss and tax owed.
   - **LIFO**: Sell newest lots first. Calculate realized gain/loss and tax owed.
   - **Specific Identification — Tax Minimization**: Sort lots to prioritize: (a) lots with a loss, largest loss first; (b) long-term gains over short-term gains; (c) smallest long-term gains last. Select the combination covering the required units that minimizes total tax.
   - **Specific Identification — Loss Harvesting** (if applicable): Flag any lots where selling would realize a harvestable loss usable against other gains.

5. **Compute tax impact per method**: For each method, calculate: total proceeds, total cost basis, net gain/loss, short-term gain/loss, long-term gain/loss, estimated tax owed (using provided rates), and after-tax proceeds.

6. **Rank methods by after-tax proceeds**: Identify the optimal method and quantify the tax savings versus the worst alternative.

7. **Flag wash-sale risk**: If any loss lots are sold, note the 30-day wash-sale rule and identify any substantially identical securities the investor holds or plans to buy.

## Output Format

Produce a structured response with these sections:

**Lot Inventory Table**
| Lot # | Acquired | Units | Cost Basis/Unit | Total Basis | Holding Period | Unrealized G/L |
(one row per lot)

**Method Comparison Table**
| Method | Units Sold | Total Basis | Proceeds | Net G/L | ST Gain | LT Gain | Est. Tax | After-Tax Proceeds |
(one row per method: FIFO, LIFO, Specific ID – Min Tax)

**Recommended Strategy**
- State the optimal method in one sentence.
- Specify exactly which lot numbers to sell and in what quantity.
- State the tax savings vs. the next-best alternative in dollar terms.

**Wash-Sale & Risk Notes**
- Bullet list of any wash-sale exposure, holding period edge cases, or state tax considerations the investor should verify with a tax advisor.

Keep tables aligned. Use the investor's actual numbers throughout — no placeholder values. End with a one-line disclaimer that this is modeling output, not tax advice.
