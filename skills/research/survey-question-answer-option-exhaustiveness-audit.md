---
name: survey-question-answer-option-exhaustiveness-audit
description: >
  Audits closed-ended survey questions to ensure answer options are mutually exclusive (no overlap between choices), collectively exhaustive (all possible responses are covered), and logically sound. Use when someone shares survey questions for review, asks whether their answer choices cover all possibilities, wants to check if response options are overlapping or redundant, needs to validate a Likert scale or multiple-choice question set, or is concerned that respondents might not find a fitting answer option.
category: research
tags: [survey-design, research-methodology, data-quality, questionnaire, measurement]
author: community
---

# Survey Question Answer Option Exhaustiveness Audit

This skill reviews closed-ended survey questions and their answer options to identify gaps, overlaps, and logical flaws, then provides specific corrections to ensure MECE (Mutually Exclusive, Collectively Exhaustive) compliance.

## Audit Workflow

1. **Parse the question and options**: Identify the question type (single-select, multi-select, Likert, ranking, demographic) and list all provided answer options.

2. **Check mutual exclusivity**: Scan every pair of options for semantic, numerical, or categorical overlap. Flag any options where a single respondent could truthfully select more than one answer simultaneously.
   - Example flaw: "18–25" and "25–35" share the value 25.
   - Example flaw: "Somewhat agree" and "Agree" may be interpreted identically by some respondents.

3. **Check collective exhaustiveness**: Determine whether the full range of possible true answers is represented.
   - Identify any plausible respondent scenario that has no matching option.
   - Flag missing logical categories (e.g., a frequency scale missing "Never" or "Always").
   - Flag absent demographic groups, edge cases, or neutral midpoints where expected.

4. **Check option balance and scale integrity**: For scaled questions, verify symmetry (equal positive and negative anchors), appropriate midpoint presence or absence, and consistent granularity across the scale.

5. **Check for forced-choice problems**: Determine whether all respondents can answer honestly without selecting a misleading option. Flag missing "Not applicable," "Prefer not to say," or "Other (please specify)" options where relevant.

6. **Assign a severity rating to each issue**:
   - 🔴 Critical — will corrupt data or exclude valid respondents
   - 🟡 Moderate — may introduce bias or measurement error
   - 🟢 Minor — stylistic or edge-case improvement

7. **Generate corrected options**: For each flagged issue, provide a specific revised version of the answer option set.

## Output Format

Produce a structured audit report for each question submitted:

---

**Question [N]:** [Exact question text]
**Question Type:** [e.g., Single-select, Likert 5-point]

**Issues Found:**
| # | Issue Type | Affected Option(s) | Severity | Description |
|---|------------|--------------------|----------|-------------|
| 1 | Overlap | "18–25" / "25–35" | 🔴 Critical | Value 25 appears in both ranges |
| 2 | Gap | — | 🟡 Moderate | No option for respondents under 18 |

**Corrected Option Set:**
- [ ] Option A
- [ ] Option B
- [ ] Option C
- [ ] Other (please specify): ___

**Summary:** [1–2 sentences on the overall quality and whether the question is usable as-is or requires revision before fielding.]

---

If multiple questions are submitted, audit each one separately in sequence, then close with a **Overall Survey Health Score** (Excellent / Acceptable / Needs Revision / Unusable) and a prioritized list of the top fixes required before the survey can be fielded.
