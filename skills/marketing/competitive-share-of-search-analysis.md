---
name: competitive-share-of-search-analysis
description: >
  Tracks and compares branded and category search volume trends across competitors to estimate relative market mindshare over time. Use when someone wants to benchmark search visibility against rivals, asks about measuring brand awareness through search data, wants to understand which competitors are gaining or losing mindshare, needs to track share of search as a proxy for market share, or wants to analyze category search trends across multiple brands.
category: marketing
tags: [competitive-intelligence, seo, brand-awareness, market-research, search-analytics]
author: community
---

# Competitive Share of Search Analysis

This skill guides Claude through collecting, normalizing, and interpreting branded and category search volume data to produce a share of search report that estimates relative mindshare across competitors over time.

## Analysis Workflow

### 1. Define Scope
- Identify the target brand and 3–8 direct competitors to include
- Clarify the category keywords to track (e.g., generic product/service terms) alongside branded terms
- Confirm the time range (minimum 12 months recommended to capture trends; 24+ months preferred)
- Confirm the geographic market(s) and language

### 2. Collect Search Volume Data
- Use Google Trends relative interest data when absolute volume is unavailable — export CSV for each brand and category term
- If the user has access to tools (SEMrush, Ahrefs, Moz, Google Keyword Planner), request monthly search volume for each branded keyword
- Collect both exact-match brand name queries and common brand + category variants (e.g., "Nike running shoes" alongside "Nike")
- Note data source and any gaps or limitations

### 3. Normalize and Calculate Share of Search
- Sum total search volume across all competitors for each time period
- Divide each brand's volume by the total to get share percentage: `Brand Share = Brand Volume / Sum of All Brand Volumes × 100`
- Calculate for each month (or quarter) to produce a time series
- If using Google Trends index scores (0–100), treat them as relative and normalize accordingly

### 4. Identify Trends and Patterns
- Flag brands with consistent upward or downward trajectory over the period
- Identify inflection points (sharp rises or drops) and correlate with known events: product launches, campaigns, PR crises, funding announcements
- Compare share of search trends against available market share data if provided — note alignment or divergence
- Calculate period-over-period change (MoM, QoQ, YoY) for each competitor

### 5. Interpret Mindshare Signals
- Brands gaining share of search typically signal growing consumer awareness or campaign momentum
- Declining share may indicate loss of relevance, competitor conquesting, or reduced marketing investment
- Seasonal patterns in category terms vs. brand terms reveal demand-driven vs. brand-driven search behavior
- Note if the overall category search volume is growing or shrinking — a brand can lose share while absolute volume grows

### 6. Generate Recommendations
- Flag the top opportunity: which competitor's share is most vulnerable and why
- Identify the keyword clusters or moments where the target brand is underrepresented
- Suggest 2–3 concrete actions: campaign timing, content gaps to fill, brand search defense tactics

## Output Format

Produce a structured report with the following sections:

**1. Summary Table**
A markdown table with columns: Competitor | Avg Monthly Search Volume | Share of Search (%) | 12-Month Trend (↑ ↓ →) | Notable Inflection Points

**2. Time Series Data**
A markdown table showing each brand's share of search percentage by month or quarter across the analysis period.

**3. Trend Narrative (200–300 words)**
Plain-language interpretation of who is winning, who is losing, and why — with specific data points cited.

**4. Mindshare Risk & Opportunity Matrix**
A 2×2 or bullet-list breakdown identifying:
- Brands to watch (gaining fast)
- Vulnerable competitors (declining)
- Category growth or contraction signal
- Target brand's relative position

**5. Recommended Actions (3–5 bullets)**
Specific, prioritized actions the target brand should take based on findings. Each bullet must reference a data point from the analysis.

**6. Data Notes**
Source(s) used, date range, geographic scope, and any caveats about data reliability or methodology.
