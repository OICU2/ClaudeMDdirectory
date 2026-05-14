---
name: brand-search-vs-category-search-ratio-tracker
description: >
  Tracks and analyzes the ratio of branded search volume to category keyword search volume over time to determine whether brand awareness campaigns are shifting market consideration. Use when someone wants to measure brand search lift, asks whether their marketing is building brand awareness, wants to compare branded vs. generic search trends, needs to evaluate share of search as a brand health metric, or is trying to attribute awareness campaign impact to organic search behavior.
category: marketing
tags: [brand-awareness, seo, search-volume, share-of-search, campaign-measurement]
author: community
---

# Brand Search vs. Category Search Ratio Tracker

This skill calculates, tracks, and interprets the ratio of branded search volume to total category search volume over defined time periods to quantify brand awareness shifts driven by marketing campaigns.

## Workflow

### 1. Define Inputs
Collect the following before analysis:
- **Brand keywords**: exact brand name, common misspellings, branded product names (e.g., "Nike," "Nike shoes," "Nike Air Max")
- **Category keywords**: generic non-branded terms that describe the product/service space (e.g., "running shoes," "athletic footwear," "sneakers")
- **Time range**: campaign start date, current date, and a comparable pre-campaign baseline period of equal length
- **Data source**: Google Search Console, Google Trends, SEMrush, Ahrefs, Moz, or provided CSV data

### 2. Calculate the Ratio
For each time period:
```
Brand Search Ratio = (Total Branded Search Volume / Total Category Search Volume) × 100
```
- Compute this for both the baseline period and the campaign period
- If using Google Trends (index 0–100), treat the values as proportional proxies, not absolute volumes
- If multiple data sources exist, note each separately and flag discrepancies

### 3. Compute Lift
```
Ratio Lift (%) = ((Campaign Period Ratio - Baseline Ratio) / Baseline Ratio) × 100
```
- Flag lifts above 10% as meaningful signal
- Flag lifts below 3% as inconclusive without additional context
- Note any external confounding events (PR moments, viral content, competitor issues) that may inflate or deflate the ratio

### 4. Segment by Time Intervals
Break the campaign period into weekly or monthly sub-intervals and calculate the ratio for each. This reveals:
- Whether lift is sustained or a one-time spike
- Lag time between campaign launch and search behavior change
- Decay rate after campaign ends

### 5. Benchmark Against Competitors (if data is available)
- Calculate the same ratio for 2–3 direct competitors using their brand terms vs. the same category keywords
- Compute **Share of Search**: `Brand Ratio / (Sum of All Brand Ratios in Category) × 100`
- Compare share of search pre- vs. post-campaign

### 6. Interpret and Recommend
Apply these interpretation rules:
- **Ratio increasing, category volume stable**: brand awareness growing, campaign is working
- **Ratio increasing, category volume also growing**: positive signal but some lift may be category-level, not brand-specific; isolate brand-only trend
- **Ratio flat, category volume declining**: brand is holding ground in a shrinking category — neutral to positive
- **Ratio declining**: brand is losing consideration relative to the category; investigate campaign messaging or competitor activity
- **Spike then immediate drop**: campaign drove awareness but not sustained interest; evaluate landing page experience or messaging resonance

## Output Format

Produce a structured report with the following sections:

**1. Summary Table**
| Period | Branded Volume | Category Volume | Ratio (%) | Lift vs. Baseline |
|---|---|---|---|---|
| Baseline (dates) | X | X | X% | — |
| Week 1 (dates) | X | X | X% | +/-X% |
| Week N (dates) | X | X | X% | +/-X% |

**2. Trend Narrative** (3–5 sentences)
Plain-language explanation of what the ratio trend shows, whether it aligns with campaign timing, and confidence level in the signal.

**3. Share of Search Table** (if competitor data provided)
| Brand | Ratio (%) | Share of Search (%) | Change vs. Baseline |
|---|---|---|---|

**4. Key Findings** (bullet list,
