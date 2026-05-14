---
name: ops-process-risk-heat-mapping
description: >
  Scores and visualizes operational processes by likelihood and impact of failure to prioritize mitigation effort and resource allocation. Use when someone says "which processes are most at risk," asks about prioritizing operational risk, wants to build a risk heat map, needs to assess process vulnerabilities, or wants to know where to focus risk mitigation resources.
category: operations
tags: [risk-management, process-analysis, heat-map, operations, prioritization]
author: community
---

# Process Risk Heat Mapping

This skill scores operational processes on failure likelihood and business impact, then maps them into a heat map matrix to guide mitigation priority and resource allocation decisions.

## Risk Assessment Workflow

1. **Collect process inventory** — Ask the user to list all operational processes in scope, or extract them from any documentation provided. If none are given, prompt: "List the operational processes you want to assess."

2. **Score each process on two axes:**
   - **Likelihood of failure** (1–5): 1 = rare/unlikely, 3 = occasional, 5 = frequent/near-certain
   - **Impact of failure** (1–5): 1 = negligible disruption, 3 = moderate business effect, 5 = critical/catastrophic

3. **Apply scoring criteria consistently:**
   - Likelihood factors: process age, automation level, dependency count, historical incident rate, staff turnover in that area
   - Impact factors: revenue affected, customer-facing vs. internal, regulatory exposure, recovery time, downstream process dependencies

4. **Calculate risk score** for each process: `Risk Score = Likelihood × Impact` (range: 1–25)

5. **Classify into risk zones:**
   - **Critical (scores 16–25):** Immediate mitigation required
   - **High (scores 10–15):** Prioritize in next planning cycle
   - **Medium (scores 5–9):** Monitor and schedule improvements
   - **Low (scores 1–4):** Accept or review annually

6. **Map to heat map grid** — Place each process in a 5×5 matrix with Impact on the Y-axis (1=bottom, 5=top) and Likelihood on the X-axis (1=left, 5=right). Color zones: red (Critical), orange (High), yellow (Medium), green (Low).

7. **Identify top priorities** — Surface the top 3–5 processes by risk score and flag any process scoring 5 on either axis regardless of total score (single-axis extremes warrant attention).

8. **Recommend mitigation actions** — For each Critical and High process, suggest one of: eliminate the process, reduce likelihood (controls, automation, training), reduce impact (redundancy, rollback plans, insurance), or transfer risk (vendor SLAs, outsourcing).

## Output Format

Produce the following sections in order:

**1. Risk Score Table**
A markdown table with columns: Process Name | Likelihood (1–5) | Impact (1–5) | Risk Score | Risk Zone

**2. Heat Map Grid**
A text-based 5×5 grid using emoji or ASCII color indicators (🟥 Critical, 🟧 High, 🟨 Medium, 🟩 Low) with process names placed in their corresponding cells.

**3. Priority Action List**
Numbered list of top 3–5 processes by risk score, each with:
- Process name and score
- Primary risk driver (high likelihood vs. high impact)
- One specific recommended mitigation action

**4. Summary Statement**
2–3 sentences stating overall risk posture, the single highest-priority process, and the recommended first action for leadership review.

Keep the full output scannable — tables and lists preferred over prose. If fewer than 5 processes are provided, note that heat map coverage is limited and recommend expanding the assessment scope.
