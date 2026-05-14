---
name: ops-vendor-consolidation-plan
description: >
  Analyzes the current vendor landscape to identify overlapping tools or services and produces a
  prioritized consolidation plan with estimated cost and complexity savings. Use when someone says
  "we have too many tools," asks about reducing vendor sprawl, wants to cut SaaS costs, needs to
  simplify the tech stack, or is auditing software spend before a budget cycle.
category: operations
tags: [vendors, saas, cost-reduction, operations, procurement]
author: community
---

# Vendor Consolidation Plan

This skill audits a provided list of vendors or tools, identifies functional overlaps and redundancies, and outputs a prioritized action plan for consolidation with estimated savings and implementation complexity.

## Analysis Workflow

1. **Inventory intake** — Ask the user to provide their current vendor list. If not already structured, request: vendor name, category/function, approximate annual cost, primary users/teams, and contract renewal date.

2. **Categorize by function** — Group all vendors into functional buckets (e.g., communication, project management, data storage, security, analytics, CRM, HR, finance). Flag any bucket with more than one vendor as a potential overlap.

3. **Identify overlaps** — For each overlap bucket, compare vendors on:
   - Core feature parity (what % of needs does each cover)
   - Integration depth with other tools in the stack
   - User adoption (which team uses which tool and why)
   - Contract flexibility (month-to-month vs. locked in)

4. **Score consolidation candidates** — Rate each redundant vendor pair or group on:
   - **Cost savings potential** (High/Medium/Low): estimated annual $ recovered
   - **Migration complexity** (High/Medium/Low): data migration, retraining, workflow changes
   - **Consolidation priority score** = high savings + low complexity scores highest

5. **Identify the consolidation path** — For each group, recommend: keep one vendor, migrate to an existing tool already in the stack, or evaluate a net-new replacement that covers multiple functions.

6. **Flag risks** — Note vendors with long-term contracts, single-owner tools with no backup, or tools embedded in critical workflows that would cause disruption.

7. **Sequence the plan** — Order consolidations by: quick wins first (low complexity, any savings), then high-value projects, then long-term migrations.

## Output Format

Produce a structured consolidation plan with the following sections:

**1. Vendor Inventory Summary**
- Total vendor count by category (table format)
- Total estimated annual spend (if provided)
- Number of overlap areas identified

**2. Overlap Analysis**
- One section per overlapping category
- List each vendor, its function, cost, and overlap %
- Recommendation: which to keep and why

**3. Prioritized Consolidation Roadmap**
- Table with columns: Priority, Vendors to Consolidate, Keep/Replace With, Est. Annual Savings, Complexity, Recommended Timeline
- Minimum 3 rows, sorted by priority score

**4. Quick Wins (30–90 days)**
- Bullet list of 3–5 actions that can be taken immediately with low risk

**5. Risks & Dependencies**
- Bullet list of consolidations that carry contract, technical, or organizational risk with a mitigation note for each

**6. Estimated Total Impact**
- Projected annual cost savings range
- Estimated reduction in vendor count
- Qualitative complexity/cognitive load reduction summary
