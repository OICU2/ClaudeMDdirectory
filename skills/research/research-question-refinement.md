---
name: research-question-refinement
category: research
description: >
  Transforms broad research topics into focused, testable research questions using structured frameworks like PICO, SPIDER, and FINER. Use when someone says "I want to research X," asks how to narrow down a topic, wants to turn a vague idea into a study, needs to define the scope of their research, or says their research question is too broad.
tags: [research, methodology, question-design, academic, frameworks]
author: community
---

# Research Question Refinement

This skill converts vague or overly broad research topics into precise, answerable research questions using established academic frameworks, and Claude will use it whenever someone presents an unfocused topic or asks how to make their research more rigorous.

## Refinement Workflow

1. **Identify the raw topic**: Extract the core subject from what the user provides, noting what is too vague, too wide, or undefined.

2. **Diagnose the problem**: Classify the issue — is the topic too broad in population, intervention, outcome, timeframe, geography, or discipline?

3. **Select the appropriate framework**:
   - **PICO** (Population, Intervention, Comparison, Outcome) — for clinical, health, or intervention studies
   - **SPIDER** (Sample, Phenomenon of Interest, Design, Evaluation, Research type) — for qualitative or mixed-methods research
   - **FINER** (Feasible, Interesting, Novel, Ethical, Relevant) — to evaluate and stress-test any question
   - **PEO** (Population, Exposure, Outcome) — for observational or epidemiological research
   - **PICOT** — PICO plus Timeframe, for longitudinal or time-sensitive studies

4. **Decompose the topic using the chosen framework**: Walk through each component explicitly, proposing concrete values for each element based on the user's intent.

5. **Generate candidate questions**: Produce 2–3 refined question variants ranging from narrower to slightly broader scope, each directly assembled from the framework components.

6. **Apply FINER check**: Evaluate each candidate question against FINER criteria, flagging any component that scores poorly (e.g., not feasible with typical resources, ethically problematic).

7. **Recommend one question**: Select the strongest candidate and explain why it balances precision, answerability, and relevance.

8. **Suggest next steps**: Recommend the study design (RCT, systematic review, ethnography, survey, etc.) that best fits the refined question.

## Output Format

Produce a structured response with the following sections:

**Original Topic**
> Restate what the user provided in one sentence.

**Identified Issues**
- Bullet list of 2–4 specific problems with the original topic (too broad, undefined population, unmeasurable outcome, etc.)

**Framework Applied**
State the chosen framework and one sentence justifying the choice.

**Framework Breakdown**
| Component | Definition | Applied Value |
|-----------|------------|---------------|
| [e.g., Population] | [what this means] | [specific value for this research] |
*(Fill all rows for the chosen framework)*

**Candidate Research Questions**
1. [Narrowest version]
2. [Moderate version]
3. [Broader but still focused version]

**FINER Evaluation**
| Question | Feasible | Interesting | Novel | Ethical | Relevant |
|----------|----------|-------------|-------|---------|----------|
| Q1 | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ | ✅/⚠️/❌ |
*(Repeat for each candidate; add a one-line note for any ⚠️ or ❌)*

**Recommended Question**
> **[Final question in bold]**
Explanation: 2–3 sentences on why this question was selected.

**Suggested Study Design**
One sentence naming the recommended design and why it fits the question.
