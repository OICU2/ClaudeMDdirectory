---
name: ops-policy-gap-identification-report
description: >
  Analyzes current operational procedures against a compliance framework or best-practice standard to identify undocumented, missing, or incomplete policies. Use when someone says "we need to find gaps in our policies," asks about "what policies are we missing," wants to "compare our procedures to a framework," needs to "audit our documentation against a standard," or is preparing for "a compliance review or audit." Produces a structured gap report with prioritized remediation recommendations.
category: operations
tags: [compliance, policy, gap-analysis, audit, documentation]
author: community
---

# Ops Policy Gap Identification Report

This skill compares existing operational procedures against a target compliance framework or best-practice standard and produces a prioritized report of missing, undocumented, or non-conformant policies.

## Analysis Workflow

1. **Establish the target framework**: Identify the compliance standard or best-practice framework being used (e.g., ISO 27001, SOC 2, NIST CSF, HIPAA, internal governance model). If not specified, ask the user to provide it or select from common options.

2. **Inventory existing documentation**: Ask the user to provide or list current policies, procedures, runbooks, or SOPs. Accept file contents, summaries, or a bulleted list of document titles with brief descriptions.

3. **Map existing docs to framework requirements**: For each requirement or control domain in the target framework, determine whether a corresponding policy exists in the current documentation set.
   - Mark as **Covered** if a policy explicitly addresses the requirement.
   - Mark as **Partial** if a policy exists but lacks required elements (scope, owner, review cadence, enforcement mechanism).
   - Mark as **Missing** if no policy addresses the requirement at all.

4. **Assess criticality**: Assign each gap a severity level:
   - **Critical**: Required for legal/regulatory compliance or directly tied to breach/incident risk.
   - **High**: Required by the framework but not legally mandated; significant audit risk.
   - **Medium**: Best practice; absence weakens posture but poses lower immediate risk.
   - **Low**: Nice-to-have or supplementary documentation.

5. **Identify root cause for each gap**: Note whether the gap is due to a policy never being written, a policy existing but not being maintained, unclear ownership, or a process existing in practice but never documented.

6. **Generate remediation actions**: For each Missing or Partial item, specify a concrete next step (e.g., "Draft an Access Control Policy covering user provisioning, deprovisioning, and periodic access reviews").

## Output Format

Produce a structured markdown report with the following sections:

**Header**
- Report title, date, framework used, and scope of review.

**Executive Summary** (3–5 sentences)
- Total requirements reviewed, number covered/partial/missing, and top-risk areas.

**Gap Analysis Table**
A table with columns: `Framework Requirement | Control Domain | Status (Covered/Partial/Missing) | Severity | Root Cause | Recommended Action`

**Critical and High Gaps — Detail Section**
For each Critical or High gap, provide a short paragraph (3–5 sentences) explaining the risk exposure and a specific remediation step with suggested policy owner and target completion timeframe.

**Summary Statistics**
- Count of gaps by status and severity in a small table.
- Percentage of framework requirements currently covered.

**Recommended Prioritization Roadmap**
A numbered list of the top 5–10 actions ordered by severity and implementation effort, formatted as: `[Priority #] — [Action] — [Owner Suggestion] — [Effort Estimate: Low/Medium/High]`

Report length will vary by framework size but should be thorough enough to be handed directly to a compliance officer or auditor.
