---
name: productized-service-faq-builder
description: >
  Generates a comprehensive FAQ document for a productized service offer by anticipating buyer objections, scope questions, and delivery concerns before they reach your inbox. Use when someone says "I need an FAQ for my service," asks about "what questions clients keep asking me," or wants to "reduce pre-sale back-and-forth," "handle objections before the sales call," or "document what's included in my offer."
category: solopreneur
tags: [productized-service, faq, sales-enablement, client-communication, offer-clarity]
author: community
---

# Productized Service FAQ Builder

This skill generates a structured, buyer-facing FAQ document for a productized service by systematically surfacing objections, scope boundaries, delivery details, and trust signals so prospects self-qualify before contacting you.

## Workflow

### Step 1: Extract Service Details
Ask the user to provide (or infer from context):
- Service name and one-line description
- Price point or pricing model (fixed, retainer, tiered)
- Deliverables and what is explicitly NOT included
- Turnaround time and delivery method
- Target client (who it's for and who it's NOT for)
- Any revision, refund, or guarantee policy

If any of these are missing, ask for them directly before proceeding. Do not generate a generic FAQ without specifics.

### Step 2: Build Questions Across Six Categories
Generate 3–5 questions per category, written from the buyer's perspective:

1. **What's Included / Scope**
   - What exactly do I get?
   - What's NOT included?
   - Can I customize or add on?

2. **Pricing & Payment**
   - Why does it cost this much?
   - Do you offer payment plans?
   - What happens if I need more than what's included?

3. **Process & Delivery**
   - How does it work, step by step?
   - What do you need from me to get started?
   - How is the work delivered?

4. **Timeline & Availability**
   - How long does it take?
   - How many clients do you take at once?
   - What if I have a deadline?

5. **Results & Fit**
   - Is this right for me?
   - What results can I expect?
   - Who is this NOT a good fit for?

6. **Trust & Risk**
   - What if I'm not happy with the work?
   - Do you offer refunds?
   - Can I see examples or talk to past clients?

### Step 3: Write Answers in the Seller's Voice
- Use plain, direct language — no corporate hedging
- Answers should be 2–5 sentences each
- Where scope is a boundary, state it clearly and without apology
- Where results are involved, be honest about what influences outcomes
- Inject personality if the user shares their tone/brand voice

### Step 4: Flag Gaps
After the FAQ, note any questions you couldn't answer due to missing information and prompt the user to fill them in.

## Output Format

Produce a clean, copy-paste-ready FAQ document structured as follows:

```
# FAQ: [Service Name]

## What's Included

**Q: [Question]**
A: [Answer]

...

## Pricing & Payment

**Q: [Question]**
A: [Answer]

...

[Repeat for all six categories]

---
💡 Gaps to Fill In:
- [List any unanswered questions due to missing details]
```

- Total length: 600–1,200 words depending on service complexity
- Format: Markdown with bold questions and plain-text answers
- No preamble or sign-off — the document starts with the first category heading
- Deliver as a single block ready to paste into Notion, a website, or a PDF
