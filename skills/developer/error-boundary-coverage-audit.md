---
name: error-boundary-coverage-audit
category: developer
description: >
  Audits frontend and backend codebases to surface uncovered error boundaries, unhandled promise rejections, and silent failure paths that could cause production incidents. Use when someone says "find missing error handling", asks about "unhandled rejections in my code", wants to "audit error coverage", needs to "identify silent failures", or is trying to "improve error boundary coverage" across their application.
tags: [error-handling, reliability, frontend, backend, debugging]
author: community
---

# Error Boundary Coverage Audit

Scans frontend and backend code to identify uncovered error boundaries and unhandled rejection paths, producing a prioritized report of silent failure risks before they reach production.

## Audit Workflow

### 1. Scope the Codebase
- Identify all entry points: API route handlers, React component trees, event listeners, background jobs, and async utility functions
- Catalog the error handling patterns already in use (try/catch, `.catch()`, React ErrorBoundary components, global handlers)
- Note the framework and runtime (Next.js, Express, raw Node, etc.) to apply context-specific rules

### 2. Frontend Scan
- Locate every `async` function and Promise chain inside React components, hooks, and context providers
- Flag any `useEffect` that calls an async function without a `.catch()` or try/catch block
- Check that each major render subtree has a wrapping `<ErrorBoundary>` component; flag subtrees that render fetched data without one
- Identify event handlers (`onClick`, `onSubmit`, etc.) that call async functions without error handling
- Check for missing `error` and `isError` state handling in data-fetching hooks (React Query, SWR, RTK Query)

### 3. Backend Scan
- Audit every route handler for unhandled promise rejections — async handlers not wrapped in try/catch or a wrapper utility
- Check middleware chain for missing error-forwarding (`next(err)` in Express-style frameworks)
- Flag database queries, external API calls, and file system operations that lack individual error handling
- Identify background jobs, cron tasks, and queue consumers that have no failure callback or dead-letter handling
- Check for top-level `Promise.all()` calls that could silently swallow individual rejections without `Promise.allSettled()` or per-item handling

### 4. Global Handler Verification
- Confirm presence and correctness of `process.on('unhandledRejection')` and `process.on('uncaughtException')` in Node entrypoints
- Confirm a global React error boundary wraps the application root
- Check that global handlers log structured errors and do not silently swallow them

### 5. Prioritize Findings
Assign each finding a severity:
- **Critical**: user-visible crash or data loss possible, no recovery path
- **High**: silent failure that corrupts state or skips side effects
- **Medium**: degraded UX with no user feedback
- **Low**: missing logging or observability only

## Output Format

Produce a structured markdown report with the following sections:

```
## Error Boundary Coverage Audit Report

### Summary
- Files scanned: N
- Critical findings: N | High: N | Medium: N | Low: N

### Critical Findings
| # | File | Line | Issue | Recommendation |
|---|------|------|-------|----------------|
| 1 | src/api/orders.ts | 42 | Async route handler with no try/catch | Wrap with asyncHandler() or add try/catch |

### High Findings
[same table format]

### Medium Findings
[same table format]

### Low Findings
[same table format]

### Recommended Fixes

#### [Top 3 highest-impact fixes with code snippets]

**Before:**
```ts
// problematic code
```
**After:**
```ts
// corrected code
```

### Global Handler Status
- [ ] Node unhandledRejection handler: present / missing
- [ ] Node uncaughtException handler: present / missing
- [ ] React root ErrorBoundary: present / missing
```

- Keep each finding row to one clear issue and one actionable recommendation
- Provide code snippets only for Critical and High severity items
- Cap the report at the top 20 findings if the codebase has many; note total count in the summary
