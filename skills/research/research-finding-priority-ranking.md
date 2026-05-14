---
name: research-finding-priority-ranking
category: research
description: >
  Scores and ranks research findings by strategic relevance, evidence strength, and actionability so teams can focus effort on the most impactful insights first. Use when someone says "help me prioritize these findings," asks which research insights matter most, wants to rank findings by importance, needs to decide where to act on research first, or is overwhelmed by too many research outputs to process.
tags: [research, prioritization, analysis, insights, strategy]
author: community
---

# Research Finding Priority Ranking

This skill evaluates a set of research findings across three weighted dimensions and produces a ranked list with scores so teams immediately know where to focus.

## Scoring Workflow

1. **Collect findings** — Accept the list of research findings from the user. If findings are vague, ask for one clarifying sentence per finding before scoring.

2. **Score each finding on three dimensions (1–5 scale each):**

   - **Strategic Relevance (weight: 40%)** — How directly does this finding connect to a current business goal, user need, or open decision? 5 = directly unblocks or informs a live decision; 1 = tangential or already resolved.

   - **Evidence Strength (weight: 35%)** — How well-supported is the finding? Consider sample size, method rigor, consistency across sources, and recency. 5 = robust, multi-source, recent; 1 = anecdotal or single data point.

   - **Actionability (weight: 25%)** — Can a team act on this within a realistic timeframe with available resources? 5 = clear next action, low effort, high feasibility; 1 = no obvious action or requires years of work.

3. **Calculate weighted score:**
   `Priority Score = (Relevance × 0.40) + (Evidence × 0.35) + (Actionability × 0.25)`
   Round to one decimal place. Maximum score = 5.0.

4. **Assign priority tier:**
   - 4.0–5.0 → **P1 — Act Now**
   - 3.0–3.9 → **P2 — Plan Soon**
   - 2.0–2.9 → **P3 — Monitor**
   - Below 2.0 → **P4 — Deprioritize**

5. **Rank findings** from highest to lowest Priority Score within each tier.

6. **Flag conflicts or dependencies** — If two findings contradict each other, note it. If one finding's action depends on another finding, mark the dependency explicitly.

## Output Format

Produce a structured ranking table followed by a brief summary:

---

### Research Finding Priority Rankings

| Rank | Finding Summary | Relevance (×0.40) | Evidence (×0.35) | Actionability (×0.25) | Priority Score | Tier |
|------|----------------|-------------------|------------------|-----------------------|---------------|------|
| 1    | [Short label]  | 5                 | 4                | 4                     | 4.4           | P1 — Act Now |
| 2    | ...            | ...               | ...              | ...                   | ...           | ... |

---

**Top 3 Findings to Act On:**
For each P1 finding, provide 2–3 sentences: what the finding means, why it scored high, and one concrete recommended next step.

**Conflicts & Dependencies:**
List any contradictions between findings or sequencing constraints (or state "None identified").

**Scoring Notes:**
Flag any finding where evidence was thin or strategic context was assumed, so the team can revisit scores with better information.

---

Keep the table concise — finding summaries max 10 words. Recommended next steps must be specific and assignable, not generic advice.
