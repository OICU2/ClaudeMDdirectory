---
name: operational-audits
description: >
  Conducts structured audits of operational processes to verify compliance, surface gaps, and recommend corrective actions. Use when someone says "audit our process," asks about "operational compliance," wants to "identify gaps in our workflow," needs to "review our procedures," or requests a "process health check."
category: operations
tags: [audit, compliance, operations, process-review, gap-analysis]
author: community
---

# Operational Audits

This skill guides Claude through a systematic audit of operational processes, producing a structured findings report with compliance status, identified gaps, and prioritized recommendations.

## Audit Workflow

1. **Define Audit Scope**
   - Confirm which process, department, or system is under review
   - Identify the compliance standard, policy, or benchmark to audit against (e.g., internal SOP, regulatory requirement, industry best practice)
   - Clarify the time period or snapshot being evaluated

2. **Gather Process Information**
   - Ask the user to describe the current process step-by-step, or accept documentation if provided
   - Identify process owners, inputs, outputs, and handoff points
   - Note any tools, systems, or platforms involved

3. **Map Against Requirements**
   - List each requirement or control from the applicable standard
   - For each requirement, assess status: **Compliant**, **Partial**, **Non-Compliant**, or **Not Applicable**
   - Flag missing documentation, undefined ownership, or unenforced controls

4. **Identify Gaps and Risk**
   - Classify each gap by severity: **Critical** (immediate risk), **Moderate** (near-term risk), or **Minor** (low impact)
   - Note root cause where identifiable: missing policy, lack of training, process design flaw, or tooling gap

5. **Develop Recommendations**
   - For each gap, provide one specific corrective action
   - Assign a suggested priority: **Immediate**, **Short-term (30 days)**, or **Long-term (90+ days)**
   - Where applicable, suggest an owner role responsible for remediation

6. **Summarize Audit Results**
   - Calculate an overall compliance rate (compliant items / total applicable items)
   - Highlight top 3 risks requiring urgent attention

## Output Format

Produce a structured audit report with the following sections:

**Audit Summary**
- Process audited, scope, and standard/benchmark used
- Overall compliance rate (e.g., 14/18 controls = 78%)
- Audit date and period reviewed

**Findings Table**
| # | Requirement | Status | Severity | Gap Description |
|---|-------------|--------|----------|-----------------|
| 1 | ... | Compliant / Partial / Non-Compliant | Critical / Moderate / Minor | ... |

**Top Risks**
- Numbered list of the 3 most critical findings with a one-sentence risk statement each

**Recommendations**
| Gap # | Corrective Action | Priority | Suggested Owner |
|-------|-------------------|----------|-----------------|
| 1 | ... | Immediate / 30-day / 90-day | ... |

**Next Steps**
- 3–5 bullet points outlining immediate actions to begin remediation

Keep the report factual and specific. Avoid vague language like "improve processes" — every recommendation must describe a concrete, executable action.