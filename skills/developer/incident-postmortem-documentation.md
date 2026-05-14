---
name: incident-postmortem-documentation
description: >
  Generates a structured post-incident report that captures the full lifecycle of a production incident.
  Use when someone says "write a postmortem", asks to "document what happened during the outage",
  wants to "create an incident report", needs to "capture lessons learned from the incident",
  or says "help me write up the RCA".
category: developer
tags: [incident-management, postmortem, reliability, devops, documentation]
author: community
---

# Incident Postmortem Documentation

This skill produces a complete, structured post-incident report when a user needs to document a production incident, outage, or service degradation event.

## Workflow

1. **Gather incident context** — If not provided, ask for: incident name/ID, date and duration, severity level, affected services, and who was involved in the response.

2. **Establish the timeline** — Extract or prompt for a chronological sequence of events: when the issue was first detected, when alerts fired, when responders engaged, key diagnostic steps taken, when mitigation was applied, and when full recovery was confirmed. Use UTC timestamps if available.

3. **Identify root cause** — Determine the single technical root cause: the specific change, failure, or condition that directly caused the incident. Distinguish this from contributing factors.

4. **Document contributing factors** — List secondary conditions that amplified impact or delayed detection/resolution (e.g., missing alerts, insufficient logging, deployment process gaps, knowledge silos).

5. **Assess customer impact** — Quantify and describe user-facing effects: percentage of users affected, error rates, latency degradation, data loss or corruption, SLA breaches, and duration of impact.

6. **Define remediation items** — Create specific, assignable action items in two categories:
   - **Immediate fixes**: changes already made or needed within days to prevent recurrence
   - **Long-term improvements**: systemic changes to processes, tooling, or architecture with owners and target dates

7. **Write an executive summary** — Produce a 3–5 sentence summary suitable for stakeholder communication that covers what happened, impact, root cause, and current status.

## Output Format

Produce the postmortem as a markdown document with the following sections in order:

```
# Incident Postmortem: [Incident Name] — [Date]

**Severity:** [SEV1 / SEV2 / SEV3]
**Status:** [Resolved / Monitoring / In Progress]
**Duration:** [X hours Y minutes]
**Incident Commander:** [Name]
**Last Updated:** [Date]

---

## Executive Summary
[3–5 sentences covering: what failed, who was affected, root cause, and current status]

## Timeline
| Time (UTC) | Event |
|------------|-------|
| HH:MM      | [Event description] |

## Root Cause
[1–3 sentences identifying the specific technical cause]

## Contributing Factors
- [Factor 1]
- [Factor 2]

## Customer Impact
- **Users affected:** [number or percentage]
- **Services degraded:** [list]
- **Error rate:** [baseline vs. peak]
- **SLA impact:** [yes/no, details]
- **Duration of customer impact:** [timespan]

## What Went Well
- [Item]

## What Went Poorly
- [Item]

## Remediation Items
| Priority | Action Item | Owner | Due Date | Status |
|----------|-------------|-------|----------|--------|
| P1       | [Action]    | [Name]| [Date]   | Open   |

## Lessons Learned
[2–4 sentences on systemic insights beyond the specific fix]
```

- Use a table for the timeline and remediation items.
- Fill every section; mark unknown fields as `[TBD — requires follow-up]` rather than omitting them.
- Keep the root cause section to 1–3 sentences; do not conflate it with contributing factors.
- Remediation items must have an owner and due date; vague items like "improve monitoring" are not acceptable without specifics.
