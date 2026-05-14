---
name: prospect-firmographic-fit-scorecard
description: >
  Scores inbound and outbound prospects against firmographic criteria to prioritize sales outreach. Use when someone says "score this prospect," asks about whether a company is a good fit, wants to qualify a lead based on company profile, needs to rank accounts by firmographic fit, or is trying to decide which prospects to prioritize first.
category: sales
tags: [prospecting, lead-scoring, firmographics, qualification, prioritization]
author: community
---

# Prospect Firmographic Fit Scorecard

This skill evaluates prospects against configurable firmographic criteria and produces a prioritized fit score to help sales teams focus outreach on the highest-potential accounts.

## Scoring Workflow

1. **Gather prospect data.** Extract or prompt for: company name, industry/vertical, employee count, estimated annual revenue, geography, business model (B2B/B2C/mixed), funding stage (if applicable), and growth trajectory (hiring trends, funding rounds, expansion signals).

2. **Apply firmographic scoring rubric.** Score each dimension on a 0–3 scale:
   - **Industry fit** — 0 (outside target verticals), 1 (adjacent), 2 (secondary fit), 3 (core target vertical)
   - **Company size (employees)** — 0 (<10 or >10,000 if SMB-focused), 1 (borderline), 2 (within range), 3 (ideal range)
   - **Revenue** — 0 (below minimum threshold), 1 (at lower boundary), 2 (mid-range), 3 (ideal revenue band)
   - **Geography** — 0 (outside serviceable region), 1 (secondary market), 2 (supported region), 3 (primary market)
   - **Business model alignment** — 0 (no alignment), 1 (partial), 2 (good), 3 (perfect match)
   - **Growth signals** — 0 (none/declining), 1 (stable), 2 (moderate growth), 3 (strong growth indicators)

3. **Calculate composite score.** Sum all dimension scores (max 18). Assign tier:
   - **Tier 1 (High Priority): 14–18** — Immediate outreach, personalized sequence
   - **Tier 2 (Medium Priority): 9–13** — Standard outreach, nurture track
   - **Tier 3 (Low Priority): 4–8** — Deprioritize, monitor for changes
   - **Tier 4 (Disqualified): 0–3** — Remove from active pipeline

4. **Flag hard disqualifiers.** Automatically assign Tier 4 regardless of score if any apply: revenue below absolute floor, geography outside serviceable area, regulated industry restrictions, or direct competitor.

5. **Identify score boosters.** Note positive signals that warrant moving borderline accounts up one tier: recent funding round, leadership change, tech stack match, or active hiring in relevant departments.

6. **Generate outreach recommendation.** Based on tier, specify: contact priority (days to first touch), recommended channel (cold email, LinkedIn, phone, warm intro), and personalization angle tied to strongest firmographic fit signals.

## Output Format

Produce a structured scorecard in this format:

```
FIRMOGRAPHIC FIT SCORECARD
Company: [Name]
Date: [Date]

DIMENSION SCORES
─────────────────────────────
Industry Fit:        [0–3] — [brief rationale]
Company Size:        [0–3] — [brief rationale]
Revenue:             [0–3] — [brief rationale]
Geography:           [0–3] — [brief rationale]
Business Model:      [0–3] — [brief rationale]
Growth Signals:      [0–3] — [brief rationale]
─────────────────────────────
TOTAL SCORE:         [X/18]
FIT TIER:            Tier [1–4] — [High/Medium/Low Priority/Disqualified]

HARD DISQUALIFIERS:  [None detected / List any flagged]
SCORE BOOSTERS:      [None / List any detected]

RECOMMENDATION
Priority:   [Immediate / Standard / Deprioritize / Remove]
Timeline:   [Contact within X days]
Channel:    [Recommended
