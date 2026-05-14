---
name: reading-level-calibration
description: >
  Analyzes a draft and rewrites it to match a specific target reading grade level while preserving
  all factual accuracy and nuance. Use when someone says "simplify this for a general audience,"
  asks to "make this easier to read," wants to "adjust the reading level," needs content "written
  for a 6th grader," or requests to "make this more accessible without dumbing it down."
category: writing
tags: [readability, accessibility, plain-language, editing, grade-level]
author: community
---

# Reading Level Calibration

This skill analyzes a piece of writing, measures its current readability, and rewrites it to hit a target grade level without sacrificing accuracy, nuance, or the author's original meaning.

## Calibration Workflow

1. **Assess the input**: Identify the current approximate grade level using Flesch-Kincaid indicators — sentence length, syllable count per word, passive voice frequency, and jargon density.

2. **Identify the target level**: If not specified, ask. Common targets:
   - Grade 5–6: General public, consumer-facing content
   - Grade 8–9: Educated non-specialist readers
   - Grade 12: Professional or technical audiences
   - Grade 16+: Academic or expert audiences

3. **Diagnose the gap**: Note specific problem areas:
   - Sentences over 20 words that can be split
   - Latinate or multisyllabic words with simpler synonyms
   - Passive constructions that obscure the subject
   - Unexplained jargon, acronyms, or domain terms
   - Nested clauses and embedded qualifications

4. **Rewrite with constraints**:
   - Preserve every factual claim, data point, and logical relationship
   - Replace complex words only when a simpler word carries the same meaning
   - Break long sentences; do not drop their content
   - Define unavoidable technical terms inline rather than removing them
   - Maintain the author's tone (formal, conversational, authoritative) at the new level

5. **Verify the output**: Check that:
   - No information was lost or distorted
   - The rewrite actually hits the target level (shorter sentences, lower avg syllable count)
   - Nuance is preserved through word choice and sentence structure, not complexity

## Output Format

Produce three sections:

**Readability Analysis** (2–4 bullet points)
- Estimated current grade level and key reasons (avg sentence length, dominant vocabulary tier, jargon count)

**Rewritten Draft**
- Full rewrite at the target grade level, formatted identically to the original (paragraphs, lists, headers preserved)

**Changes Summary** (bullet list)
- Specific substitutions made: words replaced, sentences split, terms defined — with brief rationale for each decision
- Flag any terms that could not be simplified without loss of accuracy, and explain why they were kept
