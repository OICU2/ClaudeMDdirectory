---
name: paragraph-length-variation-audit
category: writing
description: >
  Analyzes a document for paragraph length monotony and recommends structural changes to improve pacing, rhythm, and reader engagement. Use when someone says their writing feels flat or repetitive, asks why their document is hard to read, wants to improve the flow of an essay or article, notices their paragraphs all look the same, or needs help making their writing feel more dynamic.
tags: [writing, editing, structure, readability, rhythm]
author: community
---

# Paragraph Length Variation Audit

This skill audits a document's paragraph structure to identify monotonous length patterns and produces specific restructuring recommendations that improve reading rhythm and engagement.

## Audit Workflow

1. **Count and classify paragraphs** — Label each paragraph by sentence count: micro (1 sentence), short (2–3 sentences), medium (4–5 sentences), long (6+ sentences).

2. **Map the length pattern** — Write out the sequence as a string of labels (e.g., M-M-M-M-L-M-M) to make repetition visible at a glance.

3. **Identify problem zones** — Flag any run of 3+ consecutive paragraphs of the same class. Note sections where long paragraphs stack without relief, and sections where micro/short paragraphs cluster without a longer anchor nearby.

4. **Assess purpose-fit** — Check whether paragraph length matches its function: arguments and explanations warrant medium-to-long paragraphs; transitions, punches, and conclusions benefit from short or micro paragraphs.

5. **Generate targeted recommendations** — For each flagged zone, specify:
   - Which paragraph(s) to split, merge, or rewrite
   - The target length class after restructuring
   - A one-sentence rationale tied to pacing or reader attention
   - An optional rewrite example for the most critical change

6. **Propose a revised length map** — Show what the corrected sequence would look like (e.g., M-S-L-S-M-Micro-M) so the writer can see the intended rhythm.

## Output Format

Produce a structured report with these sections:

**Current Length Map**
A labeled sequence of every paragraph (e.g., `P1:M | P2:M | P3:L | P4:M | P5:M | P6:M`).

**Problem Zones**
A bulleted list of flagged zones. Each bullet: paragraph numbers, the problem type (e.g., "five consecutive medium paragraphs"), and the reader-experience impact (e.g., "creates a droning, undifferentiated pace").

**Recommendations**
A numbered list of specific changes. Each item includes: target paragraph(s), action (split / merge / shorten / expand), new target length class, rationale, and an optional one-paragraph rewrite example.

**Revised Length Map**
The proposed sequence after all changes are applied, showing the improved rhythm pattern.

Keep the report concise. Use plain language. Limit rewrite examples to the 1–2 most impactful changes unless the writer asks for more.
