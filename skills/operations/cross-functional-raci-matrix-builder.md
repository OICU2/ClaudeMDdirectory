---
name: cross-functional-raci-matrix-builder
description: >
  Generates a structured RACI matrix that maps roles, responsibilities, accountabilities, and consulted/informed parties across cross-functional operational processes. Use when someone says "we need to clarify who owns what," asks about defining responsibilities across teams, or wants to map out decision-making authority for a process. Also activates when someone needs to resolve role confusion, build an accountability framework, or document stakeholder involvement in a workflow.
category: operations
tags: [raci, accountability, operations, process-design, stakeholder-management]
author: community
---

# Cross-Functional RACI Matrix Builder

This skill generates a complete RACI matrix that clarifies ownership, accountability, and communication responsibilities across teams for any operational process.

## Workflow

1. **Gather process scope**: Identify the process or project being mapped. If not provided, ask for the process name, start/end boundaries, and key outcomes.

2. **Identify roles**: Extract or request all roles involved (not individuals — use titles or team names). Typical categories: executive sponsor, product owner, engineering, legal, finance, marketing, operations, external vendors.

3. **Enumerate process steps or decisions**: Break the process into 6–15 discrete tasks, decisions, or milestones. Each row in the matrix should represent one actionable step or decision point.

4. **Assign RACI codes** for each role × step combination using strict definitions:
   - **R (Responsible)**: Does the work. At least one R per row required.
   - **A (Accountable)**: Owns the outcome, approves deliverables. Exactly one A per row — no exceptions.
   - **C (Consulted)**: Provides input before action is taken. Two-way communication.
   - **I (Informed)**: Notified after action is taken. One-way communication.
   - Leave cell blank if a role has no involvement in that step.

5. **Validate the matrix**:
   - Flag any row with no A assigned.
   - Flag any row with no R assigned.
   - Flag any role column that is entirely blank (remove or justify).
   - Flag any role that holds A on more than 60% of rows (likely over-centralized).
   - Flag any row with more than 2 roles marked R (likely unclear ownership).

6. **Surface conflicts or gaps**: Call out ambiguous ownership, missing stakeholders, or steps where consulted parties may slow execution.

7. **Recommend clarifications**: For flagged issues, suggest reassignments or ownership splits with a one-line rationale each.

## Output Format

Produce the following sections in order:

**1. Process Overview**
- Process name and scope (2–3 sentences)
- Roles included and their definitions (bulleted list)

**2. RACI Matrix**
- Rendered as a markdown table
- Rows = process steps or decisions (numbered)
- Columns = roles
- Cells = R, A, C, I, or blank
- Bold any A cell for visual clarity

**3. Validation Summary**
- Bulleted list of flagged issues (or "No issues found" if clean)
- Each flag includes: row/column reference, issue type, recommended fix

**4. Ownership Highlights**
- 3–5 bullet points summarizing key accountability concentrations, cross-team dependencies, or bottleneck risks

**5. Next Steps**
- 3 concrete actions to finalize and socialize the RACI (e.g., schedule sign-off meeting, post to shared wiki, review with legal)

Target length: 400–800 words plus the matrix table. Use plain language. Avoid jargon beyond standard RACI terminology.
