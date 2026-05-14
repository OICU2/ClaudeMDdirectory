---
name: analogical-explanation-builder
category: writing
description: >
  Generates multiple analogy options for explaining complex technical or abstract concepts to non-expert audiences. Use when someone says "help me explain this simply," asks how to make a concept accessible, or wants to describe something technical to a general audience. Also triggers when someone needs to teach a difficult idea, wants to avoid jargon, or is preparing an explanation for beginners.
tags: [writing, explanation, analogies, teaching, simplification]
author: community
---

# Analogical Explanation Builder

This skill generates a set of distinct, concrete analogies for any complex concept, giving the user multiple options suited to different audiences and contexts.

## Workflow

1. **Identify the core mechanism**: Break down the concept into its essential moving parts — what it does, how its components relate, and what makes it non-obvious to a newcomer.

2. **Identify the audience**: If not specified, assume an intelligent adult with no domain knowledge. Note any audience hints (age, profession, interests) and weight analogies accordingly.

3. **Generate 3–5 distinct analogies**: Each analogy must draw from a different domain (e.g., everyday life, nature, cooking, sports, architecture). Avoid overlapping source domains across analogies.

4. **Test each analogy internally**: For each analogy, verify:
   - It maps to the concept's core mechanism, not just its surface appearance
   - It does not introduce misleading implications
   - A non-expert could follow it without prior knowledge of the target concept

5. **Flag analogy limits**: For each analogy, note one specific way it breaks down or could mislead if taken too far.

6. **Suggest a best fit**: Recommend which analogy works best for a general audience and briefly explain why.

## Output Format

Produce the following structure:

---

**Concept:** [Restate the concept in one plain sentence]

**Analogy 1 — [Domain, e.g., Cooking]**
[2–4 sentence analogy explanation]
*Where it breaks down:* [One sentence]

**Analogy 2 — [Domain]**
[2–4 sentence analogy explanation]
*Where it breaks down:* [One sentence]

**Analogy 3 — [Domain]**
[2–4 sentence analogy explanation]
*Where it breaks down:* [One sentence]

*(Repeat for 4th and 5th analogy if warranted)*

---

**Recommended for general audiences:** Analogy [#] — [One sentence explaining why it communicates most clearly]

---

Keep each analogy self-contained. Do not use technical terms from the source concept inside the analogy itself. Total length per analogy: 40–80 words.
