---
name: database-normalization-review
category: developer
description: >
  Audits an existing database schema for normalization violations and recommends concrete restructuring to eliminate redundancy and data anomalies. Use when someone says "review my database schema," asks about "normalization problems," wants to "clean up their tables," needs help with "database redesign," or mentions issues with "data redundancy" or "update anomalies."
tags: [database, sql, schema-design, normalization, data-modeling]
author: community
---

# Database Normalization Review

This skill audits a provided database schema against normal form rules (1NF through BCNF) and produces a prioritized restructuring plan with concrete SQL recommendations.

## Normalization Review Workflow

### 1. Parse the Schema
- Accept schema as DDL statements, an ERD description, or a table/column list
- If schema is ambiguous or incomplete, ask for: column data types, sample data rows, primary/foreign key definitions, and known business rules

### 2. Evaluate Each Normal Form in Order

**1NF — Eliminate repeating groups and non-atomic values**
- Flag columns that store multiple values (comma-separated lists, JSON arrays used as relations, numbered columns like `phone1`, `phone2`)
- Flag tables missing a primary key or with duplicate rows

**2NF — Eliminate partial dependencies (applies to composite PKs)**
- Identify non-key columns that depend on only part of a composite primary key
- List each violation as: `[column] depends on [partial key], not full PK [full key]`

**3NF — Eliminate transitive dependencies**
- Identify non-key columns that determine other non-key columns
- List each violation as: `[column A] → [column B], where neither is a key`

**BCNF — Eliminate all non-trivial functional dependency violations**
- Check whether every determinant is a candidate key
- Flag cases where a non-key column determines part of a candidate key

### 3. Identify Anomaly Risks
For each violation found, classify the resulting risk:
- **Insert anomaly**: Cannot add data without unrelated data being present
- **Update anomaly**: Changing one fact requires updating multiple rows
- **Delete anomaly**: Deleting a row unintentionally destroys other facts

### 4. Generate Restructuring Recommendations
- Propose new table structures with revised PKs and FKs
- Provide `CREATE TABLE` DDL for each new or modified table
- Provide migration logic (`INSERT INTO ... SELECT`) to populate new tables from old ones
- Preserve all original data relationships — do not drop columns without confirming data is migrated

### 5. Prioritize by Impact
Rank each recommendation:
1. **Critical** — Causes data loss or integrity failures
2. **High** — Causes frequent update/insert/delete anomalies
3. **Medium** — Causes redundancy but no immediate integrity risk
4. **Low** — Style or optimization improvements

---

## Output Format

Produce a structured report with these sections:

```
## Normalization Audit Report

### Schema Summary
- Tables reviewed: [list]
- Highest normal form currently satisfied: [1NF / 2NF / 3NF / BCNF / None]

### Violations Found

#### [Table Name]
- **Violation**: [NF level violated]
- **Details**: [specific columns and dependency causing the violation]
- **Anomaly risk**: [insert / update / delete anomaly description]
- **Priority**: [Critical / High / Medium / Low]

### Recommended Restructuring

#### [Change Title]
- **Rationale**: [one sentence]
- **New DDL**:
  ```sql
  CREATE TABLE ...
  ```
- **Migration**:
  ```sql
  INSERT INTO ... SELECT ...
  ```

### Summary Table
| Table | Violation | NF Level | Priority |
|-------|-----------|----------|----------|
| ...   | ...       | ...      | ...      |
```

- If no violations are found, explicitly confirm which normal form the schema satisfies and why.
- Cap recommendations at the schema's apparent complexity — don't over-normalize OLAP or reporting schemas without flagging the trade-off.
