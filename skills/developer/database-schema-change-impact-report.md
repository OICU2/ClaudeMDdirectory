---
name: database-schema-change-impact-report
description: >
  Analyzes a proposed database schema change and identifies all downstream code likely to break.
  Use when someone says "I'm changing a table schema", asks about "what will break if I rename this column",
  or wants to "assess the impact of a migration", "audit schema change risk", or "find all code affected by a schema update".
category: developer
tags: [database, schema, migrations, impact-analysis, sql]
author: community
---

# Database Schema Change Impact Report

This skill performs a comprehensive blast-radius analysis of a proposed schema change, surfacing every query, service, model, and config that references the affected tables or columns.

## Analysis Workflow

1. **Parse the proposed change** — Identify the exact schema delta: column rename, type change, column drop, table rename, constraint addition, index change, or table drop. If not explicitly stated, ask for the before/after DDL.

2. **Enumerate affected identifiers** — List every table name, column name, constraint name, and index name that is being added, removed, or modified.

3. **Search for references across the codebase** in this priority order:
   - Raw SQL strings (SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER)
   - ORM model definitions (SQLAlchemy, ActiveRecord, Hibernate, Prisma, Django models, TypeORM entities)
   - Query builder calls (`.where("column")`, `.select("column")`, `knex("table")`)
   - Migration files referencing the same table
   - Stored procedures, views, and triggers
   - Seed files and fixture data
   - API serializers and schema validators (GraphQL types, Pydantic models, Zod schemas, JSON Schema)
   - Configuration files (dbt models, Metabase, Redash, data pipeline configs)
   - Test files and factory definitions

4. **Classify each hit by break severity:**
   - 🔴 **BREAKING** — Will throw a runtime error immediately (column doesn't exist, type mismatch)
   - 🟠 **LIKELY BROKEN** — Logic will silently fail or return wrong data (wrong column used, missing NOT NULL default)
   - 🟡 **NEEDS REVIEW** — Dynamic queries, reflection-based access, or string interpolation that may reference the change
   - 🟢 **SAFE** — References the table but not the changed column/constraint

5. **Identify migration dependencies** — Flag any existing migrations that must run before or after this change, and detect conflicts with pending migrations.

6. **Propose a migration checklist** — For each breaking or likely-broken reference, provide the exact code fix or the precise line that needs updating.

## Output Format

Produce a structured report with these sections:

```
## Schema Change Summary
- Change type: [e.g., Column rename]
- Target: [table.column or table]
- Before: [DDL snippet]
- After: [DDL snippet]

## Impact Summary
- 🔴 Breaking: X files / Y occurrences
- 🟠 Likely Broken: X files / Y occurrences
- 🟡 Needs Review: X files / Y occurrences
- 🟢 Safe References: X files

## Breaking Changes
### [file path, line number]
- **What**: [exact reference found]
- **Why it breaks**: [specific reason]
- **Fix**: [exact code change needed]

## Likely Broken
[same structure]

## Needs Review
[same structure — flag dynamic SQL, ORMs using reflection, eval'd queries]

## Migration Checklist
- [ ] Update migration file: [path]
- [ ] Update model: [path, field]
- [ ] Update query: [path, line]
- [ ] Backfill data: [yes/no, with suggested SQL if yes]
- [ ] Coordinate deploy order: [if multi-service]

## Safe References
[list files that touch the table but are unaffected, one line each]
```

Report every file path with line numbers. Do not summarize away individual occurrences. If the codebase is large, group by service or module but preserve all file-level detail within each group.
