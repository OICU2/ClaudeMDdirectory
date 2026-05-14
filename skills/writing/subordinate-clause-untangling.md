---
name: subordinate-clause-untangling
description: >
  Detects and rewrites sentences with deeply nested or stacked subordinate clauses that obscure meaning
  and slow reader comprehension. Use when someone says their writing feels hard to follow, asks why
  their sentences seem tangled or confusing, wants to simplify complex academic or legal prose, or
  needs help breaking apart run-on sentences that bury the main point.
category: writing
tags: [sentence-clarity, syntax, readability, editing, prose]
author: community
---

# Subordinate Clause Untangling

This skill identifies sentences with excessive or poorly ordered subordinate clauses and rewrites them for clarity, keeping the original meaning intact.

## Detection and Rewriting Workflow

1. **Scan for problem patterns** — Flag sentences that contain:
   - Three or more subordinate clauses in a single sentence
   - Embedded clauses that interrupt the main subject-verb relationship (e.g., "The report, which the team, after weeks of delay, had finally submitted, was rejected")
   - Stacked relative clauses ("the man who knew the woman who owned the dog that...")
   - Clause chains where each clause depends on the previous ("because X, which meant Y, so that Z could...")

2. **Identify the core claim** — Strip away all subordinate material and locate the main subject and main verb. This becomes the anchor of the rewrite.

3. **Categorize subordinate content** — For each subordinate clause, determine:
   - Is it essential to the sentence's meaning (restrictive) or supplemental (non-restrictive)?
   - Does it express time, cause, condition, contrast, or description?
   - Can it become its own sentence, a participial phrase, or a front-loaded adverbial?

4. **Rewrite using these strategies**:
   - Split long sentences at natural logical breaks — one idea per sentence
   - Move long subordinate clauses before or after the main clause, not inside it
   - Convert relative clauses to appositives or participial phrases where possible
   - Use pronouns or short transitions (however, because, after, although) at sentence starts instead of embedding connectors mid-sentence

5. **Verify fidelity** — Confirm the rewritten version preserves all original information and logical relationships. Do not omit nuance to achieve brevity.

6. **Check rhythm** — Vary sentence length so the rewrite doesn't become choppy. One long sentence followed by a short one often works better than three medium ones.

## Output Format

For each problematic sentence, provide:

**Original:**
> [Quoted original sentence]

**Problem:** [One line identifying the specific clause issue — e.g., "Three nested relative clauses interrupt the main verb"]

**Rewritten:**
> [Rewritten version — typically 2–4 sentences]

**What changed:** [1–2 sentences explaining the structural move made, e.g., "Split at the causal break; moved the temporal clause to the front of sentence two"]

If reviewing a full passage, list all flagged sentences first, then provide rewrites in order. End with a one-paragraph summary of the dominant clause patterns found and a single actionable tip for the writer to avoid them going forward.
