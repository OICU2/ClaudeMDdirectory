---
name: ops-regulatory-change-impact-assessment
category: operations
description: >
  Evaluates how incoming regulatory changes affect existing operational processes, flagging workflows that require immediate modification or retraining. Use when someone says "we just received a new regulation," asks about how a compliance update affects their operations, wants to assess the impact of a policy change on their workflows, mentions a new legal requirement that might affect their team, or needs to know which processes need to be updated after a regulatory shift.
tags: [compliance, regulatory, operations, risk-management, process-improvement]
author: community
---

# Regulatory Change Impact Assessment

This skill systematically maps incoming regulatory changes to existing operational workflows, identifying which processes require immediate modification, which staff require retraining, and what the timeline for compliance looks like.

## Assessment Workflow

### 1. Extract the Regulatory Change
- Identify the regulation name, issuing body, and effective date
- Extract the specific mandates, prohibitions, or new requirements
- Note any grace periods, phased rollouts, or exemptions
- Clarify jurisdiction scope (local, national, industry-wide)

### 2. Inventory Affected Operational Areas
Cross-reference the regulation against these operational domains:
- **Data handling**: storage, transfer, retention, deletion policies
- **Customer-facing processes**: onboarding, consent, disclosures, communications
- **Internal workflows**: approvals, audits, record-keeping, reporting chains
- **Third-party relationships**: vendor contracts, data sharing agreements, SLAs
- **Staff roles**: job functions that touch regulated activities

### 3. Classify Impact by Severity
Assign each affected area one of three tiers:
- 🔴 **Critical**: Non-compliance carries immediate legal, financial, or operational penalty — must be resolved before effective date
- 🟡 **Moderate**: Requires process update but has a remediation window or low immediate penalty risk
- 🟢 **Minor**: Best-practice alignment or documentation update only

### 4. Identify Required Actions per Affected Area
For each impacted workflow or process, specify:
- **What must change**: the exact step, policy, or system that is non-compliant
- **Who owns the change**: role or team responsible
- **What type of change it is**: process redesign, system configuration, policy update, or staff retraining
- **Dependencies**: other teams, approvals, or tools required before the change can be made

### 5. Build the Retraining Flag List
Flag any role or team that:
- Directly executes a workflow that is changing
- Makes decisions governed by the updated regulation
- Signs off on compliance-related documentation
- Trains or supervises others in affected areas

### 6. Generate the Compliance Timeline
- Anchor to the regulation's effective date
- Work backward to assign deadlines for each Critical and Moderate action
- Flag any items where the lead time required exceeds the time available

## Output Format

Produce a structured impact assessment report with the following sections:

---

**Regulation Summary**
- Name, issuing body, effective date, jurisdiction

**Impacted Operational Areas** *(table format)*
| Area | Current State | Required Change | Severity | Owner |
|------|--------------|-----------------|----------|-------|

**Critical Actions Required** *(bulleted list)*
- Each item: [Action] → [Owner] → [Deadline]

**Retraining Requirements**
- List of roles/teams flagged, with a one-line reason per entry

**Compliance Timeline**
- Chronological list of milestones from today to effective date

**Open Questions / Gaps**
- Any areas where more information is needed to complete the assessment

---

Keep the report scannable. Use tables and bullet points throughout. Limit prose to section headers and gap explanations only. If the regulation text is ambiguous, state the ambiguity explicitly rather than assuming.
