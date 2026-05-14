---
name: writing-feedback-prioritization-matrix
description: >
  Analyzes a collection of editorial feedback comments and ranks them by their potential impact on clarity, accuracy, and persuasiveness to help writers tackle revisions in the most effective order. Use when someone says "I have a lot of feedback and don't know where to start," asks about which edits matter most, wants to prioritize revision comments, needs to triage editorial notes, or is overwhelmed by conflicting feedback on a piece of writing.
category: writing
tags: [editing, revision, feedback, prioritization, editorial]
author: community
---

# Writing Feedback Prioritization Matrix

This skill takes a set of editorial feedback comments and produces a ranked action plan so writers know exactly which revisions to tackle first for maximum impact.

## Prioritization Workflow

1. **Collect and parse all feedback** — Ask the user to paste all feedback comments if not already provided. Accept any format: bullet points, inline comments, numbered lists, or prose notes.

2. **Categorize each comment** by type:
   - **Structural** — argument order, section organization, missing sections
   - **Accuracy** — factual errors, unsupported claims, misleading statements
   - **Clarity** — confusing sentences, undefined terms, ambiguous pronouns
   - **Persuasiveness** — weak evidence, missing calls to action, tone mismatches
   - **Style/Polish** — word choice, sentence variety, voice consistency
   - **Mechanical** — grammar, spelling, punctuation, formatting

3. **Score each comment** on three dimensions (1–3 scale):
   - **Clarity impact**: Does fixing this make the piece easier to understand?
   - **Accuracy impact**: Does fixing this make the piece more truthful or credible?
   - **Persuasiveness impact**: Does fixing this make the piece more compelling or actionable?

4. **Calculate a priority score** for each comment: sum the three dimension scores (max 9). Break ties by placing Accuracy issues above Clarity above Persuasiveness above Style above Mechanical.

5. **Group by urgency tier**:
   - **Tier 1 (Must Fix First)** — scores 7–9 or any Accuracy issue regardless of score
   - **Tier 2 (High Value)** — scores 4–6
   - **Tier 3 (Polish Pass)** — scores 3 or below

6. **Flag conflicts** — If two feedback items contradict each other, note the conflict explicitly and recommend which to follow based on the document's stated purpose or audience.

7. **Estimate revision effort** for each item: Low (< 5 min), Medium (5–20 min), High (> 20 min). Surface any High-effort items in Tier 1 so the writer can schedule time accordingly.

## Output Format

Produce a structured matrix with the following sections:

**Summary Line**
One sentence stating the total number of feedback items, the tier breakdown, and the single most critical revision.

**Prioritization Matrix Table**
| # | Feedback Summary | Type | Clarity | Accuracy | Persuasion | Score | Tier | Effort |
|---|-----------------|------|---------|----------|------------|-------|------|--------|
List all items ranked highest to lowest score within each tier.

**Tier 1 — Must Fix First**
Bullet list with each item, a one-sentence explanation of why it is critical, and a concrete suggested action (e.g., "Rewrite paragraph 3 to define 'ROI' before using it").

**Tier 2 — High Value**
Same format as Tier 1, abbreviated to suggested action only.

**Tier 3 — Polish Pass**
Simple numbered list; no elaboration needed.

**Conflicts to Resolve**
List any contradictory feedback pairs with a recommendation for which to prioritize and why.

**Suggested Revision Order**
A plain-language sequence (e.g., "Start with items 2, 5, 1 → then batch items 3, 7, 8 → finish with remaining Tier 3 items") that accounts for both priority and effort to minimize revision fatigue.
