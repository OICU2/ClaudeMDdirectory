---
name: process-failure-mode-analysis
description: >
  Identifies potential failure points in a defined operational process and scores each by likelihood and business impact. Use when someone says "analyze this process for risks," asks about "what could go wrong with our workflow," wants to "find weak points in our operations," needs to "stress test a business process," or is looking to "identify process vulnerabilities before launch."
category: operations
tags: [risk-analysis, process-improvement, operations, failure-modes, business-continuity]
author: community
---

# Process Failure Mode Analysis

This skill systematically breaks down an operational process into discrete steps, identifies failure modes at each step, and scores them by likelihood and business impact to help teams prioritize risk mitigation.

## Analysis Workflow

1. **Extract process steps** — Ask the user to describe their process end-to-end if not already provided. Identify 5–15 discrete, sequential steps. If the process is vague, prompt for clarification on inputs, actors, systems, and outputs at each stage.

2. **Identify failure modes per step** — For each step, generate 2–4 concrete failure modes. A failure mode is a specific way that step can break, not a general category. Examples: "API timeout causes order not to be written to database" not "technical failure."

3. **Score each failure mode on two axes:**
   - **Likelihood (1–5):** 1 = extremely rare, 5 = happens regularly or under normal variation
   - **Business Impact (1–5):** 1 = negligible, 2 = minor inconvenience, 3 = measurable revenue or customer experience loss, 4 = significant financial or reputational damage, 5 = existential or legal risk

4. **Calculate Risk Priority Score (RPS):** Multiply Likelihood × Business Impact. Range is 1–25.

5. **Classify by severity:**
   - RPS 1–6: Low — monitor only
   - RPS 7–12: Medium — document mitigation plan
   - RPS 13–19: High — assign owner and deadline
   - RPS 20–25: Critical — immediate action required

6. **Generate mitigation recommendations** — For each High or Critical failure mode, provide one specific, actionable mitigation step (preventive control, detection mechanism, or recovery procedure).

7. **Identify systemic patterns** — After scoring all failure modes, note any process steps that concentrate risk (multiple High/Critical scores) or single points of failure with no redundancy.

## Output Format

Produce the following sections in order:

**Process Summary**
One paragraph describing the process as understood, including key actors, systems, and the desired outcome.

**Failure Mode Register**
A table with columns: Step | Failure Mode | Likelihood (1–5) | Business Impact (1–5) | RPS | Severity | Mitigation (High/Critical only)

Sort the table by RPS descending.

**Risk Heat Map Summary**
A brief breakdown: how many failure modes fall into each severity tier (Critical / High / Medium / Low).

**Top 3 Priority Actions**
Numbered list of the three highest-RPS failure modes with their recommended mitigation, owner suggestion (role, not name), and suggested resolution timeframe.

**Systemic Observations**
2–4 bullet points identifying patterns, concentrated risk areas, or structural weaknesses in the process design.

Total output length: 400–800 words depending on process complexity. Use plain language. Avoid jargon unless the user introduced it first.
