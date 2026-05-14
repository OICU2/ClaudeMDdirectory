---
name: brand-search-term-expansion
description: >
  Identifies and organizes branded and near-branded search term variations to expand paid and organic search coverage around core brand queries. Use when someone says "help me find more brand keywords," asks about expanding their branded search terms, wants to capture more brand-adjacent traffic, needs to build out a branded keyword list, or is looking to improve coverage around their brand name in search campaigns.
category: marketing
tags: [seo, sem, keywords, brand, paid-search]
author: community
---

# Brand Search Term Expansion

This skill generates a structured set of branded and near-branded keyword variations from a core brand name, organized by intent and query type, for use in paid search campaigns and SEO targeting.

## Expansion Workflow

1. **Identify the core brand inputs**: Extract the brand name, product lines, key spokespersons, taglines, and common misspellings provided by the user. If not provided, ask for them before proceeding.

2. **Generate variation categories** across these six types:
   - **Exact brand**: The brand name alone and its common abbreviations (e.g., "Nike", "NK")
   - **Misspellings and typos**: Phonetic variants, transpositions, missing letters (e.g., "Adidas" → "Adiddas", "Adidass", "Adidis")
   - **Brand + category/product**: Brand name combined with product types, categories, or services (e.g., "Nike running shoes", "Nike Air Max sneakers")
   - **Brand + intent modifier**: Brand name paired with purchase or research intent signals (e.g., "Nike promo code", "Nike sale", "Nike reviews", "buy Nike online")
   - **Brand + competitor comparison**: Queries where users compare the brand to rivals (e.g., "Nike vs Adidas", "Nike or New Balance")
   - **Near-brand navigational**: Queries implying the user wants the brand's website or properties (e.g., "Nike website", "Nike store near me", "Nike official site")

3. **Apply modifier matrix**: For each core brand term, systematically combine with:
   - Price/deal modifiers: sale, discount, coupon, promo code, cheap, affordable
   - Action modifiers: buy, order, shop, find, get
   - Research modifiers: review, rating, best, top, compare, worth it
   - Location modifiers: near me, online, [city name] (if local business)
   - Audience modifiers: for women, for men, for kids, for beginners (if applicable)

4. **Flag priority tiers**:
   - **Tier 1 (Must capture)**: Exact brand, navigational, and high-intent purchase terms
   - **Tier 2 (High value)**: Brand + product category, brand + deal modifiers
   - **Tier 3 (Defensive/expansion)**: Misspellings, comparisons, low-intent research terms

5. **Identify gaps and risks**: Flag any competitor brand terms that overlap with near-brand queries, and note terms where the brand may be losing traffic to resellers, review sites, or competitors.

## Output Format

Produce a structured keyword expansion report with the following sections:

**Brand:** [Brand name]
**Core seed terms used:** [List inputs]

---

### Keyword Expansion Table

| Term | Category | Intent | Priority Tier | Notes |
|------|----------|--------|---------------|-------|
| [keyword] | [e.g., Brand + Product] | [e.g., Commercial] | [Tier 1/2/3] | [e.g., high volume, exclude from broad] |

Include a minimum of 40 keyword variations across all six categories.

---

### Misspellings & Variants List
Bulleted list of all identified misspellings and phonetic variants.

---

### Recommended Negative Keywords
List of terms to exclude from branded campaigns to prevent irrelevant spend (e.g., competitor names if not running conquesting, unrelated homonyms).

---

### Coverage Gaps & Recommendations
3–5 bullet points identifying missed opportunities, cannibalization risks, or tactical recommendations (e.g., "Brand comparison terms are unaddressed — consider a dedicated ad group with a comparison landing page").
