---
name: service-disruption-communication-template
description: >
  Creates tiered communication templates for notifying internal teams and external stakeholders during service disruptions of varying severity. Use when someone says "we have an outage," asks about "how to communicate a service incident," wants to "draft an incident notification," needs to "notify customers about downtime," or is "dealing with a service disruption."
category: operations
tags: [incident-response, communications, outage, stakeholders, templates]
author: community
---

# Service Disruption Communication Template

This skill generates severity-tiered, audience-specific communication templates for service disruptions, covering internal escalation channels and external stakeholder notifications.

## Severity Classification

Before generating templates, classify the disruption:

- **SEV-1 (Critical):** Full service outage, data loss risk, security breach, >50% users affected
- **SEV-2 (Major):** Partial outage, significant degradation, key feature unavailable, 10–50% users affected
- **SEV-3 (Minor):** Minor degradation, workaround available, <10% users affected, cosmetic issues

If severity is not provided, ask: "What is the approximate user impact and which services are affected?"

## Required Inputs

Collect the following before generating templates:
1. **Service name** — what system or product is affected
2. **Impact description** — what users cannot do
3. **Start time** — when the disruption began (include timezone)
4. **Current status** — investigating / identified / monitoring / resolved
5. **ETA for resolution** — if known; otherwise use "TBD"
6. **Root cause** — if known; otherwise use "under investigation"
7. **Affected audience** — customers, internal teams, or both

## Template Generation Rules

- **Tone:** Internal = direct and technical. External = calm, empathetic, non-technical.
- **Never** speculate on root cause in external communications until confirmed.
- **Always** include a next update time in every template.
- **Strip** internal jargon (ticket numbers, team names, stack references) from external templates.
- **Update templates** differ from initial templates — mark them clearly.
- Use plain language. Avoid passive voice where possible.

## Workflow

1. Identify severity level.
2. Identify audience (internal, external, or both).
3. Identify communication stage (initial alert, update, or resolution).
4. Generate the appropriate templates from the sections below.
5. Flag any missing inputs and provide placeholder text in `[BRACKETS]`.

---

### Internal Templates

**SEV-1 Initial Alert (Slack / Teams / Email)**
```
🔴 [SEV-1 INCIDENT] — [Service Name] OUTAGE
Time Detected: [HH:MM TZ]
Impact: [Describe what is broken and who is affected]
Status: Investigating
IC (Incident Commander): [Name]
Bridge/War Room: [Link or dial-in]
Next Update: [HH:MM TZ]
Ticket: [Link]
```

**SEV-2 Initial Alert**
```
🟠 [SEV-2 INCIDENT] — [Service Name] Degraded
Time Detected: [HH:MM TZ]
Impact: [Describe degradation and scope]
Status: Investigating
Owner: [Team/Name]
Next Update: [HH:MM TZ]
Ticket: [Link]
```

**SEV-3 Initial Alert**
```
🟡 [SEV-3 NOTICE] — [Service Name] Minor Issue
Time Detected: [HH:MM TZ]
Impact: [Describe issue]
Workaround: [If available]
Owner: [Team/Name]
Next Update: [HH:MM TZ]
```

**Internal Update Template**
```
🔄 UPDATE [#N] — [Service Name] | [HH:MM TZ]
Current Status: [Investigating / Identified / Monitoring]
What We Know: [1–3 sentences on findings]
Actions Taken: [Bullet list of steps completed]
Next Steps: [What is happening right now]
ETA: [Time or TBD]
Next Update: [HH:MM TZ]
```

**Internal Resolution Template**
```
✅ RESOLVED — [Service Name] | [HH:
