---
name: content-voice-drift-correction
description: >
  Analyzes a draft to detect sections where the author's voice becomes inconsistent with the established tone, style, or persona, then provides targeted rewrites to restore uniformity. Use when someone says "this doesn't sound like me," asks to make their writing more consistent, wants to fix sections that feel off-brand, notices their draft sounds like different people wrote it, or needs help maintaining a unified voice throughout a long piece.
category: writing
tags: [voice, consistency, editing, rewriting, style]
author: community
---

# Voice Drift Correction

This skill scans a draft for tonal and stylistic inconsistencies against the author's established voice and delivers targeted rewrites for each drifting section.

## Voice Drift Detection Workflow

1. **Establish the baseline voice** — Read the full draft and identify 3–5 defining characteristics of the author's voice in sections that feel most natural. Look for: sentence length patterns, formality level, use of first person, rhythm, vocabulary complexity, use of humor or hedging, and punctuation habits.

2. **Scan for drift** — Go section by section (paragraph or chunk level) and flag any passage that deviates from 2 or more baseline characteristics. Mark the specific deviation type for each flagged passage (e.g., "sudden formality spike," "passive voice creep," "tonal flatness," "vocabulary mismatch," "sentence rhythm break").

3. **Diagnose each drift** — For every flagged section, write one sentence explaining why it feels inconsistent and which voice characteristic it violates.

4. **Rewrite each drifted section** — Produce a revised version that preserves the original meaning but realigns with the baseline voice. Do not expand scope or introduce new content — only restore the existing voice.

5. **Summarize the pattern** — After addressing individual sections, note whether the drift follows a pattern (e.g., drift increases under complex arguments, drift appears in transitions, drift clusters in the conclusion) to help the author self-correct in future drafts.

## Output Format

Produce the following structure for each drifted section found:

---

**Section [#]** *(quote the first and last few words of the flagged passage)*
**Drift type:** [one-phrase label, e.g., "formality spike"]
**Why it drifts:** [one sentence]
**Original:**
> [exact original text]

**Rewrite:**
> [revised text in author's established voice]

---

After all sections, add:

**Voice Drift Pattern:** [2–4 sentences identifying whether drift is random or systemic, and one practical note for the author to watch going forward]

If no drift is detected, state clearly: "No significant voice drift detected. The draft maintains consistent tone and style throughout." Then briefly describe the 3 dominant voice characteristics observed.
