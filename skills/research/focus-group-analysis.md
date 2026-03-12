---
name: focus-group-analysis
description: >
  Analyzes focus group transcripts to extract recurring themes, sentiment patterns, and notable divergences across participant segments. Use when someone says "here's a focus group transcript," asks to "analyze what participants said," wants to "find patterns in qualitative research," needs to "summarize focus group findings," or asks "what themes emerged from the discussion."
category: research
tags: [qualitative-research, thematic-analysis, sentiment-analysis, transcripts, user-research]
author: community
---

# Focus Group Analysis

This skill processes raw focus group transcripts to surface recurring themes, sentiment patterns, and meaningful disagreements across participant demographics or segments.

## Analysis Workflow

1. **Segment the transcript** — Identify and label each speaker by any available demographic or role tag (e.g., age group, gender, product user vs. non-user). If no tags exist, assign neutral IDs (P1, P2, etc.).

2. **Extract themes** — Read through the full transcript and tag every substantive statement with a candidate theme label. Group overlapping labels into 4–8 consolidated themes. A theme requires at least 3 distinct participant mentions to qualify.

3. **Map sentiment per theme** — For each theme, classify participant statements as positive, negative, neutral, or mixed. Note the ratio and flag any theme where sentiment is split more than 40/60.

4. **Identify divergences** — Find moments where participant segments disagreed meaningfully. Flag direct contradictions, generational or demographic splits, and cases where one segment dominates a theme while others are silent.

5. **Surface notable quotes** — Select 1–2 verbatim quotes per major theme that best represent the consensus or the divergence. Prioritize specificity over eloquence.

6. **Check for underrepresented voices** — Note any participant who spoke fewer than 3 times and flag whether their omission could skew findings.

## Output Format

Produce a structured report with these sections:

**Executive Summary** (3–5 sentences): Top 3 themes, dominant sentiment, and most significant divergence.

**Theme Breakdown** (one block per theme):
- Theme name (bold)
- Brief description (1–2 sentences)
- Sentiment distribution (e.g., 60% negative, 30% neutral, 10% positive)
- Segments most vocal on this theme
- Representative quote(s) in blockquote format

**Divergence Log** (bulleted list): Each notable disagreement, who held which position, and which segment it maps to.

**Methodological Flags**: Low-participation speakers, facilitator bias moments, or transcript gaps that could affect reliability.

**Recommended Follow-Up Questions** (3–5 bullets): Questions a researcher should ask in a follow-up session based on unresolved tensions.

Total length: 600–1200 words depending on transcript size. Use plain language. Avoid academic jargon unless the user's context requires it.
