---
name: writing-jargon-density-report
description: >
  Analyzes a written draft to identify industry-specific jargon, scores its concentration, and provides plain-language alternatives for each flagged term. Use when someone says their writing is too technical, asks how to make a document more accessible, wants to simplify a draft for a general audience, needs to check if a piece is jargon-heavy, or wonders whether non-experts will understand their content.
category: writing
tags: [jargon, plain-language, readability, editing, accessibility]
author: community
---

# Jargon Density Report

Scans a draft for industry-specific or technical jargon, calculates a density score, and returns a structured report with plain-language alternatives for every flagged term.

## Analysis Workflow

1. **Read the full draft** before flagging anything — context determines whether a term counts as jargon.
2. **Flag a term as jargon** if it meets any of these criteria:
   - It is specific to one industry, profession, or technical domain
   - A general adult reader would likely need to look it up
   - It is an acronym or initialism not defined in the text
   - It is a common word repurposed with a specialized meaning (e.g., "leverage," "synergy," "pipeline")
3. **Count total words** and **total flagged jargon instances** (not unique terms — count each occurrence).
4. **Calculate Jargon Density Score**: `(flagged instances / total words) × 100`, rounded to one decimal place.
5. **Assign a density tier**:
   - 0–2%: Low — accessible to most readers
   - 2.1–5%: Moderate — may lose some general readers
   - 5.1–10%: High — likely confusing outside the field
   - 10%+: Very High — needs significant revision for broad audiences
6. **For each unique flagged term**, provide:
   - The original term
   - Why it qualifies as jargon (one phrase)
   - One or two plain-language replacements
   - A rewritten example sentence using the replacement
7. **Prioritize by frequency** — terms appearing most often appear first in the report.

## Output Format

Produce the report in this exact structure:

---

**Jargon Density Report**

**Overall Score:** X.X% — [Tier label]
**Total Words:** [N] | **Flagged Instances:** [N] | **Unique Jargon Terms:** [N]

**Summary:** One sentence interpreting the score and its likely impact on the target audience.

---

**Flagged Terms** *(ordered by frequency, highest first)*

| Term | Occurrences | Why It's Jargon | Plain Alternative(s) |
|------|-------------|-----------------|----------------------|
| [term] | [N] | [reason] | [alt1], [alt2] |

---

**Rewrite Examples**

For each unique term, provide:
- **Original:** [sentence containing the jargon term]
- **Revised:** [same sentence with plain alternative]

---

**Recommendations**
- List 2–4 specific, actionable edits the writer should prioritize based on frequency and severity.
- Note any passages where jargon is appropriate to keep (e.g., writing for expert audiences).

---
