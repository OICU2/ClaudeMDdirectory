---
name: sales-activity-to-pipeline-correlation-report
description: >
  Analyzes which specific sales activities correlate most strongly with pipeline progression and closed revenue. Use when someone says "show me what activities are actually moving deals," asks about which sales behaviors drive results, wants to understand the ROI of specific rep activities, needs to identify high-impact versus low-impact sales motions, or is trying to optimize how their team spends selling time.
category: sales
tags: [sales-analytics, pipeline, activity-tracking, revenue-correlation, sales-ops]
author: community
---

# Sales Activity-to-Pipeline Correlation Report

This skill analyzes CRM activity data and pipeline outcomes to identify which specific sales activities (calls, emails, demos, meetings, etc.) most strongly predict deal progression and closed revenue, then produces a ranked correlation report with actionable recommendations.

## Analysis Workflow

### 1. Gather Required Data
Request or accept the following inputs:
- Activity log: type, date, rep, associated deal/account, count per deal
- Pipeline data: deal stage, stage change dates, deal value, won/lost status, close date
- Time range for analysis (default: trailing 12 months)
- Segmentation preferences (by rep, segment, deal size, product line)

If data is not provided, ask the user to paste a CSV export or describe their CRM fields so you can map them correctly.

### 2. Define Activity Categories
Standardize activities into measurable units:
- **Outbound touches**: cold calls, cold emails, LinkedIn messages
- **Engaged conversations**: discovery calls, follow-up calls, email replies
- **Demonstrations**: product demos, technical evaluations, trials
- **Stakeholder meetings**: executive briefings, multi-threading calls, procurement meetings
- **Proposals and documentation**: proposals sent, contracts sent, security reviews
- **Internal activities**: deal reviews, champion coaching calls

### 3. Calculate Correlations
For each activity type, compute:
- **Stage advancement rate**: % of deals that moved to next stage within 14 days after this activity
- **Velocity impact**: average days to close for deals with vs. without this activity
- **Win rate lift**: win rate for deals where this activity occurred vs. those where it did not
- **Revenue correlation**: average deal value associated with deals containing this activity
- **Optimal frequency**: distribution of activity count per deal for won deals vs. lost deals

Use Pearson correlation or rank-order comparison if full statistical tools aren't available. If working from summary data rather than raw logs, use ratio comparisons and flag the limitation.

### 4. Identify Patterns and Anomalies
- Flag activities with high frequency but low correlation (time sinks)
- Flag activities with low frequency but high win-rate correlation (underutilized levers)
- Identify sequencing patterns: which activity combinations in which order predict wins
- Note rep-level variation: which reps perform high-correlation activities more consistently
- Highlight deal size segmentation: activities that matter more for enterprise vs. SMB

### 5. Prioritize Findings
Rank activities using a composite score:
- 40% weight: win rate correlation
- 35% weight: pipeline velocity impact
- 25% weight: revenue per deal correlation

Label each activity as: **High Impact**, **Moderate Impact**, **Low Impact**, or **Negative Correlation**.

## Output Format

Produce a structured report with these sections:

---

**Sales Activity-to-Pipeline Correlation Report**
*Period: [date range] | Deals analyzed: [N] | Total pipeline: [$X]*

---

**Executive Summary** (3–5 bullet points)
- Top 2 activities driving closed revenue
- Biggest time-sink activity (high volume, low impact)
- One underutilized high-impact activity
- Key recommendation for immediate action

---

**Activity Correlation Rankings** (table format)

| Activity | Avg per Won Deal | Avg per Lost Deal | Win Rate Lift | Velocity Impact | Revenue Correlation | Impact Rating |
|---|---|---|---|---|---|---|
| [Activity] | [N] | [N] | [+X%] | [-X days] | [+$X] | High/Med/Low |

*Sort by composite impact score, highest to lowest.*

---

**Sequencing Insights**
- List 2–3 winning activity sequences observed in closed-won deals (e.g., "Discovery call → Champion coaching call within 7 days → Demo → Executive briefing correl
