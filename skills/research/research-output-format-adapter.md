---
name: research-output-format-adapter
description: >
  Reformats a completed research report into alternative deliverable formats tailored for different stakeholder audiences. Use when someone says "convert this research into slides," asks for an executive summary of a report, wants to turn findings into a one-pager, needs a briefing document from a study, or requests a stakeholder-ready version of research output.
category: research
tags: [research, formatting, communication, executive-summary, presentations]
author: community
---

# Research Output Format Adapter

This skill takes a completed research report and restructures its content into a specified alternative format — executive briefing, slide deck outline, or one-page summary — preserving key findings while matching the expectations of the target audience.

## Conversion Workflow

1. **Identify the source material**: Confirm the research report or findings are present. If not provided, ask the user to paste or describe the content to be reformatted.

2. **Identify the target format**: Determine which output the user needs:
   - **Executive Briefing**: 1–2 pages, C-suite audience, emphasis on business implications, decisions required, and risk/opportunity framing
   - **Slide Deck Outline**: Structured as titled slides with bullet-point content per slide, logical narrative arc, presenter notes optional
   - **One-Page Summary**: Single page, all audiences, covers purpose, key findings, implications, and next steps in tight prose or structured sections

3. **Identify the target audience**: If not stated, infer from context or ask. Adjust language complexity, technical depth, and framing accordingly (e.g., executives vs. practitioners vs. general stakeholders).

4. **Extract and prioritize content**: Pull the most critical elements from the source:
   - Primary research question or objective
   - Top 3–5 findings or data points
   - Key conclusions and implications
   - Recommended actions or decisions
   - Supporting evidence (summarized, not exhaustive)

5. **Reformat content to target structure**: Apply the appropriate template below, rewriting for tone and brevity. Do not invent findings — only reshape what exists in the source material.

6. **Flag omissions**: If the source report lacks sections needed for the target format (e.g., no recommendations), note this explicitly and either ask the user to provide them or mark the section as TBD.

### Format Templates

**Executive Briefing structure:**
- Situation / Context (2–3 sentences)
- Key Findings (3–5 bullets)
- Business Implications (2–4 bullets)
- Recommended Actions (numbered list)
- Decision Required / Next Steps

**Slide Deck Outline structure:**
- Slide 1: Title + framing statement
- Slide 2: Agenda or objectives
- Slides 3–N: One finding or theme per slide, with 3–5 supporting bullets
- Penultimate slide: Implications and recommendations
- Final slide: Next steps or call to action

**One-Page Summary structure:**
- Header: Title, date, author (if available)
- Purpose (1–2 sentences)
- Key Findings (3–5 bullets or short paragraphs)
- Implications (2–3 sentences)
- Recommended Next Steps (2–4 bullets)

## Output Format

Deliver the reformatted document in clean markdown, ready to copy or hand off. Include:
- A clearly labeled header indicating the format type and original report title (if known)
- All sections from the appropriate template above, fully populated
- Concise, direct language appropriate to the stated audience — no academic hedging or padding
- A brief note at the end (italicized) listing any sections that could not be completed due to missing source content

Length targets: Executive Briefing ≤ 500 words, Slide Deck Outline ≤ 600 words across all slides, One-Page Summary ≤ 350 words.
