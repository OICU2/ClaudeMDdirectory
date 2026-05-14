---
name: fact-density-calibration
description: >
  Analyzes written content to measure the ratio of concrete facts, data points, and specific details against vague or general assertions, then flags paragraphs that need stronger evidentiary support. Use when someone says "my writing feels too vague," asks whether their piece has enough specifics, or wants to make their argument more credible. Also activate when someone wonders if their claims are well-supported or asks for help strengthening the evidence in their writing.
category: writing
tags: [analysis, editing, clarity, evidence, nonfiction]
author: community
---

# Fact Density Calibration

This skill audits a piece of writing paragraph by paragraph, scoring each on its ratio of concrete facts to general assertions, and returns a prioritized list of sections that need more specifics.

## Analysis Workflow

1. **Segment the text** — Split the input into discrete paragraphs or logical sections. Number them sequentially.

2. **Classify each sentence** — For every sentence, assign it to one of two categories:
   - **Concrete** (C): Contains a named person, place, organization, date, statistic, dollar amount, measurement, direct quote, or verifiable event.
   - **General** (G): Contains opinions, broad trends, vague qualifiers ("many," "often," "significant"), or claims without anchoring specifics.

3. **Score each paragraph** — Calculate a Fact Density Score (FDS) as `C / (C + G)` expressed as a percentage. Round to the nearest whole number.

4. **Benchmark against thresholds**:
   - **70–100%** → High density. Flag only if claims seem unsupported by context.
   - **40–69%** → Moderate density. Note which general claims most need a fact anchor.
   - **0–39%** → Low density. Mark as a priority revision target.

5. **Identify the weakest assertion per low-density paragraph** — Pick the single most consequential general claim and explain what type of specific detail would strengthen it (statistic, named example, date, study citation, etc.).

6. **Generate an overall document score** — Average the paragraph FDS values and summarize the document's general evidence posture.

## Output Format

Produce a structured report with these sections:

**Overall Fact Density Score:** `XX%` — one sentence characterizing the document's evidence level.

**Paragraph-by-Paragraph Breakdown:**
For each paragraph, output a table row or labeled block:
```
¶[N] — FDS: XX% | [High / Moderate / Low]
Weakest claim: "[quoted or paraphrased sentence]"
Suggested fix: [specific type of detail to add and why it matters]
```
Skip the "Weakest claim" and "Suggested fix" lines for High-density paragraphs unless there is a notable issue.

**Priority Revision List:**
A ranked list (most urgent first) of paragraph numbers scoring below 40%, each with a one-line action item.

**Quick Wins:**
Up to three specific sentences from Moderate-density paragraphs where inserting a single statistic or named example would produce the highest credibility lift.

Keep the full report under 600 words unless the input text is exceptionally long (over 1,500 words), in which case scale proportionally.
