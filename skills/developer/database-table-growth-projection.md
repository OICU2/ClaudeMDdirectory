---
name: database-table-growth-projection
description: >
  Analyzes current database table row counts, growth rates, and projects future storage consumption and query performance degradation over a configurable time horizon. Use when someone asks "how fast is my table growing", wants to forecast database storage needs, is concerned about table bloat affecting query performance, needs to plan capacity for a growing dataset, or asks when a table will become too large to query efficiently.
category: developer
tags: [database, performance, capacity-planning, analytics, sql]
author: community
---

# Database Table Growth Projection

This skill analyzes historical table row growth patterns and produces time-based projections for storage usage and query performance impact, helping teams make informed infrastructure and optimization decisions.

## Analysis Workflow

1. **Collect baseline data** — Ask for or analyze current table row counts, table creation date or oldest available stats, and any existing historical row count snapshots (daily/weekly/monthly).

2. **Calculate growth rate** — Derive rows-per-day, rows-per-week, and rows-per-month averages. If multiple historical points exist, compute both linear and exponential growth models and note which fits better.

3. **Identify table metadata** — Gather or estimate average row size in bytes, presence of indexes (count and type), and the database engine (PostgreSQL, MySQL, SQLite, etc.). If unavailable, use reasonable defaults and flag assumptions explicitly.

4. **Project forward** — Generate projections at these intervals: 30 days, 90 days, 6 months, 1 year, and 2 years. For each interval calculate:
   - Projected row count
   - Estimated table size (data + index overhead at ~20% default unless specified)
   - Sequential scan cost trend (relative to current baseline)
   - Index degradation risk (flag when B-tree indexes on high-cardinality columns approach 100M+ rows)

5. **Identify performance thresholds** — Mark the projected date when the table is likely to cross these warning boundaries:
   - 10M rows (monitor phase)
   - 50M rows (optimize phase — add partitioning or archival strategy)
   - 500M rows (critical phase — requires partitioning or sharding)

6. **Recommend mitigations** — Based on the projected timeline, suggest concrete actions with urgency tiers:
   - **Immediate (within 30 days)**: Add missing indexes, enable autovacuum tuning, collect table statistics
   - **Short-term (30–90 days)**: Implement archival or TTL policies, consider table partitioning
   - **Long-term (90+ days)**: Evaluate sharding, read replicas, or data tiering strategies

7. **Flag data gaps** — If only a single row count snapshot is available, note that the growth rate is an estimate and request additional historical data points for higher accuracy.

## Output Format

Produce a structured report with the following sections:

**Growth Summary**
- Current row count and table age
- Calculated growth rate (rows/day, rows/month)
- Growth model used (linear vs. exponential) and confidence level

**Projection Table**
A markdown table with columns: Time Horizon | Projected Rows | Estimated Size | Risk Level

| Time Horizon | Projected Rows | Estimated Size | Risk Level |
|---|---|---|---|
| 30 days | ... | ... | Low / Medium / High |
| 90 days | ... | ... | ... |
| 6 months | ... | ... | ... |
| 1 year | ... | ... | ... |
| 2 years | ... | ... | ... |

**Threshold Crossing Dates**
Bulleted list of when (approximate date) each warning threshold will be crossed.

**Recommended Actions**
Tiered action list grouped by urgency (Immediate / Short-term / Long-term), each action as a single concrete sentence.

**Assumptions**
Explicit list of any values estimated rather than provided, so the reader knows what to verify.

Keep the full report under 600 words. Use plain language — avoid jargon unless the user has demonstrated technical depth.
