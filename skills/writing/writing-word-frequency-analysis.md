---
name: writing-word-frequency-analysis
category: writing
description: >
  Analyzes a document to identify overused words and phrases, then suggests varied alternatives to reduce repetition and strengthen writing quality. Use when someone says "my writing feels repetitive," asks to "check for overused words," wants to "vary my word choice," needs to "find repeated phrases in my document," or requests help to "reduce repetition in my writing."
tags: [writing, editing, word-choice, style, repetition]
author: community
---

# Writing Word Frequency Analysis

This skill scans a document for high-frequency words and repeated phrases, ranks them by overuse, and provides context-aware alternatives to diversify vocabulary and improve prose flow.

## Analysis Workflow

1. **Tokenize and count** — Split the text into individual words. Normalize to lowercase. Count raw frequency for every word.
2. **Filter noise** — Exclude common stop words (the, a, is, of, and, to, in, it, etc.) unless the user specifically asks to include them.
3. **Flag overused content words** — Identify any content word (noun, verb, adjective, adverb) appearing more than:
   - 3 times per 300 words in short documents (<1,000 words)
   - 5 times per 500 words in medium documents (1,000–3,000 words)
   - Proportionally scaled for longer documents
4. **Detect repeated phrases** — Identify 2–4 word phrases (n-grams) that appear 3 or more times. Flag them separately from single-word repetition.
5. **Assess context** — Before suggesting alternatives, note the word's usage context (e.g., "said" in dialogue, "important" as an intensifier, "process" as a technical term) to ensure replacements fit.
6. **Generate alternatives** — For each flagged word or phrase, provide 3–5 concrete substitutes appropriate to the document's tone (formal, casual, technical, literary).
7. **Prioritize by impact** — Sort flagged items from highest frequency to lowest. Lead with the most problematic repetitions.
8. **Preserve intentional repetition** — If a word appears in a clearly rhetorical or stylistic pattern (anaphora, refrain, defined term), note it as "possibly intentional" rather than flagging it as an error.

## Output Format

Produce a structured report with three sections:

**Section 1 — Top Overused Words**
A ranked table with columns: Word | Count | Frequency Rate | Suggested Alternatives
List the top 5–10 offenders. Include a one-line note on why each alternative fits the context.

**Section 2 — Repeated Phrases**
A list of flagged n-grams, each with: Phrase | Count | Example sentence from the text | 2–3 rewrite suggestions for that sentence.

**Section 3 — Quick Wins**
3–5 bullet points naming the single highest-impact changes the writer can make immediately to reduce repetition. Be direct and specific (e.g., "Replace 7 of your 9 uses of 'important' with: critical, essential, significant, or key — depending on context.").

Keep the full report under 600 words unless the document is very long. Use plain language. Do not rewrite the entire document unless asked.
