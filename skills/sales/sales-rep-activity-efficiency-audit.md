---
name: sales-rep-activity-efficiency-audit
category: sales
description: >
  Analyzes CRM activity logs to identify which sales rep behaviors correlate with closed revenue, surfacing patterns in call volume, email cadence, and meeting frequency. Use when someone says "I want to know which rep activities drive deals," asks about "what our top reps do differently," or wants to "audit sales rep efficiency," "find out if call volume affects close rates," or "understand which behaviors predict revenue." Produces a ranked breakdown of activity-to-outcome correlations with rep-level benchmarks and coaching recommendations.
tags: [sales, crm, activity-analysis, rep-performance, revenue-correlation]
author: community
---

# Sales Rep Activity Efficiency Audit

This skill analyzes CRM activity log data to correlate specific sales rep behaviors (calls, emails, meetings, follow-up timing) with closed revenue outcomes, then surfaces what high performers do differently.

## Audit Workflow

### 1. Data Intake
- Request or accept CRM export data including: rep name, activity type, activity count per period, activity timestamps, deal stage progressions, closed/won revenue, and deal cycle length.
- If data is incomplete, identify exactly which fields are missing and explain what analysis will be limited as a result.
- Confirm the time window (e.g., last 90 days, last 4 quarters) before proceeding.

### 2. Segment Reps by Revenue Outcome
- Rank reps by closed revenue for the period.
- Divide into three tiers: Top 25%, Middle 50%, Bottom 25%.
- Note headcount, tenure, and territory differences if available to flag confounders.

### 3. Calculate Activity Metrics Per Rep
For each rep, compute:
- **Call volume**: Total calls made, calls per open opportunity, call-to-connect rate if available.
- **Email cadence**: Emails sent per week, average response lag, multi-touch sequences initiated vs. single-touch.
- **Meeting frequency**: Discovery calls booked, demos completed, follow-up meetings per deal.
- **Follow-up speed**: Average time from lead assignment to first contact; average time between touchpoints.
- **Activity consistency**: Standard deviation of weekly activity counts (measures consistency vs. bursty behavior).

### 4. Identify Correlations
- Compare each activity metric across the three rep tiers.
- Flag any metric where the top tier average is >20% higher or lower than the bottom tier average — these are primary signals.
- Note non-linear patterns (e.g., diminishing returns above X calls/week).
- Identify activity combinations that co-occur in top performers (e.g., high call volume + fast follow-up).

### 5. Identify Inefficiency Patterns
- Flag high-activity reps in the bottom tier — effort without results signals targeting, messaging, or qualification issues.
- Flag low-activity reps in the top tier — identify whether they are working higher-quality pipelines or genuinely more efficient.
- Note any activity types that show no meaningful correlation with revenue.

### 6. Build Benchmarks
- Define the "efficient rep profile": the minimum activity thresholds at each metric level that top-tier reps meet.
- Calculate gap between each underperforming rep and the benchmark.

### 7. Generate Coaching Recommendations
- For each identified pattern, produce one specific, actionable recommendation.
- Tie each recommendation to a named behavior change (not a generic "improve follow-up").

## Output Format

Produce a structured audit report with the following sections:

---

**SALES REP ACTIVITY EFFICIENCY AUDIT**
*Period: [date range] | Reps analyzed: [N]*

---

**EXECUTIVE SUMMARY** (3–5 bullet points)
- Key finding: which 1–2 activity behaviors most strongly correlate with closed revenue.
- Any counterintuitive findings (e.g., email volume negatively correlated).
- Top efficiency gap between tiers.

---

**REP TIER BREAKDOWN**
Table with columns: Rep Name | Tier | Closed Revenue | Calls/Wk | Emails/Wk | Meetings/Mo | Avg First-Contact Time | Consistency Score

---

**ACTIVITY-TO-REVENUE CORRELATION TABLE**
Table with columns: Activity Metric | Top Tier Avg | Mid Tier Avg | Bottom Tier Avg | Correlation Signal (Strong / Moderate / Weak / None)

---
