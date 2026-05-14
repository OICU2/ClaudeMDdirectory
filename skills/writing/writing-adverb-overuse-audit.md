---
name: writing-adverb-overuse-audit
description: >
  Scans prose for adverbs that dilute verb strength and replaces each with a more precise, powerful verb alternative. Use when someone says "tighten my writing," asks to "cut weak words," or wants to "make my prose stronger." Also triggers when a user shares a draft and asks for line-level editing or says their writing feels flat or repetitive.
category: writing
tags: [editing, prose, style, verbs, clarity]
author: community
---

# Adverb Overuse Audit

This skill identifies adverbs weakening prose and provides concrete stronger-verb replacements, used whenever a writer wants sharper, more direct sentences.

## Audit Workflow

1. **Scan for adverbs**: Identify all adverbs in the submitted text, prioritizing `-ly` adverbs modifying verbs (e.g., "quickly ran," "loudly said," "very quietly moved").
2. **Flag by severity**: Categorize each flagged adverb as:
   - **High priority**: Adverb + weak verb pairs where a single strong verb exists (e.g., "walked slowly" → "shuffled," "said loudly" → "announced")
   - **Medium priority**: Adverbs modifying already-strong verbs (unnecessary intensifiers)
   - **Low priority**: Adverbs with no clean single-verb replacement (note these but deprioritize)
3. **Generate replacements**: For each high- and medium-priority instance, provide one to three specific verb alternatives ranked by fit to the sentence's tone and context.
4. **Preserve intent**: Do not suggest replacements that shift meaning, tense, or voice. Flag cases where the adverb carries meaning that no single verb captures cleanly.
5. **Rewrite the sentence**: For each flagged instance, show the full sentence before and after substitution so the writer can evaluate in context.
6. **Summarize patterns**: After the line-by-line audit, note any recurring adverb habits (e.g., overuse of "very," heavy reliance on "said + adverb" dialogue tags) so the writer can self-edit future drafts.

## Output Format

Produce a structured report with three sections:

**Section 1 — Flagged Instances** (one block per adverb):
- **Original**: Full sentence with the adverb bolded
- **Adverb**: The specific word flagged and its priority level
- **Suggested verbs**: Bulleted list of 1–3 replacements with brief rationale
- **Revised sentence**: The sentence rewritten with the best replacement

**Section 2 — No-Change Notes**
List any adverbs intentionally kept, with a one-line explanation (e.g., "no single verb captures both speed and hesitation here").

**Section 3 — Pattern Summary**
Two to five sentences identifying recurring adverb habits and one actionable self-editing tip the writer can apply going forward.

Use plain text with markdown headers. Keep rationale notes to one sentence each. Do not rewrite sections of text not flagged.
