---
name: ops-sop-gap-cross-reference
description: >
  Compares existing standard operating procedures against actual process steps to identify undocumented workflows, missing procedural coverage, and compliance gaps. Use when someone says "our SOPs don't match what we actually do," asks about finding gaps in documented procedures, wants to audit process documentation against real workflows, needs to identify undocumented steps in operations, or is trying to bring SOPs into alignment with current practice.
category: operations
tags: [sop, process-audit, compliance, documentation, gap-analysis]
author: community
---

# SOP Gap Cross-Reference

Systematically compares documented standard operating procedures against actual process steps to surface undocumented workflows, missing controls, and procedural gaps that represent compliance or operational risk.

## Gap Analysis Workflow

1. **Collect inputs**: Gather the existing SOP documents and the actual process description (from interviews, process maps, observed steps, or informal runbooks). If only one side is provided, ask for the other before proceeding.

2. **Normalize both sides**: Break each source into discrete, numbered atomic steps. Strip formatting, headings, and prose — reduce each to action + object + condition (e.g., "Operator verifies batch weight before sealing").

3. **Map SOP steps to actual steps**: Create a cross-reference table matching each SOP step to its corresponding actual-process counterpart. Use these match categories:
   - **Matched**: Step exists in both and is substantively equivalent
   - **SOP-only**: Step is documented but not performed in practice
   - **Actual-only**: Step is performed but not documented in any SOP
   - **Diverged**: Step exists in both but differs in actor, sequence, condition, or output

4. **Classify each gap by risk tier**:
   - **Critical**: Undocumented steps that touch safety, regulatory compliance, data integrity, or financial controls
   - **Moderate**: Diverged steps that could cause inconsistent outcomes across operators or shifts
   - **Low**: Minor sequencing differences or stylistic divergence with no operational impact

5. **Identify root cause for each gap**: For every Actual-only or Diverged step, note whether the gap is likely due to SOP staleness, informal process evolution, training drift, or a deliberate workaround.

6. **Generate remediation actions**: For each gap, assign one of: Update SOP, Retrain staff, Investigate workaround, Deprecate obsolete step, or Escalate for policy decision.

## Output Format

Produce a structured gap report with the following sections:

**Summary Block** (3–5 sentences): Total steps analyzed on each side, count by match category, number of critical/moderate/low gaps.

**Cross-Reference Table**:
| # | SOP Step | Actual Step | Match Category | Risk Tier | Recommended Action |
|---|----------|-------------|----------------|-----------|-------------------|

**Gap Detail Cards** (one per Actual-only, SOP-only, or Diverged entry):
- Gap ID and category
- Exact description of the discrepancy
- Risk tier and rationale
- Recommended remediation with owner role (e.g., Process Owner, Compliance, Training Lead)

**Prioritized Action List**: Ranked remediation items starting with Critical gaps, formatted as actionable tasks suitable for a project tracker.
