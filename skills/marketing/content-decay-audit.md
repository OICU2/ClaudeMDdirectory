---
name: content-decay-audit
description: >
  Analyzes published content to identify pieces experiencing declining traffic, engagement, or search visibility and recommends targeted refresh or consolidation actions. Use when someone says their content isn't performing like it used to, asks why older blog posts are losing traffic, wants to find content worth updating, needs to prioritize their content refresh backlog, or is deciding whether to rewrite or remove underperforming pages.
category: marketing
tags: [content-audit, seo, content-strategy, traffic-analysis, content-refresh]
author: community
---

# Content Decay Audit

Diagnoses underperforming published content and produces a prioritized action plan covering refreshes, consolidations, redirects, or removals — used whenever existing content is losing ground.

## Audit Workflow

### 1. Gather Input Data
Ask the user to provide one or more of the following:
- List of URLs with traffic or engagement metrics (pageviews, organic clicks, bounce rate, time on page)
- Date ranges for comparison (e.g., last 90 days vs. prior 90 days)
- Content type (blog posts, landing pages, product pages, guides)
- Primary goal per piece (SEO, lead gen, brand awareness)
- Available tools or data sources (Google Analytics, Search Console, Ahrefs, SEMrush, CMS export)

If no data is provided, instruct the user on the minimum export needed from their analytics platform before proceeding.

### 2. Identify Decay Signals
For each content piece, evaluate these decay indicators:
- **Traffic drop**: >20% decline in organic sessions or clicks YoY or QoQ
- **Ranking slip**: Target keywords dropped more than 5 positions
- **CTR decline**: Impressions stable but click-through rate falling
- **Engagement drop**: Average time on page decreased >15% or bounce rate increased >10 points
- **Conversion drop**: Page contributes fewer leads, signups, or goal completions than prior period
- **Indexation issues**: Page deindexed, crawl errors, or thin content flags

### 3. Classify Each Piece
Assign one of four decay categories:
- **Refresh**: Strong URL authority, good backlinks, still-relevant topic — update content, stats, examples, and on-page SEO
- **Consolidate**: Multiple thin or overlapping pieces competing for the same keywords — merge into one authoritative page with redirects
- **Redirect**: Outdated topic, superseded by a better page, or low authority — 301 redirect to the most relevant live page
- **Remove**: No traffic, no backlinks, no strategic value, and no merge candidate — deprecate and redirect to category or homepage

### 4. Prioritize the Backlog
Score each piece on a simple 1–3 scale across:
- **Effort to fix** (1 = low, 3 = high)
- **Traffic recovery potential** (3 = high, 1 = low)
- **Strategic importance** (3 = core topic, 1 = tangential)

Sort by highest recovery potential and lowest effort first. Flag any piece with backlinks as high-priority regardless of traffic.

### 5. Generate Recommendations
For each Refresh action, specify:
- Outdated sections to rewrite
- Missing subtopics or keywords to add
- Internal linking opportunities
- Meta title/description updates needed
- Whether a content length increase is warranted

For each Consolidate action, specify:
- Which URL to keep as the canonical destination
- Which URLs to redirect
- Key sections to merge from each source piece

## Output Format

Produce a structured audit report with these sections:

**Summary Block**
- Total pieces audited
- Count per action category (Refresh / Consolidate / Redirect / Remove)
- Estimated traffic at risk (sessions or clicks)

**Prioritized Action Table**
| URL | Current Traffic | Change % | Decay Signal | Action | Priority | Notes |
|-----|----------------|----------|--------------|--------|----------|-------|
One row per content piece, sorted by priority score descending.

**Top 5 Quick Wins**
Bulleted list of the five highest-impact, lowest-effort actions with one-line rationale each.

**Detailed Refresh Briefs** (for top 3 Refresh items only unless user requests more)
For each: current state summary, specific rewrite instructions, target keywords, and success metric to track post
