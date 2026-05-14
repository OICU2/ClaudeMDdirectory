---
name: panel-recruitment-timeline-risk-model
description: >
  Models recruiting timeline risk for research panels by estimating dropout rates, screening failure rates, and buffer time needed to meet target sample sizes. Use when someone asks how long recruitment will take, wants to estimate panel dropout or attrition risk, needs to plan buffer capacity for a study, or is trying to figure out how many people to initially contact to hit a final sample size. Also activates when someone is worried about missing recruitment deadlines or wants to stress-test a panel recruitment plan.
category: research
tags: [panel-research, recruitment, risk-modeling, sample-size, timeline]
author: community
---

# Panel Recruitment Timeline Risk Model

This skill builds a structured risk model for research panel recruitment, calculating how dropout rates, screening failures, and scheduling attrition compound across recruitment stages to estimate realistic timelines and required outreach volumes.

## Recruitment Risk Modeling Workflow

### Step 1: Gather Inputs
Collect the following before modeling. If any are unknown, use documented defaults or ask the user to estimate:

- **Target completes** (final usable sample size, e.g., n=50)
- **Study length and format** (survey, interview, diary, multi-wave, etc.)
- **Recruitment phases** (e.g., outreach → screener → scheduling → session → data validation)
- **Known or estimated rates** for each phase:
  - Outreach response rate (default: 20–40% for panel, 5–15% for cold)
  - Screener qualification rate (default: 30–60% depending on criteria tightness)
  - Scheduling conversion rate (default: 70–85%)
  - Show/completion rate (default: 80–90% for recruited panel, 60–75% for cold)
  - Data quality pass rate (default: 90–95%)
- **Recruitment start date** and **hard deadline** for completes
- **Daily or weekly outreach capacity** (contacts per day/week)

### Step 2: Build the Funnel Model
Work backwards from target completes through each stage using this formula per stage:

```
Required_input = Required_output / stage_conversion_rate
```

Apply sequentially in reverse:
1. Data quality pass → completes needed from sessions
2. Session completions → scheduled participants needed
3. Scheduling → qualified screener completions needed
4. Screener qualifications → screener starts needed
5. Screener starts → outreach contacts needed

Calculate **total required outreach contacts** to hit target completes under baseline assumptions.

### Step 3: Apply Risk Scenarios
Run three scenarios using the baseline rates ± variance:

| Scenario | Rate Adjustment | Use Case |
|---|---|---|
| **Optimistic** | +10–15% on all conversion rates | Best-case timeline |
| **Base** | Baseline estimates as-is | Planning reference |
| **Pessimistic** | −15–25% on all conversion rates | Risk buffer planning |

For each scenario, calculate:
- Total contacts needed
- Days to complete outreach at stated capacity
- Projected completion date
- Buffer days vs. deadline

### Step 4: Identify Critical Risk Factors
Flag any stage where the conversion rate drop in the pessimistic scenario causes the timeline to exceed the deadline by more than 10%. These are **critical chokepoints**. For each:
- Name the stage
- State the rate threshold at which the deadline is missed
- Suggest a mitigation (e.g., loosen screener criteria, add recruiter capacity, open additional panel source)

### Step 5: Calculate Recommended Buffer
Recommend an outreach buffer using:

```
Buffer contacts = Pessimistic_contacts_needed − Baseline_contacts_needed
Buffer time (days) = Buffer_contacts / daily_outreach_capacity
Recommended start date = Deadline − Base_days_needed − Buffer_days
```

State the recommended start date and buffer contacts clearly.

## Output Format

Produce a structured report with these sections:

**1. Recruitment Funnel Table**
A table showing each phase, its conversion rate (baseline), required input volume, and required output volume. Final row = total outreach contacts needed.

**2. Scenario Comparison Table**
Three columns (Optimistic / Base / Pessimistic) × rows for: total contacts, days to complete, projected end date, days of buffer vs. deadline.

**3. Critical Risk Flags**
