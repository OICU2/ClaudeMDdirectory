---
name: sales-email-sequence-builder
description: >
  Designs multi-step outbound email sequences with personalized timing, messaging variation, and follow-up triggers for specific prospect segments. Use when someone says "build me an email sequence," asks about outbound prospecting campaigns, wants to create a cold email drip series, needs follow-up email templates for sales, or is trying to nurture leads through email automation.
category: sales
tags: [email-sequences, outbound-sales, lead-nurturing, cold-outreach, sales-automation]
author: community
---

# Sales Email Sequence Builder

This skill builds complete multi-step outbound email sequences with subject lines, body copy, send timing, and behavioral triggers tailored to a specific prospect segment and sales goal.

## Sequence Design Workflow

1. **Gather inputs before building** — If not provided, ask for: target prospect segment (role, industry, company size), core pain point or trigger event, desired outcome (demo booked, reply received, call scheduled), and sequence length preference (default: 5–7 steps over 3 weeks).

2. **Define the sequence arc** — Structure each sequence with three phases:
   - **Hook phase** (Steps 1–2): Relevance-first cold outreach. Lead with a specific insight, mutual connection, trigger event (funding, hiring surge, new role), or pain hypothesis. No generic intros.
   - **Value phase** (Steps 3–5): Deliver proof, social proof, or a reframe. Include one case study mention, one question-based email, and one "different angle" email that changes the subject line and framing entirely.
   - **Breakup phase** (Steps 6–7): Low-pressure close. One "still relevant?" email and one explicit breakup email that creates urgency without desperation.

3. **Set timing and cadence** — Assign specific send delays between steps:
   - Step 1: Day 0 (initial send)
   - Step 2: Day 2–3 (quick follow-up)
   - Step 3: Day 5–7 (value drop)
   - Step 4: Day 10–12 (angle shift)
   - Step 5: Day 14–16 (social proof or case study)
   - Step 6: Day 19–21 (check-in)
   - Step 7: Day 24–28 (breakup)

4. **Write each email with these rules:**
   - Subject lines: Under 8 words, no ALL CAPS, no spam triggers ("free," "guaranteed," "urgent"). Use curiosity, specificity, or name-drop a relevant company/topic.
   - Opening line: Never start with "I" or "My name is." Open with something about them — a trigger event, an observation, or a bold question.
   - Body length: Steps 1–2 under 75 words. Steps 3–5 under 120 words. Steps 6–7 under 60 words.
   - One CTA per email. Make it low-friction (e.g., "Worth a 15-minute call this week?" not "Schedule a full demo with our team").
   - Personalization tokens: Mark with `{{}}` (e.g., `{{first_name}}`, `{{company}}`, `{{trigger_event}}`).

5. **Add behavioral trigger variants** — For each sequence, note at least two conditional branches:
   - **If reply received**: Stop sequence, flag for human follow-up with a suggested reply framework.
   - **If email opened 3+ times but no reply**: Trigger a "warm but silent" variant — softer, more direct ask.
   - **If link clicked but no reply**: Trigger a content-specific follow-up referencing what they viewed.

6. **Segment-specific tone calibration:**
   - C-suite / VP: Brevity, business impact, peer framing ("other CTOs we work with...")
   - Mid-level managers: Tactical pain points, workflow specifics, team outcomes
   - SMB owners: Direct ROI, time savings, simplicity
   - Technical buyers: Specifics over generalities, avoid buzzwords, show you understand their stack

## Output Format

Produce the sequence as a structured document with the following for each step:

```
STEP [#] — Day [X]
Subject Line: [subject]
Preview Text: [1 sentence, under 100 characters]
Body
