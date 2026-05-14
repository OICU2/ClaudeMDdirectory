---
name: research-finding-to-hypothesis-reversal-test
category: research
description: >
  Stress-tests research conclusions by systematically generating plausible alternative hypotheses
  that could explain the same data, exposing interpretive blind spots and confirmation bias.
  Use when someone says "the data shows that," wants to pressure-test a research conclusion,
  is about to publish or present findings, needs to anticipate reviewer objections, or asks
  "what else could explain these results."
tags: [research, critical-thinking, hypothesis-testing, peer-review, scientific-reasoning]
author: community
---

# Research Finding to Hypothesis Reversal Test

This skill takes a stated research conclusion and systematically challenges it by generating competing hypotheses that fit the same evidence, helping researchers identify weaknesses before critics do.

## Reversal Test Workflow

1. **Extract the core claim.** Identify the independent variable, dependent variable, and causal direction implied by the finding. State it as: "X causes/predicts/correlates with Y."

2. **Reverse the causal arrow.** Generate a hypothesis where Y causes X instead. Assess whether the study design could distinguish between these directions.

3. **Identify confounding candidates.** Produce 3–5 plausible third variables (Z) that could cause both X and Y, making the relationship spurious. Prioritize confounders that were not controlled for in the original study.

4. **Apply the null-effect alternative.** Frame a hypothesis where the observed pattern is consistent with no real effect — sampling noise, p-hacking, measurement error, or ceiling/floor effects.

5. **Generate mechanism-swapped alternatives.** Accept that X and Y are related, but propose 2–3 different underlying mechanisms than the one the researchers favor. Each mechanism should have different implications for replication or intervention.

6. **Assess study design vulnerabilities.** For each alternative hypothesis, note whether the original methodology could rule it out. Flag any that the design cannot eliminate.

7. **Score relative plausibility.** Rate each alternative hypothesis Low / Medium / High plausibility based on prior literature, sample characteristics, and effect size.

8. **Identify the decisive test.** For the most plausible alternative, describe the single data collection or analysis step that would most efficiently distinguish it from the original conclusion.

## Output Format

Produce a structured report with the following sections:

**Original Claim:** One sentence restating the finding precisely.

**Alternative Hypotheses Table:**
| # | Alternative Hypothesis | Type | Plausibility | Design Can Rule Out? |
|---|----------------------|------|-------------|----------------------|
| 1 | ... | Reverse causation | Medium | No |
| 2 | ... | Confound | High | Partially |
| ... | | | | |

**Top Threat:** A short paragraph (3–5 sentences) on the single most dangerous alternative hypothesis — why it is credible, what evidence supports it, and what it would mean if true.

**Decisive Test:** One concrete data collection or re-analysis step that would adjudicate between the original claim and the top threat.

**Confidence Assessment:** A one-line verdict: rate the original conclusion as Robust / Tentative / Fragile given the alternatives identified.

Keep the full output under 600 words. Use plain language; avoid jargon unless the user's original framing requires it.
