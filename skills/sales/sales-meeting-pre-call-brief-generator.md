---
name: sales-meeting-pre-call-brief-generator
category: sales
description: >
  Automatically compiles a one-page pre-call brief for an upcoming prospect or customer meeting by pulling together company news, contact history, open deal stage, and suggested talking points. Use when someone says "I have a meeting with," asks to "prep me for my call with," wants to "get ready for a prospect meeting," needs a "pre-call brief for," or says "help me prepare for my sales call with."
tags: [sales, meeting-prep, crm, prospecting, account-intelligence]
author: community
---

# Sales Meeting Pre-Call Brief Generator

This skill generates a concise, structured one-page pre-call brief before a prospect or customer meeting, giving the rep everything they need to walk in prepared and confident.

## Workflow

1. **Identify the meeting target.** Collect the prospect's name, company, meeting date/time, and the rep's name or role. If not provided, ask for them before proceeding.

2. **Gather available context.** Pull from whatever sources the user provides or has accessible:
   - CRM data: deal stage, deal value, last activity date, next steps logged
   - Contact history: prior emails, call notes, previous meetings
   - Company intelligence: recent news, funding rounds, leadership changes, product launches, earnings calls
   - Known pain points or objections raised in prior interactions

3. **Identify gaps and fill with inference.** If CRM or contact data is not provided, ask the user to paste in relevant notes. If company news is unavailable, flag it and suggest the rep check LinkedIn or Google News before the call.

4. **Determine talking points.** Based on deal stage and contact history, generate 3–5 specific talking points tailored to where the prospect is in the buying journey:
   - Early stage: discovery questions, pain hypothesis, value framing
   - Mid stage: objection handling, case studies, ROI anchors
   - Late stage: negotiation levers, champion enablement, close language

5. **Flag risks and opportunities.** Highlight any red flags (e.g., deal gone cold, stakeholder change, competitive mention) and any positive signals (e.g., prospect engaged with content, inbound inquiry, budget confirmed).

6. **Format the brief.** Assemble all sections into a clean, scannable one-page document the rep can review in under 3 minutes.

## Output Format

Produce a structured brief with the following sections, using headers and bullet points throughout. Target length: 400–600 words.

---

**PRE-CALL BRIEF**
**Meeting:** [Prospect Name] — [Company] | [Date & Time]
**Prepared for:** [Rep Name]

---

**Company Snapshot**
- Industry, size, HQ location
- 2–3 bullet points on recent news or signals (funding, hires, product launches, press)

**Contact Profile**
- Name, title, tenure, LinkedIn summary (1 line)
- Known priorities or stated pain points
- Communication style or preferences (if noted)

**Deal Status**
- Stage: [e.g., Discovery / Demo / Proposal / Negotiation]
- Deal Value: $[amount]
- Last Touch: [date + summary of last interaction]
- Next Step Previously Agreed: [what was committed to]

**Key Talking Points** (3–5 bullets)
- Each point should be specific to the deal context, not generic
- Lead with the prospect's pain, not the product's features

**Risks & Watch-Outs**
- Any red flags or stalled signals to be aware of

**Opportunities & Positive Signals**
- Any momentum indicators or open doors to advance the deal

**Suggested Ask / Call Objective**
- One clear sentence stating what a successful outcome of this call looks like

---
