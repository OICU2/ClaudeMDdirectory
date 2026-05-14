---
name: content-performance-to-budget-reallocation-brief
description: >
  Analyzes content performance metrics alongside channel spend data to produce a structured budget reallocation brief. Use when someone says "our content spend doesn't match what's working," asks about realigning marketing budget to pipeline contribution, wants to know which content channels deserve more investment, needs a brief on cutting underperforming content spend, or is trying to justify shifting dollars between content programs based on results.
category: marketing
tags: [content-marketing, budget-allocation, pipeline, marketing-analytics, roi]
author: community
---

# Content Performance to Budget Reallocation Brief

This skill cross-references content performance metrics with channel spend data to produce an executive-ready brief recommending specific budget shifts based on pipeline contribution, and Claude will use it whenever someone needs to rationalize content investment decisions with performance evidence.

## Analysis Workflow

### Step 1: Collect Input Data
Request the following from the user if not already provided:
- **Content performance data**: by asset or channel — pipeline influenced/sourced, leads generated, conversion rates, engagement metrics (time on page, downloads, views)
- **Current spend data**: budget allocated per content type or channel (blog, video, webinars, paid syndication, social, etc.)
- **Attribution model in use**: first-touch, last-touch, multi-touch, or custom
- **Time period**: the reporting window for the data
- **Pipeline target or business goal**: so recommendations align to outcomes

### Step 2: Calculate Efficiency Ratios
For each content channel or program, compute:
- **Pipeline per dollar spent**: (pipeline influenced or sourced) ÷ (channel spend)
- **Cost per lead**: channel spend ÷ leads generated
- **Conversion rate**: leads to pipeline or opportunity stage
- **Spend share vs. pipeline share**: % of total budget vs. % of total pipeline contribution

Flag channels where spend share significantly exceeds pipeline share (overinvested) and where pipeline share exceeds spend share (underinvested).

### Step 3: Segment Channels into Tiers
Categorize each channel or content type:
- **Tier 1 — Scale**: High pipeline efficiency, low cost per lead, conversion rate above average → recommend budget increase
- **Tier 2 — Optimize**: Moderate performance with identifiable improvement levers → recommend hold with specific changes
- **Tier 3 — Cut or Test**: Low pipeline contribution relative to spend, no clear optimization path → recommend reduction or time-boxed experiment

### Step 4: Build Reallocation Recommendation
- Identify specific dollar amounts or percentages to shift from Tier 3 to Tier 1
- Ensure total reallocation is budget-neutral unless expansion is explicitly requested
- Flag any Tier 3 channels that serve brand or awareness goals not captured in pipeline metrics — note the trade-off rather than dismissing them
- Tie each recommendation to a specific metric that justifies it

### Step 5: Anticipate Objections
For each major cut or reallocation, include a one-line rationale addressing the likely internal objection (e.g., "Blog traffic is high but pipeline contribution is 3% of spend — volume does not equal pipeline readiness").

## Output Format

Produce a structured brief with the following sections:

**Title**: Content Budget Reallocation Brief — [Time Period]

**Executive Summary** (3–5 sentences): What the data shows overall, the size of the reallocation opportunity, and the top-line recommendation.

**Performance Snapshot Table**
| Channel | Current Spend | Pipeline Influenced | Pipeline/Dollar | Spend Share | Pipeline Share | Tier |
|---|---|---|---|---|---|---|
(One row per channel or content type)

**Key Findings** (bullet list, 4–6 bullets): Specific inefficiencies and outperformers called out with numbers.

**Reallocation Recommendations** (numbered list):
Each recommendation must include: channel, direction (increase/decrease/cut), amount or %, the metric driving the decision, and expected impact.

**Trade-off Flags**: Any cuts that carry non-pipeline risk (brand, SEO, audience retention) — brief and honest.

**Suggested Next Review Date**: Based on time period of data used.

Length: 600–900 words excluding the table. Tone is direct and data-led — written for a marketing leader or CFO, not a content team.
