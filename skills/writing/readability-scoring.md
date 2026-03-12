---
name: readability-scoring
description: >
  Analyzes written content using established readability formulas to score complexity and recommend targeted simplifications. Use when someone says "check how readable this is," asks "is this too complex for my audience," wants to simplify their writing for a specific group, needs a readability score for a document, or wonders if their text is easy enough to understand.
category: writing
tags: [readability, flesch-kincaid, gunning-fog, writing-analysis, simplification]
author: community
---

# Readability Scoring

Scores written content against multiple readability formulas and delivers sentence-level simplification suggestions matched to a target audience.

## Readability Analysis Workflow

1. **Identify the target audience** — Ask if not provided (e.g., general public, 8th graders, medical professionals, executives). Default to general adult audience (8th-grade reading level) if unspecified.

2. **Calculate readability scores** — Apply the following formulas to the submitted text:
   - **Flesch Reading Ease**: `206.835 − 1.015 × (words/sentences) − 84.6 × (syllables/words)`. Score 0–100; higher = easier. Target 60–70 for general audiences.
   - **Flesch-Kincaid Grade Level**: `0.39 × (words/sentences) + 11.8 × (syllables/words) − 15.59`. Output as U.S. school grade equivalent.
   - **Gunning Fog Index**: `0.4 × [(words/sentences) + 100 × (complex words/words)]`. Complex words = 3+ syllables, excluding proper nouns and compound words. Output as grade level.
   - **Average Sentence Length (ASL)**: Total words ÷ total sentences. Flag if ASL > 20 words.

3. **Benchmark against target audience** — Map the audience to an acceptable grade-level range:
   - General public / consumer: Grade 6–8 (Flesch 60–70)
   - High school students: Grade 8–10
   - College-educated adults: Grade 10–12
   - Technical/professional: Grade 12–14
   Flag any formula result that exceeds the target range.

4. **Identify problem sentences** — Scan the text and flag sentences that:
   - Exceed 25 words
   - Contain 3 or more polysyllabic (3+ syllable) words
   - Use passive voice unnecessarily
   - Contain nominalized verbs (e.g., "make a decision" → "decide")

5. **Generate sentence-level rewrites** — For each flagged sentence, provide:
   - The original sentence
   - One simplified rewrite at the target reading level
   - A one-line note explaining the change (e.g., "Split into two sentences," "Replaced 'utilization' with 'use'")

6. **Summarize overall recommendations** — Identify the top 3 structural patterns inflating complexity (e.g., overuse of passive voice, long subordinate clauses, jargon clusters) and give one actionable fix for each.

## Output Format

Produce a structured report with the following sections:

**Readability Scores**
| Formula | Score | Grade Level | Target Range | Status |
|---|---|---|---|---|
| Flesch Reading Ease | [score] | — | [range] | ✅ / ⚠️ |
| Flesch-Kincaid GL | — | [grade] | [range] | ✅ / ⚠️ |
| Gunning Fog | — | [grade] | [range] | ✅ / ⚠️ |
| Avg Sentence Length | [words] | — | ≤20 words | ✅ / ⚠️ |

**Flagged Sentences** (limit to top 5 most complex)
For each:
- 🔴 **Original:** [sentence]
- ✅ **Simplified:** [rewrite]
- 📝 **Change:** [one-line explanation]

**Top 3 Patterns to Fix**
Numbered list: pattern name → specific fix with example.

**Summary**
Two sentences: overall complexity verdict and the single highest-impact change the writer
