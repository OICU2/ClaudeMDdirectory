---
name: sales-analytics
description: >
  Analyzes sales data to surface actionable insights, trends, and growth opportunities.
  Use when someone says "analyze my sales numbers," asks about "why revenue is down," wants
  to "find bottlenecks in the pipeline," needs to "understand conversion rates," or requests
  "a breakdown of sales performance."
category: sales
tags: [analytics, revenue, pipeline, forecasting, performance]
author: community
---

# Sales Analytics

Analyzes sales data to identify trends, bottlenecks, and improvement opportunities, activated whenever a user shares sales figures or asks for performance diagnosis.

## Analysis Workflow

1. **Identify the data source** — Ask for or confirm what data is available: CRM export, spreadsheet, raw numbers, or verbal summary. Clarify time period and granularity (daily, weekly, monthly).

2. **Establish baseline metrics** — Extract or calculate:
   - Total revenue and units sold
   - Month-over-month (MoM) and year-over-year (YoY) growth rates
   - Average deal size and average sales cycle length
   - Win rate (deals closed / deals entered pipeline)
   - Lead-to-opportunity and opportunity-to-close conversion rates

3. **Segment the data** — Break down performance by:
   - Product or service line
   - Sales rep or team
   - Region or territory
   - Customer segment (new vs. existing, industry, company size)
   - Channel (inbound, outbound, referral, partner)

4. **Identify trends and anomalies** — Flag:
   - Declining segments (revenue, volume, or conversion drops >10%)
   - Outperforming segments worth scaling
   - Seasonal patterns or one-time spikes
   - Pipeline stage where deals most commonly stall or die

5. **Diagnose bottlenecks** — For each problem area, determine whether the issue is:
   - Volume (not enough leads or opportunities)
   - Velocity (deals taking too long to close)
   - Value (deal sizes shrinking)
   - Conversion (leads or deals dropping off at a specific stage)

6. **Generate recommendations** — For each bottleneck or opportunity, provide one specific, actionable recommendation with expected impact (e.g., "Focus outbound on mid-market accounts in Q3 — they convert 2× faster than enterprise").

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 bullet points): Top findings and the single most important action item.

**Key Metrics Table**: A markdown table with metric name, current value, prior period value, and % change.

**Trend Analysis** (2–4 paragraphs): Narrative explanation of what the data shows over time, with specific numbers cited inline.

**Bottleneck Breakdown**: Numbered list of identified bottlenecks, each with: location in the funnel, severity (High/Medium/Low), root cause hypothesis, and one recommended fix.

**Opportunities** (bulleted list): 3–5 specific growth opportunities ranked by estimated impact.

**Recommended Next Steps**: A prioritized action list of 3–5 items, each with an owner role (e.g., Sales Manager, SDR team) and suggested timeline.

Keep the full report under 600 words unless the dataset complexity requires more detail.
