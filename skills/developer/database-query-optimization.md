---
name: database-query-optimization
description: >
  Analyzes slow SQL or NoSQL queries to identify performance bottlenecks and rewrite them for measurable gains.
  Use when someone says their query is slow, asks why a database query is taking too long, wants to optimize
  a SQL statement, needs help with missing indexes, or is struggling with inefficient joins or N+1 problems.
category: developer
tags: [sql, database, performance, optimization, indexing]
author: community
---

# Database Query Optimization

This skill diagnoses slow SQL or NoSQL queries, pinpoints root causes like missing indexes and bad joins, and produces rewritten queries with concrete performance improvements.

## Optimization Workflow

1. **Parse the query** — Identify query type (SELECT, INSERT, UPDATE, subquery, CTE), tables involved, JOIN conditions, WHERE clauses, ORDER BY, GROUP BY, and LIMIT usage.

2. **Request context if missing** — Ask for: database engine (PostgreSQL, MySQL, SQLite, MongoDB, etc.), approximate row counts per table, existing indexes, and EXPLAIN/EXPLAIN ANALYZE output if available.

3. **Diagnose bottlenecks** — Check for each of these in order:
   - Full table scans (missing WHERE clause indexes)
   - Non-sargable predicates (`LIKE '%value'`, functions on indexed columns, implicit type casts)
   - Cartesian products or missing JOIN conditions
   - N+1 query patterns
   - SELECT * fetching unused columns
   - Correlated subqueries that can become JOINs
   - Missing composite indexes for multi-column filters
   - Over-indexing causing slow writes

4. **Rewrite the query** — Apply fixes in priority order:
   - Replace correlated subqueries with JOINs or CTEs
   - Add covering indexes for high-selectivity filter columns
   - Push filters as early as possible (predicate pushdown)
   - Replace `OR` conditions with `UNION ALL` when indexes exist per branch
   - Use EXISTS instead of IN for large subquery result sets
   - Add composite indexes ordered by equality filters first, then range filters

5. **Generate index DDL** — Write exact `CREATE INDEX` statements with column order justified by query access patterns.

6. **Estimate improvement** — Provide a before/after complexity estimate (e.g., full scan O(n) → index seek O(log n)) and flag which changes will have the highest impact.

## Output Format

Produce a structured response with these sections:

**Diagnosis**
- Bulleted list of identified issues, each labeled with a severity: `[HIGH]`, `[MEDIUM]`, or `[LOW]`

**Optimized Query**
- Full rewritten query in a fenced SQL code block with inline comments explaining each change

**Recommended Indexes**
- Each index as a ready-to-run `CREATE INDEX` statement in a fenced SQL code block
- One-line explanation of why each index helps

**Expected Impact**
- Plain-language summary of estimated performance improvement (e.g., "eliminates full scan on orders table, expected 10–100x speedup depending on row count")
- Note any trade-offs (index maintenance cost, storage overhead)

Keep the response focused and technical. Skip preamble. If the query cannot be improved, say so directly and explain why.
