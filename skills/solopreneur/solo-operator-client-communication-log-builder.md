---
name: solo-operator-client-communication-log-builder
description: >
  Builds a structured communication history template that captures every client interaction, decision, and commitment in one persistent reference. Use when someone says they keep losing track of client conversations, wants to document their client relationship history, needs a system to remember what was promised to clients, is starting a new client engagement and wants to stay organized, or feels unprepared jumping back into a client relationship after time away.
category: solopreneur
tags: [client-management, communication, documentation, solopreneur, continuity]
author: community
---

# Solo Operator Client Communication Log Builder

Generates a structured, reusable communication log template for a specific client relationship so the solo operator never loses context between sessions, calls, or project phases.

## Workflow

1. **Gather client basics** — Ask for the client's name, company, project or engagement type, and the date the relationship started. If the user already has this, accept it; don't re-ask.

2. **Identify the communication channels in use** — Ask which channels they use with this client (email, Slack, calls, in-person, text). Tailor the log sections to those channels only.

3. **Capture the current relationship state** — Ask three targeted questions:
   - What is the most recent thing discussed or delivered?
   - Are there any open commitments or follow-ups (from either side)?
   - Is anything unclear or unresolved right now?

4. **Build the log structure** — Construct the template with these fixed sections:
   - **Client Snapshot**: name, company, engagement type, start date, primary contact, billing terms
   - **Communication Preferences**: preferred channel, response time expectations, communication style notes
   - **Interaction Log**: table format with columns — Date | Channel | Summary | Decisions Made | Action Items | Owner | Due Date
   - **Standing Commitments**: a running list of promises made by either party that haven't been marked complete
   - **Key Context & Background**: things that are always true about this client (quirks, preferences, constraints, history)
   - **Relationship Health Notes**: optional field for tone observations, friction points, or trust signals
   - **Next Touchpoint**: scheduled or planned next interaction with prep notes

5. **Pre-populate with what the user provided** — Fill in every field the user has already given. Leave unfilled fields clearly marked as `[To fill in]` so nothing looks complete when it isn't.

6. **Deliver a quick-reference summary block** — At the top of the log, add a 3-line "Last I Left Off" summary the operator can read in 30 seconds before any client interaction.

## Output Format

Produce a single, complete client communication log document formatted in Markdown.

**Structure:**
- Start with the "Last I Left Off" summary block (3 sentences max, plain language)
- Follow with the Client Snapshot section (key-value pairs)
- Include the Communication Preferences section (key-value pairs)
- Include the Interaction Log as a Markdown table, pre-populated with any entries the user described
- Include Standing Commitments as a checklist using `- [ ]` format
- Include Key Context & Background as a bulleted list
- Include Relationship Health Notes as a short paragraph or bullet list
- End with Next Touchpoint section including date (if known) and prep notes

**Length:** One document, typically 40–80 lines depending on relationship complexity. Dense with real information, not placeholder filler.

**Tone:** Professional and functional — this is a working document, not a report.

**Reusability note:** Add a footer comment instructing the user to duplicate this template for each new client and update the Interaction Log after every touchpoint.
