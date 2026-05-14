---
name: ops-training-effectiveness-gap-report
description: >
  Analyzes training effectiveness by comparing post-training error rates and process adherence scores against pre-training baselines to identify where training failed to produce behavior change. Use when someone says "our training isn't working," asks about measuring training impact, wants to find gaps in employee learning outcomes, needs to justify training ROI, or is trying to understand why errors persist after a training program.
category: operations
tags: [training, gap-analysis, operations, performance-metrics, learning-effectiveness]
author: community
---

# Training Effectiveness Gap Report

This skill generates a structured gap analysis comparing pre- and post-training performance metrics to surface exactly where training failed to change behavior, and why.

## Analysis Workflow

1. **Collect Baseline Inputs**
   - Request pre-training metrics: error rates, defect counts, process adherence scores, audit findings, and time period covered
   - Request post-training metrics: same categories, same or equivalent measurement period after training completion
   - Request training details: topic, format (classroom/e-learning/OJT), duration, completion rate, and date delivered

2. **Calculate Gap Metrics per Training Topic or Process Area**
   - Error rate delta: (post-training rate − pre-training rate) / pre-training rate × 100
   - Adherence score delta: post-training adherence % − pre-training adherence %
   - Flag any area where improvement is <10% or where metrics worsened

3. **Classify Each Gap by Severity**
   - **Critical gap**: metrics worsened or showed <5% improvement in a high-risk process
   - **Significant gap**: 5–15% improvement against an expected improvement threshold of >25%
   - **Partial gap**: 15–25% improvement, below target but showing some effect
   - **No gap**: improvement meets or exceeds target threshold

4. **Identify Root Cause Categories for Each Gap**
   - Knowledge transfer failure (content not understood or retained)
   - Application barrier (learned but not applied — environment, tools, or management support missing)
   - Completion failure (low training completion rate among affected staff)
   - Measurement lag (insufficient time elapsed post-training to see behavior change)
   - Training design mismatch (format or depth misaligned with task complexity)

5. **Generate Recommendations per Gap**
   - Tie each recommendation directly to the root cause category
   - Specify whether the fix is: retrain, reinforce, redesign, or remove barrier
   - Estimate priority: address within 30/60/90 days based on severity

## Output Format

Produce a structured report with these sections:

**Header**
- Training program name, date, population trained, completion rate

**Executive Summary** (3–5 bullet points)
- Overall effectiveness rating (Effective / Partially Effective / Ineffective)
- Number of process areas analyzed
- Count of critical, significant, and partial gaps found
- Single most impactful gap identified

**Gap Analysis Table**
| Process Area | Pre-Training Metric | Post-Training Metric | Delta | Gap Severity | Root Cause Category |
|---|---|---|---|---|---|
(One row per process area or training topic)

**Detailed Findings** (one block per critical or significant gap)
- Process area name
- Exact metric values and delta
- Root cause assessment with 2–3 supporting observations
- Specific recommendation with owner role, action, and timeline

**Remediation Priority List**
- Ranked list of actions, labeled 30/60/90-day, with expected outcome if addressed

**Data Limitations**
- Note any missing baselines, small sample sizes, or confounding variables that affect confidence in findings

Report length: 400–800 words for narrative sections; tables are additive. Use plain language. Avoid jargon unless the requester uses it first.
