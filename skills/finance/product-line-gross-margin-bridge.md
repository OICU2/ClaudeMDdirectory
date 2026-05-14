---
name: product-line-gross-margin-bridge
description: >
  Decomposes period-over-period gross margin changes by product line into volume, price, mix, and cost components to pinpoint drivers of margin expansion or compression. Use when someone asks "why did our gross margin change," wants to understand margin variance between periods, needs to break down margin performance by product line, is investigating gross profit deterioration or improvement, or wants to attribute margin shifts to specific business drivers.
category: finance
tags: [gross-margin, bridge-analysis, variance-analysis, product-line, finance]
author: community
---

# Product Line Gross Margin Bridge

This skill performs a structured decomposition of gross margin changes between two periods, isolating the contribution of volume, price, mix, and cost effects across product lines so leadership can identify exactly what drove margin expansion or compression.

## Bridge Analysis Workflow

### 1. Collect Required Inputs
Request the following for both the prior period (base) and current period (comparison):
- Revenue and units sold per product line
- Cost of goods sold (COGS) per product line, broken into variable and fixed if available
- Gross profit per product line
- Total revenue and total gross profit

### 2. Calculate Base Metrics Per Product Line
For each product line in the base period compute:
- **Average Selling Price (ASP)** = Revenue ÷ Units
- **Unit Cost** = COGS ÷ Units
- **Unit Margin** = ASP − Unit Cost
- **Gross Margin %** = Gross Profit ÷ Revenue
- **Revenue Mix %** = Product Line Revenue ÷ Total Revenue

### 3. Isolate Each Bridge Component

**Volume Effect**
Measures margin change due to selling more or fewer units, holding price and cost constant.
`Volume Effect = (Current Units − Base Units) × Base Unit Margin`

**Price Effect**
Measures margin change due to ASP movement, holding volume and cost constant.
`Price Effect = (Current ASP − Base ASP) × Current Units`

**Cost Effect**
Measures margin change due to unit cost movement, holding volume and price constant.
`Cost Effect = −(Current Unit Cost − Base Unit Cost) × Current Units`
(Negative sign: cost increases reduce margin.)

**Mix Effect**
Measures margin change from shifting revenue weight toward higher- or lower-margin product lines.
`Mix Effect = (Current Mix % − Base Mix % ) × Base Blended Unit Margin × Total Current Units`
Alternatively compute as: Total Gross Profit Bridge Residual after subtracting Volume + Price + Cost effects.

**Verify Reconciliation**
`Sum of all effects = Current Period Gross Profit − Base Period Gross Profit`
Flag any reconciling difference and note its cause (e.g., rounding, FX, new product lines).

### 4. Rank and Interpret Drivers
- Sort effects by absolute dollar magnitude across all product lines
- Identify the top 2–3 drivers of total margin change
- Flag product lines where multiple effects compound (e.g., volume down AND cost up)
- Note any product lines with favorable mix shift that masked underlying price/cost pressure

### 5. Validate Inputs
- Check that base and current revenue totals match source financials
- Confirm units data is on a consistent basis (no SKU redefinitions between periods)
- Ask clarifying questions if COGS split between variable/fixed is unavailable, and note assumption used

## Output Format

Produce the following sections in order:

**1. Summary Headline (2–3 sentences)**
State the total gross profit change in dollars and basis points, name the single largest driver, and characterize whether the period was expansion or compression.

**2. Bridge Waterfall Table**
| Effect | $ Impact | bps Impact | Key Driver Product Lines |
|---|---|---|---|
| Volume | | | |
| Price | | | |
| Cost | | | |
| Mix | | | |
| **Total Change** | | | |

**3. Product Line Detail Table**
| Product Line | Base GP$ | Current GP$ | Δ GP$ | Volume | Price | Cost | Mix | Margin % Base | Margin % Current |
|---|---|---|---|---|---|---|---|---|---|

**4. Key Insights (bullet list, 3–5 bullets)**
- One insight per major driver
- Call out any offsetting effects that obscure the true picture
-
