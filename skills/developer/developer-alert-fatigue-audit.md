---
name: developer-alert-fatigue-audit
description: >
  Analyzes monitoring alert history to identify noisy, low-signal, or duplicate alerts that desensitize on-call engineers and recommends a consolidated alert policy. Use when someone says their team is ignoring alerts, asks about reducing alert noise, wants to audit their monitoring setup, complains about too many false positives, or needs to improve on-call engineer experience.
category: developer
tags: [monitoring, alerting, on-call, observability, devops]
author: community
---

# Developer Alert Fatigue Audit

This skill audits monitoring alert configurations and history to surface low-value alerts, duplicates, and coverage gaps, then produces a prioritized consolidation plan to restore signal quality for on-call engineers.

## Alert Fatigue Audit Workflow

### 1. Gather Alert Inventory
Ask the user to provide or describe:
- Current alert rules (names, conditions, thresholds, severity levels)
- Alert history data if available (firing frequency, acknowledgment rates, resolution times)
- On-call tooling in use (PagerDuty, OpsGenie, Alertmanager, Datadog, etc.)
- Team size and on-call rotation structure

### 2. Classify Each Alert by Signal Quality
Evaluate every alert against these criteria:
- **Fire rate**: Alerts firing more than 5x per week per service are candidates for noise
- **Acknowledgment-without-action rate**: Alerts routinely acknowledged but requiring no remediation indicate false positives
- **Auto-resolution rate**: Alerts that resolve before an engineer acts suggest thresholds are too sensitive
- **Duplicate detection**: Multiple alerts firing for the same root cause (e.g., CPU + latency + error rate all firing during one incident)
- **Coverage gaps**: Critical user-facing errors with no alert coverage

### 3. Assign a Fatigue Score to Each Alert
Score each alert 1–5 across three dimensions:
- **Actionability** (1 = never requires action, 5 = always requires immediate action)
- **Uniqueness** (1 = fully redundant with another alert, 5 = captures a unique failure mode)
- **Specificity** (1 = vague condition like "CPU > 50%", 5 = precise symptom tied to user impact)

Alerts scoring below 9 total are consolidation or elimination candidates.

### 4. Group Alerts into Consolidation Clusters
- Identify alert groups that consistently co-fire and represent the same incident
- Propose a single parent alert per cluster using the highest-signal condition
- Suggest suppression or dependency rules for child alerts within each cluster

### 5. Apply Alert Policy Recommendations
Apply these standard policies where gaps exist:
- **SLO-based alerting**: Replace threshold alerts with burn-rate alerts tied to error budgets
- **Symptom over cause**: Prefer alerting on user-facing impact (latency, error rate, availability) over infrastructure metrics (CPU, memory, disk)
- **Severity tiering**: Define exactly two actionable tiers — page (requires immediate human response) vs. ticket (fix next business day) — and reclassify all alerts accordingly
- **Dead alert pruning**: Any alert that has not fired in 90+ days and has no documented rationale should be archived

### 6. Produce the Consolidation Plan
Organize findings into a prioritized action list with estimated noise reduction per change.

## Output Format

Produce a structured audit report with the following sections:

**Alert Fatigue Audit Report**

1. **Executive Summary** (3–5 bullet points): Total alerts reviewed, estimated weekly noise volume, top 3 root causes of fatigue, projected noise reduction if recommendations are implemented.

2. **Alert Inventory Table**: Markdown table with columns — Alert Name | Current Severity | Fire Rate (weekly) | Actionability Score | Uniqueness Score | Specificity Score | Total Score | Recommendation (Keep / Modify / Merge / Delete).

3. **Consolidation Clusters**: For each cluster, list the co-firing alerts, the proposed replacement alert condition, and the suppression rule for child alerts.

4. **Policy Gap Findings**: Bulleted list of missing SLO alerts, miscategorized severities, and unmonitored critical paths with specific recommended replacements.

5. **Implementation Roadmap**: Numbered list of changes ordered by impact-to-effort ratio, each with: change description, expected weekly
