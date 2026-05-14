---
name: sales-rep-ramp-performance-benchmark
description: >
  Builds a benchmarking report comparing a new sales rep's pipeline activity and quota attainment against historical ramp curves for their role and segment. Use when someone says "how is my new rep tracking against ramp," asks about whether a rep is behind on their ramp curve, wants to benchmark a new hire's performance against past reps, needs to identify if a rep is at risk of missing ramp targets, or is reviewing a new rep's first-quarter pipeline health.
category: sales
tags: [sales-ramp, benchmarking, quota-attainment, pipeline-analysis, new-hire-performance]
author: community
---

# Sales Rep Ramp Performance Benchmark

This skill generates a structured benchmarking report that compares a new sales rep's current pipeline activity and quota attainment against historical ramp curves for their specific role and segment, surfacing risks and coaching recommendations.

## Workflow

### Step 1: Collect Rep Context
Gather the following inputs before generating the report:
- Rep name, role (e.g., SMB AE, Mid-Market AE, Enterprise AE), and segment
- Start date and current month of ramp (Month 1, 2, 3, etc.)
- Current pipeline metrics: number of open opportunities, total pipeline value, average deal size, activities logged (calls, emails, meetings)
- Quota attainment to date (if applicable) and current quarter target
- Any known ramp benchmarks for this role (if not provided, use reasonable industry defaults)

### Step 2: Apply Ramp Curve Benchmarks
Map the rep's current month against expected ramp milestones. Use these default benchmarks if no historical data is provided:

| Month | Expected Pipeline Coverage | Expected Quota Attainment |
|-------|---------------------------|--------------------------|
| 1     | 0.5x quota in pipeline    | 0%                       |
| 2     | 1x quota in pipeline      | 10–20%                   |
| 3     | 2x quota in pipeline      | 25–40%                   |
| 4     | 3x quota in pipeline      | 50–60%                   |
| 5     | 3.5x quota in pipeline    | 70–80%                   |
| 6     | 4x quota in pipeline      | 90–100%                  |

If the user provides historical ramp data for their org or segment, replace defaults with those figures.

### Step 3: Calculate Variance
For each metric, compute:
- **Pipeline gap**: (Expected pipeline value) − (Actual pipeline value)
- **Attainment gap**: (Expected attainment %) − (Actual attainment %)
- **Activity gap**: Compare logged activities to role-appropriate benchmarks (e.g., 40 calls/week for SMB, 20 for Enterprise)
- Classify each as: ✅ On Track / ⚠️ At Risk / 🔴 Behind

### Step 4: Identify Risk Signals
Flag the following patterns as high-risk:
- Pipeline coverage below 50% of benchmark for current ramp month
- Zero or near-zero activity in any given week
- Average deal size significantly below segment norm (may indicate wrong ICP targeting)
- No opportunities moved past Stage 2 by Month 3

### Step 5: Generate Coaching Recommendations
For each metric flagged At Risk or Behind, provide one specific, actionable coaching recommendation. Tie recommendations to the gap identified (e.g., "Pipeline is 40% below Month 3 benchmark — rep should focus on outbound prospecting with a target of 15 new opportunities added this week").

## Output Format

Produce a structured report with the following sections:

---

**Sales Rep Ramp Benchmark Report**
**Rep:** [Name] | **Role:** [Role] | **Segment:** [Segment] | **Ramp Month:** [#]

---

**1. Pipeline Health Summary**
| Metric | Benchmark | Actual | Variance | Status |
|--------|-----------|--------|----------|--------|
| Pipeline Coverage | | | | |
| # Open Opportunities | | | | |
| Avg Deal Size | | | | |
| Weekly Activity Volume | | | | |

**2. Quota Attainment Tracking**
- Current Quarter Target: $X
- Attainment
