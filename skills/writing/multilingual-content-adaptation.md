---
name: multilingual-content-adaptation
category: writing
description: >
  Adapts English-language content for a specific non-English market by rewriting idioms, cultural references, tone, and terminology to match local audience expectations. Use when someone says "localize this for [market]", asks to "adapt my content for [country/language] audiences", wants to "make this feel native to [culture]", needs to "translate and culturally adapt" marketing or editorial copy, or requests that content "resonate with [non-English] readers". Produces culturally authentic rewrites, not literal translations.
tags: [localization, cultural-adaptation, translation, international, content]
author: community
---

# Multilingual Content Adaptation

This skill rewrites English content to feel native to a target market by adapting idioms, cultural references, humor, formality levels, and domain-specific terminology — not just translating words.

## Adaptation Workflow

1. **Identify the target market**: Confirm the target language, country, and audience segment (e.g., Brazilian Portuguese for B2B SaaS buyers, not generic Portuguese).

2. **Audit the source content for localization friction**:
   - Flag idioms and metaphors that don't transfer (e.g., sports analogies, weather expressions)
   - Identify cultural references (holidays, celebrities, historical events) that are unfamiliar or offensive
   - Note tone assumptions (directness, formality, humor) that clash with target culture
   - Spot units, date formats, currencies, and legal/regulatory terms needing replacement

3. **Apply cultural adaptation rules**:
   - Replace non-transferable idioms with locally understood equivalents that carry the same rhetorical weight
   - Swap cultural references with locally resonant alternatives (keep the function, change the content)
   - Adjust formality register to match local norms (e.g., German B2B is formal; Brazilian Portuguese is warmer)
   - Rewrite humor, sarcasm, or irony using locally appropriate conventions, or remove if no equivalent exists
   - Use region-specific terminology (e.g., "mobile" vs. "handy" vs. "celular")

4. **Preserve intent and structure**: Maintain the original content's purpose, call to action, argument structure, and key message. Adaptation changes expression, not meaning.

5. **Flag unresolvable gaps**: If a concept has no cultural equivalent or requires local legal/expert knowledge (e.g., tax terms, regulatory language), mark it with `[REVIEW NEEDED: reason]` rather than guessing.

## Output Format

Produce the following sections in order:

**Adapted Content**
The full rewritten content in the target language, formatted identically to the source (headings, lists, paragraphs, CTAs preserved).

**Adaptation Notes**
A bullet list of every change made, structured as:
- `[Original phrase]` → `[Adapted phrase]` — reason for change (e.g., "idiom has no equivalent; replaced with local sports metaphor")

**Flagged Items**
A numbered list of any passages marked `[REVIEW NEEDED]` with a one-line explanation of what local expertise is required.

Length mirrors the source content. Notes section should be concise — one line per change.
