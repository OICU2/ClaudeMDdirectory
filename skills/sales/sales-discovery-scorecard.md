---
name: sales-discovery-scorecard
description: >
  Generates a structured scoring rubric for evaluating opportunity quality after a discovery call. Use when someone says "I just finished a discovery call," asks how to score or qualify an opportunity, or wants to assess whether a deal is worth pursuing. Also activates when a rep needs to determine next steps after meeting with a prospect.
category: sales
tags: [discovery, scoring, qualification, pipeline, opportunity-assessment]
author: community
---

# Sales Discovery Scorecard

This skill produces a weighted scoring rubric that sales reps complete after discovery calls to objectively rate opportunity quality and generate clear, prioritized next steps.

## Scoring Rubric Workflow

1. **Gather context** — Ask the rep for: prospect name/company, their role, deal size estimate, and a 2–3 sentence summary of the call. If not provided, prompt for these before scoring.

2. **Score each dimension** — Evaluate the opportunity across these six categories, assigning 1–5 points each:

   - **Pain Clarity** (1–5): How clearly did the prospect articulate a specific business problem? (1 = vague/no pain, 5 = quantified, urgent pain)
   - **Budget Signal** (1–5): Was budget discussed or implied? (1 = no mention, 5 = confirmed budget and authority)
   - **Decision Process** (1–5): Do you understand who decides and how? (1 = unknown, 5 = full process mapped with timeline)
   - **Champion Strength** (1–5): Is there an internal advocate? (1 = no champion identified, 5 = strong champion with influence)
   - **Competitive Position** (1–5): What is your standing vs. alternatives? (1 = incumbent or strong competitor, 5 = clear differentiation acknowledged)
   - **Fit & Feasibility** (1–5): Can your solution actually solve their problem? (1 = poor fit, 5 = near-perfect fit with proof points)

3. **Calculate total score** — Sum all six dimensions (max 30 points).

4. **Apply qualification tier**:
   - **24–30 — Tier 1 (Pursue Aggressively)**: High-quality opportunity; move fast
   - **16–23 — Tier 2 (Develop Further)**: Promising but gaps exist; targeted next steps required
   - **8–15 — Tier 3 (Qualify or Disqualify)**: Significant unknowns; do not advance without answers
   - **Below 8 — Tier 4 (Deprioritize)**: Poor fit or low intent; flag and park

5. **Identify the two lowest-scoring dimensions** — These become the focus of next steps.

6. **Generate next steps** — Produce 2–4 specific, time-bound actions tied directly to the gap dimensions. Each action must name a responsible party and a deadline.

## Output Format

Produce a clean scorecard in this structure:

---

**Discovery Scorecard — [Prospect Name / Company]**
*Call Date: [date if provided] | Deal Size Estimate: [amount if provided]*

| Dimension | Score (1–5) | Notes |
|---|---|---|
| Pain Clarity | X | [1-sentence rationale] |
| Budget Signal | X | [1-sentence rationale] |
| Decision Process | X | [1-sentence rationale] |
| Champion Strength | X | [1-sentence rationale] |
| Competitive Position | X | [1-sentence rationale] |
| Fit & Feasibility | X | [1-sentence rationale] |
| **Total** | **X / 30** | |

**Qualification Tier: [Tier # — Label]**
[1–2 sentences explaining what this tier means for this specific deal.]

**Top Gaps to Address:**
1. [Dimension] — [What is unknown or weak]
2. [Dimension] — [What is unknown or weak]

**Recommended Next Steps:**
1. [Specific action] — Owner: [Rep/Prospect/Other] — Due: [timeframe]
2. [Specific action] — Owner: [Rep/Prospect/Other] — Due: [timeframe]
3. [Specific action if needed] — Owner: [Rep/Prospect/Other] — Due: [timeframe]
