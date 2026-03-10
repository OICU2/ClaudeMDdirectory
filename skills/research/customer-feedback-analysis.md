---
name: customer-feedback-analysis
description: >
  Analyzes customer feedback to surface recurring patterns, critical pain points, and actionable opportunities. Use when someone says "analyze this feedback," asks to "find patterns in customer reviews," wants to "understand what customers are complaining about," needs to "prioritize product improvements from feedback," or asks to "summarize customer sentiment."
category: research
tags: [customer-feedback, sentiment-analysis, product-research, ux-research, data-analysis]
author: community
---

# Customer Feedback Analysis

This skill systematically processes customer feedback data to extract themes, pain points, and opportunities, producing structured insights that drive product and business decisions.

## Analysis Workflow

1. **Ingest and scope the data** — Identify the feedback source (reviews, surveys, support tickets, interviews), volume, time range, and product/service context before analyzing.

2. **Categorize feedback by type** — Sort entries into: Feature Requests, Bug Reports / Defects, UX / Usability Issues, Pricing / Value Concerns, Customer Support Experiences, and Positive Reinforcement.

3. **Extract recurring themes** — Group semantically similar feedback into named themes. A theme requires at least 2 independent mentions to qualify. Label each theme with a short descriptive title (e.g., "Slow load times on mobile").

4. **Score themes by impact** — For each theme, estimate: (a) frequency (how often it appears as % of total feedback), (b) sentiment intensity (1–5 scale, 5 = most negative/urgent), and (c) affected user segment if determinable.

5. **Identify pain points vs. opportunities** — Distinguish between pain points (existing problems causing friction or churn) and opportunities (unmet needs or desired features that could drive growth).

6. **Surface quick wins** — Flag any issues mentioned frequently that appear low-effort to resolve based on context clues in the feedback.

7. **Note data gaps** — Identify what the feedback does NOT cover that would be valuable to collect (e.g., no feedback from mobile users, no post-cancellation responses).

## Output Format

Produce a structured report with these sections:

**Summary** (3–5 sentences): Overall sentiment trend, total feedback items analyzed, top 3 takeaways.

**Top Themes Table**:
| Theme | Category | Frequency | Severity (1–5) | Example Quote |
|-------|----------|-----------|----------------|---------------|
| ...   | ...      | ...%      | ...            | "..."         |

**Pain Points** (bulleted list, ranked by frequency × severity):
- [Theme name]: [1-sentence description] — [recommended action]

**Opportunities** (bulleted list, ranked by potential impact):
- [Opportunity name]: [1-sentence description] — [suggested next step]

**Quick Wins** (bulleted list): Issues to address immediately with low effort.

**Data Gaps & Recommendations**: 2–4 bullet points on missing signal and how to collect it.

Keep the full report under 600 words unless the dataset is large (50+ distinct themes). Use direct language — no hedging.