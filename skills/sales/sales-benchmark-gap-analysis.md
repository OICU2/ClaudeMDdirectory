---
name: sales-benchmark-gap-analysis
description: >
  Compares a sales rep's or team's performance metrics against industry benchmarks to identify specific gaps and prioritize coaching interventions. Use when someone says "how do we stack up against the industry," asks about benchmark comparisons, wants to identify where their team is underperforming, needs to prioritize sales coaching, or is trying to figure out which metrics to focus on improving first.
category: sales
tags: [sales-performance, benchmarking, coaching, gap-analysis, metrics]
author: community
---

# Sales Benchmark Gap Analysis

This skill analyzes provided sales metrics against industry benchmarks to surface specific performance gaps, rank them by business impact, and recommend targeted coaching actions.

## Gap Analysis Workflow

### Step 1: Collect Rep or Team Metrics
Request the following data points if not already provided:
- Win rate (%)
- Average deal size ($)
- Sales cycle length (days)
- Lead-to-opportunity conversion rate (%)
- Quota attainment (%)
- Activities per week (calls, emails, meetings)
- Pipeline coverage ratio (pipeline value / quota)
- Average number of touches to close

If the user provides partial data, proceed with what is available and flag missing metrics explicitly.

### Step 2: Apply Benchmark Baselines
Compare provided metrics against these standard industry benchmarks (adjust if user specifies their industry or segment):

| Metric | SMB Benchmark | Mid-Market Benchmark | Enterprise Benchmark |
|---|---|---|---|
| Win rate | 20–30% | 15–25% | 10–20% |
| Sales cycle | 30–60 days | 60–90 days | 90–180 days |
| Lead-to-opp conversion | 10–15% | 8–12% | 5–10% |
| Quota attainment | 60–70% of reps | 55–65% of reps | 50–60% of reps |
| Pipeline coverage | 3–4x | 3.5–4.5x | 4–5x |
| Avg. touches to close | 5–8 | 8–12 | 12–18 |

If the user provides their specific industry (SaaS, manufacturing, financial services, etc.), note that benchmarks vary and flag which figures may need adjustment.

### Step 3: Calculate and Score Each Gap
For each metric with available data:
1. Compute the absolute gap (user value vs. benchmark midpoint)
2. Compute the percentage deviation ((user value − benchmark) / benchmark × 100)
3. Assign a severity rating:
   - **Critical**: >25% below benchmark
   - **Significant**: 10–25% below benchmark
   - **Minor**: 0–10% below benchmark
   - **Exceeding**: Above benchmark

### Step 4: Rank Gaps by Business Impact
Prioritize gaps using this logic:
1. Win rate gaps → highest revenue impact, rank first
2. Pipeline coverage gaps → risk of missing future quota, rank second
3. Sales cycle gaps → cash flow and capacity impact, rank third
4. Conversion rate gaps → top-of-funnel efficiency, rank fourth
5. Activity volume gaps → lagging indicator, rank last unless severely below benchmark

### Step 5: Map Gaps to Coaching Interventions
For each Critical or Significant gap, recommend 2–3 specific coaching actions:

- **Low win rate** → Review late-stage loss reasons; implement discovery call scoring; add competitive battlecard training
- **Long sales cycle** → Audit stage exit criteria; introduce multi-threading strategy; tighten proposal-to-close process
- **Low lead-to-opp conversion** → Refine ICP definition; add qualification framework (MEDDIC, BANT); improve SDR-to-AE handoff
- **Low pipeline coverage** → Increase prospecting activity targets; launch outbound campaign; review territory assignment
- **Low quota attainment** → Run 1:1 deal reviews; identify top performer behaviors and replicate; assess ramp time for newer reps

## Output Format

Produce a structured report with these sections:

**1. Metrics Snapshot Table**
A table showing each metric, the user's value, the applicable benchmark range, the gap (absolute and %), and a severity badge (Critical / Significant / Minor / Exceeding).

**2. Priority Gap List**
A numbered list of gaps ranked by
