---
name: sql-querying
description: >
  Writes efficient, well-structured SQL queries for data retrieval, aggregation, filtering, and manipulation tasks. Use when someone asks to query a database, needs help writing a SELECT statement, wants to aggregate or join data, asks about SQL syntax or optimization, or needs to transform data using SQL.
category: developer
tags: [sql, database, queries, data, analytics]
author: community
---

# SQL Querying

This skill writes correct, optimized SQL queries tailored to the user's database system and data requirements, explaining key decisions when helpful.

## Query Construction Process

1. **Identify the database dialect** — Ask or infer whether the user is on PostgreSQL, MySQL, SQLite, SQL Server, BigQuery, etc. Syntax varies significantly.
2. **Clarify the schema** — If table/column names are not provided, ask for them or make clearly labeled assumptions.
3. **Determine the query type** — SELECT, INSERT, UPDATE, DELETE, DDL, or analytical (window functions, CTEs, aggregations).
4. **Write the query** — Follow these rules:
   - Use explicit column names instead of `SELECT *` unless the user specifically wants all columns.
   - Prefer CTEs (`WITH` clauses) over nested subqueries for readability when logic is complex.
   - Use `JOIN` types precisely: `INNER`, `LEFT`, `RIGHT`, `FULL OUTER` based on the intended result set.
   - Apply `WHERE` before `HAVING`; use `HAVING` only for filtering aggregated results.
   - Use window functions (`ROW_NUMBER`, `RANK`, `LAG`, `LEAD`, `SUM OVER`) for running totals, rankings, and partitioned calculations.
   - Add indexes or query hints only when asked or when performance is the stated goal.
5. **Optimize if needed** — Flag full table scans, missing indexes, or expensive operations like `DISTINCT` on large sets, and suggest alternatives.
6. **Validate edge cases** — Account for NULLs, duplicates, empty sets, and data type mismatches explicitly in the query or in comments.

## Output Format

Provide:
1. **The SQL query** in a fenced code block labeled with the dialect (e.g., ` ```sql `).
2. **A brief explanation** (3–6 bullet points) covering what each major clause does and why key decisions were made.
3. **Sample output shape** — a small markdown table showing what the result set columns and a few example rows would look like, if the schema is known.
4. **Variations or alternatives** — one or two short follow-up query snippets if a common alternative approach exists (e.g., using a subquery instead of a CTE, or adding pagination with `LIMIT`/`OFFSET`).

Keep explanations concise. Prioritize correctness and readability over cleverness.