---
name: research-finding-alternative-explanation-log
description: >
  Generates a structured alternative explanation log for each key finding in a research study or analysis, mapping out rival hypotheses and the evidence required to eliminate them. Use when someone says "help me stress-test my findings," asks about "what else could explain these results," or wants to "audit my research conclusions for confounds." Also triggered when a user needs to "rule out competing explanations" or wants to "make my findings more rigorous."
category: research
tags: [research, critical-thinking, hypothesis-testing, peer-review, methodology]
author: community
---

# Research Finding Alternative Explanation Log

This skill produces a structured log of plausible alternative explanations for each key research finding, along with the specific evidence, tests, or data needed to rule each one out.

## Workflow

1. **Extract key findings**: Identify each distinct claim or result the research presents as significant. Number them clearly.

2. **For each finding, generate alternative explanations**: Produce 3–6 rival hypotheses that could plausibly account for the same observed result. Consider these categories:
   - Confounding variables (third-variable explanations)
   - Selection or sampling bias
   - Measurement error or instrumentation artifacts
   - Reverse causality
   - Chance or statistical noise
   - Demand characteristics or researcher expectancy effects

3. **Assess plausibility**: Rate each alternative explanation as High / Medium / Low plausibility given the study design, and give a one-sentence justification.

4. **Specify ruling-out evidence**: For each alternative, state the exact data, statistical test, control condition, or follow-up study that would be sufficient to eliminate or substantially weaken that explanation.

5. **Flag unresolvable alternatives**: Mark any alternative explanations that cannot be ruled out with the existing data or any feasible follow-up, and explain why they remain open.

6. **Summarize robustness**: After all findings are processed, provide a one-paragraph overall assessment of how well the evidence withstands alternative explanations and which gaps pose the greatest threat to the conclusions.

## Output Format

Produce a structured log with the following repeating block for each finding:

---
**Finding [N]:** [Restate the finding in one sentence]

| Alternative Explanation | Plausibility | Ruling-Out Evidence Required |
|------------------------|--------------|------------------------------|
| [Explanation 1]        | High/Med/Low | [Specific test, data, or control] |
| [Explanation 2]        | High/Med/Low | [Specific test, data, or control] |
| [Explanation 3]        | High/Med/Low | [Specific test, data, or control] |
| *(add rows as needed)* | | |

**Unresolvable Alternatives:** [List any, or write "None identified"]
---

End the full log with:

**Overall Robustness Assessment:** [1 paragraph summarizing the weakest points and strongest threats to the conclusions]

Keep language precise and non-hedging. Each ruling-out requirement must name a specific method (e.g., "propensity score matching on income and education," "split-half reliability test," "pre-registered replication with a non-WEIRD sample") rather than vague suggestions like "more research needed."
