---
name: promotional-email-timing-model
description: >
  Analyzes historical campaign send and open data to recommend optimal send timing for email campaigns.
  Use when someone asks "when should I send this email campaign," wants to improve open rates by timing,
  needs to find the best day and time to reach a specific audience segment, is trying to optimize a
  promotional send schedule, or asks about send time optimization for different offer types.
category: marketing
tags: [email-marketing, send-time-optimization, campaign-analytics, segmentation, open-rates]
author: community
---

# Promotional Email Timing Model

This skill analyzes campaign send and open data to produce segment-specific, offer-type-specific timing recommendations that maximize open and click-through rates.

## Analysis Workflow

### 1. Gather Input Data
Request the following from the user if not already provided:
- Historical send logs: send timestamp, segment/list, offer type, subject line
- Engagement metrics: open rate, click rate, conversion rate per send
- Audience segments (e.g., VIP, lapsed, new subscriber, geographic region)
- Offer types in scope (e.g., flash sale, loyalty reward, seasonal promo, product launch)
- Campaign cadence (frequency per week/month)

### 2. Structure the Data
Organize available data across three dimensions:
- **Segment** — who received the email
- **Day of week** — Monday through Sunday
- **Time block** — Early Morning (5–8am), Morning (8–11am), Midday (11am–1pm), Afternoon (1–4pm), Evening (4–8pm), Night (8pm+), all in recipient local time

### 3. Calculate Performance Benchmarks
For each intersection of segment × day × time block:
- Average open rate
- Average click-to-open rate (CTOR)
- Average conversion rate (if available)
- Sample size (flag cells with fewer than 200 sends as low-confidence)

For each offer type, identify which timing windows outperform the overall list average by ≥10%.

### 4. Identify Timing Patterns
Apply these rules to surface recommendations:
- **Primary window**: Highest open rate with sample size ≥ 200
- **Secondary window**: Second-best open rate, must be on a different day than primary
- **Avoid windows**: Any day/time combination with open rate more than 15% below segment average
- **Offer-type modifiers**: Note if flash sales perform differently from loyalty offers (urgency-driven offers often peak in morning windows; considered purchases peak midday/afternoon)
- **Day-of-week fatigue**: Flag if a segment is being over-sent on a single day (>40% of sends on one day)

### 5. Cross-Segment Comparison
- Identify whether VIP/high-engagement segments differ meaningfully from lapsed or cold segments
- Note if geographic spread requires time zone splitting
- Flag any segments where no single time block outperforms baseline (inconclusive — recommend A/B test)

### 6. Produce Recommendations
For each segment and offer type combination, output a ranked send schedule with rationale.

---

## Output Format

Produce a structured report with the following sections:

**1. Summary Table**
A markdown table with columns: Segment | Offer Type | Recommended Day | Recommended Time Block | Expected Open Rate | Confidence (High/Medium/Low)

**2. Segment-by-Segment Breakdown**
For each segment (3–6 bullet points each):
- Best day + time window and why (cite open rate delta vs. baseline)
- Worst day + time window to avoid
- Offer-type timing notes (does timing differ for flash vs. loyalty?)
- Any data gaps or low-confidence findings

**3. Offer-Type Timing Patterns**
Short paragraph (3–5 sentences) per offer type explaining timing behavior and any cross-segment consistency.

**4. Recommended Send Calendar**
A sample 4-week send schedule in plain text or table format showing segment, day, time, and offer type aligned to recommendations.

**5. Testing Recommendations**
Bulleted list of 2–4 A/B tests to run next, with hypothesis, variable, and success metric for each.

Total length: 400–800 words depending on number of segments. Use markdown tables and headers. No prose filler — every sentence must contain an actionable insight or data point
