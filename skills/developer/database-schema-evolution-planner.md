---
name: database-schema-evolution-planner
description: >
  Designs a safe, backward-compatible sequence of schema changes to migrate a production database
  without downtime or data loss. Use when someone needs to change a database schema in production,
  asks about adding or removing columns safely, wants to rename a table without breaking live
  traffic, needs to split or merge database tables, or is planning a zero-downtime migration.
category: developer
tags: [database, migrations, schema, zero-downtime, postgresql, mysql]
author: community
---

# Database Schema Evolution Planner

Analyzes a desired schema change and produces a phased, backward-compatible migration plan that keeps production systems live throughout the transition.

## Migration Planning Workflow

### 1. Capture Current State and Target State
- Ask for (or infer from context): current schema DDL, target schema DDL, database engine (PostgreSQL, MySQL, etc.), ORM/framework in use, approximate row count for affected tables, and deployment process (blue/green, rolling, single-instance).
- Identify the exact diff: added columns, dropped columns, renamed columns/tables, type changes, constraint additions, index changes, foreign key modifications.

### 2. Classify Each Change by Risk
Assign each change one of three risk levels:
- **Safe (additive):** Adding nullable columns, adding indexes concurrently, adding new tables.
- **Dangerous (destructive or locking):** Dropping columns, renaming columns/tables, changing column types, adding NOT NULL constraints to existing columns, adding foreign keys without indexes.
- **Complex (multi-phase required):** Renaming columns or tables, making nullable columns NOT NULL, splitting or merging tables, changing primary key types.

### 3. Generate a Phased Migration Sequence
For each **dangerous** or **complex** change, expand it into a safe multi-phase sequence. Apply these patterns:

**Rename a column (expand-contract pattern):**
1. Add new column alongside old column.
2. Deploy application code that writes to both columns and reads from the new one (with fallback).
3. Backfill new column from old column in batches.
4. Deploy application code that only uses new column.
5. Drop old column.

**Drop a column:**
1. Deploy application code that no longer reads or writes the column.
2. Drop the column in a subsequent migration.

**Add NOT NULL constraint:**
1. Add column as nullable with a DEFAULT value.
2. Backfill all NULL rows in batches.
3. Add NOT NULL constraint (use `SET NOT NULL` with a check constraint in PostgreSQL to avoid full table scan where possible).

**Change column type:**
1. Add new column with the target type.
2. Backfill via dual-write or batch copy with transformation.
3. Swap reads/writes to new column.
4. Drop old column.

**Add a unique or foreign key constraint:**
1. Add index CONCURRENTLY first.
2. Add constraint using the existing index.

### 4. Write Each Migration Step
For every phase, produce:
- The exact SQL statement(s) to run.
- The application code change required before or after.
- Whether the step requires a deploy, a migration, or both, and in what order.
- An estimated lock duration or risk note.

### 5. Add a Rollback Plan
For each phase, specify how to undo it safely without data loss.

### 6. Flag Batch Operation Requirements
For any backfill touching more than ~10k rows, provide a batching template:
```sql
-- Example batching loop for backfill
UPDATE table SET new_col = old_col
WHERE id BETWEEN :start AND :end AND new_col IS NULL;
```
Recommend batch size (typically 1,000–10,000 rows) and advise adding a sleep between batches to reduce I/O pressure.

## Output Format

Produce a structured migration document with these sections:

**1. Change Summary Table**
A markdown table listing each schema change, its risk level, and the number of phases required.

**2. Phased Migration Plan**
Numbered phases. Each phase contains:
- Phase title and goal
- SQL to execute (fenced code block with dialect label)
- Application code change required (if any)
- Deploy/migration order (e.g., "Deploy app first, then run migration")
- Lock risk and estimated duration
- Rollback step

**3.
