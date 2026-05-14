---
name: free-offer-to-paid-conversion-message-test
description: >
  Generates multiple message variants for converting free-tier or freebie users into paying customers, each mapped to a specific objection type or behavioral signal. Use when someone says "write upgrade messages for free users," asks about "converting freebie users to paid," or wants to "test messaging for free-to-paid conversion." Also triggers when someone needs to "overcome objections from free plan users" or wants to "create A/B test copy for upgrade campaigns."
category: marketing
tags: [conversion, messaging, free-to-paid, ab-testing, objection-handling]
author: community
---

# Free-Offer-to-Paid Conversion Message Test

This skill generates a structured set of conversion message variants targeting free-tier or freebie users, each engineered around a distinct objection type or behavioral signal, ready for A/B testing or segmented campaign deployment.

## Workflow

1. **Gather Context** — Ask the user for the following if not already provided:
   - Product name and what the free tier or freebie includes
   - Paid plan name, price, and top 2–3 differentiating features
   - Target audience (who are the free users — hobbyists, SMBs, solo founders, etc.)
   - Any known behavioral signals (e.g., hit usage limits, logged in 10+ times, invited a teammate, been free for 90+ days)
   - Preferred tone (friendly, urgent, professional, conversational)

2. **Identify Objection Categories** — Map messages to these 6 core objection/signal types:
   - **Price sensitivity** — "It costs too much for what I need right now"
   - **Value uncertainty** — "I'm not sure the paid plan is worth it for me"
   - **Inertia/habit** — "The free plan is good enough, I haven't thought about upgrading"
   - **Usage-limit friction** — User has hit a cap or wall in the free experience
   - **Social proof gap** — "I don't know if others like me have upgraded and benefited"
   - **Fear of commitment** — "I don't want to be locked in or regret paying"

3. **Write One Message Per Objection** — For each of the 6 types, write a short conversion message (email subject + body, or in-app message, depending on user's stated channel) that:
   - Opens with an empathy hook or behavioral trigger acknowledgment
   - Delivers one clear, specific value statement tied to that objection
   - Includes a single, low-friction CTA (e.g., "Start your 7-day trial," "See what's unlocked," "Upgrade for $X/mo")
   - Stays under 100 words for in-app or 150 words for email body

4. **Label Each Variant** — Tag every message with:
   - Variant ID (e.g., V1-Price, V2-Value, V3-Inertia)
   - Objection type targeted
   - Recommended trigger condition (when to show/send this message)
   - Suggested channel (email, in-app banner, push notification, tooltip)

5. **Add a Testing Recommendation** — After all variants, provide a 3-sentence A/B testing note covering: which 2 variants to pit against each other first, what metric to optimize for (click-through, trial start, paid conversion), and suggested minimum sample size or duration.

## Output Format

Produce the following structure, repeated for each of the 6 variants:

---

**Variant ID:** V[#]-[ObjectionShortName]
**Objection Type:** [Full objection label]
**Trigger Condition:** [Specific behavioral or time-based signal]
**Recommended Channel:** [Email / In-app / Push / Tooltip]

**Subject Line (if email):** [Subject line text]

**Message Body:**
[Full message text, under word limit, with CTA clearly marked in bold]

---

After all 6 variants:

**A/B Testing Recommendation:**
[3-sentence paragraph: which variants to test first, primary success metric, and sample/duration guidance]
