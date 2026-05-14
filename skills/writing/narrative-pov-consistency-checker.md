---
name: narrative-pov-consistency-checker
category: writing
description: >
  Scans a document for unintentional point-of-view shifts between first person (I/we), second person (you), and third person (he/she/they/one) and flags each inconsistency with its location and a suggested fix. Use when someone says "check my POV consistency," asks "does my writing shift perspective," wants to "find person shifts in my document," needs to "review narrative voice," or says "my writing feels inconsistent."
tags: [writing, editing, consistency, narrative, proofreading]
author: community
---

# Narrative POV Consistency Checker

This skill analyzes a document to detect unintentional shifts in narrative point of view and returns a structured report of every inconsistency with actionable correction suggestions.

## Detection Workflow

1. **Identify the dominant POV** — Read the full document and determine the primary narrative person based on majority usage and stated intent (first, second, or third person).
2. **Tokenize by sentence or clause** — Examine each sentence and subordinate clause individually for subject pronouns, possessive pronouns, and verb conjugations that signal POV.
3. **Flag deviations** — Mark any sentence or clause where the POV pronoun or implied subject contradicts the dominant POV. Note the specific word(s) that signal the shift.
4. **Classify each shift** — Label whether the shift is First→Second, First→Third, Second→First, Second→Third, Third→First, or Third→Second.
5. **Assess intent** — Distinguish between likely unintentional shifts (flag for correction) and clearly intentional ones (e.g., a direct address aside in an otherwise third-person essay). Note intentional shifts separately.
6. **Generate corrections** — For each flagged shift, rewrite the offending phrase or sentence in the dominant POV.

## Output Format

Produce a structured report with the following sections:

**Dominant POV Identified:** [First / Second / Third person] — [one sentence justification]

**Inconsistencies Found:** [count]

For each inconsistency, provide a numbered entry:

```
Issue #[N]
Location:   [Quote the full sentence or clause containing the shift]
Shift Type: [e.g., First → Third]
Problem:    [Identify the specific word(s) causing the shift]
Suggested Fix: [Rewritten sentence in the dominant POV]
```

**Intentional Shifts (if any):** [List any POV changes that appear deliberate, with brief reasoning]

**Summary:** [2–3 sentences summarizing the overall consistency health of the document and the most common type of shift found]

If no inconsistencies are found, confirm the dominant POV and state the document is consistent.
