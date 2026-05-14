---
name: sales-deck-objection-preemption-inserter
description: >
  Analyzes a sales presentation deck and strategically inserts objection-handling slides or talking points at the moments where buyer resistance is most likely to surface. Use when someone says "my deck isn't converting well," asks "where should I address pricing concerns," or wants to "make my pitch more bulletproof." Also triggers when someone shares a sales deck and asks why prospects keep dropping off or stalling.
category: sales
tags: [sales, presentations, objection-handling, deck-review, pitch]
author: community
---

# Sales Deck Objection Preemption Inserter

This skill reviews a sales presentation deck slide by slide, identifies the high-resistance moments in the buyer journey, and inserts specific preemptive objection-handling content before those objections can derail the conversation.

## Objection Preemption Workflow

1. **Map the deck structure** — Identify each slide's purpose: problem, solution, proof, pricing, timeline, CTA, etc. Label each with its buyer-journey stage (Awareness → Consideration → Decision).

2. **Flag high-resistance zones** — Mark slides that typically trigger buyer pushback:
   - Slide after problem framing ("Is this really our problem?")
   - First mention of your solution ("Why not a competitor?")
   - Case studies or social proof ("That company isn't like us")
   - Pricing or investment slide ("Too expensive / wrong budget cycle")
   - Implementation or timeline slide ("Too complex / bad timing")
   - Next steps or CTA slide ("We need to think about it")

3. **Diagnose the current deck** — Note which objections the deck currently handles, which it ignores, and which it accidentally amplifies with weak framing or missing context.

4. **Generate insertion points** — For each high-resistance zone, produce one of the following:
   - A **preemptive slide** (title + 3-5 bullet points) that neutralizes the objection before it's voiced
   - A **speaker talking point block** (2-4 sentences the presenter says before advancing) if a full slide would disrupt flow
   - A **slide rewrite recommendation** if the existing slide is itself generating resistance

5. **Prioritize by impact** — Rank insertions by how often that objection kills deals (pricing and timing objections first, niche concerns last).

6. **Write objection-handling copy in buyer language** — Use the prospect's frame of reference, not product features. Lead with empathy, follow with evidence, close with a reframe.

## Output Format

Produce a structured report in the following format:

---

**DECK OBJECTION AUDIT**

**Deck Summary:** [1-2 sentences on the deck's current structure and conversion risk]

**High-Resistance Zones Identified:** [numbered list of slide positions and the objection each triggers]

---

For each insertion point:

**[Slide Number / Position]: [Objection Being Preempted]**
- **Risk Level:** High / Medium / Low
- **Recommended Action:** Insert new slide / Add talking point / Rewrite existing slide
- **Content:**
  - *Slide Title (if new slide):* [title]
  - *Bullet Points or Talking Script:* [3-5 bullets or 2-4 sentence script]
  - *Why This Works:* [1 sentence rationale]

---

**Priority Insertion Order:** [ranked list of the top 3 insertions to implement first]

Total output length scales with deck size: short decks (under 10 slides) get 3-5 insertions; full enterprise decks (15+ slides) get 6-10 insertions.
