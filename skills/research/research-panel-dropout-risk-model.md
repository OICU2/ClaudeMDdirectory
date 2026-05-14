---
name: research-panel-dropout-risk-model
description: >
  Analyzes participant engagement signals across survey waves to predict and flag dropout risk before data collection gaps occur. Use when someone says "participants are dropping out of my panel study," asks about "predicting survey attrition," or wants to "identify which respondents are likely to stop participating." Also triggers when someone needs to "flag low-engagement respondents" or "model longitudinal panel retention."
category: research
tags: [panel-research, attrition, longitudinal, survey-methodology, predictive-modeling]
author: community
---

# Research Panel Dropout Risk Model

This skill builds a structured dropout risk assessment by analyzing engagement signals across survey waves and produces a prioritized flag list of at-risk participants with recommended retention interventions.

## Dropout Risk Assessment Workflow

### 1. Collect Engagement Signal Inputs
Request or extract the following variables per participant per wave:
- Response latency (days between invite and completion)
- Item nonresponse rate (% of questions skipped or left blank)
- Completion rate per wave (partial vs. full submission)
- Open-text response length (if applicable — shorter responses signal disengagement)
- Contact bounce or opt-out flags
- Number of waves participated in vs. total waves fielded

### 2. Compute Per-Participant Risk Indicators
For each participant, calculate:
- **Latency trend**: Is response time increasing wave-over-wave? Flag if latency increased >50% from baseline.
- **Nonresponse creep**: Flag if item nonresponse rate exceeded 15% in the most recent wave.
- **Partial completion pattern**: Flag if 2+ consecutive waves were partial completions.
- **Engagement decline score**: Assign 1 point per flag above; score ≥2 = moderate risk, ≥3 = high risk.
- **Wave gap**: Flag any participant who missed 1 wave entirely as automatic moderate risk.

### 3. Segment Participants by Risk Tier
- **High Risk (score ≥3 or missed 2+ waves)**: Immediate outreach recommended.
- **Moderate Risk (score 1–2 or missed 1 wave)**: Monitor next wave; consider incentive refresh.
- **Low Risk (score 0, consistent completion)**: No action needed; note as retention anchors.

### 4. Identify Structural Dropout Patterns
Check for cohort-level patterns that signal design problems, not individual disengagement:
- If >20% of a specific recruitment cohort is high risk, flag potential sampling or incentive misalignment.
- If dropout clusters around a specific wave, flag survey burden or questionnaire design as root cause.
- Compare dropout rate by respondent subgroup (demographics, recruitment channel) to surface differential attrition bias.

### 5. Recommend Retention Actions
Map risk tier to specific interventions:
- High risk: Personal outreach, incentive increase, shortened wave option, or exit interview offer.
- Moderate risk: Reminder sequence adjustment, topic relevance reminder, incentive reminder.
- Cohort-level risk: Redesign wave instrument, shorten survey, or review recruitment source.

## Output Format

Produce a structured report with the following sections:

**1. Risk Summary Table**
| Participant ID | Waves Completed | Latency Trend | Nonresponse Rate | Risk Score | Risk Tier |
List all participants with computed values; sort by Risk Score descending.

**2. High-Risk Flag List**
Bulleted list of participant IDs in the high-risk tier with the specific signals that triggered the flag and the recommended intervention.

**3. Cohort-Level Findings**
2–4 sentences describing any structural dropout patterns, affected cohorts, and whether attrition appears random or systematic.

**4. Recommended Actions by Priority**
Numbered list ordered by urgency: immediate actions (high-risk outreach) → short-term actions (wave redesign) → monitoring tasks (moderate-risk watch list).

**5. Attrition Bias Note**
One paragraph assessing whether current dropout patterns, if they continue, would introduce demographic or attitudinal bias into the panel dataset, and what correction steps (weighting, oversampling) should be considered.

Report length: concise but complete. Risk table should include every participant. Narrative sections should total no more than 400 words.
