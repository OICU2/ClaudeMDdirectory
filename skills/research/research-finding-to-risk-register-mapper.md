---
name: research-finding-to-risk-register-mapper
description: >
  Translates key research findings into structured risk register entries with likelihood, impact, and mitigation strategies. Use when someone says "turn these findings into risks," asks to "map research to a risk register," wants to "assess risks from this research," needs to "convert study results into risk items," or requests to "build a risk register from findings."
category: research
tags: [risk-management, research-analysis, risk-register, findings-translation, mitigation-planning]
author: community
---

# Research Finding to Risk Register Mapper

This skill converts raw research findings into structured, actionable risk register entries complete with likelihood scores, impact ratings, and mitigation strategies, activating whenever a user needs to bridge research outputs and risk management documentation.

## Mapping Workflow

1. **Extract findings**: Identify each discrete finding from the provided research. Treat each distinct insight, data point, or conclusion as a separate candidate for a risk entry.

2. **Frame as risks**: Rewrite each finding as a forward-looking risk statement using the format: "Risk that [negative outcome] occurs because [finding as root cause]."

3. **Score likelihood**: Assign a likelihood rating on a 1–5 scale based on evidence strength in the research:
   - 1 = Rare (weak signals, anecdotal)
   - 2 = Unlikely (some evidence, not widespread)
   - 3 = Possible (moderate evidence, plausible conditions)
   - 4 = Likely (strong evidence, conditions present)
   - 5 = Almost certain (definitive evidence, conditions confirmed)

4. **Score impact**: Assign an impact rating on a 1–5 scale based on consequence severity implied by the finding:
   - 1 = Negligible
   - 2 = Minor
   - 3 = Moderate
   - 4 = Major
   - 5 = Critical

5. **Calculate risk level**: Multiply likelihood × impact. Classify:
   - 1–6: Low
   - 7–14: Medium
   - 15–19: High
   - 20–25: Critical

6. **Write mitigations**: For each risk, produce 2–3 specific, actionable mitigation measures directly tied to the finding's root cause. Avoid generic advice.

7. **Assign owner placeholder**: Suggest a role (not a person) best suited to own each risk based on its domain (e.g., "Head of Security," "Product Manager," "Legal Counsel").

## Output Format

Produce one risk register table followed by expanded entries for each risk.

**Summary Table**

| # | Risk Statement | Likelihood (1–5) | Impact (1–5) | Risk Score | Risk Level | Owner Role |
|---|---------------|-----------------|-------------|------------|------------|------------|
| 1 | Risk that... | 3 | 4 | 12 | Medium | Role |

**Expanded Entries** (one block per risk):

---
**Risk #[N]: [Short Risk Title]**

- **Risk Statement:** Risk that [outcome] occurs because [finding].
- **Source Finding:** [Direct quote or paraphrase of the original finding]
- **Likelihood:** [Score] — [One sentence justification]
- **Impact:** [Score] — [One sentence justification]
- **Risk Score:** [Score] ([Level])
- **Mitigations:**
  1. [Specific action tied to root cause]
  2. [Specific action tied to root cause]
  3. [Specific action tied to root cause, if applicable]
- **Suggested Owner:** [Role]
- **Review Trigger:** [Condition or event that should prompt reassessment of this risk]
---

Produce entries for every finding provided. If a finding does not translate into a meaningful risk, note it briefly and explain why it was excluded.
