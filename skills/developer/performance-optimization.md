---
name: performance-optimization
category: developer
description: >
  Profiles and optimizes application performance across speed, memory usage, and throughput dimensions.
  Use when someone says "my app is slow", asks about bottlenecks or latency, wants to reduce memory usage,
  needs to improve throughput or response times, or asks why their code is performing poorly.
tags: [performance, optimization, profiling, memory, throughput]
author: community
---

# Performance Optimization

Analyzes code and systems to identify performance bottlenecks and delivers prioritized, actionable optimizations for speed, memory, and throughput.

## Optimization Workflow

1. **Identify the performance domain** — Determine whether the issue is CPU-bound, memory-bound, I/O-bound, or network-bound before suggesting solutions.

2. **Request profiling data if absent** — Ask for profiler output, flame graphs, memory snapshots, or benchmark results. If unavailable, instrument the code to gather them: add timing logs, memory counters, or suggest profiling tools (`perf`, `py-spy`, `Chrome DevTools`, `pprof`, `JProfiler`, etc.).

3. **Locate the critical path** — Identify the top 3 hotspots by time or memory consumption. Focus exclusively on these; ignore sub-1% contributors.

4. **Classify each bottleneck** — Label every issue with its type:
   - `[ALGO]` — wrong time/space complexity (e.g., O(n²) where O(n log n) exists)
   - `[IO]` — blocking calls, missing batching, no caching
   - `[MEM]` — leaks, excessive allocations, large object retention
   - `[CONC]` — missing parallelism, lock contention, thread starvation
   - `[INFRA]` — missing indexes, cold starts, network round trips

5. **Apply optimizations in order of impact** — Address algorithmic issues first, then I/O, then memory, then concurrency. Never micro-optimize before fixing structural problems.

6. **Provide before/after code** — Show the original code alongside the optimized version with inline comments explaining each change.

7. **Estimate impact** — For each fix, state the expected improvement (e.g., "reduces DB queries from N to 1", "cuts memory allocation by ~40%", "drops p99 latency by ~200ms").

8. **Validate with benchmarks** — Provide a benchmarking script or command to confirm the improvement is real and measurable.

## Language-Specific Rules

- **Python**: Prefer `numpy`/`pandas` vectorization over loops; use `__slots__`; profile with `cProfile` + `snakeviz`
- **JavaScript/Node**: Avoid synchronous I/O; use streams for large data; profile with `--prof` flag or Chrome DevTools
- **Java/JVM**: Check GC pressure first; use `async-profiler`; prefer primitive arrays over boxed collections
- **SQL**: Always check query plans (`EXPLAIN ANALYZE`); add indexes before rewriting queries; batch inserts
- **Go**: Use `pprof`; minimize heap allocations with sync.Pool; prefer goroutine pools over unbounded spawning

## Output Format

Produce a structured report with these sections:

```
## Performance Analysis

**Domain:** [CPU / Memory / I/O / Network / Mixed]
**Severity:** [Critical / High / Medium / Low]

### Bottlenecks Found

| # | Type | Location | Impact |
|---|------|----------|--------|
| 1 | [ALGO] | function_name():line | High — O(n²) loop |
| 2 | [IO]   | db_query():line      | High — N+1 queries |

### Fix 1: [Short title]

**Before:**
```[lang]
// original code
```

**After:**
```[lang]
// optimized code with comments
```

**Expected impact:** [Specific, quantified estimate]

### Benchmark Command
```[bash]
# command to measure before/after
```

### Summary
[2-3 sentences: what was fixed, total expected gain, what to measure next]
```