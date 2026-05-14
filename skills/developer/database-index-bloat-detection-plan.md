---
name: database-index-bloat-detection-plan
description: >
  Analyzes database index usage patterns and identifies unused or redundant indexes that contribute to unnecessary storage consumption and write performance overhead. Use when someone asks about index bloat, wants to find unused indexes, is investigating slow write performance caused by too many indexes, wants to audit database indexes for cleanup, or needs to reduce database storage overhead from redundant indexes.
category: developer
tags: [database, performance, indexes, postgresql, mysql, optimization]
author: community
---

# Database Index Bloat Detection Plan

This skill analyzes index usage statistics and schema structure to produce a prioritized plan for removing or consolidating unused and redundant database indexes.

## Index Bloat Detection Workflow

### 1. Identify the Database Engine
Determine whether the target is PostgreSQL, MySQL/MariaDB, or another engine — query syntax differs per engine.

### 2. Collect Index Usage Statistics

**PostgreSQL:**
```sql
SELECT
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read,
  idx_tup_fetch,
  pg_size_pretty(pg_relation_size(indexrelid)) AS index_size
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC, pg_relation_size(indexrelid) DESC;
```

**MySQL:**
```sql
SELECT
  t.TABLE_SCHEMA,
  t.TABLE_NAME,
  s.INDEX_NAME,
  s.COLUMN_NAME,
  s.SEQ_IN_INDEX,
  t.TABLE_ROWS
FROM information_schema.STATISTICS s
JOIN information_schema.TABLES t
  ON s.TABLE_SCHEMA = t.TABLE_SCHEMA AND s.TABLE_NAME = t.TABLE_NAME
WHERE t.TABLE_SCHEMA NOT IN ('information_schema','mysql','performance_schema','sys')
ORDER BY t.TABLE_NAME, s.INDEX_NAME;
```
Cross-reference with `sys.schema_unused_indexes` if available.

### 3. Flag Zero-Scan Indexes
Any index with `idx_scan = 0` (PostgreSQL) or absent from `sys.schema_unused_indexes` activity that has existed since the last stats reset is a primary removal candidate.

### 4. Detect Redundant / Duplicate Indexes
Check for indexes where one index's column prefix is fully covered by another:
- Index A: `(user_id)`
- Index B: `(user_id, created_at)`
→ Index A is redundant if all queries that hit A are also served by B.

Also flag:
- Duplicate indexes with identical column sets but different names
- Partial indexes that overlap with full-table indexes

### 5. Assess Write Overhead
For each flagged index, calculate write cost impact:
- High-write tables (frequent `INSERT`/`UPDATE`/`DELETE`) gain the most from index removal
- Join usage frequency and foreign key constraints must be preserved

### 6. Check for Forced Index Usage
Scan application code and ORM configurations for explicit index hints (`USE INDEX`, `FORCE INDEX`, `WITH INDEX`) before marking any index safe to drop.

### 7. Validate Before Dropping
- In PostgreSQL, use `pg_index` to check `indisunique`, `indisprimary`, `indisexclusion` — never drop constraint-enforcing indexes
- Confirm no active foreign key references depend on the index

### 8. Produce the Remediation Plan
Rank candidates by: `(index_size_mb × write_frequency_score) / risk_score`

## Output Format

Produce a structured report with these sections:

**Summary**
- Total indexes analyzed
- Total bloat storage identified (MB/GB)
- Count of zero-scan indexes
- Count of redundant indexes

**Removal Candidates Table**

| Index Name | Table | Size | Scans (lifetime) | Reason | Risk | Action |
|---|---|---|---|---|---|---|
| idx_users_old | users | 240 MB | 0 | Zero-scan | Low | DROP |
| idx_orders_uid | orders | 80 MB | 12 | Redundant (covered by idx_orders_uid_date) | Medium | DROP after verification |

**Redundancy Map**
For each redundant pair, show which index subsumes the other with the
