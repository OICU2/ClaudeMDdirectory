---
name: prospect-pain-point-to-case-study-matcher
description: >
  Analyzes a prospect's stated pain points and matches them to the most relevant case studies
  in your library, ranked by fit across industry, problem type, and outcome. Use when someone
  says "I need a case study for this prospect," asks "which customer story fits best here,"
  wants to "find a relevant example for a sales call," mentions "the prospect is struggling
  with X," or needs to "back up a pitch with proof."
category: sales
tags: [case-studies, prospect-research, sales-enablement, pain-points, customer-stories]
author: community
---

# Prospect Pain Point to Case Study Matcher

This skill maps a prospect's stated pain points to the most relevant case studies in your library, ranked by similarity of industry, problem, and outcome, so sales reps surface the right proof at the right moment.

## Matching Workflow

1. **Extract prospect context** from the input:
   - Industry and company size
   - Stated pain points (quote them verbatim if provided)
   - Desired outcome or success metric they care about
   - Any blockers, objections, or urgency signals mentioned

2. **Request the case study library** if not already provided. Ask the user to paste case study summaries, titles, or a structured list. Each entry should ideally include: customer name/alias, industry, problem solved, solution used, and measurable outcome.

3. **Score each case study** against the prospect on three dimensions:
   - **Industry fit** (0–3): Same industry = 3, adjacent/similar = 2, different but analogous = 1, unrelated = 0
   - **Problem fit** (0–3): Identical pain point = 3, closely related = 2, partially overlapping = 1, tangential = 0
   - **Outcome fit** (0–3): Prospect's desired outcome matches case study result = 3, similar metric = 2, different metric but same theme = 1, misaligned = 0

4. **Rank all case studies** by total score (max 9). Break ties by prioritizing problem fit over industry fit over outcome fit.

5. **For the top 3 matches**, write a one-paragraph "Why this fits" explanation that:
   - Names the specific pain point overlap
   - Calls out the industry or company-size similarity
   - Highlights the outcome metric the prospect will find credible
   - Suggests a specific line to use when introducing the story ("A company just like yours…")

6. **Flag weak matches**: If no case study scores above 5, explicitly warn the rep and suggest what type of case study is missing from the library.

## Output Format

Produce a ranked list in this structure:

---

**Prospect:** [Name or description]
**Key Pain Points:** [Bulleted list extracted from input]

---

### 🥇 Match #1 — [Case Study Title/Customer Name] | Score: X/9
- **Industry Fit:** X/3 — [one sentence rationale]
- **Problem Fit:** X/3 — [one sentence rationale]
- **Outcome Fit:** X/3 — [one sentence rationale]
- **Why it works:** [2–3 sentences connecting their story to this prospect's situation]
- **Suggested intro line:** "[Ready-to-use verbal bridge for the sales call]"

### 🥈 Match #2 — [Case Study Title/Customer Name] | Score: X/9
[Same structure]

### 🥉 Match #3 — [Case Study Title/Customer Name] | Score: X/9
[Same structure]

---

**⚠️ Library Gap (if applicable):** [Describe what case study archetype is missing and would be most valuable for this prospect type]

---

Keep the full output under 600 words. Use plain language the rep can skim in 60 seconds before a call.
