---
name: database-cascade-delete-risk-audit
description: >
  Analyzes foreign key relationships and cascade delete rules in a database schema to identify
  unintended data loss risks. Use when someone shares a database schema and wants to check for
  cascade delete dangers, asks about foreign key safety, is worried about accidental data loss
  from deletes, or wants to audit their referential integrity rules before a migration or
  production deployment.
category: developer
tags: [database, sql, foreign-keys, data-integrity, schema-analysis]
author: community
---

# Database Cascade Delete Risk Audit

This skill inspects a database schema's foreign key and cascade delete configurations to surface relationships where a single delete operation could trigger unintended, irreversible data loss across multiple tables.

## Audit Workflow

1. **Parse the schema**: Identify all tables, primary keys, foreign keys, and their ON DELETE actions (CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION).

2. **Build a dependency graph**: Map parent-to-child relationships. For each foreign key with ON DELETE CASCADE, trace the full chain — if Table A cascades to Table B and Table B cascades to Table C, document the entire propagation path.

3. **Flag high-risk patterns**:
   - Multi-level cascade chains (depth ≥ 2 hops)
   - Cascade deletes on tables with large row counts or business-critical data (orders, payments, audit logs, users)
   - Tables with no soft-delete alternative where CASCADE is configured
   - Circular or ambiguous relationships that could cause constraint violations
   - Missing ON DELETE rules (defaults to RESTRICT or NO ACTION depending on DB engine — flag if behavior is engine-dependent and undocumented)

4. **Evaluate intent vs. risk**: For each flagged relationship, assess whether CASCADE is intentional (e.g., deleting a session should delete session tokens) or dangerous (e.g., deleting a user should not silently delete purchase history).

5. **Recommend mitigations**:
   - Replace CASCADE with RESTRICT and handle cleanup explicitly in application logic
   - Use soft deletes (deleted_at timestamp) on parent tables with business-critical children
   - Add pre-delete triggers or application-layer guards
   - Suggest ON DELETE SET NULL where orphan records are acceptable

## Output Format

Produce a structured audit report with these sections:

**Summary**: One-paragraph overview of total foreign keys found, how many use CASCADE, and overall risk level (Low / Medium / High / Critical).

**Cascade Chain Map**: A plain-text tree or list showing each cascade chain:
```
users → orders (CASCADE)
  └── orders → order_items (CASCADE)
        └── order_items → order_item_adjustments (CASCADE)
```

**Risk Register**: A table with columns:
| Relationship | ON DELETE Action | Risk Level | Reason | Recommendation |

**Critical Findings**: Bullet list of the top issues requiring immediate attention, with a one-sentence explanation of what data would be lost and under what condition.

**Safe Patterns**: Brief list of cascade rules that appear intentional and low-risk, so the developer knows what was reviewed and cleared.

Keep the report scannable. Use risk levels: 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low.
