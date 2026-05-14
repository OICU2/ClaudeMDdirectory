---
name: sales-call-agenda-pre-builder
description: >
  Generates a structured, customized pre-call agenda for an upcoming sales meeting based on the prospect's pipeline stage, decision-maker role, and identified pain points. Use when someone says "I have a sales call coming up," asks about "how to prepare for a prospect meeting," or wants to "build an agenda for a discovery call," "structure a demo meeting," or "plan a sales conversation." Ensures reps walk into every call with a clear, prospect-specific plan.
category: sales
tags: [sales, meeting-prep, agenda, discovery, prospect]
author: community
---

# Sales Call Agenda Pre-Builder

This skill generates a tailored pre-call agenda for a sales meeting by gathering key context about the prospect and outputting a structured, actionable meeting plan the rep can use immediately.

## Workflow

1. **Gather required inputs** — Before building the agenda, collect the following if not already provided:
   - Prospect name and company
   - Pipeline stage (e.g., first discovery, second meeting, demo, proposal review, negotiation)
   - Prospect's role/title and seniority level (e.g., end user, economic buyer, technical evaluator)
   - Known pain points or business challenges (at least one required)
   - Meeting duration (default to 30 minutes if not specified)
   - Any prior meeting notes or context (optional)

2. **Map stage to agenda structure** — Use the pipeline stage to determine the meeting's primary objective:
   - **First discovery**: Understand current state, uncover pain, establish credibility
   - **Second meeting / deeper discovery**: Validate pain, introduce solution fit, identify stakeholders
   - **Demo**: Connect features directly to stated pain points, handle objections live
   - **Proposal review**: Walk through ROI, address risk concerns, move toward commitment
   - **Negotiation / close**: Resolve final objections, confirm terms, agree on next steps

3. **Tailor content to role** — Adjust language and focus based on who is in the room:
   - **Executive / economic buyer**: Lead with business outcomes, ROI, risk reduction
   - **Technical evaluator**: Include integration questions, security, implementation details
   - **End user / champion**: Focus on workflow improvement, ease of use, day-to-day impact

4. **Build the agenda blocks** — Create timed agenda sections using the meeting duration. Each block must include a clear purpose, specific questions or talking points, and a success indicator.

5. **Add a pre-call checklist** — Include 3–5 preparation tasks the rep should complete before the meeting (e.g., LinkedIn research, review last call notes, prepare a relevant case study).

6. **Define the desired next step** — Based on the pipeline stage, specify the exact next step the rep should aim to secure by end of the meeting (e.g., "Schedule technical deep-dive with IT lead").

## Output Format

Produce a clean, scannable agenda document with the following sections:

---

**Pre-Call Agenda: [Prospect Name] — [Company]**
**Meeting Type:** [Stage]  
**Duration:** [X minutes]  
**Primary Objective:** [One sentence]

---

**Pre-Call Checklist**
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

---

**Agenda**

| Time | Block | Purpose | Key Questions / Talking Points |
|------|-------|---------|-------------------------------|
| 0:00–0:05 | Opening & rapport | Set tone, confirm agenda | [specific opener] |
| 0:05–0:15 | [Block name] | [Purpose] | [2–3 specific questions] |
| 0:15–0:25 | [Block name] | [Purpose] | [2–3 specific points] |
| 0:25–0:30 | Next steps | Secure commitment | [Exact ask] |

---

**Pain Points to Address**
- [Pain point 1] → Tie to: [relevant product capability or proof point]
- [Pain point 2] → Tie to: [relevant product capability or proof point]

---

**Target Next Step:** [Specific, committal next step with proposed timing]

---

Keep the agenda concise enough to fit on one page. Use plain language the rep can read at a glance during the call. Avoid jargon unless it mirrors the prospect's own language.
