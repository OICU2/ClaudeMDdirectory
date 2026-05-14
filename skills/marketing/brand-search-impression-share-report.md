---
name: brand-search-impression-share-report
description: >
  Aggregates paid and organic branded search impression share data to identify competitive gaps and recommend defensive strategies. Use when someone says "competitors are stealing our branded traffic," asks about brand impression share gaps, wants to analyze who is bidding on our brand terms, needs to understand branded query cannibalization, or wants to defend branded search real estate against competitors.
category: marketing
tags: [paid-search, seo, brand-defense, impression-share, competitive-analysis]
author: community
---

# Brand Search Impression Share Report

This skill analyzes paid and organic branded search impression share data to surface competitive gaps, identify where rivals are capturing branded query traffic, and produce prioritized defensive bidding or content recommendations.

## Workflow

### 1. Collect Input Data
Request the following from the user:
- **Paid data**: Google Ads or Microsoft Ads impression share report filtered to branded keywords (exact/phrase match), including columns: keyword, impressions, impression share (IS), lost IS (budget), lost IS (rank), clicks, CTR, avg CPC, top-of-page rate.
- **Organic data**: Google Search Console data filtered to branded queries, including: query, impressions, clicks, CTR, average position.
- **Competitor visibility** (optional): Auction Insights report from Google Ads showing overlap rate, outranking share, impression share per competitor.
- **Date range**: Minimum 30 days; 90-day preferred for trend reliability.

### 2. Calculate Branded IS Metrics
For each data source, compute:
- **Paid Brand IS** = Impressions won / Total eligible impressions × 100
- **Paid IS Gap** = 100% − Paid Brand IS (split into budget-lost vs. rank-lost portions)
- **Organic Brand IS** = Organic clicks / (Paid impressions + Organic impressions) × 100
- **Combined Brand Coverage** = (Paid impressions + Organic impressions) / Total eligible impressions × 100
- **Uncaptured IS** = 100% − Combined Brand Coverage (this is the competitor opportunity window)

### 3. Identify Gap Categories
Classify each branded keyword or query cluster into one of four gap types:
- 🔴 **Critical Gap**: Paid IS < 60% AND organic position > 3 — competitor likely dominating SERP
- 🟠 **Paid Gap Only**: Paid IS < 80% but organic position ≤ 2 — increase bids or budget
- 🟡 **Organic Gap Only**: Organic CTR < 30% or position > 2 but Paid IS ≥ 90% — optimize meta titles/descriptions or landing pages
- 🟢 **Healthy**: Paid IS ≥ 90% AND organic position ≤ 2 — monitor only

### 4. Analyze Competitor Behavior
Using Auction Insights data:
- Rank competitors by impression share overlap rate (highest = most aggressive)
- Flag any competitor with outranking share > 30% on branded terms as **Priority Threat**
- Note if competitor IS increased month-over-month (signals escalating bid strategy)
- Cross-reference competitor domains against organic SERP screenshots if provided

### 5. Generate Recommendations
Produce specific, prioritized actions in three categories:

**Defensive Bidding (Paid)**
- Raise bids on branded keywords where rank-lost IS > 15%
- Increase daily budgets on branded campaigns where budget-lost IS > 10%
- Add branded exact-match terms missing from current campaign
- Set target IS bid strategy to 90%+ for top branded terms
- Create competitor conquest countercampaigns if competitor overlap > 50%

**Content & Organic Defense (SEO)**
- Create or optimize landing pages for branded queries with organic position > 3
- Add FAQ schema to homepage/brand pages targeting informational branded queries
- Build brand-specific content hubs for product + brand query combinations
- Improve title tags and meta descriptions for branded queries with CTR < 25%

**Monitoring**
- Set up weekly IS alerts for branded campaigns dropping below 85%
- Schedule monthly Auction Insights reviews to track competitor escalation

## Output Format

Produce a structured report with these exact sections:

---

**Brand Search Impression Share Report**
*Date Range: [X] | Brand: [X]*

---
