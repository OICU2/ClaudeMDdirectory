---
name: standard-operating-procedures
description: >
  Writes clear, structured Standard Operating Procedures (SOPs) that enable consistent execution without direct supervision. Use when someone says "write an SOP for," asks to "document this process," wants to "standardize how we handle," needs to "create a runbook for," or says "make a procedure for." Produces step-by-step documents any team member can follow independently.
category: operations
tags: [sop, documentation, process, runbook, operations]
author: community
---

# Standard Operating Procedures

Creates structured, unambiguous SOPs that any qualified team member can execute consistently without needing to ask clarifying questions.

## SOP Writing Workflow

### 1. Clarify Scope Before Writing
Ask these questions if not already answered:
- Who is the intended executor (role/experience level)?
- What triggers this procedure (event, schedule, request)?
- What does "done correctly" look like (success criteria)?
- Are there known failure points or edge cases?
- What tools, access, or prerequisites are required?

### 2. Structure Every SOP With These Sections

**Header Block**
- SOP Title (action-oriented: "Processing a Refund Request," not "Refunds")
- Version and last-updated date
- Owner (role responsible for maintaining this SOP)
- Applies to (who executes this)
- Estimated time to complete

**Purpose (2–3 sentences)**
- What this procedure accomplishes
- Why it matters (consequence of doing it wrong)

**Scope**
- When this SOP applies
- When it does NOT apply (explicit exclusions)

**Prerequisites**
- Required access, tools, accounts, permissions
- Prior steps or conditions that must be true before starting
- Knowledge or training assumed

**Procedure Steps**
- Numbered sequentially (1, 2, 3 — not bullets)
- One action per step
- Written in imperative voice ("Click," "Enter," "Verify" — not "You should click")
- Include exact values, thresholds, field names, or URLs where relevant
- Decision points formatted as:
  ```
  IF [condition] → go to Step X
  IF [condition] → go to Step Y
  ```
- Warning or caution notes inline:
  ```
  ⚠️ WARNING: [consequence if step is skipped or done wrong]
  ```

**Verification / Quality Check**
- Specific checks executor performs to confirm successful completion
- What the correct output looks like (screenshots, values, states)

**Escalation**
- Conditions that require escalating (specific, not vague)
- Who to contact and how
- What information to include when escalating

**Troubleshooting**
- Table or list of common failure modes with resolution steps:
  | Symptom | Likely Cause | Resolution |
  |---------|-------------|------------|

**Related Documents**
- Links or names of related SOPs, policies, or templates

### 3. Writing Rules
- Use plain language — aim for 8th-grade reading level
- Define any acronym on first use
- Never use "etc." or "as needed" — be explicit
- Avoid passive voice in steps
- Test the SOP mentally: could a new hire follow it without asking questions?
- If a step requires judgment, define the decision criteria explicitly

### 4. Review Pass
Before finalizing, verify:
- [ ] Every step has exactly one action
- [ ] No assumed knowledge that isn't listed in Prerequisites
- [ ] All decision branches have explicit outcomes
- [ ] Success criteria are measurable, not subjective
- [ ] Escalation conditions are specific enough to trigger without judgment

## Output Format

Produce the complete SOP as a structured Markdown document using the sections above. Length scales with complexity — a simple 5-step process may be 300 words; a complex multi-system procedure may be 1,000+. Never pad for length or truncate for brevity. Include all sections even if brief. Use numbered lists for procedure steps, tables for troubleshooting, and code blocks for exact commands, values, or system inputs. Deliver one complete, ready-to-use document.