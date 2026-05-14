---
name: content-word-repetition-heatmap
description: >
  Analyzes a piece of writing to surface overused words and phrases, then provides contextually grounded synonym suggestions to strengthen lexical variety. Use when someone says "my writing feels repetitive," asks about "words I'm overusing," or wants to "improve word variety in my draft." Also triggers when a user shares a draft and asks for a "word repetition check" or wants to "find repeated phrases."
category: writing
tags: [writing, editing, vocabulary, style, revision]
author: community
---

# Content Word Repetition Heatmap

This skill scans a draft for lexical repetition, ranks overused words and phrases by frequency and impact, and offers targeted synonym alternatives that fit the surrounding context.

## Analysis Workflow

1. **Tokenize and count**: Identify all content words (nouns, verbs, adjectives, adverbs). Exclude function words (the, and, is, of, etc.) unless they form part of a repeated phrase.
2. **Flag high-frequency offenders**: Mark any content word or 2–4 word phrase appearing more than 3 times per 500 words, or any word appearing twice within the same paragraph.
3. **Rank by severity**: Prioritize by (a) raw frequency, (b) proximity of repetitions (same sentence or adjacent sentences rank highest), and (c) visibility — words in topic-prominent positions (opening/closing sentences) count more.
4. **Generate contextual synonyms**: For each flagged word, pull the surrounding sentence(s) and produce 2–4 synonym or rephrasing options that preserve the original meaning and register. Do not suggest synonyms that would clash with the text's tone (e.g., no formal Latinate words in casual copy).
5. **Note intentional repetition exceptions**: If a word appears to be a deliberate stylistic or rhetorical device (anaphora, refrain, defined term), flag it separately as "possibly intentional — verify before changing."

## Output Format

Produce a structured report with three sections:

**1. Repetition Heatmap Table**
| Word / Phrase | Count | Severity (High / Medium / Low) | Locations (paragraph or line refs) |
|---|---|---|---|
List all flagged items, sorted by severity descending.

**2. Synonym Suggestions**
For each High and Medium severity item, provide a block:
- **Overused word/phrase**: `[word]`
- **Example in context**: _"…the sentence where it appears…"_
- **Suggested alternatives**: option 1, option 2, option 3 (one-line note on register or nuance difference if relevant)

**3. Possibly Intentional Repetitions**
Bullet list of any terms flagged as likely deliberate, with a one-sentence reason.

Keep the report concise. For drafts under 500 words, limit synonym suggestions to the top 5 offenders. For drafts over 1,500 words, group repetitions by section rather than listing every occurrence individually.
