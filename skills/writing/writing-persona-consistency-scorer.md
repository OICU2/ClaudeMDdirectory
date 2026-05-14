---
name: writing-persona-consistency-scorer
description: >
  Evaluates whether a piece of writing maintains a consistent first-person or third-person narrative persona throughout. Use when someone says "check my story's perspective," asks whether their writing stays in the right point of view, wants to find POV shifts in their draft, needs to verify narrator consistency, or asks if their essay keeps a consistent voice.
category: writing
tags: [writing, narrative, point-of-view, consistency, editing]
author: community
---

# Persona Consistency Scorer

This skill analyzes a piece of writing for narrative persona consistency, identifying POV shifts and scoring how consistently the author maintains their chosen first-person or third-person perspective.

## Analysis Workflow

1. **Identify the declared or implied persona** — Determine from the opening paragraph whether the text is written in first-person (I, me, my, we), third-person limited (he/she/they focused on one character), or third-person omniscient (broad narrator access).

2. **Scan for persona violations** — Read through the full text and flag every sentence or passage where the narrative voice breaks from the established persona. Common violations include:
   - First-person text suddenly referencing "the narrator" in third-person
   - Third-person text slipping into "I" or "we"
   - Omniscient narration suddenly becoming ignorant of a character's thoughts without justification
   - Second-person intrusions ("you") in a first- or third-person piece

3. **Categorize each violation by severity**:
   - **Minor**: A single word or pronoun slip that is likely a typo
   - **Moderate**: A sentence or two that breaks perspective
   - **Major**: A full paragraph or scene written from the wrong persona

4. **Count and locate violations** — Record the exact quote, location (paragraph number or line), and severity for each violation found.

5. **Calculate a consistency score** — Use the formula: `Score = 100 - (Minor × 2) - (Moderate × 8) - (Major × 20)`, floored at 0.

6. **Identify patterns** — Note whether violations cluster in a specific section, suggesting a structural problem rather than isolated errors.

## Output Format

Produce a structured report with the following sections:

**Persona Consistency Report**

- **Detected Persona**: State the identified narrative persona (e.g., First-Person Singular, Third-Person Limited)
- **Consistency Score**: `XX/100` with a one-line label (90–100: Highly Consistent, 70–89: Mostly Consistent, 50–69: Needs Revision, below 50: Significant Restructuring Required)
- **Total Violations**: Count broken down by severity (e.g., 2 Minor, 1 Moderate, 0 Major)

**Violations Found** (table or numbered list):
| # | Location | Quoted Text | Violation Type | Severity |
|---|----------|-------------|----------------|----------|
| 1 | Para 3   | "…the narrator then walked…" | Third-person slip in first-person text | Moderate |

**Pattern Analysis**: 1–3 sentences noting whether violations are scattered or concentrated, and what likely caused them (e.g., tense changes, dialogue transitions, scene breaks).

**Top Recommendations**: 3 specific, actionable edits the writer should make first, referencing the exact violation locations.

If no violations are found, confirm the score as 100/100 and briefly describe what the writer did well to maintain consistency.
