---
name: feature-branch-merge-conflict-triage
description: >
  Analyzes conflicting file diffs across long-lived feature branches and produces a prioritized, safe merge resolution plan. Use when someone says "I have merge conflicts I can't untangle," asks about "resolving conflicts between feature branches," or wants to "figure out the safest order to merge branches." Also activates when someone shares multiple conflicting diffs and needs help triaging them, or when a team is stuck on a complex multi-branch integration.
category: developer
tags: [git, merge-conflicts, branching, code-review, devops]
author: community
---

# Feature Branch Merge Conflict Triage

This skill ingests conflicting diffs from multiple long-lived feature branches, identifies the root causes and dependencies of each conflict, and produces a prioritized merge order with concrete resolution steps.

## Conflict Analysis Workflow

1. **Collect inputs**: Request the branch names, their divergence point (common ancestor commit or base branch), and the conflicting diff hunks for each affected file. If the user hasn't provided diffs, ask them to run `git diff <base>..<branch>` for each branch and paste the output.

2. **Build a conflict map**: For each conflicting file, identify:
   - Which branches touch the file and which specific lines overlap
   - Whether conflicts are structural (imports, exports, function signatures) or logic-level (implementation bodies)
   - Whether any conflict is caused by a rename, deletion, or file move rather than an edit

3. **Classify conflict severity** for each file using three tiers:
   - **Blocking**: Both branches make incompatible structural changes (e.g., one deletes a function the other extends). Cannot auto-resolve.
   - **Risky**: Overlapping logic changes that may silently produce wrong behavior if naively combined. Requires careful manual review.
   - **Trivial**: Non-overlapping edits in the same file that a merge tool can handle or that differ only in formatting/whitespace.

4. **Detect inter-branch dependencies**: Determine if Branch A's changes depend on code introduced by Branch B (or vice versa). Flag circular dependencies explicitly.

5. **Derive safe merge order**: Using dependency direction and conflict severity, propose a linear merge sequence that minimizes the number of blocking conflicts encountered at each step. Prefer merging the branch with the most foundational/shared changes first.

6. **Generate per-conflict resolution instructions**: For each blocking or risky conflict, provide:
   - The exact lines in contention (quoted from the diffs)
   - A recommended resolution strategy (keep A, keep B, combine, or rewrite)
   - A concrete code snippet or pseudocode showing what the resolved section should look like
   - Any tests or checks that should be run to verify correctness after resolution

7. **Flag risks and caveats**: Note any cases where silent semantic conflicts may exist even after syntactic resolution (e.g., two branches change the same business logic in incompatible ways without a textual conflict).

## Output Format

Produce a structured report with the following sections:

**Conflict Summary Table**
A markdown table with columns: File | Branches Involved | Severity | Conflict Type | Notes

**Dependency Graph**
A plain-text or mermaid diagram showing which branches must be merged before others, with dependency arrows labeled by the reason (e.g., "Branch B deletes helper used by Branch A").

**Recommended Merge Order**
A numbered list of merge steps, e.g.:
1. Merge `branch-name` into `base` — reason
2. Resolve conflicts in `file.ts` using strategy X
3. Run `npm test` to verify
4. Merge `next-branch` into `base` — reason

**Per-File Resolution Guide**
For each blocking or risky file: file path as a header, the conflicting diff hunks quoted in a code block, the recommended resolution with a concrete before/after code block, and a one-line verification check.

**Risk Register**
A bullet list of semantic risks that survive syntactic resolution, each with a suggested manual review action.

Keep the report scannable. Use headers, tables, and code blocks. Avoid prose padding. Total length should scale with the number of conflicts — aim for roughly one focused paragraph or code block per conflict, not more.
