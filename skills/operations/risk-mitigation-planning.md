---
name: risk-mitigation-planning
description: >
  Identifies operational risks and builds structured contingency plans to minimize business impact. Use when someone says "what could go wrong," asks about protecting a project or launch, or wants to prepare for potential failures. Also activates when someone needs a risk assessment, wants to stress-test a plan, or is building a disaster recovery strategy.
category: operations
tags: [risk, contingency, planning, operations, resilience]
author: community
---

# Risk Mitigation Planning

Analyzes a given project, system, or operation to surface potential risks and produce actionable contingency plans with clear ownership and response steps.

## Risk Identification and Planning Workflow

1. **Clarify scope**: Identify the subject being assessed — project, launch, system, process, or event. If unclear, ask one focused question to define boundaries.

2. **Surface risks across categories**: Systematically identify risks in these domains:
   - Technical (system failures, integrations, data loss)
   - Operational (process breakdowns, supply chain, staffing)
   - Financial (budget overruns, cash flow, dependencies)
   - External (regulatory, market shifts, third-party failures)
   - Reputational (communications failures, customer impact)

3. **Score each risk**: Rate every identified risk on two axes:
   - **Likelihood**: Low / Medium / High
   - **Impact**: Low / Medium / High
   - Derive a **Priority**: Critical (High+High), Major (High+Medium or Medium+High), Minor (everything else)

4. **Build contingency plans for Critical and Major risks only**: For each:
   - **Trigger**: What signal or event activates this plan
   - **Immediate response**: First 1–3 actions within the first hour
   - **Owner**: Role or person responsible
   - **Resolution path**: Steps to full recovery or fallback
   - **Prevention measure**: What to do now to reduce likelihood

5. **Identify quick wins**: Flag any risks that can be eliminated or significantly reduced with minimal effort — surface these explicitly.

6. **Summarize residual risk**: After mitigation measures, assess the remaining exposure level and whether it is acceptable.

## Output Format

Produce a structured risk mitigation plan with these sections:

**Risk Register Table**
| Risk | Category | Likelihood | Impact | Priority |
|------|----------|------------|--------|----------|
| ...  | ...      | ...        | ...    | ...      |

**Contingency Plans** (one block per Critical/Major risk)
```
Risk: [name]
Trigger: [specific signal]
Immediate Response: [1–3 bullet actions]
Owner: [role]
Resolution Path: [ordered steps]
Prevention Measure: [action to take now]
```

**Quick Wins**
Bulleted list of low-effort, high-value preventive actions.

**Residual Risk Summary**
2–4 sentences on overall exposure after mitigations and whether the plan is ready to proceed.

Total length: scale to complexity. Simple plans = 1 page. Complex operations = up to 3 pages. No padding.