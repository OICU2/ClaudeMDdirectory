---
name: survey-question-double-barreled-detector
description: >
  Scans survey instruments for double-barreled questions that ask respondents about two distinct issues in a single item, then produces rewritten alternatives for each flagged question. Use when someone shares a survey draft for review, asks whether their questions are well-formed, or wants to improve questionnaire quality before deployment. Also activates when someone mentions confusing survey responses or suspects their instrument has measurement problems.
category: research
tags: [survey-design, questionnaire, measurement, research-methods, data-quality]
author: community
---

# Survey Question Double-Barreled Detector

This skill analyzes survey instruments to identify questions that embed two or more distinct issues, which splits respondent intent and corrupts data, then rewrites each problematic item into separate, clean questions.

## Detection and Rewrite Workflow

1. **Ingest the survey.** Accept the full text of the survey instrument — questions, response scales, and any instructions provided.

2. **Screen every question for double-barreled structure.** Flag a question if it contains:
   - Coordinating conjunctions joining two distinct concepts (and, or, but)
   - Two separate verbs or behaviors asked about in one sentence
   - Two distinct attributes or opinions combined under one response scale
   - Words like "both," "also," "as well as," or "either…or" linking separable constructs

3. **Classify the violation type** for each flagged item:
   - *Compound subject* — two distinct topics in one question (e.g., "rate the food and service")
   - *Compound predicate* — two distinct behaviors asked of the respondent (e.g., "do you exercise and eat well")
   - *Embedded assumption* — one clause assumes the truth of another before asking about it

4. **Produce rewrites.** For each flagged question, split it into the minimum number of single-issue questions that fully capture the original intent. Preserve the original response format (Likert, binary, open-ended) unless splitting requires a different format, in which case note the change.

5. **Leave clean questions untouched.** Do not flag borderline cases without clear evidence of two distinct measurable constructs. Err toward precision over over-flagging.

## Output Format

Produce a structured report with three sections:

**Section 1 — Summary**
- Total questions reviewed
- Number of double-barreled questions found
- One-sentence assessment of overall instrument health

**Section 2 — Flagged Items**
For each problematic question, provide a numbered block:
```
Question [#]: [Original question text]
Violation type: [Compound subject / Compound predicate / Embedded assumption]
Why it's double-barreled: [1–2 sentences explaining the specific problem]
Rewritten as:
  Q[#]a: [First split question]
  Q[#]b: [Second split question]
  (Q[#]c if needed)
```

**Section 3 — Clean Questions**
List the question numbers that passed review with no issues. No further commentary needed.
