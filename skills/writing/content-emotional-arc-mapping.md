---
name: content-emotional-arc-mapping
description: >
  Analyzes long-form content to map emotional tone progression across sections, identifying flat zones, tonal inconsistencies, and unintended mood shifts. Use when someone says "my article feels monotone," asks about why their content feels off emotionally, or wants to check if their piece has good emotional flow. Also triggers when a writer wants to find where their story loses energy or needs help balancing tension and relief in an essay, article, or narrative.
category: writing
tags: [emotional-tone, content-analysis, long-form-writing, narrative-arc, editing]
author: community
---

# Content Emotional Arc Mapping

This skill analyzes long-form content section by section to produce a visual and descriptive map of emotional tone progression, flagging flat zones, jarring transitions, and unintended tonal inconsistencies.

## Analysis Workflow

1. **Segment the content** — Divide the piece into logical sections (paragraphs, chapters, or natural breaks). Label each segment sequentially (S1, S2, S3…).

2. **Score each segment on two axes**:
   - **Valence**: Negative (−2) → Neutral (0) → Positive (+2)
   - **Intensity**: Flat (1) → Moderate (2) → High (3)

3. **Assign a dominant tone label** to each segment using precise descriptors: somber, tense, hopeful, urgent, melancholic, triumphant, clinical, playful, anxious, reflective, etc.

4. **Identify arc problems** by checking for:
   - **Flat zones**: Three or more consecutive segments with identical or near-identical valence and intensity scores
   - **Unearned shifts**: Sudden valence jumps of ±2 without a transitional segment
   - **Tonal dissonance**: Segments whose tone label contradicts the surrounding context (e.g., playful in the middle of a grief sequence)
   - **Missing resolution**: High-intensity negative segments left unresolved by the piece's end

5. **Diagnose each problem** with a one-sentence explanation of why it disrupts reader experience.

6. **Recommend a fix** for each flagged segment — either a rewrite approach, a transitional bridge suggestion, or a pacing adjustment.

## Output Format

Produce the following structure in order:

**Emotional Arc Map**
A table with columns: Segment | Label | Valence Score | Intensity Score | Dominant Tone

**Arc Visualization**
A simple ASCII line chart plotting valence scores across segments to show the shape of the emotional journey.

**Flagged Issues**
A numbered list. Each item includes:
- Segment reference (e.g., S4–S6)
- Problem type (Flat Zone / Unearned Shift / Tonal Dissonance / Missing Resolution)
- One-sentence diagnosis
- Concrete fix recommendation

**Overall Arc Assessment**
2–3 sentences summarizing the piece's emotional shape, its strongest moment, and its most critical weakness.
