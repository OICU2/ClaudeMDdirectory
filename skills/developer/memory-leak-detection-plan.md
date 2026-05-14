---
name: memory-leak-detection-plan
description: >
  Produces a step-by-step investigation plan for isolating memory leaks in a running application,
  including specific profiling tools, heap snapshot strategies, and code patterns to inspect.
  Use when someone says their app is running out of memory, asks why memory usage keeps growing,
  wants to find what is leaking memory in their service, or needs to debug high heap usage in production.
  Also activates when someone notices a process consuming more RAM over time or suspects a retention issue.
category: developer
tags: [memory, debugging, profiling, performance, heap]
author: community
---

# Memory Leak Detection Plan

This skill generates a structured, tool-specific investigation plan for locating and confirming memory leaks in a running application, tailored to the language or runtime the user specifies.

## Investigation Workflow

### 1. Confirm the Symptom
- Establish a baseline: ask for or define the metric showing growth (RSS, heap used, container memory, etc.)
- Determine whether growth is steady, stepped, or spike-based — this narrows the leak class
- Confirm the runtime/language (Node.js, Python, Go, Java, C++, etc.) to select correct tooling

### 2. Reproduce in a Controlled Environment
- Identify the smallest reproducible load pattern (single endpoint, background job, idle loop)
- Set a time window: if memory doubles in X minutes under Y load, the plan can be validated
- Disable auto-restarts and memory limits temporarily so the process can reveal its ceiling

### 3. Collect Heap / Memory Snapshots
**Node.js**
- Use `--inspect` + Chrome DevTools Memory tab: take 3 heap snapshots (start, mid, end of load)
- Use `heapdump` or `v8.writeHeapSnapshot()` for production-safe captures
- Compare snapshots using "Objects allocated between Snapshot 1 and 2" view

**Python**
- Use `tracemalloc`: `tracemalloc.start()` → run workload → `tracemalloc.take_snapshot()` → compare with `snapshot.compare_to()`
- Use `objgraph.show_growth()` to surface which object types are accumulating
- Use `memory_profiler` with `@profile` decorator on suspected functions

**Java / JVM**
- Capture heap dumps via `jmap -dump:format=b,file=heap.hprof <pid>`
- Analyze with Eclipse MAT (Memory Analyzer Tool): run "Leak Suspects Report"
- Use JVisualVM or JFR (Java Flight Recorder) for live heap tracking

**Go**
- Enable pprof: `import _ "net/http/pprof"` and hit `/debug/pprof/heap`
- Use `go tool pprof -alloc_objects` vs `-inuse_objects` to separate allocation rate from retention
- Compare heap profiles before and after load with `pprof -diff_base`

**C / C++**
- Run under Valgrind: `valgrind --leak-check=full --track-origins=yes ./binary`
- Use AddressSanitizer: compile with `-fsanitize=address` and run workload
- Use Heaptrack for allocation flame graphs

### 4. Identify Retention Patterns — Code to Inspect
- **Global / module-level collections** that only append (caches, registries, listener arrays)
- **Event listeners** never removed (`addEventListener` without `removeEventListener`, `emitter.on` without `emitter.off`)
- **Closures** capturing large objects in long-lived callbacks or timers
- **Circular references** in languages without cycle-aware GC
- **Unclosed resources**: database connections, file handles, streams, sockets
- **Growing queues or buffers** with no drain mechanism
- **Static fields** holding references to transient objects (common in Java)
- **Thread-local storage** that accumulates per-request state without cleanup

### 5. Isolate the Leak
- Comment out or stub subsystems one at a time while monitoring memory under constant load
- Use binary search: disable half the code paths, re-run, check if growth stops
- Add explicit GC calls (where available) before snapshots to eliminate short-lived objects from analysis

### 6. Validate the Fix
- Run the same controlled
