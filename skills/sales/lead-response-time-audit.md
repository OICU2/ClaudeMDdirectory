---
name: lead-response-time-audit
description: >
  Analyzes CRM timestamps across inbound lead creation and first rep activity to calculate average response times and surface SLA violations. Use when someone says "how fast are we responding to leads," asks about rep response time performance, wants to audit lead follow-up speed, needs to identify which reps are missing SLA targets, or is investigating why inbound conversion rates are low.
category: sales
tags: [crm, leads, sla, response-time, sales-ops]
author: community
---

# Lead Response Time Audit

This skill processes CRM timestamp data to calculate lead response times by rep and segment, then flags anyone or any cohort falling outside defined SLA windows.

## Audit Workflow

1. **Confirm data inputs**: Ask the user to provide or confirm the source of CRM data — exported CSV, direct CRM query output, or pasted records. Required fields: lead ID, lead creation timestamp, first rep activity timestamp, rep name, lead source, and segment/tier if available.

2. **Define SLA targets**: Ask for the SLA thresholds to benchmark against. If not provided, default to: Tier 1 / high-intent leads = 5 minutes, standard inbound = 1 hour, all others = 24 hours. Confirm these before proceeding.

3. **Calculate response times**: For each lead record, compute elapsed time between creation timestamp and first rep activity timestamp. Convert to minutes and hours. Flag any record where first activity is missing (unworked leads) — these are automatic SLA failures.

4. **Aggregate by rep**: Group response times by rep name. For each rep calculate: median response time, average response time, total leads handled, count of SLA breaches, and breach rate as a percentage.

5. **Aggregate by segment**: Repeat aggregation by lead source and segment/tier. Identify which channels or tiers have the worst average response times.

6. **Identify outliers**: Flag any rep with a breach rate above 20% or a median response time more than 2x the SLA target. Flag any segment where more than 30% of leads exceed SLA.

7. **Root cause prompts**: For each flagged rep or segment, note observable patterns — e.g., breaches concentrated on weekends, after-hours, or specific lead sources — and surface these as hypotheses for the user to investigate.

8. **Recommendations**: Provide 3–5 specific, prioritized actions such as routing rule changes, coverage adjustments, rep coaching targets, or alert configurations.

## Output Format

Produce a structured audit report with the following sections:

**Summary Scorecard** — Single table showing overall average response time, total leads audited, total SLA breaches, and overall breach rate.

**Rep Performance Table** — Columns: Rep Name | Median Response Time | Avg Response Time | Leads Handled | SLA Breaches | Breach Rate | Status (Pass/Watch/Fail).

**Segment Breakdown Table** — Columns: Segment/Source | Avg Response Time | SLA Target | Breach Rate | Status.

**Flagged Issues** — Bulleted list of specific reps and segments that failed thresholds, with one-line context for each (e.g., "Sarah M. — 67% breach rate, concentrated Monday mornings").

**Recommendations** — Numbered list of 3–5 actions, each with the specific metric it addresses and expected impact.

Keep the report scannable. Use tables for all quantitative data. No narrative padding between sections.
