---
name: trial-expiry-outreach-sequence-builder
description: >
  Designs a timed, multi-touch outreach sequence for prospects whose free trials are nearing expiration. Use when someone says "my trial users are dropping off," asks about converting trial users to paid, or wants to build a sequence for expiring trials. Also activates when someone needs to reduce trial churn or wants to re-engage prospects before their trial ends.
category: sales
tags: [trial-conversion, outreach-sequences, email-automation, churn-prevention, sales-cadence]
author: community
---

# Trial Expiry Outreach Sequence Builder

This skill builds a structured, day-by-day multi-touch outreach sequence targeting prospects before and after their free trial expires, including email copy, timing logic, and channel recommendations.

## Sequence Building Workflow

### 1. Gather Context First
Ask for (or infer from context):
- Trial length (e.g., 7, 14, or 30 days)
- Product category and primary value proposition
- Key features the prospect likely used (or should have used)
- Conversion offer available (discount, extended trial, dedicated onboarding)
- Preferred outreach channels (email, in-app, SMS, phone, LinkedIn)

### 2. Map the Sequence Timeline
Build touchpoints anchored to these critical windows:

| Day Relative to Expiry | Purpose |
|---|---|
| T-7 days | Value reinforcement — remind them what they've unlocked |
| T-3 days | Urgency introduction — surface what they'll lose |
| T-1 day | Final warning + conversion offer |
| T+0 (expiry day) | Transition message — account status + reactivation path |
| T+3 days | Re-engagement — address objections, offer help |
| T+7 days | Last-chance offer or breakup message |

Adjust anchor days proportionally for shorter trials (e.g., 7-day trial compresses to T-3, T-1, T+0, T+2, T+5).

### 3. Write Each Touchpoint
For every step, produce:
- **Channel**: Email / In-app notification / Sales rep call / LinkedIn DM
- **Subject line or opener**: Specific, non-generic, references their trial context
- **Body copy**: 3–6 sentences max per email. Lead with their potential loss or gain, not your product features.
- **CTA**: One clear action (upgrade link, calendar link, reply prompt)
- **Sender**: Marketing automation vs. direct from a named rep (use rep for T-1 onward)

### 4. Apply These Copywriting Rules
- Reference the specific value they experienced: "You've [done X] during your trial" not "We hope you enjoyed the trial"
- Use scarcity honestly — only mention deadlines that are real
- Escalate personalization as expiry approaches (automated early, rep-sent late)
- Objection-handle in T+3: address price, timing, and "not the right fit" explicitly
- The T+7 breakup message must give a clear reactivation path even while closing the loop

### 5. Add Sequence Logic Rules
- Suppress all further touchpoints immediately upon conversion
- If prospect opens T-1 email but does not convert, trigger a same-day rep alert
- Include a one-click opt-out from sequence (not from product) in every email
- Tag non-openers at T+3 for a separate win-back campaign 90 days later

## Output Format

Produce the sequence as a numbered list of touchpoints. Each touchpoint must include:

```
**Touchpoint [N] — [Day Label] (e.g., T-3 Days)**
- Channel: [Email / In-app / Call / LinkedIn]
- Sender: [Automated / Named Rep]
- Subject / Opener: [Exact subject line or opening sentence]
- Body Copy:
  [Full message copy, ready to use or lightly customize]
- CTA: [Exact button text or ask]
- Suppression trigger: [What event stops this touchpoint from sending]
```

After all touchpoints, provide:
- **Sequence Summary Table**: touchpoint number, day, channel, goal (one line each)
- **A/B Test Suggestions**: 2–3 specific subject line or CTA variants worth testing
-
