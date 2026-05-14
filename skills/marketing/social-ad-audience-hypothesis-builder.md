---
name: social-ad-audience-hypothesis-builder
category: marketing
description: >
  Builds structured audience targeting hypotheses for paid social campaigns by layering demographic, psychographic, and behavioral signals into testable segments. Use when someone says "help me find my audience for ads," asks about who to target on Facebook or Instagram, wants to build a targeting strategy for a paid social campaign, needs to identify audience segments for a new product launch, or is trying to figure out which customer profiles to test first.
tags: [paid-social, audience-targeting, facebook-ads, instagram-ads, campaign-strategy]
author: community
---

# Social Ad Audience Hypothesis Builder

This skill generates structured, testable audience targeting hypotheses for paid social campaigns by combining demographic, psychographic, and behavioral data into prioritized segments Claude can use immediately.

## Audience Hypothesis Workflow

### Step 1: Extract Product and Customer Context
Ask for or identify the following if not provided:
- Product or service being advertised
- Price point and purchase complexity (impulse vs. considered)
- Current best customers (if known) — demographics, job titles, or behaviors
- Geography and language targeting constraints
- Platform(s): Meta, TikTok, LinkedIn, Pinterest, Snapchat, X

### Step 2: Identify the Signal Stack
For each potential audience segment, define signals across three layers:

**Demographic signals**
- Age range (be specific: 28–44, not "adults")
- Gender (if relevant and justifiable)
- Location (country, region, city radius)
- Income bracket or household composition (if available on platform)
- Life stage (new parents, recent graduates, homeowners)

**Psychographic signals**
- Values and beliefs (sustainability-minded, status-driven, value-seeking)
- Pain points and motivations tied to the product category
- Media consumption habits and content affinities
- Self-identity markers (how they describe themselves)

**Behavioral signals**
- In-platform interests and followed pages/accounts
- Purchase behavior categories (frequent online buyers, luxury shoppers)
- Engagement patterns (engages with video, responds to UGC)
- Retargeting status: cold, warm (site visitor), or hot (cart abandoner)

### Step 3: Build Hypothesis Statements
Format each audience as a falsifiable hypothesis:

> "We believe [audience descriptor] will convert at a higher rate because [specific reason tied to product-market fit], and we will know this works if [measurable outcome: CTR > X%, CPA < $Y, ROAS > Z]."

Generate 3–5 distinct hypotheses, ordered by confidence level (high → low).

### Step 4: Assign Prioritization Score
Rate each hypothesis on three factors (1–5 scale):
- **Reach potential**: Is this audience large enough to generate meaningful data?
- **Signal strength**: How precisely can this audience be targeted on the platform?
- **Business fit**: How well does this segment align with the brand's ideal customer profile?

Total score out of 15. Recommend testing the top 2–3 first.

### Step 5: Flag Exclusions and Overlaps
- List audiences to exclude from each segment (e.g., existing customers, competitor employees)
- Identify where segments may overlap and recommend de-duplication strategy
- Note any platform-specific limitations (e.g., Meta's restricted categories for housing, credit, employment)

---

## Output Format

Produce a structured document with the following sections:

**Campaign Brief Summary** (2–3 sentences restating the product, goal, and platform)

**Audience Hypothesis Table**
| # | Segment Name | Demographic | Psychographic | Behavioral | Hypothesis Statement | Priority Score |
|---|---|---|---|---|---|---|

**Top Testing Recommendation** (1 short paragraph naming the 2–3 segments to activate first and why)

**Exclusion and Overlap Notes** (bullet list)

**Next Steps** (3 bullets: suggested ad creative angles matched to each top segment, recommended budget split for testing, and one measurement milestone to validate or kill each hypothesis)

Total length: 400–700 words depending on number of segments. Use tables and bullets throughout. Avoid paragraph-heavy prose.
