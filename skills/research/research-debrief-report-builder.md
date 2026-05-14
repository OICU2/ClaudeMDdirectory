---
name: research-debrief-report-builder
description: >
  Compiles a structured post-study debrief report covering methodology deviations, data quality issues, and lessons learned for future iterations. Use when someone says "we just finished a study," asks to "summarize what went wrong in the research," or wants to "write up a debrief after a study," "document research findings and issues," or "capture lessons learned from this research cycle."
category: research
tags: [research, debrief, post-study, methodology, documentation]
author: community
---

# Research Debrief Report Builder

Generates a structured post-study debrief report by systematically capturing methodology deviations, data quality issues, participant or sample notes, and actionable recommendations for future research iterations.

## Workflow

1. **Gather study context** — Ask for: study name/ID, research objectives, intended methodology, timeline, and team members involved if not already provided.

2. **Elicit methodology deviations** — Ask the user to describe any deviations from the original protocol (sampling changes, instrument modifications, procedural shifts). For each deviation, capture: what changed, why it changed, and when it occurred.

3. **Document data quality issues** — Prompt for: missing data, outliers, consent or eligibility issues, equipment or tooling failures, and any data that was excluded or flagged. Record the scope (how many records/participants affected) and resolution taken.

4. **Capture participant or sample notes** — Record recruitment challenges, dropout rates, demographic gaps, or response bias observations.

5. **Assess objective achievement** — For each original research objective, mark it as: fully met, partially met, or unmet, with a brief explanation.

6. **Synthesize recommendations** — Derive at least three specific, actionable recommendations for the next research iteration based on the issues documented. Each recommendation must reference the specific problem it addresses.

7. **Compile the report** — Assemble all inputs into the structured output format below.

## Output Format

Produce a Markdown document with the following sections in order:

```
# Post-Study Debrief Report
**Study Name:** [name]
**Date Completed:** [date]
**Prepared By:** [name/team]

## 1. Study Overview
- Objectives (bulleted list)
- Intended methodology (2–3 sentences)
- Actual timeline vs. planned timeline

## 2. Methodology Deviations
| Deviation | Reason | Timing | Impact |
|-----------|--------|--------|--------|
| ...       | ...    | ...    | ...    |

## 3. Data Quality Issues
| Issue | Scope | Resolution | Residual Risk |
|-------|-------|------------|---------------|
| ...   | ...   | ...        | ...           |

## 4. Participant / Sample Notes
- [Bulleted observations on recruitment, dropout, bias, or gaps]

## 5. Objective Achievement Summary
| Objective | Status | Notes |
|-----------|--------|-------|
| ...       | Fully met / Partially met / Unmet | ... |

## 6. Recommendations for Future Iterations
1. **[Recommendation title]** — [Specific action addressing specific problem]
2. ...
3. ...

## 7. Open Questions
- [Any unresolved issues or decisions deferred to the next cycle]
```

Length: Concise but complete — each table row and bullet should contain substantive content, not placeholders. Aim for a document that a new team member could act on without additional context.
