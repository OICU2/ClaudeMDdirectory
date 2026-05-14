---
name: sales-call-scorecard-design
description: >
  Designs a structured sales call quality scorecard with weighted evaluation criteria for rep coaching and performance review. Use when someone says "I need to evaluate my reps' calls," asks about scoring sales conversations, or wants to build a call review framework. Also triggers when a manager wants to standardize call feedback, improve coaching consistency, or create objective criteria for talk-to-listen ratio, question depth, objection handling, or next-step commitment.
category: sales
tags: [sales-coaching, call-review, scorecard, rep-performance, quality-assurance]
author: community
---

# Sales Call Scorecard Designer

Builds a weighted, criteria-based scorecard for evaluating sales call quality that managers can use immediately for rep coaching sessions.

## Scorecard Design Workflow

1. **Clarify context before building** — Ask: What sales motion (inbound/outbound/discovery/demo/closing)? What rep seniority level? Is this for live monitoring or recorded call review?

2. **Define the five core evaluation dimensions** — Always include these categories with their default weights (adjust based on context):
   - **Talk-to-Listen Ratio** (15%) — Target: rep speaks 40–45% of call. Score 0 if rep dominates >65%; score 10 if ratio is 35–45%.
   - **Question Depth** (25%) — Evaluate ratio of discovery questions to surface questions. Penalize yes/no questions; reward multi-layered "why" and "impact" questions.
   - **Objection Handling** (20%) — Score on: acknowledgment, clarifying question asked, reframe attempted, resolution reached. Each step = points.
   - **Next-Step Commitment** (25%) — Score 0 if no next step set; 5 if vague; 10 only if specific date, time, and stakeholder confirmed on the call.
   - **Call Structure & Control** (15%) — Did rep set an agenda? Did rep confirm time? Did rep recap at close?

3. **Build the scoring rubric** — For each dimension, define three tiers:
   - **0–4 (Needs Improvement):** Specific failure behavior
   - **5–7 (Developing):** Partial execution with gaps
   - **8–10 (Proficient):** Exact behavior that earns full marks

4. **Assign weighted total calculation** — Multiply each raw score (0–10) by its weight percentage. Sum to produce a composite score out of 100. Define performance bands: 85–100 = Ready to replicate, 65–84 = Coach on gaps, below 65 = Structured improvement plan required.

5. **Add a coaching notes field** — Append a free-text section after each scored dimension for the reviewer to capture a specific quote or moment from the call that justifies the score.

6. **Include calibration guidance** — Provide 2–3 example call scenarios with pre-scored answers so multiple reviewers score consistently.

## Output Format

Produce a complete scorecard document with the following structure:

**Header block:** Call metadata fields (Rep name, Date, Call type, Reviewer, Deal stage)

**Scoring table:** Five rows (one per dimension), columns for Weight, Raw Score (0–10), Weighted Score, and Coaching Notes field

**Weighted total row:** Formula shown explicitly (e.g., `(8×0.25) + (7×0.20) + ...`) plus final composite score

**Performance band indicator:** Bold label showing which band the score falls into and what action it triggers

**Calibration examples:** Two pre-scored sample calls (one high performer, one struggling rep) showing how each dimension should be rated with brief justification

**Format:** Deliver as a clean markdown table for digital use, with a note that it can be converted to a Google Sheet or Notion template. Total length: 400–600 words excluding the calibration examples.
