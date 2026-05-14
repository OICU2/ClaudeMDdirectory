---
name: expert-interview-screener-scoring
description: >
  Evaluates and scores expert interview candidates against structured criteria including domain depth, recency of experience, and alignment with specific research questions to prioritize outreach. Use when someone says "help me rank these experts," asks about which candidates to interview first, or wants to screen a list of potential subject-matter experts. Also triggers when a user needs to compare expert profiles, score interview candidates, or decide who to contact for qualitative research.
category: research
tags: [expert-interviews, screening, scoring, qualitative-research, prioritization]
author: community
---

# Expert Interview Candidate Screener & Scorer

Evaluates expert interview candidates against predefined criteria and produces a ranked priority list to guide outreach decisions.

## Scoring Workflow

### Step 1: Confirm Scoring Criteria
Before scoring, verify or establish the evaluation dimensions. Default criteria (adjust based on user input):

- **Domain Depth** (0–25 pts): Years of direct, hands-on experience in the target domain
- **Recency of Experience** (0–20 pts): How recently the expert was actively working in the relevant area
- **Relevance to Research Questions** (0–30 pts): How closely their background maps to the specific questions being investigated
- **Seniority / Decision-Making Exposure** (0–15 pts): Whether they held roles with strategic or operational authority
- **Availability Signals** (0–10 pts): Evidence of openness to interviews (e.g., public speaking, advisory roles, published writing)

**Total possible score: 100 points**

Ask the user to confirm, modify, or replace criteria before proceeding.

---

### Step 2: Gather Candidate Profiles
Request or accept candidate information in any format (list, bios, LinkedIn summaries, CVs). Extract the following fields per candidate:
- Name and current title
- Relevant past roles and tenure
- Most recent role in the target domain
- Publications, talks, or public positions
- Any stated research alignment indicators

---

### Step 3: Score Each Candidate

For each candidate, apply the scoring rubric:

| Criterion | Scoring Guidance |
|---|---|
| Domain Depth | 0–5 pts: tangential; 6–15 pts: adjacent; 16–25 pts: direct, sustained expertise |
| Recency | 0–5 pts: >10 years ago; 6–12 pts: 3–10 years ago; 13–20 pts: within 3 years |
| Research Relevance | 0–10 pts: low overlap; 11–20 pts: moderate; 21–30 pts: strong direct alignment |
| Seniority | 0–5 pts: individual contributor; 6–10 pts: team lead; 11–15 pts: director/exec/founder |
| Availability Signals | 0–3 pts: none found; 4–7 pts: some; 8–10 pts: active public presence |

Flag any scoring assumptions made due to incomplete profile information.

---

### Step 4: Rank and Tier Candidates

Group candidates into three outreach tiers:
- **Tier 1 (Priority)**: Score 75–100 — Contact first
- **Tier 2 (Strong)**: Score 50–74 — Contact if Tier 1 is insufficient
- **Tier 3 (Marginal)**: Score 0–49 — Contact only as backup or for peripheral perspectives

---

### Step 5: Flag Gaps and Recommendations
- Identify if any research question areas lack strong candidates
- Note if the pool skews heavily toward one company, geography, or perspective
- Suggest profile types to source if coverage gaps exist

---

## Output Format

Produce a structured scoring report with the following sections:

**1. Scoring Criteria Summary**
Bullet list of the criteria used and their point weights (confirm any user modifications).

**2. Candidate Score Cards**
One block per candidate:
```
Name: [Full Name]
Current Role: [Title, Organization]
---
Domain Depth:         [score]/25 — [1-line rationale]
Recency:              [score]/20 — [1-line rationale]
Research Relevance:   [score]/30 — [1-line rationale]
Seniority:            [score]/15 — [1
