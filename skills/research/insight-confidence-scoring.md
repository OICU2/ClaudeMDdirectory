---
name: insight-confidence-scoring
category: research
description: >
  Assigns structured confidence levels to research insights by evaluating sample size, data source diversity, and methodological rigor to help teams prioritize which findings to act on. Use when someone says "how reliable is this finding," asks about the strength of research evidence, wants to rank insights by trustworthiness, needs to decide which data points to act on first, or is unsure whether a conclusion is well-supported enough to drive a decision.
tags: [research, confidence, scoring, insights, evidence]
author: community
---

# Insight Confidence Scoring

This skill evaluates research insights against three weighted criteria—sample size, source diversity, and methodological strength—and produces a labeled confidence tier with rationale to guide decision-making priority.

## Scoring Workflow

1. **Extract the insight** — Identify the specific claim or finding being evaluated. If multiple insights are presented, score each separately.

2. **Score Sample Size (0–3 points)**
   - 0: Anecdotal or n<5
   - 1: Small sample (5–30) or single study
   - 2: Moderate sample (31–200) or 2–3 studies
   - 3: Large sample (200+) or meta-analysis / systematic review

3. **Score Source Diversity (0–3 points)**
   - 0: Single source type (e.g., only user interviews)
   - 1: Two source types (e.g., interviews + survey)
   - 2: Three source types (e.g., interviews + survey + analytics)
   - 3: Four+ source types or cross-functional triangulation

4. **Score Methodological Strength (0–4 points)**
   - 0: No defined method; casual observation
   - 1: Informal method, no controls, high bias risk
   - 2: Defined method but limited controls or unvalidated instrument
   - 3: Controlled or validated method, clear protocol
   - 4: Peer-reviewed, pre-registered, or replicated study

5. **Calculate total score (0–10) and assign confidence tier:**
   - **High Confidence (8–10):** Act on this insight; suitable for strategic decisions
   - **Moderate Confidence (5–7):** Use with caution; recommend additional validation before major investment
   - **Low Confidence (3–4):** Treat as hypothesis; requires further research before acting
   - **Insufficient Evidence (0–2):** Do not base decisions on this; gather foundational data first

6. **Flag gaps** — Note which scoring dimension(s) dragged the score down and suggest the single most impactful action to raise confidence.

## Output Format

Produce a structured block for each insight:

```
## Insight: [Quoted or paraphrased finding]

| Dimension               | Score | Rationale                          |
|-------------------------|-------|------------------------------------|
| Sample Size             | X/3   | [1-line justification]             |
| Source Diversity        | X/3   | [1-line justification]             |
| Methodological Strength | X/4   | [1-line justification]             |
| **Total**               | X/10  |                                    |

**Confidence Tier:** [High / Moderate / Low / Insufficient Evidence]

**Decision Guidance:** [1–2 sentences on how to use or not use this insight now]

**To Improve Confidence:** [1 specific, actionable next step]
```

For multiple insights, output all blocks in sequence, then append a **Priority Order** list ranking insights from highest to lowest confidence score.
