---
name: test-coverage-hotspot-report
description: >
  Correlates test coverage data with production error logs and code change frequency to surface the highest-risk, lowest-tested code paths in a codebase. Use when someone says "show me what's risky and untested," asks about coverage blind spots, wants to find where bugs are most likely hiding, needs to prioritize which tests to write next, or is trying to reduce production incidents through smarter testing.
category: developer
tags: [testing, coverage, risk-analysis, observability, prioritization]
author: community
---

# Test Coverage Hotspot Report

Analyzes the intersection of low test coverage, high error rates, and frequent code changes to produce a ranked list of the riskiest untested code paths, helping teams decide where to invest testing effort for maximum impact.

## Hotspot Analysis Workflow

### 1. Gather Input Data
Collect three data sources — prompt the user for any that are missing:
- **Coverage report**: Istanbul/NYC JSON, JaCoCo XML, SimpleCov, pytest-cov, or any LCOV-format file
- **Error logs**: Production logs, Sentry export, Datadog incidents, or a plain error frequency list with file/function references
- **Change frequency**: Git log output (`git log --format="%H" --name-only`), or a list of recently modified files

If the user cannot provide all three, proceed with what is available and note gaps in the report.

### 2. Parse and Normalize Each Dataset

**Coverage**: Extract per-file and per-function metrics:
- File path, covered lines, total lines, coverage percentage
- Flag any file below 60% as low-coverage, below 30% as critical

**Error logs**: Extract file/module references and count occurrences:
- Map stack trace entries or error tags back to source files
- Compute error frequency score per file (raw count or rate per day)

**Change frequency**: Use git log or provided data:
- Count commits per file over the last 30–90 days
- Files changed more than 5 times in the window are "high churn"

### 3. Compute Risk Score

For each file, calculate a composite risk score:

```
risk_score = (1 - coverage_pct) × w1 + normalized_error_freq × w2 + normalized_churn × w3
```

Default weights: `w1 = 0.4`, `w2 = 0.4`, `w3 = 0.2`

Normalize error frequency and churn to 0–1 scale relative to the max value in the dataset. Adjust weights if the user indicates one signal matters more (e.g., "we care most about errors").

### 4. Identify Top Hotspots

- Rank all files by risk score descending
- Surface the top 10–15 as primary hotspots
- Within each hotspot file, identify the specific uncovered functions or branches that are implicated in errors or changed frequently
- Flag any file that appears in all three datasets (low coverage + errors + churn) as a **Critical Hotspot**

### 5. Generate Recommendations

For each top hotspot, determine:
- What type of test is missing (unit, integration, edge case, error path)
- The specific uncovered function or branch to target
- Whether the fix is a new test file, an expansion of existing tests, or a mocking/stubbing gap

## Output Format

Produce a structured report with these sections:

---

### 🔴 Critical Hotspots (appear in all 3 signals)
| Rank | File / Module | Coverage | Error Events | Churn (30d) | Risk Score |
|------|--------------|----------|--------------|-------------|------------|
| 1    | `path/to/file.js` | 18% | 47 errors | 12 commits | 0.91 |

For each critical hotspot, add a bullet block:
- **Uncovered functions**: list specific function names
- **Error context**: what errors are tied to this file
- **Recommended test**: one-sentence description of the test to write

---

### 🟠 High-Risk Hotspots (appear in 2 signals)
Same table format, top 5–10 entries, with brief per-entry recommendations.

---

### 🟡 Watch List (low coverage only or high churn only)
Compact table, top
