---
name: content-reading-time-estimator
description: >
  Analyzes a document's sections to calculate estimated reading time and flag potential reader fatigue
  points based on length and complexity. Use when someone says "how long will this take to read,"
  asks about "reading time for my document," wants to "check if my article is too long," needs to
  "identify exhausting sections," or says "estimate how long readers will spend on this."
category: writing
tags: [reading-time, content-analysis, reader-experience, document-review, writing-clarity]
author: community
---

# Content Reading Time Estimator

Calculates per-section reading time estimates and flags fatigue-inducing sections using word count, sentence complexity, and structural density so writers can pace their content effectively.

## Analysis Workflow

1. **Split the document into sections** using headings (H1–H4), or logical paragraphs if no headings exist. Label each section by its heading or assign a positional label (e.g., "Section 1", "Opening Paragraph").

2. **Count words per section** — include body text, subheadings, captions, and list items. Exclude code blocks from word count but note their presence separately.

3. **Calculate base reading time per section** using these rates:
   - Standard prose: 238 words per minute (average adult silent reading speed)
   - Technical/instructional content: 150 words per minute
   - Code blocks: 100 words/lines per minute
   - Round to the nearest 30 seconds; anything under 30 seconds displays as "< 1 min"

4. **Score each section for complexity** using these signals:
   - Average sentence length > 25 words → +1 complexity point
   - Passive voice density > 20% of sentences → +1 complexity point
   - Jargon or domain-specific terms (3+ per 100 words) → +1 complexity point
   - Nested lists deeper than 2 levels → +1 complexity point
   - Dense data tables or multiple statistics per sentence → +1 complexity point
   - Complexity score: 0–1 = Low, 2–3 = Medium, 4–5 = High

5. **Flag fatigue risk** for any section that meets one or more of these thresholds:
   - Reading time > 4 minutes for a single section
   - Complexity score ≥ 3 (High)
   - Section appears after the 15-minute cumulative reading mark
   - Three or more consecutive high-complexity sections

6. **Sum the total estimated reading time** across all sections, then provide a document-level fatigue assessment: Low (0–1 flags), Moderate (2–4 flags), High (5+ flags).

7. **Generate targeted recommendations** only for flagged sections — suggest splitting, simplifying sentence structure, adding subheadings, or inserting visual breaks.

## Output Format

Produce a structured report in this exact order:

**Document Summary**
- Total word count: [N]
- Total estimated reading time: [X min]
- Fatigue risk level: [Low / Moderate / High]
- Sections analyzed: [N]
- Sections flagged: [N]

**Section-by-Section Breakdown**
Render as a table with these columns:

| Section | Words | Est. Time | Complexity | Fatigue Flag | Notes |
|---|---|---|---|---|---|
| [Heading or label] | [N] | [X min] | [Low/Med/High] | ⚠️ or — | [Brief note if flagged] |

**Flagged Sections — Recommendations**
For each flagged section, provide:
- **[Section name]** — Why flagged: [specific reason]. Suggested fix: [one concrete action].

Keep recommendations to one sentence each. Do not comment on sections that are not flagged.
