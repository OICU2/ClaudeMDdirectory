---
name: survey-question-leading-bias-detector
description: >
  Analyzes survey instruments to identify and correct leading, loaded, or double-barreled questions that could skew response data. Use when someone says "check my survey for bias," asks whether their questions are neutral, wants to review a questionnaire before fielding it, shares survey items for feedback, or needs help writing unbiased research questions.
category: research
tags: [survey, bias-detection, research-methods, questionnaire-design, neutrality]
author: community
---

# Survey Question Leading Bias Detector

This skill scans survey instruments for leading, loaded, and double-barreled question constructions and produces neutral rewrites with explanations for each flagged item.

## Detection & Rewrite Workflow

1. **Parse all questions** from the provided survey instrument, numbering each item sequentially if not already numbered.

2. **Screen each question for these specific bias types:**
   - **Leading bias**: Wording that presupposes an answer or nudges toward a particular response (e.g., "How much did you enjoy…", "Don't you agree that…", "Wouldn't you say…")
   - **Loaded language**: Emotionally charged or politically slanted words that prime the respondent (e.g., "wasteful spending," "radical policy," "common-sense approach")
   - **Double-barreled construction**: A single question asking about two distinct concepts joined by "and" or "or" (e.g., "How satisfied are you with the price and quality?")
   - **Negative framing**: Questions framed around what is wrong, bad, or lacking rather than neutral ground (e.g., "What problems did you encounter…" when neutral alternatives exist)
   - **Presupposition**: Questions that assume a fact not established (e.g., "When did you stop using…" assumes prior use)

3. **Flag each problematic question** with a severity level:
   - **High**: Likely to meaningfully skew responses
   - **Medium**: May introduce subtle directional pressure
   - **Low**: Minor phrasing concern; smaller effect expected

4. **Write a neutral rewrite** for every flagged question. The rewrite must:
   - Preserve the original research intent
   - Remove all identified bias mechanisms
   - Use balanced, behaviorally anchored language where possible
   - Split double-barreled questions into two separate items

5. **Leave clean questions unmarked** — do not flag items that are genuinely neutral.

6. **Summarize overall instrument health** after reviewing all items: count of clean vs. flagged questions, dominant bias type found, and a one-sentence readiness assessment.

## Output Format

Produce a structured report using the following layout for each flagged item:

---
**Question [#]:** [Exact original question text]
**Bias Type:** [Leading / Loaded / Double-barreled / Negative framing / Presupposition]
**Severity:** [High / Medium / Low]
**Issue:** [1–2 sentences explaining specifically what is biased and why it matters]
**Suggested Rewrite:** [Neutral version of the question, ready to use as-is]
---

After all flagged items, append:

**Instrument Summary**
- Total questions reviewed: [N]
- Questions flagged: [N]
- Questions clean: [N]
- Most common bias type: [type]
- Readiness assessment: [One sentence — e.g., "Survey is not field-ready; 6 of 10 questions require revision before data will be defensible."]
