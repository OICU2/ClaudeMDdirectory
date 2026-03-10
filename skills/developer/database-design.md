---
name: database-design
description: >
  Designs normalized, performant database schemas for relational and NoSQL databases with attention to scalability and integrity. Use when someone says "design a database for," asks about "schema design," wants to "model data for," needs help with "table structure," or asks "how should I store" data for an application.
category: developer
tags: [database, sql, schema, nosql, data-modeling]
author: community
---

# Database Design Skill

Produces complete, production-ready database schemas with entity relationships, indexing strategies, and design rationale when asked to model or structure data.

## Schema Design Workflow

1. **Extract entities and requirements** — Identify core entities, cardinality of relationships (1:1, 1:N, M:N), access patterns, and scale expectations from the user's description.

2. **Choose the right database type** — Select relational (PostgreSQL, MySQL) for structured data with complex relationships; document stores (MongoDB) for flexible schemas; key-value (Redis) for caching/sessions; columnar for analytics. Justify the choice.

3. **Design normalized relational schemas** — Apply 3NF by default. Split M:N relationships into junction tables. Use surrogate primary keys (UUIDs or auto-increment integers). Define foreign keys explicitly.

4. **Define columns with precision** — Specify exact data types (VARCHAR(255) not TEXT for indexed fields, DECIMAL(10,2) not FLOAT for currency, TIMESTAMPTZ not DATETIME for timestamps). Add NOT NULL constraints where applicable. Include `created_at` and `updated_at` on every table.

5. **Design indexes strategically** — Add indexes on all foreign keys. Add composite indexes for common query patterns (WHERE + ORDER BY columns). Flag columns that should be unique. Warn against over-indexing write-heavy tables.

6. **Address NoSQL data modeling separately** — For document stores, embed data that is always read together; reference data queried independently. Show example document structures. Identify partition/shard keys explicitly.

7. **Call out design decisions** — Explain trade-offs made (denormalization for read performance, soft deletes via `deleted_at`, enum vs lookup table).

8. **Flag potential issues** — Note N+1 query risks, missing cascade rules, columns that will need full-text search, or fields likely to require future sharding.

## Output Format

Produce the following sections in order:

**1. Entity Overview** — Bullet list of entities and their purpose (2–5 words each).

**2. Schema DDL** — Complete SQL `CREATE TABLE` statements with all columns, types, constraints, primary keys, foreign keys, and indexes. Use PostgreSQL syntax by default unless another DB is specified.

```sql
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       VARCHAR(255) NOT NULL UNIQUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
```

**3. Entity Relationship Summary** — Plain-English description of each relationship (e.g., "A user has many orders; an order belongs to one user").

**4. Indexing Strategy** — Table listing each index, the columns covered, and why it exists.

**5. Design Decisions** — Numbered list of notable choices and their rationale (3–6 items).

**6. Suggested Next Steps** — 2–4 concrete follow-up actions (e.g., add full-text search, set up row-level security, define archival strategy).