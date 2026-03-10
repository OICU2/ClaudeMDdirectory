---
name: pricing-strategy
description: >
  Analyzes products or services to recommend optimal pricing that balances revenue, competitiveness, and cost recovery. Use when someone says "how should I price this," asks about setting prices for a product or service, wants to know if their pricing is competitive, needs to figure out margins and markups, or is trying to maximize profit without losing customers.
category: finance
tags: [pricing, revenue, margins, competitive-analysis, monetization]
author: community
---

# Pricing Strategy

This skill develops data-driven pricing recommendations by analyzing costs, market positioning, and customer value perception to help set prices that maximize revenue while remaining competitive.

## Pricing Analysis Workflow

1. **Gather cost baseline** — Identify all direct costs (materials, labor, production) and indirect costs (overhead, marketing, support). Calculate the true cost per unit or delivery.

2. **Calculate minimum viable price** — Add target profit margin to total cost. For products: `(Total Cost / (1 - Desired Margin %))`. For services: `(Hourly Rate × Hours) + Overhead + Profit`.

3. **Assess market positioning** — Determine whether the offering competes on price (budget), value (mid-market), or premium (high-end). Each tier requires a different pricing anchor.

4. **Apply a pricing model** — Choose the most appropriate model:
   - **Cost-plus**: Cost × (1 + markup %). Simple, defensible.
   - **Value-based**: Price to what customers save or gain, not what it costs you.
   - **Competitive**: Benchmark against 3–5 direct competitors; price within 10–15% unless differentiated.
   - **Tiered/freemium**: Good/Better/Best tiers to capture multiple segments.
   - **Subscription**: Monthly ARR target ÷ expected customer count.

5. **Check psychological price points** — Prefer prices ending in 7 or 9 for consumer goods. Use round numbers for premium or B2B to signal confidence. Avoid prices that feel arbitrary.

6. **Model revenue scenarios** — Run three scenarios (conservative, base, aggressive) showing unit volume × price = revenue, and flag the break-even volume for each.

7. **Flag risks** — Identify if pricing is below cost, above perceived value, or inconsistent with positioning. Note where discounting or bundling could erode margins.

## Output Format

Produce a structured pricing recommendation with these sections:

**Cost Summary**
- Direct cost per unit/delivery
- Overhead allocation
- Total cost basis

**Recommended Price**
- Final price with rationale (one sentence)
- Gross margin % and dollar amount

**Pricing Model Used**
- Model name and why it fits this situation

**Competitive Snapshot**
- 2–3 reference price points from the market (ask user if unknown)
- Where this price lands relative to competitors

**Revenue Scenarios**
| Scenario | Volume | Price | Revenue | Margin |
|---|---|---|---|---|
| Conservative | — | — | — | — |
| Base | — | — | — | — |
| Aggressive | — | — | — | — |

**Risks & Recommendations**
- Up to 3 bullet points flagging margin risk, positioning mismatches, or suggested adjustments

Keep the total response under 500 words. Ask for missing cost or market data before guessing.