---
name: tone-consistency-audit
description: >
  Analyzes a body of written content to detect tone inconsistencies, off-brand language, and stylistic drift, then delivers a structured correction report with revised examples. Use when someone says "our content sounds inconsistent," asks to "audit our brand voice," or wants to "check if our writing matches our tone guidelines." Also triggers when someone shares multiple pieces of content and asks why they feel disjointed, or wants to identify where their writing has drifted from an established style.
category: writing
tags: [tone, brand-voice, content-audit, style-consistency, editing]
author: community
---

# Tone Consistency Audit

This skill audits a body of written content against a defined or inferred tone standard, surfaces specific inconsistencies and off-brand patterns, and produces an actionable correction report with rewritten examples.

## Audit Workflow

1. **Establish the tone baseline.** If the user provides brand voice guidelines, a style guide, or example content marked as "correct," extract the defining tone attributes (e.g., formal/informal register, use of humor, sentence length patterns, pronoun choices, vocabulary tier, emotional temperature). If no baseline is provided, infer it from the majority voice across the submitted content and state your inference explicitly.

2. **Segment and catalog the content.** Break the submitted content into discrete units — paragraphs, sections, or individual pieces — and label each for reference (e.g., P1, P2, or by filename/title).

3. **Identify inconsistencies across four dimensions:**
   - **Register shifts:** Sudden swings between formal and casual language within or across pieces.
   - **Vocabulary drift:** Words or phrases that feel out of place for the brand (jargon, slang, overly technical terms, or unexpectedly plain language).
   - **Structural inconsistency:** Sentence length, punctuation habits, or paragraph rhythm that breaks the established pattern.
   - **Emotional tone mismatch:** Content that reads as colder, warmer, more aggressive, or more passive than the baseline.

4. **Score severity.** Tag each finding as:
   - 🔴 **High** — Directly contradicts brand tone; confuses or alienates the audience.
   - 🟡 **Medium** — Noticeable drift that weakens consistency over time.
   - 🟢 **Low** — Minor stylistic variation; fix if resources allow.

5. **Write corrected examples.** For every High and Medium finding, provide a side-by-side original vs. revised version. Revisions must match the established tone baseline — do not introduce new stylistic choices.

6. **Summarize root causes.** After individual findings, identify patterns: Is the drift concentrated in one content type? One author's apparent style? One topic area? Name the pattern so the user can address it at the source.

7. **Deliver actionable recommendations.** List 3–5 concrete rules or guardrails the team can apply going forward to prevent recurrence (e.g., "Avoid second-person commands in product descriptions," "Keep sentences under 20 words in social copy").

## Output Format

Produce a structured report with the following sections:

---

**Tone Baseline Summary**
2–4 bullet points defining the inferred or provided tone standard used as the audit benchmark.

**Findings**
A table or numbered list with columns: Location | Dimension | Severity | Issue Description | Original Excerpt | Revised Version.
Include all High and Medium findings; group Low findings in a summary note at the end.

**Pattern Analysis**
1–2 short paragraphs identifying where and why drift is concentrated.

**Guardrails for Consistency**
A numbered list of 3–5 specific, enforceable style rules derived from the audit findings.

---

Length scales with content volume: a single-page content audit may produce 300–500 words; a multi-document audit may run 800–1,500 words. Never pad findings — if content is largely consistent, say so and focus the report on the few genuine issues found.
