---
name: offboarding-workflow-design
description: >
  Designs a structured employee or contractor offboarding checklist covering access revocation, asset recovery, knowledge transfer, and final payments. Use when someone says "we need to offboard an employee," asks about "how to handle someone leaving the company," or wants to "create an offboarding process," "set up an exit checklist," or "manage a contractor termination."
category: operations
tags: [offboarding, hr-operations, access-management, knowledge-transfer, compliance]
author: community
---

# Offboarding Workflow Design

This skill generates a complete, role-aware offboarding checklist with owners, timelines, and action items across IT, HR, finance, and management — triggered whenever someone needs to manage an employee or contractor departure.

## Offboarding Workflow Steps

### 1. Gather Context First
Ask for the following if not provided:
- Role type (employee vs. contractor)
- Department and access level (admin, standard, external)
- Departure type (voluntary resignation, termination, end of contract)
- Last working day and notice period
- Whether the role requires knowledge transfer or documentation handoff

### 2. Build the Checklist in Five Phases

**Phase 1: Day of Notice / Decision (HR + Manager)**
- Confirm last working day in writing
- Notify IT, payroll, facilities, and direct manager immediately
- Determine if the person is a flight risk (termination) — if yes, flag for same-day access revocation
- Schedule exit interview (voluntary departures only)
- Identify knowledge transfer requirements and assign a receiving owner

**Phase 2: During Notice Period (Manager + Departing Person)**
- Document all active projects: status, blockers, stakeholders, next steps
- Transfer ownership of files, repositories, accounts, and documentation
- Introduce successor or temporary owner to key contacts
- Complete and hand off any outstanding deliverables
- Conduct knowledge transfer sessions; record if possible

**Phase 3: Final Week (IT + Manager)**
- Audit all system access: SSO, SaaS tools, cloud environments, VPN, code repositories, admin panels
- Remove or transfer ownership of shared accounts and service accounts
- Reassign email; set up auto-reply and forwarding as needed
- Revoke physical access (key cards, office codes)
- Back up or archive the departing person's files per retention policy

**Phase 4: Last Day (HR + IT + Finance)**
- Revoke all system access at end of business or upon departure
- Collect company assets: laptop, phone, badge, peripherals, credit cards
- Provide asset return receipt
- Confirm final paycheck details, including accrued PTO payout and expense reimbursements
- Deliver separation documentation: reference letter policy, COBRA info, NDA reminder, non-compete terms if applicable
- Conduct exit interview if not already completed

**Phase 5: Post-Departure (HR + IT + Finance)**
- Verify all access has been fully revoked within 24 hours
- Process final paycheck and expense reports within legal deadline
- Remove from payroll, benefits, and internal directories
- Archive employment records per retention policy
- Notify external vendors or clients if the person was a primary contact
- Close or reassign any open tickets, subscriptions, or licenses tied to the person

### 3. Customize by Role Type
- **Contractors**: Emphasize IP assignment confirmation, contract closure, final invoice processing, and removal from project tools
- **Senior/Admin roles**: Add privileged access audit, service account audit, and domain admin review
- **Client-facing roles**: Add client transition plan, intro email to successor, CRM ownership transfer

### 4. Flag Compliance and Risk Items
- Highlight any steps with legal deadlines (final pay laws vary by jurisdiction)
- Flag missing knowledge transfer as a risk if not completed before last day
- Note any access not yet revoked as a critical open item

## Output Format

Produce a structured offboarding checklist with the following layout:

1. **Header**: Role name/type, departure date, departure type, checklist generated date
2. **Phase-by-phase checklist**: Each phase has a heading, owner label (e.g., `[IT]`, `[HR]`, `[Manager]`), and checkbox-style action items
3. **Risk flags section**: Bullet list of any incomplete, time-sensitive, or high-risk items identified based on the provided context
4. **Timeline summary**: A
