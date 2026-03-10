---
name: root-cause-analysis
description: >
  Applies structured root cause analysis methods to identify the true source of operational
  problems, incidents, or recurring failures. Use when someone says "we keep having this
  problem," asks why something broke, wants to find the real cause of an outage, needs to
  stop an issue from happening again, or is conducting a post-mortem investigation.
category: operations
tags: [debugging, incident-response, post-mortem, problem-solving, reliability]
author: community
---

# Root Cause Analysis

This skill guides Claude through structured RCA using the 5 Whys, fishbone diagrams, and fault tree analysis to move beyond symptoms and identify actionable root causes.

## RCA Workflow

### 1. Define the Problem Statement
- Restate the problem in concrete, observable terms: what happened, when, where, and how often
- Separate symptoms from the problem itself
- Establish the scope: is this isolated or recurring?

### 2. Gather Timeline and Evidence
- Reconstruct a chronological sequence of events leading to the failure
- Identify what changed before the problem appeared (deployments, config changes, traffic spikes)
- Note what monitoring, logs, or signals were present

### 3. Apply the 5 Whys
- Start with the observable symptom
- Ask "Why did this happen?" — record the answer
- Repeat 4+ more times until reaching a systemic or process-level cause
- Stop when the answer points to something actionable and preventable
- Flag if multiple causal chains diverge (this indicates contributing factors)

### 4. Identify Contributing Factors
Categorize factors using the fishbone (Ishikawa) structure:
- **People**: gaps in training, unclear ownership, communication failures
- **Process**: missing runbooks, inadequate review steps, no escalation path
- **Technology**: brittle dependencies, missing alerts, lack of redundancy
- **Environment**: infrastructure limits, third-party failures, load conditions

### 5. Distinguish Root Cause from Contributing Causes
- **Root cause**: the single deepest systemic failure — if fixed, the incident would not have occurred
- **Contributing causes**: conditions that worsened impact or made detection harder
- Avoid "human error" as a root cause — always ask why the human error was possible

### 6. Propose Corrective Actions
For each root cause and major contributing factor:
- Define a specific corrective action (not vague goals)
- Assign a category: fix, detect, prevent, or mitigate
- Estimate effort: quick win (days), short-term (weeks), long-term (months)

## Output Format

Produce a structured RCA report with these sections:

**Problem Statement** — 2–3 sentences, plain language, no jargon

**Timeline** — bullet list of timestamped or sequenced events

**5 Whys Chain** — numbered list showing each why→because step, ending at root cause

**Contributing Factors** — grouped by category (People / Process / Technology / Environment), 1–2 lines each

**Root Cause** — single clear sentence beginning with "The root cause is..."

**Corrective Actions Table**:
| Action | Type | Addresses | Effort |
|--------|------|-----------|--------|
| ...    | ...  | ...       | ...    |

**Prevention Summary** — 2–3 sentences on the systemic change needed to prevent recurrence

Keep the full report under 600 words unless the incident complexity requires more detail.
