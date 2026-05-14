---
name: database-migration-pre-flight-checklist
description: >
  Generates a comprehensive, stepwise pre-flight checklist covering safety checks, backup
  verification, and rollback procedures before executing any database migration. Use when
  someone says "I'm about to run a migration," asks about preparing for a database schema
  change, wants to safely deploy database updates, needs to verify their migration is ready
  to run, or is worried about rolling back a failed migration.
category: developer
tags: [database, migrations, safety, devops, checklist]
author: community
---

# Database Migration Pre-Flight Checklist

This skill produces a tailored, stepwise safety checklist Claude generates before any database migration is executed, covering environment verification, backup confirmation, rollback readiness, and go/no-go criteria.

## Pre-Flight Checklist Workflow

### 1. Gather Migration Context
Ask the user (or infer from context) for:
- Database engine and version (PostgreSQL, MySQL, SQLite, etc.)
- Migration tool in use (Flyway, Liquibase, Alembic, ActiveRecord, raw SQL, etc.)
- Target environment (local, staging, production)
- Scope of the migration (DDL changes, data transforms, index operations, table drops, etc.)
- Estimated affected row count and table sizes
- Deployment window and rollback time budget

### 2. Generate the Checklist

Produce a numbered checklist organized into the following phases. Each item must be actionable with a checkbox (`[ ]`), a one-line action, and a brief "why it matters" note.

**Phase 1 — Environment & Access Checks**
- Confirm connection string points to the correct target environment
- Verify database user has required privileges (ALTER, CREATE, DROP, INSERT, etc.)
- Confirm no other migrations are in-flight or locks are held on target tables
- Check current database version matches migration baseline

**Phase 2 — Backup Verification**
- Confirm a full database backup was taken within the last [N hours, based on environment]
- Verify the backup is restorable (restore test or checksum validation)
- Confirm backup storage location and retention policy
- For large tables, confirm incremental/partial backup if applicable

**Phase 3 — Migration Script Review**
- Review the migration script for irreversible operations (DROP, TRUNCATE, column removal)
- Confirm idempotency or that migration state tracking prevents double-runs
- Check for missing indexes on foreign keys or columns added in this migration
- Identify any long-running operations (full-table scans, bulk updates) and estimate duration
- Confirm transaction wrapping is correct (DDL outside transactions for MySQL, etc.)

**Phase 4 — Rollback Readiness**
- Write or confirm a tested rollback/down migration script exists
- Verify rollback does not cause data loss (e.g., re-adding a dropped column loses data)
- Confirm the rollback has been dry-run or tested in a lower environment
- Identify the point-of-no-return step (after which rollback requires restore from backup)

**Phase 5 — Coordination & Communication**
- Notify dependent teams or services of the maintenance window
- Confirm the application can tolerate the schema state mid-migration (feature flags, deploys paused)
- Identify who has authority to call a rollback and how to reach them
- Confirm monitoring and alerting are active on the target database

**Phase 6 — Go / No-Go Criteria**
- List explicit pass/fail conditions; migration must not proceed if any are unmet:
  - Backup verified ✅
  - Rollback script tested ✅
  - Target environment confirmed ✅
  - No active locks on critical tables ✅
  - Stakeholder sign-off received (for production) ✅

### 3. Flag High-Risk Items
Automatically flag any checklist item as `⚠️ HIGH RISK` if the migration involves:
- `DROP TABLE`, `DROP COLUMN`, or `TRUNCATE`
- Bulk data transforms on tables > 1M rows
- Removing a `NOT NULL` constraint or changing a column type
- Production environment with no tested rollback

## Output Format

Produce a Markdown document with:
- **Title**: `## Pre-Flight Checklist: [Migration Name or Description]`
- **Summary block**: 3-line summary of migration
