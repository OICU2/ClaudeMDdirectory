---
name: expert-interview-follow-up-question-generator
description: >
  Analyzes a completed expert interview transcript to surface gaps, contradictions, and unexplored threads, then generates a prioritized list of follow-up questions. Use when someone says "I just finished an interview and want to go deeper," asks "what did I miss in this interview," or wants to "find the gaps in what my expert told me." Also activates when someone shares an interview transcript and asks what to ask next, or wants to prepare for a second conversation with a subject matter expert.
category: research
tags: [interviews, research, analysis, qualitative, expert-knowledge]
author: community
---

# Expert Interview Follow-Up Question Generator

This skill analyzes a completed interview transcript to identify knowledge gaps, contradictions, vague claims, and unexplored threads, then produces a ranked list of targeted follow-up questions ready for a second interview session.

## Analysis Workflow

**Step 1: Structural Scan**
Read the full transcript and map:
- Topics introduced but never fully explored (surface mentions without depth)
- Claims made without supporting evidence, examples, or mechanisms
- Moments where the expert hedged, deflected, or changed direction
- Jargon or shorthand used but never defined
- Named people, projects, events, or systems referenced without elaboration

**Step 2: Contradiction Detection**
Identify:
- Internal contradictions within the transcript (expert said X early, implied not-X later)
- Statements that conflict with established knowledge in the domain
- Tensions between what the expert said they do versus what they said others should do

**Step 3: Depth Assessment**
For each major topic covered, evaluate whether the expert provided:
- The "what" only → flag for "how" and "why" follow-ups
- Anecdote without principle → flag for generalization questions
- Principle without example → flag for concrete case questions
- Past tense framing → flag for current-state and future questions

**Step 4: Thread Ranking**
Rank all identified gaps and contradictions by:
1. **Centrality** — how core is this to the interview's main purpose?
2. **Uniqueness** — can this only be answered by this specific expert?
3. **Leverage** — how many downstream questions does resolving this unlock?
4. **Surprise potential** — how likely is the answer to change your understanding?

**Step 5: Question Formulation**
For each top-ranked gap, write one primary question and one backup probe:
- Primary: open-ended, specific, grounded in the transcript ("You mentioned X — can you walk me through how that actually works in practice?")
- Backup probe: a narrower follow-up if the expert gives a vague answer ("What would a concrete example of that look like?")

## Output Format

Produce a structured document with the following sections:

---

**INTERVIEW DEBRIEF SUMMARY**
2–3 sentences on what the interview covered well and where it fell short overall.

---

**TOP FOLLOW-UP QUESTIONS** (ranked 1–N, maximum 10)

For each question:
- **#[N] — [Topic Label]** *(Gap type: Unexplored / Contradiction / Shallow / Undefined)*
- **Why this matters:** 1 sentence on what resolving this unlocks
- **Primary question:** The exact question to ask
- **Backup probe:** A narrower follow-up if they deflect or generalize

---

**SECONDARY QUESTIONS** (optional, if more than 10 gaps found)
Bulleted list of remaining questions without full elaboration, grouped by topic.

---

**CONTRADICTIONS TO SURFACE**
Bulleted list of specific contradictions with the exact quotes or paraphrases from the transcript that conflict, and a suggested neutral framing to raise the tension without putting the expert on the defensive.

---

**INTERVIEW PREP NOTE**
1–2 sentences on tone or sequencing advice for the follow-up session based on patterns observed in the transcript (e.g., expert opens up more with examples, shuts down with abstract questions).
