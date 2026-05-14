---
name: systematic-literature-gap-mapping
description: >
  Analyzes a collection of existing studies to identify understudied variables, populations, methodologies, or time periods that represent open research opportunities. Use when someone says "what's missing from the literature," asks about underexplored areas in a field, wants to find gaps in existing research, needs to justify a new study's novelty, or is looking for future research directions after reviewing prior work.
category: research
tags: [literature-review, research-gaps, systematic-analysis, academic-research, methodology]
author: community
---

# Systematic Literature Gap Mapping

This skill analyzes a body of existing research to produce a structured map of understudied variables, populations, contexts, and time periods, giving researchers concrete directions for original inquiry.

## Gap Identification Workflow

1. **Inventory what was provided.** List all studies, papers, or summaries the user has shared. If none are provided, ask for at least 3–5 representative sources before proceeding.

2. **Extract study dimensions.** For each source, identify:
   - Population studied (age, demographics, geography, species, industry sector, etc.)
   - Variables measured or manipulated (independent, dependent, moderating)
   - Time period or temporal scope
   - Methodology or study design (RCT, survey, longitudinal, qualitative, etc.)
   - Theoretical framework applied
   - Outcomes or endpoints tracked

3. **Build a coverage matrix.** Cross-tabulate the dimensions above across all studies. Identify which cells are empty, sparse (≤2 studies), or covered only by low-quality designs.

4. **Classify each gap by type:**
   - **Population gap** — a demographic, geographic, or clinical group not yet studied
   - **Variable gap** — a predictor, outcome, or moderator never measured or rarely included
   - **Temporal gap** — a time period, longitudinal follow-up window, or historical moment absent from the record
   - **Methodological gap** — an approach (e.g., qualitative, longitudinal, experimental) missing from an otherwise correlational literature
   - **Contextual/setting gap** — an industry, culture, environment, or condition unstudied
   - **Theoretical gap** — a framework or mechanism never tested against this phenomenon

5. **Assess gap severity.** Rate each identified gap as:
   - *Critical* — fundamental to the field's validity or applicability
   - *Significant* — limits generalizability or explanatory power meaningfully
   - *Incremental* — would add nuance but is not blocking progress

6. **Generate research opportunity statements.** For each critical or significant gap, write a one-sentence falsifiable research question that would close it.

7. **Check for counterevidence.** Before finalizing, verify whether any apparent gap might already be addressed by gray literature, dissertations, or adjacent fields the user may not have included.

## Output Format

Produce a structured report with these sections:

**Coverage Summary**
- Number of studies analyzed
- Dominant populations, methods, and variables in the existing literature (2–4 bullet points)

**Gap Map Table**
A markdown table with columns: Gap ID | Gap Type | Description | Severity | Affected Studies (n)

**Top Research Opportunities**
Numbered list of 3–7 items, each containing:
- Gap type label
- One-paragraph explanation of why this gap exists and why it matters
- A concrete, falsifiable research question
- Suggested methodology to address it

**Methodological Notes**
Flag any limitations in the gap analysis itself (e.g., user-provided sources may not be exhaustive, language bias if only English sources reviewed).

Length: Scale to the number of sources provided. For fewer than 10 sources, keep the report under 600 words. For 10–30 sources, up to 1,200 words. For 30+ sources, prioritize the top 5 gaps and note that a full map would require a formal systematic review protocol.
