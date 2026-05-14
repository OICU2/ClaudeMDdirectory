---
name: ops-tool-adoption-gap-audit
description: >
  Identifies which operational tools are underutilized by teams and produces a structured gap report with prioritized adoption interventions. Use when someone says "our team isn't using the tools we have," asks about low tool adoption rates, wants to understand why tools are being ignored, needs to improve software utilization across departments, or is planning a tool rollout and wants to anticipate adoption barriers.
category: operations
tags: [tool-adoption, operations, gap-analysis, change-management, utilization]
author: community
---

# Ops Tool Adoption Gap Audit

This skill analyzes operational tool usage across teams, surfaces underutilization patterns, and generates a prioritized gap report with concrete adoption interventions — activated when users raise concerns about tool adoption, utilization, or change management failures.

## Audit Workflow

### 1. Inventory Collection
Ask the user to provide or confirm:
- Full list of operational tools currently licensed or deployed
- Teams or departments in scope
- Any usage data available (login frequency, feature usage, support tickets, self-reported surveys)
- Time period for analysis (default: last 90 days)

If no data is available, prompt the user to estimate adoption on a 3-tier scale:
- **High**: >70% of team actively uses core features weekly
- **Partial**: 30–70% use it, or only surface features are used
- **Low**: <30% adoption or tool is functionally abandoned

### 2. Gap Identification
For each tool, assess:
- **Expected vs. actual user base**: Who should be using it vs. who is
- **Feature depth**: Core features used vs. total available
- **Workflow integration**: Is the tool part of daily workflows or bypassed?
- **Redundancy signals**: Are teams using workarounds (spreadsheets, email, shadow tools) instead?

Flag tools as gap items if they meet any of these criteria:
- Adoption below 50% of intended user base
- Only 1–2 features used when 5+ are available
- Team has an active workaround replacing the tool's primary function
- Tool was mandated but has no internal champion

### 3. Root Cause Classification
For each gap item, assign a primary root cause category:
- **Awareness**: Team doesn't know the tool exists or what it does
- **Training**: Tool exists but users lack skills to use it effectively
- **Relevance**: Tool doesn't match actual workflow needs
- **Access**: Permissions, SSO issues, or license gaps block usage
- **Culture**: Leadership doesn't model or enforce usage
- **Competing tools**: A preferred alternative exists (sanctioned or not)

### 4. Intervention Mapping
For each root cause, apply the corresponding intervention:
- **Awareness** → Targeted announcement, Slack/email campaign, demo session
- **Training** → Lunch-and-learn, recorded walkthrough, embedded help docs, buddy pairing
- **Relevance** → Workflow mapping session, customization review, escalate to tool owner for feature request
- **Access** → IT ticket template, license audit, SSO configuration review
- **Culture** → Manager enablement, exec sponsorship request, usage KPI added to team metrics
- **Competing tools** → Rationalization decision: consolidate, deprecate, or formally sanction the alternative

### 5. Prioritization
Score each gap item on two axes:
- **Impact**: How much value is lost due to underutilization? (High / Medium / Low)
- **Effort to fix**: How hard is the intervention? (Low / Medium / High)

Prioritize: High Impact + Low Effort first, then High Impact + High Effort, then deprioritize Low Impact items.

## Output Format

Produce a structured gap report with these sections:

---

**OPS TOOL ADOPTION GAP REPORT**
*Scope: [Teams] | Period: [Date Range]*

---

**EXECUTIVE SUMMARY**
2–3 sentences covering total tools audited, number flagged as gaps, and the single highest-priority intervention.

---

**GAP INVENTORY TABLE**

| Tool | Expected Users | Est. Adoption | Gap Severity | Root Cause | Recommended Intervention | Priority |
|------|---------------|---------------|--------------|------------|--------------------------|----------|
| [Tool Name] | [N] | [%] | High/Med/Low | [Category] | [Specific action] | P1/P2/P
