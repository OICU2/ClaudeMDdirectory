---
name: sentence-variety-analysis
description: >
  Audits writing for repetitive sentence length and structure, then rewrites flagged passages to improve rhythm and reader engagement. Use when someone says "my writing feels monotonous," asks about sentence variety, wants to improve the flow of their prose, says "this sounds robotic or flat," or needs help making their writing more dynamic and engaging.
category: writing
tags: [sentence-structure, rhythm, prose-editing, readability, style]
author: community
---

# Sentence Variety Analysis

This skill scans a passage for structural and length repetition in sentences, flags problem areas, and rewrites them to create better rhythm and reader engagement.

## Analysis and Rewrite Workflow

1. **Measure sentence lengths**: Count words per sentence across the full passage. Flag any run of 3+ consecutive sentences within 2 words of the same length.

2. **Identify structural patterns**: Detect repeated sentence openings (same subject type, same word, same grammatical construction). Flag any pattern appearing 3+ times in 5 consecutive sentences.

3. **Classify sentence types**: Label each sentence as simple, compound, complex, or compound-complex. Flag sections where the same type appears 4+ times consecutively.

4. **Score the passage**: Assign a variety score (Low / Medium / High) based on the ratio of flagged sentences to total sentences.
   - 0–20% flagged → High variety
   - 21–50% flagged → Medium variety
   - 51%+ flagged → Low variety

5. **Rewrite flagged passages**: For each flagged section, produce a rewritten version that:
   - Alternates between short punchy sentences (under 10 words) and longer flowing ones (20+ words)
   - Varies sentence openers: subject-first, participial phrase, prepositional phrase, subordinate clause
   - Mixes sentence types so no single type repeats more than twice in a row
   - Preserves the original meaning and tone exactly

6. **Explain each change**: For every rewritten passage, add a one-line note describing what structural change was made and why it improves rhythm.

## Output Format

Produce three clearly labeled sections:

**1. Diagnosis**
- Variety score with label (Low / Medium / High)
- Bulleted list of flagged issues, each citing the specific sentences by number and naming the pattern (e.g., "Sentences 4–7: all begin with subject + verb, all between 12–14 words")

**2. Rewritten Passages**
- Show original flagged passage in a blockquote
- Follow immediately with the rewritten version in plain text
- Include a one-line explanation beneath each rewrite

**3. Summary Tips**
- 3–5 concrete, passage-specific recommendations the writer can apply going forward (not generic advice)
