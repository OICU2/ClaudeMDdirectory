---
name: customer-objection-to-email-nurture-converter
description: >
  Transforms a list of common customer objections into a structured email nurture sequence that directly addresses each concern at the appropriate buyer journey stage. Use when someone says "we keep losing deals because of these objections," asks about turning objections into email content, or wants to build a sequence that handles prospect concerns before a sales call. Also triggers when someone shares a list of sales objections and wants to convert them into automated follow-up emails or nurture campaigns.
category: marketing
tags: [email-marketing, sales-enablement, lead-nurturing, objection-handling, conversion]
author: community
---

# Customer Objection to Email Nurture Converter

This skill takes a list of customer objections and converts them into a mapped email nurture sequence, assigning each objection to the correct buyer journey stage and generating subject lines, email goals, and content angles for each message.

## Workflow

1. **Collect and categorize objections** — Take the raw list of objections provided. Sort each into one of three buyer journey stages:
   - **Awareness** (objections about credibility, relevance, or whether the problem is worth solving — e.g., "I've never heard of you," "This isn't a priority right now")
   - **Consideration** (objections about fit, alternatives, or complexity — e.g., "We already use a competitor," "This seems complicated to implement")
   - **Decision** (objections about risk, cost, or commitment — e.g., "It's too expensive," "We need to see ROI first," "I need to get buy-in from my team")

2. **Map objections to email positions** — Assign each objection to a specific email number in the sequence. Awareness objections go in emails 1–3, Consideration in emails 4–6, Decision in emails 7–10. If fewer than 10 objections are provided, compress the sequence proportionally.

3. **For each email, define the following:**
   - **Objection being addressed** (quoted directly from the input)
   - **Journey stage** (Awareness / Consideration / Decision)
   - **Email goal** (one sentence — what belief or action should shift after reading)
   - **Subject line** (two options: one curiosity-based, one benefit-based)
   - **Content angle** (2–3 sentences describing the story, proof type, or argument to use — e.g., customer story, data point, reframe, comparison, risk reversal)
   - **CTA** (specific next step aligned to the stage — e.g., "Read this case study," "Book a 15-min call," "See our pricing breakdown")

4. **Flag objection gaps** — After the sequence, note any common objection categories that were NOT covered in the input (e.g., no trust-building emails, no competitive differentiation email) and suggest adding them.

5. **Sequence logic rules:**
   - Never place a Decision-stage email before a Consideration-stage email
   - Emails 1–3 should never ask for a meeting or purchase — goal is belief-building only
   - Each email must address exactly one objection — no combining
   - CTAs must escalate in commitment level across the sequence

## Output Format

Produce a structured sequence document with the following layout:

---

**OBJECTION → EMAIL NURTURE SEQUENCE**
**Total emails:** [N]
**Input objections:** [list them back, numbered]

---

**EMAIL [N]: [Objection Being Addressed]**
- **Stage:** [Awareness / Consideration / Decision]
- **Goal:** [One sentence]
- **Subject Line A (Curiosity):** [Subject line]
- **Subject Line B (Benefit):** [Subject line]
- **Content Angle:** [2–3 sentences]
- **CTA:** [Specific action]

---

[Repeat block for each email]

---

**GAPS & RECOMMENDATIONS:**
- [List missing objection categories]
- [Suggested additional emails with objection type and stage]

---

Length: One block per email, no filler prose between blocks. The entire output should be scannable and ready to hand off to a copywriter or load into an email platform.
