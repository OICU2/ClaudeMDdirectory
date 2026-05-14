---
name: organic-post-best-time-analysis
description: >
  Analyzes historical social media engagement data to identify the optimal posting times for each platform and audience segment. Use when someone asks "when should I post on social media," wants to know the best time to reach their audience, needs to improve organic reach, is trying to schedule content more strategically, or asks why their posts aren't getting engagement.
category: marketing
tags: [social-media, engagement, analytics, content-scheduling, organic-growth]
author: community
---

# Organic Post Best Time Analysis

This skill analyzes engagement patterns across social media platforms to surface data-backed optimal posting windows for specific audiences, and Claude will apply it whenever a user wants to maximize organic content reach through smarter scheduling.

## Analysis Workflow

1. **Gather platform and data inputs**
   - Ask which platforms are in scope (Instagram, LinkedIn, X/Twitter, Facebook, TikTok, Pinterest, etc.)
   - Request available data sources: native analytics exports, third-party tool reports (Sprout Social, Hootsuite, Buffer), or manual engagement logs
   - Identify the audience segments if multiple exist (e.g., B2B buyers vs. consumers, regional audiences, age cohorts)
   - If no historical data is available, note this and proceed to benchmark-based recommendations

2. **Parse and segment engagement data**
   - Extract or accept: post timestamps, engagement metrics (likes, comments, shares, saves, clicks, reach)
   - Group posts by: day of week, hour of day, content type (video, image, carousel, text), and platform
   - Flag outliers caused by paid amplification, viral events, or campaigns that would skew organic baselines

3. **Calculate engagement rate by time slot**
   - Compute engagement rate per post = (total engagements / reach or impressions) × 100
   - Aggregate average engagement rate for each hour × day combination per platform
   - Identify top 3–5 time windows per platform ranked by average engagement rate
   - Note sample size per time slot — flag slots with fewer than 10 posts as low-confidence

4. **Layer in audience behavior context**
   - Cross-reference top windows against known audience timezone distribution
   - Factor in platform algorithm behavior (e.g., LinkedIn prioritizes early engagement velocity; Instagram Reels reward first-hour watch time)
   - Note competitive posting saturation if mentioned (posting when fewer competitors are active can boost reach)

5. **Generate platform-specific recommendations**
   - Produce a ranked schedule of optimal windows per platform
   - Distinguish between weekday and weekend patterns if data supports it
   - Flag content-type-specific findings (e.g., video performs best at 7–9 PM but carousels peak at noon)

6. **Handle no-data scenarios**
   - If user has no historical data, apply industry benchmarks per platform with explicit caveats
   - Recommend a 4–6 week testing cadence: post at 3 different time slots per week, track results, return to refine

## Output Format

Produce a structured report with the following sections:

**Platform: [Name]**
- ✅ Top posting windows (ranked 1–3): Day, time range, timezone, avg. engagement rate or confidence level
- ⚠️ Windows to avoid: lowest-performing slots with brief reason
- 📊 Content-type note: if video/image/text shows different peaks, call it out
- 🔁 Retest recommendation: when to re-analyze (e.g., quarterly, or after audience growth of 20%+)

Close with a **Quick-Start Schedule** — a single weekly posting calendar table showing recommended slots across all platforms, formatted as:

| Day       | Platform   | Time (User's TZ) | Content Type |
|-----------|------------|------------------|--------------|
| Monday    | LinkedIn   | 8:00–9:00 AM     | Text/Article |

Keep the full report under 600 words. Use plain language. No jargon unless the user's input suggests familiarity with analytics terminology.
