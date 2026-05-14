---
name: recurring-error-pattern-log
description: >
  Aggregates and categorizes operational error logs over time to surface repeating failure patterns that warrant permanent process fixes rather than one-off corrections. Use when someone says "we keep seeing this error," asks about patterns in failures, wants to track recurring issues, needs to identify systemic problems in operations, or is tired of fixing the same thing repeatedly.
category: operations
tags: [error-tracking, pattern-recognition, incident-management, operations, logging]
author: community
---

# Recurring Error Pattern Log

This skill analyzes error logs and incident histories to identify repeating failure patterns, helping teams prioritize permanent fixes over repeated manual interventions.

## Pattern Analysis Workflow

1. **Collect error inputs** — Gather raw error messages, incident reports, or log snippets provided by the user. Accept pasted logs, described incidents, or structured data.

2. **Normalize and deduplicate** — Strip timestamps, environment-specific values (IDs, hostnames, request hashes), and variable data to extract the stable error signature. Group errors that share the same root signature.

3. **Categorize by error type** — Assign each unique error signature to a category:
   - Infrastructure (timeouts, resource exhaustion, connectivity)
   - Application logic (null references, validation failures, unhandled exceptions)
   - Integration (third-party API failures, auth errors, schema mismatches)
   - Data quality (malformed input, missing fields, constraint violations)
   - Configuration (missing env vars, wrong settings, deployment mismatches)

4. **Calculate recurrence metrics** — For each pattern, determine:
   - Frequency (how many times it has appeared)
   - Recurrence span (first seen vs. most recent)
   - Estimated manual fix time consumed
   - Whether frequency is increasing, stable, or decreasing

5. **Score fix priority** — Rank each pattern using: frequency × recurrence span × fix effort. High scores indicate strong candidates for permanent resolution.

6. **Identify fix type** — For each top pattern, classify the recommended permanent fix:
   - Code change (bug fix, defensive coding)
   - Infrastructure change (scaling, alerting, redundancy)
   - Process change (runbook update, ownership clarification)
   - Monitoring improvement (better alerting before failure occurs)

7. **Flag one-off vs. systemic** — Explicitly label errors that appear only once as low-priority noise and errors appearing 3+ times across different time windows as systemic.

## Output Format

Produce a structured **Recurring Error Pattern Log** with the following sections:

---

**Summary**
- Total unique error patterns identified: N
- Patterns appearing 3+ times (systemic): N
- Total estimated manual intervention hours: N

---

**Pattern Registry** (one entry per unique error signature, sorted by priority score descending)

| # | Error Signature | Category | Occurrences | First Seen | Last Seen | Priority Score | Recommended Fix Type |
|---|----------------|----------|-------------|------------|-----------|---------------|----------------------|

---

**Top 3 Patterns Requiring Permanent Fixes**

For each:
- **Pattern:** [normalized error signature]
- **Why it recurs:** [1-2 sentence root cause hypothesis]
- **Permanent fix:** [specific, actionable recommendation]
- **Fix owner:** [role or team best positioned to resolve]
- **Success metric:** [how to confirm the pattern is resolved]

---

**Noise / One-Off Errors**
- List of error signatures seen only once, flagged for monitoring but not immediate action.

---

Keep the full log concise enough to fit one review session. Use plain language in fix recommendations — assume the reader is an on-call engineer, not the original developer.
