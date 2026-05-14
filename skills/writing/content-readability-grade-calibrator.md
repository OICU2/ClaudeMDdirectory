---
name: content-readability-grade-calibrator
category: writing
description: >
  Evaluates written content against a target reading grade level and rewrites sentences that fall outside the intended audience's comprehension range. Use when someone says "this is too complex for my audience," asks to simplify content for a specific grade level, wants to make writing more accessible to beginners, needs to adjust text for a particular age group, or says "rewrite this for a 6th-grade reading level."
tags: [readability, writing, editing, audience, clarity]
author: community
---

# Content Readability Grade Calibrator

This skill analyzes draft text against a specified target reading grade level and rewrites flagged sentences to match the intended audience's comprehension, vocabulary, and sentence structure expectations.

## Calibration Workflow

1. **Identify the target grade level** — Ask if not provided. Accept formats like "grade 5," "8th grade," "college level," or audience descriptions like "middle schoolers" or "medical professionals."

2. **Map grade level to concrete benchmarks:**
   - Grade 3–5: Avg sentence length 8–12 words, 1–2 syllable words preferred, no jargon
   - Grade 6–8: Avg sentence length 12–17 words, common vocabulary, minimal technical terms
   - Grade 9–12: Avg sentence length 15–20 words, subject-specific terms acceptable with context
   - College/Professional: Avg sentence length 20–25 words, domain vocabulary expected

3. **Scan the draft sentence by sentence** — Flag any sentence that violates the target level's benchmarks by being too complex (long clauses, rare vocabulary, passive-heavy) or too simple (choppy, under-developed for the audience).

4. **Rewrite each flagged sentence** using these rules:
   - Reduce syllable count by substituting simpler synonyms (e.g., "utilize" → "use," "demonstrate" → "show")
   - Break compound-complex sentences into shorter independent clauses for lower grades
   - Preserve the original meaning — do not omit facts or alter tone beyond what the grade level requires
   - Retain necessary technical terms but add brief inline definitions for lower grade targets

5. **Apply the Flesch-Kincaid heuristic mentally** — After rewriting, estimate whether the revised passage would score within the target grade band. Adjust if still out of range.

6. **Do not rewrite sentences already within range** — Only touch flagged content.

## Output Format

Produce three clearly labeled sections:

**Grade Level Target:** State the target grade level and its benchmark parameters.

**Flagged & Revised Sentences:**
List each flagged sentence in this structure:
- **Original:** [exact original sentence]
- **Issue:** [one-line diagnosis, e.g., "average 34 words, three subordinate clauses, two low-frequency terms"]
- **Revised:** [rewritten sentence]

**Revised Full Draft:**
The complete draft with all flagged sentences replaced by their revised versions and all in-range sentences left untouched. No annotations embedded in this section — clean text only.
