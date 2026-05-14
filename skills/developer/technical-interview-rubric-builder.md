---
name: technical-interview-rubric-builder
description: >
  Generates structured evaluation rubrics for technical interviews covering coding, system design,
  and debugging competencies. Use when someone says "help me evaluate candidates," asks about
  "interview scoring criteria," wants to "create a hiring rubric," needs to "standardize technical
  assessments," or is building an "interview feedback framework."
category: developer
tags: [interviewing, hiring, evaluation, rubrics, technical-assessment]
author: community
---

# Technical Interview Rubric Builder

Generates detailed, role-specific evaluation rubrics for technical interviews so hiring teams can assess candidates consistently across coding, system design, and debugging competencies.

## Rubric Construction Workflow

1. **Gather role context** — Ask for the role title, seniority level (junior/mid/senior/staff), and primary tech stack if not provided. If the user wants a general rubric, default to a mid-level software engineer profile.

2. **Identify competency areas** — Always include these four core areas unless the user excludes one explicitly:
   - **Coding proficiency** (problem decomposition, code correctness, edge case handling, time/space complexity)
   - **System design** (scalability, component trade-offs, data modeling, API design)
   - **Debugging & troubleshooting** (hypothesis formation, systematic isolation, tool usage, root cause articulation)
   - **Communication & collaboration** (clarity of explanation, receptiveness to hints, question-asking quality)

3. **Define scoring levels** — Use a 4-point scale for every criterion:
   - **4 – Exceeds expectations**: Proactively addresses edge cases, volunteers trade-offs, or demonstrates depth beyond the prompt
   - **3 – Meets expectations**: Solves the problem correctly with minor prompting; explains reasoning clearly
   - **2 – Partially meets**: Reaches a working solution only with significant hints; explanation is incomplete
   - **1 – Does not meet**: Unable to progress meaningfully even with guidance

4. **Write observable behavioral anchors** — For each criterion and each score level, provide one concrete observable behavior (what the interviewer actually sees or hears), not abstract qualities.

5. **Add role-calibrated weight** — Assign percentage weights to each competency area based on seniority:
   - Junior: Coding 50%, Debugging 25%, Communication 20%, System Design 5%
   - Mid: Coding 35%, System Design 25%, Debugging 25%, Communication 15%
   - Senior/Staff: System Design 40%, Coding 25%, Communication 20%, Debugging 15%

6. **Include red flags and green flags sections** — List 3–5 specific behaviors per category that should immediately raise concern or signal a strong hire.

7. **Add a calibration note** — One short paragraph reminding interviewers to score independently before discussing, and to anchor scores to behavioral evidence rather than overall impression.

## Output Format

Produce a single Markdown document with the following structure:

```
# Interview Rubric: [Role Title] — [Seniority Level]

**Stack/Context:** [e.g., Python backend, distributed systems]
**Recommended panel size:** [number]
**Total interview duration:** [time]

---

## Competency Weights
| Competency | Weight |
|---|---|
| Coding Proficiency | X% |
| System Design | X% |
| Debugging | X% |
| Communication | X% |

---

## Scoring Scale
[Brief 4-point scale description]

---

## Competency 1: [Name]

### Criteria
| Criterion | 4 | 3 | 2 | 1 |
|---|---|---|---|---|
| [Criterion name] | [behavior] | [behavior] | [behavior] | [behavior] |
[Repeat for 3–5 criteria per competency]

[Repeat competency block for each area]

---

## 🚩 Red Flags
- [Specific observable behavior]
[3–5 items]

## ✅ Green Flags
- [Specific observable behavior]
[3–5 items]

---

## Calibration Note
[1 short paragraph]

---

## Scoring Summary
| Competency | Raw Score (avg) | Weight | Weighted Score |
|---|---|---|---|
[One row per competency
