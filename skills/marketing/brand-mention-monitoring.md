---
name: brand-mention-monitoring
description: >
  Tracks and compiles brand mentions across social media, forums, and news sources to surface sentiment trends and engagement opportunities. Use when someone says "monitor my brand online," asks about "what people are saying about us," or wants to "track brand mentions," "find customer sentiment," or "identify engagement opportunities" across digital channels.
category: marketing
tags: [brand-monitoring, sentiment-analysis, social-listening, reputation-management, competitive-intelligence]
author: community
---

# Brand Mention Monitoring

This skill scans and organizes brand mentions across digital platforms, classifies sentiment, and surfaces actionable engagement opportunities whenever a user needs to understand their brand's online presence.

## Monitoring Workflow

1. **Define the monitoring scope**
   - Confirm the brand name, product names, key executives, and any common misspellings or abbreviations to track
   - Identify competitor names if competitive benchmarking is needed
   - Establish the time window (last 24 hours, 7 days, 30 days, or custom range)

2. **Identify source categories**
   - Social media: Twitter/X, LinkedIn, Instagram, Facebook, TikTok, Reddit
   - Forums and communities: Reddit threads, Quora, niche industry forums
   - News and editorial: Google News, press releases, blog posts, industry publications
   - Review platforms: G2, Trustpilot, Yelp, App Store, Google Reviews

3. **Classify each mention by sentiment**
   - **Positive**: praise, recommendations, success stories, organic advocacy
   - **Negative**: complaints, criticism, escalating issues, churn signals
   - **Neutral**: factual references, news citations, passing mentions
   - **Ambiguous**: mixed signals requiring human review

4. **Flag priority mentions**
   - Negative mentions with high engagement (shares, replies, upvotes)
   - Verified accounts or journalists referencing the brand
   - Unresolved customer complaints older than 24 hours
   - Viral or trending content involving the brand

5. **Identify engagement opportunities**
   - Questions the brand can answer authoritatively
   - Positive advocates worth amplifying or rewarding
   - Feature requests or product feedback worth routing to product teams
   - Neutral influencers who could become partners

6. **Aggregate sentiment trends**
   - Calculate sentiment distribution (% positive / negative / neutral) for the period
   - Compare to previous period if baseline data is available
   - Note any sudden spikes or drops tied to specific events or campaigns

## Output Format

Produce a structured **Brand Mention Report** with the following sections:

---

**Brand Mention Report — [Brand Name] | [Date Range]**

**Summary**
- Total mentions: [N]
- Sentiment breakdown: [X]% positive / [Y]% negative / [Z]% neutral
- Period-over-period change: [↑/↓ X%] vs. [previous period]
- Top platforms by volume: [ranked list]

**Priority Mentions** *(requires immediate action)*
| Platform | Author/Source | Mention Summary | Sentiment | Engagement | Recommended Action |
|----------|--------------|-----------------|-----------|------------|-------------------|
| ...      | ...          | ...             | ...       | ...        | ...               |

**Engagement Opportunities**
- [Bulleted list of specific mentions worth responding to, with suggested action per item]

**Sentiment Trend Insights**
- [2–4 bullets identifying patterns, anomalies, or themes driving sentiment shifts]

**Top Positive Mentions**
- [3–5 highlights with source, author, and brief quote or summary]

**Top Negative Mentions**
- [3–5 highlights with source, author, summary, and urgency level]

**Recommended Next Steps**
1. [Prioritized action item]
2. [Prioritized action item]
3. [Prioritized action item]

---

Keep each mention summary under 25 words. Flag any mention requiring a response within 2 hours in **bold red** language. Deliver the full report in a single response unless the dataset exceeds 50 mentions, in which case paginate by platform.
