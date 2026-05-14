---
name: multi-audience-plain-language-adapter
description: >
  Rewrites a single technical or expert-level document into multiple plain-language versions
  tailored to different audience literacy levels. Use when someone says "make this accessible
  to different audiences," asks to "simplify this for multiple reading levels," wants to
  "adapt this document for a general audience," needs to "explain this to non-experts at
  different levels," or says "create plain-language versions of this."
category: writing
tags: [plain-language, accessibility, technical-writing, audience-adaptation, readability]
author: community
---

# Multi-Audience Plain Language Adapter

This skill takes a single technical or expert-level document and produces distinct rewritten versions calibrated to three literacy tiers — expert, general adult, and plain language — preserving core meaning while adjusting vocabulary, sentence structure, and assumed knowledge.

## Adaptation Workflow

1. **Analyze the source document** — Identify: core message, key facts, technical terms, assumed knowledge, and any domain-specific jargon or acronyms.

2. **Define the three output tiers:**
   - **Tier 1 — Informed Non-Specialist (Grade 12 / college-educated adult):** Retain field terminology but define it on first use. Allow moderate sentence complexity. Assume no prior domain expertise but strong general literacy.
   - **Tier 2 — General Adult (Grade 8 / everyday reader):** Replace jargon with common words. Use short sentences (under 20 words average). Use active voice. Replace abstract concepts with concrete examples or analogies.
   - **Tier 3 — Plain Language / Low-Literacy (Grade 5 / broad public access):** Use the simplest possible vocabulary. One idea per sentence. Bullet points over paragraphs. Avoid all acronyms and technical terms. Use direct second-person address ("you") where appropriate.

3. **Rewrite each tier independently** — Do not summarize or truncate the source; preserve all essential information. Adjust how it is expressed, not what is expressed.

4. **Apply plain-language principles throughout all tiers:**
   - Active voice over passive
   - Concrete nouns and strong verbs
   - No double negatives
   - Logical information order (most important first)

5. **Flag untranslatable elements** — If a concept cannot be simplified without losing critical accuracy (e.g., a legal term of art, a specific drug name), keep the term and add a plain-language gloss in parentheses.

6. **Add a readability note per tier** — After each version, include a one-line note citing approximate Flesch-Kincaid grade level and any significant trade-offs made.

## Output Format

Produce three clearly labeled sections in this order:

---

**TIER 1 — Informed Non-Specialist**
[Full rewritten document]
*Readability note: [Grade level estimate + trade-offs]*

---

**TIER 2 — General Adult**
[Full rewritten document]
*Readability note: [Grade level estimate + trade-offs]*

---

**TIER 3 — Plain Language**
[Full rewritten document using bullets, short paragraphs, bold key terms]
*Readability note: [Grade level estimate + trade-offs]*

---

Each tier must be self-contained and usable independently. Do not include cross-references between tiers. Length per tier should match the source density — a one-page source produces approximately one page per tier.
