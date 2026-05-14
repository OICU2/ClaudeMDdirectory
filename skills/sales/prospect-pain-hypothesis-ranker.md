---
name: prospect-pain-hypothesis-ranker
description: >
  Scores and ranks a list of assumed prospect pain points by urgency and budget impact to help sales reps decide which angle to lead with in outreach. Use when someone says "I have a list of pain points for this prospect," asks "which problem should I focus on first," or wants to prioritize their sales angle before a cold call or discovery session. Also activates when a rep asks "what pain matters most to this buyer" or "help me rank these problems by impact."
category: sales
tags: [prospecting, pain-points, prioritization, outreach, discovery]
author: community
---

# Prospect Pain Hypothesis Ranker

This skill scores and ranks a rep's assumed prospect pain points by urgency and budget impact so they know exactly which angle to lead with in outreach or discovery.

## Scoring Workflow

1. **Collect the inputs.** Ask the rep to provide: (a) the list of assumed pain points, (b) the prospect's role/title, (c) the industry and company size, and (d) any context about current initiatives, triggers, or timing signals (e.g., recent funding, hiring spree, competitive pressure). If these are missing, ask before proceeding.

2. **Score each pain point on two dimensions (1–5 scale each):**
   - **Urgency Score:** How likely is this pain to demand action *now*? Consider: regulatory deadlines, revenue impact, visible symptoms, exec visibility, competitive pressure.
   - **Budget Impact Score:** How directly does this pain connect to revenue, cost reduction, or a funded initiative? Consider: pain owner's budget authority, whether it maps to a known line item, and whether the cost of inaction is quantifiable.

3. **Calculate a Priority Score** for each pain point: `Priority = (Urgency × 1.5) + (Budget Impact × 1.0)`. This weights urgency slightly higher since timing drives outreach response rates.

4. **Apply tiebreaker logic** when scores are within 0.5 of each other: rank by how easily the rep can *prove* the pain exists using public evidence (job postings, press releases, earnings calls, reviews).

5. **Flag any pain points to deprioritize:** Low scores on both dimensions (≤2 each) should be labeled "Back-pocket — do not lead with."

6. **Suggest an outreach angle** for the top-ranked pain: one sentence the rep can use as a conversation opener that names the pain without pitching a solution.

## Output Format

Produce a ranked table followed by a short recommendation block.

**Ranked Pain Point Table:**
| Rank | Pain Point | Urgency (1–5) | Budget Impact (1–5) | Priority Score | Reasoning (1 sentence) |
|------|------------|---------------|---------------------|----------------|------------------------|
| 1    | ...        | ...           | ...                 | ...            | ...                    |

**Top Angle Recommendation:**
- **Lead with:** [Pain point #1 name]
- **Why now:** [1–2 sentences on urgency drivers specific to this prospect]
- **Suggested opener:** "[One natural-language sentence the rep can use verbatim or adapt]"

**Deprioritized Pains:** [Bullet list of any flagged low-scorers with a one-phrase reason each]

Keep the full output scannable and under one page. No lengthy explanations — reps need this fast, before a call.
