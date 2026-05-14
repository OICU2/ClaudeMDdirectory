---
name: graphql-query-complexity-analysis
category: developer
description: >
  Analyzes GraphQL queries to identify overly complex or deeply nested operations that could cause performance bottlenecks in production. Use when someone shares a GraphQL query for review, asks why their GraphQL API is slow, wants to optimize their query structure, mentions N+1 problems in GraphQL, or needs to enforce query complexity limits before deployment.
tags: [graphql, performance, api, optimization, complexity]
author: community
---

# GraphQL Query Complexity Analysis

This skill analyzes GraphQL queries for complexity issues, nesting depth, N+1 risks, and field explosion patterns, then provides a scored report with concrete optimization recommendations.

## Analysis Workflow

### 1. Parse Query Structure
- Identify all operation types (query, mutation, subscription)
- Map the full field selection tree
- Count nesting depth per branch (flag anything beyond 4 levels)
- Detect fragment usage and inline fragment spreads

### 2. Calculate Complexity Metrics
Evaluate each of the following:

**Depth Score**
- Count the maximum nesting depth
- Flag: >4 levels = warning, >6 levels = critical

**Breadth Score**
- Count fields selected at each level
- Flag: >10 fields at any single level = warning, >20 = critical

**N+1 Risk Detection**
- Identify list fields (`[Type]`) that contain nested list fields or relation fields
- Flag patterns like: `users { posts { comments { author { ... } } } }`
- Note missing pagination arguments (`first`, `limit`, `take`) on list fields

**Multiplier Fields**
- Locate fields returning arrays that contain other array-returning fields
- Calculate estimated resolver calls: multiply cardinalities at each level
- Flag if estimated call count exceeds 100

**Alias Abuse**
- Detect repeated root fields aliased to fetch the same data multiple times
- Flag if the same field is aliased more than 3 times in one operation

**Directive Review**
- Check for missing `@skip` or `@include` on expensive optional fields
- Note if `@deprecated` fields are in use

### 3. Assign Overall Complexity Rating
| Score | Rating |
|-------|--------|
| 0–20 | ✅ Low — production safe |
| 21–50 | ⚠️ Medium — monitor in production |
| 51–80 | 🔴 High — optimize before deploying |
| 81+ | 🚨 Critical — likely to cause timeouts or database overload |

Score formula:
`(depth × 5) + (breadth × 2) + (N+1 risks × 15) + (multiplier fields × 10) + (alias abuse × 8)`

### 4. Generate Recommendations
For each flagged issue:
- State the specific field path causing the problem
- Explain why it is problematic
- Provide a rewritten query snippet or structural change that resolves it
- Suggest server-side mitigations (DataLoader, pagination, persisted queries, query depth limiting libraries)

## Output Format

Produce a structured report with these exact sections:

```
## GraphQL Complexity Report

**Operation:** [query/mutation/subscription name or "anonymous"]
**Overall Rating:** [emoji + rating label]
**Complexity Score:** [number] / 100+

---

### Metrics Breakdown
- Max Depth: [n] [✅/⚠️/🔴]
- Max Breadth: [n] [✅/⚠️/🔴]
- N+1 Risks Detected: [n]
- Estimated Max Resolver Calls: [n]
- Alias Abuse: [yes/no]

---

### Issues Found
[For each issue:]
**[Issue Type]** — `[field.path.here]`
- Problem: [1–2 sentences]
- Fix: [specific rewrite or approach]

---

### Optimized Query
[Rewritten query incorporating all non-breaking fixes]

---

### Server-Side Recommendations
[2–4 bullet points specific to the issues found]
```

If no issues are found, state the score, confirm the query is production-safe, and note any minor style improvements.
