---
name: sales-funnel-optimization
description: >
  Analyzes and improves conversion rates at each stage of the sales funnel through structured testing
  and data-driven iteration. Use when someone says "our funnel is leaking," asks about improving
  conversion rates, wants to reduce drop-off between stages, needs to diagnose why leads aren't
  converting, or is looking to optimize their sales pipeline performance.
category: sales
tags: [conversion-optimization, sales-funnel, pipeline, a-b-testing, revenue-growth]
author: community
---

# Sales Funnel Optimization

This skill diagnoses conversion problems at each funnel stage and produces a prioritized optimization plan with specific tests and metrics to track.

## Funnel Analysis Workflow

### 1. Establish Baseline Metrics
Collect current data for each funnel stage:
- Total volume entering each stage (leads, MQLs, SQLs, opportunities, closed deals)
- Conversion rate between each stage (Stage A → Stage B %)
- Average time spent in each stage
- Revenue at close and average deal size

### 2. Identify the Biggest Leak
Calculate the absolute revenue impact of each drop-off point:
- Lost conversions × average deal value = revenue leak per stage
- Rank stages by revenue leak, not just percentage drop
- Flag the single highest-impact stage as the primary target

### 3. Diagnose Root Causes Per Stage
Apply stage-specific diagnostic questions:

**Top of Funnel (Awareness → Lead)**
- Is traffic qualified? Check source-to-close rates by channel
- Is the value proposition clear within 5 seconds?
- Is the CTA specific and low-friction?

**Middle of Funnel (Lead → MQL → SQL)**
- Are nurture sequences timed to buying behavior?
- Is lead scoring calibrated to actual closed-won patterns?
- Are sales following up within SLA windows?

**Bottom of Funnel (SQL → Opportunity → Closed)**
- Where do deals stall? Map objection frequency by stage
- What is the win/loss ratio and primary loss reason?
- Are proposals personalized to stated pain points?

### 4. Build the Test Roadmap
For each identified leak, define one primary test:
- **Hypothesis**: "If we change X, conversion will improve because Y"
- **Variable**: Single element being changed (headline, follow-up timing, pricing structure, etc.)
- **Success metric**: Specific percentage improvement threshold
- **Test duration**: Minimum sample size to reach statistical significance
- **Owner**: Which team or role runs the test

### 5. Prioritize Using ICE Scoring
Score each proposed test:
- **Impact** (1–10): Expected conversion lift if successful
- **Confidence** (1–10): Evidence supporting the hypothesis
- **Ease** (1–10): Speed and resources required to implement
- Sort by ICE total; run top 3 tests in parallel across different funnel stages

### 6. Define Iteration Cadence
- Review test results every 2 weeks minimum
- Promote winners, kill losers within one sprint cycle
- Document learnings in a running hypothesis log
- Re-run full funnel audit every quarter

## Output Format

Produce a structured Funnel Optimization Report with these sections:

**Funnel Snapshot Table**
| Stage | Volume | Conversion Rate | Revenue Leak |
|---|---|---|---|
(One row per stage, sorted top to bottom)

**Primary Leak Identified**
- Stage name, current conversion rate, target conversion rate, revenue impact of reaching target

**Top 3 Prioritized Tests**
For each test:
- Stage targeted
- Hypothesis statement
- Specific change to implement
- Success metric and threshold
- ICE score breakdown
- Recommended owner and timeline

**Quick Wins (under 1 week to implement)**
Bulleted list of low-effort, high-confidence changes that can be deployed immediately without formal testing.

**Metrics Dashboard Recommendation**
List of 5–7 KPIs to track weekly, with suggested reporting format (spreadsheet, CRM dashboard, etc.).

Length: Comprehensive but scannable. Use tables and bullet points throughout. Avoid prose paragraphs except for the hypothesis statements.
