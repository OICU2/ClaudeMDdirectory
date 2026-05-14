---
name: multi-piece-series-consistency-checker
description: >
  Analyzes multiple pieces of content in a series to identify contradictions, drift, and misalignments across terminology, characters, facts, and tone. Use when someone says "check my series for consistency," asks whether their installments match each other, or wants to make sure a new chapter or article doesn't contradict earlier ones. Also activates when someone shares multiple drafts and asks if they "hold together" or "stay consistent."
category: writing
tags: [consistency, series, editing, continuity, proofreading]
author: community
---

# Multi-Piece Series Consistency Checker

This skill cross-references terminology, character names, stated facts, timelines, and tone across multiple installments in a content series to surface internal inconsistencies before publication.

## Consistency Audit Workflow

**Step 1: Inventory the Content**
- Accept all installments (chapters, articles, episodes, posts) as input, labeled by order or title.
- If only some installments are provided, note which are missing and flag that the audit is partial.

**Step 2: Build a Series Bible from the Content**
Extract and catalog the following from each piece:
- **Named entities**: character names, place names, brand/product names, organization names — note exact spelling and any aliases used.
- **Stated facts**: dates, ages, durations, statistics, rules of a fictional world, biographical details, causal claims.
- **Terminology**: specialized vocabulary, recurring phrases, defined concepts — note how each is worded in each installment.
- **Timeline**: any explicit or implied chronology of events.
- **Tone and voice**: formality level, narrative perspective (first/second/third), humor register, emotional tone.

**Step 3: Compare Across Installments**
- Check every entity, fact, and term cataloged in Step 2 against every other installment where it appears.
- Flag any instance where the same referent is described differently, spelled differently, given conflicting attributes, or treated with a different tone.
- Note the specific installment, location (paragraph or section if identifiable), and the conflicting values on both sides.

**Step 4: Classify Each Inconsistency**
Assign each finding one of three severity levels:
- **Critical**: Direct factual contradiction that would confuse or mislead readers (e.g., a character's age changes, a date conflicts, a rule is broken without explanation).
- **Moderate**: Terminology drift or tonal shift that undermines cohesion but doesn't create outright contradiction (e.g., a concept called "onboarding" in Part 1 becomes "orientation" in Part 3).
- **Minor**: Stylistic variation that may be intentional (e.g., slightly different sentence rhythm, optional Oxford comma use).

**Step 5: Suggest Resolutions**
For each Critical and Moderate finding, provide a specific recommended fix — which installment should change, what the standardized version should be, and why that version is preferred (e.g., it appears first, it's more precise, it matches the stated series style).

## Output Format

Produce a structured report with the following sections:

---

**Series Consistency Report**

**Installments Audited**: [List titles/labels and order]

**Series Bible Summary**: A brief bulleted list of the key entities, facts, terms, and tone baseline extracted — so the author can confirm the audit understood the material correctly.

**Inconsistencies Found**: [N total — X Critical, Y Moderate, Z Minor]

For each inconsistency:
> **[Severity] — [Category: Name / Fact / Terminology / Timeline / Tone]**
> - **Installment A** (location): [exact quote or paraphrase of the conflicting detail]
> - **Installment B** (location): [exact quote or paraphrase]
> - **Recommended fix**: [specific, actionable resolution]

**Minor Variations Log**: A compact list of minor items, noted without extended commentary, so the author can decide whether to standardize them.

**Summary of Actions Needed**: A numbered checklist of all Critical and Moderate fixes, ordered by installment, so the author can work through edits sequentially.

---

Keep the report scannable. Use the structured format above exactly — do not collapse sections or add narrative filler between findings.
