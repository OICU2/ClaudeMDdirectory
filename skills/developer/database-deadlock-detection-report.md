---
name: database-deadlock-detection-report
description: >
  Analyzes query logs and transaction patterns to identify deadlock-prone sequences and produces actionable resolution recommendations. Use when someone says "we're getting deadlocks in production," asks about "lock contention issues," wants to "diagnose transaction conflicts," needs help with "database locking problems," or asks to "analyze query deadlocks." Delivers a structured report with root cause analysis and concrete fixes.
category: developer
tags: [database, deadlocks, performance, sql, transactions]
author: community
---

# Database Deadlock Detection Report

This skill analyzes provided query logs, transaction sequences, and schema details to identify deadlock-prone patterns and generate a prioritized remediation report.

## Analysis Workflow

1. **Collect inputs** — Request the following if not provided:
   - Raw deadlock logs or error messages (e.g., MySQL `SHOW ENGINE INNODB STATUS`, PostgreSQL `pg_locks` output, SQL Server deadlock graphs)
   - Involved queries or stored procedures
   - Table schema including indexes and foreign keys
   - Transaction isolation level in use
   - Approximate frequency and timing of deadlocks

2. **Identify lock acquisition order** — Map out the sequence in which each transaction acquires locks. Flag any two transactions that acquire the same set of locks in opposite order (classic AB/BA deadlock pattern).

3. **Classify deadlock type** — Categorize each identified deadlock:
   - Row-level vs. table-level lock conflicts
   - Gap locks or next-key lock contention (InnoDB)
   - Foreign key constraint locks
   - Hot row / hot page contention
   - Long-running transaction holding locks

4. **Trace root causes** — For each deadlock pattern, identify:
   - Which queries or code paths are involved
   - Whether missing indexes cause full or range scans that over-lock rows
   - Whether transaction scope is too broad (locks held longer than necessary)
   - Whether application retry logic is absent or insufficient

5. **Generate recommendations** — For each root cause, produce at minimum one concrete fix drawn from:
   - Reordering lock acquisition to enforce a consistent global order
   - Adding or modifying indexes to reduce lock scope
   - Narrowing transaction boundaries (commit earlier, batch smaller)
   - Switching isolation level where appropriate (e.g., READ COMMITTED vs. REPEATABLE READ)
   - Converting to optimistic locking / versioning
   - Implementing application-level retry with exponential backoff

6. **Prioritize findings** — Rank each finding by impact (frequency × blast radius) as High / Medium / Low.

## Output Format

Produce a structured Markdown report with the following sections:

```
## Deadlock Detection Report

### Summary
- Total distinct deadlock patterns identified: N
- Most affected tables: [list]
- Estimated frequency: [if determinable]

### Deadlock Pattern #1: [Short descriptive title]
**Type:** [Classification]
**Severity:** High / Medium / Low
**Transactions involved:**
  - Transaction A: [query or code path]
  - Transaction B: [query or code path]
**Lock acquisition sequence:**
  - Transaction A locks [resource X], then waits for [resource Y]
  - Transaction B locks [resource Y], then waits for [resource X]
**Root cause:** [1–3 sentences]
**Recommendations:**
  1. [Specific actionable fix with example SQL or code snippet if applicable]
  2. [Alternative or complementary fix]

[Repeat for each pattern]

### Quick Wins
[Bulleted list of changes that resolve multiple patterns or are low-effort/high-impact]

### Monitoring Recommendations
[Specific queries or tooling to detect recurrence, e.g., pg_stat_activity query, deadlock logging config]
```

- Include actual SQL snippets or configuration changes wherever possible
- Keep each root cause explanation under 4 sentences
- Do not recommend fixes that cannot be tied directly to an identified pattern
