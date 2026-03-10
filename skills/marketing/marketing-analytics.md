---
name: marketing-analytics
description: >
  Tracks, measures, and interprets marketing performance data to drive strategic decisions. Use when someone says "analyze my marketing performance," asks about campaign ROI, wants to understand their conversion funnel, needs to interpret traffic or engagement metrics, or is trying to figure out which marketing channels are working.
category: marketing
tags: [analytics, metrics, campaigns, ROI, data]
author: community
---

# Marketing Analytics

This skill analyzes marketing data to surface actionable insights, identify what's working or failing, and recommend data-driven decisions across channels and campaigns.

## Analytics Workflow

1. **Clarify the data context** — Identify what metrics are available (traffic, conversions, spend, revenue, engagement), the time period, and the channel(s) in scope before proceeding.

2. **Establish the business goal** — Determine whether the focus is acquisition, retention, revenue, brand awareness, or a specific campaign outcome. Frame all analysis around that goal.

3. **Calculate core KPIs** — Depending on context, compute relevant metrics:
   - **ROI / ROAS**: `(Revenue - Cost) / Cost × 100` or `Revenue / Ad Spend`
   - **CAC**: `Total Marketing Spend / New Customers Acquired`
   - **LTV:CAC ratio**: Flag if below 3:1 as a warning sign
   - **Conversion rate**: `Conversions / Visitors × 100`
   - **CTR**: `Clicks / Impressions × 100`
   - **Churn / retention rate** for lifecycle contexts

4. **Identify trends and anomalies** — Compare current period to prior period and year-over-year if data allows. Flag drops >15% or spikes >30% as significant. Look for inflection points.

5. **Diagnose funnel drop-offs** — Map the funnel stages (Awareness → Interest → Consideration → Conversion → Retention). Pinpoint where the largest percentage loss occurs and name the probable cause.

6. **Benchmark performance** — Apply industry-standard benchmarks where user data is limited:
   - Email open rate: 20–25% average
   - E-commerce conversion rate: 2–4%
   - Google Ads CTR: 3–5%
   - Social organic reach: 1–5%

7. **Rank channels by efficiency** — Compare channels by CAC, conversion rate, and contribution to revenue. Flag underperforming channels consuming >20% of budget with below-average returns.

8. **Generate recommendations** — For each finding, provide one specific action: what to test, cut, scale, or investigate. Avoid vague advice like "improve content."

## Output Format

Produce a structured report with these sections:

**Summary** (2–3 sentences): The single most important finding and its business implication.

**KPI Snapshot** (table or bullet list):
- Each metric with its value, benchmark comparison, and a status tag: ✅ On Track / ⚠️ Watch / 🔴 Action Needed

**Top 3 Findings**: Numbered, each with a one-line insight and one-line supporting data point.

**Funnel Analysis**: Brief narrative identifying the biggest drop-off stage and likely cause.

**Channel Performance**: Ranked list of channels with efficiency verdict (Scale / Maintain / Cut / Test).

**Recommended Actions** (max 5): Specific, prioritized next steps. Each must name a metric it will impact.

Keep the full report under 600 words unless the user provides extensive raw data requiring deeper breakdown.