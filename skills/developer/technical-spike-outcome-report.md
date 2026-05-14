---
name: technical-spike-outcome-report
description: >
  Transforms the raw findings from a technical spike investigation into a structured decision document that captures risks, tradeoffs, and a recommended path forward. Use when someone says "we finished the spike", asks to document spike results, wants to write up what we learned from the investigation, needs to summarize prototype findings for the team, or is ready to share technical research outcomes with stakeholders.
category: developer
tags: [technical-spike, decision-document, research, architecture, documentation]
author: community
---

# Technical Spike Outcome Report

This skill converts unstructured spike investigation findings into a clear, team-ready decision document that captures what was learned, what risks were uncovered, and what approach is recommended.

## Workflow

1. **Gather spike context** — Ask for or extract: the original spike question/goal, time boxed duration, who conducted it, and the technology or approach being evaluated.

2. **Extract findings** — Identify all factual discoveries from the investigation: what worked, what didn't, performance characteristics, integration complexity, limitations, and any surprises.

3. **Categorize risks** — Sort identified risks into: technical risks (stability, scalability, complexity), dependency risks (third-party reliance, versioning, support), and team risks (skill gaps, learning curve, maintainability).

4. **Document tradeoffs** — For each viable approach discovered, list concrete pros and cons. If multiple options emerged, compare them directly. Avoid vague qualifiers — use specific metrics or observations where available.

5. **State a recommendation** — Choose one recommended path forward with a clear rationale. If the spike is inconclusive, state that explicitly and specify what additional investigation is needed.

6. **Define next steps** — List 3–5 concrete actions the team should take based on the outcome (e.g., proceed to implementation, run a follow-up spike, update the ADR, revisit in next sprint).

7. **Flag open questions** — List any questions the spike raised but did not answer. These become inputs for future spikes or team discussions.

## Output Format

Produce a Markdown document with the following sections:

```
# Spike Outcome Report: [Spike Title]

**Date:** [date]
**Conducted by:** [names or team]
**Duration:** [time box]
**Original Question:** [the hypothesis or question the spike was meant to answer]

## Summary
[2–3 sentences: what was investigated, what was learned, and the bottom-line recommendation]

## Findings
- [Specific factual finding 1]
- [Specific factual finding 2]
- [Continue as needed]

## Risks
| Risk | Category | Severity (Low/Med/High) | Mitigation |
|------|----------|--------------------------|------------|
| ...  | ...      | ...                      | ...        |

## Options Considered
### Option A: [Name]
- **Pros:** ...
- **Cons:** ...

### Option B: [Name]
- **Pros:** ...
- **Cons:** ...

## Recommendation
**Recommended approach:** [Option name]
**Rationale:** [2–4 sentences explaining why this option was chosen over alternatives]

## Next Steps
1. [Action item with owner if known]
2. ...

## Open Questions
- [Unanswered question 1]
- [Unanswered question 2]
```

Keep the report scannable — use bullet points and tables over paragraphs. Length should match spike complexity: simple spikes produce 1–2 page reports, complex multi-day spikes may produce 3–4 pages. Always include the recommendation section even if inconclusive.
