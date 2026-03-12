---
name: ops-runbook-creation
category: operations
description: >
  Drafts clear, step-by-step operational runbooks for recurring tasks or critical processes so any team member can execute them consistently without relying on tribal knowledge. Use when someone says "we need to document this process," asks "can you write a runbook for," wants to "standardize how we handle," needs to "document the steps for," or says "anyone should be able to do this." Captures prerequisites, decision points, rollback procedures, and verification steps in a structured format.
tags: [runbook, documentation, operations, sre, incident-response]
author: community
---

# Ops Runbook Creation

This skill drafts production-ready operational runbooks from a description of a process, ensuring any team member can execute critical or recurring tasks consistently and safely.

## Runbook Creation Workflow

1. **Extract process details** — Identify the task name, trigger conditions (scheduled, event-driven, on-demand), the owning team, and estimated execution time.

2. **Clarify prerequisites** — List all required access, credentials, tools, permissions, and environmental context (e.g., VPN, specific shell, region) needed before starting.

3. **Identify decision branches** — Ask or infer where the executor must make a judgment call. Capture each branch as a clearly labeled conditional step (`If X → do Y, else → do Z`).

4. **Write numbered steps** — Each step must contain:
   - A single, imperative action verb to start (Run, Navigate, Verify, Confirm, Restart)
   - The exact command, UI path, or action with no ambiguity
   - Expected output or system state after the step
   - A warning block if the step is destructive or irreversible

5. **Add verification checkpoints** — After every major phase, include a "Verify" step that confirms the system is in the expected state before proceeding.

6. **Document rollback procedures** — Provide explicit rollback or recovery steps if the process fails midway. Reference the last known-good state.

7. **Capture escalation paths** — Specify who to contact, on what channel, and under what conditions if the executor gets stuck or something goes wrong.

8. **List known failure modes** — Include a short troubleshooting table of common errors, their likely cause, and the corrective action.

## Output Format

Produce a Markdown document with the following sections in order:

```
# Runbook: [Process Name]

**Last Updated:** [date or YYYY-MM-DD placeholder]
**Owner:** [team or role]
**Estimated Duration:** [X minutes]
**Trigger:** [When/why this runbook is executed]

---

## Prerequisites
- [ ] Item 1
- [ ] Item 2

---

## Steps

### Phase 1: [Phase Name]

**Step 1** — [Imperative action]
```
[exact command or UI path]
```
**Expected result:** [what success looks like]
> ⚠️ Warning: [if destructive]

**Step 2** — ...

**✅ Checkpoint:** [Verification action and expected state]

### Phase 2: [Phase Name]
...

---

## Rollback Procedure

1. [Step to undo or recover]

---

## Escalation

- **Stuck or blocked:** Ping [team/person] in [#channel]
- **Severity threshold:** [Condition that warrants escalation]

---

## Troubleshooting

| Symptom | Likely Cause | Action |
|---------|-------------|--------|
| [error] | [reason]    | [fix]  |
```

- Length scales with process complexity; a simple task may need 1 phase, a critical deployment may need 5+.
- Use code blocks for all commands, exact values, and config snippets.
- Use checkboxes for prerequisites so executors can track progress.
- Flag every destructive or irreversible step with a `⚠️ Warning` block.
