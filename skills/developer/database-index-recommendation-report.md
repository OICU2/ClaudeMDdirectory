---
name: database-index-recommendation-report
description: >
  Analyzes slow query logs and schema definitions to recommend specific indexes that will reduce query execution time. Use when someone says their queries are running slow, asks how to speed up database performance, wants to know which indexes to add, shares a slow query log for review, or needs to optimize database table lookups.
category: developer
tags: [database, performance, sql, indexing, optimization]
author: community
---

# Database Index Recommendation Report

This skill analyzes slow query logs and schema definitions to produce a prioritized, actionable report of specific index recommendations that will reduce query execution time.

## Analysis Workflow

1. **Collect inputs** — Request the following if not provided: slow query log (or specific slow queries), relevant `CREATE TABLE` statements, existing indexes (`SHOW INDEXES FROM table` or equivalent), approximate row counts per table, and database engine (MySQL, PostgreSQL, SQLite, etc.).

2. **Parse slow queries** — Identify the top offending queries by execution time or frequency. Extract all columns used in `WHERE`, `JOIN ON`, `ORDER BY`, `GROUP BY`, and `HAVING` clauses.

3. **Inspect existing indexes** — Cross-reference extracted columns against existing indexes. Flag redundant, duplicate, or unused indexes alongside missing ones.

4. **Identify index candidates** — For each slow query:
   - Determine the most selective columns for filtering (high cardinality first)
   - Identify composite index opportunities where multiple columns appear together in filters
   - Flag columns used in range scans (`>`, `<`, `BETWEEN`, `LIKE prefix%`) and sort operations
   - Note covering index opportunities where the index can satisfy the query without a table lookup

5. **Estimate impact** — Assign each recommendation a priority (High / Medium / Low) based on query frequency, estimated row reduction, and current execution time.

6. **Check trade-offs** — For each recommendation, note write overhead, storage cost, and any risk of locking or replication lag on high-write tables.

7. **Generate DDL** — Write the exact `CREATE INDEX` statement for each recommendation.

## Output Format

Produce a structured report with the following sections:

---

### Summary
- Number of queries analyzed
- Number of indexes recommended
- Estimated highest-impact change (one sentence)

### Existing Index Audit
| Index Name | Table | Columns | Status | Notes |
|---|---|---|---|---|
| ... | ... | ... | Keep / Remove / Redundant | ... |

### Index Recommendations

For each recommendation:

**Recommendation #N — [Table Name] ([Priority: High/Medium/Low])**
- **Target Query:** _(the slow query or query pattern this addresses)_
- **Problem:** _(why this query is slow — missing index, full table scan, filesort, etc.)_
- **Recommended Index:**
  ```sql
  CREATE INDEX idx_tablename_columns ON table_name (col1, col2, col3);
  ```
- **Rationale:** _(column order choice, cardinality reasoning, covering index logic)_
- **Estimated Impact:** _(rows scanned before vs. after, if estimable)_
- **Trade-offs:** _(write overhead, storage, any risks)_

### Indexes to Remove
List any redundant or unused indexes with `DROP INDEX` statements.

### Implementation Order
Numbered list of indexes to create, ordered by priority and dependency.

---

Report length scales with input: 1–3 queries produces a focused 1-page report; 10+ queries produces a full multi-section report. Always include exact DDL — never vague suggestions.
