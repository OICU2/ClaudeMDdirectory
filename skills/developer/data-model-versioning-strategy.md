---
name: data-model-versioning-strategy
description: >
  Designs a forward-compatible data model versioning approach with migration scripts, backward compatibility rules, and deprecation timelines. Use when someone asks about versioning a database schema, wants to handle breaking changes in a data model, needs a strategy for migrating data without downtime, or is planning a deprecation timeline for legacy fields. Also activates when someone says their API or data structure needs to support multiple versions simultaneously.
category: developer
tags: [data-modeling, versioning, migrations, backward-compatibility, database]
author: community
---

# Data Model Versioning Strategy

This skill produces a structured versioning plan for data models, covering schema evolution, migration scripts, compatibility rules, and deprecation schedules so teams can ship changes without breaking existing consumers.

## Versioning Workflow

### 1. Assess the Change Type
Classify every proposed change before anything else:
- **Non-breaking (additive):** New optional fields, new tables, new enum values at the end of a list, widening a column type.
- **Breaking:** Removing fields, renaming fields, changing field types in a narrowing way, changing nullability from nullable to required, reordering enum values.
- **Data-destructive:** Dropping tables, dropping columns, truncating data.

### 2. Apply the Expand-Contract Pattern
Never perform breaking changes in a single migration. Use three phases:
1. **Expand** — Add the new structure alongside the old. Both old and new code work.
2. **Migrate** — Backfill data to the new structure. Write a migration script (see below). Deploy code that writes to both old and new.
3. **Contract** — After the deprecation window, remove the old structure. Deploy code that reads only from the new.

### 3. Write Migration Scripts
Every migration script must include:
- **Up migration:** Idempotent SQL or ORM commands (use `IF NOT EXISTS`, `IF EXISTS` guards).
- **Down migration:** Full rollback to the previous state.
- **Data backfill:** A batched operation (1,000–10,000 rows per batch) with a `WHERE backfilled_at IS NULL` guard to allow resuming.
- **Zero-downtime annotation:** Label whether the migration is safe to run with live traffic (`safe: true/false`) and explain why.

Example structure:
```sql
-- Migration: v2_add_user_display_name
-- Safe to run with live traffic: YES (additive only)

-- Up
ALTER TABLE users ADD COLUMN IF NOT EXISTS display_name VARCHAR(255);

-- Backfill (run separately, batched)
UPDATE users
SET display_name = first_name || ' ' || last_name
WHERE display_name IS NULL
LIMIT 10000;

-- Down
ALTER TABLE users DROP COLUMN IF EXISTS display_name;
```

### 4. Define Backward Compatibility Rules
Enforce these rules in code review and CI:
- Old field names must remain readable for the full deprecation window.
- New required fields must ship with a default value or be nullable until the contract phase.
- Serialization layers (JSON, Protobuf, Avro) must use field aliases or reserved field numbers when renaming.
- API responses must continue returning deprecated fields with a `X-Deprecated-Field` header or equivalent warning.

### 5. Set Deprecation Timelines
Use a tiered schedule based on consumer type:

| Consumer Type | Deprecation Notice | Removal Eligible |
|---|---|---|
| Internal services (same repo) | 1 sprint (2 weeks) | After all callers updated |
| Internal services (separate repos) | 2 sprints (4 weeks) | After audit confirms zero reads |
| External API consumers | 6 months minimum | After usage drops to zero |
| Mobile clients | 12 months minimum | After forced upgrade threshold met |

Mark deprecated fields in schema definitions with a `@deprecated(reason, removalDate)` annotation or equivalent.

### 6. Version the Schema Itself
- Use a monotonically incrementing integer version (`schema_version`) in a `schema_migrations` table.
- For event-driven or API schemas, embed a `schemaVersion` field in every payload.
- Store schema history in version control alongside migration files.

### 7. Test the Migration
Before merging:
- Run the up migration against a production-sized data snapshot.
- Verify the down
