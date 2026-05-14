---
name: process-input-output-mapping
description: >
  Maps every step in an operational process to its specific inputs, outputs, owners, and handoff points to surface inefficiencies and accountability gaps. Use when someone says "we don't know who owns this step," asks about where a process breaks down, or wants to document a workflow end-to-end. Also triggers when someone needs to find bottlenecks in a process or clarify what each team is responsible for handing off.
category: operations
tags: [process-mapping, operations, accountability, workflow, handoffs]
author: community
---

# Process Input-Output Mapping

This skill produces a structured table mapping each step in an operational process to its inputs, outputs, owner, and handoff points so accountability gaps and inefficiencies become visible.

## Mapping Workflow

1. **Identify the process scope**: Ask the user for the process name, start trigger, and end state if not already provided. Confirm the level of granularity (high-level phases vs. individual tasks).

2. **Extract or elicit steps**: List every discrete step in sequence. If the user provides a rough description, break it into atomic steps. Each step must have a clear verb-noun name (e.g., "Review invoice," "Approve purchase order").

3. **For each step, capture these six fields**:
   - **Step #**: Sequential number
   - **Step Name**: Verb-noun label
   - **Inputs**: What must exist or arrive for this step to begin (documents, data, decisions, physical items)
   - **Outputs**: What this step produces or transforms (deliverable, updated record, decision, notification)
   - **Owner**: Role or team responsible for completing the step (not a person's name — use role)
   - **Handoff To**: The next role or system that receives the output and what triggers the handoff

4. **Flag accountability gaps**: After completing the table, identify any step where:
   - Owner is unclear or shared without a tiebreaker
   - The output of one step does not match the input of the next
   - Handoff mechanism is undefined (e.g., "verbally" or "whenever")
   - A single owner controls both the input and approval of their own output

5. **Flag inefficiency signals**: Note steps where:
   - An output sits idle before the next step begins (queue buildup)
   - The same information is re-entered or re-created at multiple steps
   - More than two handoffs occur in sequence without value added

6. **Summarize findings**: After the table, write a short findings section listing the top 3–5 issues by severity.

## Output Format

Produce the following in order:

**1. Process Overview (2–3 lines)**
State the process name, trigger, and end state.

**2. Input-Output Map Table**
Use a markdown table with these exact columns:

| Step # | Step Name | Inputs | Outputs | Owner | Handoff To |
|--------|-----------|--------|---------|-------|------------|

Minimum 5 rows. Each cell must be specific — no "various" or "TBD."

**3. Accountability Gaps (bulleted list)**
Each bullet: `Step [#] — [Step Name]: [specific gap description]`

**4. Inefficiency Signals (bulleted list)**
Each bullet: `Step [#] — [Step Name]: [specific inefficiency description]`

**5. Recommended Next Actions (numbered list, max 5)**
Concrete actions to resolve the highest-priority gaps, each tied to a specific step number.

Total length: as long as the process requires — do not truncate steps to save space.
