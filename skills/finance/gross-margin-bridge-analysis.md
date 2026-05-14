---
name: gross-margin-bridge-analysis
category: finance
description: >
  Decomposes the change in gross margin between two periods into volume, price, mix, and cost components to pinpoint the primary drivers of margin movement. Use when someone says "our margins dropped and we need to know why," asks about "what's driving the gross margin change," or wants to "break down the margin bridge between periods." Also triggers when someone needs to "explain the variance in gross profit" or wants to "attribute margin movement to specific factors."
tags: [gross-margin, bridge-analysis, variance-analysis, profitability, finance]
author: community
---

# Gross Margin Bridge Analysis

This skill decomposes gross margin changes between two periods into volume, price, mix, and cost effects, and activates whenever a user needs to understand the root causes behind margin movement.

## Analysis Workflow

### 1. Gather Required Inputs
Collect the following for both the baseline (prior) period and comparison (current) period:
- Revenue by product or segment
- Units sold by product or segment
- Cost of goods sold (COGS) by product or segment
- If mix analysis is needed: individual product-level data, not just totals

### 2. Calculate Baseline Metrics
- Gross Profit (period) = Revenue − COGS
- Gross Margin % (period) = Gross Profit / Revenue × 100
- Average Selling Price (ASP) per unit = Revenue / Units
- Average Cost per unit = COGS / Units

### 3. Decompose the Bridge into Four Components

**Volume Effect**
Measures how much of the gross profit change is attributable purely to selling more or fewer units, holding price and cost constant.
- Volume Effect = (Current Units − Prior Units) × Prior ASP − (Current Units − Prior Units) × Prior Cost per Unit
- Simplified: (ΔUnits) × Prior Gross Profit per Unit

**Price Effect**
Measures the impact of selling price changes, holding volume constant at current period levels.
- Price Effect = (Current ASP − Prior ASP) × Current Units

**Mix Effect**
Measures the impact of shifting sales toward higher- or lower-margin products (requires product-level data).
- For each product: Mix Effect = (Current product share % − Prior product share %) × Total Current Units × Prior product Gross Profit per Unit
- Sum across all products for total mix effect
- If only aggregate data is available, note that mix cannot be isolated and fold it into the price effect with a caveat

**Cost Effect**
Measures the impact of input cost changes, holding volume constant at current period levels.
- Cost Effect = −(Current Cost per Unit − Prior Cost per Unit) × Current Units
- A negative cost variance (costs rose) reduces gross profit; present as a headwind

### 4. Reconcile the Bridge
- Sum of all four effects must equal the total change in gross profit: ΔGross Profit = Volume Effect + Price Effect + Mix Effect + Cost Effect
- If there is a residual, surface it explicitly and investigate whether it reflects rounding, currency, or a missing data dimension

### 5. Rank Drivers and Interpret
- Order effects from largest absolute impact to smallest
- Flag which effects are tailwinds (positive) vs. headwinds (negative)
- Call out the primary driver and whether it reflects a structural issue or a one-time event
- Note any offsetting effects (e.g., volume growth masking price erosion)

## Output Format

Produce the following structured output:

**Gross Margin Bridge: [Prior Period] → [Current Period]**

| Driver | $ Impact | Direction |
|---|---|---|
| Volume Effect | $X,XXX | Tailwind / Headwind |
| Price Effect | $X,XXX | Tailwind / Headwind |
| Mix Effect | $X,XXX | Tailwind / Headwind |
| Cost Effect | $X,XXX | Tailwind / Headwind |
| **Total ΔGross Profit** | **$X,XXX** | |

**Summary Metrics**
- Prior Gross Margin %: XX.X%
- Current Gross Margin %: XX.X%
- Change: ±X.X pp

**Key Findings** (3–5 bullet points)
- Lead with the largest driver
- Explain the business implication of each material effect
- Flag any data limitations that prevent full decomposition (e
