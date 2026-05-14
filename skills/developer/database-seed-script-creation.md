---
name: database-seed-script-creation
category: developer
description: >
  Creates deterministic database seed scripts that populate development and test environments with realistic, schema-compliant relational data sets. Use when someone says "I need seed data for my database", asks about populating a test environment, wants to generate realistic sample records, needs to set up a development database with consistent data, or is building fixtures for integration tests.
tags: [database, seeding, testing, sql, fixtures]
author: community
---

# Database Seed Script Creation

This skill generates deterministic, idempotent seed scripts that populate development and test databases with realistic relational data respecting all schema constraints, foreign keys, and business rules.

## Seed Script Workflow

1. **Infer schema structure** — Extract table definitions, column types, constraints, foreign key relationships, and unique indexes from any provided schema files, migrations, ORM models, or described structure.

2. **Determine insertion order** — Resolve foreign key dependencies and build a topologically sorted insertion sequence so parent records always exist before child records.

3. **Generate realistic data** — Use domain-appropriate values: real-sounding names, valid email formats, plausible dates, correct enums, and coherent cross-record relationships (e.g., orders belong to existing users in the same seed set).

4. **Enforce determinism** — Use fixed IDs or UUIDs (not random), hardcoded timestamps, and sequential values so the seed produces identical results on every run. Prefer explicit ID assignment over auto-increment reliance.

5. **Make scripts idempotent** — Wrap inserts with `INSERT OR IGNORE`, `ON CONFLICT DO NOTHING`, `UPSERT`, or a truncate-then-insert block so the script can be run repeatedly without errors or duplicate data.

6. **Respect volume requirements** — Default to a small but representative set (5–20 rows per table) unless a specific count is requested. Include at least one edge-case record per table (null optionals, max-length strings, boundary dates).

7. **Scope to the target stack** — Emit raw SQL for generic requests. Switch to framework-specific formats (Rails fixtures/seeds, Django fixtures, Prisma seed scripts, Sequelize seeders, TypeORM factories) when the stack is identified.

8. **Add teardown companion** — Include a matching delete or truncate block in reverse dependency order so test suites can reset state cleanly.

## Output Format

Produce a single, ready-to-run seed file containing:

- **Header comment** listing target database dialect, date, and any assumptions made
- **Truncate / cleanup block** (reverse order, wrapped in a transaction if supported)
- **Insert statements** grouped by table with a one-line comment per table explaining the data set
- **Inline comments** on any non-obvious values (e.g., hashed passwords, special status flags)
- File length scales with schema size; aim for completeness over brevity
- If a framework seeder is requested, follow its conventional file structure and class format exactly
- For multiple related tables, show explicit cross-references (e.g., `user_id: 1` matched to the user with `id: 1` inserted above)
