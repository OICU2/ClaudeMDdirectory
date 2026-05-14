---
name: async-vs-sync-operation-audit
description: >
  Scans a codebase to identify blocking synchronous operations that should be refactored to asynchronous patterns, then produces a prioritized refactoring list with concrete implementation guidance. Use when someone says "my app feels slow or unresponsive," asks about converting sync code to async, wants to find blocking operations in their codebase, is concerned about event loop blocking, or needs to improve concurrency in their application.
category: developer
tags: [async, performance, refactoring, concurrency, audit]
author: community
---

# Async vs Sync Operation Audit

This skill scans a codebase for blocking synchronous operations, ranks them by impact, and delivers actionable async refactoring guidance with before/after code examples.

## Audit Workflow

1. **Identify Scope**
   - Ask for the target directory, file glob, or language if not specified
   - Confirm whether the codebase is Node.js, Python, Ruby, Go, or mixed — async patterns differ per language

2. **Scan for Blocking Patterns**
   Search for these categories of synchronous operations:
   - **File I/O**: `fs.readFileSync`, `fs.writeFileSync`, `open()` without `async with`, `readlines()`
   - **Network calls**: synchronous HTTP clients (`requests.get` in a sync context, `http.get` without callbacks)
   - **Database queries**: ORM calls without `await`, synchronous DB drivers
   - **Child processes**: `execSync`, `spawnSync`, `subprocess.run` with blocking waits
   - **Crypto/hashing**: `crypto.pbkdf2Sync`, `bcrypt.hashSync` on hot paths
   - **Sleep/delays**: `time.sleep()`, synchronous polling loops
   - **JSON/serialization**: large synchronous parse operations on the main thread

3. **Assess Impact Per Finding**
   For each identified operation, evaluate:
   - **Location**: file path, line number, function name
   - **Frequency**: called once at startup vs. called per request/event
   - **Blocking duration**: estimated ms (I/O-bound vs. CPU-bound)
   - **Thread/event loop context**: is this on the main thread, a worker, or already in a thread pool?
   - **Risk if left unchanged**: latency spike, throughput cap, deadlock potential

4. **Rank by Priority**
   Assign each finding a priority tier:
   - **P1 – Critical**: blocking the main thread/event loop on every request (e.g., sync DB call in Express route handler)
   - **P2 – High**: blocking on startup or in frequently called utilities
   - **P3 – Medium**: blocking in background jobs or low-frequency paths
   - **P4 – Low**: acceptable sync usage (e.g., config read at boot, CLI scripts)

5. **Generate Refactoring Guidance**
   For each P1 and P2 finding, provide:
   - The specific async alternative (`fs.promises.readFile`, `asyncio.run`, `await db.query(...)`)
   - A before/after code snippet (10–20 lines max)
   - Any required dependency changes (e.g., swap `mysql` for `mysql2/promise`)
   - Notes on error handling changes (sync `try/catch` vs. async `try/catch` or `.catch()`)
   - Whether the calling function signature must change (propagating `async`/`await` up the call stack)

6. **Flag Cascade Effects**
   Identify functions that will need to become `async` due to refactoring a dependency — list these as "cascade changes" so the developer understands the full scope before starting.

## Output Format

Produce a structured report with these sections:

```
## Async/Sync Audit Report

### Summary
- Files scanned: N
- Blocking operations found: N
- P1 Critical: N | P2 High: N | P3 Medium: N | P4 Low: N
- Estimated refactoring effort: [Small / Medium / Large]

### Findings (Ranked by Priority)

#### [P1] <short title> — `path/to/file.js:42`
- **Operation**: `fs.readFileSync('./config.json')`
- **Context**: Called inside Express route handler on every POST
