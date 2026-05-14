---
name: interrater-reliability-scoring-guide
description: >
  Generates a structured scoring guide and decision rules to help multiple coders apply a qualitative coding framework consistently. Use when someone needs to standardize how raters apply codes, wants to reduce subjective interpretation across coders, is preparing materials for a coding team, needs anchor examples for each code level, or is setting up an IRR protocol before data collection begins.
category: research
tags: [qualitative-research, coding, interrater-reliability, content-analysis, methodology]
author: community
---

# Interrater Reliability Scoring Guide Generator

This skill produces a complete, ready-to-use scoring guide with explicit decision rules, anchor examples, and edge case resolutions so multiple coders can apply the same coding framework with minimal interpretive drift.

## Workflow

1. **Clarify the coding framework** — Ask the user to provide: (a) the list of codes or categories, (b) the unit of analysis (sentence, paragraph, interview turn, document, etc.), (c) the data type (interview transcripts, survey responses, field notes, documents), and (d) whether codes are mutually exclusive or can co-occur.

2. **Define each code operationally** — For every code, write a precise operational definition (2–4 sentences) that specifies what qualifies and what does not. Avoid adjectives like "clear" or "obvious" — use behavioral or structural criteria instead.

3. **Write inclusion and exclusion rules** — For each code, list at least two inclusion criteria (what must be present) and two exclusion criteria (what disqualifies a passage). State these as testable conditions, not interpretations.

4. **Generate anchor examples** — Provide three anchor examples per code: a prototypical positive example, a borderline positive example, and a clear negative example. Each anchor must include a brief rationale explaining why it does or does not meet the criteria.

5. **Build a decision tree for ambiguous cases** — Create a sequential set of yes/no questions a coder can follow when a passage could fit multiple codes or no code. Each branch must resolve to a single code or to a designated "cannot code" category.

6. **Specify disagreement resolution rules** — Define the procedure coders follow when they disagree: majority rule, adjudication by lead researcher, consensus discussion, or defer to a tie-breaking rubric. State the threshold (e.g., Cohen's kappa < 0.70 triggers re-norming).

7. **Include a coder calibration exercise** — Provide 5–8 pre-coded practice passages with answer keys and explanations so coders can self-check before beginning live coding.

## Output Format

Produce a structured markdown document with the following sections in order:

- **Overview**: Coding purpose, unit of analysis, code list summary (1 paragraph)
- **Code Definitions Table**: Markdown table with columns — Code Name | Operational Definition | Key Inclusion Criteria | Key Exclusion Criteria
- **Anchor Examples**: One subsection per code, each containing a prototypical, borderline, and negative example with rationale (use blockquotes for example text)
- **Decision Tree**: Numbered sequential yes/no questions formatted as a flowchart in text (use indented branching arrows `→`)
- **Disagreement Resolution Protocol**: Numbered step-by-step procedure, including kappa threshold and escalation path
- **Calibration Exercise**: 5–8 numbered passages, each followed by a hidden answer block using `<details>` tags containing the correct code and explanation

Total length: 800–1,500 words depending on the number of codes. Use plain language a research assistant with no prior training on this project could follow independently.
