---
name: database-rollback-script-generator
description: >
  Generates paired rollback scripts for every forward migration to ensure safe, reversible database schema changes. Use when someone says "I need a rollback for this migration," asks about undoing schema changes, wants to make database migrations reversible, needs a down migration script, or is setting up safe database deployment pipelines.
category: developer
tags: [database, migrations, rollback, schema, sql]
author: community
---

# Database Rollback Script Generator

This skill analyzes forward migration scripts and produces a corresponding rollback script that precisely reverses every schema change, ensuring safe and repeatable database deployments.

## Rollback Generation Workflow

1. **Parse the forward migration** — Identify every DDL and DML operation: `CREATE TABLE`, `ALTER TABLE`, `ADD COLUMN`, `DROP COLUMN`, `CREATE INDEX`, `INSERT`, `UPDATE`, etc.

2. **Map each operation to its inverse:**
   - `CREATE TABLE` → `DROP TABLE IF EXISTS`
   - `DROP TABLE` → Reconstruct full `CREATE TABLE` from context or prompt user for original schema
   - `ADD COLUMN` → `DROP COLUMN`
   - `DROP COLUMN` → `ADD COLUMN` with original type, constraints, and default (request these if missing)
   - `RENAME COLUMN old TO new` → `RENAME COLUMN new TO old`
   - `RENAME TABLE old TO new` → `RENAME TABLE new TO old`
   - `ALTER COLUMN` (type change) → `ALTER COLUMN` back to original type; flag data loss risks
   - `CREATE INDEX` → `DROP INDEX IF EXISTS`
   - `DROP INDEX` → Reconstruct `CREATE INDEX` with original definition
   - `ADD CONSTRAINT` → `DROP CONSTRAINT`
   - `DROP CONSTRAINT` → `ADD CONSTRAINT` with original definition
   - `INSERT` rows → `DELETE` matching rows by primary key
   - `UPDATE` rows → Reverse `UPDATE` only if original values are provided; otherwise flag as non-reversible

3. **Reverse the operation order** — The rollback script must execute operations in the exact reverse sequence of the forward migration to respect foreign key and dependency constraints.

4. **Flag non-reversible operations** — If data was deleted (`DROP TABLE` with no backup, `DELETE` without originals, destructive type casts), insert a clear `-- WARNING: Non-reversible operation` comment and describe what manual intervention is required.

5. **Add transaction wrapping** — Wrap the entire rollback in a transaction block (`BEGIN` / `COMMIT` with a `ROLLBACK` on error) unless the target database does not support transactional DDL (e.g., MySQL). Note the limitation if so.

6. **Validate consistency** — Confirm the rollback returns the schema to the exact prior state: same column names, types, nullability, defaults, indexes, and constraints.

7. **Request missing information** — If the forward migration drops objects without enough context to reconstruct them, ask the user for the original definitions before proceeding.

## Output Format

Produce two clearly labeled SQL code blocks:

**Block 1 — Forward Migration (echoed for reference):**
```sql
-- FORWARD MIGRATION: [migration name or filename]
-- [original script, unchanged]
```

**Block 2 — Rollback Migration:**
```sql
-- ROLLBACK MIGRATION: [migration name or filename]
-- Generated rollback for: [brief description of what is reversed]
-- Target database: [PostgreSQL / MySQL / SQLite / etc., inferred or stated]
-- WARNING (if applicable): [list any non-reversible steps and required manual actions]

BEGIN;

[reversed operations in reverse order, with inline comments explaining each step]

COMMIT;
```

Follow the rollback block with a short **Rollback Notes** section (plain text, no more than 5 bullets) covering:
- Any assumptions made about original schema state
- Non-reversible operations and what to do manually
- Data loss risks
- Environment-specific caveats (transactional DDL support, etc.)
- Recommended test procedure before running in production
