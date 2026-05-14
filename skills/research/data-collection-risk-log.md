---
name: data-collection-risk-log
description: >
  Identifies and documents potential risks in a data collection plan, pairing each threat with concrete mitigation strategies. Use when someone says "help me anticipate problems with my data collection," asks about "what could go wrong with my survey or study," wants to "risk-assess my research methodology," is planning "how to protect my data collection timeline," or needs to "document risks for a data collection proposal."
category: research
tags: [risk-assessment, data-collection, research-planning, mitigation, methodology]
author: community
---

# Data Collection Risk Log

This skill produces a structured risk log for a data collection plan, cataloguing access barriers, response bias threats, and timeline risks alongside ranked severity levels and actionable mitigation strategies.

## Risk Identification Workflow

1. **Extract the data collection context** — Identify the method (survey, interview, observation, scraping, etc.), target population, timeline, and any constraints the user has mentioned.

2. **Audit for Access Barriers** — Consider each of the following and flag any that apply:
   - Gatekeeper or IRB approval delays
   - Participant recruitment challenges (hard-to-reach populations, opt-in fatigue)
   - Platform or database access restrictions
   - Geographic, language, or technological barriers
   - Data licensing or legal compliance blockers

3. **Audit for Response Bias Threats** — Flag any that apply:
   - Social desirability bias (sensitive topics)
   - Self-selection bias (who chooses to respond)
   - Recall bias (retrospective questions)
   - Interviewer or observer effect
   - Leading question design or poorly defined constructs

4. **Audit for Timeline Threats** — Flag any that apply:
   - Seasonal or cyclical availability of participants
   - Dependency on third-party tools, APIs, or approvals
   - Attrition over longitudinal collection periods
   - Concurrent competing events that shift participant attention
   - Data processing or cleaning bottlenecks post-collection

5. **Assign severity and likelihood** — For each identified risk, rate:
   - **Severity**: High / Medium / Low (impact on data quality or project completion)
   - **Likelihood**: High / Medium / Low (probability of occurrence given current plan)

6. **Propose mitigations** — For each risk, write one to three specific, actionable mitigation steps. Mitigations must be realistic given the user's stated constraints.

7. **Flag unresolved risks** — Note any risks that cannot be mitigated without additional information from the user and ask targeted follow-up questions.

## Output Format

Produce a structured risk log with the following layout:

---

**Data Collection Risk Log**
*Project/Study:* [name or brief description]
*Collection Method(s):* [e.g., online survey, semi-structured interviews]
*Date:* [today's date]

---

### 1. Access Barriers

| Risk | Severity | Likelihood | Mitigation Strategies |
|------|----------|------------|----------------------|
| [Risk description] | High/Med/Low | High/Med/Low | 1. [Action] 2. [Action] |

---

### 2. Response Bias Threats

| Risk | Severity | Likelihood | Mitigation Strategies |
|------|----------|------------|----------------------|
| [Risk description] | High/Med/Low | High/Med/Low | 1. [Action] 2. [Action] |

---

### 3. Timeline Threats

| Risk | Severity | Likelihood | Mitigation Strategies |
|------|----------|------------|----------------------|
| [Risk description] | High/Med/Low | High/Med/Low | 1. [Action] 2. [Action] |

---

### 4. Unresolved Risks & Open Questions

- [List any risks that require more information, with a specific follow-up question for each]

---

**Summary:** One to two sentences naming the highest-priority risk overall and the single most important mitigation action to take immediately.

---

The log must include at minimum one entry per category. Tables must be complete with no empty cells. Mitigation strategies must be written as imperative action steps, not observations.
