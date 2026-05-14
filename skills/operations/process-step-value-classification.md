---
name: process-step-value-classification
description: >
  Labels each step in an operational workflow as value-adding (VA), necessary non-value-adding (NNVA), or pure waste to prioritize elimination and improvement efforts. Use when someone wants to analyze a process for waste, asks which steps in their workflow actually add value, needs to identify what to cut from an operational process, wants to do a lean analysis of their workflow, or is trying to figure out where to focus process improvement efforts.
category: operations
tags: [lean, process-improvement, waste-elimination, value-stream, operations]
author: community
---

# Process Step Value Classification

This skill analyzes each step in a described workflow and classifies it as value-adding, necessary non-value-adding, or pure waste so Claude can surface clear elimination and improvement priorities.

## Classification Workflow

1. **Capture the process steps.** Ask the user to list or describe every step in the workflow in sequence. If they provide a rough description, extract discrete steps before classifying.

2. **Apply the three-category test to each step:**
   - **Value-Adding (VA):** The customer would pay for it, it physically or informationally transforms the product/service, and it is done right the first time. All three criteria must be true.
   - **Necessary Non-Value-Adding (NNVA):** Does not meet VA criteria but is currently required due to regulation, contract, system constraint, or business risk. Cannot be eliminated today without significant consequence.
   - **Pure Waste (NVA):** Fails VA criteria and has no regulatory, contractual, or system-level justification. Candidates for immediate elimination.

3. **Identify the waste type for every NVA and NNVA step** using the eight lean wastes: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing (DOWNTIME).

4. **Assign an elimination priority** to each NVA/NNVA step:
   - **High:** Can be eliminated or automated with low effort and high impact
   - **Medium:** Requires process redesign or system change
   - **Low:** Constrained by regulation, contract, or dependency outside team control

5. **Summarize findings** with total step counts per category and the top 3 highest-priority actions.

## Output Format

Produce a structured table followed by a summary block.

**Classification Table** (one row per step):

| # | Step Name | Classification | Waste Type (if NVA/NNVA) | Priority | Rationale |
|---|-----------|---------------|--------------------------|----------|-----------|
| 1 | [Step] | VA / NNVA / NVA | — / DOWNTIME category | High/Med/Low/— | 1-sentence reason |

**Summary Block:**

```
TOTAL STEPS: [n]
  Value-Adding:                [n] ([x]%)
  Necessary Non-Value-Adding:  [n] ([x]%)
  Pure Waste:                  [n] ([x]%)

TOP 3 PRIORITY ACTIONS:
1. [Specific action] — eliminates/reduces [step name] — expected impact: [brief]
2. [Specific action] — eliminates/reduces [step name] — expected impact: [brief]
3. [Specific action] — eliminates/reduces [step name] — expected impact: [brief]
```

Keep rationale cells to one sentence. Do not pad the table with uncertainty disclaimers — make a classification call and state the reasoning.
