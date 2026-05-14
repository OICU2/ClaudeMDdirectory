---
name: research-instrument-localization-gap-report
description: >
  Analyzes survey or interview instruments to identify questions, scales, and constructs that may lose meaning, introduce bias, or fail to translate accurately across cultural or linguistic contexts in multi-region studies. Use when someone says "we're running this survey in multiple countries," asks about cultural equivalence of their questions, or wants to check if their research instrument will work globally. Also triggers when someone shares a questionnaire for international deployment or needs to adapt a study for a new regional population.
category: research
tags: [localization, cross-cultural, survey-design, translation, measurement-equivalence]
author: community
---

# Research Instrument Localization Gap Report

This skill audits survey or interview instruments question-by-question to surface localization risks—semantic, cultural, structural, and scalar—so researchers can adapt instruments before fielding across multiple regions or languages.

## Analysis Workflow

### Step 1: Ingest the Instrument
- Accept the full instrument (paste, upload, or description)
- Note the source language, target languages or regions, and study population if provided
- If target regions are unspecified, ask before proceeding; the analysis depends heavily on destination contexts

### Step 2: Classify Each Item by Risk Category
Evaluate every question, response option, and instruction against these five gap types:

1. **Semantic Gap** — Words or phrases with no direct equivalent or that carry different connotations (e.g., "privacy," "fairness," idioms, metaphors)
2. **Conceptual Gap** — Constructs that do not exist or differ significantly across cultures (e.g., "work-life balance," "self-esteem," individualism-rooted framings)
3. **Scalar/Response Format Gap** — Rating scales, Likert formats, or agree/disagree frames that perform differently cross-culturally (e.g., acquiescence bias, extreme response style tendencies)
4. **Reference Frame Gap** — Time periods, institutions, roles, or norms assumed to be universal but are region-specific (e.g., "federal holidays," "college education," "your manager")
5. **Sensitivity/Taboo Gap** — Topics, wording, or assumptions that may be offensive, taboo, or legally restricted in certain regions (e.g., questions about religion, income, family structure)

### Step 3: Assign Risk Level
For each flagged item, assign:
- 🔴 **High** — Will likely produce non-comparable or invalid data; must be revised
- 🟡 **Medium** — May introduce noise or bias; revision recommended
- 🟢 **Low** — Minor wording concern; note for translator guidance

### Step 4: Generate Revision Recommendations
For every High and Medium item:
- State the specific problem
- Explain why it fails in the target context(s)
- Provide at least one concrete revised wording or structural alternative
- Note if a validated cross-cultural equivalent exists (e.g., PHQ-9, WHOQOL, Schwartz Values Survey)

### Step 5: Summarize Instrument-Level Findings
- Count items by risk level
- Identify systemic patterns (e.g., "instrument assumes Western nuclear family structure throughout")
- Flag if full reconceptualization is needed rather than item-level edits
- Note translation method recommendations (back-translation, TRAPD, cognitive interviewing)

## Output Format

Produce a structured report with the following sections:

---

**LOCALIZATION GAP REPORT**
*Instrument:* [name or description]
*Source Language:* [language]
*Target Regions/Languages:* [list]
*Total Items Reviewed:* [n] | 🔴 High Risk: [n] | 🟡 Medium Risk: [n] | 🟢 Low Risk: [n]

---

**ITEM-BY-ITEM ANALYSIS**

| Item # | Original Text | Gap Type | Risk | Issue Summary | Recommended Revision |
|--------|--------------|----------|------|---------------|----------------------|
| Q1 | "..." | Conceptual | 🔴 | ... | "..." |
| Q2 | "..." | Scalar | 🟡 | ... | "..." |

*(Include all flagged items; omit clean items or list them briefly at the end)*

---

**INSTRUMENT-LEVEL FINDINGS**
- [2–5 bullet points on
