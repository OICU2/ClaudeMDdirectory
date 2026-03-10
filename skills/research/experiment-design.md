---
name: experiment-design
description: >
  Designs rigorous, controlled experiments with clear hypotheses, variables, and success metrics.
  Use when someone says "I want to test whether," asks how to run an experiment, wants to validate
  an assumption, needs to set up an A/B test, or is trying to prove causation vs. correlation.
category: research
tags: [experiments, scientific-method, hypothesis-testing, research-design, methodology]
author: community
---

# Experiment Design

Structures experiments with proper controls, defined variables, and reproducible methodology so results are trustworthy and actionable.

## Experiment Design Workflow

1. **Clarify the research question** — Restate the core question in falsifiable form. Identify what claim or assumption is being tested.

2. **Define the hypothesis** — Write a specific, testable prediction: "If [intervention], then [measurable outcome] because [reasoning]." Include both null and alternative hypotheses.

3. **Identify variables**
   - Independent variable: what you deliberately change
   - Dependent variable: what you measure as an outcome
   - Controlled variables: what you hold constant
   - Confounding variables: what could skew results and how to mitigate them

4. **Design the control** — Specify the baseline condition against which treatment is compared. Explain why the control is valid (e.g., placebo group, current behavior baseline, holdout group).

5. **Define the sample**
   - Population being studied
   - Sample size with justification (statistical power if quantitative)
   - Sampling method (random, stratified, convenience) and its tradeoffs
   - Inclusion/exclusion criteria

6. **Specify the procedure** — Write step-by-step instructions detailed enough for someone else to replicate the experiment exactly. Include timing, tools, data collection method, and who does what.

7. **Set success criteria before running** — Define what constitutes a positive, negative, and inconclusive result. For quantitative experiments: significance threshold (e.g., p < 0.05), minimum effect size that matters, confidence interval targets. For qualitative: what patterns or themes would confirm or refute the hypothesis.

8. **Identify risks and limitations** — List at least three things that could invalidate results (selection bias, instrumentation error, external events, demand characteristics). Propose mitigations where possible.

9. **Plan the analysis** — Specify the statistical test or analysis method to be used and why it fits the data type and design. Name the tool (Python/scipy, R, Excel, etc.).

10. **Document reproducibility requirements** — List everything needed to reproduce: environment, data sources, random seeds, software versions, observer protocols.

## Output Format

Produce a structured experiment plan with these labeled sections:

```
## Research Question
[One sentence, falsifiable]

## Hypothesis
- Null (H₀): ...
- Alternative (H₁): ...

## Variables
- Independent: ...
- Dependent: ...
- Controlled: ...
- Potential confounds: ...

## Control Design
[Description of baseline/control condition]

## Sample
- Population: ...
- Size: ... (rationale: ...)
- Method: ...

## Procedure
1. [Step]
2. [Step]
...

## Success Criteria
- Positive result: ...
- Negative result: ...
- Inconclusive: ...

## Risks & Mitigations
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| ...  | ...        | ...        |

## Analysis Plan
[Method, tool, why it fits]

## Reproducibility Checklist
- [ ] ...
```

Length scales with experiment complexity. Simple A/B tests: ~400 words. Multi-variable studies: ~800+ words. Always include the full table and checklist regardless of length.