---
name: tool-consolidation-audit
description: >
  Audits the current software tool stack to identify redundant, underused, or overlapping tools and recommends a consolidated setup to reduce cost and complexity. Use when someone says "we have too many tools," asks about reducing SaaS spend, wants to simplify their tech stack, is auditing software subscriptions, or needs to eliminate tool overlap across teams.
category: operations
tags: [tools, saas, cost-reduction, audit, operations]
author: community
---

# Tool Consolidation Audit

This skill analyzes an organization's current software tool stack to surface redundancy and overlap, then produces a prioritized consolidation plan that reduces cost and complexity.

## Audit Workflow

1. **Collect the tool inventory** — Ask the user to list all tools currently in use, or accept a provided list. For each tool, gather: name, category/function, monthly cost, number of active users, and which teams use it.

2. **Categorize by function** — Group tools into functional buckets (e.g., communication, project management, documentation, analytics, CI/CD, design, CRM, security). Flag any bucket with more than one tool as a potential overlap zone.

3. **Score each tool on three dimensions:**
   - **Utilization**: Active users ÷ licensed seats (low = <40%, medium = 40–70%, high = >70%)
   - **Redundancy**: Does another tool in the stack cover ≥70% of this tool's core features?
   - **Replaceability**: Can a tool already in the stack absorb this tool's workload with minimal friction?

4. **Identify consolidation candidates** — Flag tools that score low utilization AND high redundancy. Rank them by potential savings (annual cost × likelihood of elimination).

5. **Map dependencies** — For each consolidation candidate, note integrations, workflows, or teams that depend on it. Flag hard blockers (e.g., compliance requirements, unique integrations) that prevent elimination.

6. **Generate recommendations** — For each flagged tool, recommend one of: Eliminate, Replace (with existing tool), Negotiate (downgrade tier or reduce seats), or Keep (explain why consolidation isn't viable).

7. **Calculate projected savings** — Sum annual costs of tools recommended for elimination or tier reduction. Estimate one-time migration effort in hours where applicable.

## Output Format

Produce a structured audit report with the following sections:

**Tool Inventory Summary**
- Total tools audited, total annual spend, breakdown by category

**Overlap Map**
- A table listing each functional category, the tools serving it, and the overlap severity (None / Moderate / High)

**Consolidation Candidates**
- A prioritized list (highest savings first) with columns: Tool | Annual Cost | Utilization | Redundant With | Recommendation | Estimated Savings | Migration Complexity (Low/Med/High)

**Recommended Consolidated Stack**
- A clean list of tools to retain after consolidation, organized by category

**30/60/90-Day Action Plan**
- Sequenced steps for executing the consolidation, ordered by quick wins first and complex migrations last

**Total Projected Impact**
- Annual cost savings (dollar amount), number of tools eliminated, estimated reduction in integrations to maintain

Keep the report scannable. Use tables for comparisons. Flag blockers inline in red-flag callouts. Avoid vague language — every recommendation must name the specific tool to keep or cut.
