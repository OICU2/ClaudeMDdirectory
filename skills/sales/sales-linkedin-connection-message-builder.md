---
name: sales-linkedin-connection-message-builder
description: >
  Generates personalized LinkedIn connection request messages tailored to a prospect's role, company, and pain points. Use when someone says "write me a LinkedIn message," asks about connecting with a prospect on LinkedIn, wants to reach out to someone on LinkedIn, needs a connection request for a lead, or is trying to get a response from someone on LinkedIn.
category: sales
tags: [linkedin, outreach, prospecting, connection-request, personalization]
author: community
---

# LinkedIn Connection Message Builder

This skill crafts short, personalized LinkedIn connection request messages that feel human and relevant — not templated — based on the prospect's role, company context, and likely pain points.

## Message Building Workflow

1. **Gather prospect context** — Before writing, collect or infer:
   - Prospect's job title and seniority level
   - Company name, size, and industry
   - Any recent company news, funding, hiring trends, or product launches (if provided)
   - The sender's role and what they sell or offer
   - Any mutual connections, shared groups, or common background (if provided)

2. **Identify the pain point angle** — Match the prospect's role to a likely business challenge:
   - VP/Director of Sales → pipeline volume, rep ramp time, quota attainment
   - CTO/VP Engineering → tech debt, scalability, hiring velocity
   - CFO/Finance → cost reduction, forecasting accuracy, compliance
   - HR/People Ops → retention, recruiting speed, onboarding
   - Marketing → lead quality, attribution, content ROI
   - Founder/CEO → growth, burn rate, market positioning
   - Use provided context clues to sharpen the inferred pain point

3. **Apply the message structure**:
   - **Hook** (1 sentence): Reference something specific — a company milestone, shared interest, their content, or mutual connection. Never use "I came across your profile."
   - **Relevance bridge** (1 sentence): Connect their situation to a relevant outcome you or your company helps achieve.
   - **Soft ask** (1 sentence): Request to connect without pitching — keep it low pressure.

4. **Apply character constraints**:
   - LinkedIn connection requests: 300 characters max
   - LinkedIn InMail or follow-up note: 200–400 words max
   - Default to the 300-character connection request unless the user specifies InMail or a longer note

5. **Write 2–3 message variations**:
   - Variation A: Lead with the company/news hook
   - Variation B: Lead with a shared experience or role-based empathy
   - Variation C: Lead with a provocative question or insight relevant to their industry

6. **Self-check before outputting**:
   - Does it sound like a real person wrote it?
   - Does it avoid the words: "synergy," "I wanted to reach out," "pick your brain," "leverage," "circle back"?
   - Is there zero pitch in the connection request itself?
   - Is it under the character limit?

## Output Format

Produce the following structure:

---

**Prospect:** [Name or Title] at [Company]
**Sender context:** [Brief restatement of sender's role/offer]
**Pain point angle:** [One phrase — the inferred challenge being targeted]

---

**Variation A — Company/News Hook**
> [Message text]
*[Character count: X/300]*

**Variation B — Role Empathy Hook**
> [Message text]
*[Character count: X/300]*

**Variation C — Insight/Question Hook**
> [Message text]
*[Character count: X/300]*

---

**Usage tip:** [One sentence on which variation to use and why, based on how much you know about the prospect.]

---

If the user asks for an InMail or longer follow-up message instead, produce a single message with clearly labeled sections: Subject Line, Opening, Body (2 short paragraphs), and CTA. Keep total length under 350 words.
