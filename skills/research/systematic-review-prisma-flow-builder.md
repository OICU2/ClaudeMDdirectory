---
name: systematic-review-prisma-flow-builder
description: >
  Generates a PRISMA flow diagram structure that tracks study inclusion and exclusion decisions across each stage of a systematic review. Use when someone says they are conducting a systematic review, asks how to report screening results, or wants to document how studies were selected or excluded from a literature review. Also activates when someone mentions PRISMA guidelines, needs to build a flow diagram for a meta-analysis, or is writing up their search and screening methodology.
category: research
tags: [systematic-review, prisma, meta-analysis, literature-review, research-methodology]
author: community
---

# PRISMA Flow Diagram Builder

This skill generates a structured PRISMA flow diagram with accurate counts and exclusion reasons for each stage of a systematic review, activating whenever someone needs to document or report their study selection process.

## Workflow

1. **Collect stage-level counts** — Ask the user to provide numbers for each PRISMA stage if not already given:
   - Records identified through database searching (per database)
   - Records identified through other sources
   - Records after duplicates removed
   - Records screened (title/abstract)
   - Records excluded at title/abstract screening
   - Full-text articles assessed for eligibility
   - Full-text articles excluded (with reasons)
   - Studies included in qualitative synthesis
   - Studies included in quantitative synthesis / meta-analysis (if applicable)

2. **Collect exclusion reasons** — For the full-text exclusion stage, prompt the user to list each reason and its count (e.g., wrong population n=12, wrong outcome n=8, not an RCT n=5). Verify that exclusion reason counts sum to the total full-text exclusions.

3. **Validate arithmetic** — Check that numbers flow logically downward:
   - (Identified − Duplicates) = Screened
   - (Screened − Title/Abstract excluded) = Full-texts retrieved
   - (Full-texts − Full-text excluded) = Included studies
   - Flag any discrepancies and ask the user to clarify before proceeding.

4. **Identify PRISMA version** — Confirm whether the user follows PRISMA 2009 or PRISMA 2020 (default to 2020). PRISMA 2020 adds boxes for records from registers, citation searching, and reports of included studies.

5. **Build the text-based flow diagram** — Render the diagram using plain-text box-and-arrow notation (see Output Format).

6. **Generate the accompanying narrative** — Write a 3–5 sentence methods paragraph describing the search and screening process, suitable for insertion into a manuscript.

7. **Provide a Mermaid code block** — Output the diagram as a Mermaid `flowchart TD` code block so the user can render it in compatible tools (GitHub, Obsidian, Notion, etc.).

## Output Format

Produce three clearly labeled sections:

**Section 1 — Plain-Text PRISMA Flow Diagram**
Render a top-to-bottom diagram using ASCII box notation. Each box must show the stage label and count. Arrows (`↓`) connect sequential stages. Side arrows (`→`) point to exclusion boxes. Example structure:

```
┌─────────────────────────────────────────┐
│ Records identified through databases    │
│ (n = [X] across [N] databases)          │
└────────────────────┬────────────────────┘
                     ↓
┌─────────────────────────────────────────┐     ┌──────────────────────────────┐
│ Records after duplicates removed        │     │ Duplicates removed (n = [X]) │
│ (n = [X])                               │ ←── └──────────────────────────────┘
└────────────────────┬────────────────────┘
                     ↓
... [continue for all stages]
```

Exclusion boxes appear to the right of their corresponding stage with a leftward arrow.

**Section 2 — Methods Paragraph**
3–5 sentences in past tense, third person, suitable for a manuscript methods section. Must state: databases searched, total records retrieved, duplicates removed, title/abstract exclusions, full-text exclusions with top reasons, and final included count.

**Section 3 — Mermaid Code Block**
