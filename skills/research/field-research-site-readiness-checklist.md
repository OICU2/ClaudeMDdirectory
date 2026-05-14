---
name: field-research-site-readiness-checklist
description: >
  Generates a comprehensive pre-fieldwork readiness checklist covering equipment, access permissions, participant logistics, and data capture protocols. Use when someone says they are preparing for fieldwork, asks about getting a research site ready, wants to run a site visit for user research, needs to prepare for ethnographic observation, or is planning on-site data collection.
category: research
tags: [fieldwork, checklist, site-readiness, data-collection, research-logistics]
author: community
---

# Field Research Site Readiness Checklist

This skill generates a structured pre-fieldwork checklist tailored to the specific research context, ensuring no critical preparation step is missed before arriving on site.

## Checklist Generation Workflow

1. **Gather context first** — Ask the user for the following if not already provided:
   - Type of research (ethnographic, usability, interview-based, observational, survey)
   - Site type (office, home, public space, facility, outdoor)
   - Number of participants and sessions
   - Recording and data capture methods planned
   - Team size and roles

2. **Apply the five readiness domains** — Build the checklist across these mandatory categories:

   **A. Equipment & Technology**
   - Recording devices (audio, video, screen capture) — charged, tested, backed up
   - Note-taking tools (paper, tablet, laptop) — functional and charged
   - Consent form copies (digital and physical)
   - Cables, adapters, spare batteries, memory cards
   - Stimulus materials (prototypes, printed guides, task sheets)
   - Backup equipment identified for each critical item

   **B. Access & Permissions**
   - Site access confirmed (keycards, visitor badges, building contacts)
   - IRB or ethics approval documentation carried
   - Legal permissions or NDAs signed and filed
   - Photography/recording permissions obtained from site owner
   - Emergency contacts and site warden information logged

   **C. Participant Logistics**
   - Confirmed attendance from all scheduled participants
   - Directions and parking/transit instructions sent
   - Incentives prepared (gift cards, payments, receipts)
   - Accessibility accommodations verified
   - Screener criteria re-checked against confirmed attendees
   - No-show and rescheduling protocol defined

   **D. Data Capture Protocols**
   - Session recording plan documented (who records what)
   - Naming and file-storage conventions agreed upon
   - Live note-taking template or observation guide distributed to team
   - Data upload and backup destination confirmed
   - Privacy and anonymization rules communicated to all team members

   **E. Team & Facilitation Readiness**
   - Roles assigned (facilitator, note-taker, observer, tech support)
   - Discussion guide or protocol finalized and printed/shared
   - Pilot or dry-run session completed
   - Team debrief time and format scheduled post-sessions
   - Contingency plan for technical failure or participant dropout

3. **Flag critical blockers** — Mark any item as 🔴 BLOCKER if its absence would prevent the session from running (e.g., no signed permissions, no recording device).

4. **Customize for context** — Remove irrelevant items and add domain-specific items based on the research type (e.g., add "stimuli randomization order" for usability tests, "field safety protocol" for outdoor research).

## Output Format

Produce a markdown checklist organized into the five domains above. Each item uses a checkbox format (`- [ ]`). Blockers are prefixed with 🔴. Optional but recommended items are prefixed with ⚪.

Structure:

```
# Field Research Site Readiness Checklist
**Site:** [name/type] | **Date:** [date] | **Sessions:** [number] | **Team:** [roles]

---

## A. Equipment & Technology
- [ ] ...
- 🔴 [ ] ...

## B. Access & Permissions
...

## C. Participant Logistics
...

## D. Data Capture Protocols
...

## E. Team & Facilitation Readiness
...

---
**Estimated prep time:** [X hours]
**Final check deadline:** [recommend 24 hours before]
```

Length: 30–60 checklist items total depending on session complexity. Include a one-line summary at the top stating how many blockers were identified.
