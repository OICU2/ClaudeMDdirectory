---
name: content-persona-voice-check
description: >
  Analyzes a finished draft against a defined audience persona profile to surface tone, vocabulary, and framing mismatches before publishing. Use when someone says "does this sound right for my audience," asks whether their draft matches a persona, wants to check if their writing fits a specific reader profile, needs to verify their content voice aligns with a target demographic, or wonders if their tone is appropriate for their intended readers.
category: writing
tags: [persona, voice, tone, audience, content-review]
author: community
---

# Content Persona Voice Check

This skill audits a written draft against a defined audience persona to identify specific mismatches in tone, vocabulary, framing, and style before the content goes live.

## Persona Voice Audit Workflow

1. **Extract the persona profile.** Identify the key attributes from whatever persona information is provided: age range, expertise level, industry, pain points, communication preferences, preferred formality level, and any stated vocabulary preferences or taboos. If no persona is provided, ask for one before proceeding.

2. **Establish baseline expectations.** From the persona profile, derive concrete voice benchmarks:
   - Expected reading level (technical jargon vs. plain language)
   - Appropriate formality register (casual/professional/academic)
   - Emotional tone (empathetic/authoritative/playful/neutral)
   - Preferred framing (problem-first vs. solution-first, aspirational vs. practical)

3. **Scan the draft section by section.** Read through the draft and flag specific passages that conflict with the persona benchmarks. Look for:
   - Vocabulary too advanced or too simplistic for the persona's expertise level
   - Tone shifts that break consistency (e.g., suddenly formal in a casual piece)
   - Jargon the persona would find alienating or condescending
   - Cultural references, analogies, or examples that would not resonate
   - Framing that addresses the wrong pain point or motivation
   - Sentence complexity mismatched to the persona's expected reading habits

4. **Categorize each mismatch by severity.**
   - **Critical:** Likely to alienate or confuse the persona; must fix
   - **Moderate:** Reduces resonance or trust; should fix
   - **Minor:** Slight off-notes; consider fixing

5. **Generate specific rewrites.** For each flagged passage, provide a revised version that corrects the mismatch while preserving the original intent.

## Output Format

Produce a structured audit report with the following sections:

**Persona Summary** (3–5 bullet points recapping the key voice expectations derived from the profile)

**Mismatch Log** (table or numbered list with):
- Location (quote the flagged phrase or sentence)
- Issue type (tone / vocabulary / framing / cultural fit)
- Severity (Critical / Moderate / Minor)
- Explanation (one sentence on why it mismatches)
- Suggested rewrite (the corrected version)

**Overall Voice Alignment Score** (a plain-language summary: Strong / Partial / Weak alignment, with a 2–3 sentence rationale)

**Top 3 Priority Fixes** (the three changes that will most improve persona alignment, listed in order of impact)

Keep the mismatch log exhaustive but concise — one line of explanation per item, no padding.
