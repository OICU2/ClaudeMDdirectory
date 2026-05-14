---
name: sales-proof-point-library
description: >
  Compiles, organizes, and retrieves ROI statistics, customer success metrics, and third-party validation data for use in sales pitches and proposals. Use when someone says "I need proof points for my pitch," asks about customer ROI data, wants to back up a claim with hard numbers, needs competitive validation stats, or is building a business case for a prospect.
category: sales
tags: [roi, proof-points, customer-metrics, validation, sales-enablement]
author: community
---

# Sales Proof Point Library

This skill builds and queries a structured library of quantifiable evidence — ROI figures, customer outcomes, analyst citations, and case study data — so reps can instantly pull credible proof into any pitch or proposal.

## Proof Point Collection & Organization

1. **Intake new proof points** by capturing these fields for each entry:
   - Metric: the specific number or percentage (e.g., "43% reduction in churn")
   - Source type: customer quote, case study, analyst report, internal data, or third-party benchmark
   - Source name: company, analyst firm, or publication
   - Date: quarter and year (flag anything older than 24 months as "aging")
   - Segment: industry vertical, company size, or use case it applies to
   - Claim category: Cost Savings / Revenue Growth / Time Savings / Risk Reduction / Productivity / Satisfaction

2. **Validate each proof point** before filing:
   - Confirm the metric is specific and attributed (no vague "customers see results")
   - Note any conditions or caveats (e.g., "enterprise tier only," "after 90-day onboarding")
   - Flag unverified or single-source claims with a [VERIFY] tag

3. **Retrieve proof points** by matching against:
   - The prospect's industry or company size
   - The business problem being addressed
   - The objection being countered (e.g., price, ROI timeline, risk)
   - The stage of the deal (discovery vs. late-stage justification)

4. **Organize retrieved proof points** in priority order:
   - Tier 1: Named customer, same industry, recent, specific metric
   - Tier 2: Named customer, adjacent industry or similar size, specific metric
   - Tier 3: Analyst/benchmark data, aggregated customer data, or anonymized case study

5. **Flag gaps** when a requested proof point category has no strong entries — suggest what data to collect or what alternative angle to use.

## Output Format

**When adding proof points**, produce a structured entry block:

```
[PROOF POINT]
Metric: [specific stat]
Claim Category: [category]
Source: [name] | [type] | [date]
Segment: [industry / size / use case]
Caveats: [conditions or NONE]
Status: [VERIFIED / VERIFY]
Pitch-ready quote: "[One sentence a rep can say out loud]"
```

**When retrieving proof points for a pitch**, produce:

- A ranked list of 3–5 proof points matching the request
- Each entry includes the pitch-ready quote, source attribution, and one-line usage note (e.g., "Use when prospect objects to onboarding cost")
- A "Gaps" section listing any missing evidence types the rep should flag to marketing or CS
- Total length: concise enough to paste directly into a call prep doc or proposal section
