---
name: ops-decision-rights-matrix
description: >
  Defines and documents who holds decision-making authority, approval rights, and veto power for each class of operational decision to eliminate ambiguity and speed up execution. Use when someone says "we don't know who owns this decision," asks about approval authority or sign-off requirements, or wants to clarify decision-making roles across teams. Also activates when someone needs to resolve a bottleneck caused by unclear ownership or wants to formalize a RACI or DACI framework for their organization.
category: operations
tags: [decision-making, governance, operations, authority, accountability]
author: community
---

# Ops Decision Rights Matrix

This skill builds a structured decision rights matrix that maps every class of operational decision to a specific owner, approver, and set of consulted/informed parties — used whenever decision authority is unclear, contested, or slowing down execution.

## Decision Rights Matrix Build Process

### Step 1: Inventory Decision Classes
Identify and categorize all recurring decisions in scope. Group them into classes:
- **Strategic**: direction, priorities, resource allocation above a threshold
- **Operational**: day-to-day execution, process changes, vendor selection below threshold
- **Financial**: spend authority, budget changes, contract commitments
- **People**: hiring, firing, compensation, performance actions
- **Technical**: architecture, tooling, standards, security policies
- **External**: customer commitments, partner agreements, public communications

Ask the user which domains are in scope and what the organizational context is (startup, team, department, company-wide).

### Step 2: Define Decision Rights Roles
For each decision, assign exactly one holder per role:

- **Decider (D)**: Makes the final call. One person only — no committees as Decider.
- **Approver (A)**: Must sign off before the decision executes. Can block. Optional for lower-stakes decisions.
- **Veto (V)**: Holds hard stop authority (legal, compliance, finance, security). Only assign when genuinely warranted.
- **Consulted (C)**: Must be consulted before decision is made. Their input is required but not binding.
- **Informed (I)**: Notified after the decision is made. No input required.

### Step 3: Set Decision Thresholds
For each decision class, define the threshold that escalates authority:
- Dollar amounts (e.g., "Spend < $10K: Team Lead decides; $10K–$100K: VP approves; > $100K: CFO approves")
- Risk level (low/medium/high/critical)
- Reversibility (reversible vs. irreversible)
- Scope (single team vs. cross-functional vs. company-wide)

### Step 4: Identify and Resolve Conflicts
Flag any decision class where:
- More than one person claims the Decider role
- No one owns the Decider role
- Veto power is overused (more than 20% of decisions have a veto holder)
- Approval chains exceed 2 levels (creates bottlenecks)

For each conflict, recommend a resolution: consolidate authority, clarify scope boundaries, or escalate to a tie-breaker owner.

### Step 5: Document Escalation Paths
For every decision class, define:
- What triggers escalation (threshold exceeded, disagreement, novel situation)
- Who it escalates to
- Maximum time allowed before a default decision fires (e.g., "If no response in 48 hours, Decider proceeds")

## Output Format

Produce the following artifacts:

**1. Decision Rights Matrix Table**
A markdown table with columns:
`Decision Class | Specific Decision | Decider | Approver | Veto | Consulted | Informed | Threshold/Condition | Escalation Path`

Minimum 10–15 rows covering the domains identified. Use full names or role titles, not initials.

**2. Authority Threshold Summary**
A short table listing each decision class with its escalation thresholds (dollar, risk, scope). 5–10 rows.

**3. Conflict & Gap Log**
Bulleted list of any identified conflicts, gaps, or over-centralized authority points, each with a one-line recommended fix.

**4. Implementation Notes**
3–5 bullet points on how to socialize, maintain, and enforce the matrix (e.g., where to store it, how often to review, what triggers an update).

Format
