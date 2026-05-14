---
name: outbound-sequence-reply-intent-classifier
description: >
  Classifies inbound replies to outbound sales sequences into one of four intent categories: interested, not now, wrong person, or unsubscribe. Use when a rep pastes in a prospect reply and asks "what does this mean," wants to know how to respond to an email reply, or needs to triage a batch of sequence responses. Also triggers when someone says "they replied to my sequence" or "can you categorize these replies."
category: sales
tags: [email, sequences, intent-classification, reply-handling, outbound]
author: community
---

# Outbound Sequence Reply Intent Classifier

This skill analyzes raw prospect replies to outbound sales sequences and classifies each by intent so reps know exactly how to prioritize and act on every response.

## Classification Workflow

1. **Read the full reply** — parse tone, explicit statements, and implicit signals before assigning a label.

2. **Assign one of four intent labels:**

   - **INTERESTED** — Prospect expresses curiosity, asks a question, requests a demo/call, or gives a positive signal. Examples: "Tell me more," "Can we set up a time?", "We're actually evaluating vendors right now."

   - **NOT NOW** — Prospect acknowledges interest but indicates bad timing. Examples: "Reach back out in Q3," "We're heads-down on a project," "Budget is frozen until next year."

   - **WRONG PERSON** — Prospect indicates they are not the decision-maker or relevant contact. Examples: "You should talk to my colleague Sarah," "I don't handle this," "Try our IT department."

   - **UNSUBSCRIBE** — Prospect explicitly asks to be removed, expresses annoyance, or uses opt-out language. Examples: "Please stop emailing me," "Take me off your list," "Not interested, don't reach out again."

3. **Identify the confidence level:**
   - **High** — Reply clearly maps to one label with no ambiguity.
   - **Medium** — Reply has mixed signals or soft language requiring interpretation.
   - **Low** — Reply is vague, one word, or could fit multiple categories.

4. **Extract key action signals** — pull out any names, dates, departments, or instructions the prospect mentioned that affect next steps.

5. **Recommend the next action** based on the label:
   - INTERESTED → Book a call, respond within 24 hours, flag as hot lead.
   - NOT NOW → Set a follow-up task for the date mentioned, move to nurture sequence.
   - WRONG PERSON → Research the named contact, re-route outreach, update CRM.
   - UNSUBSCRIBE → Remove from sequence immediately, mark as opted out in CRM, do not re-engage.

6. **Handle batch inputs** — if multiple replies are pasted, classify each one separately in order.

## Output Format

Produce a structured block for each reply:

```
Reply #[N]
─────────────────────────────
Intent Label:   [INTERESTED / NOT NOW / WRONG PERSON / UNSUBSCRIBE]
Confidence:     [High / Medium / Low]
Reasoning:      [1–2 sentences explaining why this label was chosen]
Key Signals:    [Bullet list of names, dates, departments, or instructions extracted from the reply]
Recommended Action: [1 clear sentence describing what the rep should do next]
```

For batch inputs, separate each reply block with a divider line. End with a one-line summary tally if processing three or more replies, e.g.: `Summary: 2 Interested · 1 Not Now · 0 Wrong Person · 1 Unsubscribe`
