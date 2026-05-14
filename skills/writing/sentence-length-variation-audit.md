---
name: sentence-length-variation-audit
description: >
  Analyzes writing samples to identify monotonous sentence length patterns and recommends structural edits to improve rhythm and reader engagement. Use when someone says their writing feels flat or robotic, asks why their prose lacks flow, wants to improve the pacing of an essay or article, notices their sentences all sound the same, or requests a rhythm audit of their writing.
category: writing
tags: [prose-rhythm, sentence-structure, editing]
author: community
---

# Sentence Length Variation Audit

This skill audits a piece of writing for sentence length monotony and delivers specific structural edits to create better rhythm and reader engagement.

## Audit Workflow

1. **Count and classify sentences** — Label each sentence by word count: Short (1–8 words), Medium (9–18 words), Long (19+ words).

2. **Map the pattern** — List the sequence of sentence types (e.g., M-M-M-M-L-M-M). Identify runs of 3 or more sentences of the same category as monotony zones.

3. **Calculate distribution** — Compute the percentage of Short, Medium, and Long sentences. Flag if any single category exceeds 65% of total sentences.

4. **Identify rhythm problems** — Note specific locations where:
   - Multiple long sentences stack without relief
   - Short sentences cluster without a longer anchor
   - Paragraphs open and close with the same sentence length

5. **Generate targeted edits** — For each flagged zone, provide one of the following fixes:
   - Split a long sentence into two shorter ones (show the rewrite)
   - Merge two short sentences into one compound or complex sentence (show the rewrite)
   - Suggest moving a short sentence to create a deliberate punch after a long one

6. **Apply the 1-2-3 rhythm rule** — Recommend at least one place per paragraph where a Short sentence follows a Long sentence to create contrast.

## Output Format

Produce three sections:

**1. Length Map**
A sentence-by-sentence table with columns: Sentence # | First 5 words | Word Count | Category (S/M/L)

**2. Diagnosis**
- Distribution percentages (Short / Medium / Long)
- List of monotony zones with sentence numbers
- One-sentence summary of the dominant rhythm problem

**3. Revision Recommendations**
- 3–6 specific rewrites, each showing: Location (sentence #) → Problem → Suggested revision (full sentence)
- One closing note on the structural pattern to watch in future drafts

Keep the full output under 600 words unless the submitted writing sample exceeds 800 words.
