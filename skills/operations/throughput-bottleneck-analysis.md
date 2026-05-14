---
name: throughput-bottleneck-analysis
description: >
  Analyzes workflow throughput data to identify the single binding constraint limiting overall operational capacity and output. Use when someone says "we can't keep up with demand," asks about "where our process is slowing down," wants to find what's limiting their output, mentions that one stage is always backed up, or needs to know why overall throughput isn't improving despite adding resources.
category: operations
tags: [throughput, bottleneck, constraint, capacity, workflow]
author: community
---

# Throughput Bottleneck Analysis

This skill identifies the single binding constraint in a workflow by analyzing stage-by-stage throughput, queue depths, and utilization rates, and is triggered when users need to diagnose why overall output is limited.

## Bottleneck Analysis Workflow

### Step 1: Gather Workflow Data
Ask the user to provide or estimate the following for each stage in their process:
- Stage name and sequence order
- Maximum capacity (units/hour, tasks/day, etc.)
- Actual current output rate
- Average queue or wait time before the stage
- Utilization rate (% of time the stage is actively working)

If exact data is unavailable, prompt for rough estimates or observable symptoms (e.g., "work piles up before step 3").

### Step 2: Map the Flow
Construct a linear or branching flow of stages from input to output. Identify:
- The designed flow sequence
- Any parallel paths that merge
- Rework loops that re-enter earlier stages

### Step 3: Apply the Five Bottleneck Indicators
Score each stage against these signals:

1. **Lowest throughput rate** — the stage producing the fewest units per time unit
2. **Highest utilization** — the stage closest to 100% busy with no idle time
3. **Longest upstream queue** — the stage with the most work waiting to enter it
4. **Starvation downstream** — stages after this one that frequently sit idle waiting for work
5. **Sensitivity test** — if you increased only this stage's capacity, would total output increase?

The stage with the highest concentration of these signals is the binding constraint.

### Step 4: Confirm the Single Constraint
Apply the Theory of Constraints rule: there is exactly one binding constraint at any moment. If multiple stages appear equally constrained, identify which one would yield the highest total throughput gain if relieved first.

### Step 5: Quantify the Impact
Calculate or estimate:
- Current system throughput (limited by the bottleneck)
- Theoretical throughput if the bottleneck were fully resolved
- The throughput gap (units/time lost due to the constraint)
- Utilization of non-bottleneck stages (to confirm they are not the true constraint)

### Step 6: Generate Recommendations
Provide prioritized actions using the Exploit → Subordinate → Elevate sequence:
1. **Exploit** — maximize what the bottleneck can do right now without adding resources (eliminate idle time, reduce defects entering it, prioritize highest-value work)
2. **Subordinate** — adjust all other stages to serve the bottleneck's pace, not their own local efficiency
3. **Elevate** — if exploitation is insufficient, recommend capacity additions specifically at the bottleneck

## Output Format

Produce a structured analysis with the following sections:

**Workflow Map**
A simple text-based or table representation of all stages with their throughput rates and utilization.

**Bottleneck Identification**
- Identified bottleneck stage (name it explicitly)
- Evidence: list which of the five indicators it triggered
- Confidence level: High / Medium / Low with brief justification

**Throughput Impact Table**
| Metric | Current | If Bottleneck Resolved |
|---|---|---|
| System throughput | X units/period | Y units/period |
| Throughput gap | — | +Z units/period |
| Bottleneck utilization | X% | Target % |

**Recommended Actions**
Numbered list of 3–5 specific actions, labeled as Exploit, Subordinate, or Elevate, ordered by implementation priority and estimated impact.

**Next Constraint Warning**
Identify which stage is likely to become the new bottleneck once the current one is resolved, so the user can begin monitoring it.

Length: Medium (300–600 words for the analysis body). Use tables and bullet points. Avoid narrative padding.
