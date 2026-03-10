---
name: debugging-techniques
description: >
  Systematically identifies and fixes bugs using structured debugging workflows including breakpoints, logging, and profiling tools. Use when someone says "I can't find this bug," asks about debugging a crash or error, or wants to trace why their code isn't working as expected. Also activates when someone mentions a weird behavior, unexpected output, or needs help diagnosing performance issues.
category: developer
tags: [debugging, troubleshooting, profiling, logging, breakpoints]
author: community
---

# Debugging Techniques

This skill guides Claude through a systematic, tool-assisted debugging process to isolate and fix bugs efficiently whenever a developer is stuck on an error, crash, or unexpected behavior.

## Debugging Workflow

### 1. Reproduce the Bug
- Confirm the exact steps to reproduce the issue consistently
- Identify the smallest input or condition that triggers the bug
- Note environment details: language, runtime version, OS, dependencies

### 2. Understand the Expected vs. Actual Behavior
- State clearly what the code *should* do
- Document what it *actually* does (error message, wrong output, crash, hang)
- Check if the bug is deterministic or intermittent

### 3. Form a Hypothesis
- Read the full error message and stack trace top-to-bottom
- Identify the first frame in the stack trace that belongs to user code
- Hypothesize 1–3 specific root causes before changing anything

### 4. Use Targeted Logging
- Insert log statements at function entry/exit points and key branches
- Log variable values immediately before the failure point
- Use structured logging where possible (`{variable: value}` format)
- Remove or disable debug logs after the fix

### 5. Set Breakpoints Strategically
- Place breakpoints at the line just before the failure, not at the error line itself
- Use conditional breakpoints to pause only when a specific variable state occurs
- Step through execution: use *step over* for library calls, *step into* for own functions
- Inspect the call stack and local variable state at each pause

### 6. Isolate the Failing Component
- Comment out or stub surrounding code to narrow the fault to one function or module
- Write a minimal reproducible example (MRE) if the full codebase is complex
- Run unit tests against the isolated component to confirm the boundary of the bug

### 7. Profile for Performance Bugs
- Use a language-appropriate profiler (e.g., `cProfile` for Python, Chrome DevTools for JS, `perf` for C/C++)
- Identify the top 3 hotspots by CPU time or memory allocation
- Check for N+1 query patterns, repeated work inside loops, or memory leaks

### 8. Apply and Verify the Fix
- Change one thing at a time
- Re-run the exact reproduction steps after each change
- Add a regression test that would have caught this bug
- Review adjacent code for the same class of mistake

## Output Format

Claude will produce a structured debugging report with these sections:

**Bug Summary** (2–3 sentences): what the bug is and where it lives in the code.

**Root Cause**: one precise sentence identifying the underlying cause.

**Evidence**: bullet list of log output, stack trace lines, or variable states that confirm the diagnosis.

**Fix**: the exact code change with a before/after diff or inline edit, plus a one-line explanation of why it works.

**Regression Test**: a minimal test case (pseudocode or real code) that fails before the fix and passes after.

**Related Risks**: 1–3 bullets flagging similar patterns elsewhere in the codebase worth reviewing.