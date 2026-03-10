---
name: data-collection-methods
description: >
  Designs and executes structured data collection strategies using surveys, interviews, observation, and digital tools. Use when someone asks how to gather research data, wants to design a survey or interview guide, needs to choose between data collection methods, or is planning a study and wants to collect information from participants or environments.
category: research
tags: [data-collection, surveys, interviews, observation, research-methods]
author: community
---

# Data Collection Methods

This skill helps Claude design rigorous, purpose-fit data collection plans and instruments across qualitative and quantitative methods.

## Data Collection Workflow

### 1. Clarify Research Goals
- Identify what question is being answered and what decisions the data will inform
- Determine whether qualitative (depth, meaning), quantitative (frequency, scale), or mixed methods are needed
- Establish constraints: budget, timeline, access to participants, technical resources

### 2. Select Appropriate Method(s)

| Method | Best For | Weakness |
|---|---|---|
| Survey | Large samples, measurable attitudes, behavior frequency | Low depth, response bias |
| Structured Interview | Nuanced opinions, sensitive topics, follow-up probing | Time-intensive, small N |
| Observation (direct) | Actual behavior vs. reported behavior, contextual data | Observer effect, resource-heavy |
| Secondary/Existing Data | Trend analysis, benchmarking, when primary collection isn't feasible | May not match exact need |
| Digital Tools (analytics, sensors, scraping) | Passive, large-scale behavioral data | Privacy concerns, requires technical setup |

### 3. Design the Instrument

**Surveys:**
- Open with easy, non-threatening questions
- Group related items together
- Use Likert scales consistently (5 or 7 point, labeled endpoints)
- Avoid double-barreled, leading, or loaded questions
- End with demographics and open-ended catch-all

**Interview Guides:**
- Write 6–10 open-ended core questions
- Include 2–3 probes per question (e.g., "Can you say more about that?" / "What happened next?")
- Sequence: rapport-building → core topics → sensitive topics → closing reflection
- Avoid yes/no questions

**Observation Protocols:**
- Define the unit of observation (person, event, interaction)
- Create a structured field note template: time, setting, actors, behavior, verbatim quotes, interpretive notes
- Decide: structured (checklist) vs. unstructured (narrative) recording

### 4. Plan Sampling
- Define the target population clearly
- Choose sampling strategy: random, stratified, purposive, snowball, convenience
- Calculate or justify sample size based on method (e.g., saturation for qualitative; power analysis for quantitative)

### 5. Pilot and Refine
- Test instrument with 3–5 people from target group
- Check: clarity, time to complete, missing response options, question order effects
- Revise before full deployment

### 6. Execute and Monitor
- Track response rates and data quality in real time
- Follow up on non-responses within defined windows
- Log any deviations from the protocol

## Output Format

Produce a **Data Collection Plan** with these sections:

1. **Research Question** — one sentence stating what is being answered
2. **Method Selected** — method name + 2-sentence rationale
3. **Instrument** — full draft (survey questions, interview guide, or observation template)
4. **Sampling Plan** — target population, strategy, and target N
5. **Timeline** — milestone table (design → pilot → collect → close)
6. **Quality Controls** — list 3–5 specific checks to ensure data integrity

Length: as long as the instrument requires; do not truncate questions or truncate the guide for brevity. Use tables, numbered lists, and clear headers throughout.