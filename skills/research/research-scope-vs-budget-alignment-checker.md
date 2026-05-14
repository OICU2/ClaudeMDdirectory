---
name: research-scope-vs-budget-alignment-checker
description: >
  Analyzes research project plans to identify mismatches between stated objectives, available budget, and timeline constraints. Use when someone says "I'm not sure if our budget is realistic," asks whether their research plan is feasible, wants to check if their scope is too ambitious, mentions running out of funding mid-study, or needs help prioritizing research activities given financial limits. Surfaces concrete trade-offs and actionable scope adjustments.
category: research
tags: [research-planning, budget-analysis, scope-management, feasibility, trade-offs]
author: community
---

# Research Scope vs. Budget Alignment Checker

This skill evaluates whether a research project's objectives, budget, and timeline are mutually achievable, then flags specific misalignments and recommends prioritized scope trade-offs.

## Alignment Analysis Workflow

**Step 1 — Extract Key Inputs**
Identify and list explicitly:
- Research objectives (primary and secondary)
- Total available budget with breakdown if provided
- Timeline (start date, end date, key milestones)
- Team size and roles
- Methodologies planned (surveys, interviews, lab work, data licensing, etc.)

If any of these are missing, ask for them before proceeding.

**Step 2 — Estimate Resource Requirements**
For each stated objective, estimate:
- Time required (person-hours or weeks)
- Direct costs (tools, participants, licenses, materials)
- Hidden costs (transcription, analysis software, IRB fees, travel, contingency buffer — typically 10–20%)
- Dependencies that could cause delays or cost overruns

**Step 3 — Run the Alignment Check**
Compare estimated requirements against stated budget and timeline across three dimensions:

- **Budget gap**: Sum estimated costs vs. available funds. Flag if estimated costs exceed budget by more than 10%.
- **Timeline gap**: Map objective completion time against available calendar time. Flag if critical path exceeds deadline.
- **Scope-resource ratio**: Identify objectives that consume disproportionate resources relative to their priority or impact.

**Step 4 — Classify Each Objective**
Tag every objective as one of:
- ✅ **Feasible** — fits within budget and timeline with margin
- ⚠️ **At Risk** — feasible only if assumptions hold perfectly or if lower-priority work is cut
- ❌ **Misaligned** — cannot be completed as stated within constraints

**Step 5 — Generate Trade-Off Options**
For each ❌ or ⚠️ item, produce at least two concrete alternatives:
- **Descope**: Reduce sample size, narrow geographic scope, use secondary data instead of primary collection, etc.
- **Defer**: Move objective to a follow-on phase or future funding cycle
- **Substitute**: Replace expensive method with a lower-cost proxy (e.g., online survey instead of in-person interviews)
- **Rebudget**: Identify where existing budget could be reallocated from lower-priority items

## Output Format

Produce a structured report with the following sections:

---

**Project Summary**
- Objectives listed (numbered)
- Budget: $[amount] | Timeline: [start] – [end] | Team: [size]

**Estimated Cost & Time Breakdown**
A table with columns: Objective | Estimated Cost | Estimated Time | % of Budget Used

**Alignment Flags**
Bullet list of every misalignment found, each formatted as:
> ❌/⚠️ [Objective name]: [Specific problem — e.g., "Recruiting 500 participants exceeds budget by ~$8,000 and requires 6 weeks beyond deadline"]

**Trade-Off Recommendations**
Numbered list of prioritized actions, each with:
- What to change
- Expected savings (time or money)
- Impact on research quality or validity

**Revised Feasible Scope**
A plain-language summary of what the project can realistically accomplish within stated constraints if recommended trade-offs are adopted.

---

Length: Concise but complete. Use tables and bullets throughout. Avoid prose paragraphs in the analysis sections. Flag the single highest-priority fix first.
