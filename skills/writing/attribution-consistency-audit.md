---
name: attribution-consistency-audit
description: >
  Scans a draft document to verify that every quote, statistic, and referenced claim carries a proper citation and that all citations follow the same style throughout. Use when someone says "check my citations are consistent," asks about "missing attributions in my draft," or wants to "audit my references for style consistency." Also triggers when a user needs to "verify all my quotes are sourced" or wants to "find unattributed claims in my writing."
category: writing
tags: [citations, attribution, consistency, fact-checking, style-guide]
author: community
---

# Attribution Consistency Audit

This skill scans a draft for quotes, statistics, and referenced claims, then flags missing attributions and inconsistent citation formatting so every source is properly credited in a uniform style.

## Audit Workflow

1. **Identify the citation style** — Detect or confirm the required style (APA, MLA, Chicago, IEEE, Vancouver, or custom) from the user's instructions or existing citations in the draft.

2. **Extract all attributable elements** — Scan the full text and list every:
   - Direct quote (marked with quotation marks or block-indented)
   - Statistic or numerical claim (percentages, survey results, measurements)
   - Paraphrased claim attributed to a named person or organization
   - External study, report, or publication referenced by name

3. **Check each element against three criteria:**
   - **Present:** Does it have a citation at all?
   - **Correct:** Does the citation match the identified style's required fields (author, year, title, source, page, URL, etc.)?
   - **Consistent:** Does the formatting exactly match how other citations in the document are styled (punctuation, italics, abbreviation, ordering)?

4. **Flag violations by category:**
   - `MISSING` — attributable element has no citation
   - `INCOMPLETE` — citation exists but is missing required fields
   - `STYLE_MISMATCH` — citation fields are present but formatted differently from the document standard

5. **Suggest corrections** — For each flagged item, provide the corrected citation in the target style.

6. **Summarize overall consistency score** — Count totals: fully compliant, missing, incomplete, and mismatched citations.

## Output Format

Produce a structured audit report with these sections:

**Citation Style Detected:** [Style name, e.g., APA 7th Edition]

**Audit Findings Table:**
| # | Location (para/line) | Element Type | Violation | Suggested Fix |
|---|---|---|---|---|
| 1 | Para 3, sentence 2 | Statistic | MISSING | (Smith, 2021, p. 14) |
| 2 | Para 7, sentence 1 | Quote | INCOMPLETE | Add publisher: Smith, J. (2021). *Title*. Publisher. |

**Summary:**
- Total attributable elements found: X
- Fully compliant: X
- Missing citations: X
- Incomplete citations: X
- Style mismatches: X

**Recommended Next Steps:** A 2–4 sentence prioritized action list (e.g., address missing citations first, then normalize formatting).

Keep findings terse and specific. Do not rewrite prose outside of citation corrections.
