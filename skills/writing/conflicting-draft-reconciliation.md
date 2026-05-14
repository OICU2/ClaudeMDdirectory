---
name: conflicting-draft-reconciliation
category: writing
description: >
  Compares two competing versions of the same document and produces a single merged draft that resolves contradictions while preserving the strongest elements of each. Use when someone says "I have two versions of this document," asks to "merge these drafts," wants to "reconcile conflicting edits," needs to "combine these two drafts into one," or says "two people wrote versions of the same thing." Handles tone conflicts, structural differences, contradictory facts, and overlapping content.
tags: [drafts, merging, reconciliation, editing, revision]
author: community
---

# Conflicting Draft Reconciliation

This skill merges two competing document versions into a single, coherent draft by systematically resolving contradictions and selecting the strongest elements from each source.

## Reconciliation Workflow

1. **Audit both drafts independently** — Read each version in full before comparing. Note the thesis, tone, structure, and key claims of each without judgment.

2. **Map the conflict types** — Categorize every divergence into one of four types:
   - **Factual contradiction** (e.g., different dates, statistics, or claims)
   - **Tonal conflict** (e.g., formal vs. casual, confident vs. hedged)
   - **Structural disagreement** (e.g., different section order or emphasis)
   - **Content overlap** (e.g., same idea phrased differently)

3. **Apply resolution rules by conflict type:**
   - *Factual contradiction*: Flag it explicitly in the merged draft with a `[VERIFY: Draft A says X; Draft B says Y]` inline note. Do not silently pick one.
   - *Tonal conflict*: Default to the tone of Draft A unless Draft B's tone is clearly more appropriate for the stated audience or purpose. Note the choice.
   - *Structural disagreement*: Choose the structure that better serves the document's purpose; preserve strong sections from the losing structure by integrating them where they fit.
   - *Content overlap*: Write a single synthesized version that combines the clearest phrasing and strongest supporting detail from both. Do not simply pick one or concatenate both.

4. **Preserve unique strengths** — Any passage, argument, example, or phrasing that exists in only one draft and adds genuine value must appear in the merged output. Do not discard material just because it has no counterpart.

5. **Maintain internal consistency** — After merging, reread the full draft to ensure voice, tense, terminology, and argument flow are consistent throughout. Fix seams where stitched sections clash.

6. **Do not introduce new content** — The merged draft must be grounded entirely in the source material. Do not add arguments, facts, or examples not present in either draft.

## Output Format

Produce the following in order:

**1. Conflict Summary Table**
A compact table listing each conflict found, its type, and the resolution applied. Example columns: `Section | Conflict Type | Draft A Position | Draft B Position | Resolution`.

**2. Merged Draft**
The full reconciled document, formatted to match the document type (prose, bullets, sections with headers, etc.). Inline `[VERIFY: ...]` flags must appear wherever factual contradictions were left unresolved pending human confirmation.

**3. Reconciliation Notes**
A short bulleted list (5–10 items max) of the most significant judgment calls made — tone choices, structural decisions, passages preserved from only one draft — so the human understands what was decided and can override anything.

Length of the merged draft should match the longer of the two source drafts unless significant redundancy was eliminated, in which case it may be shorter. No word count padding.
