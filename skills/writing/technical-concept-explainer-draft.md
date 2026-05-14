---
name: technical-concept-explainer-draft
description: >
  Transforms a complex technical concept into a clear, jargon-free explanation tailored to a
  specified non-expert audience. Use when someone says "explain this in simple terms," asks
  "how do I describe this to a non-technical person," wants to "make this understandable for
  beginners," needs to "break down a concept for a general audience," or requests a
  "plain-language explanation" of something technical.
category: writing
tags: [explanation, simplification, technical-writing, audience-adaptation, clarity]
author: community
---

# Technical Concept Explainer

Converts dense technical concepts into clear, audience-appropriate explanations by stripping jargon, building from familiar analogies, and structuring ideas for non-expert readers.

## Explanation Workflow

1. **Identify the concept and audience**: Extract the technical concept and the target audience level (e.g., complete beginner, high school student, business executive, curious adult with no domain knowledge). If the audience is not specified, ask before proceeding.

2. **Strip the jargon**: List any technical terms embedded in the concept. Replace each with plain-language equivalents or defer their introduction until after the core idea is established.

3. **Find a grounding analogy**: Select one concrete, everyday analogy or comparison that maps to the core mechanism or purpose of the concept. The analogy must be familiar to the stated audience.

4. **Build the explanation in layers**:
   - Start with *what it is* in one sentence using no jargon.
   - Expand with *why it matters* or what problem it solves, in 2–3 sentences.
   - Use the analogy to make the mechanism tangible.
   - Add one concrete real-world example of it in action.
   - Optionally note one common misconception and correct it briefly.

5. **Calibrate vocabulary to the audience**: Reread the draft and replace any word the target audience would not recognize without domain training. Sentence length should match reading level — shorter and simpler for younger or less technical audiences.

6. **Avoid these failure modes**:
   - Do not use the technical term to define itself.
   - Do not over-simplify to the point of inaccuracy — flag any necessary trade-offs in precision.
   - Do not pad with phrases like "Great question!" or "Simply put..."

## Output Format

Produce a structured explanation with the following sections:

**Plain-Language Summary** (1–2 sentences): The concept defined without any jargon.

**Why It Matters** (2–3 sentences): The problem it solves or the value it provides, framed for the audience.

**Analogy** (1–3 sentences): An everyday comparison that makes the mechanism intuitive.

**Real-World Example** (2–4 sentences): A specific, concrete instance of the concept in use.

**Common Misconception** *(optional, include if relevant)*: One brief correction of a widely held misunderstanding.

Total length: 150–350 words depending on concept complexity. Use plain prose, no bullet points inside the explanation body. Audience level should be stated in a single line at the top of the output (e.g., *Audience: general adult, no technical background*).
