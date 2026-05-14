---
name: on-call-alert-noise-audit
description: >
  Analyzes historical alerting data to identify low-signal, redundant, or fatiguing alerts that
  should be tuned, suppressed, or rerouted. Use when someone says their on-call rotation is
  exhausting, asks why alerts keep firing without action, wants to reduce alert fatigue, is
  reviewing pagerduty or alertmanager noise, or needs to justify which alerts to silence or
  consolidate.
category: developer
tags: [on-call, alerting, observability, reliability, devops]
author: community
---

# On-Call Alert Noise Audit

Audits historical alert data to surface low-value, duplicate, or misconfigured alerts and produces a prioritized remediation plan to reduce engineer fatigue and improve signal quality.

## Alert Audit Workflow

### 1. Collect Raw Alert Data
Ask the user to provide or paste one of the following:
- PagerDuty incident export (CSV or JSON)
- Alertmanager firing history or silence logs
- Datadog, Grafana, or similar alert history
- A manual list of alert names with frequency and action taken

If no data is provided, generate a structured template the user can fill in with columns: `alert_name`, `fired_count`, `acknowledged_count`, `resolved_without_action_count`, `avg_resolution_time_minutes`, `routed_to_team`, `last_tuned_date`.

### 2. Classify Each Alert
Evaluate every alert across these five signal categories:

| Category | Definition |
|---|---|
| **Low Signal** | Fired >10x in 30 days with <20% resulting in human action |
| **Duplicate/Correlated** | Two or more alerts consistently fire within 5 minutes of each other |
| **Threshold Drift** | Alert tuned >6 months ago; condition no longer reflects real failure |
| **Misdirected** | Consistently acknowledged by a different team than the configured receiver |
| **Auto-Resolved** | >70% of firings resolved without human intervention within 5 minutes |

### 3. Score and Rank Alerts
Assign each alert a **Noise Score (1–10)**:
- +3 if fired >20x per 30 days with <20% action rate
- +2 if auto-resolves in <5 min more than 70% of the time
- +2 if correlated with another alert firing simultaneously
- +2 if routed to wrong team or unowned
- +1 if not tuned in >6 months

Score ≥ 7 = **High Priority** (suppress or reroute immediately)
Score 4–6 = **Medium Priority** (tune threshold or deduplicate)
Score < 4 = **Low Priority** (document and monitor)

### 4. Generate Remediation Actions
For each alert, assign exactly one recommended action:

- **Suppress**: Alert provides no actionable signal; add to silence list or delete
- **Raise Threshold**: Alert fires too frequently for non-critical conditions; specify new suggested threshold
- **Merge/Group**: Alert is a duplicate; consolidate with named correlated alert using inhibition rules
- **Reroute**: Alert consistently handled by wrong team; update routing config to correct receiver
- **Add Runbook**: Alert fires correctly but lacks response guidance; link or create runbook
- **Schedule Review**: Alert data is insufficient to decide; flag for 30-day observation period

### 5. Estimate Impact
For the top 10 highest-scoring alerts, calculate:
- **Projected alerts suppressed per month** based on historical fire rate
- **Estimated engineer-hours recovered** (assume 5 minutes per alert acknowledgment)
- **Reduction in P1/P2 noise ratio** if duplicates are merged

## Output Format

Produce three sections:

**Section 1 — Alert Audit Table**
Markdown table with columns: `Alert Name`, `Noise Score`, `Category`, `30-Day Fire Count`, `Action Rate %`, `Recommended Action`, `Priority`
Sorted by Noise Score descending.

**Section 2 — Top 5 Immediate Actions**
Numbered list. Each item includes:
- Alert name
- One-line reason it is high priority
- Exact configuration change or command to implement the fix (e.g., Alert
