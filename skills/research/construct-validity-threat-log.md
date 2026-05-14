---
name: construct-validity-threat-log
description: >
  Identifies and documents potential threats to construct validity in a research design, producing a structured threat log with severity ratings and mitigation strategies. Use when someone says "review my construct validity," asks about "threats to my measures," or wants to "audit my operationalization." Also activates when a researcher mentions common method bias, mono-operation bias, or asks whether their constructs are "capturing what they intend to measure."
category: research
tags: [construct-validity, research-design, measurement, bias-detection, methodology]
author: community
---

# Construct Validity Threat Log

This skill systematically identifies and documents construct validity threats in a research design, generating a prioritized log with severity ratings and actionable mitigations for each threat type.

## Threat Identification Workflow

1. **Extract construct information** — Identify all key constructs in the study, their operational definitions, and how each is measured (scale, instrument, item count, source).

2. **Screen for mono-operation bias** — Check whether any construct is measured by a single item or a single method. Flag every instance where N=1 for operationalizations.

3. **Screen for mono-method bias** — Determine if all constructs are measured using the same method (e.g., all self-report Likert scales). Flag when predictor and outcome share identical measurement formats.

4. **Screen for common method bias (CMV)** — Assess whether predictors and outcomes are collected from the same source at the same time using the same instrument. Note survey design features that inflate or deflate correlations.

5. **Screen for inadequate preoperational explication** — Check whether constructs were defined conceptually before operationalization. Flag constructs with vague or post-hoc definitions.

6. **Screen for construct confounding** — Identify whether any measure likely captures variance from an unintended construct (e.g., social desirability, acquiescence, negative affect).

7. **Screen for hypothesis-guessing and demand characteristics** — Assess whether the study design makes the hypotheses transparent to participants, potentially altering responses.

8. **Screen for evaluation apprehension** — Identify conditions where participants may respond defensively or self-presentationally rather than honestly.

9. **Rate severity for each identified threat** — Assign High / Medium / Low based on: (a) likelihood the threat is present, (b) magnitude of potential bias if present, (c) centrality of the affected construct to the study's core claims.

10. **Generate mitigations** — For each threat, provide at least one design-stage fix (if study is not yet run) and one post-hoc statistical or analytical remedy (if data are already collected).

## Output Format

Produce a structured **Construct Validity Threat Log** in the following format:

---

### Construct Validity Threat Log

**Study/Design Summary:** [1–2 sentence recap of what was described]

---

**Threat Table**

| # | Threat Type | Affected Construct(s) | Evidence in Design | Severity | Mitigation (Design) | Mitigation (Post-hoc) |
|---|-------------|----------------------|-------------------|----------|--------------------|-----------------------|
| 1 | Mono-operation bias | [name] | [specific reason] | High/Med/Low | [action] | [action] |
| 2 | Common method bias | [name] | [specific reason] | High/Med/Low | [action] | [action] |
| … | … | … | … | … | … | … |

---

**Overall Validity Risk Assessment:** [2–4 sentences summarizing the most critical threats and the confidence one can have in the construct interpretations given current design]

**Priority Actions:** Numbered list of the top 3 highest-impact changes the researcher should make, ordered by severity.

---

- Table must include every identified threat as a separate row; do not combine unrelated threats
- Mitigations must be specific (e.g., "add a second measure of X using behavioral observation" not "improve measurement")
- If fewer than three threats are found, explicitly state which threat categories were checked and ruled out
- Severity ratings must reference the three criteria from Step 9, not be assigned arbitrarily
