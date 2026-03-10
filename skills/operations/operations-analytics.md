---
name: operations-analytics
description: >
  Analyzes operational data to surface actionable insights that drive efficiency improvements and reduce waste. Use when someone asks to analyze operational performance, wants to find bottlenecks in a process, needs to understand why metrics are trending down, or asks how to improve operational efficiency. Also activates when someone shares operational data and wants to know what it means.
category: operations
tags: [analytics, operations, efficiency, metrics, insights]
author: community
---

# Operations Analytics

Analyzes operational data — including throughput, cycle times, error rates, costs, and resource utilization — to identify bottlenecks, anomalies, and improvement opportunities, then delivers prioritized, actionable recommendations.

## Analysis Workflow

1. **Clarify data scope**: Identify what operational data is available (time series, event logs, cost data, throughput metrics). Ask for it if not provided.
2. **Establish baseline**: Determine normal operating ranges, historical averages, or targets. Flag if no baseline exists.
3. **Identify anomalies and trends**: Look for outliers, degradation over time, sudden shifts, and seasonal patterns.
4. **Locate bottlenecks**: Find steps or resources where work accumulates, latency spikes, or error rates are highest.
5. **Quantify impact**: Translate each finding into business terms — time lost, cost incurred, throughput reduced, SLA risk.
6. **Root cause hypothesis**: For each major finding, propose 1–3 likely root causes based on the data patterns.
7. **Prioritize by impact**: Rank issues using a simple impact × effort matrix (high impact + low effort = fix first).
8. **Generate recommendations**: For each top issue, provide a specific, concrete action with expected outcome.

## Rules

- Never present a finding without quantifying its impact.
- Always distinguish between correlation and causation — flag hypotheses as hypotheses.
- If data is insufficient to draw a conclusion, say so explicitly and specify what additional data is needed.
- Prioritize findings that affect customer-facing outcomes or cost above internal inefficiencies.
- Flag any data quality issues (gaps, inconsistencies, suspicious values) before drawing conclusions.

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 bullet points): Top findings and their business impact in plain language.

**Key Findings** (one subsection per finding):
- Finding: what the data shows
- Impact: quantified business effect
- Root cause hypothesis: most likely explanation
- Confidence: High / Medium / Low

**Bottleneck Map** (if process data is available): A text-based or markdown table showing where delays or errors concentrate across process steps.

**Prioritized Recommendations** (table format):

| Priority | Action | Expected Outcome | Effort | Owner Suggestion |
|----------|--------|-----------------|--------|-----------------|

**Data Gaps**: List any missing data that would sharpen the analysis.

Length scales with data complexity — a simple dataset warrants a concise 1-page report; complex multi-system data warrants full sections. Always use tables and bullet points over dense paragraphs.