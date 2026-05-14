---
name: ci-pipeline-failure-pattern-analysis
description: >
  Aggregates CI build failure logs to identify recurring failure patterns and generate targeted remediation steps for each unique failure type. Use when someone says their CI pipeline keeps breaking, asks why builds are failing repeatedly, or wants to understand what's going wrong across multiple failed runs. Also triggers when someone shares build logs and asks for a root cause summary or needs a plan to fix flaky tests and recurring pipeline errors.
category: developer
tags: [ci-cd, debugging, build-failures, pattern-analysis, devops]
author: community
---

# CI Pipeline Failure Pattern Analysis

This skill analyzes one or more CI build failure logs to surface recurring failure patterns and produce targeted, actionable remediation steps grouped by failure type.

## Analysis Workflow

1. **Collect failure data** — Ask the user to paste raw logs, link to log output, or describe the failures if logs are unavailable. Request at least 3–5 recent failed run logs for meaningful pattern detection; work with fewer if that's all that's available.

2. **Parse and normalize logs** — Scan each log for:
   - Error messages and exit codes
   - Failing test names and assertion messages
   - Dependency resolution failures (missing packages, version conflicts)
   - Timeout events and resource exhaustion signals
   - Environment/config errors (missing env vars, auth failures, wrong runtime versions)
   - Flaky indicators (passes on retry, non-deterministic output)

3. **Cluster into failure patterns** — Group failures by root cause signature, not surface message. Identical stack traces with different line numbers count as the same pattern. Assign each pattern:
   - A short descriptive label (e.g., "Database connection timeout in integration tests")
   - Frequency count and affected jobs/stages
   - First and most recent occurrence if timestamps are present

4. **Rank patterns by impact** — Order by: (frequency × blast radius). A pattern failing 1 job every run ranks below one that fails the entire pipeline occasionally.

5. **Generate remediation steps per pattern** — For each cluster, produce:
   - The specific root cause hypothesis
   - Concrete fix steps (code changes, config updates, dependency pins, retry logic, etc.)
   - How to verify the fix resolved the pattern
   - Whether it's a flaky test (probabilistic) or a hard failure (deterministic)

6. **Identify cross-cutting issues** — Flag if multiple patterns share a common upstream cause (e.g., all failures trace back to a single misconfigured base image or a recently bumped dependency).

## Output Format

Produce a structured report with the following sections:

---

### CI Failure Pattern Report

**Runs Analyzed:** [N]  
**Unique Failure Patterns Found:** [N]  
**Most Impacted Stage:** [stage name]

---

#### Pattern 1: [Short Label]
- **Frequency:** X of N runs
- **Affected jobs/stages:** [list]
- **Root cause:** [1–2 sentence hypothesis]
- **Flaky or deterministic:** [Flaky / Deterministic]
- **Remediation steps:**
  1. [Specific action]
  2. [Specific action]
  3. [Verification step]

---

*(Repeat for each pattern, ordered by impact rank)*

---

#### Cross-Cutting Issues
[Paragraph or bullet list only if a shared upstream cause is detected. Omit section if none found.]

---

- Keep each remediation block under 150 words
- Use inline code formatting for file names, commands, env var names, and package names
- If log data is insufficient to confirm a hypothesis, state the assumption explicitly and flag it with ⚠️
- Do not speculate beyond what the logs support
