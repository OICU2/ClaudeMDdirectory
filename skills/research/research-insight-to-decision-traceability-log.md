---
name: research-insight-to-decision-traceability-log
description: >
  Creates a structured traceability log that maps each research insight to the specific business decision it informed, capturing the reasoning chain and outcome for retrospective impact evaluation. Use when someone wants to track how research influenced decisions, asks about the ROI of past research, or needs to document why a business choice was made. Also activates when someone says "link our findings to outcomes," wants to audit research effectiveness, or needs to justify future research investment.
category: research
tags: [research, traceability, decision-making, documentation, impact-measurement]
author: community
---

# Research Insight-to-Decision Traceability Log

This skill builds a structured audit trail connecting research findings to the business decisions they influenced, enabling teams to evaluate research impact and justify future research investments.

## Workflow

1. **Collect raw inputs** — Ask the user to provide: (a) research insights or findings, (b) decisions made during or after the research period, and (c) approximate dates or project names for each. If any are missing, prompt specifically for what is absent before proceeding.

2. **Parse and normalize insights** — Restate each insight in a single declarative sentence: what was found, from what source or method, and with what confidence level (high / medium / low based on sample size, methodology, or user-provided context).

3. **Parse and normalize decisions** — Restate each decision as an action taken, by whom (role or team), and what the expected outcome was at the time of the decision.

4. **Map insight → decision links** — For each decision, identify which insight(s) directly informed it. Classify each link as:
   - **Direct**: The insight was explicitly cited or discussed before the decision.
   - **Contributory**: The insight was available and relevant but one of several inputs.
   - **Coincidental**: Timing overlaps but causal connection is unclear.
   - **Unmapped**: Decision lacks a traceable research input.

5. **Capture the reasoning chain** — For each Direct or Contributory link, document: what the insight said → what decision-maker interpreted → what action was chosen → what alternative was rejected.

6. **Assess retrospective outcome** — If outcome data is available, rate each decision as: Validated (outcome matched expectation), Invalidated (outcome contradicted expectation), or Pending (outcome not yet measurable). Note whether the research insight was accurate in hindsight.

7. **Flag gaps and anomalies** — Identify: decisions made without any research input, research insights that informed no decisions, and cases where a decision contradicted available research findings.

## Output Format

Produce a traceability log with the following structure:

---

**RESEARCH INSIGHT-TO-DECISION TRACEABILITY LOG**
Project / Period: [name or date range]
Generated: [date]
Total Insights Logged: [n] | Total Decisions Logged: [n] | Unmapped Decisions: [n]

---

**TRACEABILITY ENTRIES**

For each linked pair:

| Field | Content |
|---|---|
| Insight ID | INS-001 |
| Insight Summary | [One sentence: finding, source, confidence] |
| Decision ID | DEC-001 |
| Decision Summary | [One sentence: action taken, by whom] |
| Decision Date | [Date or sprint/quarter] |
| Link Type | Direct / Contributory / Coincidental |
| Reasoning Chain | Insight stated → Interpreted as → Action chosen → Alternative rejected |
| Retrospective Outcome | Validated / Invalidated / Pending + one sentence explanation |

---

**GAP ANALYSIS**

- Decisions without research backing: [list with decision IDs]
- Insights that never influenced a decision: [list with insight IDs]
- Decisions that contradicted available research: [list with explanation]

---

**IMPACT SUMMARY**

- % of decisions with traceable research input: [n%]
- % of research-backed decisions later validated: [n%]
- Top insight by decision influence count: [insight ID and summary]
- Recommendation: [1-2 sentences on research process improvements based on gaps found]

---

Deliver the full log in markdown table format. Keep each reasoning chain entry to 3–4 clauses. If data is incomplete, fill available fields and mark missing fields as `[data not provided]` rather than omitting the row.
