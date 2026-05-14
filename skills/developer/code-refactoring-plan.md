---
name: code-refactoring-plan
description: >
  Produces a phased refactoring roadmap for a legacy module, breaking changes into safe incremental steps with rollback criteria and test checkpoints at each stage. Use when someone says "refactor this legacy code", asks about "how to safely modernize a module", wants to "clean up technical debt without breaking production", needs to "untangle spaghetti code", or asks "how do I incrementally rewrite this component".
category: developer
tags: [refactoring, legacy-code, technical-debt, incremental, testing]
author: community
---

# Code Refactoring Plan

This skill generates a structured, phased refactoring roadmap for legacy or complex modules, ensuring each step is safe, reversible, and validated before proceeding to the next.

## Refactoring Roadmap Workflow

1. **Audit the current state** — Identify the module's responsibilities, external dependencies, entry/exit points, and existing test coverage. Note what is untested or tightly coupled.

2. **Define the refactoring goal** — State the target outcome clearly: improved readability, decoupling, performance, pattern alignment, or language/framework upgrade. Scope strictly to the module in question.

3. **Establish a safety baseline** — Before any changes, document or create characterization tests that capture existing behavior. These tests define "correct" for rollback purposes.

4. **Identify phase boundaries** — Break the work into phases where each phase:
   - Changes one concern at a time (naming, structure, logic, dependencies)
   - Leaves the system in a deployable state at its end
   - Does not require another phase to be complete to be valid

5. **For each phase, specify**:
   - **Scope**: Exactly what files, functions, or patterns are touched
   - **Steps**: Ordered sub-tasks within the phase (e.g., extract method, inline variable, replace inheritance with composition)
   - **Test checkpoint**: What tests must pass before the phase is considered done
   - **Rollback criteria**: Conditions that trigger reverting the phase (e.g., test failure count, performance regression threshold, integration breakage)
   - **Rollback method**: Git tag, feature flag toggle, or specific revert command

6. **Flag high-risk changes** — Mark any step that modifies public interfaces, shared state, database schemas, or serialization formats as HIGH RISK. These require explicit sign-off steps or parallel-run validation.

7. **Sequence dependencies** — If Phase B depends on Phase A, state it explicitly. Avoid phases that create partial states requiring immediate follow-up phases to be stable.

## Output Format

Produce a numbered phase list with the following structure for each phase:

```
## Phase N: [Short Title]
**Goal**: One sentence describing what this phase achieves.
**Scope**: Files, classes, or functions affected.
**Steps**:
  1. [Specific action]
  2. [Specific action]
**Test Checkpoint**: [What to run and what passing looks like]
**Rollback Criteria**: [Condition that triggers rollback]
**Rollback Method**: [Exact step to undo — git revert, flag toggle, etc.]
**Risk Level**: LOW / MEDIUM / HIGH
**Notes**: [Optional — flags for parallel runs, API versioning, migration scripts]
```

- Include a **Pre-Refactor Checklist** at the top (baseline tests, branch strategy, dependency freeze)
- Include a **Completion Criteria** section at the end defining when the full refactor is done
- Length scales with complexity: simple modules get 2–3 phases, large rewrites get 5–8 phases
- Use code references (file paths, function names) when the user has provided source material
