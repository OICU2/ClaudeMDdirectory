---
name: database-foreign-key-constraint-audit
description: >
  Analyzes database schemas to find missing foreign key constraints, redundant relationships, and
  incorrectly configured cascade behaviors. Use when someone says "audit my database schema",
  asks about "missing foreign keys", wants to "check referential integrity", mentions "cascade
  delete issues", or needs to "validate database relationships".
category: developer
tags: [database, schema, foreign-keys, referential-integrity, sql]
author: community
---

# Database Foreign Key Constraint Audit

This skill inspects database schemas to surface missing, redundant, or misconfigured foreign key constraints and delivers a prioritized remediation plan.

## Audit Workflow

1. **Collect schema input** — Request the schema definition (DDL, ORM models, migration files, or ER diagram). If the user provides a live connection, ask for the output of the relevant introspection query (e.g., `information_schema.KEY_COLUMN_USAGE` for MySQL/Postgres, `pragma foreign_key_list` for SQLite).

2. **Identify candidate relationships** — Scan all columns for naming patterns that imply a foreign key (`*_id`, `*_uuid`, `fk_*`, `ref_*`, `parent_*`). Cross-reference against existing constraint definitions.

3. **Classify each finding** into one of four categories:
   - **Missing** — column clearly references another table but has no FK constraint defined
   - **Redundant** — duplicate constraints or constraints superseded by a composite key
   - **Incorrect cascade** — `ON DELETE`/`ON UPDATE` action mismatches the business rule (e.g., `CASCADE` on an auditable table, `RESTRICT` where soft-delete is expected)
   - **Orphan risk** — no constraint and evidence of existing orphaned rows (flag for data cleanup)

4. **Evaluate cascade semantics** for every existing FK:
   - `CASCADE` — only appropriate when child rows are owned by and meaningless without the parent
   - `SET NULL` — appropriate when the relationship is optional
   - `RESTRICT` / `NO ACTION` — appropriate when deletion must be blocked until children are removed
   - `SET DEFAULT` — flag as rare; verify a valid default exists

5. **Check index coverage** — Every FK column should have a supporting index. Flag unindexed FK columns as a performance issue alongside the constraint finding.

6. **Prioritize findings** by severity:
   - **Critical**: missing constraints on high-traffic or financial tables
   - **High**: incorrect cascade on tables with audit/compliance requirements
   - **Medium**: missing indexes on FK columns
   - **Low**: redundant constraints or cosmetic naming issues

7. **Generate remediation SQL** for each finding using the correct dialect (ask if ambiguous: Postgres, MySQL, SQLite, SQL Server, Oracle).

## Output Format

Produce a structured report with the following sections:

### Summary Table
| # | Table | Column | Finding Type | Severity | Recommended Action |
|---|-------|--------|--------------|----------|--------------------|
One row per finding.

### Detailed Findings
For each finding:
- **Finding**: plain-language description of the problem
- **Risk**: what can go wrong if unaddressed
- **Fix**: exact DDL statement to resolve it, e.g.:
  ```sql
  ALTER TABLE orders
    ADD CONSTRAINT fk_orders_customer_id
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE RESTRICT ON UPDATE CASCADE;
  ```

### Orphan Check Queries
For every missing constraint, include a ready-to-run query to detect existing orphaned rows before applying the constraint:
```sql
SELECT o.id FROM orders o
LEFT JOIN customers c ON o.customer_id = c.id
WHERE c.id IS NULL;
```

### Migration Script
A single, ordered, transaction-wrapped script combining all fixes — safe to review and apply as a batch. Include `BEGIN`/`COMMIT` and `ROLLBACK` on error where the dialect supports it.

Keep the report scannable. Use severity badges (🔴 Critical, 🟠 High, 🟡 Medium, 🔵 Low) in the summary table. Total length scales with schema size; aim for one detailed finding block per issue, no padding.
