---
name: writing-tense-shift-detector
description: >
  Scans a written draft for unintentional tense shifts and flags each inconsistency with a suggested correction. Use when someone says "check my tenses," asks to "find tense problems in my writing," wants to "make my story consistent," needs to "fix verb tenses in my draft," or says "my writing keeps switching tenses."
category: writing
tags: [grammar, editing, proofreading, consistency, tense]
author: community
---

# Tense Shift Detector

This skill analyzes a draft for unintentional shifts between past, present, and future tense, then returns a numbered list of each inconsistency with its location, the problematic verb or phrase, and a concrete suggested correction.

## Detection Workflow

1. **Identify the dominant tense** — Read the full draft and determine the primary tense the author is using (past, present, or future). The dominant tense is whichever appears most frequently and appears intentional given the context (e.g., narrative fiction, academic essay, news article).

2. **Catalog all verbs and verb phrases** — Mentally tag every main verb and auxiliary verb construction in each sentence. Note the tense of each one.

3. **Flag deviations** — Mark any verb or verb phrase that breaks from the dominant tense unless the shift is clearly intentional (e.g., a character recalling a memory inside a present-tense narrative, a future plan stated inside a past-tense story, direct dialogue that reflects the speaker's perspective).

4. **Apply intentionality filters** — Do NOT flag:
   - Dialogue that naturally uses a different tense from the narration
   - Established facts or universal truths ("Water boils at 100°C") embedded in any tense
   - Deliberate flashbacks or flash-forwards that are clearly framed
   - Conditional or hypothetical statements ("If she had known, she would have left")

5. **Generate a correction for each flagged item** — For each flagged shift, rewrite only the problematic verb or clause to match the dominant tense, preserving the author's voice and word choices as much as possible.

6. **Summarize the pattern** — After listing all flags, note whether the shifts follow a pattern (e.g., consistently slipping into present tense during action scenes, or past tense during dialogue).

## Output Format

Produce the following structure:

**Dominant Tense Identified:** [past / present / future] — [one sentence explaining why]

**Tense Inconsistencies Found:** [count]

---

For each inconsistency:

**[#]. Location:** [Quote the full sentence containing the issue]
**Problematic verb/phrase:** `[exact word or phrase]`
**Current tense:** [e.g., present simple]
**Expected tense:** [e.g., past simple]
**Suggested correction:** "[Rewritten sentence with the fix applied]"

---

**Pattern Summary:** [2–3 sentences describing any recurring cause of the shifts and a tip for avoiding them going forward.]

If no unintentional tense shifts are found, state: "No unintentional tense shifts detected. The draft maintains consistent [dominant tense] tense throughout."
