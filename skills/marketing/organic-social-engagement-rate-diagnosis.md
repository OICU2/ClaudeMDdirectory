---
name: organic-social-engagement-rate-diagnosis
description: >
  Analyzes organic social media post performance data to identify which content formats, topics,
  and posting patterns drive above-average engagement rates by platform. Use when someone says
  "my engagement is dropping," asks about why certain posts perform better than others, wants to
  understand what content resonates with their audience, is trying to improve their organic reach,
  or needs to diagnose low engagement on social media.
category: marketing
tags: [social-media, engagement, analytics, content-strategy, organic-reach]
author: community
---

# Organic Social Engagement Rate Diagnosis

This skill diagnoses organic social media performance by analyzing post data to surface actionable patterns in content format, topic, timing, and audience behavior that explain above- or below-average engagement rates.

## Diagnosis Workflow

### 1. Gather Performance Data
Ask the user to provide or paste their post performance data. Minimum required fields:
- Platform (Instagram, LinkedIn, X/Twitter, Facebook, TikTok, etc.)
- Post date and time
- Content format (video, image, carousel, text, reel, story, etc.)
- Topic or content category
- Engagement metrics (likes, comments, shares, saves, clicks)
- Reach or impressions

If data is missing, ask specifically for it before proceeding. Do not guess at missing values.

### 2. Calculate Baseline Engagement Rate
For each platform separately, calculate:
- **Engagement Rate (ER)** = (Total Engagements / Reach or Impressions) × 100
- Establish the **account average ER** across all posts provided
- Flag posts that are >20% above or below the account average as outliers

Use platform-appropriate benchmarks as context (not as the primary standard):
- Instagram: 1–3% average ER by reach
- LinkedIn: 2–5% average ER by impressions
- X/Twitter: 0.5–1% average ER by impressions
- Facebook: 0.5–1% average ER by reach
- TikTok: 4–8% average ER by views

### 3. Segment and Compare
Break down post performance across these dimensions:

**Format Analysis**
- Group posts by format (video, image, carousel, text-only, etc.)
- Calculate average ER per format
- Rank formats from highest to lowest performing

**Topic/Content Category Analysis**
- Group posts by topic or content theme
- Calculate average ER per topic
- Identify top 3 and bottom 3 performing topics

**Timing Analysis**
- Group posts by day of week and hour posted
- Calculate average ER per time slot
- Identify the 3 highest-engagement time windows

**Post Length/Caption Analysis** (if data available)
- Short vs. long captions
- Posts with CTAs vs. without
- Posts with hashtags vs. without

### 4. Identify Patterns
Look for compounding patterns — combinations that outperform any single variable:
- Best-performing format + topic combinations
- Time slots where a specific format outperforms
- Seasonal or recency trends if date range spans 60+ days

Flag any anomalies: posts that broke the pattern in either direction and hypothesize why (viral moment, external event, paid boost misreported as organic).

### 5. Generate Recommendations
Produce 3–5 specific, ranked recommendations based on the data. Each recommendation must:
- Reference the specific data pattern that supports it
- Name the exact format, topic, or time slot to prioritize or avoid
- Estimate the potential ER improvement based on the gap between current and top-performing segments

## Output Format

Produce a structured diagnosis report with these exact sections:

---

**Platform:** [Name]
**Posts Analyzed:** [N]
**Date Range:** [start – end]
**Account Average Engagement Rate:** [X%]

---

### Engagement Rate by Format
| Format | Posts | Avg ER | vs. Account Avg |
|--------|-------|--------|-----------------|
| ...    | ...   | ...    | ...             |

### Engagement Rate by Topic
| Topic | Posts | Avg ER | vs. Account Avg |
|-------|-------|--------|-----------------|
| ...   | ...   | ...    | ...             |

### Top Posting Windows
| Day | Time | Avg ER |
|-----|------|--------|
