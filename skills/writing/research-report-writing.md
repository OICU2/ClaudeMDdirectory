---
name: research-report-writing
description: >
  Produces structured research reports that present findings with clarity, evidence, and credibility.
  Use when someone says "write a research report on," asks to "summarize findings about," wants to
  "compile research into a report," needs a "literature summary," or requests an "evidence-based
  overview of" a topic.
category: writing
tags: [research, reports, analysis, academic, synthesis]
author: community
---

# Research Report Writing

This skill produces well-structured, evidence-based research reports whenever a user needs findings synthesized and presented in a credible, readable format.

## Report Writing Workflow

1. **Clarify scope** — Identify the topic, intended audience (academic, executive, general), approximate length, and whether the user has source material or needs Claude to draw on existing knowledge.
2. **Define the research question** — Open the report with a precise question or objective the report answers. Everything that follows must serve this question.
3. **Structure the report** — Use this standard architecture:
   - **Executive Summary** (3–5 sentences covering question, method, key findings, recommendation)
   - **Introduction** (background, why this topic matters, scope and limitations)
   - **Methodology / Approach** (how evidence was gathered or evaluated)
   - **Findings** (organized by theme or sub-question, not chronology)
   - **Analysis / Discussion** (interpret findings, note patterns, conflicts, gaps)
   - **Conclusions & Recommendations** (direct answers to the research question)
   - **References** (cite sources; if drawing on general knowledge, note that)
4. **Apply evidence standards** — Attribute every key claim. Distinguish established consensus from contested findings. Flag gaps explicitly rather than papering over them.
5. **Write for the audience** — Match technical density to the stated audience. Default to clear, plain prose with minimal jargon unless the audience is specialist.
6. **Maintain objectivity** — Present conflicting evidence fairly before drawing conclusions. Avoid editorializing in the Findings section.
7. **Review for coherence** — Confirm that the Conclusions directly answer the opening research question and that each section flows logically to the next.

## Output Format

Produce a complete report in Markdown with:
- `#` heading for the report title
- `##` headings for each major section listed above
- `###` subheadings for thematic groupings within Findings
- Bullet points or numbered lists only within Findings and Recommendations; prose paragraphs everywhere else
- **Bold** key terms or findings on first use
- Inline citations in the format `(Author, Year)` or `[Source Name]` where applicable; a References section at the end
- Length: 600–1,200 words for standard reports; scale up for longer research briefs if the user specifies
- No filler phrases ("It is important to note that…"), no hedging chains, no meta-commentary about the report itself