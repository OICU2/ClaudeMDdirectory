---
name: sales-forecast-confidence-scoring
description: >
  Evaluates open opportunities against historical close patterns and deal health signals to assign
  a confidence score to each forecast category. Use when someone asks "how reliable is our forecast,"
  wants to score pipeline confidence, needs to validate commit vs. best case deals, is reviewing
  forecast accuracy before a QBR, or wants to identify at-risk deals in the current period.
category: sales
tags: [forecasting, pipeline, confidence-scoring, deal-health, revenue]
author: community
---

# Sales Forecast Confidence Scoring

This skill analyzes open opportunities using deal health indicators and historical close rate data to produce a numerical confidence score for each forecast category, helping revenue teams separate reliable commits from wishful pipeline.

## Scoring Workflow

### Step 1: Gather Required Inputs
Collect the following for each open opportunity:
- Forecast category (Commit, Best Case, Pipeline, Omitted)
- Stage name and days in current stage
- Close date and days until close date
- Last activity date and activity type
- Deal size relative to ACV average
- Number of stakeholders engaged / economic buyer identified (yes/no)
- Mutual action plan or next step defined (yes/no)
- Competitor mentioned (yes/no)
- Historical close rate for this rep, segment, or stage (if available)

### Step 2: Apply Scoring Rubric per Deal
Score each deal on a 0–100 scale using the following weighted signals:

| Signal | Weight | Scoring Logic |
|---|---|---|
| Stage-to-close alignment | 20 pts | Close date matches typical stage duration; penalize if close date < days typically remaining |
| Recent activity | 20 pts | Activity within 7 days = 20, 8–14 days = 12, 15–30 days = 6, 30+ days = 0 |
| Economic buyer engaged | 15 pts | Confirmed = 15, Unknown = 0 |
| Next step defined | 15 pts | Clear mutual next step = 15, Vague = 5, None = 0 |
| Historical close rate match | 15 pts | Multiply 15 by rep/segment close rate for this stage (e.g., 60% = 9 pts) |
| Deal size vs. ACV average | 10 pts | Within 1.5x ACV = 10, 1.5–3x = 5, 3x+ = 2 |
| Competitive presence | 5 pts | No competitor = 5, Competitor present = 2 |

### Step 3: Assign Confidence Tier
Map final score to confidence tier:
- **80–100**: High Confidence — suitable for commit
- **60–79**: Moderate Confidence — best case; needs validation
- **40–59**: Low Confidence — pipeline; requires active management
- **0–39**: At Risk — flag for inspection or remove from forecast

### Step 4: Flag Mismatches
Identify deals where the rep's forecast category does not match the confidence tier:
- Committed deals scoring below 60 → **Commit Risk**
- Pipeline deals scoring above 80 → **Sandbagging Alert**
- Any deal with close date within 14 days and score below 50 → **Slip Risk**

### Step 5: Aggregate to Forecast Roll-Up
- Sum weighted deal values by confidence tier
- Apply tier-level discount factors to produce an adjusted forecast number:
  - High Confidence: 90% of deal value
  - Moderate Confidence: 50% of deal value
  - Low Confidence: 20% of deal value
  - At Risk: 5% of deal value
- Compare adjusted forecast to quota to surface coverage gap or surplus

## Output Format

Produce two artifacts:

**1. Deal-Level Scoring Table**
A table with columns: Deal Name | Owner | Forecast Category | Confidence Score | Confidence Tier | Mismatch Flag | Top Risk Factor

**2. Forecast Summary Block**
```
Period: [Quarter/Month]
Total Open Pipeline: $[X]
Adjusted Forecast (Confidence-Weighted): $[X]
Quota: $[X]
Coverage Ratio: [X]x

Commit Risk Deals ([N]): [Deal names]
Sandbagging Alerts ([N]): [Deal names]
