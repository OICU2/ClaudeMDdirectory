---
name: sales-rep-talk-ratio-audit
description: >
  Analyzes call transcripts to calculate each sales rep's talk-to-listen ratio and identifies specific moments where over-talking correlated with deal stalls or losses. Use when someone says "our reps are talking too much on calls," asks about why deals are stalling after discovery, or wants to understand which conversation patterns are hurting close rates. Also triggers when someone shares call transcripts for review or wants to coach reps on active listening.
category: sales
tags: [call-analysis, talk-ratio, sales-coaching, transcript-analysis, deal-review]
author: community
---

# Sales Rep Talk Ratio Audit

Parses call transcripts to compute per-rep talk ratios, flags high-risk monologue moments, and correlates over-talking patterns with deal outcomes so managers can deliver precise coaching.

## Analysis Workflow

### 1. Parse the Transcript
- Identify all speaker turns, labeling each as Rep or Prospect (or by name if provided)
- Calculate word count and approximate time per speaker turn
- Compute overall talk ratio: Rep words ÷ Total words × 100
- Benchmark: Healthy rep talk ratio is 40–50%; flag anything above 60% as a risk zone

### 2. Segment the Call
Break the transcript into these phases and calculate talk ratio per phase:
- **Opening** (first 5% of call): high rep talk here is normal
- **Discovery** (questions + problem exploration): rep talk above 50% here is a red flag
- **Demo/Pitch** (solution presentation): rep talk up to 70% is acceptable
- **Objection Handling**: rep talk above 60% indicates defensive monologuing
- **Close/Next Steps**: rep talk above 55% signals pressure, not collaboration

### 3. Flag High-Risk Moments
Scan for these specific patterns and timestamp/quote each instance:
- **Interruptions**: Rep begins speaking within 1 second of prospect finishing (or mid-sentence)
- **Monologue runs**: Rep speaks for 3+ consecutive minutes without a prospect response
- **Question stacking**: Rep asks 2+ questions in a row without waiting for answers
- **Filler loops**: Rep repeats the same value proposition 3+ times in one call
- **Silence kills**: Rep fills a silence (3+ seconds) that was likely a buying signal or reflection moment

### 4. Correlate with Deal Outcome
If deal outcome is provided (won/lost/stalled):
- Map each flagged moment to its position in the call (early/mid/late)
- Note whether the prospect's engagement dropped after each high-risk moment (shorter responses, fewer questions, one-word answers)
- Identify the single highest-correlation pattern: which behavior most preceded disengagement
- If multiple transcripts are provided, rank reps by talk ratio and flag the outliers

### 5. Generate Coaching Recommendations
For each flagged pattern, produce one specific, actionable fix tied to the exact transcript moment.

## Output Format

Produce a structured audit report with these sections:

**Talk Ratio Summary Table**
| Rep Name | Overall Talk % | Discovery Talk % | Demo Talk % | Objection Talk % | Risk Level |
|---|---|---|---|---|---|
(Populate for each rep or call provided; mark Risk Level as Low / Medium / High)

**Flagged Moments**
List each flag as:
- `[Timestamp or Turn #]` — **Pattern Type** — Quote the rep's exact words (max 30 words) — One-line explanation of why this is a risk

**Deal Correlation Analysis**
2–4 sentences explaining which flagged patterns appeared most frequently before prospect disengagement or deal stalls. Be specific: name the pattern, name the call phase, cite the outcome.

**Coaching Priorities**
Numbered list of 3–5 coaching actions, each tied to a specific flagged moment. Format:
`[Rep Name or "All Reps"] — [Specific behavior to stop or start] — [Replacement technique with example language]`

**Quick Wins**
Bullet list of 2–3 immediate script or process changes the team can implement before the next call cycle.

Total report length: 400–700 words. Use tables and bullets. No narrative padding.
