---
name: end-to-end-process-time-study
description: >
  Breaks down an end-to-end operational process into discrete steps and measures the cycle time contribution of each to surface optimization targets. Use when someone says "our process takes too long," asks about where time is being lost in a workflow, or wants to identify bottlenecks in an operational sequence. Also triggers when someone wants to reduce lead time, map out a process for efficiency, or understand which steps are slowing down delivery.
category: operations
tags: [process-improvement, cycle-time, bottleneck-analysis, operations, lean]
author: community
---

# End-to-End Process Time Study

This skill deconstructs an operational process into measurable steps, estimates or records the cycle time for each, and identifies the highest-impact targets for time reduction.

## Process Time Study Workflow

1. **Define process boundaries** — Establish the start event (e.g., customer order received) and end event (e.g., product delivered). Confirm scope with the user before proceeding.

2. **Elicit all process steps** — Ask the user to list every step in sequence. If they are vague, prompt with: "What happens immediately after X? Who does it? What triggers the next step?" Continue until the full sequence is documented.

3. **Capture time data for each step** — For each step, record:
   - **Process time**: Active work time (hands-on or system-active)
   - **Wait time**: Time the work sits idle before or after this step
   - **Total elapsed time**: Process time + wait time for this step

4. **Identify handoffs and queues** — Flag every point where work transfers between people, teams, or systems. These are primary sources of wait time and should be called out explicitly.

5. **Calculate cumulative time and contribution** — Sum total elapsed time across all steps. For each step, calculate its percentage contribution to the total end-to-end time: `(step elapsed time / total elapsed time) × 100`.

6. **Classify each step** — Label each step as:
   - **Value-adding (VA)**: Customer would pay for this activity
   - **Business necessary (BN)**: Required but not directly value-adding (e.g., compliance checks)
   - **Non-value-adding (NVA)**: Waste — eliminate, reduce, or automate

7. **Rank optimization targets** — Sort steps by elapsed time descending. Highlight the top 3–5 steps that are NVA or BN and represent the largest share of total time. These are the primary optimization targets.

8. **Generate improvement hypotheses** — For each top target, propose at least one concrete action: eliminate the step, reduce batch size, parallelize with another step, automate a handoff, or set a time-box limit.

## Output Format

Produce a structured time study report with the following sections:

**Process Overview**
- Process name, start event, end event
- Total end-to-end elapsed time
- Total value-adding time vs. non-value-adding time (absolute and percentage)

**Step-by-Step Breakdown Table**

| # | Step Name | Owner | Process Time | Wait Time | Elapsed Time | % of Total | Classification |
|---|-----------|-------|-------------|-----------|--------------|------------|----------------|
| 1 | ...       | ...   | ...         | ...       | ...          | ...        | VA / BN / NVA  |

**Bottleneck Summary**
- Bullet list of the top 3–5 time-consuming steps with their elapsed time and classification
- One-line explanation of why each is a bottleneck

**Optimization Targets**
- Numbered list of recommended actions, each tied to a specific step
- For each: action, expected time savings (estimated), and implementation difficulty (Low / Medium / High)

**Quick Wins**
- 2–3 changes that can be made immediately with low effort and meaningful impact

Length: As long as needed to cover all steps accurately. Use tables for the step breakdown. Use plain language throughout — avoid jargon unless the user introduced it.
