---
name: solo-operator-inbound-lead-response-script-builder
description: >
  Generates tailored first-response scripts for inbound leads based on where they came from, what service they're asking about, and the buying signals they've shown. Use when someone says "I just got a new inquiry and don't know how to respond," asks about "what to say to a potential client," wants to "turn a lead into a call," needs help "responding to someone who reached out," or is trying to "follow up on an inbound message fast."
category: solopreneur
tags: [lead-response, sales-scripts, client-acquisition, solopreneur, conversion]
author: community
---

# Solo Operator Inbound Lead Response Script Builder

This skill generates a ready-to-send, personalized first-response script for an inbound inquiry that moves the conversation toward a booked call or next step.

## Script Building Workflow

**Step 1 — Extract lead context**
Ask the user for (or pull from what they've shared):
- Lead source (e.g., referral, Instagram DM, website contact form, cold email reply, LinkedIn, directory listing)
- Service type they're asking about (e.g., coaching, design, copywriting, consulting, done-for-you service)
- The exact message or summary of what the lead said
- Any observable buying signals (e.g., timeline urgency, budget mentioned, specific pain stated, competitor mentioned)
- The solo operator's preferred tone (warm/professional/casual/direct)

**Step 2 — Identify signal tier**
Classify the lead's readiness:
- **Hot**: Mentions timeline, budget, or specific outcome they need now
- **Warm**: Asks about process, pricing range, or availability — curious but not urgent
- **Cool**: Vague interest, just browsing, no clear pain or timeline stated

**Step 3 — Build the response script using these rules**
- Open with a direct acknowledgment of what they said — no generic "Thanks for reaching out"
- Name the specific pain or goal they mentioned (or infer it from the service + source context)
- Establish credibility in one sentence tied to their situation — not a full bio
- For Hot leads: propose a specific call time or send a booking link immediately
- For Warm leads: ask one qualifying question before proposing a call
- For Cool leads: offer a low-friction next step (free resource, quick question, or soft invite to a call)
- Close with a clear single call-to-action — never two options
- Keep total length under 150 words for DM/email responses; under 80 words for SMS or WhatsApp

**Step 4 — Add a follow-up fallback**
Generate a short follow-up message (under 50 words) to send if they don't respond within 48 hours. This should feel like a natural check-in, not a chase.

**Step 5 — Flag any gaps**
If critical context is missing (e.g., no lead message provided, service type unclear), ask for it before generating — do not guess and produce a generic script.

## Output Format

Produce the following sections in order:

**Lead Summary**
- Source:
- Service:
- Signal Tier: [Hot / Warm / Cool]
- Key buying signal detected: [one sentence]

**First Response Script**
[Ready-to-send message in the operator's preferred tone, under 150 words, formatted for copy-paste]

**Follow-Up Script (send at 48 hrs if no reply)**
[Under 50 words, casual tone, single CTA]

**Why This Script Works**
[3 bullet points explaining the strategic choices made — lead source framing, signal tier match, CTA logic]
