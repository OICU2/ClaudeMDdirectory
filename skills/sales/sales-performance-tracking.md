---
name: sales-performance-tracking
description: >
  Tracks individual and team sales metrics to surface coaching opportunities and performance gaps. Use when someone says "how is my team performing," asks about sales rep metrics, wants to analyze quota attainment, needs to identify underperformers, or wants to build a sales performance review.
category: sales
tags: [sales, performance, coaching, metrics, analytics]
author: community
---

# Sales Performance Tracking

Analyzes individual and team sales data to identify trends, gaps, and coaching opportunities, and produces structured performance summaries with actionable next steps.

## Performance Analysis Workflow

1. **Collect baseline data** — Gather the following for each rep and the team: quota, closed-won revenue, pipeline value, activity counts (calls, emails, meetings), average deal size, win rate, and sales cycle length. Ask the user to provide this data or confirm the time period being analyzed.

2. **Calculate core metrics per rep**
   - Quota attainment %: `(closed-won / quota) × 100`
   - Win rate %: `(closed-won deals / total opportunities) × 100`
   - Average deal size: `total revenue / closed-won deals`
   - Pipeline coverage ratio: `open pipeline / remaining quota`
   - Activity-to-opportunity conversion rate

3. **Segment reps into performance tiers**
   - **Top performers**: ≥100% quota attainment
   - **On track**: 80–99% quota attainment
   - **At risk**: 60–79% quota attainment
   - **Needs intervention**: <60% quota attainment

4. **Identify root causes for underperformers** — Compare activity levels, win rates, deal sizes, and pipeline coverage against top performers to isolate whether the gap is sourcing, conversion, deal size, or velocity.

5. **Generate coaching recommendations** — For each at-risk or underperforming rep, produce 2–3 specific, observable coaching actions tied directly to their metric gaps (e.g., "Win rate is 12% below team average — review lost deal reasons from last 90 days and role-play objection handling").

6. **Summarize team health** — Aggregate metrics to assess overall team trajectory: team quota attainment %, forecast vs. target, and whether the team has sufficient pipeline to close the period.

## Output Format

Produce a structured performance report with the following sections:

**Team Summary**
- Time period analyzed
- Team quota attainment % with target
- Total closed-won vs. quota
- Total pipeline and coverage ratio
- One-sentence team health assessment

**Rep Scorecard Table**
| Rep Name | Quota | Closed-Won | Attainment % | Win Rate | Avg Deal Size | Tier |
|---|---|---|---|---|---|---|

**Coaching Priorities** (ordered by urgency)
For each at-risk or underperforming rep:
- Rep name and tier
- Primary metric gap (specific number vs. benchmark)
- 2–3 concrete coaching actions with measurable outcomes

**Top Performer Insights**
- What top performers are doing differently (2–3 patterns)
- Recommendations to replicate those behaviors team-wide

Keep the report concise — one page for teams under 10 reps, with data tables separate from narrative. Flag any missing data explicitly rather than estimating.