---
name: customer-onboarding-drop-off-diagnosis
description: >
  Identifies where new customers disengage during onboarding by mapping behavioral drop-off signals to messaging and UX gaps, then recommending targeted interventions. Use when someone says their onboarding completion rate is low, asks why new users aren't activating, wants to reduce churn in the first 30 days, notices users aren't reaching key milestones, or needs to improve time-to-value for new signups.
category: marketing
tags: [onboarding, retention, activation, churn, user-journey]
author: community
---

# Customer Onboarding Drop-Off Diagnosis

This skill analyzes onboarding funnel data and behavioral signals to pinpoint where and why new customers disengage, then generates specific email or in-app messaging interventions for each drop-off point.

## Diagnosis Workflow

### Step 1: Map the Onboarding Stages
Ask the user to confirm or provide their onboarding stages. Use this default skeleton if none is provided:
1. Signup / Account creation
2. Profile setup or initial configuration
3. First key action (e.g., import data, invite teammate, create first item)
4. First value moment (the "aha" moment)
5. Habit loop established (second or third session)

### Step 2: Extract Drop-Off Data
Request or infer the following for each stage:
- Completion rate or percentage of users who proceed
- Time typically spent at this stage
- Known friction points (support tickets, rage clicks, survey feedback)
- Whether any current messaging exists (email, tooltip, modal)

If the user cannot provide exact numbers, ask them to rank stages by perceived drop-off severity (high / medium / low).

### Step 3: Identify Root Cause Categories
For each high-drop-off stage, classify the root cause into one or more of these categories:
- **Messaging gap** — users don't understand what to do or why it matters
- **Value gap** — users haven't seen enough benefit to justify continuing
- **Friction gap** — the step is technically or cognitively too hard
- **Timing gap** — the ask comes too early or too late in the journey
- **Expectation gap** — the product doesn't match what was promised pre-signup

### Step 4: Match Interventions to Root Causes
Apply this mapping to generate interventions:

| Root Cause | Recommended Intervention |
|---|---|
| Messaging gap | Contextual tooltip or in-app coach mark explaining the step's purpose |
| Value gap | Triggered email with a social proof story or before/after outcome |
| Friction gap | Simplify the step, add a progress indicator, or offer a guided setup wizard |
| Timing gap | Delay or resequence the ask; use behavioral triggers instead of time-based triggers |
| Expectation gap | Welcome email that resets expectations and maps the path to value |

### Step 5: Prioritize Interventions
Score each intervention using this formula:
- **Impact** (1–3): How many users are affected and how severely?
- **Effort** (1–3): How hard is this to implement? (1 = easy)
- **Priority Score** = Impact ÷ Effort

Rank interventions from highest to lowest priority score.

### Step 6: Draft Intervention Copy
For the top 2–3 interventions, write ready-to-use copy:
- **Email**: Subject line, preview text, body (under 150 words), and one CTA
- **In-app message**: Headline (under 8 words), body (1–2 sentences), button label

## Output Format

Produce a structured report with the following sections:

---

**Onboarding Drop-Off Diagnosis Report**

**Funnel Summary**
A brief table listing each stage, estimated drop-off rate, and severity rating (High / Medium / Low).

**Top Drop-Off Points**
For each high-severity stage:
- Stage name
- Observed drop-off signal
- Root cause category and one-sentence explanation

**Intervention Recommendations**
A prioritized list (highest impact first) with:
- Intervention type (email / in-app / UX change)
- Root cause it addresses
- Priority score
- Ready-to-use copy for emails and in-app messages

**Quick Wins**
A bulleted list of 2–3 changes that can
