---
name: content-tense-consistency-audit
description: >
  Scans written drafts to detect and resolve inconsistent verb tense shifts that disrupt narrative flow. Use when someone says "check my tenses," asks to "fix verb consistency," wants to "audit my draft for tense errors," says "my writing keeps switching tenses," or needs to "make my essay past tense throughout." Flags every problematic shift with context and provides a corrected version.
category: writing
tags: [grammar, editing, proofreading, consistency, verb-tense]
author: community
---

# Tense Consistency Audit

This skill scans any written draft for unintended verb tense shifts, flags each inconsistency with explanation, and produces a corrected version maintaining the author's intended tense throughout.

## Audit Workflow

1. **Identify the dominant tense** — Read the full draft and determine the primary intended tense (past, present, or future) based on majority usage and context (e.g., narrative fiction, academic essay, blog post).

2. **Flag every tense violation** — Locate each sentence or clause where the verb tense deviates from the dominant tense without a valid reason (e.g., general truths, direct quotes, or intentional flashbacks are valid exceptions).

3. **Classify each violation** — Label each instance as one of:
   - `SHIFT`: Unintended switch mid-paragraph or mid-sentence
   - `ORPHAN`: Single sentence isolated in wrong tense
   - `EXCEPTION`: Justified tense change (note why, do not flag as error)

4. **Apply corrections** — Rewrite each flagged sentence with the corrected verb form. Preserve the author's voice, word choice, and sentence structure — change only the tense.

5. **Handle edge cases explicitly**:
   - Dialogue and direct quotes: preserve original tense
   - Stated facts and universal truths: present tense is always valid
   - Deliberate flashbacks or flash-forwards: flag but ask author to confirm intent before correcting

## Output Format

Produce three clearly labeled sections:

**Section 1 — Dominant Tense Detected**
One line stating the identified primary tense and confidence level (e.g., "Primary tense: Simple past — high confidence").

**Section 2 — Flagged Violations**
A numbered list. Each entry includes:
- Original sentence (quoted)
- Violation type (`SHIFT`, `ORPHAN`, or `EXCEPTION`)
- Brief reason (one line)
- Corrected sentence (if applicable)

Example entry:
```
3. "She walked to the door and turns the handle."
   Type: SHIFT
   Reason: "turns" breaks the established simple past.
   Corrected: "She walked to the door and turned the handle."
```

**Section 3 — Clean Corrected Draft**
The full draft with all corrections applied, ready to copy. If zero violations are found, state "No tense inconsistencies detected" and skip Sections 2 and 3.
