---
name: database-hotspot-query-identification-report
description: >
  Analyzes database query patterns to identify the most frequently executed and resource-intensive queries so developers can prioritize optimization efforts. Use when someone says "find slow queries," asks about database performance bottlenecks, wants to know which queries are killing performance, needs to prioritize indexing improvements, or is investigating high database CPU or memory usage.
category: developer
tags: [database, performance, sql, optimization, indexing]
author: community
---

# Database Hotspot Query Identification Report

This skill analyzes query execution patterns and resource consumption to produce a prioritized report of hotspot queries, enabling developers to make targeted indexing, caching, and query optimization decisions.

## Workflow

1. **Gather context** — Ask the user for the database type (PostgreSQL, MySQL, MSSQL, MongoDB, etc.), available data sources (slow query log, pg_stat_statements, performance_schema, APM tool exports, or raw query samples), and the time window to analyze.

2. **Extract query data** — Request or analyze provided query logs, stats tables, or profiler output. Focus on capturing: query text (normalized/anonymized), execution count, total execution time, average execution time, rows examined vs. rows returned, and lock wait time if available.

3. **Normalize and deduplicate** — Strip literal values from queries to group parameterized variants (e.g., `WHERE id = 1` and `WHERE id = 2` become the same pattern). Count combined executions per normalized pattern.

4. **Score each query** — Calculate a hotspot score using weighted factors:
   - Frequency × average latency = total time consumed (primary signal)
   - Rows examined / rows returned ratio (index efficiency signal)
   - Lock contention or wait time (concurrency signal)
   - P99 latency if available (tail latency signal)

5. **Classify each hotspot** — Assign one or more root cause categories:
   - `MISSING_INDEX` — high rows-examined ratio, full table scans
   - `INEFFICIENT_JOIN` — cross joins, missing join indexes, large intermediate result sets
   - `N+1_PATTERN` — high frequency low-cost queries indicating loop execution
   - `MISSING_CACHE` — identical queries repeated with no variation
   - `EXPENSIVE_AGGREGATION` — GROUP BY or ORDER BY on unindexed columns
   - `OVER_FETCHING` — SELECT * or excessive column retrieval

6. **Propose specific remediation** — For each hotspot, generate a concrete recommendation: exact index DDL to add, query rewrite suggestion, cache key strategy, or schema change. Include estimated impact where inferable.

7. **Rank by impact** — Order the final report by estimated total time saved (execution count × expected latency reduction), not just by slowest single execution.

## Output Format

Produce a structured markdown report with the following sections:

---

**## Database Hotspot Query Report**
**Period analyzed:** `[time window]`
**Database:** `[type and version if known]`
**Total queries analyzed:** `[N]`
**Top hotspot patterns identified:** `[N]`

---

**### Summary Table**

| Rank | Query Pattern (truncated) | Category | Exec Count | Avg Latency | Total Time | Hotspot Score |
|------|--------------------------|----------|------------|-------------|------------|---------------|
| 1    | ...                      | ...      | ...        | ...         | ...        | ...           |

---

**### Hotspot #[N]: [Short Label]**

- **Normalized Query:**
  ```sql
  [normalized query text]
  ```
- **Category:** `[classification]`
- **Metrics:** Executions: X | Avg latency: Xms | Total time: Xs | Rows examined/returned: X:1
- **Root Cause:** [1–2 sentences explaining why this is expensive]
- **Recommended Fix:**
  ```sql
  [index DDL, query rewrite, or config change]
  ```
- **Estimated Impact:** [qualitative or quantitative impact estimate]

---

Repeat the Hotspot section for each identified query, top 5–10 by default unless the user specifies otherwise. Close with a **Prioritization Recommendation** paragraph summarizing which fix to implement first and why.
