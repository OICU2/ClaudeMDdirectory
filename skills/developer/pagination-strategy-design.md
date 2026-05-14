---
name: pagination-strategy-design
category: developer
description: >
  Evaluates dataset size, query patterns, and client requirements to recommend and implement the optimal pagination strategy. Use when someone asks about paginating API results, wants to implement infinite scroll, needs to handle large dataset queries, asks about cursor vs offset pagination, or is designing a list endpoint for a backend service.
tags: [pagination, api-design, database, performance, backend]
author: community
---

# Pagination Strategy Design

Analyzes data access patterns, dataset characteristics, and client needs to recommend and implement the best pagination approach — cursor-based, offset, or keyset — with working code and query examples.

## Strategy Selection Workflow

### 1. Gather Requirements
Ask or infer the following before recommending a strategy:
- **Dataset size**: Small (<10k rows), medium (10k–1M), or large (1M+)
- **Sort order**: Static (by ID) or dynamic (by relevance, date, custom fields)
- **Client type**: REST API, GraphQL, mobile app, or data export
- **Mutation rate**: Does the underlying data change frequently during pagination?
- **Random access needed**: Must users jump to page 50, or is sequential access sufficient?
- **Database**: PostgreSQL, MySQL, MongoDB, etc. (affects syntax)

### 2. Apply Decision Rules

| Condition | Recommended Strategy |
|---|---|
| Large dataset + sequential access + high mutation rate | **Cursor-based** |
| Stable dataset + random access + admin UI | **Offset/Limit** |
| Large dataset + sorted by indexed column + no random access | **Keyset** |
| GraphQL API | **Cursor-based (Relay spec)** |
| Export / batch processing | **Keyset** |
| Small dataset (<5k rows) + simple UI | **Offset/Limit** |

### 3. Cursor-Based Pagination (Default for APIs)
- Encode the cursor as an opaque base64 string wrapping the last-seen record ID or timestamp
- Never expose raw database IDs in the cursor
- Return `next_cursor`, `prev_cursor`, and `has_more` in responses
- Invalidate cursors gracefully (return empty results, not errors)

**Implementation checklist:**
- [ ] Index the cursor column
- [ ] Use `WHERE id > :cursor` with `ORDER BY id ASC LIMIT :page_size`
- [ ] Encode cursor: `base64(JSON.stringify({ id, timestamp }))`
- [ ] Validate and sanitize decoded cursor values

### 4. Keyset Pagination (High-Performance Sequential)
- Requires a unique, indexed sort key (e.g., `(created_at, id)`)
- Use composite keys to handle ties: `WHERE (created_at, id) > (:last_created_at, :last_id)`
- Does not support random page access — communicate this constraint to clients
- Ideal for append-only tables and time-series data

### 5. Offset/Limit (Simple Use Cases Only)
- Warn about deep-page performance degradation (`OFFSET 10000` forces a full scan)
- Set a hard cap on max offset (e.g., 10,000 rows)
- Add an index on the sort column
- Recommend migrating to keyset if the dataset grows beyond 100k rows

### 6. Provide Implementation Code
Always generate:
1. The paginated SQL query or ORM query
2. The API response schema (JSON)
3. The request parameter schema
4. A cursor encode/decode utility if cursor-based

### 7. Highlight Trade-offs
For every recommendation, explicitly state:
- What this strategy cannot do (e.g., "no random access")
- Performance characteristics at scale
- Any consistency guarantees or lack thereof during concurrent writes

## Output Format

Produce a structured response with these sections:

**1. Recommendation Summary** (2–3 sentences explaining the chosen strategy and why)

**2. API Contract** — JSON schema for request params and response envelope, e.g.:
```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6IDQyfQ==",
    "has_more": true,
    "page_size": 20
  }
}
```

**3. Database Query** — Full SQL or ORM query with parameter plac
