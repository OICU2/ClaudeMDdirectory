---
name: ops-vendor-exit-contingency-plan
category: operations
description: >
  Creates a structured vendor exit contingency plan documenting the steps, timelines, and resources
  required to safely transition away from a specific vendor. Use when someone asks about vendor lock-in
  risks, needs to plan for a vendor relationship ending, wants to document a fallback strategy if a
  supplier fails, is preparing for contract non-renewal, or needs to assess the cost of switching
  vendors.
tags: [vendor-management, risk-planning, operations, contingency, procurement]
author: community
---

# Vendor Exit Contingency Plan

This skill produces a detailed, actionable vendor exit plan covering transition steps, timelines, resource requirements, and risk mitigation when a vendor relationship needs to end or fails.

## Workflow

### 1. Gather Vendor Context
Before generating the plan, collect or prompt for:
- Vendor name and category (software, hardware, services, logistics, etc.)
- Scope of dependency (what systems, teams, or processes rely on this vendor)
- Contract end date or anticipated exit trigger
- Known alternatives or replacement candidates
- Estimated data volume, integrations, or assets tied to the vendor

### 2. Identify Exit Triggers
Document the specific conditions that would activate this plan:
- Vendor insolvency or acquisition
- Contract non-renewal or pricing dispute
- Performance or SLA failures
- Regulatory or compliance conflict
- Strategic business decision to switch

### 3. Inventory Dependencies
Map everything tied to the vendor:
- Data stored, processed, or transmitted through the vendor
- Integrations, APIs, and connected systems
- Contracts, licenses, and intellectual property
- Team access, credentials, and accounts
- Physical assets, hardware, or infrastructure

### 4. Define Transition Phases
Structure the exit into discrete phases with clear owners:

**Phase 1 — Preparation (Weeks 1–4)**
- Notify internal stakeholders and form a transition team
- Audit all vendor dependencies and data holdings
- Begin evaluating and shortlisting replacement vendors
- Review contract termination clauses and notice periods

**Phase 2 — Parallel Operation (Weeks 4–12)**
- Onboard replacement vendor in parallel
- Begin data migration in batches; validate integrity at each step
- Update integrations and test against replacement systems
- Train affected teams on new tools or processes

**Phase 3 — Cutover (Weeks 12–16)**
- Switch primary operations to replacement vendor
- Maintain read-only access to legacy vendor for audit or reference
- Decommission active integrations with old vendor
- Confirm data deletion or transfer per contractual and legal obligations

**Phase 4 — Closure (Weeks 16–20)**
- Formally terminate contract with documented confirmation
- Retrieve or destroy all residual data per data governance policy
- Conduct post-mortem and update vendor risk register
- Archive exit documentation

### 5. Define Resource Requirements
For each phase, specify:
- Internal team roles required (IT, legal, procurement, finance, operations)
- Estimated person-hours per team
- External costs (migration tools, consulting, new vendor onboarding fees)
- Budget approval thresholds

### 6. Identify Risks and Mitigations
List top risks with a mitigation for each:
- Data loss during migration → Incremental migration with checksums and rollback points
- Service disruption → Parallel run period before full cutover
- Contractual penalties → Legal review of exit clauses before triggering exit
- Knowledge loss → Document all vendor-specific configurations before departure

## Output Format

Produce a structured Markdown document with the following sections:

```
# Vendor Exit Contingency Plan: [Vendor Name]

## Overview
- Vendor: [Name]
- Category: [Type]
- Prepared by: [Owner]
- Date: [Date]
- Trigger condition(s): [List]

## Dependency Inventory
[Table: Dependency | Type | Criticality | Owner]

## Exit Phases and Timeline
[Table or numbered list: Phase | Duration | Key Actions | Owner]

## Resource Requirements
[Table: Phase | Team/Role | Estimated Hours | Estimated Cost]

## Risk Register
[Table: Risk | Likelihood | Impact | Mitigation]

## Replacement Vendor Options
[List: Vendor | Pros | Cons | Est. Onboarding Time]

## Legal and Contractual Checklist
