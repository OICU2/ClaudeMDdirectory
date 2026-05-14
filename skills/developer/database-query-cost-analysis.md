---
name: database-query-cost-analysis
description: >
  Analyzes slow query logs and execution plans to identify high-cost database operations and recommends concrete index or schema changes to reduce load. Use when someone says their queries are running slow, asks why the database is under heavy load, wants to optimize a specific SQL query, needs help reading an EXPLAIN or EXPLAIN ANALYZE output, or is troubleshooting database performance issues.
category: developer
tags: [database, performance, sql, indexing, query-optimization]
author: community
---

# Database Query Cost Analysis

This skill analyzes slow query logs, execution plans, and schema definitions to pinpoint expensive database operations and produce actionable index and schema recommendations.

## Analysis Workflow

1. **Collect inputs** — Ask for the slow query log snippet, the raw SQL query, the execution plan (`EXPLAIN`, `EXPLAIN ANALYZE`, `EXPLAIN FORMAT=JSON`, or equivalent), table DDL, and current index definitions if not already provided.

2. **Parse the execution plan** — Identify the costliest nodes by scanning for:
   - Sequential scans / full table scans on large tables (`Seq Scan`, `ALL` in MySQL)
   - High `rows` estimates vs. actual rows (bad statistics)
   - Nested loop joins on unindexed foreign keys
   - Sort operations without a supporting index (`Sort`, `filesort`)
   - Temporary table creation (`Using temporary`)
   - High `actual time` or `cost` values relative to siblings

3. **Classify each bottleneck** by type:
   - **Missing index** — filter, join, or sort column has no index
   - **Index not used** — index exists but optimizer skips it (implicit cast, leading wildcard, function on column)
   - **Index bloat / fragmentation** — index exists but is stale or oversized
   - **Schema issue** — data type mismatch, nullable join columns, wide rows causing excessive I/O
   - **Statistics staleness** — row estimates are wildly off; recommend `ANALYZE`

4. **Generate recommendations** — For each bottleneck produce:
   - The exact `CREATE INDEX` or `ALTER TABLE` statement ready to run
   - Explanation of why this change targets the identified cost
   - Estimated impact: which plan node it eliminates or improves
   - Any trade-offs (write overhead, storage cost, lock behavior)

5. **Validate for conflicts** — Check whether recommended indexes overlap with existing ones, could be merged into a composite index, or make an existing index redundant.

6. **Prioritize** — Rank recommendations by estimated cost reduction (highest-impact first), noting quick wins vs. schema changes that require a migration.

## Output Format

Produce a structured report with these sections:

---

### Query Under Analysis
```sql
-- paste of the query being analyzed
```

### Execution Plan Summary
- Database engine and version (if known)
- Total estimated / actual cost
- Dominant cost node (highlighted)

### Bottlenecks Found

| # | Node / Operation | Type | Severity (High/Med/Low) | Root Cause |
|---|-----------------|------|------------------------|------------|
| 1 | ... | Missing index | High | ... |

### Recommendations

**Recommendation 1 — [short title]**
- **Problem:** what the plan shows
- **Fix:**
  ```sql
  CREATE INDEX idx_orders_customer_status ON orders (customer_id, status);
  ```
- **Why:** how this resolves the bottleneck
- **Trade-off:** any write or storage impact

*(repeat for each recommendation, ordered by priority)*

### Quick Wins vs. Migration Required
- **Run now (no downtime):** list indexes safe to add concurrently
- **Requires migration:** list schema changes needing a deploy window

### Next Steps
- Whether to re-run `ANALYZE` / `UPDATE STATISTICS`
- Suggested follow-up queries to verify improvement after changes

---

Keep the report scannable: use tables and code blocks. Omit sections that have nothing to report. Do not recommend changes without citing the specific plan node or log entry that justifies them.
