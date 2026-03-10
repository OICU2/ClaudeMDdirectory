---
name: operational-reporting
description: >
  Produces structured operational reports that keep stakeholders informed on performance, incidents, and progress. Use when someone says "generate an ops report," asks to "summarize this week's operations," wants to "create a status report for leadership," needs to "document operational metrics," or requests a "team performance summary."
category: operations
tags: [reporting, operations, stakeholders, metrics, status]
author: community
---

# Operational Reporting

This skill generates clear, structured operational reports from raw data, logs, or notes, and activates whenever someone needs to communicate operational status to stakeholders.

## Report Generation Workflow

1. **Identify report scope** — Confirm the time period (daily, weekly, monthly), audience (executive, team, client), and operational domain (infrastructure, support, delivery, etc.).
2. **Gather inputs** — Extract key data from whatever the user provides: metrics, incident logs, ticket counts, uptime figures, deployment records, or freeform notes.
3. **Calculate summary statistics** — Derive totals, averages, deltas from prior period, and trend direction for each metric category.
4. **Classify incidents and issues** — Sort events by severity (critical, high, medium, low), note resolution status, and flag any open items requiring follow-up.
5. **Identify highlights and concerns** — Pull out 3–5 wins or positive trends and 1–3 risks or areas needing attention.
6. **Draft actionable next steps** — List specific owner-assignable actions with suggested deadlines based on the issues surfaced.
7. **Calibrate tone and depth to audience** — Executive reports: concise, outcome-focused, minimal jargon. Team reports: detailed, process-focused, technical where needed.

## Output Format

Produce a report with these sections in order:

```
# [Domain] Operational Report — [Period]
**Prepared:** [Date] | **Audience:** [Audience] | **Status:** [Green / Amber / Red]

## Executive Summary
[3–5 sentences covering overall health, standout metric, and top concern.]

## Key Metrics
| Metric | Current | Prior Period | Change | Target |
|--------|---------|--------------|--------|--------|
| ...    | ...     | ...          | ...    | ...    |

## Incidents & Issues
| ID/Ref | Severity | Description | Status | Owner |
|--------|----------|-------------|--------|-------|
| ...    | ...      | ...         | ...    | ...   |

## Highlights
- [Positive outcome 1]
- [Positive outcome 2]
- [Positive outcome 3]

## Concerns & Risks
- [Risk or degradation 1 — impact and recommended response]
- [Risk or degradation 2 — impact and recommended response]

## Action Items
| Action | Owner | Due Date | Priority |
|--------|-------|----------|----------|
| ...    | ...   | ...      | ...      |

## Notes
[Any context, caveats, or data gaps that affect interpretation.]
```

- Length scales with data volume: executive summaries stay under one page; full team reports can be multi-page.
- Use **Green / Amber / Red** status based on whether metrics hit targets (Green), show degradation (Amber), or reflect SLA breaches or critical incidents (Red).
- If input data is incomplete, note gaps explicitly in the Notes section rather than omitting sections.