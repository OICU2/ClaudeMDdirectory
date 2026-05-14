---
name: always-on-campaign-health-audit
description: >
  Audits evergreen and always-on campaign performance across channels to surface creative fatigue, budget inefficiency, and audience saturation before they erode ROI. Use when someone says their always-on campaigns feel stale, asks why evergreen ad performance is declining, wants to audit running campaigns for waste, needs to identify which campaigns to pause or refresh, or is reviewing long-running paid media for optimization opportunities.
category: marketing
tags: [campaign-audit, paid-media, creative-fatigue, audience-saturation, budget-optimization]
author: community
---

# Always-On Campaign Health Audit

This skill systematically evaluates always-on and evergreen campaign performance across channels to diagnose creative fatigue, budget inefficiency, and audience saturation, delivering a prioritized action plan.

## Audit Workflow

### 1. Gather Campaign Inputs
Request the following from the user before proceeding:
- Channels in scope (Meta, Google, LinkedIn, TikTok, programmatic, email, etc.)
- Campaign names, objectives, and launch dates
- Key metrics: CTR, CPM, CPC, ROAS/CPA, frequency, reach, impressions, spend, conversions
- Time range for analysis (minimum 30 days recommended)
- Benchmark targets or historical baselines if available

### 2. Assess Creative Fatigue
Flag creative fatigue when:
- CTR has dropped >20% from the campaign's peak performance window
- Frequency exceeds 3.5 on Meta or 4+ on display/programmatic within a 7-day window
- CPM is rising while CTR is falling (demand inefficiency signal)
- The same creative assets have run for >60 days without refresh
- Engagement rate on social placements has declined >25% month-over-month

### 3. Identify Budget Inefficiency
Flag budget waste when:
- CPA or CPC has risen >30% above the established baseline without a corresponding quality improvement
- Impression share is high but conversion rate is low (traffic without intent alignment)
- Budget is concentrated in a single ad set or creative with diminishing returns
- Dayparting or device splits show significant performance disparity with no budget allocation adjustment
- Spend is active on paused or low-quality audience segments

### 4. Detect Audience Saturation
Flag saturation when:
- Unique reach growth has plateaued (<5% week-over-week) while spend holds steady
- Frequency is climbing faster than reach
- Lookalike or retargeting pool sizes have shrunk >20% from campaign start
- Comment sentiment or qualitative signals show ad fatigue ("I keep seeing this ad")
- Overlap analysis shows audience cannibalization across ad sets >30%

### 5. Score Each Campaign
Rate each campaign on three axes using a simple Red / Yellow / Green status:

| Dimension | Green | Yellow | Red |
|---|---|---|---|
| Creative Fatigue | No signals | 1–2 signals | 3+ signals or >60 days same creative |
| Budget Efficiency | Within 10% of CPA target | 10–30% above target | >30% above target or stagnant ROAS |
| Audience Saturation | Reach growing, frequency stable | Frequency rising, reach flat | Reach declining, frequency >4 |

### 6. Prioritize Recommendations
Order actions by impact tier:
- **Immediate (this week):** Red-rated campaigns — pause underperforming creatives, reallocate budget, refresh audiences
- **Near-term (next 2 weeks):** Yellow-rated campaigns — A/B test new creatives, expand audience pools, adjust bidding strategy
- **Monitoring (ongoing):** Green campaigns — set automated rules or alerts for threshold breaches

## Output Format

Produce a structured audit report with the following sections:

**1. Audit Summary**
- Channels and campaigns reviewed
- Date range analyzed
- Overall health score (% of campaigns in Red / Yellow / Green)

**2. Campaign-by-Campaign Findings**
For each campaign, provide:
- Campaign name and channel
- Health status per dimension (Red / Yellow / Green)
- 2–4 bullet observations tied to specific metrics
- Root cause hypothesis (e.g., "Frequency spike on Meta suggests audience exhaustion in the 25–34 retargeting segment")

**3. Prioritized Action Plan**
A numbered
