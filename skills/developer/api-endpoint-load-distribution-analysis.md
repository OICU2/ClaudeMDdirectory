---
name: api-endpoint-load-distribution-analysis
category: developer
description: >
  Analyzes API traffic patterns to identify uneven load distribution and surface actionable recommendations for rate limiting, caching, and scaling. Use when someone says their API is getting hammered, asks about uneven traffic across endpoints, wants to understand which routes are overloaded, notices some endpoints are slow under load, or needs to optimize backend resource allocation.
tags: [api, performance, load-balancing, rate-limiting, caching]
author: community
---

# API Endpoint Load Distribution Analysis

This skill examines API traffic data to detect load imbalances across endpoints and produces concrete recommendations for rate limiting, caching strategies, and infrastructure adjustments.

## Analysis Workflow

1. **Collect Traffic Metrics**
   - Request volume per endpoint (requests/sec or requests/min)
   - Response time percentiles (p50, p95, p99) per endpoint
   - Error rates (4xx, 5xx) per endpoint
   - Time-of-day and day-of-week traffic patterns
   - Ask the user to provide logs, APM data, or a summary table if not already supplied

2. **Identify Load Imbalances**
   - Calculate what percentage of total traffic each endpoint handles
   - Flag any endpoint handling >30% of total traffic as a hot spot
   - Flag endpoints with p99 latency >3× their p50 as candidates for optimization
   - Identify endpoints with error spikes correlated to high traffic volume
   - Note endpoints with near-zero traffic that may be dead weight

3. **Classify Each Hot Spot**
   - **Read-heavy endpoints**: High GET volume with low write side effects → caching candidate
   - **Write-heavy endpoints**: High POST/PUT/DELETE volume → rate limiting or queue candidate
   - **Burst endpoints**: Traffic spikes at specific times → autoscaling or throttling candidate
   - **Slow endpoints**: High latency under load → query optimization or horizontal scaling candidate

4. **Generate Recommendations**
   For each identified problem endpoint, produce a specific recommendation from the following:
   - **Cache layer**: Add CDN caching, in-memory cache (Redis/Memcached), or HTTP cache headers; specify TTL based on data freshness requirements
   - **Rate limiting**: Suggest per-user, per-IP, or per-API-key limits with specific thresholds (e.g., 100 req/min per user)
   - **Request queuing**: Recommend async processing with a job queue for write-heavy endpoints
   - **Database optimization**: Flag N+1 queries, missing indexes, or full table scans if latency data suggests it
   - **Horizontal scaling**: Recommend adding replicas for stateless endpoints under sustained load
   - **Circuit breaker**: Suggest circuit breaker pattern for endpoints with cascading failure risk

5. **Prioritize by Impact**
   - Rank recommendations by: (traffic volume × error rate × latency impact)
   - Label each as Quick Win (< 1 day to implement), Medium Effort (1–5 days), or Architectural Change (> 1 sprint)

## Output Format

Produce a structured report with the following sections:

```
## Load Distribution Summary
- Total endpoints analyzed: N
- Hot spots identified: N
- Traffic distribution table (endpoint | req/min | % of total | p95 latency | error rate)

## Hot Spot Analysis
For each flagged endpoint:
- Endpoint: [METHOD /path]
- Issue: [one-sentence diagnosis]
- Root cause hypothesis: [specific technical cause]

## Recommendations
For each recommendation:
- Endpoint: [METHOD /path]
- Action: [specific change to make]
- Expected impact: [quantified improvement if possible, e.g., "reduce origin load by ~60%"]
- Effort: [Quick Win / Medium / Architectural]
- Implementation note: [1–2 sentences of concrete guidance]

## Priority Order
Numbered list of recommendations sorted by impact-to-effort ratio.
```

- Keep the summary table concise; use markdown tables
- Limit each recommendation to 3–5 lines — no essays
- If traffic data is missing or incomplete, explicitly state what data is needed before proceeding
