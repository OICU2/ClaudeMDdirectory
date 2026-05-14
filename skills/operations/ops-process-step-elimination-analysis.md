---
name: ops-process-step-elimination-analysis
description: >
  Evaluates each step in an existing workflow to identify redundant, duplicative, or low-value activities that can be safely removed without degrading output quality or introducing risk. Use when someone says "our process has too many steps," asks about streamlining a workflow, wants to cut unnecessary approvals or handoffs, is trying to reduce cycle time, or needs to audit a process for waste. Produces a step-by-step elimination recommendation with justification and impact assessment.
category: operations
tags: [process-improvement, workflow-optimization, waste-reduction, lean-operations, efficiency]
author: community
---

# Process Step Elimination Analysis

This skill systematically audits each step in a described workflow to flag redundant, low-value, or removable activities, and produces a prioritized elimination recommendation with risk and impact notes.

## Analysis Workflow

1. **Capture the full process** — Ask the user to list every step in the workflow in sequence, including who performs it, how long it takes, and what its stated purpose is. If the process is already provided, proceed directly.

2. **Classify each step** by type:
   - **Value-adding**: Directly transforms input toward the desired output
   - **Business-necessary**: Required for compliance, audit, or stakeholder reasons but adds no direct value
   - **Non-value-adding (waste)**: Does not transform output and is not required — prime elimination candidate

3. **Apply elimination criteria** — Flag a step for elimination or consolidation if it meets one or more of these conditions:
   - Duplicate check or approval already performed at another step
   - Output is never used downstream or by any stakeholder
   - Step exists because of a past problem that no longer exists
   - Handoff creates delay with no quality gate benefit
   - Manual re-entry of data already captured elsewhere
   - Waiting step with no dependency logic
   - Approval from someone who rubber-stamps without review

4. **Assess elimination risk** for each flagged step:
   - **Low risk**: Safe to remove immediately with no mitigation needed
   - **Medium risk**: Can be removed with a simple safeguard or merged with adjacent step
   - **High risk**: Requires process redesign or stakeholder sign-off before removal

5. **Prioritize recommendations** — Order eliminations by impact-to-risk ratio: highest time savings with lowest removal risk first.

6. **Identify consolidation opportunities** — Where two steps cannot be fully eliminated, flag pairs that can be merged into a single step.

## Output Format

Produce a structured analysis with the following sections:

**Process Summary**
- Total steps reviewed
- Estimated current cycle time (if provided)
- Number of steps flagged for elimination or consolidation

**Step-by-Step Classification Table**
| Step # | Step Description | Classification | Recommendation | Risk Level | Rationale |
|--------|-----------------|----------------|----------------|------------|-----------|

Recommendation values: `Keep` | `Eliminate` | `Consolidate with [Step #]` | `Automate`

**Prioritized Elimination List**
Numbered list of recommended removals in order of highest value first. Each entry includes:
- Step name/number
- Time or effort saved (estimated)
- Risk level
- One-sentence justification
- Any prerequisite action before removal

**Consolidated Process (Proposed)**
A rewritten step list showing only the steps that remain after applying all low- and medium-risk eliminations.

**Deferred Actions**
Steps flagged as high-risk with a note on what would need to happen before they can be removed.

Keep the tone direct and analytical. Flag assumptions explicitly. Do not recommend elimination without a stated rationale tied to the elimination criteria.
