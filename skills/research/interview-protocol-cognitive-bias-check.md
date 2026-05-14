---
name: interview-protocol-cognitive-bias-check
category: research
description: >
  Analyzes interview discussion guides and survey question sets to identify leading, loaded, double-barreled, or assumption-laden questions, then suggests neutral replacements. Use when someone says "check my interview guide for bias," asks whether their questions are leading or neutral, wants to review a discussion guide before fieldwork, needs to clean up a survey instrument, or is preparing questions for user research or qualitative interviews.
tags: [research, ux-research, survey-design, qualitative, bias-detection]
author: community
---

# Interview Protocol Cognitive Bias Check

This skill audits interview or survey questions for cognitive biases that could contaminate qualitative data, flagging problematic questions and providing neutral rewrites ready for fieldwork.

## Bias Detection Workflow

### Step 1: Classify Each Question
Scan every question in the provided guide and tag it with one or more bias types:

- **Leading question** — steers the respondent toward a specific answer (e.g., "Don't you think the onboarding was confusing?")
- **Loaded question** — embeds a contested assumption (e.g., "When did you stop finding the app useful?")
- **Double-barreled question** — asks two things at once (e.g., "Was the process fast and easy?")
- **Positive framing bias** — uses charged positive language that primes agreement (e.g., "How helpful was our support team?")
- **Negative framing bias** — uses charged negative language that primes complaint
- **Yes/no trap** — closed question that forecloses elaboration on a topic requiring depth
- **Hypothetical leap** — asks participants to predict future behavior without grounding (use sparingly, flag when overused)
- **Jargon/assumption bias** — assumes familiarity with internal terminology or concepts

### Step 2: Assess Severity
Rate each flagged question:
- 🔴 **High** — will likely skew data; must rewrite before use
- 🟡 **Medium** — may introduce subtle bias; rewrite recommended
- 🟢 **Low** — minor issue; consider revising

### Step 3: Rewrite Flagged Questions
For every flagged question, produce:
1. A neutral replacement that preserves the research intent
2. A one-line note explaining what was changed and why

### Step 4: Check Structural Issues
Beyond individual questions, flag:
- Questions placed in an order that primes later answers (sequencing bias)
- Absence of "tell me more" or probing follow-ups on key topics
- Over-reliance on closed questions in a guide meant to be exploratory
- Missing screening or warm-up questions that help participants feel safe

### Step 5: Produce a Summary Score
Count questions by severity and provide an overall protocol health rating:
- **Clean** — 0 high, 0–2 medium issues
- **Needs Revision** — 1–3 high or 3+ medium issues
- **Major Overhaul Required** — 4+ high issues

## Output Format

Return a structured report with these sections:

```
## Interview Protocol Bias Report

**Overall Rating:** [Clean / Needs Revision / Major Overhaul Required]
**Questions Reviewed:** [n]
**Issues Found:** [n high 🔴 / n medium 🟡 / n low 🟢]

---

### Flagged Questions

#### Q[number]: "[Original question text]"
- **Bias Type:** [type(s)]
- **Severity:** 🔴 / 🟡 / 🟢
- **Why it's problematic:** [1–2 sentences]
- **Suggested replacement:** "[Neutral rewrite]"
- **Change rationale:** [1 sentence]

[Repeat for each flagged question]

---

### Structural Observations
[Bullet list of any sequencing, coverage, or format issues found]

---

### Questions Cleared
[List question numbers that passed review with no issues]
```

Keep rewrites concise and in the same register as the original guide. Do not rewrite questions that are not flagged. If no questions are flagged, say so explicitly and confirm the protocol appears neutral.
