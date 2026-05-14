---
name: inbound-content-lead-quality-analysis
description: >
  Correlates content pieces with downstream lead quality and pipeline outcomes to identify which assets attract high-converting versus low-quality prospects. Use when someone asks "which content brings in our best leads," wants to understand why certain campaigns attract tire-kickers, or needs to optimize content strategy based on lead quality rather than volume. Also triggers when someone says "our content generates leads but they don't convert" or wants to trace pipeline outcomes back to specific assets.
category: marketing
tags: [content-marketing, lead-quality, pipeline-analysis, attribution, conversion-optimization]
author: community
---

# Inbound Content Lead Quality Analysis

This skill analyzes the relationship between specific content assets and the quality of leads they generate, helping marketers identify which pieces drive high-value pipeline versus unqualified prospects.

## Analysis Workflow

### 1. Define Lead Quality Metrics
Before analyzing content, establish what "quality" means for this context:
- Identify the primary quality signals available: SQL rate, ACV, time-to-close, win rate, churn rate, expansion revenue
- Confirm the attribution window (first-touch, last-touch, or multi-touch)
- Clarify the time range and funnel stage cutoffs (e.g., only leads that have reached opportunity stage)

### 2. Request or Structure the Required Data
Ask for or work with these data points per content piece:
- Content asset name, type (blog, ebook, webinar, case study, etc.), topic, and publish date
- Total leads generated (MQLs)
- Downstream metrics per lead cohort: SQL conversion rate, average deal size, win rate, sales cycle length, and if available, 90-day churn rate
- ICP fit scores or firmographic data on leads (company size, industry, job title)

### 3. Calculate Quality Scores Per Asset
For each content piece, compute:
- **Lead-to-SQL rate**: SQLs attributed ÷ total leads from asset
- **Revenue efficiency ratio**: Pipeline generated ÷ leads generated
- **Quality index**: Weighted composite of SQL rate (40%), ACV (30%), win rate (20%), and retention proxy (10%) — adjust weights if client provides priorities
- Flag outliers: assets with high lead volume but below-median quality index, and low-volume assets with above-median quality index

### 4. Segment Content by Performance Pattern
Group assets into four quadrants:
- **High Volume + High Quality**: Scale and replicate these immediately
- **High Volume + Low Quality**: Diagnose — wrong audience targeting, misleading messaging, or top-of-funnel topic mismatch
- **Low Volume + High Quality**: Amplify distribution; these are underperforming gems
- **Low Volume + Low Quality**: Deprioritize or sunset

### 5. Diagnose Root Causes for Low-Quality Attractors
For each low-quality asset, identify the likely cause:
- **Topic mismatch**: Content addresses a pain point felt by non-buyers (e.g., junior roles who won't influence purchase)
- **Channel mismatch**: Content is distributed in communities where ICP doesn't exist
- **Offer mismatch**: The lead magnet (checklist, template) attracts researchers, not buyers
- **Message mismatch**: Promises quick wins that attract cost-sensitive, non-retaining customers

### 6. Generate Strategic Recommendations
Produce specific, prioritized recommendations:
- Which assets to amplify (with suggested channels)
- Which assets to rework (with specific messaging or targeting changes)
- Which content gaps exist based on high-quality lead patterns (what topics/formats do best leads consume?)
- Suggested new content briefs modeled on the top 3 quality-driving assets

## Output Format

Produce a structured report with the following sections:

**1. Executive Summary** (3–5 bullet points)
Key findings on quality distribution, top performers, and the biggest opportunity or problem.

**2. Asset Quality Scorecard** (table format)
| Asset Name | Type | Leads | SQL Rate | Avg ACV | Win Rate | Quality Index | Quadrant |
Include all analyzed assets, sorted by Quality Index descending.

**3. Quadrant Analysis** (one paragraph per quadrant)
Describe which assets fall in each quadrant and what they have in common (topic, format, channel, audience).

**4. Root Cause Breakdown** (bullet list)
For each low-quality asset cluster, name
