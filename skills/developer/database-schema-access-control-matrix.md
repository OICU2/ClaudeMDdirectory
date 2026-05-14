---
name: database-schema-access-control-matrix
description: >
  Analyzes database schemas and application code to produce a structured access control matrix mapping roles and services to table-level permissions. Use when someone asks about database permissions audit, wants to review which services can access which tables, needs to identify over-privileged database roles, wants to map application access patterns to schema, or is preparing a least-privilege remediation plan.
category: developer
tags: [database, security, access-control, permissions, auditing]
author: community
---

# Database Schema Access Control Matrix

Scans database schemas, ORM models, query code, and service configurations to build a complete role-to-table permission matrix and flags over-privileged access patterns requiring remediation.

## Analysis Workflow

1. **Discover schema objects**: Enumerate all tables, views, and sequences from migration files, ORM model definitions, or direct schema dumps. List each as a row in the matrix.

2. **Identify principals**: Extract all database roles, application service accounts, microservices, and user-facing roles from connection configs, environment files, IAM policies, and ORM setup code.

3. **Map actual permissions per principal**:
   - Parse `GRANT` statements in migration files and seed scripts
   - Check ORM configurations for role-bound connection strings
   - Scan service code for raw queries (SELECT, INSERT, UPDATE, DELETE, DDL)
   - Note connection pool configs that reveal which credentials each service uses

4. **Classify each permission level**:
   - `READ` — SELECT only
   - `WRITE` — INSERT, UPDATE, DELETE
   - `ADMIN` — DDL, TRUNCATE, DROP, schema alterations, or superuser grants
   - `NONE` — no access needed or granted

5. **Apply over-privilege detection rules**:
   - Flag any principal with WRITE or ADMIN on tables they only SELECT from in code
   - Flag service accounts with ADMIN on any table unless explicitly a migration runner
   - Flag user-facing roles with direct table access instead of view/stored-procedure access
   - Flag wildcard grants (`ALL TABLES`, `ALL PRIVILEGES`) without explicit justification
   - Flag shared credentials used by multiple services

6. **Generate remediation recommendations** for each flagged entry: specify the minimum required permission level and the exact SQL `REVOKE`/`GRANT` statement to apply.

## Output Format

Produce the following sections in order:

### Access Control Matrix

A markdown table with:
- Columns: `Table/View`, then one column per principal (role or service name)
- Cells: `READ`, `WRITE`, `ADMIN`, or `—` (none)
- Bold any cell that is over-privileged

```
| Table            | api_service | reporting_svc | admin_role | migration_runner |
|------------------|-------------|---------------|------------|-----------------|
| users            | **WRITE**   | READ          | ADMIN      | ADMIN           |
| audit_logs       | READ        | READ          | **ADMIN**  | ADMIN           |
| sessions         | WRITE       | —             | **ADMIN**  | ADMIN           |
```

### Over-Privilege Findings

Numbered list, one entry per flagged cell:

```
1. [Principal] → [Table]: Granted WRITE, only requires READ
   Evidence: No INSERT/UPDATE/DELETE found in service codebase
   Remediation: REVOKE INSERT, UPDATE, DELETE ON [table] FROM [role];
```

### Remediation SQL Block

A single copy-pasteable SQL block with all `REVOKE` and `GRANT` statements needed to reach least-privilege state, ordered by principal.

### Summary Stats

- Total principals audited
- Total tables audited
- Number of over-privilege findings (broken down by severity: ADMIN→should-be-READ, WRITE→should-be-READ, ADMIN→should-be-WRITE)
- Estimated risk level: Low / Medium / High / Critical
