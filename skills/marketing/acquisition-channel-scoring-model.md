---
name: acquisition-channel-scoring-model
description: >
  Evaluates and ranks potential customer acquisition channels using a weighted scoring framework across cost, reach, conversion likelihood, and strategic fit. Use when someone says "which channels should we prioritize," asks about comparing marketing channels, wants to score or rank acquisition options, needs to allocate a marketing budget across channels, or is building a go-to-market strategy.
category: marketing
tags: [acquisition, channel-strategy, scoring, budget-allocation, go-to-market]
author: community
---

# Acquisition Channel Scoring Model

This skill evaluates and ranks customer acquisition channels using a structured multi-criteria scoring model, activated whenever someone needs to compare, prioritize, or allocate resources across marketing channels.

## Scoring Workflow

1. **Gather inputs** — Ask for (or infer from context): target audience, available budget range, company stage (early/growth/scale), primary goal (volume vs. efficiency), and any channels already in use or excluded.

2. **Define the channel list** — Identify all candidate channels relevant to the business. Common options: paid search, paid social (Meta/LinkedIn/TikTok), SEO/content, email, influencer, affiliate, partnerships, events, outbound sales, product-led growth, PR, community.

3. **Score each channel across five dimensions** (1–5 scale, 5 = best):

   | Dimension | Definition |
   |---|---|
   | **Cost Efficiency** | CAC relative to LTV; lower cost = higher score |
   | **Reach** | Total addressable audience accessible through this channel |
   | **Conversion Likelihood** | Historical or benchmark conversion rates for this audience/offer |
   | **Time to Results** | How quickly the channel produces measurable outcomes (fast = higher score) |
   | **Strategic Fit** | Alignment with brand, team capabilities, and long-term positioning |

4. **Apply weights** — Use these default weights, adjusting if the user specifies priorities:
   - Cost Efficiency: 25%
   - Reach: 15%
   - Conversion Likelihood: 30%
   - Time to Results: 15%
   - Strategic Fit: 15%

5. **Calculate weighted scores** — Multiply each raw score by its weight, sum for a total score out of 5.

6. **Tier the results**:
   - **Tier 1 (Score 3.8–5.0):** Prioritize immediately — allocate 60–70% of budget
   - **Tier 2 (Score 2.8–3.7):** Test and iterate — allocate 20–30% of budget
   - **Tier 3 (Score <2.8):** Deprioritize or defer

7. **Flag tradeoffs** — Note any channels with high variance (e.g., high reach but low conversion), channel dependencies (e.g., retargeting requires awareness spend), or saturation risks.

## Output Format

Produce a structured report with these sections:

**1. Scoring Matrix Table**
A markdown table listing each channel with its five dimension scores, weighted total, and tier assignment.

**2. Tier Summary**
Bullet list of channels by tier with a one-line rationale for each placement.

**3. Budget Allocation Recommendation**
Percentage split across tiers with specific channel callouts. If a budget figure was provided, include dollar amounts.

**4. Top 3 Channels — Deep Dive**
For the three highest-scoring channels: key tactics to activate, expected benchmark metrics (CPL, CAC, conversion rate range), and one risk to monitor.

**5. Assumptions & Caveats**
List any assumptions made due to missing inputs and note what data would sharpen the model (e.g., historical CAC, audience size data).

Total output length: 400–700 words. Use tables and bullet points throughout. Avoid prose-heavy paragraphs.
