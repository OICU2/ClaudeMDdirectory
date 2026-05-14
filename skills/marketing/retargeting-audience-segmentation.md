---
name: retargeting-audience-segmentation
category: marketing
description: >
  Segments website visitors and campaign audiences into retargeting buckets based on behavioral signals and funnel stage, then generates tailored ad messaging recommendations for each segment. Use when someone says "help me set up retargeting audiences," asks about "how to segment users for retargeting," wants to "create audience buckets for ad campaigns," needs to "build a retargeting strategy," or is trying to "personalize ads based on user behavior."
tags: [retargeting, audience-segmentation, paid-ads, conversion-optimization, funnel]
author: community
---

# Retargeting Audience Segmentation

This skill analyzes visitor behavior and funnel position to create distinct retargeting segments and produces specific ad messaging recommendations tailored to each segment's intent level and drop-off point.

## Segmentation Workflow

### Step 1: Gather Audience Data Inputs
Ask the user for the following if not already provided:
- Traffic sources (organic, paid, social, email, direct)
- Key pages or events tracked (product pages, pricing, checkout, blog, demo request)
- Funnel stages defined (awareness, consideration, intent, conversion, retention)
- Average session depth and time-on-site benchmarks
- Any existing audience lists or CRM segments

### Step 2: Define Core Behavioral Segments
Build segments using these behavioral rules:

| Segment Name | Behavioral Signal | Funnel Stage |
|---|---|---|
| Cold Site Visitors | Viewed 1–2 pages, <30 sec, no key action | Awareness |
| Content Engagers | Read blog/resources, 2+ min on page, no product view | Awareness–Consideration |
| Product Explorers | Viewed product/service pages, did not reach pricing or checkout | Consideration |
| High-Intent Browsers | Viewed pricing page OR spent 3+ min on product pages | Intent |
| Cart/Form Abandoners | Initiated checkout or form, did not complete | Intent–Conversion |
| Past Converters | Completed purchase or lead form, 30–180 days ago | Retention–Upsell |
| Lapsed Customers | No engagement or purchase in 180+ days | Re-engagement |

Adjust segment thresholds based on the user's specific funnel data if provided.

### Step 3: Map Segments to Messaging Strategy
For each segment, define:
1. **Core pain point or objection** at that stage
2. **Primary message angle** (education, social proof, urgency, incentive, loyalty)
3. **Call-to-action** appropriate to funnel depth
4. **Ad format recommendations** (display, video, dynamic, carousel, native)

### Step 4: Generate Messaging Recommendations
Write 2–3 specific ad copy directions per segment including:
- Headline angle (value, fear-of-missing-out, curiosity, reassurance)
- Body copy focus (1–2 sentences describing the message theme)
- CTA text recommendation
- Exclusion rules (which segments to suppress from each ad set)

### Step 5: Recommend Audience Window and Budget Weighting
- Suggest lookback windows (7-day, 14-day, 30-day, 90-day) per segment
- Flag which segments warrant higher CPM bids based on intent proximity to conversion
- Note segment size minimums for platform requirements (e.g., 1,000 users for Meta, 1,000 cookies for Google)

## Output Format

Produce a structured segmentation report with the following sections:

---

**RETARGETING AUDIENCE SEGMENTATION PLAN**

**Segment Summary Table**
A markdown table listing: Segment Name | Behavioral Trigger | Funnel Stage | Estimated Audience Size (if data provided) | Lookback Window | Bid Priority (High/Medium/Low)

**Per-Segment Messaging Brief** (repeat block for each segment)

- **Segment:** [Name]
- **Who they are:** [1-sentence behavioral description]
- **Core objection/need:** [What's stopping them from converting]
- **Message angle:** [Primary creative strategy]
- **Ad copy directions:**
  - Option A: Headline / Body focus / CTA
  - Option B: Headline / Body focus / CTA
- **Recommended formats:** [e.g., carousel, single image, video]
- **
