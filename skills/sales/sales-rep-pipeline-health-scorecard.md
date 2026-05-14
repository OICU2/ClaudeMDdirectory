---
name: sales-rep-pipeline-health-scorecard
description: >
  Evaluates an individual sales rep's pipeline across deal age, stage distribution, activity recency, and coverage ratio to surface actionable coaching priorities. Use when someone says "review my pipeline health," asks "how is my pipeline looking," wants to "score my deals," needs to "find my pipeline gaps," or asks "what should I focus on in my pipeline." Produces a structured scorecard with weighted health scores and prioritized coaching recommendations.
category: sales
tags: [pipeline, coaching, sales-rep, scorecard, deal-health]
author: community
---

# Sales Rep Pipeline Health Scorecard

Analyzes a sales rep's pipeline data across four dimensions—deal age, stage distribution, activity recency, and coverage ratio—and produces a weighted health scorecard with ranked coaching priorities.

## Evaluation Workflow

### Step 1: Collect Pipeline Inputs
Request the following data from the rep or CRM export:
- List of open deals with: deal name, dollar value, current stage, created date, last activity date, expected close date
- Rep's quota for the current period
- Average sales cycle length (days)

### Step 2: Score Each Dimension (0–25 points each, 100 total)

**Deal Age Score (25 pts)**
- Calculate each deal's age vs. average sales cycle length
- Deduct 5 pts for every deal exceeding 1.5x the average cycle
- Flag deals beyond 2x as "stalled" (automatic 0 contribution to score)

**Stage Distribution Score (25 pts)**
- Map deals across Early (prospecting/discovery), Mid (demo/proposal), Late (negotiation/legal)
- Ideal distribution: 50% Early, 30% Mid, 20% Late
- Deduct 3 pts per 10% deviation from ideal in any stage bucket
- Flag pipelines with >60% in a single stage as "lopsided"

**Activity Recency Score (25 pts)**
- Score each deal by days since last logged activity
- <7 days: 5 pts | 8–14 days: 3 pts | 15–30 days: 1 pt | >30 days: 0 pts
- Average individual deal scores, then scale to 25-point range

**Coverage Ratio Score (25 pts)**
- Calculate: Total pipeline value ÷ Remaining quota
- 3x–4x coverage: 25 pts | 2x–3x: 18 pts | 4x–5x: 15 pts | 1x–2x: 8 pts | <1x or >5x: 3 pts

### Step 3: Identify Coaching Priorities
- Sort issues by score impact (largest point losses first)
- For each dimension scoring below 18/25, generate a specific action item
- Flag the top 3 deals requiring immediate attention (stalled + high value)

### Step 4: Apply Severity Labels
- 85–100: Healthy Pipeline
- 70–84: Needs Attention
- 50–69: At Risk
- Below 50: Critical

## Output Format

Produce a structured scorecard in this exact order:

**PIPELINE HEALTH SCORECARD — [Rep Name] — [Date]**

| Dimension | Score | Max | Status |
|---|---|---|---|
| Deal Age | XX | 25 | 🟢/🟡/🔴 |
| Stage Distribution | XX | 25 | 🟢/🟡/🔴 |
| Activity Recency | XX | 25 | 🟢/🟡/🔴 |
| Coverage Ratio | XX | 25 | 🟢/🟡/🔴 |
| **TOTAL** | **XX** | **100** | **Label** |

**Overall Status:** [Healthy / Needs Attention / At Risk / Critical]

**Top 3 Deals Requiring Immediate Action:**
1. [Deal Name] — [Reason] — [Recommended Next Step]
2. [Deal Name] — [Reason] — [Recommended Next Step]
3. [Deal Name] — [Reason] — [Recommended Next Step]

**Coaching Priorities (ranked by impact):**
1. [Dimension]: [Specific action with measurable target, e.g., "
