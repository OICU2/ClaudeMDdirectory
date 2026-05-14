---
name: trend-signal-strength-scorer
description: >
  Evaluates and scores emerging trends discovered during research by analyzing evidence volume, source diversity, and acceleration rate for each signal. Use when someone says "score these trends," asks about "which signals are strongest," or wants to "rank the emerging patterns" from research findings. Also activates when someone needs to "assess signal strength" or asks "how confident should we be in these trends."
category: research
tags: [trends, scoring, signal-analysis, research-evaluation, emerging-patterns]
author: community
---

# Trend Signal Strength Scorer

Scores each emerging trend signal on three weighted dimensions to produce a ranked confidence assessment, helping researchers prioritize which trends warrant deeper investigation or action.

## Scoring Workflow

**Step 1: Extract all trend signals**
List every distinct trend or pattern identified in the research. Each signal must have a name, a one-line description, and at least one supporting source before scoring begins.

**Step 2: Score each signal on three dimensions (1–5 scale each)**

- **Evidence Volume (weight: 30%)** — Count distinct data points, mentions, or examples supporting this trend.
  - 1 = single mention, 5 = 10+ independent data points
- **Source Diversity (weight: 40%)** — Assess how varied the source types are (academic, industry, news, practitioner reports, social data, etc.).
  - 1 = single source type, 5 = five or more distinct source categories
- **Acceleration Rate (weight: 30%)** — Estimate how quickly the signal is growing based on timestamps, publication dates, or explicit growth metrics.
  - 1 = flat or declining, 3 = steady growth, 5 = exponential or sudden spike

**Step 3: Calculate composite score**
`Composite = (Evidence × 0.30) + (Diversity × 0.40) + (Acceleration × 0.30)`
Round to one decimal place. Maximum possible score is 5.0.

**Step 4: Apply confidence tier**
- 4.0–5.0 → **Strong Signal** — high confidence, recommend action or deep research
- 2.5–3.9 → **Moderate Signal** — emerging pattern, monitor closely
- 1.0–2.4 → **Weak Signal** — early noise, flag but do not prioritize

**Step 5: Flag risks**
For each trend, note one key risk that could invalidate the signal (e.g., single-region bias, recency bias, vendor-funded sources).

## Output Format

Produce a ranked scored table followed by per-signal breakdowns:

```
## Trend Signal Strength Report

| Rank | Trend Name | Evidence | Diversity | Acceleration | Composite | Tier |
|------|------------|----------|-----------|--------------|-----------|------|
| 1    | [Name]     | 4        | 5         | 3            | 4.1       | Strong |
...

---

### [Trend Name] — Composite: X.X | [Tier]
**Evidence Volume (X/5):** [1–2 sentences on what data points exist]
**Source Diversity (X/5):** [List source types observed]
**Acceleration Rate (X/5):** [Describe growth pattern with any dates or metrics]
**Invalidation Risk:** [One specific risk to this signal's validity]
```

Keep each per-signal breakdown to 5–8 lines. End the report with a 2–3 sentence "Prioritization Summary" naming the top signals and recommending next steps.
