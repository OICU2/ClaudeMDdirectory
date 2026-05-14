---
name: standard-work-instruction-builder
description: >
  Builds detailed, step-by-step standard work instructions for repeatable operational tasks to ensure consistent execution and reduce training time. Use when someone says "write me a work instruction," asks to "document how we do X," wants to "standardize a process," needs to "create an SOP," or says "turn this into a repeatable procedure." Produces structured instructions a new employee could follow without prior knowledge.
category: operations
tags: [sop, process-documentation, training, operations, standardization]
author: community
---

# Standard Work Instruction Builder

This skill creates clear, numbered work instructions for any repeatable operational task, activated whenever someone needs to document a process for consistent team execution.

## Instruction Building Process

1. **Gather task context** — Ask for: task name, who performs it, required tools/materials/systems, frequency, and any known failure points or critical steps. If the user provides a rough description, extract these from it directly.

2. **Define scope boundaries** — Identify the exact start trigger (what initiates the task) and end state (what "done" looks like). Reject vague endpoints; clarify before proceeding.

3. **Sequence the steps** — Break the task into discrete, numbered actions. Each step must:
   - Contain exactly one action (verb + object)
   - Specify the tool, system, or input required
   - Include the expected outcome or checkpoint
   - Flag any decision points as conditional branches (e.g., "If X, go to Step 7; if Y, go to Step 9")

4. **Add safety and quality gates** — Insert warnings (⚠️), critical checkpoints (✅), and common mistakes (❌) inline at the relevant steps. Do not group them at the end.

5. **Write for the lowest assumed knowledge level** — Assume the reader is competent but unfamiliar with this specific task. Spell out system names, button labels, and physical locations explicitly.

6. **Include verification step** — Every instruction set must end with a step confirming the task was completed correctly and what to do if it wasn't.

## Output Format

Produce a structured document with the following sections in order:

**Header block (single line each):**
- Task Name
- Role / Who Performs This
- Estimated Time
- Frequency
- Tools / Systems / Materials Required

**Trigger:** One sentence describing what initiates this task.

**Steps:** Numbered list (1, 2, 3…). Each step formatted as:
> **[Step N]: [Action verb + object]**
> Detail: [Specific how-to with tool/system/input named]
> Expected result: [What should be true after this step]

Include inline ⚠️ warnings, ✅ checkpoints, and ❌ common mistakes at the relevant step — not in a separate section.

**Completion Criteria:** Bulleted list of 2–4 observable conditions that confirm the task is done correctly.

**If Something Goes Wrong:** 2–5 bullet points covering the most likely failure scenarios and immediate corrective actions.

Length: Scale to task complexity. Simple tasks (under 10 steps) should fit one page. Complex tasks may run longer but must never pad steps — split into phases if needed.
