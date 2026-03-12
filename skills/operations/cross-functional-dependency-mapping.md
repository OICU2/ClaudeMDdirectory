---
name: cross-functional-dependency-mapping
description: >
  Identifies and documents inter-team dependencies for a project or process to surface bottlenecks
  and coordination risks before they cause delays. Use when someone says "we need to map out
  dependencies," asks about "what teams are blocking us," wants to "find coordination risks,"
  needs to "understand handoffs between teams," or is trying to "figure out what could delay
  this project."
category: operations
tags: [dependencies, coordination, risk-management, cross-functional, project-planning]
author: community
---

# Cross-Functional Dependency Mapping

This skill surfaces inter-team dependencies, handoff risks, and coordination bottlenecks for a project or process so teams can proactively resolve blockers before they cause delays.

## Dependency Mapping Workflow

### 1. Scope the Project
Ask for or confirm:
- Project or process name and goal
- Target delivery date or milestone
- Teams and stakeholders involved (if known)
- Any known blockers or concerns already identified

### 2. Extract Dependencies
For each team or workstream involved, identify:
- **Upstream dependencies**: What this team needs FROM others before they can proceed
- **Downstream dependencies**: What other teams are waiting ON this team to deliver
- **Parallel dependencies**: Work that must happen concurrently and stay in sync
- **External dependencies**: Vendors, tools, approvals, or third parties outside the org

For each dependency, capture:
- Dependency type (data, decision, deliverable, approval, resource, API/integration)
- Owner team and contact
- Receiving team
- Required by date
- Current status (not started / in progress / at risk / blocked / complete)
- Risk level (High / Medium / Low) based on lead time and substitutability

### 3. Identify Bottlenecks and Risk Patterns
Flag:
- Any team that appears as a blocker for 3+ other teams (central bottleneck)
- Dependencies with no named owner
- Dependencies where required-by date is less than 2 weeks out and status is "not started"
- Long chains of sequential dependencies (single-threaded critical paths)
- External dependencies with no confirmed SLA or timeline
- Teams that have not been looped in but should be

### 4. Recommend Coordination Actions
For each High-risk dependency, provide one concrete action:
- Who needs to meet with whom, by when
- What decision or artifact needs to be created
- Whether the dependency can be parallelized or de-risked with a placeholder

## Output Format

Produce the following sections in order:

---

**Project:** [Name]
**Mapped by:** [Date]
**Teams in scope:** [Comma-separated list]

---

### Dependency Registry

| # | From Team | To Team | Dependency Description | Type | Required By | Status | Risk |
|---|-----------|---------|------------------------|------|-------------|--------|------|
| 1 | ... | ... | ... | ... | ... | ... | High/Med/Low |

---

### Bottleneck Analysis

List each identified bottleneck or risk pattern as a bullet with:
- **Issue**: what the problem is
- **Teams affected**: who is impacted
- **Why it matters**: consequence if unresolved

---

### Recommended Actions

Numbered list of specific coordination actions, each including:
- Action to take
- Who owns it
- Deadline to act (not the dependency deadline — when action must start)

---

### Dependency Map (Text Diagram)

Render a simple ASCII or indented text diagram showing the critical path and key dependency chains. Example:

```
[Design] ──► [Engineering: Frontend] ──► [QA] ──► [Release]
                        │
              [API Team: Auth endpoint]
                        │
              [Security Review] ◄── [Compliance Sign-off]
```

---

Keep the registry exhaustive but the recommendations focused — surface the top 3–5 highest-risk items rather than listing every dependency as an action item.
