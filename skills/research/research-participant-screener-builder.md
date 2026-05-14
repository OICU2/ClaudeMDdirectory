---
name: research-participant-screener-builder
description: >
  Generates a structured participant screener with qualifying criteria, disqualifying conditions, and demographic quotas based on a target research profile. Use when someone wants to screen research participants, needs to recruit qualified users for a study, asks how to filter candidates for user research, wants to build a screener survey, or needs to define eligibility criteria for a research session.
category: research
tags: [ux-research, participant-recruitment, screener, user-studies, research-ops]
author: community
---

# Research Participant Screener Builder

This skill generates a complete participant screener document — including qualifying logic, disqualifying conditions, demographic quotas, and sample screener questions — whenever someone needs to recruit and filter participants for a research study.

## Screener Building Workflow

1. **Extract the research profile** from the user's input:
   - Study type (usability test, interview, survey, diary study, concept test)
   - Product or domain being studied
   - Target user behaviors, roles, or experience levels
   - Any explicitly stated inclusion or exclusion criteria
   - Sample size and timeline if mentioned

2. **Define qualifying criteria** — identify the must-have characteristics:
   - Behavioral qualifiers (e.g., uses the product at least weekly, has made a purchase in the last 30 days)
   - Role or context qualifiers (e.g., decision-maker, primary user, professional in a specific field)
   - Experience qualifiers (e.g., has completed onboarding, has encountered a specific workflow)

3. **Define disqualifying conditions** — flag automatic exclusions:
   - Competitors, employees of the company, or industry insiders
   - Overused research participants ("professional survey takers")
   - Behaviors or contexts that would invalidate findings (e.g., never uses the feature being tested)
   - Sensitive categories requiring ethical review

4. **Set demographic quotas** — specify proportional targets:
   - Age ranges with percentage splits
   - Gender distribution
   - Geography or locale if relevant
   - Device or platform usage mix
   - Experience level spread (novice / intermediate / expert)

5. **Write screener questions** for each criterion:
   - Use multiple-choice format to avoid leading answers
   - Place disqualifiers early to reduce drop-off cost
   - Randomize answer options where bias is possible
   - Include a "prefer not to answer" option for sensitive demographics
   - Add a final availability/scheduling question

6. **Assign routing logic** to each question:
   - Mark answers as QUALIFY, DISQUALIFY, or CONTINUE
   - Flag soft qualifiers that require human review rather than auto-rejection

## Output Format

Produce a structured screener document with the following sections:

**Study Overview** (2–3 lines): study type, product/domain, target n, session format.

**Qualifying Criteria** (bulleted list): each criterion stated as a testable condition.

**Disqualifying Conditions** (bulleted list): each stated as a concrete rule with reason.

**Demographic Quotas** (table): Attribute | Target % | Acceptable Range.

**Screener Questions** (numbered list): each question includes:
- Question text
- Answer options (lettered)
- Routing logic in brackets, e.g. `[A → QUALIFY, B → DISQUALIFY, C → CONTINUE]`

**Recruiter Notes** (3–5 bullets): edge cases, human-review flags, and scheduling guidance.

Length: typically 400–700 words depending on study complexity. Use plain language suitable for a recruiting agency or Respondent/UserTesting platform upload.
