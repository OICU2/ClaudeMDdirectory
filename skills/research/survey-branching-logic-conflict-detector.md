---
name: survey-branching-logic-conflict-detector
category: research
description: >
  Analyzes survey instruments to detect logical conflicts, unreachable questions, and dead-end paths
  within skip logic and branching rules. Use when someone shares a survey with complex routing logic,
  asks why respondents are getting stuck or skipping incorrectly, wants to validate branching rules
  before launch, or needs to audit a questionnaire for logical consistency.
tags: [survey, branching-logic, validation, research-design, questionnaire]
author: community
---

# Survey Branching Logic Conflict Detector

This skill parses skip logic and branching rules from survey instruments to surface contradictions, unreachable questions, dead ends, and circular paths before the survey goes live.

## Analysis Workflow

### 1. Ingest the Survey Structure
- Accept input as pasted text, a table, a JSON/XML export, or a numbered list of questions with associated routing rules.
- Extract: question IDs, answer options, skip targets, display conditions, and any AND/OR logic operators.
- If the format is ambiguous, ask one clarifying question before proceeding.

### 2. Build the Logic Graph
- Map every question as a node.
- Map every routing rule as a directed edge: `(source question + answer condition) → target question`.
- Identify the entry point (first question) and all intended exit points (survey end/submit).

### 3. Detect Conflict Types

**Dead Ends**
- A question has no outgoing edge and is not a terminal node.
- A required question has no path leading to it from the current branch.

**Unreachable Questions**
- A question has no incoming edge from any reachable node.
- A question is only reachable via a condition that can never be satisfied (e.g., requires answer A from Q3, but Q3 is skipped for all respondents who reach that branch).

**Logical Contradictions**
- Two routing rules on the same question produce conflicting targets for the same answer (e.g., "If Q5=Yes → go to Q8" and "If Q5=Yes → go to Q10").
- A display condition requires a prior answer that the branching logic already skipped past.
- Mutually exclusive conditions that together leave some answer values unrouted.

**Circular Loops**
- A path from question A routes back to question A with no guaranteed exit condition.

**Overlapping or Gap Conditions**
- Numeric or categorical ranges that overlap (e.g., age 18–30 and 25–40 both trigger different branches).
- Gaps in conditions where certain values trigger no rule (e.g., age < 18 and age > 18 defined, but age = 18 unhandled).

### 4. Validate Termination
- Confirm every possible respondent path reaches a terminal node.
- Flag any path that can loop indefinitely or terminate without hitting the submit/end node.

### 5. Prioritize Findings
- **Critical**: Conflicts that will break survey flow or cause data loss for respondents.
- **Warning**: Unreachable questions that will never collect data.
- **Advisory**: Ambiguous conditions that may work but are fragile.

## Output Format

Produce a structured report with the following sections:

---

### Survey Logic Audit Report

**Summary**
- Total questions analyzed: N
- Total routing rules parsed: N
- Issues found: N critical / N warnings / N advisory

---

**Critical Issues**
For each issue:
- **Issue ID**: `CONFLICT-001`
- **Type**: Dead End / Contradiction / Loop / Gap
- **Location**: Q[number] → Q[number] (include the specific rule text)
- **Description**: One sentence explaining the conflict.
- **Impact**: Who is affected (e.g., "All respondents who answer Q4=No").
- **Suggested Fix**: Specific corrective action.

---

**Warnings**
Same format as Critical Issues.

---

**Advisory Notes**
Bulleted list of fragile logic or best-practice recommendations.

---

**Verified Paths**
List of respondent paths confirmed to reach a terminal node cleanly (e.g., "Path: Q1→Q3→Q7→End ✓").

---

Use plain language. Do not reproduce the entire survey back. Keep each issue entry under 75 words. If no issues are found in a category
