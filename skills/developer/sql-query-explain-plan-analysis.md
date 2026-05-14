---
name: sql-query-explain-plan-analysis
description: >
  Interprets database query execution plans to identify performance bottlenecks, missing indexes, and inefficient joins. Use when someone shares an EXPLAIN or EXPLAIN ANALYZE output, asks why a query is slow, wants to understand what the database is doing internally, needs help reading an execution plan, or wants suggestions to speed up a SQL query.
category: developer
tags: [sql, performance, database, query-optimization, indexes]
author: community
---

# SQL Query Explain Plan Analysis

This skill parses and interprets SQL execution plans from any major database (PostgreSQL, MySQL, SQLite, SQL Server, Oracle) to surface bottlenecks and produce concrete rewrite or index recommendations.

## Analysis Workflow

1. **Identify the database engine** from syntax clues in the plan (e.g., `Seq Scan` = PostgreSQL, `ALL` in type column = MySQL, `Table Scan` = SQL Server). Ask if ambiguous.

2. **Parse the plan tree top-down**, mapping each node type to its cost implication:
   - `Seq Scan` / `ALL` / `Table Scan` / `FULL` → full table scan, flag as high-risk if rows > 1000
   - `Hash Join` / `Nested Loop` on large row counts → join inefficiency candidate
   - `Sort` without an index → potential filesort, flag if rows > 500
   - `Filter` after a scan → predicate not pushed down or no index on filter column
   - High `rows` estimates vs. `actual rows` → stale statistics, recommend `ANALYZE`

3. **Score each flagged node** by severity:
   - 🔴 Critical: full table scan on tables > 10k estimated rows, or nested loop joining two large sets
   - 🟡 Warning: sort without index, hash join with high memory usage, filter removing > 50% of rows
   - 🟢 Info: minor row estimate mismatches, small table scans that are acceptable

4. **For each critical or warning node**, produce:
   - What the node is doing in plain English
   - Why it is expensive
   - A specific fix: exact `CREATE INDEX` statement, query rewrite, or statistics update command

5. **Check for common anti-patterns**:
   - Functions on indexed columns in WHERE clauses (`WHERE YEAR(created_at) = 2023` defeats index)
   - Implicit type casts between join columns
   - `SELECT *` contributing to wide row fetches
   - Subqueries that materialize large intermediate results instead of using CTEs or joins

6. **If the original query is provided**, write a revised version incorporating all recommendations and explain each change made.

## Output Format

Produce a structured report with these sections:

**Plan Summary**
One paragraph describing what the query does and the overall execution strategy (e.g., "PostgreSQL chooses a hash join between orders and customers, then filters on status, with a final sort for ORDER BY.").

**Findings Table**
| Severity | Node / Operation | Table / Alias | Issue | Estimated Cost Impact |
|----------|-----------------|---------------|-------|-----------------------|
| 🔴 / 🟡 / 🟢 | node name | table name | plain-English problem | High / Medium / Low |

**Recommendations**
Numbered list. Each item contains:
- **Problem**: one sentence
- **Fix**: exact SQL or command (e.g., `CREATE INDEX idx_orders_status ON orders(status, created_at);`)
- **Expected improvement**: what metric should improve and by roughly how much

**Revised Query** (if original query was provided)
Fenced SQL code block with inline comments marking each change.

**Quick Wins** (optional)
Bullet list of any one-line changes (add index, update stats, remove function wrap) that require no query rewrite.
