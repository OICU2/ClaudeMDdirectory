---
name: subordinate-clause-density-audit
description: >
  Analyzes a draft for paragraphs overloaded with subordinate clauses that hurt readability and flow. Use when someone says "my writing feels tangled," asks about why sentences feel hard to follow, or wants to simplify complex prose. Also triggers when someone wants to improve sentence variety, fix dense academic writing, or clean up a draft before publishing.
category: writing
tags: [readability, sentence-structure, editing]
author: community
---

# Subordinate Clause Density Audit

This skill scans a draft paragraph-by-paragraph, flags sentences with excessive subordinate clause stacking, and provides restructured alternatives that preserve meaning while improving clarity.

## Audit Workflow

1. **Parse the draft by paragraph.** Treat each paragraph as a discrete unit for analysis.

2. **Identify subordinate clauses.** Look for constructions introduced by subordinating conjunctions (because, although, while, when, since, if, unless, that, which, who) and participial or relative clauses embedded mid-sentence.

3. **Apply the density threshold.** Flag any sentence containing three or more subordinate clauses, or any sentence where a subordinate clause is itself nested inside another subordinate clause (double nesting).

4. **Score each paragraph.** Count flagged sentences as a ratio of total sentences (e.g., 2 of 4 sentences flagged = high density).

5. **Restructure flagged sentences.** For each flagged sentence, produce one or two rewritten alternatives using these techniques:
   - Split into two or more shorter sentences
   - Promote a buried clause to a standalone sentence
   - Replace a relative clause with a direct noun modifier
   - Use a colon or dash to separate a dependent idea cleanly

6. **Preserve the author's voice.** Do not change vocabulary, tone, or meaning. Only restructure syntax.

## Output Format

Produce a structured report with the following sections:

**Summary**
- Total paragraphs scanned
- Number of paragraphs flagged (with density rating: Low / Medium / High)
- Overall readability assessment in one sentence

**Paragraph-by-Paragraph Findings**
For each flagged paragraph:
- `Paragraph [#]:` — paste the original text
- `Density:` — Low / Medium / High + brief note (e.g., "3 of 5 sentences flagged, one double-nested clause")
- `Flagged Sentence(s):` — quote each problematic sentence
- `Why it's dense:` — one line identifying the specific clause stacking issue
- `Suggested Rewrite(s):` — one or two restructured versions, clearly labeled

**Clean paragraphs** (those below the threshold) are acknowledged in a single line: "Paragraphs X, Y, Z: No issues found."

**Quick Reference**
A bulleted list of the top 3 restructuring moves used, so the author can apply them independently going forward.
