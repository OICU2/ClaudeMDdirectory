---
name: multi-author-voice-harmonization
description: >
  Analyzes sections written by different contributors and produces a unified revision plan to align tone, vocabulary, and sentence style across the document. Use when someone says "this document has multiple authors," asks to "unify the writing style," wants to "make this sound like one person wrote it," needs to "harmonize the voice across sections," or asks to "blend different writing styles together." Applies linguistic profiling to each section and outputs a concrete, actionable revision guide.
category: writing
tags: [voice, style, collaboration, editing, consistency]
author: community
---

# Multi-Author Voice Harmonization

This skill audits a multi-contributor document for stylistic divergence and delivers a structured revision plan that brings all sections into a consistent, unified voice.

## Analysis and Harmonization Workflow

**Step 1: Profile Each Section**
- Identify natural section breaks (by heading, contributor label, or stylistic shift)
- For each section, extract:
  - Average sentence length (short/punchy vs. long/complex)
  - Formality level (contractions, jargon, passive vs. active voice)
  - Vocabulary register (technical, conversational, academic)
  - Punctuation and structural patterns (em dashes, semicolons, bullet lists, parentheticals)
  - Rhetorical stance (direct assertion, hedged qualification, question-driven)

**Step 2: Identify the Dominant or Target Voice**
- If a "primary author" or "preferred style" is specified, use that as the baseline
- If not specified, identify the section with the strongest, clearest voice and designate it as the reference style
- State explicitly which section was chosen as the anchor and why

**Step 3: Document the Divergence Points**
- List specific, concrete differences between each non-anchor section and the anchor style
- Flag every category that differs: sentence rhythm, word choice, formality, punctuation habits, transitions
- Quote specific phrases as evidence (e.g., "Section 2 uses 'utilize' where Section 1 uses 'use'")

**Step 4: Generate Per-Section Revision Instructions**
- For each non-anchor section, write explicit, line-level revision directives:
  - Which words or phrases to replace (with suggested alternatives)
  - Which sentences to split, merge, or restructure for rhythm
  - Where to add or remove hedging language
  - How to adjust transition phrases to match the anchor's connective style
- Do not rewrite the full text — provide targeted, surgical instructions

**Step 5: Produce a Global Style Reference Card**
- Summarize the unified voice in 6–10 rules derived from the anchor section
- Format as a quick-reference checklist for future edits or new contributors

## Output Format

Produce a structured document with the following sections:

**1. Section Profiles** — A table or bulleted breakdown of each identified section: author/label, sentence length, formality, register, notable quirks.

**2. Anchor Voice Declaration** — One paragraph naming the chosen reference style, quoting 2–3 phrases that exemplify it, and explaining the selection rationale.

**3. Divergence Report** — Per non-anchor section: a bulleted list of specific divergences with quoted evidence from the text.

**4. Revision Instructions** — Per non-anchor section: numbered, actionable edits. Each instruction must name the problem, quote the offending text, and provide a concrete fix or alternative.

**5. Unified Voice Style Card** — A numbered list of 6–10 rules (e.g., "Use active voice. Keep sentences under 20 words. Avoid 'utilize' — prefer 'use'.") that define the harmonized document style.

Total output length scales with document size: brief for documents under 500 words, comprehensive for longer works. Always prioritize specificity over completeness — a precise instruction for one sentence is more valuable than a vague note about an entire section.
