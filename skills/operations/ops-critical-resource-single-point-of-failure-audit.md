---
name: ops-critical-resource-single-point-of-failure-audit
description: >
  Identifies people, tools, and vendors that represent single points of failure in core operational
  processes and recommends concrete mitigation actions. Use when someone says "we rely too heavily
  on one person," asks about operational resilience or bus factor risks, wants to audit their
  dependencies for vulnerabilities, is worried about what happens if a key team member leaves, or
  needs to assess vendor and tooling lock-in across critical workflows.
category: operations
tags: [risk-management, resilience, dependencies, auditing, business-continuity]
author: community
---

# Single Point of Failure Audit

This skill conducts a structured audit of people, tools, and vendors that represent single points of failure in operational processes and produces a prioritized list of risks with mitigation recommendations.

## Audit Workflow

### 1. Scope the Audit
Ask the user to identify the operational domains to cover if not already specified:
- People / knowledge holders
- Internal tools and systems
- External vendors and service providers
- Processes and workflows
- Data access and credentials

If the user hasn't provided context, prompt with: "Which teams, systems, or processes should I focus on? Or should I cover the full operational surface?"

### 2. Identify Single Points of Failure

For each domain, apply these detection criteria:

**People (Bus Factor)**
- Only one person knows how to perform a task or operate a system
- Only one person holds credentials, relationships, or institutional knowledge
- A role has no documented backup or cross-trained colleague
- Departure or absence of this person would halt or severely degrade operations

**Tools and Systems**
- A tool has no fallback or manual workaround
- A single internal system is a dependency for 3+ other critical processes
- No redundancy or failover exists for the tool
- The tool is undocumented and only one person knows how to maintain it

**Vendors and External Services**
- A single vendor supplies a capability with no approved alternative
- Contract or SLA terms do not include uptime guarantees or exit provisions
- Data or IP is locked inside a vendor platform with no export path
- A vendor's failure would cause immediate operational stoppage

**Processes and Workflows**
- A process has a single required approval path with no delegate
- A workflow depends on a manual step that only one person performs
- No documented runbook or SOP exists for a critical operation

### 3. Score Each Risk

Rate each identified SPOF on two dimensions (1–3 scale):

| Dimension | 1 (Low) | 2 (Medium) | 3 (High) |
|---|---|---|---|
| **Impact** | Minor slowdown | Significant disruption | Full operational stoppage |
| **Likelihood** | Unlikely in 12 months | Possible in 12 months | Probable in 12 months |

Multiply scores to get a **Risk Priority Score** (1–9). Flag anything 6+ as critical.

### 4. Generate Mitigation Recommendations

For each identified SPOF, produce a specific mitigation action using these playbooks:

- **People**: Cross-train a named backup, document the process, rotate responsibilities quarterly
- **Tools**: Identify and pre-approve an alternative tool, document a manual fallback procedure
- **Vendors**: Identify an alternative vendor, negotiate data portability clauses, implement data exports
- **Processes**: Create a runbook, assign a documented delegate, add approval redundancy

Mitigation actions must be specific and actionable — name the backup person type, the alternative tool category, or the documentation artifact needed.

### 5. Prioritize the Remediation Roadmap

Sort all identified SPOFs by Risk Priority Score (high to low) and group into:
- **Immediate (0–30 days)**: Score 7–9
- **Near-term (30–90 days)**: Score 4–6
- **Monitor (90+ days)**: Score 1–3

## Output Format

Produce a structured audit report with these sections:

---

**SINGLE POINT OF FAILURE AUDIT REPORT**

**Scope:** [domains covered]
**Date:** [today's date]

---

**SUMMARY**
- Total SPOFs identified: X
- Critical (score 6–9): X
- Moderate (score 3–5): X
- Low (score 1–2): X

---

**FINDINGS TABLE**
