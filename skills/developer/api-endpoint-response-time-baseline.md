---
name: api-endpoint-response-time-baseline
description: >
  Measures and documents baseline response times for each API endpoint to establish performance benchmarks for regression detection. Use when someone says "baseline our API performance," asks about "establishing response time benchmarks," wants to "document API latency," needs to "set up performance regression detection," or asks to "measure endpoint response times."
category: developer
tags: [api, performance, benchmarking, monitoring, regression-detection]
author: community
---

# API Endpoint Response Time Baseline

This skill measures, records, and documents baseline response times across all API endpoints so teams have concrete performance benchmarks to detect regressions in CI/CD pipelines or during code reviews.

## Baseline Measurement Workflow

1. **Discover endpoints**: Scan the codebase for all defined routes (check router files, controller files, OpenAPI/Swagger specs, or route index files). List every endpoint with its HTTP method and path.

2. **Categorize by type**: Group endpoints into categories — read (GET), write (POST/PUT/PATCH), delete (DELETE), and any long-running or async operations. Each category may have different acceptable thresholds.

3. **Define measurement parameters**:
   - Sample size: minimum 50 requests per endpoint for statistical validity
   - Environments: measure in staging (or production-equivalent) only — not local dev
   - Load state: measure under realistic load (not cold/idle), using a warm-up run of 10 requests first
   - Metrics to capture: p50, p90, p95, p99, min, max, mean

4. **Generate measurement script**: Write a script (bash + curl, k6, wrk, or Apache Bench depending on project tooling) that:
   - Authenticates if required (reads credentials from environment variables)
   - Sends the warm-up requests
   - Collects the full sample
   - Outputs structured JSON results per endpoint

5. **Run and collect results**: Execute the script and capture raw output. Flag any endpoints that error out (4xx/5xx) — do not include error responses in timing data.

6. **Calculate thresholds**: For each endpoint, define regression thresholds:
   - Warning: p95 > 2× baseline p95
   - Critical: p95 > 3× baseline p95
   - Absolute hard limit: p99 > 5000ms (or domain-specific SLA)

7. **Document findings**: Write results into a `performance/baseline.json` machine-readable file and a `performance/BASELINE.md` human-readable report.

8. **Integrate with CI**: Add a step to the CI config (GitHub Actions, GitLab CI, etc.) that runs a lightweight check against the baseline on every PR, failing if any endpoint exceeds the warning threshold.

## Output Format

Produce two files:

**`performance/baseline.json`** — machine-readable, structured:
```json
{
  "generated_at": "ISO-8601 timestamp",
  "environment": "staging",
  "sample_size": 50,
  "endpoints": [
    {
      "method": "GET",
      "path": "/api/v1/users",
      "category": "read",
      "metrics": {
        "min_ms": 12,
        "max_ms": 89,
        "mean_ms": 34,
        "p50_ms": 31,
        "p90_ms": 58,
        "p95_ms": 67,
        "p99_ms": 84
      },
      "thresholds": {
        "warning_p95_ms": 134,
        "critical_p95_ms": 201,
        "hard_limit_p99_ms": 5000
      }
    }
  ]
}
```

**`performance/BASELINE.md`** — human-readable summary with:
- Date and environment of measurement
- Table of all endpoints with p50/p95/p99 columns
- Highlighted outliers (any endpoint with p95 > 500ms)
- Recommended CI check command
- Instructions for re-baselining (when to update, how to run)
