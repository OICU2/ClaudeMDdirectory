---
name: database-schema-documentation
description: >
  Produces human-readable documentation of database schemas including table relationships, column constraints, and index rationale. Use when someone says "document my database schema," asks to "explain the database structure," wants to "generate schema docs," needs to "document table relationships," or asks "what does this DDL mean."
category: developer
tags: [database, documentation, schema, sql, orm]
author: community
---

# Database Schema Documentation

This skill analyzes DDL statements or ORM model definitions and produces clear, structured documentation explaining tables, columns, constraints, relationships, and indexes for both technical and non-technical audiences.

## Documentation Workflow

1. **Identify the input type** — determine whether the input is raw DDL (CREATE TABLE statements), an ORM model (SQLAlchemy, Django, ActiveRecord, Prisma, etc.), or a migration file. Adjust parsing accordingly.

2. **Extract schema components** for each table:
   - Table name and its inferred business purpose
   - Each column: name, data type, nullability, default value, and plain-English meaning
   - Primary keys and their generation strategy (serial, UUID, composite, etc.)
   - Foreign keys and what relationship they represent (one-to-one, one-to-many, many-to-many)
   - Unique constraints and the business rule they enforce
   - Check constraints translated into plain English
   - Indexes with an explanation of why each likely exists (query optimization, uniqueness enforcement, full-text search, etc.)

3. **Map relationships** — build a relationship summary listing every foreign key link as a sentence: "Each `order` belongs to one `customer`; a `customer` can have many `orders`."

4. **Flag design observations** — note missing indexes on foreign key columns, nullable columns that appear to be required by convention, overly broad column types, or tables lacking a primary key. Frame these as observations, not criticisms.

5. **Produce an entity overview** — one paragraph summarizing the overall domain the schema models (e.g., e-commerce, user authentication, inventory management).

## Output Format

Produce a Markdown document with the following sections in order:

```
# Schema Documentation: [schema/database name or "Unnamed Schema"]

## Overview
[1–2 paragraph summary of the domain and major entities]

## Entity Relationship Summary
[Bullet list of plain-English relationship statements]

## Tables

### `table_name`
**Purpose:** [One sentence describing what this table stores]

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| ...    | ...  | ...      | ...     | ...         |

**Constraints:**
- Primary Key: [columns]
- Foreign Keys: [column → referenced_table.column — relationship description]
- Unique: [columns — business rule enforced]
- Checks: [plain-English explanation]

**Indexes:**
- `index_name` on ([columns]) — [reason this index likely exists]

---
[Repeat for each table]

## Design Observations
- [Observation 1]
- [Observation 2]
```

- Use fenced code blocks only for inline examples, not for the entire document.
- Keep column descriptions to one sentence; avoid restating the column name.
- If a relationship table (junction/bridge) is detected, explicitly label it as such and name both sides of the many-to-many relationship it enables.
- Length scales with schema size: small schemas (≤5 tables) should be fully documented on one page; large schemas should document each table completely but keep the overview concise.
