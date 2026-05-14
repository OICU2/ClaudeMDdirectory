---
name: cross-location-staffing-equity-audit
description: >
  Analyzes staffing ratios, workload distribution, and resource allocation across multiple locations to surface inequities and imbalances. Use when someone says "our locations aren't staffed fairly," asks about comparing headcount across sites, wants to check if workload is distributed evenly, needs to audit resource allocation between branches, or is concerned that some locations are understaffed relative to others.
category: operations
tags: [staffing, equity, workforce, multi-location, audit]
author: community
---

# Cross-Location Staffing Equity Audit

This skill compares staffing ratios, workload, and resource allocation across multiple locations to identify inequities and provide actionable recommendations for rebalancing.

## Audit Workflow

### 1. Collect Baseline Data
Request or confirm the following inputs per location:
- Headcount (full-time, part-time, contract — separately)
- Workload metric (transactions, customers served, units produced, tickets resolved, square footage managed, etc.)
- Operating hours per week
- Location type or tier (if applicable — e.g., flagship, regional, satellite)
- Any known constraints (union rules, hiring freezes, recent openings/closures)

### 2. Calculate Core Equity Metrics
For each location, compute:
- **Staff-to-workload ratio**: workload metric ÷ total FTE (convert part-time and contract to FTE equivalents using 0.5 and 0.75 defaults unless told otherwise)
- **Workload per FTE**: total workload ÷ FTE count
- **Deviation from mean**: how far each location's ratio sits from the cross-location average (express as % above/below)
- **Coverage index**: operating hours ÷ FTE count (hours each FTE is responsible for covering)

### 3. Identify Inequity Thresholds
Flag locations as:
- 🔴 **Critically understaffed**: workload per FTE >25% above the mean
- 🟡 **Moderately strained**: 10–25% above the mean
- 🟢 **Within equity band**: within ±10% of the mean
- 🔵 **Overstaffed**: workload per FTE >10% below the mean

### 4. Investigate Contributing Factors
For flagged locations, prompt for or reason through:
- Tenure and experience mix (senior-heavy vs. junior-heavy teams affect capacity)
- Recent turnover or open requisitions
- Seasonal demand variations
- Automation or tooling differences between locations
- Managerial span of control (flag if any manager supervises >10 direct reports)

### 5. Generate Recommendations
Produce specific, prioritized actions:
- Identify how many FTEs need to be added, moved, or reclassified at each flagged location
- Suggest whether to address gaps via hiring, internal transfer, or workload redistribution
- Flag if any location is so overstaffed that reduction or redeployment is warranted
- Note if data gaps prevent confident conclusions and specify exactly what data is missing

## Output Format

Produce a structured audit report with these sections:

**Staffing Equity Audit — [Date or Report Period]**

| Location | FTE Count | Workload Volume | Workload per FTE | vs. Mean | Status |
|----------|-----------|-----------------|------------------|----------|--------|
| [Name]   | [#]       | [#]             | [#]              | [+/-%]   | 🔴/🟡/🟢/🔵 |

**Summary Findings** (3–5 bullet points covering the most significant inequities)

**Location Deep-Dives** (one paragraph per flagged location explaining the gap, likely causes, and specific recommendation with FTE numbers)

**Priority Action List** (numbered, ordered by severity, each item specifying location, action type, and estimated FTE impact)

**Data Gaps** (bulleted list of missing inputs that would improve confidence, or "None — sufficient data provided")

Keep the full report under 600 words excluding the table. Use plain language; avoid HR jargon.
