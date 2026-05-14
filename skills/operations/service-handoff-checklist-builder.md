---
name: service-handoff-checklist-builder
description: >
  Builds a structured handoff checklist for transferring service responsibilities between teams, shifts, or vendors to ensure nothing falls through the cracks. Use when someone says they need to hand off a service, is transitioning ownership to another team, wants to document responsibilities before going on leave, needs to onboard a vendor or contractor, or is preparing an end-of-shift summary for incoming staff.
category: operations
tags: [handoff, checklist, operations, service-transfer, documentation]
author: community
---

# Service Handoff Checklist Builder

This skill generates a comprehensive, structured handoff checklist when someone needs to transfer service ownership, shift responsibilities, or vendor management to another party.

## Workflow

1. **Identify handoff context** — Determine what is being handed off (service, project, on-call rotation, shift, vendor relationship) and who the parties are (outgoing team/person, incoming team/person).

2. **Gather key details** — Ask for or infer the following if not provided:
   - Service or system name
   - Handoff date and duration (temporary or permanent)
   - Incoming party's familiarity level (new to this entirely, or experienced with similar work)
   - Any known open issues, incidents, or pending tasks
   - Critical SLAs, escalation paths, or compliance requirements

3. **Build checklist in layers** — Structure the checklist across these mandatory categories:
   - **Service Overview**: Purpose, architecture summary, key dependencies, access credentials/locations
   - **Current State**: Active incidents, open tickets, recent changes, known tech debt or risks
   - **Runbooks & Documentation**: Links or locations for runbooks, wikis, playbooks, dashboards
   - **Contacts & Escalation**: Key stakeholders, vendor contacts, escalation chain, on-call schedule
   - **Pending Tasks**: Unfinished work, upcoming deadlines, scheduled maintenance windows
   - **Access & Permissions**: Accounts, tools, and permissions the incoming party needs to verify or request
   - **Monitoring & Alerting**: Alert channels, thresholds to watch, known noisy alerts to ignore
   - **First 24-Hour Actions**: Specific actions the incoming party should take immediately upon assuming ownership

4. **Flag high-risk items** — Mark any item that, if missed, could cause a service outage, SLA breach, or security incident with a ⚠️ indicator.

5. **Add a sign-off block** — Include a section for both outgoing and incoming parties to confirm checklist completion.

## Output Format

Produce a Markdown document with the following structure:

```
# Handoff Checklist: [Service/Team Name]
**Date:** [date]
**Outgoing:** [name/team]
**Incoming:** [name/team]
**Handoff Type:** [temporary / permanent / shift rotation]

---

## ✅ Service Overview
- [ ] Item
- [ ] Item ⚠️

## ✅ Current State
- [ ] Item

## ✅ Runbooks & Documentation
- [ ] Item

## ✅ Contacts & Escalation
- [ ] Item

## ✅ Pending Tasks
- [ ] Item

## ✅ Access & Permissions
- [ ] Item

## ✅ Monitoring & Alerting
- [ ] Item

## ✅ First 24-Hour Actions
- [ ] Item

---

## Sign-Off
- [ ] Outgoing party confirms checklist is complete: _________________ Date: _______
- [ ] Incoming party confirms receipt and understanding: _____________ Date: _______
```

Each checklist item must be a concrete, verifiable action (not vague statements). Aim for 4–8 items per section. Total checklist length should be 30–60 items depending on service complexity.
