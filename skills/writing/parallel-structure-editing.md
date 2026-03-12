---
name: parallel-structure-editing
description: >
  Scans a document for lists, headings, bullet points, and inline series that lack parallel grammatical structure, then rewrites each element to achieve consistent syntactic alignment. Use when someone says "fix my bullet points," asks to "make this list consistent," wants to "clean up the structure of my document," says "my headings feel uneven," or requests "parallel structure" improvements.
category: writing
tags: [parallel-structure, grammar, editing, lists, consistency]
author: community
---

# Parallel Structure Editing

This skill identifies every list, series, and set of headings in a document that violates parallel grammatical form and rewrites each group so all elements share the same syntactic pattern.

## Editing Workflow

1. **Scan for structural groups** — Locate all bullet lists, numbered lists, heading sets (H1–H4), inline series (comma-separated items in a sentence), and multi-part definitions or table rows.

2. **Diagnose each group** — For each group, identify the dominant grammatical pattern already present (e.g., gerund phrases, imperative verbs, noun phrases, infinitives, full sentences). Flag any element that deviates from that pattern.

3. **Select the best anchor pattern** — Choose the pattern that (a) matches the majority of items, (b) fits the document's register and tone, and (c) requires the fewest rewrites to apply consistently. Prefer active voice and concrete nouns or verbs.

4. **Rewrite non-conforming elements** — Adjust only the structure, not the meaning. Do not add or remove substantive content. Keep rewrites minimal — change verb form, article usage, or sentence opening, not the core idea.

5. **Apply consistently within each group** — Every item in a given list or heading set must follow the chosen pattern before moving to the next group. Do not mix patterns within a single group.

6. **Preserve intentional variation** — If a standalone heading or single-item callout is stylistically isolated, leave it unchanged unless the user asks otherwise.

7. **Note ambiguous cases** — If a group has no clear majority pattern or if aligning it would significantly alter meaning, flag it for the user with two options rather than choosing unilaterally.

## Output Format

Produce two clearly labeled sections:

**1. Summary of Changes**
- A short bulleted list naming each group that was edited, the original pattern problem (one phrase), and the anchor pattern applied (one phrase).
- Example: `Intro bullet list — mixed gerunds/nouns → standardized to gerund phrases`

**2. Revised Content**
- The full rewritten text block (or the full document if provided), with corrected groups in place. Do not show strikethroughs or tracked changes unless the user requests a diff view.
- If only specific sections were affected, output only those sections with a clear heading indicating their location in the document.
