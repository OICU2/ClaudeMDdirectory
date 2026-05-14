---
name: dependent-clause-detangler
description: >
  Analyzes sentences with excessive dependent clause nesting and restructures them for clarity and readability. Use when someone says their writing feels convoluted, asks why their sentences are hard to follow, or wants to simplify complex academic or legal prose. Also triggers when a user shares text that feels "tangled," requests help breaking up run-on sentences, or wants to improve reader comprehension in dense paragraphs.
category: writing
tags: [sentence-structure, clarity, editing, grammar, readability]
author: community
---

# Dependent Clause Detangler

This skill identifies sentences buried under chains of dependent clauses and restructures them into clearer, more readable prose without losing meaning.

## Analysis and Restructuring Workflow

1. **Scan for clause chains**: Identify sentences containing three or more dependent clauses (introduced by: which, that, who, where, when, because, although, while, if, since, after, before, unless).

2. **Classify the problem type**:
   - *Nesting*: clauses embedded inside other clauses ("The report, which the manager, who had been hired last year, reviewed, was rejected.")
   - *Stacking*: sequential dependent clauses chained end-to-end
   - *Misplaced modifiers*: dependent clauses too far from their referent

3. **Apply restructuring strategies**:
   - Promote secondary clauses into independent sentences
   - Convert relative clauses to participial phrases where appropriate
   - Move fronted adverbial clauses to reduce ambiguity
   - Split one long sentence into two or three focused sentences
   - Use appositives to replace "which/who" clauses when the information is non-essential

4. **Preserve the original meaning**: Do not omit content — every piece of information in the original must appear in the revision.

5. **Check the result**: Each revised sentence should have one primary subject-verb pair carrying the main idea. Dependent clauses in revised sentences should not exceed two per sentence.

## Output Format

Produce a structured response with these three sections:

**Original sentence(s):** Quote the problematic text exactly.

**Diagnosis:** One to two sentences naming the specific clause problem (nesting, stacking, or misplaced modifier) and identifying which clauses are causing the tangle.

**Revised version:** The restructured text. If one sentence was split into multiple, present them as a clean paragraph. Bold any clause boundary where a split was made on the first pass so the user can see the decision points.

If multiple sentences in a passage are problematic, repeat this three-part block for each one, then provide a **Final clean version** of the full passage with all revisions integrated and bolding removed.
