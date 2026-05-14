---
name: quote-expiry-follow-up-sequence
description: >
  Designs a timed follow-up message sequence that re-engages prospects before and after a sales quote expires to recover stalled deals. Use when someone says their quote is about to expire, asks how to follow up on a sent proposal, wants to recover a deal that went quiet, needs to re-engage a prospect who hasn't responded, or is trying to prevent a quote from lapsing without a decision.
category: sales
tags: [follow-up, quotes, proposals, deal-recovery, sequences]
author: community
---

# Quote Expiry Follow-Up Sequence

This skill builds a structured, timed message sequence that nudges prospects to act before a quote expires and re-engages them afterward to recover deals that have stalled.

## Sequence Design Workflow

**Step 1: Gather context before writing**
Ask the user for (or infer from context):
- Quote expiry date or days remaining
- Deal size and product/service type
- Last interaction with the prospect (call, email, demo)
- Known objections or hesitation signals
- Preferred outreach channel (email, phone, LinkedIn)

**Step 2: Build the pre-expiry sequence (3 touchpoints)**

- **T-7 days — Soft reminder:** Friendly check-in referencing the quote. Restate one core value proposition tied to their specific pain point. No pressure. Include a soft CTA (a question, not a demand).
- **T-3 days — Value reinforcement:** Surface a relevant case study, ROI stat, or testimonial. Acknowledge their busy schedule. Offer to adjust terms, scope, or timing if that's blocking a decision. CTA: schedule a 15-minute call.
- **T-1 day — Urgency nudge:** Clear, direct message. State the expiry date explicitly. Offer one last easy action (quick reply, fast call). Mention what happens after expiry (price change, availability, re-quoting delay) without threats.

**Step 3: Build the post-expiry sequence (2 touchpoints)**

- **T+2 days — No-fault re-engagement:** Acknowledge the quote lapsed. Remove pressure entirely. Ask if circumstances changed or if the project is on hold. Leave the door open without chasing.
- **T+14 days — Long-game follow-up:** Brief, low-effort touch. Reference any relevant market changes, new features, or seasonal angles. Ask one simple question to revive dialogue.

**Step 4: Tone calibration**
- Match formality to the deal context (enterprise = professional, SMB = conversational)
- Each message must be independently readable — no "as mentioned in my last email" dependencies
- Keep messages under 150 words each; respect prospect's attention

**Step 5: Flag customization points**
Mark every message with `[PERSONALIZE]` tags at spots where the user must insert specific details (names, dates, product references, objection callbacks).

## Output Format

Produce a numbered sequence document with:

1. **Sequence overview table** — columns: Touchpoint, Timing, Channel, Goal, CTA
2. **Full message drafts** for all 5 touchpoints, each including:
   - Subject line (for email) or opening line (for phone/LinkedIn)
   - Message body (under 150 words)
   - `[PERSONALIZE]` markers at customization spots
   - Recommended send time (day of week, time of day)
3. **Objection handling note** at the end — 3 likely stall reasons and a one-line response to each

Format as clean markdown with H3 headers per touchpoint. No nested bullet soup. Drafts should be copy-paste ready with minimal editing.
