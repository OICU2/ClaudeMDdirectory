---
name: api-endpoint-usage-analytics-report
description: >
  Analyzes API endpoint call frequency, error rates, and latency distributions to identify underused, overloaded, or failing routes. Use when someone says "analyze my API usage", asks about "which endpoints are slow or failing", wants to "find overloaded routes", needs to "understand API traffic patterns", or asks "what's wrong with my API performance". Produces a structured report with prioritized findings and actionable recommendations.
category: developer
tags: [api, analytics, performance, monitoring, diagnostics]
author: community
---

# API Endpoint Usage Analytics Report

This skill ingests API log data or metrics and generates a structured analytics report covering call frequency, error rates, and latency distributions to surface underused, overloaded, and failing endpoints.

## Analysis Workflow

1. **Identify the data source** — Ask the user to provide one of: raw access logs (Apache/Nginx/JSON), a metrics export (CSV, JSON, Datadog/CloudWatch dump), or a code-pasted sample. If none is provided, request it before proceeding.

2. **Parse and normalize the data** — Extract these fields per request: endpoint path (normalized, strip dynamic IDs), HTTP method, status code, response time (ms), and timestamp. Group dynamic segments (e.g., `/users/123` → `/users/{id}`).

3. **Compute per-endpoint metrics**:
   - **Call frequency**: total requests, requests/minute or requests/hour
   - **Error rate**: percentage of 4xx and 5xx responses, broken down by status code
   - **Latency distribution**: p50, p90, p99 response times; flag endpoints where p99 > 3× p50 (high variance)
   - **Volume trend**: increasing, decreasing, or stable over the time window

4. **Classify each endpoint** into one of four categories:
   - 🔴 **Failing** — error rate > 5% or p99 > 5000ms
   - 🟠 **Overloaded** — call frequency in top 10% AND p90 > 1000ms
   - 🟡 **Underused** — fewer than 1% of total calls over the full window
   - 🟢 **Healthy** — none of the above

5. **Identify top issues** — Rank findings by business impact: failing endpoints first, then overloaded, then underused. Flag any endpoint with a sudden spike or drop (>2× change between time periods if data allows).

6. **Generate recommendations** — For each non-healthy endpoint, provide one concrete action: add caching, rate limiting, circuit breaker, deprecation notice, query optimization, or scaling suggestion.

## Output Format

Produce the report in this exact structure:

---

### API Endpoint Analytics Report
**Time Window:** [start] – [end]  
**Total Requests Analyzed:** [N]  
**Endpoints Detected:** [N]

---

#### 🔴 Failing Endpoints
| Endpoint | Method | Calls | Error Rate | p50 | p90 | p99 | Top Error Codes |
|----------|--------|-------|------------|-----|-----|-----|-----------------|
| ...      | ...    | ...   | ...        | ... | ... | ... | ...             |

**Recommendations:** [One bullet per endpoint with a specific fix]

---

#### 🟠 Overloaded Endpoints
[Same table format as above, omit Error Rate column, add Calls/min column]

**Recommendations:** [One bullet per endpoint]

---

#### 🟡 Underused Endpoints
| Endpoint | Method | Calls | % of Traffic | Last Called |
|----------|--------|-------|--------------|-------------|

**Recommendations:** [Deprecation or consolidation suggestion per endpoint]

---

#### 🟢 Healthy Endpoints Summary
[Single line: "X endpoints are performing within normal thresholds."]

---

#### Key Findings (Top 3–5 Bullets)
- [Most critical insight]
- [Second insight]
- [Third insight]

---

Keep the report scannable. Use real numbers from the data — never approximate without stating so. If data is insufficient for a metric, write `N/A` and note what additional data is needed.
