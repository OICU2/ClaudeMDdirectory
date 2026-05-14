---
name: customer-review-platform-gap-analysis
description: >
  Identifies review platforms where a brand has low presence or negative sentiment relative to competitors, then produces a prioritized review acquisition plan. Use when someone says "our reviews are weak compared to competitors," asks about which review sites they should focus on, or wants to understand where they're losing customers to better-reviewed rivals. Also triggers when someone mentions improving online reputation, closing review gaps, or boosting star ratings on specific platforms.
category: marketing
tags: [reviews, reputation-management, competitive-analysis, local-seo, customer-feedback]
author: community
---

# Customer Review Platform Gap Analysis

This skill audits a brand's review presence across major platforms, compares it against competitors, and delivers a ranked action plan to close sentiment and volume gaps.

## Analysis Workflow

### 1. Gather Inputs
Ask the user for:
- Brand name and primary product/service category
- Top 3–5 competitors (by name or "find similar brands")
- Geographic focus (local, national, global)
- Any platforms already known to be problematic
- Current average star ratings if known

### 2. Identify Relevant Platforms
Select platforms appropriate to the business type:

**Universal:** Google Business Profile, Trustpilot, Better Business Bureau
**E-commerce:** Amazon, Walmart Marketplace, Shopify reviews, ResellerRatings
**Local/Service:** Yelp, Angi, HomeAdvisor, Thumbtack, Houzz
**B2B/SaaS:** G2, Capterra, GetApp, Gartner Peer Insights, TrustRadius
**Hospitality:** TripAdvisor, Booking.com, Expedia, OpenTable
**Healthcare:** Healthgrades, Zocdoc, RateMDs
**App-based:** App Store, Google Play

### 3. Conduct Gap Assessment
For each platform, evaluate across four dimensions:

| Dimension | What to Assess |
|---|---|
| Volume Gap | Competitor review count vs. brand review count |
| Recency Gap | Date of most recent reviews (stale = penalty on most algorithms) |
| Sentiment Gap | Average star rating delta vs. competitors |
| Presence Gap | Brand has zero or unclaimed listing while competitors are active |

Flag as **Critical** if: brand rating is ≥0.5 stars below top competitor OR brand has fewer than 25% of competitor review volume.
Flag as **Moderate** if: brand rating is 0.2–0.49 stars below OR volume is 25–60% of competitor volume.
Flag as **Healthy** if: brand is within 0.2 stars and 60%+ of competitor volume.

### 4. Identify Root Causes
For each Critical or Moderate platform, diagnose likely cause:
- No post-purchase review request sequence
- Negative review cluster from a specific time period or product issue
- Unclaimed or incomplete listing reducing discoverability
- Platform algorithm suppression due to review velocity spikes
- Wrong audience (platform doesn't match customer demographic)

### 5. Build Prioritized Action Plan
Rank platforms using this scoring matrix (1–5 each):
- **Traffic impact**: How much this platform influences purchase decisions in this category
- **Gap severity**: Size of the competitive disadvantage
- **Ease of improvement**: How quickly review volume/sentiment can realistically move
- **SEO/SERP impact**: Whether this platform's reviews surface in branded search results

Sort platforms by combined score (highest = tackle first). Drop platforms scoring below 8/15 total — not worth the investment.

### 6. Generate Recommendations Per Platform
For each prioritized platform provide:
- Specific ask: who to ask, when, through which channel (email, SMS, in-app, receipt)
- Review request message template (2–3 sentences, non-incentivized language)
- Response strategy for existing negative reviews
- Timeline to see meaningful movement (typically 60–120 days)

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 bullets)
- Overall competitive review health score
- Number of Critical/Moderate/Healthy platforms
- Single most urgent platform to address
- Estimated timeline to close the largest gap

**Platform Gap Table**
Markdown table with columns: Platform | Brand Rating | Brand Volume | Top Competitor Rating | Top Competitor Volume | Gap Status | Priority Score

**Top 3
