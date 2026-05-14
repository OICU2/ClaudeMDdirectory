---
name: research-finding-replication-risk-score
description: >
  Evaluates the replication likelihood of a research finding by analyzing statistical, methodological, and publication factors. Use when someone asks "will this study replicate," wants to assess the credibility of a research result, is skeptical about a finding's reliability, needs to evaluate whether a paper's conclusions are trustworthy, or wonders if a study is too good to be true.
category: research
tags: [replication-crisis, statistics, methodology, research-evaluation, meta-science]
---

# Research Finding Replication Risk Score

Scores a research finding's replication probability across four dimensions and produces an overall risk rating with specific red flags and recommendations.

## Scoring Workflow

**Step 1 — Extract Key Parameters**
Identify or request the following from the user:
- Sample size (N) and whether it was pre-registered
- Effect size (Cohen's d, r, odds ratio, etc.) and confidence intervals
- p-value(s) reported
- Study design (RCT, observational, cross-sectional, longitudinal, meta-analysis)
- Number of outcome variables and whether primary outcome was pre-specified
- Journal type (high-impact general, specialty, predatory/unknown)
- Whether replication attempts exist

**Step 2 — Score Each Dimension (0–25 points each)**

*Statistical Power & Sample Size (0–25):*
- N < 30: 0–5 pts
- N 30–100: 6–12 pts
- N 101–500: 13–18 pts
- N > 500 or meta-analysis: 19–25 pts
- Deduct 5 pts if no power analysis was reported

*Effect Size Plausibility (0–25):*
- Effect size larger than typical for the field with p just below .05: 0–5 pts
- Moderate effect, wide CIs: 6–14 pts
- Effect consistent with prior literature, narrow CIs: 15–25 pts
- Deduct 5 pts if CIs are not reported

*Methodological Rigor (0–25):*
- Pre-registration present: +8 pts
- Blinding/controls appropriate for design: +6 pts
- Single outcome pre-specified: +5 pts
- Open data/materials: +4 pts
- Peer-reviewed in reputable journal: +2 pts
- Subtract points for HARKing indicators, p-hacking patterns (many outcomes, borderline p-values across all), or no control group

*Publication Bias Indicators (0–25):*
- Result is novel, surprising, or perfectly clean: 0–5 pts
- Mixed or null results also reported: +10 pts
- Funnel plot asymmetry noted in meta-analyses: −8 pts
- Registered report format: +15 pts
- Start at 15, adjust up or down based on flags

**Step 3 — Calculate Total and Assign Risk Tier**
- 80–100: Low Risk — likely to replicate
- 60–79: Moderate Risk — replication plausible but uncertain
- 40–59: High Risk — meaningful replication concerns
- 0–39: Very High Risk — treat finding as preliminary at best

**Step 4 — Identify Specific Red Flags**
Check for and list any present:
- p-value between .04 and .05 with large effect size
- No confidence intervals reported
- Outcome switching or undisclosed flexibility in analysis
- Single-lab, single-country study with no replications
- Effect size implausibly large for the domain (e.g., d > 1.0 in social psychology)
- File drawer problem likely (no null results in literature)
- Predatory or low-tier journal

## Output Format

Produce a structured report with these exact sections:

**Finding Summary**
One sentence describing the finding being evaluated.

**Dimension Scores**
| Dimension | Score | Max |
|---|---|---|
| Statistical Power & Sample Size | X | 25 |
| Effect Size Plausibility | X | 25 |
| Methodological Rigor | X | 25 |
| Publication Bias Indicators | X | 25 |
| **Total** | **X** | **100** |

**Replication Risk Tier**
State the tier (Low /
