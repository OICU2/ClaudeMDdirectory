---
name: database-connection-leak-detection-plan
description: >
  Analyzes connection pool exhaustion logs and proposes targeted code-level fixes to eliminate database connection leaks. Use when someone says their connection pool is exhausted, asks why database connections are not being released, or wants to diagnose why their app throws "too many connections" errors. Also activates when someone shares connection pool logs and needs a remediation plan, or wants to find where connections are leaking in their codebase.
category: developer
tags: [database, connection-pool, leak-detection, debugging, performance]
author: community
---

# Database Connection Leak Detection Plan

This skill analyzes connection pool exhaustion logs and code patterns to identify the root cause of database connection leaks and produce a prioritized, code-level remediation plan.

## Analysis Workflow

### 1. Gather Context
- Request connection pool logs, error messages, and stack traces if not provided
- Ask for the database driver/ORM in use (e.g., pg, SQLAlchemy, HikariCP, Sequelize, ActiveRecord)
- Identify pool configuration: `max`, `min`, `idleTimeoutMillis`, `connectionTimeout`
- Note the runtime language and framework (Node.js, Python, Java, Ruby, etc.)

### 2. Identify Leak Patterns in Logs
Scan logs for these specific signals:
- Pool size reaching `max` and blocking on `connectionTimeout`
- Connections acquired but never returned (long-held or dangling connections)
- Missing `release()`, `close()`, or `commit()`/`rollback()` calls in stack traces
- Error paths that exit before returning connections to the pool
- Nested transactions or re-entrant connection acquisition

### 3. Locate Leak Sites in Code
Search the codebase for these high-risk patterns:
- `getConnection()` / `acquire()` calls not wrapped in `try/finally` blocks
- `async` functions that `await` after acquiring a connection but before releasing it, with unhandled rejection paths
- Middleware or request handlers that open connections without guaranteed cleanup
- ORM sessions/units-of-work not closed after use
- Missing `using` / `with` / `try-with-resources` constructs where the language supports them
- Conditional branches that `return` early without releasing the connection

### 4. Classify Each Leak by Severity
- **Critical**: Connection never released under any code path
- **High**: Connection not released on error/exception paths only
- **Medium**: Connection released but after unnecessary delay (e.g., held across network calls)
- **Low**: Pool misconfiguration amplifying an otherwise minor leak

### 5. Produce Code-Level Fixes
For each identified leak site:
- Show the **before** snippet (the leaking code)
- Show the **after** snippet (the fixed code) with inline comments explaining the change
- Specify the exact file and line range if source was provided
- Use the idiom appropriate to the language (e.g., `try/finally` in Java, `async with` in Python, `try/catch/finally` in JS)

### 6. Recommend Configuration Safeguards
- Suggest pool monitoring hooks (e.g., `pool.on('connect')`, HikariCP MBean metrics)
- Recommend `connectionTimeout` and `idleTimeout` values based on observed patterns
- Propose integration test assertions that fail when the pool is not fully returned after each test

## Output Format

Produce a structured remediation report with these sections:

**1. Leak Summary Table**
| # | Location | Severity | Pattern Detected |
|---|----------|----------|-----------------|
| 1 | `db/queries.js:42` | Critical | No release on error path |

**2. Root Cause Analysis**
2–4 sentences explaining the dominant leak pattern observed across the codebase or logs.

**3. Code Fix Blocks**
One fenced code block per leak site showing before/after with comments. Label each block with the file path and severity.

**4. Configuration Recommendations**
Bullet list of pool settings and monitoring changes, each with a one-line rationale.

**5. Verification Steps**
Numbered list of concrete steps to confirm leaks are resolved (e.g., load test command, metric to watch, log line that should disappear).

Total length: concise but complete — typically 300–600 words plus code blocks. Omit sections that
