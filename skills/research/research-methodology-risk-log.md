---
name: research-methodology-risk-log
description: >
  Identifies and documents methodological weaknesses in a research design that could undermine internal or external validity, then proposes concrete mitigation steps for each risk. Use when someone shares a research design for review, asks about potential flaws in their study approach, wants to stress-test their methodology before data collection, is concerned about reviewer objections, or needs to evaluate the rigor of a proposed study.
category: research
tags: [research-design, methodology, validity, risk-assessment, academic-research]
author: community
---

# Research Methodology Risk Log

This skill audits a research design for methodological weaknesses—sampling issues, confounds, measurement problems, bias sources, and validity threats—and produces a structured risk log with severity ratings and mitigation strategies.

## Risk Identification Workflow

1. **Extract design parameters** — Identify the study type (experimental, observational, survey, qualitative, mixed-methods), population, sampling strategy, measures/instruments, data collection procedure, and analysis plan.

2. **Audit across six risk domains:**
   - **Internal validity** — confounding variables, selection bias, attrition, testing effects, instrumentation drift
   - **External validity** — sample representativeness, ecological validity, replication concerns
   - **Construct validity** — whether measures actually capture the intended constructs; operationalization gaps
   - **Statistical conclusion validity** — underpowered design, multiple comparisons, assumption violations
   - **Procedural integrity** — blinding failures, demand characteristics, experimenter bias, protocol inconsistencies
   - **Ethical and reporting risks** — missing controls, p-hacking vulnerability, HARKing potential

3. **Rate each identified risk** on two dimensions:
   - **Likelihood** (Low / Medium / High) — how probable is this flaw given the design?
   - **Impact** (Low / Medium / High) — if it occurs, how severely does it threaten study conclusions?

4. **Generate mitigation steps** — For each risk, provide 1–3 specific, actionable remedies (e.g., add a control group, pre-register hypotheses, increase N via power analysis, use validated instruments, randomize assignment).

5. **Flag showstoppers** — Explicitly call out any risk rated High Likelihood + High Impact as a critical issue that should be resolved before data collection begins.

## Output Format

Produce a **Research Methodology Risk Log** structured as follows:

---

**Study Summary** (2–3 sentences describing the design as understood)

**Risk Log Table**

| # | Risk Domain | Risk Description | Likelihood | Impact | Priority |
|---|-------------|-----------------|------------|--------|----------|
| 1 | Internal Validity | [specific flaw] | High | High | 🔴 Critical |
| 2 | Statistical | [specific flaw] | Medium | High | 🟠 High |
| 3 | Construct | [specific flaw] | Low | Medium | 🟡 Medium |

**Mitigation Steps** (per risk, numbered to match the table)

- **Risk 1 — [Name]:** [Actionable step 1]. [Actionable step 2].
- **Risk 2 — [Name]:** [Actionable step].

**Critical Issues Summary** (only if any 🔴 Critical risks exist — plain-language explanation of why these must be addressed and what the consequences are if ignored)

**Overall Rigor Assessment** (1–2 sentences rating the design's current state and top priority before proceeding)

---

Length scales with design complexity: simple surveys may yield 4–6 risks; complex multi-site experiments may yield 10–15. Always prioritize specificity over exhaustiveness—flag real risks, not generic boilerplate.
