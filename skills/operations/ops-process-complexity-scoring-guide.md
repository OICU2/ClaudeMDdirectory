---
name: ops-process-complexity-scoring-guide
description: >
  Scores operational processes by counting steps, decision points, and handoffs to surface simplification opportunities. Use when someone says "this process feels too complicated," asks about process efficiency, wants to audit a workflow for bottlenecks, needs to prioritize which processes to streamline, or is trying to identify where operations are breaking down.
category: operations
tags: [process-improvement, workflow-analysis, operations, complexity-scoring, simplification]
author: community
---

# Ops Process Complexity Scoring Guide

This skill analyzes any operational process by scoring it across three dimensions—steps, decision points, and handoffs—to produce a complexity score and targeted simplification recommendations.

## Scoring Workflow

1. **Extract the process inventory**: Ask the user to describe or paste the process. If it exists as a list, doc, or SOP, accept it directly. Clarify scope if ambiguous (where does this process start and end?).

2. **Count Steps (S)**: Count every discrete action, task, or activity in the process. Each verb-driven action = 1 step. Do not conflate sub-steps; if it requires a separate action, count it separately.

3. **Count Decision Points (D)**: Count every point where a condition is evaluated and the path branches (if/then, approvals, exception handling, reviews with pass/fail outcomes). Each binary or multi-path branch = 1 decision point.

4. **Count Handoffs (H)**: Count every time ownership, responsibility, or information transfers between people, teams, systems, or departments. A tool-to-person or person-to-system transfer counts.

5. **Calculate the Complexity Score**:
   - Raw Score = S + (D × 2) + (H × 3)
   - Decision points are weighted ×2 because they introduce ambiguity and delay.
   - Handoffs are weighted ×3 because they are the leading cause of errors, delays, and dropped context.

6. **Apply the Complexity Tier**:
   - **0–10**: Low complexity. Minimal optimization needed.
   - **11–25**: Moderate complexity. Identify and eliminate 1–2 high-friction points.
   - **26–45**: High complexity. Redesign candidates exist; target handoffs first.
   - **46+**: Critical complexity. Process likely needs full restructuring or automation audit.

7. **Identify Top Simplification Opportunities**: For each process, flag:
   - Any handoff that does not change the output (candidate for elimination)
   - Any decision point with a >90% default answer (candidate for automation or default rule)
   - Any sequential steps that can run in parallel
   - Any step requiring manual data entry that could be automated

8. **Benchmark against a simplified target**: Propose a realistic reduced-score version by suggesting specific removals or consolidations.

## Output Format

Produce a structured analysis with these sections:

**Process Name**: [Name or description provided]

**Inventory Count**
- Steps (S): [count]
- Decision Points (D): [count]
- Handoffs (H): [count]

**Complexity Score**: [Raw Score] → [Tier: Low / Moderate / High / Critical]

**Score Breakdown**
| Component | Count | Weight | Subtotal |
|-----------|-------|--------|----------|
| Steps | S | ×1 | S |
| Decision Points | D | ×2 | D×2 |
| Handoffs | H | ×3 | H×3 |
| **Total** | | | **Score** |

**Top Simplification Opportunities** (ranked by impact)
1. [Specific change] → Estimated score reduction: [X points]
2. [Specific change] → Estimated score reduction: [X points]
3. [Specific change] → Estimated score reduction: [X points]

**Simplified Target Score**: [projected score after changes] → [new tier]

**Next Step**: One recommended action the team can take this week to begin simplification.

Keep the output scannable. Use the table. Do not exceed one page equivalent. Avoid generic advice—every recommendation must reference a specific step, decision point, or handoff from the actual process described.
