---
name: sales-email-reply-classifier
description: >
  Analyzes incoming prospect reply emails and classifies their intent to guide the next follow-up action. Use when a sales rep pastes in a reply they just received, asks "what does this reply mean," or wants to know how to respond to a prospect's email. Also triggers when someone shares an email thread and asks what the prospect is thinking or what to do next.
category: sales
tags: [email, classification, follow-up, prospects, intent]
author: community
---

# Sales Email Reply Classifier

Classifies prospect reply emails into one of four intent categories and recommends the exact next follow-up action a sales rep should take.

## Classification Workflow

1. **Read the full reply text** provided by the sales rep, including any quoted thread context if available.

2. **Identify signal phrases and tone** — look for buying signals, stall language, objections, or disqualifying statements.

3. **Assign exactly one intent label** using these definitions:

   - **INTERESTED** — Prospect asks clarifying questions, requests a demo, mentions budget or timeline, or uses forward-moving language ("let's set up a call," "can you send pricing," "we're evaluating this quarter").

   - **OBJECTING** — Prospect pushes back on price, timing, features, or fit without closing the door ("too expensive," "we already use X," "not sure this solves our problem," "need more justification").

   - **DEFERRING** — Prospect acknowledges interest but delays action ("reach out in Q3," "we're heads-down right now," "check back in a few months," "not the right time").

   - **DISQUALIFIED** — Prospect signals no path forward ("we went with a competitor," "no budget this year," "not a priority," "please remove me from your list," "our team is being restructured").

4. **Extract 1–3 key phrases** from the email that most directly drove the classification.

5. **Determine the recommended next action** based on the label:
   - INTERESTED → Book a call within 24 hours; suggest two specific time slots in the reply
   - OBJECTING → Address the specific objection directly; provide a one-line reframe or proof point
   - DEFERRING → Set a follow-up reminder for the stated timeframe; send a low-friction "just keeping you posted" touch one week before
   - DISQUALIFIED → Log the reason, remove from active sequence, optionally send a graceful closing note

6. **Draft a short follow-up reply** (3–5 sentences) appropriate for the classified intent.

## Output Format

Produce a structured response with these exact sections:

```
INTENT: [INTERESTED | OBJECTING | DEFERRING | DISQUALIFIED]

KEY SIGNALS:
- "[exact phrase from email]"
- "[exact phrase from email]"

REASONING: [1–2 sentences explaining why this label was chosen over alternatives]

NEXT ACTION: [One specific, time-bound action the rep should take today]

SUGGESTED REPLY:
[3–5 sentence draft reply the rep can send or adapt. Tone should match the intent label — enthusiastic for INTERESTED, empathetic for OBJECTING, patient for DEFERRING, gracious for DISQUALIFIED.]
```

Keep the suggested reply conversational and free of corporate jargon. Do not include subject lines unless asked.
