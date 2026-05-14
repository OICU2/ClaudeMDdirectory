---
name: panel-recruitment-criteria-design
description: >
  Defines precise screening criteria and qualification logic for recruiting research participants, ensuring the panel accurately represents the target population. Use when someone needs to screen research participants, wants to define eligibility rules for a study panel, asks how to qualify or disqualify respondents, needs to build a screener questionnaire, or is trying to ensure their sample matches a target audience profile.
category: research
tags: [recruitment, screening, panel-design, sampling, research-methodology]
author: community
---

# Panel Recruitment Criteria Design

This skill designs rigorous participant screening criteria and qualification logic for research panels, activating whenever someone needs to define who qualifies for a study and how to accurately identify them.

## Recruitment Criteria Design Workflow

1. **Clarify the research objective** — Ask what decisions the research will inform, what behaviors or attitudes are being studied, and what population the findings must generalize to.

2. **Define the target population profile** — Establish hard demographic boundaries (age range, geography, language) and behavioral/attitudinal requirements (product usage, purchase history, role, experience level).

3. **Separate hard cutoffs from soft quotas**
   - Hard cutoffs: criteria that immediately disqualify a respondent (e.g., works in market research, competitor employee, never used the category)
   - Soft quotas: criteria that shape proportional representation (e.g., 40% heavy users, 60% light users; gender balance; regional distribution)

4. **Write screening questions with logic branching**
   - Map each criterion to a specific screener question
   - Assign QUALIFY / DISQUALIFY / CONTINUE logic to each answer option
   - Avoid leading questions that telegraph the desired answer
   - Place sensitive disqualifiers early to reduce wasted time

5. **Define minimum and maximum cell sizes** — Specify how many participants are needed per subgroup, set overrecruit buffers (typically 15–20%) to account for drop-off, and flag cells where recruitment may be difficult.

6. **Build in fraud and quality controls**
   - Include attention checks or consistency questions
   - Flag professional survey takers (too-fast completion, contradictory answers)
   - Add honeypot or trap questions where appropriate

7. **Validate criteria against research goals** — Cross-check that every criterion either protects data quality or ensures representativeness; remove criteria that are arbitrary or legally problematic (avoid protected characteristics unless directly research-relevant and legally permissible).

8. **Document assumptions and trade-offs** — Note where strict criteria reduce feasibility, suggest relaxed alternatives with their impact on sample quality, and flag any criteria that may introduce bias.

## Output Format

Produce a structured recruitment criteria document containing:

- **Study Overview** (1–2 sentences): research goal and intended panel size
- **Target Population Summary**: plain-language description of the ideal respondent
- **Hard Disqualification Criteria**: bulleted list with rationale for each
- **Qualification Criteria**: bulleted list with required thresholds and rationale
- **Quota Table**: markdown table showing subgroups, target n, percentage, and minimum acceptable n
- **Screener Question Map**: numbered list of screener questions, each with answer options labeled QUALIFY / DISQUALIFY / CONTINUE / QUOTA
- **Quality Control Measures**: list of fraud/attention checks included
- **Feasibility Notes**: any criteria likely to cause recruitment difficulty and suggested fallback thresholds

Length: comprehensive but scannable; use headers and tables throughout. Avoid prose paragraphs where a list or table communicates more clearly.
