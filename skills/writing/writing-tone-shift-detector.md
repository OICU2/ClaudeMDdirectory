---
name: writing-tone-shift-detector
category: writing
description: >
  Analyzes long-form documents to identify sections where the tone inconsistently
  shifts away from the established brand or authorial voice. Use when someone says
  "check if my tone is consistent," asks "does my writing sound like one person,"
  wants to "find where my voice changes," needs to "audit tone across a document,"
  or says "something feels off about how this reads."
tags: [writing, tone, voice, editing, consistency]
author: community
---

# Writing Tone Shift Detector

This skill scans long-form documents to pinpoint specific passages where the tone deviates from the dominant authorial or brand voice, explaining why each shift occurs and how to fix it.

## Tone Analysis Workflow

1. **Establish the baseline voice** — Read the first 10–15% of the document (or the section the user designates as canonical). Identify 5–8 defining characteristics of the voice: formality level, sentence length/rhythm, pronoun usage (we/you/I), emotional temperature (warm, clinical, authoritative, playful), vocabulary register (technical, casual, academic), and use of humor or hedging.

2. **Segment the document** — Divide the full text into logical sections: paragraphs, headings, or user-defined chunks. Label each segment by position (e.g., Intro, Section 2, Conclusion).

3. **Score each segment against the baseline** — For every segment, check it against all 5–8 baseline characteristics. Flag a segment if it deviates on 2 or more dimensions. Note the specific dimensions that changed.

4. **Classify shift severity** — Assign each flagged segment one of three severity levels:
   - 🔴 **Major**: Voice is unrecognizable compared to baseline (3+ characteristics shifted)
   - 🟡 **Moderate**: Noticeable inconsistency that would distract a careful reader (2 characteristics shifted)
   - 🟢 **Minor**: Subtle drift that may accumulate into a larger problem

5. **Diagnose the cause** — For each flagged segment, identify the likely reason: tonal slip (e.g., suddenly formal in a casual piece), copied-in text from another source, rushed writing, topic-driven register change (e.g., legal section sounding legalistic), or audience confusion.

6. **Generate a correction** — Rewrite each flagged sentence or passage in the established voice, preserving the original meaning.

## Output Format

Produce a structured report with the following sections:

---

**Baseline Voice Profile**
- Formality: [e.g., Conversational — contractions used, second-person direct]
- Sentence rhythm: [e.g., Short, punchy, rarely exceeds 20 words]
- Emotional temperature: [e.g., Warm and encouraging]
- Vocabulary register: [e.g., Plain English, avoids jargon]
- Defining quirks: [e.g., Uses rhetorical questions, Oxford comma consistent]

---

**Tone Shift Report**

| # | Location | Severity | Dimensions Shifted | Likely Cause |
|---|----------|----------|--------------------|--------------|
| 1 | [Section/paragraph identifier] | 🔴/🟡/🟢 | [e.g., Formality, Pronoun] | [e.g., Copied-in text] |

---

**Flagged Passages with Corrections**

For each flagged segment:

> **Location:** [Section name or paragraph number]
> **Severity:** 🔴 Major
> **Original:**
> "[Exact quoted text]"
> **What shifted:** [1–2 sentences explaining the specific deviation]
> **Revised version:**
> "[Rewritten passage in consistent voice]"

---

**Summary**
- Total segments reviewed: [N]
- Segments flagged: [N] ([X]% of document)
- Most common shift type: [e.g., Formality spikes]
- Overall consistency rating: [Consistent / Mostly Consistent / Inconsistent / Fragmented]
- Top recommendation: [One actionable priority for the author]
