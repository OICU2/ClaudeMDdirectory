---
name: marketing-channel-experiment-prioritization
category: marketing
description: >
  Scores and ranks proposed marketing channel experiments by expected impact, cost, and speed to result to guide quarterly testing decisions. Use when someone says "we need to decide which marketing experiments to run," asks about prioritizing channel tests, wants to figure out where to focus marketing spend this quarter, needs to evaluate competing campaign ideas, or is trying to build a testing roadmap.
tags: [marketing, experimentation, prioritization, channel-strategy, testing]
author: community
---

# Marketing Channel Experiment Prioritization

This skill evaluates and ranks a list of proposed marketing channel experiments using a weighted scoring model across impact, cost, and speed dimensions to produce a clear quarterly testing priority order.

## Scoring Workflow

1. **Gather experiment inputs.** Ask the user to list all proposed experiments. For each, collect: channel (e.g., paid social, SEO, email, OOH), hypothesis, estimated budget, estimated time to measurable result, and expected outcome metric (e.g., CAC, conversion rate, revenue).

2. **Score each experiment across three dimensions (1–5 scale):**
   - **Expected Impact:** How significantly could this move the target metric? (1 = marginal lift, 5 = transformational)
   - **Cost Efficiency:** How low is the resource investment relative to potential return? (1 = high cost/low ROI potential, 5 = low cost/high ROI potential)
   - **Speed to Result:** How quickly will you have statistically meaningful data? (1 = 6+ months, 5 = under 4 weeks)

3. **Apply weighted scoring formula:**
   - Priority Score = (Impact × 0.45) + (Cost Efficiency × 0.30) + (Speed × 0.25)
   - Adjust weights if the user specifies constraints (e.g., "we're cash-constrained" shifts Cost Efficiency weight to 0.45).

4. **Flag risks and dependencies.** For any experiment scoring above 3.5, note: audience overlap with other tests, required creative assets or tech setup, and whether a control group is feasible.

5. **Assign tier classification:**
   - **Tier 1 (Run Now):** Score ≥ 4.0
   - **Tier 2 (Run if Capacity Allows):** Score 3.0–3.9
   - **Tier 3 (Backlog):** Score < 3.0

6. **Sequence the Tier 1 experiments.** Order them to minimize audience overlap and resource conflicts. Recommend no more than 3 simultaneous experiments per quarter.

## Output Format

Produce a structured prioritization report with the following sections:

**Experiment Scoring Table**
A markdown table with columns: Experiment Name | Channel | Impact Score | Cost Score | Speed Score | Weighted Priority Score | Tier

**Tier 1 Recommended Tests (Run Now)**
- Bullet list with experiment name, one-sentence rationale, suggested start timing, and key success metric

**Tier 2 Candidates**
- Bullet list with experiment name and the single condition that would move it to Tier 1

**Tier 3 Backlog**
- Brief list with reason for deferral

**Sequencing Recommendation**
- A numbered quarterly calendar showing which experiments run in which weeks, with notes on audience or budget conflicts to avoid

**Assumptions and Caveats**
- 3–5 bullets flagging any scoring assumptions made due to missing data, and what information would change the rankings

Total length: 400–700 words. Use markdown formatting throughout.
