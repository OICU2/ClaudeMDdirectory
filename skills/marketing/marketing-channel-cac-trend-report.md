---
name: marketing-channel-cac-trend-report
description: >
  Analyzes customer acquisition cost trends across marketing channels over rolling time periods to surface efficiency changes and value mismatches. Use when someone asks about CAC by channel, wants to know which channels are getting more expensive, needs to identify where acquisition costs are outpacing conversion value, or says something like "show me CAC trends" or "which channels are bleeding budget." Also activates when someone wants to audit marketing spend efficiency or compare channel ROI over time.
category: marketing
tags: [cac, customer-acquisition, channel-analytics, marketing-efficiency, trend-analysis]
author: community
---

# Marketing Channel CAC Trend Report

Generates a rolling CAC trend report by channel, flags channels where acquisition costs are rising faster than conversion value, and surfaces actionable efficiency insights.

## Analysis Workflow

1. **Collect inputs** — Ask for: channel list (paid search, social, email, affiliate, etc.), time range (default: last 12 months), rolling window size (default: 4 weeks or 3 months), spend data per channel per period, and conversion/revenue data per channel per period.

2. **Calculate CAC per channel per period** — For each channel and time period: `CAC = Total Spend / Number of New Customers Acquired`. If customer counts are unavailable, use leads × average conversion rate.

3. **Calculate conversion value per channel per period** — Use provided LTV, AOV, or revenue-per-conversion. If LTV is unavailable, use first-order revenue as a proxy and flag this assumption explicitly.

4. **Compute CAC-to-value ratio** — `Ratio = CAC / Conversion Value`. A ratio above 1.0 means the channel is spending more to acquire than it earns. Flag any channel where this ratio exceeds 0.5 as a watch item and above 1.0 as critical.

5. **Calculate period-over-period CAC change** — For each channel, compute: absolute CAC change, percentage change, and 3-period moving average to smooth noise. Identify the trend direction (improving, stable, deteriorating).

6. **Flag problem channels** — Apply these rules:
   - **Red flag**: CAC increased >20% over the rolling window AND CAC-to-value ratio > 0.8
   - **Yellow flag**: CAC increased 10–20% OR CAC-to-value ratio between 0.5–0.8
   - **Green**: CAC stable or declining AND ratio below 0.5

7. **Identify root cause hypotheses** — For each flagged channel, note likely drivers: increased competition (CPCs rising), audience saturation (frequency capping issues), creative fatigue, seasonal effects, or attribution changes. Base these on data patterns, not speculation.

8. **Rank channels by efficiency score** — Score = (Conversion Value / CAC) × Trend Multiplier (0.8 if deteriorating, 1.0 if stable, 1.2 if improving). Sort descending.

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 bullet points)
- Overall CAC trend across all channels combined
- Number of channels flagged red/yellow/green
- Single biggest efficiency opportunity
- Single biggest efficiency risk

**Channel CAC Trend Table**
Markdown table with columns: Channel | Current CAC | CAC 3 Periods Ago | % Change | Conversion Value | CAC:Value Ratio | Trend | Status (🔴🟡🟢)

**Flagged Channels Detail**
For each red/yellow channel, a short block (4–6 lines) covering: current CAC, trend over the window, CAC-to-value ratio, likely cause, and recommended action (pause, reduce budget, test new creative, investigate attribution).

**Top Performing Channels**
2–4 lines per green channel noting why it's efficient and whether budget reallocation from flagged channels makes sense.

**Recommendations**
Numbered list of 3–5 specific actions ranked by expected impact. Each recommendation must include the channel name, the action, and the expected outcome metric to watch.

**Assumptions & Data Gaps**
Bullet list of any proxies used, missing data points, and confidence caveats.

Report length: medium (400–800 words excluding tables). Use plain language. Avoid jargon unless the user's input used it first.
