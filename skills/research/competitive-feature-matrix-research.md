---
name: competitive-feature-matrix-research
description: >
  Systematically collects and structures competitor feature data from public sources into a
  comparison matrix for product or market analysis. Use when someone asks to compare competitors,
  wants to build a feature comparison table, needs to map the competitive landscape, is researching
  what features rivals offer, or wants to benchmark a product against the market.
category: research
tags: [competitive-analysis, market-research, feature-matrix, product-strategy, benchmarking]
author: community
---

# Competitive Feature Matrix Research

This skill gathers and organizes competitor feature data from public sources into a structured comparison matrix, activating whenever a user wants to map, compare, or benchmark product capabilities across competitors.

## Research & Matrix Construction Workflow

1. **Define scope**: Identify the product category, the user's own product (if provided), and the list of competitors. If no competitors are named, infer 4–8 relevant ones based on the market segment.

2. **Identify feature dimensions**: Determine 8–15 meaningful feature categories to compare (e.g., pricing tiers, integrations, platform support, core capabilities, compliance certifications, support options). Prioritize dimensions that drive purchase decisions.

3. **Source data systematically**: For each competitor, gather data from:
   - Official product pages and feature lists
   - Pricing pages
   - Documentation and help centers
   - G2, Capterra, or Trustpilot reviews (for features mentioned by users)
   - Press releases or changelog announcements
   - LinkedIn or Crunchbase for company-level context (size, funding stage)

4. **Classify each feature per competitor**: Use consistent values — `✅ Yes`, `❌ No`, `⚠️ Partial/Limited`, `❓ Unclear`, or a specific value (e.g., price, count, tier name) — never leave a cell blank without a reason.

5. **Flag data confidence**: Note where data is inferred, outdated, or unverifiable. Add a `Last Verified` or `Confidence` column if significant uncertainty exists.

6. **Identify patterns and gaps**: After filling the matrix, write a short analysis noting:
   - Features that are table stakes (everyone has them)
   - Features that are differentiators (few competitors have them)
   - Gaps the user's product could exploit
   - Competitors that cluster together vs. stand apart

7. **Validate completeness**: Ensure every competitor × feature cell has a value and every source is named or linked where possible.

## Output Format

Produce three sections:

**1. Competitor Overview Table**
A brief table listing each competitor with: Company Name | Product Name | Pricing Model | Target Segment | Notable Strength (1 line each).

**2. Feature Comparison Matrix**
A Markdown table with competitors as columns and feature dimensions as rows. Example structure:

| Feature | ProductA | ProductB | ProductC | Your Product |
|---|---|---|---|---|
| SSO Support | ✅ | ❌ | ⚠️ SAML only | ✅ |
| API Access | ✅ | ✅ | ❌ | ✅ |
| Free Tier | ❌ | ✅ (up to 5 users) | ❌ | ❓ |

Include a footnote row or inline notes for any `⚠️` or `❓` entries explaining the limitation or uncertainty.

**3. Strategic Summary (200–350 words)**
- Table stakes features (universal)
- Differentiating features (rare or unique)
- Market gaps or underserved needs visible in the data
- 2–3 concrete recommendations for the user's product positioning or roadmap

Total output length: as long as needed to fill the matrix completely — do not truncate rows or columns for brevity.
