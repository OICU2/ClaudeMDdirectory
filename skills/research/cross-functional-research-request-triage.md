---
name: cross-functional-research-request-triage
description: >
  Evaluates and ranks incoming research requests from multiple teams based on strategic value, urgency, and resource cost. Use when someone says "we have too many research requests to handle," asks about prioritizing competing research needs, or wants to figure out which studies to tackle first. Also triggers when teams are fighting over research bandwidth or when someone needs to build a research roadmap from a backlog.
category: research
tags: [research-ops, prioritization, triage, roadmap, cross-functional]
author: community
---

# Cross-Functional Research Request Triage

This skill evaluates a queue of research requests from multiple teams, scores each one across strategic and operational dimensions, and produces a ranked priority list with rationale.

## Triage Workflow

### Step 1: Collect Request Details
For each research request, gather:
- **Requestor team** (e.g., Product, Marketing, Sales, Engineering)
- **Research question or goal** (what they want to learn)
- **Stated deadline or urgency** (hard date, soft preference, or none)
- **Decision it informs** (what action depends on this research)
- **Estimated effort** (hours, study type, participant recruitment needs)

If any of these are missing, flag the gap and note the request cannot be fully scored until resolved.

### Step 2: Score Each Request
Rate each request on a 1–5 scale across four dimensions:

| Dimension | What to Assess |
|---|---|
| **Strategic Impact** | Does this directly affect a company-level goal, OKR, or key product decision? |
| **Decision Urgency** | Is a real decision blocked or delayed without this research? |
| **Audience Breadth** | Will findings benefit one team or multiple stakeholders? |
| **Effort Cost** | Inverse score — lower effort = higher score (1 = weeks of work, 5 = quick turnaround) |

Calculate a **Priority Score** = (Strategic Impact × 2) + Decision Urgency + Audience Breadth + Effort Cost. Maximum score: 25.

### Step 3: Apply Tiebreaker Rules
When two requests have equal scores:
1. Prefer the request closer to a hard deadline
2. Prefer the request that unblocks a larger team or more stakeholders
3. Prefer the request that can be combined or reused across multiple teams

### Step 4: Flag Special Cases
Before finalizing the ranking, identify:
- **Duplicate or overlapping requests** — merge these and note the consolidation
- **Requests that should be desk research** — no primary research needed; redirect to self-serve
- **Requests that are premature** — decision not yet imminent; defer to next cycle
- **Requests that need stakeholder clarification** — cannot score until more info is provided

### Step 5: Assign Queue Status
Label each request with one of four statuses:
- **Active** — in the top tier, begin immediately or next sprint
- **Queued** — high value but constrained by capacity, scheduled for next cycle
- **Deferred** — low urgency or premature, revisit in 30–60 days
- **Redirected** — does not require primary research, route to alternative resource

## Output Format

Produce a structured triage report with the following sections:

---

**Research Request Triage Report**
*Date | Requestor (if applicable) | Total requests reviewed: N*

**Ranked Request Queue**

| Rank | Request Title | Team | Priority Score | Status | Key Rationale |
|---|---|---|---|---|---|
| 1 | [Title] | [Team] | [Score/25] | Active | [1-sentence reason] |
| 2 | ... | | | | |

**Flagged Items**
- List any requests that are duplicates, premature, or need clarification, with a one-line note on why and what action is needed.

**Consolidation Opportunities**
- List any requests that can be merged into a single study, and name which teams would share the findings.

**Deferred / Redirected Requests**
- Brief list with reason for deferral or redirect destination (e.g., "route to competitive intelligence database").

**Recommended Next Steps**
- 3–5 bullets on immediate actions: who to notify, what studies to kick off, what stakeholder conversations are needed to unblock
