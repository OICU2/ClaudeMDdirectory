---
name: ops-vendor-single-source-dependency-log
description: >
  Identifies and documents all operational processes that rely on a single vendor with no backup, flagging concentration risks for continuity planning. Use when someone says "we only have one supplier for this," asks about vendor risk or single points of failure, or wants to audit their supply chain dependencies. Also activates when someone needs to identify concentration risks, map vendor redundancy gaps, or prepare for business continuity planning.
category: operations
tags: [vendor-risk, continuity-planning, supply-chain, dependency-mapping, risk-management]
author: community
---

# Vendor Single-Source Dependency Log

This skill audits operational processes to identify and document every single-vendor dependency, then produces a structured risk log to guide redundancy and continuity planning.

## Dependency Audit Workflow

1. **Scope the audit**: Clarify which operational areas to cover — procurement, software/SaaS, logistics, manufacturing inputs, professional services, utilities, or all of the above.

2. **Extract vendor relationships**: For each operational process or function, identify:
   - The vendor or supplier name
   - What product, service, or capability they provide
   - Which internal processes depend on it
   - Whether any backup or alternative vendor exists

3. **Flag single-source dependencies**: Mark any vendor relationship where:
   - No secondary supplier exists
   - Switching cost or lead time exceeds 30 days
   - The vendor provides a proprietary or hard-to-replicate capability
   - The relationship is undocumented or informal

4. **Assess concentration risk**: For each flagged dependency, evaluate:
   - **Criticality**: Would a disruption halt operations? (High / Medium / Low)
   - **Replaceability**: How easily could an alternative be sourced? (Easy / Moderate / Difficult)
   - **Exposure window**: How long could operations continue without this vendor?
   - **Contractual protection**: Is there an SLA, termination clause, or escrow in place?

5. **Prioritize risks**: Rank dependencies by combined criticality and replaceability score. High criticality + difficult replaceability = Priority 1.

6. **Generate mitigation recommendations**: For each Priority 1 and Priority 2 item, suggest concrete next steps:
   - Qualify a secondary vendor
   - Negotiate dual-sourcing into contracts
   - Build safety stock or buffer capacity
   - Develop in-house fallback capability
   - Document manual workaround procedures

## Output Format

Produce a **Vendor Single-Source Dependency Log** with the following structure:

---

### Summary
- Total processes audited: #
- Single-source dependencies identified: #
- Priority 1 risks (critical + hard to replace): #
- Priority 2 risks (critical or hard to replace): #

---

### Dependency Log Table

| # | Vendor Name | Product/Service | Dependent Process | Criticality | Replaceability | Exposure Window | Contractual Protection | Priority |
|---|-------------|-----------------|-------------------|-------------|----------------|-----------------|------------------------|----------|
| 1 | [name]      | [description]   | [process]         | High/Med/Low| Easy/Mod/Diff  | [e.g., 3 days]  | Yes/No/Partial         | P1/P2/P3 |

---

### Priority 1 Risk Detail Sheets

For each Priority 1 item, include:
- **Vendor**: Name and contact
- **Dependency description**: What exactly is sourced and why it's hard to replace
- **Failure scenario**: What happens if this vendor becomes unavailable
- **Recommended action**: Specific next step with owner and target date
- **Interim mitigation**: What can be done immediately to reduce exposure

---

### Recommended Actions Summary
Numbered list of all recommended actions sorted by priority, each with a suggested owner role and timeframe (immediate / 30 days / 90 days).
