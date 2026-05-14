---
name: content-scope-creep-detector
description: >
  Analyzes a content draft against its original brief to identify sections that drift outside the defined topic, audience, or length constraints. Use when someone says "check if my draft stayed on topic," asks "does this match the brief I gave," or wants to "flag anything out of scope in my article." Also triggers when a user says "compare my draft to my original outline" or wants to "see where my writing went off track."
category: writing
tags: [content-analysis, editing, brief-alignment, scope, quality-control]
author: community
---

# Content Scope Creep Detector

This skill compares a content draft against its original brief and surfaces every section, paragraph, or passage that violates the defined topic scope, target audience, or word count parameters.

## Detection Workflow

1. **Extract brief parameters** — Pull the following from the provided brief: core topic(s), explicitly excluded topics, target audience (expertise level, role, demographics), required word count or range, required sections or structure, and tone/style constraints.

2. **Segment the draft** — Break the draft into logical units: introduction, each body section or subheading block, and conclusion. Number each segment for reference.

3. **Run four scope checks on every segment:**
   - **Topic check** — Does this segment address only the topics listed in the brief? Flag any tangent, sub-topic, or example not grounded in the brief's scope.
   - **Audience check** — Is the language, assumed knowledge, and framing appropriate for the specified audience? Flag segments pitched too high, too low, or at the wrong role.
   - **Length check** — Calculate running word count. Flag the point where the draft exceeds the upper bound or falls short of the lower bound, and identify which segments are contributing excess words.
   - **Structure check** — If the brief specified required sections, flag any missing sections and any sections present that were not requested.

4. **Classify each flag by severity:**
   - 🔴 **Major** — Entire segment is off-scope or actively contradicts the brief
   - 🟡 **Minor** — Segment is mostly on-scope but contains one or two off-brief sentences or phrases
   - 🔵 **Note** — Segment is technically on-scope but risks confusing the target audience

5. **Generate a fix recommendation** for each flagged item — one specific action (cut, move, reframe, or trim to X words).

## Output Format

Produce a structured report with these sections in order:

**Brief Parameters Detected**
A bullet list confirming the topic, excluded topics, audience, word count target, and required structure extracted from the brief. If any parameter was missing from the brief, call it out as "Not specified — assumption made: [assumption]."

**Scope Creep Flags**
A numbered list. Each entry contains:
- Segment reference (e.g., "Section 2, paragraph 3")
- Severity emoji (🔴 / 🟡 / 🔵)
- One-sentence description of the violation
- The offending quote (max 30 words, in blockquote format)
- One-sentence fix recommendation

**Word Count Analysis**
- Brief target: X words
- Draft actual: X words
- Delta: over/under by X words
- If over: list the top 1–3 segments by word count that should be cut or trimmed first

**Summary**
Three lines maximum:
- Total flags: X (🔴 Y major, 🟡 Z minor, 🔵 W notes)
- Biggest risk area: [one phrase]
- Overall verdict: On-scope / Needs minor revision / Significant rework required
