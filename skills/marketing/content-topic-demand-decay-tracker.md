---
name: content-topic-demand-decay-tracker
description: >
  Monitors search and engagement trend data for existing content topics to identify when audience interest has fallen below a viable threshold. Use when someone says "our old content isn't getting traffic anymore," asks about whether a topic is still worth covering, or wants to audit their content library for declining relevance. Also activates when someone needs to decide which articles to update, consolidate, or retire, or wants to prioritize their content refresh roadmap.
category: marketing
tags: [content-strategy, seo, content-audit, trend-analysis, content-decay]
author: community
---

# Content Topic Demand Decay Tracker

This skill analyzes existing content topics for signs of audience demand decay and produces a prioritized action plan for updating, consolidating, or retiring underperforming content.

## Decay Assessment Workflow

### 1. Gather Input Data
Ask the user to provide any available data points for each content topic:
- Page URL and title
- Monthly organic search traffic (current vs. 6 and 12 months ago)
- Keyword rankings for primary target terms
- Click-through rate (CTR) trends
- Engagement metrics: time on page, bounce rate, scroll depth
- Backlink count and acquisition rate
- Social shares and referral traffic

If the user lacks data, prompt them to pull it from Google Search Console, Google Analytics, Ahrefs, Semrush, or SimilarWeb before proceeding.

### 2. Calculate a Decay Score (0–100)
Score each topic across four dimensions, then average them:

| Dimension | Signal | Weight |
|---|---|---|
| Search Volume Trend | YoY change in monthly search volume for primary keyword | 30% |
| Traffic Trend | % drop in organic sessions over 12 months | 30% |
| Ranking Drift | Position movement for target keywords (positive = rising) | 25% |
| Engagement Trend | Change in avg. time on page and bounce rate | 15% |

Decay Score formula:
- Score each dimension 0–100 where 100 = severe decay, 0 = no decay
- Weight and sum to produce a composite score

Thresholds:
- **0–30**: Healthy — no action needed
- **31–55**: Moderate decay — schedule a refresh within 90 days
- **56–75**: Significant decay — prioritize for immediate update or consolidation
- **76–100**: Critical decay — flag for retirement or canonical redirect

### 3. Diagnose the Decay Type
Classify each decaying topic into one of four categories:

- **Trend Collapse**: The topic itself lost cultural/market relevance (e.g., a discontinued product category). Search volume dropped industry-wide.
- **SERP Displacement**: A stronger competitor or featured snippet has taken over the ranking. Volume is stable but CTR and rank have dropped.
- **Content Staleness**: The information is outdated but demand still exists. High keyword volume, low traffic — a refresh will likely recover rankings.
- **Audience Shift**: The target audience has moved to a different format or platform (e.g., video replaced blog posts for this topic).

### 4. Assign an Action
Based on decay score and decay type, assign one action per topic:

| Decay Type | Score 31–55 | Score 56–75 | Score 76–100 |
|---|---|---|---|
| Trend Collapse | Monitor quarterly | Consolidate or archive | Retire + 301 redirect |
| SERP Displacement | Optimize for featured snippet | Rewrite with new angle | Consolidate into stronger page |
| Content Staleness | Update stats and examples | Full rewrite | Full rewrite or consolidate |
| Audience Shift | Add embedded video/infographic | Repurpose to new format | Retire or repurpose entirely |

### 5. Prioritize the Refresh Roadmap
Rank topics by:
1. Decay score (highest first)
2. Historical traffic value (pages that once drove significant traffic get priority)
3. Effort-to-recovery ratio (staleness decays are easiest to recover; trend collapses are hardest)

Group into three sprint tiers:
- **Immediate (0–30 days)**: Score 76–100 or historically high-traffic pages with staleness decay
- **Near-term (31–90 days)**: Score 56–75
