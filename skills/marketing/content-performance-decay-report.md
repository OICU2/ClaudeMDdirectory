---
name: content-performance-decay-report
description: >
  Analyzes published content assets to identify pieces experiencing significant drops in traffic, engagement, or conversions over time, then recommends whether each should be refreshed or retired. Use when someone says their content is underperforming, asks which blog posts or articles are losing traffic, wants to audit their content library for decay, needs to prioritize content updates, or is trying to identify stale content dragging down SEO performance.
category: marketing
tags: [content-audit, seo, content-decay, traffic-analysis, content-strategy]
author: community
---

# Content Performance Decay Report

This skill audits a content library to surface pieces with declining performance metrics and produces a prioritized action plan for refresh or retirement decisions.

## Workflow

### 1. Gather Input Data
Request the following from the user if not already provided:
- Content inventory (URLs, titles, publish dates)
- Traffic data: pageviews over at least two comparable time periods (e.g., last 90 days vs. prior 90 days)
- Engagement metrics: time on page, bounce rate, scroll depth, social shares
- Conversion metrics: leads, clicks, form fills (if available)
- Current SERP rankings for target keywords (optional but valuable)

### 2. Define Decay Thresholds
Apply these default thresholds unless the user specifies otherwise:
- **Severe decay**: >40% traffic drop period-over-period
- **Moderate decay**: 20–40% traffic drop
- **Mild decay**: 10–19% traffic drop
- **Engagement decay**: Bounce rate increase >15 points OR time-on-page drop >25%
- **Conversion decay**: Conversion rate drop >30% with stable traffic

### 3. Score and Classify Each Content Piece
For each decaying piece, assign a Decay Severity Score (1–10) combining:
- Magnitude of traffic decline (weighted 40%)
- Engagement signal degradation (weighted 30%)
- Conversion impact (weighted 20%)
- Content age and freshness risk (weighted 10%)

Then classify into one of three buckets:
- **Refresh**: High decay score but the topic remains relevant; content has backlinks or historical authority worth preserving
- **Consolidate**: Multiple underperforming pieces covering the same topic; merge into one authoritative asset
- **Retire**: Topic is obsolete, content has no backlinks, or traffic was always negligible

### 4. Diagnose Root Cause
For each flagged piece, identify the most likely decay driver:
- Keyword ranking loss (algorithm update, new competitors)
- Content staleness (outdated statistics, broken links, deprecated products)
- SERP feature displacement (featured snippets, AI overviews)
- Seasonal demand shift
- Internal cannibalization by a newer page
- Original traffic source dried up (social campaign ended, referral link removed)

### 5. Prioritize the Action List
Rank refresh and consolidation candidates by estimated recovery value:
- High priority: Pages with strong backlink profiles, high historical traffic, or direct revenue attribution
- Medium priority: Pages with moderate authority and salvageable content
- Low priority: Pages with thin content and no backlinks — retire unless strategically important

## Output Format

Produce a structured report with the following sections:

---

**Executive Summary**
- Total content pieces reviewed
- Number flagged for decay (broken out by severity tier)
- Estimated aggregate traffic loss over the analysis period
- Top 3 recommended immediate actions

---

**Decay Report Table**
A table with columns:
| URL / Title | Publish Date | Traffic Change | Engagement Change | Decay Score | Classification | Root Cause | Recommended Action |

List entries sorted by Decay Score descending.

---

**Refresh Briefs** *(for top 5 highest-priority refresh candidates)*
For each:
- Current issues summary (2–3 bullets)
- Specific updates needed (outdated sections, missing subtopics, new keywords to target)
- Estimated effort: Low / Medium / High
- Success metric to track post-refresh

---

**Retire List**
Simple list of URLs recommended for retirement with one-line justification each. Note whether a 301 redirect is needed and suggested redirect destination.

---

**Strategic Observations**
2–4 bullets identifying patterns across the decaying content (e.g., a particular content type, topic cluster, or publication era consistently
