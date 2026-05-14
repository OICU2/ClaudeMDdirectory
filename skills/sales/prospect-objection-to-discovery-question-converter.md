---
name: prospect-objection-to-discovery-question-converter
description: >
  Transforms a stated prospect objection into targeted discovery questions that uncover the real concern beneath the surface resistance. Use when someone says "a prospect told me X objection," asks "how do I respond to this pushback," or wants to "turn an objection into a conversation." Also activates when someone shares a rejection like "they said it's not the right time" or "they told me the price is too high."
category: sales
tags: [sales, objection-handling, discovery, prospect-conversations, pipeline]
author: community
---

# Prospect Objection to Discovery Question Converter

This skill takes a raw prospect objection and generates a set of diagnostic discovery questions designed to uncover the underlying concern, re-engage the prospect, and move the conversation forward.

## Conversion Workflow

1. **Identify the objection category** — Classify the stated objection into one of these types:
   - Budget / Price ("too expensive," "no budget")
   - Timing ("not right now," "maybe next quarter")
   - Authority ("need to check with someone else")
   - Need ("we already have a solution," "not a priority")
   - Trust ("we don't know you," "we've heard mixed things")
   - Vague deflection ("send me more info," "let me think about it")

2. **Extract the surface statement vs. the likely hidden concern** — Write one sentence naming what the prospect said and one sentence naming what they likely *mean* (e.g., "They said price, but the real concern may be ROI uncertainty or internal budget politics").

3. **Generate 5 discovery questions** using these rules:
   - Open with curiosity, never defensiveness
   - Each question must probe a *different* dimension of the concern (financial, emotional, process, timeline, stakeholder, past experience)
   - Avoid questions that can be answered with "yes" or "no"
   - Never repeat the objection's language back as a challenge (e.g., don't ask "So you're saying you can't afford it?")
   - At least one question should invite the prospect to describe their ideal outcome
   - At least one question should explore what has already been tried or considered

4. **Flag one high-risk follow-up mistake** — Name the most common response error reps make with this objection type and why it backfires.

## Output Format

Produce the following structure:

**Objection Received:**
[Restate the objection in one sentence]

**Objection Type:** [Category from step 1]

**Surface vs. Real Concern:**
- Surface: [what they said]
- Likely real concern: [what they probably mean]

**Discovery Questions:**
1. [Question targeting dimension 1]
2. [Question targeting dimension 2]
3. [Question targeting dimension 3]
4. [Question targeting dimension 4]
5. [Question targeting dimension 5]

**Common Mistake to Avoid:**
[One sentence naming the mistake + one sentence explaining why it kills the deal]

Keep the entire output under 350 words. Questions should be conversational, not formal. Write them exactly as a rep would speak them on a call.
