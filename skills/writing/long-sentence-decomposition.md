---
name: long-sentence-decomposition
description: >
  Breaks sentences exceeding a target word count into shorter, clearer alternatives without losing
  the original meaning or logical relationship between ideas. Use when someone says their sentences
  are too long or rambling, asks how to simplify complex writing, wants to improve readability of
  dense paragraphs, needs to split run-on sentences, or requests help making text easier to scan.
category: writing
tags: [readability, sentence-structure, clarity, editing, simplification]
author: community
---

# Long Sentence Decomposition

This skill splits overly long sentences into two or more shorter sentences that preserve the original meaning, logical flow, and tone while improving clarity and readability.

## Decomposition Workflow

1. **Identify target sentences**: Flag any sentence exceeding the target word count (default: 25 words). If the user specifies a different threshold, use that instead.

2. **Analyze sentence structure**: Identify the core clauses, conjunctions, embedded parentheticals, and logical connectors (e.g., "which," "although," "because," "however," "as well as").

3. **Determine the logical relationship**: Classify how the ideas connect — cause/effect, contrast, sequence, elaboration, or condition. This relationship must survive the split.

4. **Apply decomposition rules**:
   - Split at conjunctions ("and," "but," "so," "yet") when both clauses can stand alone.
   - Convert relative clauses ("which," "who," "that") into separate sentences with a repeated noun or pronoun.
   - Move parenthetical information into its own sentence or restructure as a standalone point.
   - Use transition words ("However," "As a result," "For example," "This means") to maintain logical flow between the new sentences.
   - Never split a sentence in a way that makes either fragment ambiguous or incomplete.

5. **Verify meaning preservation**: Confirm that all original information, qualifications, and nuance are present across the resulting sentences. Nothing should be dropped or distorted.

6. **Check tone consistency**: Match the register and voice of the surrounding text — do not simplify vocabulary or shift formality unless asked.

## Output Format

For each sentence decomposed, produce:

**Original sentence** *(word count)*:
> [Paste the original sentence here]

**Decomposed version**:
> [New sentence 1.]
> [New sentence 2.]
> [New sentence 3, if needed.]

**What changed**: One line explaining the split point and how the logical relationship was preserved.

---

If processing a full paragraph or document, group all decomposed results together and append a brief summary noting how many sentences were split and the average word count before and after.
