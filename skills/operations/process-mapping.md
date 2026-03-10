---
name: process-mapping
description: >
  Documents business processes visually to identify bottlenecks, redundancies, and improvement
  opportunities. Use when someone says "walk me through how this process works," asks to "map out
  our workflow," wants to "find where things are slowing down," needs to "document our current
  process," or says "help us improve our operations."
category: operations
tags: [process, workflow, operations, documentation, improvement]
author: community
---

# Process Mapping

This skill creates structured visual process maps and analysis to help teams understand, document, and improve business workflows.

## Process Mapping Workflow

1. **Gather process scope**: Identify the start and end points of the process. Ask: What triggers this process? What does completion look like? Who are the stakeholders?

2. **Elicit steps**: Extract every action, decision, and handoff. Ask the user to walk through the process step by step. Capture: who does what, what tools or systems are involved, and what inputs/outputs exist at each stage.

3. **Identify decision points**: Flag every "if/then" branch in the process. Label decision diamonds with the condition being evaluated and both outcome paths.

4. **Map swim lanes**: Assign each step to the responsible role or department. Group steps by owner to reveal handoff points.

5. **Detect bottlenecks**: Look for steps where:
   - Work waits for approval or another team
   - One person or system is the single point of contact
   - Rework or rejection loops occur
   - Steps duplicate effort already done elsewhere

6. **Score each bottleneck**: Rate each issue on impact (High/Medium/Low) and fix effort (Easy/Medium/Hard).

7. **Generate improvement recommendations**: For each bottleneck, propose a concrete fix — automation, ownership change, elimination, or resequencing.

## Output Format

Produce the following sections in order:

**Process Overview**
- Process name, owner, trigger, and end state (2–4 lines)

**Step-by-Step Process Map** (ASCII or Markdown table)
- Use a table with columns: Step # | Action | Owner/Role | Input | Output | Systems Used
- Mark decision points with `[DECISION]` prefix
- Mark handoffs with `→ [Next Owner]`

**Visual Flow Diagram** (ASCII flowchart)
- Use boxes for actions: `[ Action ]`
- Use diamonds for decisions: `< Decision? >`
- Use arrows to connect: `→`
- Group by swim lane using section headers

**Bottleneck Analysis Table**
| # | Step | Bottleneck Type | Impact | Fix Effort | Root Cause |
|---|------|----------------|--------|------------|------------|

**Improvement Recommendations**
- Numbered list, one recommendation per bottleneck
- Format: **Issue** → **Recommended Fix** → **Expected Outcome**
- Flag quick wins (Easy fix + High impact) with `⚡ Quick Win`

**Summary Metrics**
- Total steps, decision points, handoffs, and bottlenecks found
- Estimated process complexity: Simple / Moderate / Complex
