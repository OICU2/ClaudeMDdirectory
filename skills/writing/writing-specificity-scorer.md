---
name: writing-specificity-scorer
description: >
  Identifies vague, abstract, or weasel-word language in a piece of writing and replaces it with concrete, specific, and credible alternatives. Use when someone says "make this more convincing," asks to "strengthen the writing," wants to "remove fluff from my draft," needs to "make this sound more credible," or says "this feels too vague." Scores each paragraph for specificity and flags the weakest language first.
category: writing
tags: [editing, clarity, credibility, specificity, revision]
author: community
---

# Writing Specificity Scorer

This skill audits a draft for vague or abstract language, scores each section by specificity, and provides concrete replacement suggestions that increase reader trust and credibility.

## Specificity Audit Workflow

1. **Read the full draft** before marking anything. Understand the context, audience, and purpose.

2. **Identify vague language patterns** — flag every instance of:
   - Weasel words: "many," "some," "often," "a lot," "various," "several," "significant"
   - Hedge phrases: "kind of," "sort of," "in a way," "basically," "generally speaking"
   - Empty intensifiers: "very," "extremely," "incredibly," "really"
   - Abstract nouns replacing action: "improvement," "enhancement," "optimization," "leverage," "synergy"
   - Timeless claims with no evidence: "studies show," "experts say," "research suggests"
   - Passive constructions that hide the actor: "it was decided," "mistakes were made"

3. **Score each paragraph** on a 1–5 specificity scale:
   - **5 — Concrete**: Named actors, exact numbers, dates, direct quotes, measurable outcomes
   - **4 — Grounded**: Clear examples, named sources, defined timeframes
   - **3 — Mixed**: Some specifics but padded with vague language
   - **2 — Vague**: Mostly abstract claims with occasional anchors
   - **1 — Empty**: No verifiable or concrete content whatsoever

4. **Prioritize by impact** — fix paragraphs scoring 1–2 first, then 3s. Leave 4–5s untouched unless asked.

5. **Generate replacements** — for each flagged phrase, write a specific alternative. Follow these rules:
   - Replace quantities: "many users" → "73% of users in the Q3 survey" or "11 of 15 beta testers"
   - Replace vague time: "recently" → "in the last 90 days" or "since March 2024"
   - Replace abstract verbs: "leverage our platform" → "use the dashboard to track X"
   - Replace empty claims: "studies show" → name the study, year, and finding
   - If real data is unavailable, mark the replacement with `[INSERT: specific data needed]`

6. **Do not rewrite for style** — only increase specificity. Preserve the author's voice.

## Output Format

Produce a structured report in three sections:

**Section 1 — Specificity Scorecard**
A table listing each paragraph (by number or opening phrase), its score (1–5), and a one-line reason for the score.

| Paragraph | Score | Reason |
|-----------|-------|--------|
| "Our solution helps teams..." | 2 | No named teams, no defined help, no outcome |

**Section 2 — Flagged Language with Replacements**
List each flagged phrase in order of priority (lowest-scoring paragraphs first). Format each entry as:

- **Original**: exact quoted phrase
- **Problem**: one sentence explaining why it's vague
- **Replacement**: specific rewrite or `[INSERT: what data is needed]`

**Section 3 — Revised Draft (Optional)**
If the user asks for a full rewrite, produce the complete revised draft with all replacements applied inline. Mark every changed phrase in **bold** so the author can review each change.

Keep the scorecard to one table. Keep each replacement note to three lines maximum. No commentary outside these three sections.
