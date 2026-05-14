---
name: churn-reason-message-testing
description: >
  Designs and sequences message variants targeting churned customers based on their specific cancellation reason to test re-engagement offers. Use when someone wants to win back lost customers, asks about re-engagement campaigns for churned users, or needs to test messaging for different cancellation reasons. Also activates when someone says they want to reduce churn recovery costs or improve win-back conversion rates.
category: marketing
tags: [churn, win-back, a-b-testing, retention, messaging]
author: community
---

# Churn Reason Message Testing

This skill builds structured message test sequences tailored to why customers cancelled, so Claude can help design targeted re-engagement campaigns with testable variants for each churn segment.

## Workflow

### 1. Identify Churn Reason Segments
Ask the user to confirm which cancellation reasons they have data on. Common segments to cover:
- Price / too expensive
- Missing feature or functionality
- Switched to competitor
- No longer needs the product
- Poor customer experience or support
- Too complex / not enough onboarding

If the user lacks segmented data, default to the top 3 most universal reasons above.

### 2. Map Each Reason to a Re-Engagement Angle
For each churn reason, assign a primary message angle:
- **Price** → discount, flexible plan, or ROI proof
- **Missing feature** → feature release announcement or roadmap transparency
- **Competitor switch** → differentiation, comparison, or switching cost reduction
- **No longer needs it** → use-case reframing or seasonal relevance
- **Bad experience** → direct acknowledgment, apology, and proof of change
- **Too complex** → free onboarding session, simplified tier, or quick-win tutorial

### 3. Write 2–3 Message Variants Per Segment
For each segment, produce variants that differ by:
- **Tone** (empathetic vs. direct vs. value-focused)
- **Offer** (discount vs. free trial extension vs. feature access vs. no offer)
- **CTA** (reactivate now vs. book a call vs. view what's new)

Each message must include:
- Subject line (email) or opening line (SMS/in-app)
- Body copy (50–120 words)
- A single clear CTA

### 4. Sequence the Messages
Build a 3-touch sequence per segment:
- **Touch 1 (Day 1–3):** Acknowledge the cancellation reason directly, lead with empathy or the most relevant offer
- **Touch 2 (Day 7–10):** Introduce social proof, new feature, or escalate the offer
- **Touch 3 (Day 21–30):** Final outreach — last chance offer or a simple "we miss you" close

### 5. Define Test Structure
For each segment, specify:
- **Primary variable being tested** (offer type, tone, or CTA)
- **Success metric** (reactivation rate, click-through, reply rate)
- **Minimum sample size recommendation** (flag if segment is too small to reach significance)
- **Test duration** (recommend 2–4 weeks per wave)

## Output Format

Produce a structured document with the following sections per churn segment:

```
## Segment: [Churn Reason]
Re-engagement angle: [one line]

### Variant A
- Subject/Opening: [text]
- Body: [50–120 words]
- CTA: [text]
- Tone: [label]

### Variant B
- Subject/Opening: [text]
- Body: [50–120 words]
- CTA: [text]
- Tone: [label]

### Variant C (optional)
...

### Sequence
- Touch 1 (Day X): Variant [X] — [rationale]
- Touch 2 (Day X): Variant [X] — [rationale]
- Touch 3 (Day X): Variant [X] — [rationale]

### Test Plan
- Variable: [what is being tested]
- Metric: [how success is measured]
- Duration: [recommended timeframe]
```

Deliver one full segment block before asking if the user wants to continue to the next segment, or generate all segments at once if the user specifies fewer than four reasons.
