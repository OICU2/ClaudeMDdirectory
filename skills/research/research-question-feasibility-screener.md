---
name: research-question-feasibility-screener
category: research
description: >
  Evaluates whether a proposed research question can realistically be answered within specified time, budget, and data access constraints before committing resources. Use when someone says "I want to study whether...", asks "is this research question doable?", wants to know if a project is realistic, needs to vet a research idea before pitching it, or is trying to decide between competing research directions.
tags: [research, feasibility, planning, methodology, scoping]
author: community
---

# Research Question Feasibility Screener

This skill systematically assesses whether a proposed research question is answerable given real-world constraints, and produces a structured go/no-go recommendation before resources are committed.

## Feasibility Screening Workflow

**Step 1: Extract the Research Question**
- Identify the core question being asked. If it is vague, restate it in testable form: "Does X affect Y in population Z under conditions W?"
- Flag if the question is compound (multiple questions bundled together) and split them before proceeding.

**Step 2: Assess Question Clarity**
- Is there a clear dependent variable (what is being measured)?
- Is there a clear independent variable or condition of interest?
- Is the target population or context defined?
- If any element is missing, note it as a gap and propose a minimal clarification needed.

**Step 3: Evaluate Data Availability**
- What data sources would answer this question? List specific types (administrative records, surveys, sensors, publications, interviews, etc.).
- Are those sources publicly available, purchasable, or require negotiation/approval?
- Estimate the probability of access: High (freely available), Medium (requires IRB/agreement/purchase), Low (proprietary or non-existent).
- If data does not exist and must be collected, estimate collection complexity: Low (online survey), Medium (field study), High (longitudinal or clinical).

**Step 4: Evaluate Time Feasibility**
- Ask the user for their timeline if not stated; assume 3 months if unspecified.
- Map the question to a minimum viable study design (e.g., secondary analysis, pilot survey, systematic review).
- Flag if the minimum credible study design exceeds the stated timeline.
- Note any parallel tasks that could compress the schedule.

**Step 5: Evaluate Budget Feasibility**
- Ask for or assume a budget tier: Shoestring (<$1K), Modest ($1K–$10K), Adequate ($10K–$100K), Well-funded (>$100K).
- Identify the primary cost drivers: data acquisition, participant recruitment, software/tools, personnel, dissemination.
- Flag if estimated costs for the minimum viable study exceed the stated budget tier.

**Step 6: Identify Methodological Risks**
- List the top 3 threats to validity (e.g., confounding, selection bias, measurement error, small N).
- Rate each risk: Low / Medium / High.
- Note if any risk is a fatal flaw that cannot be mitigated within constraints.

**Step 7: Generate Verdict**
- **Green Light**: Question is answerable within constraints with manageable risks.
- **Yellow Light**: Answerable with modifications — specify required scope reductions, alternative data sources, or timeline adjustments.
- **Red Light**: Not feasible under stated constraints — explain which constraint is the binding one and what would need to change.

## Output Format

Produce a structured feasibility report with the following sections, using headers and bullet points:

---

**Research Question (Restated):** [One clear, testable sentence]

**Feasibility Verdict:** [🟢 Green / 🟡 Yellow / 🔴 Red] — [One sentence rationale]

**Constraint Assessment:**
| Constraint | Status | Notes |
|---|---|---|
| Data Availability | High / Medium / Low | [Specific sources or gaps] |
| Time | Feasible / Tight / Infeasible | [Minimum design vs. stated timeline] |
| Budget | Feasible / Tight / Infeasible | [Primary cost drivers] |

**Top Methodological Risks:**
1. [Risk] — Severity: [Low/Medium/High] — Mitigation: [Specific action]
2. [Risk] — Severity: [Low/Medium/High] — Mitigation: [Specific action]
3.
