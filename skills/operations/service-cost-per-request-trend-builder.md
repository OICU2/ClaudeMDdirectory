---
name: service-cost-per-request-trend-builder
description: >
  Analyzes and visualizes cost-per-service-request trends over time across teams, services, or channels to surface efficiency gains or cost creep. Use when someone says "show me how our cost per request is trending," asks about whether a service is getting more expensive to run, wants to track API or infrastructure spend efficiency over time, needs to compare cost efficiency across teams or microservices, or is trying to detect if a recent deployment changed their cost profile.
category: operations
tags: [cost-optimization, finops, observability, cloud-costs, efficiency]
author: community
---

# Service Cost-Per-Request Trend Builder

Builds a structured cost-per-request trend analysis from provided data or data source descriptions, identifying efficiency changes, anomalies, and team-level comparisons over time.

## Workflow

1. **Gather inputs** — Ask for or identify the following if not provided:
   - Time range (e.g., last 30 days, week-over-week, quarter)
   - Granularity (hourly, daily, weekly)
   - Cost data source (AWS Cost Explorer export, Datadog, spreadsheet, etc.)
   - Request volume data source (logs, APM, analytics)
   - Segmentation dimensions (service name, team, environment, region, channel)

2. **Compute cost-per-request** — For each time bucket and segment:
   - `cost_per_request = total_cost / total_requests`
   - Flag any periods where request volume is zero or near-zero to avoid division artifacts
   - Normalize currency if multiple sources are present

3. **Detect trends** — Apply these rules to each series:
   - **Creep threshold**: Flag if cost-per-request increased >10% over the period or >5% week-over-week for 2+ consecutive periods
   - **Efficiency gain**: Flag if cost-per-request decreased >10% and request volume held steady or grew
   - **Spike detection**: Flag any single-period increase >25% above the rolling 7-day average
   - **Flatline check**: Note if cost and volume both dropped together (may indicate reduced usage, not efficiency)

4. **Cross-segment comparison** — If multiple teams or services are present:
   - Rank segments by current cost-per-request (highest to lowest)
   - Identify the highest-drift segment (largest % change over the period)
   - Surface any segment diverging significantly from the group median

5. **Root cause prompts** — For each flagged anomaly, generate 2–3 hypotheses to investigate:
   - Deployment or config change on that date
   - Pricing tier change or reserved capacity expiration
   - Traffic pattern shift (bursty vs. steady)
   - New feature or endpoint with different cost profile

6. **Recommendations** — Produce 1–3 concrete next actions ranked by expected impact (e.g., "Right-size service X," "Investigate spike on [date]," "Review caching layer for team Y").

## Output Format

Produce a structured report with these sections:

```
## Cost-Per-Request Trend Report
**Period:** [start] → [end] | **Granularity:** [daily/weekly] | **Segments:** [list]

### Summary Table
| Segment | Start CPR | End CPR | % Change | Trend | Flag |
|---------|-----------|---------|----------|-------|------|
| ...     | $0.0012   | $0.0018 | +50%     | ↑ Creep | ⚠️  |

### Trend Narratives
**[Segment Name]:** [2–3 sentences describing the trend, peak date, and magnitude.]

### Anomalies Detected
- [Date/Segment]: [Description of spike or drop] — Hypotheses: [1], [2]

### Cross-Segment Comparison
- Highest CPR: [Segment] at $X
- Most improved: [Segment] (-X%)
- Most degraded: [Segment] (+X%)

### Recommended Actions
1. [Action] — Expected impact: [High/Medium/Low]
2. ...
```

- If only one segment exists, omit the cross-segment section
- If raw data is provided as a table or CSV, show the computed CPR column inline before the summary
- Keep trend narrat
