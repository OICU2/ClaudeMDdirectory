---
name: database-query-regression-detection-plan
description: >
  Designs a structured plan to detect and alert on database query performance regressions across software releases. Use when someone wants to catch slow queries between versions, asks about query performance baseline comparison, needs to set up regression alerts for database operations, wants to track query execution time across deployments, or is building a performance testing pipeline for database queries.
category: developer
tags: [database, performance, regression-testing, monitoring, query-optimization]
author: community
---

# Database Query Regression Detection Plan

This skill produces a concrete, actionable plan for detecting query performance regressions by defining baseline metrics, alert thresholds, and comparison methodology across releases.

## Regression Detection Planning Workflow

### 1. Inventory and Scope Queries
- Identify the query set to monitor: critical path queries, high-frequency queries (top N by call volume), and slow query log candidates
- Classify queries by risk tier: Tier 1 (user-facing, latency-sensitive), Tier 2 (background jobs), Tier 3 (reporting/analytics)
- Exclude queries with inherently variable execution (e.g., full-table analytics scans on growing datasets) or flag them separately

### 2. Define Baseline Metrics
For each monitored query, capture:
- **p50, p95, p99 execution time** (milliseconds) under representative load
- **Rows examined vs. rows returned ratio** (index efficiency signal)
- **Execution plan fingerprint** (hash of EXPLAIN output to detect plan changes)
- **Lock wait time** and **temp table usage** where applicable
- Baseline environment: database version, dataset size/shape, connection pool size, server specs

### 3. Establish Alert Thresholds
Define regression triggers at two levels:

| Severity | p95 Latency Increase | Rows Examined Ratio Change | Plan Change |
|----------|---------------------|---------------------------|-------------|
| Warning  | > 20%               | > 25%                     | Any change  |
| Critical | > 50%               | > 100%                    | Full scan introduced |

- Apply percentage-based thresholds (not absolute ms) to tolerate dataset growth
- Set a minimum absolute floor (e.g., only alert if p95 exceeds 50ms) to suppress noise on trivially fast queries

### 4. Define Comparison Methodology
- **Capture phase**: Run each query N=100+ times against a representative dataset in a controlled environment (staging or shadow DB)
- **Normalization**: Strip literal values from queries to compare by normalized fingerprint; use parameterized queries
- **Isolation**: Compare same dataset snapshot across releases — seed a fixed dataset or use production snapshot from the same point in time
- **Statistical comparison**: Use Mann-Whitney U test or simple percentile diff; avoid mean-only comparisons due to outlier sensitivity
- **Plan comparison**: Diff EXPLAIN output between baseline and candidate release; flag any new sequential scans, missing index usage, or sort spills

### 5. Integration Points
- **CI/CD gate**: Run regression check as a pipeline stage after migration scripts execute; fail build on Critical regressions, warn on Warning tier
- **Baseline refresh cadence**: Regenerate baseline after each release that passes checks; maintain a rolling 3-release history
- **Storage**: Store metrics in a time-series store (e.g., InfluxDB, Prometheus) or a simple structured JSON artifact in the artifact registry
- **Alerting**: Route Critical alerts to on-call; Warning alerts to a Slack channel or PR comment

### 6. Tooling Recommendations (by database)
- **PostgreSQL**: `pg_stat_statements`, `auto_explain`, `pgBadger` for log analysis
- **MySQL/MariaDB**: `performance_schema`, slow query log, `pt-query-digest`
- **Generic**: `sqlcommenter` for query tagging, `Datadog APM` or `New Relic` for cross-release flamegraph comparison
- **Framework-level**: ORM query logging hooks (ActiveRecord, SQLAlchemy, Hibernate) to capture queries in test runs

### 7. Handling Schema and Data Changes
- Tag baselines with schema version; invalidate baseline if a migration alters an indexed column or table structure
- Document expected regressions (e.g., a new constraint adds overhead) with a suppression annotation and owner sign-off
- Track dataset row counts alongside metrics
