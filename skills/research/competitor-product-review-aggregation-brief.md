---
name: competitor-product-review-aggregation-brief
description: >
  Synthesizes recurring themes from competitor product reviews across multiple platforms into a structured competitive insight report. Use when someone says "analyze competitor reviews," asks to "summarize what customers say about [competitor]," wants to "find patterns in competitor feedback," needs to "benchmark our product against competitor reviews," or asks to "aggregate review insights for competitive research."
category: research
tags: [competitive-intelligence, review-analysis, market-research, product-strategy, customer-insights]
author: community
---

# Competitor Product Review Aggregation Brief

This skill collects, categorizes, and synthesizes competitor product review data into a structured insight brief that surfaces actionable competitive intelligence from customer sentiment patterns.

## Workflow

1. **Identify competitors and scope**
   - Confirm which competitor products to analyze (1–5 products recommended)
   - Clarify platforms to pull from: Amazon, G2, Trustpilot, Capterra, Reddit, App Store, Google Play, Yelp, or user-provided review excerpts
   - Establish the product category and the user's own product context if relevant

2. **Collect or request review data**
   - If the user provides raw reviews, ingest them directly
   - If no data is provided, prompt the user to paste reviews or specify sources; do not fabricate review content
   - Aim for a minimum of 20–30 reviews per competitor for meaningful pattern detection

3. **Categorize feedback by theme**
   - Group reviews into recurring themes using these standard buckets:
     - **Usability / UX** — ease of use, learning curve, interface quality
     - **Performance / Reliability** — speed, uptime, bugs, crashes
     - **Feature Set** — what customers love, what they wish existed
     - **Pricing / Value** — cost complaints, perceived ROI, pricing model friction
     - **Support / Service** — responsiveness, quality of help, documentation
     - **Onboarding / Setup** — installation, integration, time-to-value
     - **Sentiment Outliers** — unusually strong praise or severe complaints
   - Flag any theme that appears in more than 20% of reviews as a "dominant signal"

4. **Identify competitive gaps and opportunities**
   - Note features or qualities that reviewers frequently praise (competitor strengths to be aware of)
   - Note pain points reviewers consistently mention (potential gaps your product could address)
   - Cross-reference themes across competitors to identify industry-wide frustrations vs. competitor-specific issues

5. **Assign sentiment weighting**
   - Label each theme: Positive / Negative / Mixed
   - Note approximate frequency (e.g., "mentioned in ~40% of reviews")
   - Highlight the 2–3 most emotionally charged pain points (highest negative intensity)

6. **Draft the brief**
   - Follow the output format below exactly
   - Use direct, plain language — write for a product manager or strategist, not an academic

## Output Format

Produce a structured markdown brief with the following sections:

---

**Competitor Product Review Aggregation Brief**
*Competitors Analyzed:* [List]
*Platforms Sourced:* [List]
*Total Reviews Reviewed:* [Number or estimate]
*Date of Analysis:* [Today's date]

---

### Executive Summary
2–4 sentences capturing the most important competitive insight from the review data.

---

### Dominant Themes by Competitor

For each competitor, provide a table:

| Theme | Sentiment | Frequency | Representative Quote |
|---|---|---|---|
| [Theme name] | Positive/Negative/Mixed | ~X% of reviews | "[Short verbatim or paraphrased quote]" |

Repeat for each competitor.

---

### Cross-Competitor Patterns
- Bullet list of themes that appear across 2+ competitors
- Distinguish between "industry-wide frustration" and "shared weakness"

---

### Competitive Gaps & Opportunities
- **Gap 1:** [What competitors fail to deliver + evidence]
- **Gap 2:** [What competitors fail to deliver + evidence]
- *(List up to 5)*

---

### Competitor Strengths to Acknowledge
- Bullet list of things competitors do well that appear in positive reviews — be honest and specific

---

### Recommended Focus Areas
3–5 prioritized action items or strategic implications based on the review data, written as direct recommendations
