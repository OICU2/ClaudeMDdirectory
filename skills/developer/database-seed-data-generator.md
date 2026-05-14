---
name: database-seed-data-generator
category: developer
description: >
  Generates realistic, relationally consistent seed data scripts for development and testing environments from a provided database schema. Use when someone says "generate seed data", asks to "populate my database with test data", wants to "create realistic sample data", needs to "seed my development database", or asks for "fixture data for my schema".
tags: [database, testing, seed-data, sql, development]
author: community
---

# Database Seed Data Generator

Analyzes a provided database schema and produces complete, relationally consistent seed data scripts that respect foreign keys, constraints, and data types — ready to run in development or testing environments.

## Seed Data Generation Workflow

1. **Parse the schema** — Identify all tables, columns, data types, primary keys, foreign keys, unique constraints, NOT NULL constraints, and any CHECK constraints or enums.

2. **Determine insertion order** — Build a dependency graph from foreign key relationships. Order INSERT statements so parent tables are always seeded before child tables. Flag and handle circular dependencies explicitly.

3. **Determine record volume** — Default to 10–20 rows per table unless the user specifies a count. For junction/pivot tables, generate enough rows to create meaningful many-to-many relationships (at least 2–3 associations per parent record).

4. **Generate realistic values per column type:**
   - `VARCHAR`/`TEXT` names: use domain-appropriate words (e.g., real-sounding full names for `user_name`, product-style words for `product_name`)
   - `EMAIL`: format as `firstname.lastname@domain.com` with varied domains
   - `DATE`/`TIMESTAMP`: spread across a realistic recent range (past 2 years), respecting logical ordering (e.g., `created_at` before `updated_at`)
   - `BOOLEAN`: distribute roughly 70/30 true/false unless semantics suggest otherwise
   - `ENUM`/`CHECK` values: use only valid values from the constraint, distributed across all options
   - `DECIMAL`/`NUMERIC` for prices or amounts: use human-realistic ranges (e.g., $4.99–$299.99 for products)
   - `UUID`: generate syntactically valid UUIDs
   - Auto-increment `INT` PKs: use sequential integers starting at 1

5. **Enforce relational consistency** — Every foreign key value must reference an actually generated primary key value. Never reference a row that doesn't exist in the script.

6. **Handle special patterns:**
   - Self-referential tables (e.g., `parent_id`): seed root records first with NULL parent, then child records
   - Soft-delete columns (`deleted_at`, `is_deleted`): set to NULL/false for most rows, apply to ~10%
   - Status/state columns: distribute across all valid states

7. **Wrap in a transaction** — Enclose all INSERT statements in `BEGIN`/`COMMIT` (or dialect equivalent). Add a rollback-safe header comment.

8. **Dialect adaptation** — Default to standard SQL. If the user specifies PostgreSQL, MySQL, SQLite, or another dialect, adjust syntax accordingly (e.g., `SERIAL` vs `AUTO_INCREMENT`, quoting style, `INSERT OR IGNORE`).

9. **Add a reset block** — Prepend `TRUNCATE` or `DELETE FROM` statements in reverse dependency order so the script is re-runnable without conflicts.

## Output Format

Produce a single, complete SQL file with this structure:

```
-- ============================================
-- Seed Data: [Schema/Project Name]
-- Generated for: [dialect, e.g., PostgreSQL 15]
-- Record counts: [table: N, table: N, ...]
-- ============================================

-- RESET (run to re-seed cleanly)
[TRUNCATE/DELETE statements in reverse FK order]

-- SEED DATA
BEGIN;

-- [Table Name] ([N] records)
INSERT INTO [table] ([col1], [col2], ...) VALUES
  ([row1]),
  ([row2]),
  ...;

-- [Next Table] ([N] records)
...

COMMIT;
```

- Each table section has a comment header with table name and record count
- Values are inline multi-row INSERTs (not one statement per row) for readability
- String values use single quotes; NULLs are unquoted
