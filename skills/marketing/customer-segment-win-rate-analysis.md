---
name: customer-segment-win-rate-analysis
description: >
  Analyzes closed-won and closed-lost opportunity data broken down by customer segment to surface which audiences convert at the highest rates and where marketing budget should be focused. Use when someone asks "which customer segments are converting best," wants to know "where we're winning versus losing deals," needs to "optimize marketing spend by segment," is trying to "understand our win rate by audience," or asks "which markets should we double down on."
category: marketing
tags: [win-rate, segmentation, pipeline-analysis, revenue-optimization, b2b-marketing]
author: community
---

# Customer Segment Win Rate Analysis

This skill analyzes closed-won and closed-lost deal data across customer segments to calculate conversion rates, identify high-performing audiences, and produce actionable recommendations for marketing budget allocation.

## Analysis Workflow

### 1. Gather Required Data
Request or confirm availability of the following fields:
- Deal/opportunity records with status: closed-won or closed-lost
- Customer segment labels (e.g., industry, company size, geography, persona, product line)
- Deal value (ACV or TCV) for each record
- Date range for the analysis period
- Volume of deals per segment

If data is not provided directly, ask the user to paste a CSV, describe their CRM export, or share summary counts per segment.

### 2. Calculate Core Metrics Per Segment
For each segment, compute:
- **Win Rate (%)** = Closed-Won Count / (Closed-Won + Closed-Lost Count) × 100
- **Total Pipeline Volume** = total deals entered per segment
- **Revenue Won** = sum of ACV/TCV for closed-won deals
- **Revenue Lost** = sum of ACV/TCV for closed-lost deals
- **Average Deal Size (Won)** = Revenue Won / Closed-Won Count
- **Revenue Win Rate (%)** = Revenue Won / (Revenue Won + Revenue Lost) × 100

### 3. Rank and Tier Segments
Sort segments by win rate (volume-adjusted) and group into three tiers:
- **Tier 1 — High Conviction**: Win rate significantly above average AND meaningful deal volume (not statistical noise)
- **Tier 2 — Developing**: Win rate near average or high rate with low volume (needs more data or nurturing)
- **Tier 3 — Low Performance**: Win rate significantly below average; flag for investigation or budget reduction

Use a minimum threshold of at least 10 deals per segment before drawing strong conclusions; flag smaller samples explicitly.

### 4. Identify Patterns and Hypotheses
Look for and call out:
- Segments where revenue win rate diverges from deal count win rate (signal of deal size variance)
- Segments with high volume but low win rate (possible misalignment of ICP targeting)
- Segments with high win rate but low volume (potential untapped market)
- Any segments trending up or down if time-series data is available

### 5. Produce Budget Allocation Recommendations
Map findings to spend guidance:
- Tier 1 segments: recommend increasing paid, content, and SDR investment
- Tier 2 segments: recommend test budgets or nurture sequences pending more data
- Tier 3 segments: recommend pausing or reallocating spend; note if root cause is messaging vs. fit

## Output Format

Produce a structured report with the following sections:

**1. Summary (3–5 sentences)**
Top-line findings: which segments win most, which lose most, and the single most actionable budget implication.

**2. Segment Win Rate Table**
Markdown table with columns:
| Segment | Deals Won | Deals Lost | Win Rate % | Revenue Won | Revenue Win Rate % | Tier |

Sort by Win Rate % descending.

**3. Tier Classification**
Bulleted list of segments under each tier (Tier 1 / Tier 2 / Tier 3) with one-line rationale per segment.

**4. Key Patterns & Anomalies**
3–5 bullet points flagging notable divergences, sample-size warnings, or counterintuitive findings.

**5. Budget Allocation Recommendations**
Concrete actions per tier. Format as:
- **[Segment Name]**: [Recommended action] — [Reasoning in one sentence]

**6. Data Gaps & Next Steps**
List any missing data fields, small sample segments, or follow-on analyses
