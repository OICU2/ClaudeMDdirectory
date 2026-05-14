---
name: research-cost-overrun-risk-report
description: >
  Analyzes a research project plan against budget and timeline assumptions to surface early warning indicators of cost or schedule overrun. Use when someone says "our project is going over budget," asks about "risk of missing our deadline," or wants to "check if our research plan is realistic." Also triggers when someone shares a project plan and asks "are we on track" or wants to "identify red flags in our timeline."
category: research
tags: [risk-analysis, budget, project-planning, research-management, cost-control]
author: community
---

# Research Cost Overrun Risk Report

This skill analyzes a research project plan, budget, and timeline to identify early warning indicators of cost or schedule overrun and produce a structured risk report with actionable recommendations.

## Risk Analysis Workflow

1. **Extract project parameters** from the provided plan: total budget, timeline milestones, resource allocations, team size, scope definition, and any stated assumptions.

2. **Identify structural risk factors** across these five categories:
   - **Scope creep signals**: Vague deliverables, undefined acceptance criteria, open-ended research questions with no scoping constraints
   - **Budget assumptions**: Labor cost estimates, indirect cost rates, equipment/software costs, contingency buffer (flag if under 10–15%)
   - **Timeline assumptions**: Task dependencies, parallel workstreams, buffer time between milestones, seasonal or institutional constraints
   - **Resource risks**: Key person dependencies, part-time allocations on critical-path tasks, external vendor or data dependencies
   - **Historical pattern mismatches**: Compare stated estimates against known benchmarks (e.g., literature reviews routinely take 2–3× initial estimates; IRB approvals average 4–12 weeks)

3. **Score each risk factor** on a two-axis matrix:
   - **Likelihood**: Low / Medium / High
   - **Impact**: Low / Medium / High

4. **Identify the top 3–5 overrun triggers** — the specific combinations of assumptions most likely to cascade into budget or schedule failure.

5. **Recommend mitigations** for each high-priority risk: concrete actions, timeline adjustments, budget reallocations, or scope constraints.

6. **Flag missing information** that would be required to complete a full risk assessment (e.g., no contingency line item, no milestone dates, no named resource assignments).

## Output Format

Produce a structured report with the following sections:

---

**Project Summary**
One-paragraph restatement of the project scope, budget, and timeline as understood from the input.

**Risk Matrix**
A table with columns: Risk Factor | Category | Likelihood | Impact | Priority

**Top Overrun Triggers**
Numbered list of 3–5 highest-priority risks with a 2–3 sentence explanation of why each poses an overrun threat and what assumption it relies on.

**Recommended Mitigations**
Bulleted list paired to each top trigger. Each mitigation must be specific and actionable (e.g., "Add a 3-week IRB buffer after protocol submission" not "allow more time").

**Data Gaps**
Bulleted list of missing inputs that limit the accuracy of this assessment.

**Overall Risk Rating**
Single-line verdict: Low / Moderate / High / Critical — with a one-sentence justification.

---

Report length: 400–700 words. Use plain language. Avoid jargon unless the user's input uses it first.
