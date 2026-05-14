---
name: cross-wave-survey-comparability-check
description: >
  Systematically audits survey instruments across multiple waves to detect question wording changes, scale shifts, response option alterations, and structural differences that threaten longitudinal validity. Use when someone says "compare trends across survey years," asks about "whether survey changes affect my analysis," or wants to "validate that wave-over-wave comparisons are meaningful." Also triggers when users mention "question rewording between waves," "scale changes in panel data," or "longitudinal survey consistency."
category: research
tags: [survey-methodology, longitudinal-research, data-quality, questionnaire-design, trend-analysis]
author: community
---

# Cross-Wave Survey Comparability Check

This skill audits survey instruments across time points to identify comparability threats and produces a structured report of issues that would invalidate longitudinal trend analysis.

## Comparability Audit Workflow

### Step 1: Inventory the Survey Instruments
- Request or reconstruct the exact question text, response options, and question order for each wave
- Note the survey years, modes (phone, online, in-person), and any known vendor or methodology changes
- Flag immediately if full question text is unavailable — partial audits must be disclosed

### Step 2: Conduct Item-Level Comparison
For each question the user intends to trend, check all of the following:

**Wording changes:**
- Exact phrasing differences (even minor word substitutions like "usually" → "generally")
- Changes to question stems, sub-clauses, or introductory framing
- Addition or removal of examples, definitions, or parenthetical clarifiers
- Pronoun or tense shifts that alter the reference period (e.g., "do you" vs. "did you")

**Response scale changes:**
- Number of scale points (e.g., 4-point → 5-point Likert)
- Presence or absence of a midpoint/neutral option
- Labeling changes on endpoints or intermediate points (e.g., "agree" → "somewhat agree")
- Direction reversal (positive-to-negative vs. negative-to-positive ordering)
- Binary vs. graded response option changes

**Structural/contextual changes:**
- Question order shifts that introduce priming or contrast effects
- Module placement changes (e.g., question moved from demographics section to attitudes section)
- Addition or removal of preceding questions on the same topic
- Filter/skip logic changes that alter who receives the question
- Split-ballot or randomization changes across waves

**Mode and administration changes:**
- Interviewer-administered → self-administered (social desirability effects)
- Mode switches (phone → web, mail → mobile)
- Changes in interviewer training or probing protocols

### Step 3: Classify Each Issue by Severity

Assign each identified difference to one of three tiers:

- **Critical (Do Not Trend):** Changes that fundamentally alter what is being measured — scale point additions/removals, major question rewording that changes construct, response option direction reversals, filter logic changes that alter the eligible population
- **Moderate (Trend With Caution):** Changes that likely introduce measurable bias but may be correctable — minor wording substitutions, mode changes, question reordering, endpoint label relabeling
- **Minor (Document and Proceed):** Changes unlikely to materially affect comparability — punctuation, capitalization, trivial synonym substitution with no semantic shift

### Step 4: Assess Correction Options
For each Moderate-severity issue, evaluate:
- Whether bridging questions were asked in any wave (same respondents receiving both versions)
- Whether external validation studies exist for this type of change
- Whether statistical adjustment (e.g., anchoring vignettes, recoding, linking) is feasible
- Whether the affected wave(s) should be excluded from the trend line

### Step 5: Produce Recommendations
- State explicitly which questions can be trended without qualification
- State which require analytical caveats or corrections
- State which should be dropped from trend analysis entirely
- Recommend documentation language for methods sections

## Output Format

Produce a structured comparability report with the following sections:

**1. Audit Summary Table**
A table with columns: Question ID/Label | Wave A Text | Wave B Text (repeat columns for additional waves) | Change Type | Severity | Recommendation

**2. Issue Narratives**
For each Critical or Moderate issue: 2–4 sentences explaining the specific threat to comparability, the mechanism of bias, and the
