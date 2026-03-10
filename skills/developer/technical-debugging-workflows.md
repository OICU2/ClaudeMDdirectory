---
name: technical-debugging-workflows
description: >
  Builds systematic, step-by-step debugging workflows for diagnosing complex technical issues. Use when someone says "I can't figure out why this is broken," asks about debugging a failing system, or wants to diagnose an intermittent bug. Also triggers when someone describes unexpected behavior they can't reproduce, or needs a structured approach to root cause analysis.
category: developer
tags: [debugging, troubleshooting, root-cause-analysis, systematic-thinking, diagnostics]
author: community
---

# Technical Debugging Workflows

This skill constructs structured debugging plans for complex technical problems, guiding Claude to methodically isolate, reproduce, and resolve issues rather than guessing at fixes.

## Debugging Workflow Process

### 1. Gather Problem Signals
- Extract the exact error message, stack trace, or observed behavior
- Identify when it started (after a deploy, config change, dependency update)
- Note environment details: OS, runtime version, infrastructure, load conditions
- Ask: Does it happen every time or intermittently? For all users or specific ones?

### 2. Define the Blast Radius
- Determine what is affected vs. what still works correctly
- Identify any recent changes (code, config, environment, data) as primary suspects
- Establish a clear "known good" state to compare against
- Draw the boundary: is this a code bug, environment issue, data problem, or race condition?

### 3. Form Ranked Hypotheses
- List 3–5 possible root causes ordered by likelihood based on evidence
- For each hypothesis, identify one cheap, fast experiment that would confirm or rule it out
- Start with the most reversible and least disruptive tests
- Use binary search thinking: eliminate half the hypothesis space with each test

### 4. Execute and Observe
- Run one experiment at a time — never change multiple variables simultaneously
- Record exact inputs, outputs, and conditions for each test
- If reproducing in isolation (unit test, minimal repro script), do so before touching production
- Log findings even for failed hypotheses — negative results narrow the space

### 5. Confirm the Root Cause
- Reproduce the bug with the root cause present and verify it disappears when removed
- Distinguish the root cause from symptoms (e.g., memory leak vs. OOM crash)
- Verify the fix doesn't break adjacent behavior

### 6. Document and Prevent
- Write a one-paragraph incident summary: what broke, why, how it was found, how it was fixed
- Identify whether a test, alert, or guard would have caught this earlier
- Note any follow-up technical debt created by the fix

## Output Format

Produce a **Debugging Workflow Document** structured as follows:

```
## Problem Statement
[1–2 sentences: observed behavior vs. expected behavior, environment]

## Evidence Gathered
- [Bullet list of symptoms, errors, logs, timelines]

## Hypotheses (ranked)
1. [Most likely cause] — Test: [specific experiment]
2. [Second candidate] — Test: [specific experiment]
3. [Third candidate] — Test: [specific experiment]

## Recommended First Steps
[Numbered list of 3–5 immediate actions in priority order]

## Reproduction Steps
[Minimal steps to reliably trigger the issue, or a plan to find them]

## Root Cause Summary (if known)
[What caused it, why it happened, what confirmed it]

## Fix and Prevention
[The fix applied or recommended, plus one prevention measure]
```

Length: Concise but complete. Skip sections only if genuinely not applicable. Use code blocks for commands, queries, or config snippets inline where relevant.