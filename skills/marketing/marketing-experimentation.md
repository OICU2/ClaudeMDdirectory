---
name: marketing-experimentation
description: >
  Designs and analyzes structured marketing experiments to test hypotheses and identify what drives results. Use when someone wants to A/B test a campaign, asks how to test a marketing idea, wants to validate a messaging strategy, needs to set up a controlled experiment, or is trying to figure out why a campaign isn't working.
category: marketing
tags: [experimentation, a/b-testing, analytics, optimization, growth]
author: community
---

# Marketing Experimentation

This skill designs rigorous marketing experiments — from hypothesis to analysis — so decisions are based on evidence rather than intuition.

## Experiment Design Workflow

### 1. Define the Hypothesis
- State the hypothesis in this format: "If we change [variable], then [metric] will [increase/decrease] by [estimated magnitude] because [reasoning]."
- Identify the single variable being tested (headline, CTA, audience segment, channel, offer, timing)
- Flag if the hypothesis is testable with available data and traffic volume

### 2. Set Success Metrics
- Define one primary metric (conversion rate, CTR, CAC, ROAS, open rate)
- Define up to two guardrail metrics that must not degrade (e.g., unsubscribe rate, bounce rate)
- Specify the minimum detectable effect (MDE) that would be meaningful to the business

### 3. Calculate Sample Size & Duration
- Use the formula: n = (16 × σ²) / δ² for continuous metrics, or a standard two-proportion z-test for conversion rates
- State required sample size per variant
- Estimate runtime based on current traffic/send volume
- Flag if traffic is too low for statistical significance within a reasonable timeframe

### 4. Design the Variants
- Control: current state, unchanged
- Treatment(s): one change per variant
- List exactly what differs between control and treatment — no compound changes
- Specify targeting, placement, and delivery rules to prevent contamination

### 5. Run the Experiment
- Define the randomization method (user-level, session-level, email list split)
- Set a fixed end date before launch — do not stop early based on early results
- Document the launch date, variant assignments, and any external events during the run

### 6. Analyze Results
- Calculate observed lift: (Treatment − Control) / Control × 100
- Compute p-value and confidence interval (target p < 0.05, 95% CI)
- Check for segment interactions (did the result differ by device, region, or cohort?)
- Assess practical significance: is the lift large enough to act on even if statistically significant?

### 7. Decision Framework
- **Ship it**: statistically significant positive result, guardrails intact, effect is practical
- **Iterate**: directionally positive but underpowered — rerun with larger sample
- **Drop it**: null or negative result — document learnings and update the hypothesis backlog
- **Investigate**: significant but unexpected — audit for instrumentation errors before acting

## Output Format

Produce a structured experiment brief with these sections:

**Experiment Brief**
- Hypothesis (one sentence, formatted as stated above)
- Variable being tested
- Primary metric + guardrail metrics
- Minimum detectable effect
- Required sample size per variant
- Estimated runtime
- Variant descriptions (control vs. treatment, bullet list)
- Randomization method

**Analysis Report** (after data is available)
- Observed lift with confidence interval
- P-value and statistical significance verdict
- Guardrail metric status
- Segment breakdown (if relevant)
- Decision: Ship / Iterate / Drop / Investigate
- Next recommended experiment based on findings

Length: Brief should fit on one page. Analysis report should be concise — lead with the decision, support with numbers, skip narrative filler.