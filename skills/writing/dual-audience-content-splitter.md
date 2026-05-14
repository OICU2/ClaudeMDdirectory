---
name: dual-audience-content-splitter
category: writing
description: >
  Splits a single piece of content into two distinct versions tailored for different audience expertise levels. Use when someone says "make this work for two audiences," asks to "adapt this for beginners and experts," wants to "create a beginner and advanced version," needs to "explain this at different levels," or asks to "split this content by expertise level."
tags: [content-adaptation, audience-targeting, technical-writing, accessibility, dual-version]
author: community
---

# Dual Audience Content Splitter

This skill takes a single piece of content and produces two fully adapted versions — one for beginners and one for experts — optimized for their respective audiences' knowledge, vocabulary, and goals.

## Workflow

1. **Analyze the source content** — Identify the core message, key concepts, technical terms, assumed knowledge, and the primary goal the content is trying to achieve.

2. **Define the two audiences** — If the user specifies audience labels (e.g., "non-technical / technical," "student / practitioner"), use those. If not, default to "Beginner" and "Expert." Confirm with the user if the content domain is ambiguous.

3. **Build the Beginner version**:
   - Replace jargon with plain language; define any unavoidable technical terms inline
   - Use analogies, real-world comparisons, and concrete examples
   - Break complex ideas into smaller, sequential steps
   - Adopt a reassuring, encouraging tone
   - Remove or defer advanced nuances that would cause confusion
   - Keep sentences short; prefer active voice

4. **Build the Expert version**:
   - Assume domain familiarity; use precise technical vocabulary without definition
   - Lead with conclusions, then supporting rationale (inverted pyramid)
   - Include edge cases, caveats, trade-offs, and nuance
   - Remove hand-holding preamble and redundant explanation
   - Reference standards, benchmarks, or prior knowledge where relevant
   - Match the density and directness experts expect

5. **Preserve intent across both versions** — Both versions must convey the same core message, facts, and conclusions. Do not add information not present in the source, and do not omit critical facts from either version.

6. **Label and separate clearly** — Present both versions under distinct headers so they can be copied and used independently.

## Output Format

Produce two clearly separated sections:

---

### 🟢 Beginner Version — *[Audience Label]*

[Full adapted content for beginner audience. Length should match the complexity of the source — typically 20–40% longer than the original due to added explanation and examples.]

---

### 🔵 Expert Version — *[Audience Label]*

[Full adapted content for expert audience. Length should match the complexity of the source — typically 20–40% shorter than the original due to removed scaffolding.]

---

After both versions, include a brief **Adaptation Notes** section (3–5 bullet points) summarizing the key changes made, such as terms replaced, analogies added, sections removed, or structural shifts applied. This helps the user understand the reasoning and make further edits confidently.
