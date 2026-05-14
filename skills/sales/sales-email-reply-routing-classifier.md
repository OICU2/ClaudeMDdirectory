---
name: sales-email-reply-routing-classifier
description: >
  Classifies inbound sales email replies by intent so reps can prioritize and route responses efficiently. Use when someone says "I need to sort through my reply emails," asks "what should I do with these responses," or wants to "categorize leads from email replies." Also triggers when a rep pastes email content asking "how should I handle this" or "where does this go." Supports high-volume outbound teams managing dozens of daily replies.
category: sales
tags: [email, classification, routing, lead-management, outbound]
author: community
---

# Sales Email Reply Routing Classifier

This skill analyzes inbound sales email replies and assigns each one a routing label, priority level, and recommended next action so reps spend zero time deciding what to do with their inbox.

## Classification Workflow

**Step 1: Read the full reply content**
Identify the sender's primary intent based on explicit language, tone, and any action signals present.

**Step 2: Assign one primary intent label**

- **INTERESTED** — Signals buying intent or curiosity. Look for: "tell me more," "can we set up a call," "what's the pricing," "send over details," "I'd like to learn more," "when are you available," or any question about the product/service.
- **SOFT_INTERESTED** — Lukewarm or conditional engagement. Look for: "not right now but maybe later," "follow up in Q3," "we're evaluating options," "send me some info to review," or "I'll pass this along."
- **OBJECTING** — Active pushback without a hard no. Look for: "we already use X," "too expensive," "bad timing," "not the right fit," "we tried this before," or "convince me why."
- **NOT_INTERESTED** — Clear rejection. Look for: "no thanks," "please stop reaching out," "not relevant," "we're good," or any firm declination without an opening.
- **UNSUBSCRIBING** — Explicit opt-out request. Look for: "remove me from your list," "unsubscribe," "stop emailing me," "take me off," or any legal/compliance language about contact preferences.
- **FORWARDED_REFERRAL** — Reply indicates the email was forwarded to a colleague or decision-maker. Look for: "I'm forwarding this to," "you should talk to [name]," "CC'd the right person," or a new sender name in the reply chain.
- **OUT_OF_OFFICE** — Automated or manual OOO message. Look for: "I'm out of the office," "I'll return on," "for urgent matters contact," or any vacation/absence language.
- **UNCLEAR** — Intent cannot be determined confidently. Flag for human review.

**Step 3: Assign priority**

- **P1 (Act within 2 hours):** INTERESTED, FORWARDED_REFERRAL
- **P2 (Act within 24 hours):** SOFT_INTERESTED, OBJECTING
- **P3 (Act within 48 hours):** NOT_INTERESTED
- **P4 (Immediate compliance action):** UNSUBSCRIBING
- **P5 (No action needed):** OUT_OF_OFFICE
- **P-Review:** UNCLEAR

**Step 4: Generate recommended next action**
Based on the label, specify exactly what the rep should do (see Output Format).

**Step 5: Flag edge cases**
If a reply contains multiple intents (e.g., objecting but asking a price question), note both and label with the higher-priority intent.

## Output Format

For each email reply, produce a structured classification block:

```
REPLY FROM: [Sender name or email if provided]
INTENT: [LABEL]
PRIORITY: [P1–P5 or P-Review]
CONFIDENCE: [High / Medium / Low]
KEY SIGNAL: "[Direct quote or phrase that drove the classification]"
NEXT ACTION: [One specific, actionable instruction for the rep]
NOTES: [Any edge cases, secondary intents, or compliance flags — omit if none]
```

**Next Action examples by label:**
- INTERESTED → "Reply within 2 hours to book a discovery call. Suggest 2–3 specific time slots."
- SOFT_INTERESTED → "Send a brief value-reinforcing follow-up and set a task to
