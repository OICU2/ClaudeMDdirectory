---
name: incident-frequency-trend-report
description: >
  Analyzes historical incident logs to identify recurring failure patterns, peak occurrence periods, and trend direction over time. Use when someone says "analyze our incident history," asks about "how often are we having outages," wants to "find patterns in our failures," needs to "understand incident trends," or asks "are incidents increasing or decreasing." Produces a structured trend report with actionable findings.
category: operations
tags: [incidents, reliability, trend-analysis, postmortem, sre]
author: community
---

# Incident Frequency Trend Report

This skill ingests incident log data and produces a statistical trend analysis identifying failure patterns, peak periods, and directional trends to help teams prioritize reliability investments.

## Analysis Workflow

1. **Parse incident data** — Accept input as CSV, JSON, plain text, or pasted log entries. Extract at minimum: incident timestamp, severity/priority, duration, affected service/component, and resolution status.

2. **Normalize time windows** — Bucket incidents into consistent periods: daily, weekly, and monthly. If data spans less than 4 weeks, default to daily buckets. If more than 6 months, default to monthly.

3. **Calculate frequency metrics** — Compute:
   - Total incident count per time bucket
   - Mean time between incidents (MTBI) overall and by service
   - Incident rate per week/month with percentage change period-over-period
   - Severity distribution (P1/P2/P3 or equivalent) across time

4. **Identify recurring patterns** — Flag any service, component, or failure type that appears in 3 or more incidents. Group by root cause category if available. Surface the top 5 most frequent failure sources.

5. **Detect peak periods** — Identify days of week, hours of day, or calendar periods (month-end, deploy windows, etc.) with statistically elevated incident rates. Compare peak periods to baseline average.

6. **Determine trend direction** — Apply a simple linear regression or period-over-period comparison to classify overall trend as: Improving (>15% reduction), Stable (±15%), or Degrading (>15% increase). Break this down per service if multi-service data is present.

7. **Highlight anomalies** — Call out any single period with 2x or more the average incident rate and note what drove the spike if discernible from the data.

## Output Format

Produce a Markdown report with the following sections:

**Executive Summary** (3–5 bullet points): overall trend direction, total incidents analyzed, date range, MTBI, and top recurring failure source.

**Frequency Table**: Markdown table showing time bucket, incident count, severity breakdown, and period-over-period change (%).

**Top Recurring Failure Patterns**: Numbered list of up to 5 patterns with incident count, affected services, and example timestamps.

**Peak Period Analysis**: Short paragraph identifying when incidents cluster most heavily (day of week, time of day, calendar events), with supporting counts.

**Trend Direction Summary**: One line per service (or overall if single-service) stating Improving / Stable / Degrading with the supporting delta percentage.

**Recommended Focus Areas**: 3 specific, prioritized recommendations based on findings (e.g., "Investigate database connection pool exhaustion — responsible for 40% of P1s in Q3").

Total report length: 400–800 words depending on data volume. Use tables and bullet points over prose where possible.
