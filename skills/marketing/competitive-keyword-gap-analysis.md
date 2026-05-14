---
name: competitive-keyword-gap-analysis
description: >
  Identifies keywords competitors rank for that your site does not, then prioritizes them by traffic potential and ranking difficulty to guide content investment. Use when someone says they want to find keyword gaps, asks what keywords competitors are ranking for that they aren't, wants to uncover missed SEO opportunities, needs to prioritize content topics based on competitor rankings, or is looking to grow organic traffic by targeting underserved keywords.
category: marketing
tags: [seo, keywords, competitive-analysis, content-strategy, organic-traffic]
author: community
---

# Competitive Keyword Gap Analysis

This skill analyzes the difference between competitor keyword rankings and your own to surface high-value content opportunities, activated whenever a user wants to discover untapped keywords their competitors are capturing.

## Workflow

### Step 1: Gather Inputs
Ask the user for:
- **Their domain** (e.g., yoursite.com)
- **Competitor domains** (2–5 competitors; if unknown, ask for their niche and infer likely competitors)
- **Tool access**: Confirm which SEO tools are available (Ahrefs, SEMrush, Moz, Google Search Console, Ubersuggest, or none)
- **Content focus**: Any topic areas, product categories, or audience segments to prioritize

### Step 2: Define the Gap
If tools are available, guide the user to:
1. Export competitor keyword rankings (top 1000 keywords per competitor)
2. Export their own site's ranked keywords
3. Use tool's built-in gap feature (SEMrush Keyword Gap, Ahrefs Content Gap) or subtract their keywords from the competitor list

If no tools are available:
- Use publicly observable signals (search queries with `site:competitor.com`, Google autocomplete, People Also Ask boxes)
- Ask the user to manually input any competitor keywords they are aware of

### Step 3: Score and Prioritize Each Gap Keyword
For each gap keyword, assign a priority score using these three factors:

| Factor | Weight | Signal |
|---|---|---|
| Traffic Potential | 40% | Monthly search volume (MSV) |
| Ranking Difficulty | 30% | Keyword difficulty score (lower = better opportunity) |
| Business Relevance | 30% | How directly it maps to their product, service, or audience |

Calculate a simple priority tier:
- **Tier 1 (Act Now)**: High volume + low difficulty + high relevance
- **Tier 2 (Plan Next)**: Medium volume + medium difficulty + high relevance
- **Tier 3 (Monitor)**: High difficulty or low relevance — revisit later

### Step 4: Identify Content Format for Each Keyword
For each Tier 1 and Tier 2 keyword, recommend the most appropriate content format:
- Informational intent → Blog post, guide, FAQ
- Comparison intent → Comparison page, listicle
- Commercial intent → Landing page, product page
- Local intent → Location page, local guide

### Step 5: Surface Quick Wins
Flag keywords where:
- The user already has a page that could be optimized (existing content refresh)
- Competitor ranking page has low domain authority (beatable)
- Keyword appears in 2+ competitor lists but not theirs (consensus gap)

## Output Format

Produce a structured report with these sections:

---

**Competitive Keyword Gap Report**
*Your domain vs. [Competitor 1], [Competitor 2], ...*

**Executive Summary**
2–3 sentences: total gap keywords found, number of Tier 1 opportunities, and top theme clusters identified.

**Tier 1 — Act Now (Top 10 Keywords)**

| Keyword | MSV | Difficulty | Competitors Ranking | Intent | Recommended Format | Notes |
|---|---|---|---|---|---|---|
| [keyword] | [vol] | [score] | [domains] | [type] | [format] | [quick win flag if applicable] |

**Tier 2 — Plan Next (Up to 20 Keywords)**
Same table format as Tier 1.

**Content Theme Clusters**
Group gap keywords into 3–6 thematic clusters. For each cluster:
- Cluster name
- Number of keywords
- Estimated combined monthly search volume
- Recommended pillar content title

**Quick Wins (Existing Pages to Optimize)**
Bulleted list of existing pages that could
