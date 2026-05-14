---
name: ops-technology-dependency-map
description: >
  Maps the dependencies between operational tools, systems, and services to expose integration risks and single points of failure. Use when someone says "map our tech stack dependencies," asks about "what breaks if X goes down," or wants to "document system integrations," "find single points of failure," or "understand our operational dependencies."
category: operations
tags: [dependency-mapping, risk-analysis, system-integration, operations, infrastructure]
author: community
---

# Operations Technology Dependency Map

This skill produces a structured dependency map of operational tools and systems, identifying integration points, failure chains, and critical risks so teams can make informed decisions about reliability and change management.

## Dependency Mapping Workflow

1. **Inventory all systems**: List every operational tool, platform, service, and data store in scope. Group by category (monitoring, auth, data, communication, deployment, etc.).

2. **Identify dependency types for each system**:
   - **Upstream dependencies**: What this system relies on to function
   - **Downstream dependents**: What breaks or degrades if this system fails
   - **Integration method**: API, webhook, database connection, file transfer, manual process, SSO/OAuth

3. **Classify dependency strength**:
   - **Hard dependency**: System is non-functional without it (complete failure)
   - **Soft dependency**: System degrades but continues operating (partial failure)
   - **Optional dependency**: Feature loss only, core function unaffected

4. **Flag single points of failure (SPOFs)**: Any system with 3+ downstream hard dependents, no redundancy, and no documented failover is a SPOF. Mark explicitly.

5. **Assess integration risks**:
   - Undocumented or informal integrations
   - Legacy connectors with no owner
   - Cross-team or cross-vendor dependencies with no SLA
   - Circular dependencies
   - Systems with no monitoring on the integration path

6. **Score criticality**: For each system, assign a criticality score:
   - **P1 (Critical)**: Failure causes immediate operational outage or data loss
   - **P2 (High)**: Failure disrupts key workflows within 1 hour
   - **P3 (Medium)**: Failure causes inconvenience; workarounds exist
   - **P4 (Low)**: Failure has minimal operational impact

7. **Build the dependency chain**: Trace the longest failure chain — if System A fails, list every downstream system affected in sequence.

## Output Format

Produce the following sections in order:

---

### System Inventory Table

| System | Category | Owner | Criticality | Redundancy |
|--------|----------|-------|-------------|------------|
| [name] | [type]   | [team]| [P1–P4]     | [Yes/No/Partial] |

---

### Dependency Matrix

For each system (P1 and P2 only, or all if inventory is small):

**[System Name]** — P[X]
- **Depends on**: [System A] (hard), [System B] (soft)
- **Depended on by**: [System C] (hard), [System D] (soft)
- **Integration method**: [API / webhook / DB / etc.]
- **Failover documented**: Yes / No

---

### Single Points of Failure

Numbered list of confirmed SPOFs:

1. **[System Name]** — [Why it's a SPOF]. Downstream impact: [list affected systems]. Recommended action: [add redundancy / document failover / assign owner].

---

### Longest Failure Chain

> If **[System A]** fails → **[System B]** loses [function] → **[System C]** cannot [action] → **[System D]** goes dark.
> Total blast radius: [N] systems affected.

---

### Integration Risk Register

| Risk | Affected Systems | Severity | Recommended Action |
|------|-----------------|----------|--------------------|
| Undocumented webhook from X to Y | X, Y | High | Document and add alerting |
| No SLA with vendor Z | Z, all dependents | Medium | Negotiate SLA or add fallback |

---

### Recommended Remediation Priority

Ordered action list (highest impact first):
1. [Action] — eliminates SPOF on [system], unblocks [N] downstream systems
2. [Action] — reduces
