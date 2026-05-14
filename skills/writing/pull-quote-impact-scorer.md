---
name: pull-quote-impact-scorer
description: >
  Evaluates candidate pull quotes from a long-form article and ranks them by emotional resonance, shareability, and alignment with the piece's central argument. Use when someone says "find the best pull quotes from this," asks "which lines would make good callouts," or wants to "score these quotes for social media." Also triggers when someone needs to "pull the most compelling lines" from a draft or wants to "identify standout quotes for layout."
category: writing
tags: [pull-quotes, editorial, content-strategy, social-media, long-form]
author: community
---

# Pull Quote Impact Scorer

This skill extracts and scores pull quote candidates from long-form content, ranking each by emotional impact, shareability, and argumentative alignment so editors and writers can instantly identify the strongest callouts.

## Evaluation Workflow

1. **Parse the piece for candidates** — Identify all sentences or short passages (10–40 words) that express a complete, standalone idea. Exclude transitional sentences, data citations without context, or lines requiring heavy surrounding context to make sense.

2. **Score each candidate on three dimensions (1–10 each):**
   - **Emotional Impact** — Does it provoke curiosity, surprise, empathy, or urgency? High scores go to lines with vivid language, tension, or a counterintuitive claim.
   - **Shareability** — Can it stand alone on social media without the article? Penalize jargon, pronoun-heavy references ("he said," "it does"), and anything requiring prior context.
   - **Argument Alignment** — Does it reflect the article's core thesis or key supporting claim? Avoid lines that are colorful but tangential.

3. **Calculate composite score** — Average the three dimension scores. Break ties by favoring Emotional Impact.

4. **Flag disqualifiers** — Mark any candidate that contains a factual claim requiring a citation if removed from context, uses a pronoun with an unclear antecedent, or exceeds 45 words.

5. **Rank and annotate** — Order all candidates from highest to lowest composite score. For the top 3, write one sentence explaining why it scored well and one suggestion for tightening it if applicable.

## Output Format

Produce a ranked table followed by detailed notes on the top 3.

**Ranked Pull Quote Table:**
| Rank | Quote (truncated to 15 words if long) | Emotional | Shareable | Alignment | Composite | Flags |
|------|---------------------------------------|-----------|-----------|-----------|-----------|-------|
| 1    | "..."                                 | 9         | 8         | 9         | 8.7       | None  |

**Top 3 Deep Dives:**

> **#1 — Full quote**
> - **Why it works:** [1 sentence]
> - **Tightening suggestion:** [1 sentence, or "None needed"]

> **#2 — Full quote**
> - **Why it works:** [1 sentence]
> - **Tightening suggestion:** [1 sentence, or "None needed"]

> **#3 — Full quote**
> - **Why it works:** [1 sentence]
> - **Tightening suggestion:** [1 sentence, or "None needed"]

If fewer than 5 strong candidates exist (composite ≥ 6.0), note this and explain what the article lacks that makes pull quote extraction difficult.
