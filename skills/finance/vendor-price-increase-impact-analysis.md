---
name: vendor-price-increase-impact-analysis
description: >
  Quantifies the gross margin and cash flow impact of supplier price increases across product lines and purchasing volumes. Use when someone says a vendor is raising prices, asks how a cost increase will affect margins, wants to model the impact of supplier price changes, needs to evaluate whether to absorb or pass through a cost increase, or is preparing for vendor renegotiation with financial data.
category: finance
tags: [vendor-management, gross-margin, cost-analysis, cash-flow, procurement]
author: community
---

# Vendor Price Increase Impact Analysis

This skill models the financial impact of supplier price increases on gross margin, unit economics, and cash flow, and when Claude will use it is any time a user needs to quantify or respond to a vendor cost change.

## Analysis Workflow

1. **Gather inputs** — Collect current unit cost, new unit cost (or % increase), affected SKUs or product lines, monthly/annual purchase volume, and current selling price. If not provided, ask for them explicitly before proceeding.

2. **Calculate unit-level impact**
   - Cost delta per unit = New unit cost − Current unit cost
   - Gross margin before = (Selling price − Current unit cost) / Selling price
   - Gross margin after (absorb scenario) = (Selling price − New unit cost) / Selling price
   - Gross margin after (pass-through scenario) = same as before if selling price is raised proportionally

3. **Model three scenarios**
   - **Full absorption**: Seller absorbs 100% of cost increase; calculate margin erosion and annual profit impact
   - **Full pass-through**: Selling price raised to preserve margin; calculate new price and note competitive risk
   - **Partial pass-through**: Split the increase (e.g., 50/50); calculate resulting margin and new price

4. **Cash flow impact**
   - Annual cash impact = Cost delta per unit × Annual purchase volume
   - If payment terms change with the price increase, calculate days-payable-outstanding effect on working capital

5. **Break-even volume check**
   - If volume could be reduced to offset margin loss, calculate the volume reduction needed to hold total gross profit flat

6. **Flag negotiation levers** — Identify options: volume commitments for discounts, extended contracts, alternative sourcing, product reformulation, or tiered pricing structures.

## Output Format

Produce a structured report with the following sections:

**Summary Line**: One sentence stating the total annual dollar impact under full absorption.

**Input Assumptions Table**: List all inputs used (current cost, new cost, volume, selling price, margin).

**Scenario Comparison Table** (3 columns: Absorb / Pass-Through / Partial):
- New unit cost to buyer
- New selling price (if applicable)
- Gross margin %
- Annual gross profit impact ($)

**Cash Flow Impact**: Annual incremental cash outflow and working capital effect if terms change.

**Break-Even Analysis**: Volume or price threshold needed to neutralize the impact.

**Recommended Actions**: 2–4 bullet points on negotiation strategy or operational responses, ranked by ease of execution.

Format numbers as currency with two decimal places. Flag any assumption gaps that would change the analysis materially.
