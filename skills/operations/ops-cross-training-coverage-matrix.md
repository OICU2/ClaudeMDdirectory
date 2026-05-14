---
name: ops-cross-training-coverage-matrix
description: >
  Builds a cross-training coverage matrix that maps team members to operational roles and surfaces
  single-point-of-failure risks where only one person can perform a critical function. Use when
  someone says "we need a backup for this role," asks about bus factor or key-person dependency,
  wants to identify coverage gaps on the team, needs to plan cross-training initiatives, or is
  worried about what happens if someone leaves or goes on vacation.
category: operations
tags: [cross-training, coverage, risk, team-operations, workforce-planning]
author: community
---

# Cross-Training Coverage Matrix

Generates a structured team coverage matrix that identifies who is trained for which roles, flags dangerous single-point-of-failure gaps, and produces a prioritized cross-training action plan.

## Workflow

1. **Gather inputs** — Ask the user to provide:
   - List of team members (names or anonymized identifiers)
   - List of critical roles or functions (e.g., deployment lead, incident commander, customer escalation handler)
   - Current proficiency level per person per role: Primary (P), Backup (B), In Training (T), or None (-)
   - Any known upcoming absences, departures, or headcount changes

2. **Build the matrix** — Construct a table with team members as rows and roles as columns. Fill each cell with P, B, T, or —. If the user cannot provide all data, generate a template and instruct them to fill it in.

3. **Score coverage health per role** — For each role, calculate:
   - Number of Primaries
   - Number of Backups
   - Coverage status: **Critical** (0–1 trained), **At Risk** (1 Primary, 0 Backups), **Adequate** (1P + 1B or 2P), **Strong** (2+ Primaries and 1+ Backup)

4. **Identify single points of failure** — Flag any role where only one person holds a P or B designation. Highlight if that person is also a single point of failure in multiple roles simultaneously.

5. **Assess individual load** — Flag team members who are the sole owner of 2+ critical roles; they represent compounded organizational risk.

6. **Generate cross-training recommendations** — Produce a prioritized list of training pairs (Person → Role) ordered by risk severity. For each recommendation, include the risk rationale and a suggested timeline (immediate/this quarter/next quarter).

## Output Format

Produce three sections:

**Section 1 — Coverage Matrix Table**
A markdown table with team members as rows, roles as columns, and P/B/T/— as cell values. Add a "Load" column showing how many roles each person owns as Primary.

**Section 2 — Gap Analysis**
A bulleted list of identified gaps, each formatted as:
- 🔴 **[Role]** — CRITICAL: Only [Name] is trained. No backup exists.
- 🟡 **[Role]** — AT RISK: [Name] is primary with no designated backup.
- 🟢 **[Role]** — ADEQUATE: [Names] provide coverage.

Include a summary count: X critical gaps, Y at-risk roles, Z adequately covered.

**Section 3 — Cross-Training Action Plan**
A prioritized table with columns: Priority | Who to Train | Role | Current Gap | Recommended Timeline | Owner. List items in order from highest to lowest risk. Limit to the top 10 actions unless the team is large.
