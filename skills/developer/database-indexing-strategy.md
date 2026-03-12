---
name: database-indexing-strategy
description: >
  Analyzes SQL query patterns and table structures to recommend optimal database indexes that eliminate slow queries and reduce table scan overhead. Use when someone says "my queries are slow," asks about database performance, wants to optimize table scans, needs help with index design, or is troubleshooting slow query logs.
category: developer
tags: [database, performance, sql, indexing, optimization]
author: community
---

# Database Indexing Strategy

Analyzes query patterns, execution plans, and table structures to produce a prioritized indexing plan that eliminates slow queries and minimizes read overhead.

## Analysis Workflow

1. **Collect query patterns** — Ask for the slow queries, slow query log excerpts, or ORM-generated SQL. If unavailable, ask for the most frequently run operations (reads, joins, filters, sorts).

2. **Gather schema context** — Request table DDL (`SHOW CREATE TABLE` or equivalent), row counts, and cardinality estimates for key columns. Note existing indexes.

3. **Identify query predicates** — For each query, extract:
   - `WHERE` clause columns and their operators (`=`, `>`, `BETWEEN`, `LIKE`, `IN`)
   - `JOIN` conditions and foreign key columns
   - `ORDER BY` and `GROUP BY` columns
   - `SELECT` columns (for covering index candidates)

4. **Run or interpret execution plans** — Ask for `EXPLAIN` / `EXPLAIN ANALYZE` output. Identify:
   - Full table scans (`type: ALL` in MySQL, `Seq Scan` in Postgres)
   - High `rows` estimates relative to actual result size
   - Missing index warnings or bitmap heap scans

5. **Apply indexing rules:**
   - **Equality before range** — Put equality filter columns first in composite indexes, range columns last.
   - **Selectivity order** — Among equality columns, place highest-cardinality columns first.
   - **Covering indexes** — Include `SELECT` columns in the index when the query is read-heavy and the column set is small.
   - **Avoid redundancy** — A composite index `(a, b)` makes a standalone index `(a)` redundant; flag duplicates.
   - **Partial indexes** — Recommend filtered indexes (Postgres) or conditional logic when queries target a small subset of rows (e.g., `WHERE status = 'pending'`).
   - **Join columns** — Ensure foreign key columns on the many-side of joins are indexed.
   - **Function calls** — If queries use `LOWER(col)` or `DATE(col)`, recommend functional/expression indexes.

6. **Estimate impact** — For each recommendation, state which queries it improves and the expected scan reduction (e.g., "reduces full scan of 10M rows to index seek of ~200 rows").

7. **Flag trade-offs** — Note write overhead (each index slows `INSERT`/`UPDATE`/`DELETE`), storage cost, and index maintenance for high-write tables.

## Output Format

Produce a structured report with these sections:

**Findings**
- Bullet list of detected problems (full scans, missing indexes, redundant indexes), each tied to a specific query or table.

**Recommended Indexes** (one block per recommendation)
```sql
-- Reason: [one-line justification]
-- Queries improved: [Q1, Q2]
-- Estimated impact: [description]
CREATE INDEX idx_orders_customer_status ON orders (customer_id, status, created_at);
```

**Redundant / Drop Candidates**
- List existing indexes that become redundant after recommendations, with the DDL to drop them.

**Trade-off Summary**
- Short table noting write frequency risk for each new index (Low / Medium / High) and approximate storage impact if row count is known.

**Verification Steps**
- Exact commands to run before and after to validate improvement (e.g., `EXPLAIN ANALYZE` snippets, `pg_stat_user_indexes` queries, or slow query log thresholds to monitor).

Keep recommendations ranked by impact (highest first). Use the target database dialect (MySQL, PostgreSQL, SQLite, etc.) inferred from the schema or stated by the user.
