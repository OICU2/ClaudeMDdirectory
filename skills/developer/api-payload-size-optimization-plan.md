---
name: api-payload-size-optimization-plan
description: >
  Audits API request and response payloads to identify bloated fields, unnecessary nesting, and inefficient data transfer patterns, then recommends targeted optimization strategies. Use when someone says their API responses are too large, asks about reducing payload size, wants to optimize bandwidth usage, is dealing with slow API performance due to data transfer, or needs to implement pagination or field filtering on an endpoint.
category: developer
tags: [api, performance, optimization, bandwidth, pagination]
author: community
---

# API Payload Size Optimization Plan

Analyzes API request and response structures to identify size inefficiencies and produces a prioritized plan using compression, pagination, schema trimming, and caching strategies.

## Audit & Analysis Workflow

1. **Collect payload samples** — Ask for or inspect actual request/response JSON, headers, and endpoint definitions. If unavailable, ask for schema definitions or field lists.

2. **Measure and categorize fields** — Identify:
   - Fields returned but never used by the client
   - Repeated or redundant nested objects (e.g., full user object embedded in every list item)
   - Binary or base64-encoded data sent inline (images, files)
   - Unbounded arrays with no pagination
   - Verbose string enums that could be integer codes
   - Timestamps or dates in long string formats

3. **Estimate size contributions** — Approximate the byte cost of each problematic field or pattern. Flag anything contributing more than 10% of total payload size as high priority.

4. **Select optimization strategies per finding**:
   - **Field projection / sparse fieldsets** — Add `?fields=` query parameter support; return only requested fields
   - **Pagination** — Implement cursor-based or offset pagination for arrays exceeding 20–50 items
   - **Response envelope trimming** — Remove wrapper metadata not consumed by clients
   - **Compression** — Enable gzip/Brotli at the transport layer; verify `Accept-Encoding` headers are handled
   - **Normalization** — Replace repeated nested objects with IDs and a separate lookup endpoint
   - **Binary offloading** — Move inline binary data to signed URLs (S3, CDN)
   - **Schema versioning** — Introduce a lean `v2` contract that drops deprecated fields

5. **Prioritize recommendations** — Rank by: (impact on payload size) × (implementation effort inverse). Quick wins first.

6. **Identify request payload issues** — Check for over-posting (sending unused fields to the server) and recommend strict input validation schemas.

## Output Format

Produce a structured report with the following sections:

**1. Payload Size Summary**
- Estimated current payload size (request / response separately)
- Top 3–5 largest contributors listed as a table: `Field | Estimated Size | Issue Type`

**2. Prioritized Recommendations**
A numbered list ordered by impact, each containing:
- Problem: what the issue is and where it appears
- Recommendation: specific technique to apply
- Estimated reduction: approximate size or percentage saved
- Implementation notes: code pattern, query param name, library suggestion, or config change

**3. Quick Wins (implement in < 1 day)**
Bullet list of changes that require minimal refactoring (e.g., enabling gzip, dropping 2–3 unused fields).

**4. Structural Changes (longer-term)**
Bullet list of architectural improvements (pagination, normalization, field projection API).

**5. Validation Checklist**
How to measure success: specific tools (e.g., Chrome DevTools Network tab, `curl -v`, Postman), metrics to track (p50/p95 response size, time-to-first-byte), and a before/after comparison approach.

Keep the report under 600 words unless payload complexity warrants more detail. Use tables and bullets over prose.
