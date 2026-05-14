---
name: content-formality-calibration-audit
description: >
  Measures the formality level of a draft against a target audience profile and rewrites flagged passages to match the intended register. Use when someone says "this sounds too stiff for our audience," asks whether their writing matches the right tone, or wants to adjust how formal or casual their content feels. Also triggers when someone mentions their draft feels off-brand, too academic, or too casual for a professional context.
category: writing
tags: [formality, tone, register, audience, editing]
author: community
---

# Content Formality Calibration Audit

This skill analyzes a piece of writing against a defined audience profile, scores its formality register, flags mismatched passages, and rewrites them to align with the intended tone.

## Audit Workflow

1. **Identify the target audience profile.** Ask the user to specify the intended audience if not provided (e.g., C-suite executives, college students, technical engineers, general consumers). Note the expected register: formal, semi-formal, conversational, or casual.

2. **Assign an overall formality score.** Read the full draft and score it on a 1–5 scale:
   - 1 = Highly casual (slang, contractions everywhere, fragmented sentences)
   - 2 = Conversational (relaxed, friendly, some contractions)
   - 3 = Semi-formal (clear, professional but approachable)
   - 4 = Formal (precise, structured, minimal contractions)
   - 5 = Highly formal (academic or legal register, passive voice, nominalization)

3. **Flag mismatched passages.** Identify every sentence or paragraph that deviates from the target register. Mark each with:
   - The original text
   - Why it mismatches (too stiff, too casual, jargon mismatch, tone inconsistency)
   - A formality score for that passage

4. **Rewrite each flagged passage.** Produce a revised version calibrated to the target register. Preserve the original meaning and key information. Do not add or remove facts.

5. **Apply register-specific rules during rewriting:**
   - *Moving toward casual:* Use contractions, active voice, second person ("you"), shorter sentences, plain vocabulary.
   - *Moving toward formal:* Remove contractions, prefer nominalized verbs (use → utilization only when appropriate), use third person or passive where convention demands, increase sentence complexity with subordinate clauses.
   - *Semi-formal target:* Balance clarity and professionalism — active voice, moderate sentence length, occasional contractions, no slang.

6. **Summarize the calibration gap.** State the delta between the draft's score and the target score, and note any recurring patterns (e.g., "overuse of passive voice throughout" or "informal hedges like 'kind of' appear 7 times").

## Output Format

Produce a structured audit report with the following sections:

**Formality Audit Report**

- **Target Audience:** [stated audience]
- **Target Register:** [casual / conversational / semi-formal / formal / highly formal]
- **Draft Formality Score:** [1–5 with one-line justification]
- **Calibration Gap:** [e.g., "Draft scores 2; target is 4 — needs significant formalization"]

**Flagged Passages**

For each flagged item:
```
ORIGINAL: [exact quote]
ISSUE: [one sentence explaining the mismatch]
PASSAGE SCORE: [1–5]
REVISED: [rewritten passage]
```

**Pattern Summary**
- Bullet list of recurring formality issues found across the draft (3–6 bullets max)
- One closing sentence recommending whether a full rewrite or targeted edits are sufficient

Keep the report scannable. Use the exact structure above. Do not summarize the user's content back to them beyond what is needed to identify the issue.
