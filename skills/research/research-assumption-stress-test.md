---
name: research-assumption-stress-test
description: >
  Systematically challenges every stated assumption in a research design by identifying failure conditions and tracing downstream impacts on validity and conclusions. Use when someone says "I'm not sure my assumptions hold," asks about weaknesses in their research design, wants to pressure-test their methodology, is preparing for a thesis defense or peer review, or needs to identify where their study could break down.
category: research
tags: [research, assumptions, methodology, validity, stress-testing]
author: community
---

# Research Assumption Stress Test

This skill extracts all stated and implicit assumptions from a research design, then systematically identifies the conditions under which each would fail and maps the resulting damage to the study's validity, conclusions, and generalizability.

## Stress-Testing Workflow

1. **Extract all assumptions** — Parse the research design for explicit assumptions (those the researcher named) and implicit ones (unstated premises embedded in sampling strategy, measurement choices, causal claims, or generalization scope). List every one before proceeding.

2. **Classify each assumption** by type:
   - *Theoretical* — claims about how constructs relate
   - *Measurement* — claims about what instruments actually capture
   - *Sampling* — claims about representativeness or randomness
   - *Contextual* — claims about stability of conditions across time, place, or population
   - *Statistical* — claims required for the chosen analysis to be valid (normality, independence, homoscedasticity, etc.)

3. **Identify failure conditions** for each assumption — State the specific, concrete circumstances, data patterns, or real-world conditions under which the assumption breaks. Be precise: name the mechanism of failure, not just "this might not hold."

4. **Assess failure probability** — Rate each assumption's failure risk as Low / Medium / High based on prior literature, the study's context, and how testable the assumption is.

5. **Trace downstream impact** — For each failing assumption, describe exactly which part of the study breaks: Does internal validity collapse? Does the statistical test become invalid? Do the conclusions no longer follow from the results? Does generalizability shrink to a narrow subgroup?

6. **Identify compounding failures** — Flag combinations of assumptions that, if they failed together, would be especially destructive. Note whether any single assumption is a load-bearing linchpin whose failure cascades into multiple others.

7. **Recommend mitigations** — For each high- or medium-risk assumption, propose one concrete action: a robustness check, a sensitivity analysis, an alternative measure, a boundary condition to explicitly state, or a reframing of the causal claim.

## Output Format

Produce a structured stress-test report with the following sections:

**Assumption Inventory**
A numbered list of all identified assumptions, labeled by type (Theoretical / Measurement / Sampling / Contextual / Statistical) and flagged as Explicit or Implicit.

**Stress-Test Table**
A table with columns:
| # | Assumption | Failure Condition | Failure Risk (L/M/H) | Downstream Impact | Mitigation |

**Compounding Failure Scenarios**
2–4 short paragraphs describing the most dangerous multi-assumption failure combinations and what the study would look like if they occurred simultaneously.

**Priority Action List**
A ranked list of the top 3–5 most urgent assumptions to address before the study proceeds, with one specific next step for each.

Keep the tone diagnostic and precise — identify what breaks and why, not just that something "could be a limitation."
