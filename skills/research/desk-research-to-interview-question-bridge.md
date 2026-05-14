---
name: desk-research-to-interview-question-bridge
description: >
  Converts gaps, assumptions, and hypotheses surfaced during secondary (desk) research into precise,
  actionable primary research questions for interviews, surveys, or focus groups. Use when someone says
  "I've done the background research and need interview questions," asks "what should I ask to validate
  my findings," wants to turn research gaps into a discussion guide, needs to bridge secondary research
  with fieldwork, or is preparing a stakeholder interview after a literature review.
category: research
tags: [research, interviews, survey-design, qualitative, question-generation]
author: community
---

# Desk Research to Interview Question Bridge

This skill transforms knowledge gaps, unvalidated assumptions, and hypotheses from secondary research into structured, targeted questions suitable for primary research interviews, surveys, or focus groups.

## Workflow

### Step 1: Extract Research Inputs
Ask the user to provide (or extract from their message):
- **Findings**: What the desk research confirmed
- **Gaps**: What the secondary sources could not answer
- **Assumptions**: Beliefs the research implies but does not prove
- **Hypotheses**: Testable propositions the researcher wants to validate

If any of these are missing, prompt specifically: "What gaps or unresolved questions did your desk research leave open?"

### Step 2: Categorize Each Input
Sort each item into one of four buckets:
- **Factual Gap** — missing data a respondent can supply directly
- **Behavioral Gap** — unknown about how people act or have acted
- **Attitudinal Gap** — unknown about opinions, motivations, or perceptions
- **Structural/Contextual Gap** — unknown about systems, processes, or environment

### Step 3: Generate Questions Per Gap
For each gap or hypothesis:
1. Write **one open-ended primary question** that directly targets the gap
2. Write **two probing follow-ups** that go deeper (why, how, tell me more)
3. Flag question type: exploratory, validation, or behavioral

Apply these rules:
- No leading questions (avoid embedding the hypothesis in the phrasing)
- Use plain language; no jargon unless the audience is expert
- Behavioral questions use the past tense ("Tell me about a time when…")
- Attitudinal questions use first person ("How do you feel about…")
- Validation questions present the hypothesis neutrally ("Some people find X — does that match your experience?")

### Step 4: Sequence the Question Set
Organize output into a logical interview flow:
1. **Warm-up** (1–2 context-setting questions)
2. **Core questions** grouped by theme from Step 2
3. **Validation questions** for explicit hypotheses
4. **Closing** (catch-all: "Is there anything relevant we haven't covered?")

### Step 5: Add Interviewer Notes
For each question block, add a brief note on:
- What a useful answer looks like
- Red flags (answers that suggest the question was misunderstood)
- When to skip or adapt the question

## Output Format

Produce a structured **Interview/Survey Discussion Guide** with the following sections:

```
## Research Context Summary
[2–3 sentences restating the key gaps and hypotheses being investigated]

## Discussion Guide

### Section 1: [Theme Name]
**Gap/Hypothesis being addressed:** [one sentence]

Q1 (Primary): [Open-ended question]
  - Probe 1: [Follow-up]
  - Probe 2: [Follow-up]
  - Question type: [Exploratory / Validation / Behavioral]
  - Interviewer note: [What to listen for; when to skip]

[Repeat per question]

### Section 2: [Theme Name]
...

### Closing
[Standard catch-all question]

## Suggested Survey Adaptations
[For each open-ended question, a closed/scaled version if a survey format is needed]
```

**Length**: One question block per identified gap; typically 8–15 questions total for a 45–60 minute interview. Flag if the list exceeds 15 questions and recommend prioritization.
