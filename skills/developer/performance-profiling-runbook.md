---
name: performance-profiling-runbook
description: >
  Creates a step-by-step runbook for profiling application performance bottlenecks, including tooling setup, metric collection points, and interpretation guidelines. Use when someone says their app is slow, asks how to find performance bottlenecks, wants to profile their application, needs to diagnose latency issues, or is investigating high CPU or memory usage.
category: developer
tags: [performance, profiling, debugging, optimization, observability]
author: community
---

# Performance Profiling Runbook

This skill generates a structured, actionable runbook for diagnosing and profiling application performance bottlenecks tailored to the user's stack and symptoms.

## Runbook Generation Workflow

1. **Identify context** — Before generating, determine:
   - Language/runtime (Node.js, Python, JVM, Go, etc.)
   - Application type (web server, CLI, background worker, etc.)
   - Symptom description (slow endpoints, high CPU, memory growth, intermittent spikes)
   - Environment (local dev, staging, production)
   - If unclear, ask one clarifying question covering the most critical gap

2. **Structure the runbook in phases:**

   ### Phase 1: Baseline Measurement
   - Define what "slow" means with concrete numbers (target vs. observed latency/throughput)
   - Identify reproducibility: constant degradation vs. spike vs. gradual leak
   - Capture baseline metrics before any changes: CPU %, memory MB, p50/p95/p99 response times, error rate

   ### Phase 2: Tooling Setup
   - Recommend specific tools for the detected stack (e.g., `py-spy` for Python, `async_profiler` for JVM, `clinic.js` for Node, `pprof` for Go)
   - Provide exact install commands
   - Include any required flags, permissions, or environment variables (e.g., `--pid`, `perf_events` access)
   - Specify non-invasive vs. invasive profiling tradeoffs for production use

   ### Phase 3: Metric Collection Points
   - List exactly which metrics to collect and where: CPU flame graphs, heap snapshots, GC logs, thread dumps, I/O wait, DB query times
   - Provide specific commands to capture each metric with example output format
   - Define collection duration (e.g., "capture 30-second CPU profile under load")
   - Note sampling rate recommendations to minimize overhead

   ### Phase 4: Load Simulation (if needed)
   - Provide commands to reproduce load locally using appropriate tools (`wrk`, `k6`, `locust`, `hey`)
   - Include a minimal load profile that triggers the symptom

   ### Phase 5: Interpretation Guidelines
   - Explain what each output artifact means (flame graph hotspots, GC pause patterns, heap leak signatures)
   - List red flags to look for per tool output
   - Provide decision tree: "If you see X → suspect Y → next step Z"

   ### Phase 6: Remediation Checklist
   - Map common root causes to fixes for the stack (e.g., N+1 queries, unbounded caches, synchronous blocking in async code, thread contention)
   - Include validation step: how to confirm the fix worked using the same baseline metrics

3. **Tailor specificity** — Reference actual function names, config keys, or file paths if the user has shared code. Do not use generic placeholders when concrete guidance is possible.

4. **Flag production safety** — Clearly mark any step that could impact production stability with a ⚠️ warning and a safer alternative.

## Output Format

Produce a Markdown runbook with:
- **Title**: `Performance Profiling Runbook — [App Type] ([Language/Runtime])`
- **Symptom Summary**: 2–3 sentences restating the problem and success criteria
- **Phases 1–6** as H2 sections with numbered steps, code blocks for all commands, and inline callouts for warnings
- **Quick Reference** section at the end: a table mapping symptom → tool → command → what to look for (4 columns, 5–8 rows)
- Length: comprehensive but scannable — use bullets, code blocks, and headers; avoid prose paragraphs longer than 3 sentences
- All commands must be copy-pasteable and include realistic placeholder values (e.g., `--pid
