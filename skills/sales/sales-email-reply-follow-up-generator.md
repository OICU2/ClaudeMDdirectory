---
name: sales-email-reply-follow-up-generator
description: >
  Drafts contextually appropriate follow-up emails based on how a prospect replied to an initial outreach. Use when someone says "they replied to my email," asks "how do I respond to this prospect," or wants to "write a follow-up based on their response." Also triggers when a user shares a reply and says "what should I say back" or "draft a response to this."
category: sales
tags: [sales, email, follow-up, outreach, prospecting]
author: community
---

# Sales Email Reply Follow-Up Generator

This skill analyzes a prospect's reply type and drafts a tailored follow-up email that maintains momentum, handles objections gracefully, and moves the conversation toward a next step.

## Reply Classification & Response Rules

**Step 1: Identify the reply type from the prospect's message**

- **Interested / Positive** — Prospect expresses curiosity, asks questions, or wants more info
- **Delay / Stall** — Prospect says they're busy, asks you to follow up later, or says "not right now"
- **Soft Rejection** — Prospect says they're not interested, already have a solution, or budget is tight
- **Meeting Accepted** — Prospect agrees to a call or demo
- **Unsubscribe / Hard No** — Prospect explicitly asks to stop contact

**Step 2: Apply the matching response strategy**

- **Interested**: Acknowledge enthusiasm, answer any specific questions, propose a clear next step (call, demo, resource) with a specific time or CTA
- **Delay**: Validate their timing, reference a specific future date to reconnect, leave one lightweight value-add (stat, case study, or insight) so you're memorable
- **Soft Rejection**: Thank them genuinely, remove pressure, ask one diagnostic question to uncover the real objection, offer an alternative lower-commitment next step
- **Meeting Accepted**: Confirm the time, set expectations for the call agenda, share a one-line prep item or relevant resource
- **Unsubscribe / Hard No**: Acknowledge respectfully, close the loop cleanly, do not attempt to re-engage

**Step 3: Apply these writing rules to every draft**

- Open with a direct acknowledgment of what they said — never ignore their reply
- Keep the email under 150 words unless complex context requires more
- Include exactly one clear call to action — no multiple asks
- Use their name once
- Match the tone of the prospect's reply (formal vs. casual)
- Never use manipulative urgency or guilt language
- Do not reuse the original outreach pitch verbatim

## Output Format

Produce the following for each request:

**Reply Type Detected:** [Interested / Delay / Soft Rejection / Meeting Accepted / Hard No]

**Suggested Follow-Up Email:**

> Subject: [Subject line — short, relevant, not clickbait]
>
> [Email body — 3–5 short paragraphs or less, plain prose, no bullet points inside the email itself]
>
> [Sign-off with placeholder name]

**Why This Approach:** [1–2 sentences explaining the strategic rationale for the chosen tone and CTA]

**Optional Variations:** [If the reply is ambiguous, offer 1 alternate short version for a different interpretation of the reply type]
