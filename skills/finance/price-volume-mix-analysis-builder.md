---
name: price-volume-mix-analysis-builder
description: >
  Decomposes revenue variance between two periods into price, volume, and product mix components to identify the primary drivers of sales performance changes. Use when someone asks "why did revenue change," wants to understand sales variance drivers, needs to break down growth between periods, is analyzing what caused a revenue increase or decline, or wants to separate pricing impact from volume and mix effects.
category: finance
tags: [revenue-analysis, variance-analysis, sales-performance, pricing, financial-analysis]
author: community
---

# Price-Volume-Mix Analysis Builder

This skill builds a structured Price-Volume-Mix (PVM) decomposition that quantifies how much of a revenue change between two periods is attributable to price changes, unit volume changes, and shifts in product/customer mix.

## PVM Analysis Workflow

### 1. Gather Required Inputs
Collect for each product/segment for both periods:
- Units sold (volume)
- Average selling price per unit
- Total revenue (or derive from units × price)
- Product/segment names

If the user provides incomplete data, ask specifically for what is missing before proceeding.

### 2. Calculate the Three Components

**Price Effect** (holding prior-period volume and mix constant):
- For each product: Price Effect = (Current Price − Prior Price) × Prior Volume
- Sum across all products for total Price Effect

**Volume Effect** (holding prior-period prices and mix constant):
- Total Volume Effect = (Total Current Units − Total Prior Units) × Prior Blended Average Price
- Prior Blended Average Price = Prior Total Revenue ÷ Prior Total Units

**Mix Effect** (the residual — captures shift toward higher or lower margin products):
- Mix Effect = Total Revenue Variance − Price Effect − Volume Effect
- Alternatively, for each product: Mix Effect = Prior Price × (Current Units − (Current Total Units × Prior Product Share))

### 3. Validate the Decomposition
Confirm the three components sum to total revenue variance:
- Total Variance = Current Revenue − Prior Revenue
- Price Effect + Volume Effect + Mix Effect = Total Variance
- If they do not reconcile, recheck inputs and calculations.

### 4. Interpret Each Driver
- **Positive Price Effect**: ASP increased; pricing power or price increases drove growth
- **Negative Price Effect**: Discounting, competitive pressure, or price reductions hurt revenue
- **Positive Volume Effect**: More units sold at consistent mix and price
- **Negative Volume Effect**: Unit sales declined
- **Positive Mix Effect**: Revenue shifted toward higher-priced products/segments
- **Negative Mix Effect**: Revenue shifted toward lower-priced products/segments (mix dilution)

### 5. Identify Primary Driver
Rank the three effects by absolute dollar magnitude and flag which component explains the largest share of the variance.

## Output Format

Produce the following structured output:

**Header**: Period-over-period comparison label (e.g., "Q1 2023 vs. Q1 2024")

**Summary Table**:
| Driver | $ Impact | % of Total Variance |
|--------|----------|---------------------|
| Price Effect | $X | X% |
| Volume Effect | $X | X% |
| Mix Effect | $X | X% |
| **Total Variance** | **$X** | **100%** |

**Product-Level Breakdown** (if multiple products provided):
A table showing each product's contribution to each effect.

**Key Findings** (3–5 bullet points):
- Primary driver of the variance
- Which products/segments contributed most
- Whether price, volume, or mix is the concern or opportunity
- One actionable recommendation based on the findings

**Reconciliation Check**: Confirm the three components sum to total variance with explicit numbers shown.

Use dollar amounts throughout. Flag any data assumptions made (e.g., if average price was inferred from revenue ÷ units).
