---
name: ops-playbook-version-control-design
description: >
  Designs a versioning and change-log system for operational playbooks so teams always access the current approved procedure. Use when someone wants to version control their runbooks, asks how to track changes to operational procedures, needs a system for playbook approvals and rollbacks, wants to manage multiple playbook versions across teams, or is designing a change-log workflow for SOPs.
category: operations
tags: [versioning, playbooks, runbooks, change-management, documentation]
author: community
---

# Ops Playbook Version Control Design

This skill designs a complete versioning and change-log system for operational playbooks, activated when teams need structured control over procedure updates, approvals, and history.

## Versioning System Design Workflow

### 1. Define Version Numbering Schema
- Use semantic versioning: `MAJOR.MINOR.PATCH`
  - **MAJOR**: Procedural overhaul or scope change (requires re-training)
  - **MINOR**: New steps, removed steps, or changed outcomes
  - **PATCH**: Typos, formatting, clarifications with no behavioral change
- Prepend a status prefix: `DRAFT`, `REVIEW`, `APPROVED`, `DEPRECATED`
- Example: `APPROVED-2.1.3`

### 2. Design the Playbook Header Block
Every playbook must open with a structured metadata block:
```
Playbook: [Name]
Version: [MAJOR.MINOR.PATCH]
Status: [DRAFT | REVIEW | APPROVED | DEPRECATED]
Owner: [Team or Role]
Last Approved By: [Name/Role]
Approval Date: [YYYY-MM-DD]
Next Review Date: [YYYY-MM-DD]
Supersedes: [Previous version number]
```

### 3. Build the Change-Log Table
Append a change-log section at the bottom of every playbook:
```
| Version | Date       | Author     | Change Type | Summary of Change         | Approved By |
|---------|------------|------------|-------------|---------------------------|-------------|
| 2.1.3   | 2024-11-01 | J. Rivera  | PATCH       | Fixed typo in Step 4      | Ops Lead    |
| 2.1.0   | 2024-09-15 | A. Chen    | MINOR       | Added rollback procedure  | CTO         |
| 2.0.0   | 2024-06-01 | Ops Team   | MAJOR       | Full rewrite for new infra| VP Ops      |
```

### 4. Define the Approval Gate Process
- **DRAFT → REVIEW**: Author submits PR or change request; notifies designated reviewers
- **REVIEW → APPROVED**: Requires sign-off from defined approver roles (specify by playbook criticality tier)
  - Tier 1 (critical): Two approvers including a senior stakeholder
  - Tier 2 (standard): One approver from owning team
  - Tier 3 (reference): Self-approval with peer notification
- **APPROVED → DEPRECATED**: Triggered when a newer MAJOR or MINOR version is approved; old version archived, not deleted

### 5. Establish Storage and Access Rules
- Store all versions in a single source of truth (Git repo, Confluence space, or designated wiki)
- Only `APPROVED` versions are linked from team dashboards or incident response tools
- `DRAFT` and `REVIEW` versions live in a staging area inaccessible during active incidents
- Archive deprecated versions in a read-only folder with a prominent deprecation notice

### 6. Set Review Cadence Triggers
Define when a playbook must enter review regardless of change requests:
- Time-based: Every 6 months for Tier 1, annually for Tier 2/3
- Event-based: After any incident where the playbook was used, after system changes affecting the procedure, after team restructuring that changes ownership

### 7. Rollback Protocol
- Every MAJOR version bump must document the rollback path to the previous MAJOR version
- Rollback decision authority must be named explicitly (e.g., "On-call Ops Lead may revert to prior APPROVED version without full approval cycle during active incident")

## Output Format

Claude will produce a complete versioning system design containing:

1. **Version Schema** — the numbering convention
