---
name: cross-sell-product-affinity-map
description: >
  Analyzes purchase history data to identify product pairs and bundles most frequently bought together, then generates targeted cross-sell recommendations for email and on-site placements. Use when someone says "what products should we recommend together," asks about cross-sell opportunities, wants to find product affinity patterns, needs to improve average order value, or is building a product recommendation strategy.
category: marketing
tags: [cross-sell, product-affinity, recommendations, ecommerce, personalization]
author: community
---

# Cross-Sell Product Affinity Map

This skill mines purchase history data to surface high-affinity product pairs and bundles, then produces actionable cross-sell recommendations formatted for email campaigns and on-site placements.

## Analysis Workflow

1. **Ingest purchase data** — Accept input as CSV, JSON, or pasted table with columns: order_id, customer_id, product_id, product_name, category, purchase_date. If data is missing fields, ask which columns map to these values before proceeding.

2. **Calculate co-occurrence metrics** — For every product pair, compute:
   - **Support**: % of orders containing both products
   - **Confidence**: % of orders with Product A that also include Product B
   - **Lift**: Confidence ÷ (prevalence of Product B alone). Lift > 1.5 indicates meaningful affinity.

3. **Rank and filter pairs** — Surface only pairs where:
   - Support ≥ 1% (enough volume to act on)
   - Lift ≥ 1.5
   - Confidence ≥ 10%
   Sort descending by lift score.

4. **Identify bundle clusters** — Group pairs that share products into 3-item bundles. Flag any bundle where all three pairwise lift scores exceed 1.5 as a "Power Bundle."

5. **Segment by customer behavior** — Split recommendations into:
   - **New buyers** (1 order): focus on highest-confidence pairs
   - **Repeat buyers** (2–4 orders): focus on category-expansion pairs
   - **Loyal buyers** (5+ orders): focus on premium or niche add-ons

6. **Generate placement copy** — For each top recommendation, write:
   - A subject line and product callout block for email
   - A 1-line on-site widget headline (e.g., "Customers who bought X also love Y")
   - A rationale sentence explaining why the pairing works

7. **Flag data quality issues** — Note if any product appears in fewer than 20 orders (low confidence), if the dataset spans fewer than 90 days (seasonality risk), or if order IDs are non-unique.

## Output Format

Produce three clearly labeled sections:

**Section 1 — Affinity Map Table**
Markdown table with columns: Product A | Product B | Support % | Confidence % | Lift | Segment Target
Include top 10 pairs minimum, up to 25.

**Section 2 — Power Bundles**
Bulleted list of 3-item bundles meeting the lift threshold. Each bullet: Bundle name (auto-generated), three products, average lift score, recommended discount or offer mechanic (e.g., "bundle and save 10%").

**Section 3 — Ready-to-Use Cross-Sell Copy**
For the top 5 pairs by lift, provide:
- **Email block**: Subject line (≤50 chars) + 2-sentence product recommendation body
- **On-site widget**: Headline (≤12 words) + CTA button text (≤4 words)
- **Placement rationale**: 1 sentence explaining the affinity signal

End with a **Data Quality Notes** paragraph flagging any issues found in step 7.
