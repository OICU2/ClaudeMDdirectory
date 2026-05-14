---
name: ci-build-time-regression-analysis
category: developer
description: >
  Analyzes CI pipeline execution history to identify build steps experiencing time regressions and recommends targeted optimizations. Use when someone says their CI is getting slower, asks why builds are taking longer than before, wants to find bottlenecks in their pipeline, notices build times creeping up over sprints, or needs to optimize CI performance and cost.
tags: [ci-cd, performance, build-optimization, devops, pipeline]
author: community
---

# CI Build Time Regression Analysis

This skill analyzes CI pipeline execution logs and history to pinpoint steps with growing runtimes and produces concrete caching and parallelization recommendations.

## Analysis Workflow

### 1. Gather Pipeline Data
- Ask for or inspect CI config files (`.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile`, `circle.yml`, etc.)
- Request or locate build history data: timing logs, artifacts, or CI dashboard exports (CSV, JSON, or raw logs)
- Identify the time range to analyze (default: last 30 builds or 4 weeks)

### 2. Parse and Structure Step Timings
- Extract per-step durations from each build run
- Normalize step names across runs (handle renamed or refactored steps)
- Build a time-series table: `build_id | timestamp | step_name | duration_seconds`

### 3. Detect Regressions
- Calculate baseline median duration per step using the oldest 20% of builds in range
- Calculate recent median using the newest 20% of builds
- Flag steps where recent median exceeds baseline by **>15%** or **>30 seconds**, whichever is larger
- Compute regression slope (seconds per build) using linear regression on each step's time series
- Rank flagged steps by total time impact: `regression_rate × build_frequency`

### 4. Identify Root Causes
For each regressed step, check for:
- **Dependency growth**: increasing package counts, lock file churn (`package-lock.json`, `Gemfile.lock`, `requirements.txt` diffs)
- **Test suite expansion**: new test files added without parallelization adjustments
- **Cache misses**: cache keys that invalidate too frequently (timestamp-based, non-deterministic inputs)
- **Sequential bottlenecks**: steps that could run in parallel but are chained
- **Resource contention**: steps sharing runners with increased concurrency

### 5. Generate Recommendations
Map each root cause to a specific fix:

| Root Cause | Recommendation |
|---|---|
| Dependency install regression | Cache `node_modules`/`.venv`/vendor dir keyed on lockfile hash |
| Cache key invalidation | Narrow cache key scope; use content-hash of inputs only |
| Sequential test execution | Split test suite into shards; add matrix strategy |
| Sequential independent steps | Move to parallel jobs with `needs:` graph or `depends_on` |
| Docker layer bloat | Reorder Dockerfile to maximize layer cache hits |
| Repeated artifact rebuilds | Add build artifact caching between jobs |

## Output Format

Produce a structured report with these sections:

**1. Regression Summary Table**
Markdown table listing flagged steps: Step Name | Baseline (s) | Recent (s) | Change (%) | Regression Rate (s/build)

**2. Top 3 Impact Items**
Bullet list of the three highest-impact regressions with: estimated weekly time cost (minutes), likely root cause in one sentence, and priority (High/Medium).

**3. Recommended Fixes**
Numbered list of concrete actions, each containing:
- The specific step(s) affected
- Exact config change or code snippet to implement (e.g., actual YAML for a cache step)
- Expected time savings in seconds per build
- Effort estimate (Low = <1 hour, Medium = 1–4 hours, High = >4 hours)

**4. Quick Wins**
Separate subsection for any fixes that are Low effort and save >30 seconds per build.

Keep the report under 600 words excluding code snippets. Use markdown formatting throughout.
