---
name: ideal-customer-profile-scoring
description: >
  Creates a weighted scoring model to rank prospects against firmographic and behavioral criteria
  derived from your highest-value closed customers. Use when someone says "help me prioritize my
  pipeline," asks about scoring leads against their ICP, wants to figure out which prospects look
  most like their best customers, needs to rank accounts by fit, or is trying to build a scoring
  rubric for sales qualification.
category: sales
tags: [icp, lead-scoring, pipeline, prospecting, qualification]
author: community
---

# Ideal Customer Profile Scoring

Builds a customizable weighted scoring model that grades prospects against firmographic and behavioral signals from your best-fit customers, producing a ranked list with clear score breakdowns.

## Scoring Model Workflow

### Step 1 — Extract ICP Criteria
Ask the user for (or infer from context):
- 3–5 firmographic traits of top closed-won customers (industry, company size, revenue range, geography, tech stack, funding stage, business model)
- 2–4 behavioral or engagement signals (demo requested, visited pricing page, responded to outreach, job postings in a relevant function, recent funding event)
- Any hard disqualifiers (company size too small, wrong industry, no budget authority)

### Step 2 — Assign Weights
Allocate a total of 100 points across all criteria using this priority framework:
- **Must-have firmographic fit** (e.g., industry, size): 40–50 points total
- **Strong buying signals / behavioral fit**: 25–35 points total
- **Nice-to-have enrichment signals**: 10–20 points total
- **Negative/disqualifier flags**: subtract 15–25 points per flag triggered

Present the weight allocation as a table and ask the user to confirm or adjust before scoring.

### Step 3 — Score Each Prospect
For each prospect provided:
1. Evaluate every criterion as: **Full match** (100% of weight), **Partial match** (50%), or **No match** (0%)
2. Apply disqualifier penalties as flat deductions
3. Sum to a total score out of 100
4. Assign a tier:
   - **Tier 1 (A)**: 75–100 — Strong ICP fit, prioritize immediately
   - **Tier 2 (B)**: 50–74 — Moderate fit, nurture or qualify further
   - **Tier 3 (C)**: 25–49 — Weak fit, low priority
   - **Tier 4 (D)**: 0–24 or disqualified — Do not pursue

### Step 4 — Rank and Explain
Sort all prospects from highest to lowest score. For each, write one sentence explaining the primary reason for their tier placement.

### Step 5 — Recommend Next Actions
For Tier 1 prospects, suggest a specific outreach angle based on the matched signals (e.g., "They recently hired a VP of Sales — lead with pipeline efficiency messaging"). For Tier 3–4, note what would need to change to move them up.

## Output Format

Produce the following sections in order:

**1. ICP Scoring Rubric Table**
| Criterion | Category | Max Points | Scoring Logic |
|---|---|---|---|
| [criterion] | [firmographic/behavioral/penalty] | [points] | [full/partial/no match rules] |

**2. Prospect Scorecard Table**
| Prospect | [Criterion 1] | [Criterion 2] | ... | Penalties | Total Score | Tier |
|---|---|---|---|---|---|---|
| [Company] | [pts earned] | [pts earned] | ... | [-pts] | [total] | [A/B/C/D] |

**3. Ranked Summary**
Numbered list from highest to lowest score. Each entry: **Company name — Score/100 — Tier — One-sentence rationale.**

**4. Next Actions**
Bullet list of recommended actions per Tier 1 prospect, with signal-specific messaging angle. One line per prospect.

Keep the output scannable. Use tables for scoring data. Limit prose to rationale and next-action sections only.
