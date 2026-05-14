---
name: writing-sentence-opener-variety-audit
description: >
  Analyzes text for repetitive sentence-opening patterns and generates varied alternatives to improve flow and readability. Use when someone says their writing feels repetitive or monotonous, asks why their paragraphs sound robotic, wants to improve sentence variety, notices too many sentences starting with the same word, or needs help making their prose feel more dynamic.
category: writing
tags: [sentence-variety, prose-style, editing, repetition, flow]
author: community
---

# Sentence Opener Variety Audit

This skill scans submitted text for repetitive sentence-opening patterns, flags the specific offenders, and rewrites problem sentences with structurally varied alternatives.

## Audit Workflow

1. **Parse all sentences** — Split the text into individual sentences and extract the first word or phrase (up to 4 words) of each.
2. **Identify repetition** — Flag any of the following:
   - The same opening word used 3+ times in the full passage, or 2+ times in consecutive sentences.
   - The same grammatical structure repeated 3+ times consecutively (e.g., three sentences starting with a present participle, three starting with "The [noun]").
   - Overuse of "I", "The", "This", "It", or "There" as openers (more than 30% of sentences).
3. **Categorize each problem** — Label each flagged pattern by type: *repeated word*, *repeated structure*, or *overused pronoun/article*.
4. **Generate alternatives** — For each flagged sentence, produce 2 rewritten versions using different opener strategies:
   - Lead with a prepositional phrase ("After the meeting…", "Despite the delay…")
   - Lead with an adverb or adverbial clause ("Quietly, she…", "When the report arrived…")
   - Lead with a participial phrase ("Having reviewed the data…")
   - Invert subject and verb where natural ("Rarely does this approach…")
   - Lead with the object or complement ("The results, not the process, matter here.")
5. **Preserve meaning** — Rewrites must not alter the original sentence's intent, tone, or factual content.

## Output Format

Produce three clearly labeled sections:

**1. Audit Summary**
- Total sentence count
- Number of flagged sentences
- List of detected patterns (e.g., "'The' used to open 6 of 14 sentences; 3 consecutive sentences begin with 'I'")

**2. Flagged Sentences with Alternatives**
For each flagged sentence, output:
```
ORIGINAL: [original sentence]
ISSUE: [pattern type and reason flagged]
ALTERNATIVE 1: [rewritten version]
ALTERNATIVE 2: [rewritten version]
```

**3. Revised Passage (Optional)**
If the passage is under 300 words, provide a full rewritten version incorporating the best alternatives, keeping non-flagged sentences unchanged.
