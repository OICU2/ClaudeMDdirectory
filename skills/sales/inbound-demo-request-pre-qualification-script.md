---
name: inbound-demo-request-pre-qualification-script
description: >
  Generates a structured pre-call qualification question sequence to send inbound demo requesters before a scheduled meeting. Use when someone needs to qualify inbound demo leads, wants to screen prospects before a sales call, or asks for questions to send to someone who booked a demo. Also activates when a user says "we have a demo scheduled" and wants to prepare, or needs to filter serious buyers from tire-kickers before investing sales time.
category: sales
tags: [sales, qualification, demo, inbound, pre-call]
author: community
---

# Inbound Demo Request Pre-Qualification Script

This skill creates a personalized pre-call qualification email with targeted questions to send inbound demo requesters, ensuring sales reps enter calls with the context needed to run a high-value conversation.

## Qualification Script Workflow

### Step 1: Gather Context
Before generating questions, ask the user for:
- **Product/service being demoed** (what does it do, who is it for)
- **Ideal customer profile (ICP)** (company size, industry, role, budget range if known)
- **Lead source** (website form, referral, ad, event, etc.)
- **Any info already collected** (name, company, role, use case if captured on intake form)
- **Demo length and format** (30 min discovery + demo? Pure demo? AE-led or SE-led?)

If the user cannot provide all details, proceed with reasonable assumptions and flag them.

### Step 2: Apply Qualification Framework
Structure questions around the **MEDDIC/BANT hybrid** pillars:
- **Need/Pain**: What problem are they trying to solve?
- **Authority**: Are they the decision-maker or an evaluator?
- **Budget**: Is there an allocated budget or active evaluation?
- **Timeline**: When do they need a solution in place?
- **Current State**: What are they using today? What's broken?
- **Success Criteria**: What does a win look like for them?

### Step 3: Question Selection Rules
- Write **5–8 questions maximum** — enough to qualify, not so many it feels like a form
- Make questions **open-ended** where possible to invite real answers
- Order questions from **lowest friction to highest** (start with context, end with budget/authority)
- Avoid yes/no questions unless checking eligibility (e.g., minimum seat count)
- Tailor language to the prospect's likely role (technical buyer vs. business buyer)
- Include **one forward-looking question** to build anticipation for the call

### Step 4: Email Wrapper
Wrap the questions in a short, conversational email that:
- Thanks them for booking
- Explains why you're asking (to make the demo relevant to their situation)
- Sets a friendly, non-interrogative tone
- Confirms the meeting details (placeholder tokens for date/time/link)
- Closes with a soft CTA ("just reply here or we can cover this live")

## Output Format

Produce the following in order:

---

**Subject Line:**
`[Ready for your [Company] demo] — a few quick questions`
*(Provide 2 subject line options)*

---

**Pre-Qualification Email:**

Short intro paragraph (2–3 sentences) → numbered question list (5–8 questions) → closing paragraph with meeting confirmation and soft opt-out for questions they'd rather answer live.

Total email length: **150–250 words** (excluding subject lines).

---

**Sales Rep Notes (internal, not sent):**
- What each question is designed to uncover
- Red flags in answers that indicate poor fit
- Green flags that indicate strong ICP match
- Suggested follow-up probes for the call based on common answer patterns

---

Format everything in clean markdown. Use bold for section headers. Provide placeholder tokens in `[brackets]` for personalization fields (name, company, product name, meeting link, date/time).
