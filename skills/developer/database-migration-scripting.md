---
name: database-migration-scripting
description: >
  Creates safe, reversible database migration scripts from schema diff analysis including rollback procedures and data integrity validation steps. Use when someone says "migrate my database schema," asks about "schema changes between versions," or wants to "add a column safely," "rename a table without downtime," or "generate a migration script with rollback."
category: developer
tags: [database, migrations, sql, schema, rollback]
author: community
---

# Database Migration Scripting

This skill generates production-safe, fully reversible database migration scripts with rollback procedures and data integrity checks whenever a user needs to apply schema changes to a database.

## Migration Script Workflow

### 1. Analyze the Schema Diff
- Identify all changes: new tables, dropped tables, added/removed columns, type changes, index changes, constraint changes, renamed objects
- Flag destructive operations (DROP, column type narrowing, NOT NULL additions on populated tables)
- Detect implicit data migrations required by structural changes (e.g., splitting a column, changing a foreign key)

### 2. Classify Each Change by Risk
- **Low risk**: Adding nullable columns, adding indexes, creating new tables
- **Medium risk**: Adding NOT NULL columns (requires default or backfill), adding unique constraints
- **High risk**: Dropping columns, dropping tables, renaming columns, changing column types, altering primary keys

### 3. Generate the UP Migration
- Wrap all statements in a transaction (`BEGIN`/`COMMIT`) unless the database prohibits transactional DDL (e.g., MySQL for certain DDL)
- For high-risk changes, emit a comment block explaining the danger
- For large tables, generate batched `UPDATE` statements instead of single-pass data migrations
- Add explicit locking hints or `LOCK TIMEOUT` settings for concurrent environments
- Include intermediate validation queries (`SELECT COUNT(*)`, constraint checks) as inline comments showing expected results

### 4. Generate the DOWN Migration (Rollback)
- Every UP statement must have a corresponding DOWN statement that fully reverses it
- Dropped columns/tables in UP must be recreated with original schema in DOWN — extract original DDL from provided schema or ask the user to supply it
- Note when a DOWN migration cannot guarantee data recovery (e.g., dropped data) with a `-- WARNING: data loss on rollback` comment
- Order DOWN statements in reverse dependency order

### 5. Add Pre/Post Validation Steps
- **Pre-migration checks**: Row counts, existence of expected objects, current schema version
- **Post-migration checks**: Constraint validity, index presence, spot-check queries confirming data integrity
- Emit these as runnable SQL queries in a dedicated `-- PRE-CHECKS` and `-- POST-CHECKS` section

### 6. Handle Database-Specific Syntax
- Default to ANSI SQL; adapt to the target dialect when specified (PostgreSQL, MySQL/MariaDB, SQLite, SQL Server, Oracle)
- For PostgreSQL: use `CREATE INDEX CONCURRENTLY`, `ALTER TABLE ... ADD COLUMN ... DEFAULT` efficiency notes for PG12+
- For MySQL: flag that DDL is not transactional; recommend `pt-online-schema-change` or `gh-ost` for large tables
- For SQL Server: include `WITH (ONLINE = ON)` where applicable

## Output Format

Produce a single fenced SQL code block structured in this order:

```sql
-- ============================================================
-- Migration: [short description]
-- Target DB: [dialect]
-- Risk Level: [LOW | MEDIUM | HIGH]
-- Generated: [date placeholder or omit]
-- ============================================================

-- PRE-CHECKS (run before migrating, verify expected results)
[validation queries with expected result comments]

-- ================================================================
-- UP MIGRATION
-- ================================================================
BEGIN;

[DDL/DML statements, one per line, with inline comments on risky ops]

COMMIT;

-- POST-CHECKS (run after migrating, verify success)
[validation queries]

-- ================================================================
-- DOWN MIGRATION (rollback)
-- ================================================================
BEGIN;

[reverse statements in reverse order]

COMMIT;
-- WARNING notes for any irreversible steps
```

- If multiple migration files are needed (e.g., separate data migration step), produce each as a labeled fenced block
- Keep SQL statements readable: one clause per line for complex statements
- Always include at least two pre-checks and two post-checks
- If the user did not specify a database dialect,
