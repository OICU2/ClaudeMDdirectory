---
name: customer-segment-revenue-attribution
description: >
  Maps revenue contribution back to specific customer segments to identify which audiences drive the most profitable growth. Use when someone asks "which customer segments are most profitable," wants to understand revenue by audience, needs to attribute growth to specific buyer personas, is analyzing customer lifetime value by cohort, or wants to know where revenue is really coming from.
category: marketing
tags: [revenue-attribution, customer-segmentation, ltv, cohort-analysis, growth-analytics]
author: community
---

# Customer Segment Revenue Attribution

This skill analyzes and maps revenue contribution across customer segments to surface which audiences generate the most profitable, sustainable growth, and Claude will use it whenever someone needs to understand the financial value of specific customer groups.

## Attribution Workflow

### 1. Define Segments First
Before any attribution, clarify the segmentation basis:
- **Demographic**: age, location, company size, industry
- **Behavioral**: purchase frequency, channel, product category
- **Acquisition source**: paid, organic, referral, direct
- **Lifecycle stage**: new, returning, lapsed, high-value
- Ask the user which dimensions are available in their data.

### 2. Collect Required Inputs
Request or infer the following:
- Total revenue per segment (or transaction-level data to calculate it)
- Customer count per segment
- Time period for analysis
- Cost to acquire each segment (CAC), if available
- Refund/churn rates per segment, if available

### 3. Calculate Core Attribution Metrics
For each segment compute:
- **Revenue share (%)**: segment revenue ÷ total revenue × 100
- **Average Revenue Per User (ARPU)**: segment revenue ÷ segment customer count
- **Revenue per acquisition dollar**: segment revenue ÷ segment CAC (if CAC available)
- **Net revenue contribution**: gross revenue minus returns, discounts, and acquisition cost
- **Growth delta**: compare current period vs. prior period per segment

### 4. Rank by Profitability Tiers
Sort segments into three tiers:
- **Tier 1 (Growth Drivers)**: High revenue share + high ARPU + positive growth trend
- **Tier 2 (Stable Contributors)**: Moderate revenue share + average ARPU + flat trend
- **Tier 3 (Underperformers)**: Low revenue share OR negative growth OR high CAC relative to revenue

### 5. Surface Insights and Anomalies
Flag:
- Segments that are large by count but low by revenue (volume ≠ value)
- Segments with disproportionately high revenue share relative to size
- Segments with declining revenue despite stable or growing customer count
- Acquisition sources producing high-revenue customers vs. high-volume but low-value customers

### 6. Generate Strategic Recommendations
For each tier, produce one concrete action:
- Tier 1: Double down — increase acquisition spend or retention investment
- Tier 2: Optimize — identify what would move them to Tier 1
- Tier 3: Investigate — determine if segment is worth continuing to target

## Output Format

Produce a structured attribution report with the following sections:

**Segment Revenue Attribution Summary**
A markdown table with columns: Segment Name | Customer Count | Revenue | Revenue Share % | ARPU | CAC (if available) | Net Contribution | Tier

**Key Findings** (3–5 bullet points)
Each bullet names a specific segment and states a specific financial finding with a number.

**Profitability Tier Breakdown**
One paragraph per tier listing which segments belong there and why.

**Strategic Recommendations**
A numbered list of 3–5 actions, each tied to a named segment, a specific metric, and a proposed next step.

**Data Gaps** (if applicable)
Bullet list of missing inputs that would sharpen the analysis, with suggested sources.

Length: comprehensive but scannable — tables for data, bullets for insights, short paragraphs for narrative. No revenue figures should appear without a segment label attached.
