---
name: data-migration-rollback-plan
description: >
  Designs comprehensive, step-by-step rollback procedures for database migrations so production data
  can be safely restored if a deployment fails. Use when someone needs to roll back a migration,
  asks about undoing database changes, wants to plan a safe migration deployment, needs a recovery
  strategy for schema changes, or is worried about data loss during an upgrade.
category: developer
tags: [database, migrations, rollback, disaster-recovery, devops]
author: community
---

# Data Migration Rollback Plan

Generates a detailed, executable rollback plan for database migrations that ensures production data integrity and minimizes downtime if a deployment fails.

## Rollback Plan Design Process

1. **Audit the migration scope**
   - Identify all DDL changes (CREATE, ALTER, DROP, RENAME on tables/columns/indexes)
   - Identify all DML changes (INSERT, UPDATE, DELETE affecting existing data)
   - Flag irreversible operations (e.g., DROP COLUMN with data loss, type narrowing, constraint additions)
   - Note foreign key dependencies and cascade effects

2. **Classify rollback complexity**
   - **Green (safe):** Additive-only changes (new tables, new nullable columns, new indexes) — rollback is straightforward DROP
   - **Yellow (careful):** Data transformations, column renames, type widening — rollback requires reverse transformation
   - **Red (risky):** Column drops, data purges, type narrowing, NOT NULL additions — rollback may be impossible without backups

3. **Define pre-migration checkpoints**
   - Generate the exact backup command for the database engine in use (pg_dump, mysqldump, mongodump, etc.)
   - Specify which tables need point-in-time snapshots vs. full database backup
   - Record row counts and checksums for critical tables before migration starts
   - Document current schema version and migration tool state (Flyway, Liquibase, Alembic, etc.)

4. **Write the forward migration with rollback hooks**
   - For each destructive step, write the inverse SQL immediately below it as a comment block
   - For data transformations, preserve original data in a shadow/staging column or temp table before overwriting
   - Wrap multi-step migrations in an explicit transaction where the database supports it

5. **Write the rollback script**
   - Reverse every migration step in the exact opposite order
   - Include: restore from backup instructions (if Red-classified), reverse DDL, reverse DML, index restoration, constraint restoration
   - Add verification queries after each rollback step to confirm the revert succeeded
   - Include the command to reset the migration tool's version table/history

6. **Define the rollback decision window**
   - Specify the maximum time after deployment before rollback becomes impractical (due to new writes)
   - Define the go/no-go metrics: error rate threshold, query latency threshold, application health check failures
   - Name who has authority to trigger the rollback

7. **Test the rollback procedure**
   - Provide instructions to run the full migration + rollback cycle on a staging environment
   - Include a checklist to verify rollback completeness (schema matches pre-migration baseline, row counts match, application smoke tests pass)

## Output Format

Produce a structured Markdown document with the following sections:

```
## Migration: [migration name / version]
**Risk Level:** Green | Yellow | Red
**Estimated Rollback Window:** [X minutes after deployment]
**Database Engine:** [Postgres / MySQL / etc.]

---

### Pre-Migration Checklist
- [ ] Backup command: `[exact command with flags]`
- [ ] Verify backup: `[verification command]`
- [ ] Record baseline metrics: `[SQL queries for row counts / checksums]`
- [ ] Current schema version: [value]

---

### Forward Migration Steps
1. [Step description]
   ```sql
   [SQL]
   ```
   ↩ Rollback inverse: `[inverse SQL]`

---

### Rollback Script (execute in order)
1. [Step N — last forward step reversed first]
   ```sql
   [SQL]
   ```
   Verify: `[verification query and expected result]`

---

### Post-Rollback Verification
- [ ] [Check 1]
- [ ] [Check 2]
- [ ] Reset migration version: `
