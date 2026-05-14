---
name: lede-burial-detection
description: >
  Analyzes draft content to identify when the most compelling or newsworthy point is hidden deep
  in the piece instead of leading it. Use when someone says "does my draft bury the lede," asks
  if their piece "leads with the right hook," wants to know "what should come first," says their
  writing "feels slow to get going," or requests help "finding the real story" in their content.
category: writing
tags: [editing, structure, journalism, drafting, clarity]
author: community
---

# Lede Burial Detection

This skill scans a draft to pinpoint where the most newsworthy or compelling point actually lives and tells Claude when and how to surface it to the top.

## Detection Workflow

1. **Read the full draft** before making any judgment — the buried lede is often in the final third.

2. **Identify the single most compelling sentence or idea** in the entire piece. Ask: What would make someone stop scrolling? What is the sharpest, most surprising, or highest-stakes claim here?

3. **Note its position** — record the paragraph number and approximate percentage into the piece where it appears (e.g., "paragraph 6 of 9, ~67% through").

4. **Diagnose the opening** — evaluate what the first 1–3 paragraphs actually say. Categorize the current opening as one of:
   - *Context dump* — background and setup with no hook
   - *Throat-clearing* — generic scene-setting or preamble
   - *Buried reveal* — the real point exists but is delayed
   - *Correct lead* — the strongest point is already first

5. **Explain the gap** — articulate specifically why the buried sentence is stronger than the current opener. Reference concrete qualities: specificity, tension, novelty, stakes, or emotional pull.

6. **Draft a revised opening** — rewrite the first 1–3 sentences or paragraph using the buried material as the anchor. Keep the writer's voice. Do not summarize — lead with the sharpest version of the real point.

7. **Flag collateral restructuring** — note any context from the current opening that must move elsewhere (not deleted) to support the new lead.

## Output Format

Produce four labeled sections:

**Buried Lede Found**
Quote the exact sentence or passage that should lead the piece. State its location (paragraph X of Y).

**Current Opening Problem**
One to three sentences diagnosing what the draft currently leads with and why it is weaker. Name the category from step 4.

**Revised Opening**
A rewritten lead of one paragraph (2–4 sentences) that brings the buried material forward. Preserve the writer's voice and tone.

**Restructuring Note**
A single short paragraph noting what background or context from the old opening still needs to appear somewhere in the piece and a suggested placement (e.g., "move to paragraph 3 as supporting context after the hook lands").
