---
name: interview-screener-design
description: >
  Builds a structured participant screener questionnaire with qualifying criteria, disqualifying logic, and demographic filters to recruit the right research subjects. Use when someone needs to screen research participants, wants to filter candidates for a user study, asks how to recruit the right users for interviews, needs to weed out unqualified respondents, or is setting up a research recruiting survey.
category: research
tags: [recruitment, screener, user-research, participants, questionnaire]
author: community
---

# Interview Screener Design

This skill generates a complete participant screener questionnaire with qualifying logic, disqualifying conditions, and demographic filters so researchers recruit the right subjects for their study.

## Screener Design Workflow

1. **Clarify the research context** — Identify the study type (usability test, interview, diary study), product or domain being studied, and the target participant profile before writing a single question.

2. **Define qualifying criteria first** — List the 3–6 must-have characteristics a participant needs (e.g., uses the product weekly, has made a purchase in the last 30 days, holds a specific job role). These become the backbone of qualifying logic.

3. **Define disqualifying criteria** — List conditions that automatically exclude someone: competitors' employees, prior study participants, demographic outliers outside the target, or users with too much/too little experience. Map each to a specific screener question.

4. **Write screener questions in order:**
   - Start with broad behavioral or usage questions (not demographics) to avoid priming
   - Use multiple-choice answers for each question — never open-ended on screeners
   - Assign QUALIFY / DISQUALIFY / CONTINUE labels to each answer option
   - Place demographic questions last (age, location, gender, income) only if needed for quotas

5. **Build the routing logic** — For each question, specify: if answer is X → CONTINUE, if answer is Y → DISQUALIFY (show thank-you message), if answer is Z → flag for review. Make this explicit and table-formatted.

6. **Add quota targets** — Specify how many participants are needed per segment (e.g., 5 power users, 5 occasional users, parity across gender if relevant).

7. **Write the intro and closing copy** — Include a neutral 2–3 sentence intro that doesn't reveal what you're looking for, and a polite disqualification message that doesn't reveal why they were screened out.

## Output Format

Produce the following sections in order:

**Study Overview** (3–5 bullet points)
- Study type, session length, incentive, recruitment target, quota goal

**Target Participant Profile**
- Bullet list of must-have and nice-to-have characteristics

**Screener Questionnaire**
- Numbered questions (Q1, Q2, Q3…)
- Each question includes: question text, answer options (labeled A/B/C/D), and routing logic per option
- Format routing as: `→ QUALIFY`, `→ DISQUALIFY`, or `→ CONTINUE to Q[N]`

**Routing Logic Summary Table**
- Markdown table: Question | Answer | Action | Reason

**Quota Tracker Template**
- Table showing participant segments and slots needed vs. filled

**Screener Copy Blocks**
- Intro paragraph (neutral, no hints)
- Disqualification message (polite, vague)
- Confirmation message for qualified participants

Total length: 400–700 words for the questionnaire section. Adjust question count (typically 8–15 questions) to match complexity of the target profile.
