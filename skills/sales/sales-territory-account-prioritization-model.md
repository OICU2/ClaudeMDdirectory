---
name: sales-territory-account-prioritization-model
description: >
  Scores and ranks accounts within a sales territory by revenue potential, engagement signals, and ICP fit to guide rep time allocation. Use when someone wants to prioritize their account list, asks which accounts to focus on this quarter, needs help ranking prospects by likelihood to close, wants to build a territory coverage plan, or is trying to decide where to spend their selling time.
category: sales
tags: [territory-management, account-scoring, pipeline, ICP, revenue]
author: community
---

# Sales Territory Account Prioritization Model

This skill scores and ranks accounts using revenue potential, ICP fit, and engagement signals so reps know exactly where to focus their time.

## Scoring Workflow

### Step 1: Gather Account Data
Ask the user to provide or confirm the following inputs for each account (or a representative sample):
- **Company size** (employees, revenue if known)
- **Industry/vertical**
- **Current relationship stage** (cold, MQL, SQL, existing customer, churned)
- **Recent engagement signals** (opened emails, attended webinar, visited pricing page, inbound inquiry, champion contact made)
- **Estimated deal size / ACV potential**
- **Known pain points or active initiatives** that align with the product
- **Decision-maker access** (do we have a champion, economic buyer, or only an end user?)
- **Competitive situation** (no competitor, known competitor, incumbent vendor)

If the user cannot provide all fields, proceed with available data and flag missing inputs.

### Step 2: Score Each Account Across Four Dimensions

Score each dimension 1–5 using these criteria:

**A. ICP Fit (1–5)**
- 5: Matches all firmographic and technographic ICP criteria exactly
- 3: Matches most criteria, one or two gaps
- 1: Significant mismatch on company size, industry, or use case

**B. Revenue Potential (1–5)**
- 5: Deal size in top 20% of territory average, expansion potential exists
- 3: Near-average deal size, limited expansion signals
- 1: Below-average deal size, one-time transactional

**C. Engagement & Intent Signals (1–5)**
- 5: Multiple high-intent signals (inbound, pricing page, champion engaged)
- 3: Light engagement (one email open, referral mention)
- 1: No signals, fully cold

**D. Sales Readiness (1–5)**
- 5: Active buying process, budget confirmed, decision-maker access secured
- 3: Interest expressed, no formal process started
- 1: No budget cycle visibility, no internal champion

### Step 3: Calculate Composite Score

Apply weighted formula:

```
Composite Score = (ICP Fit × 0.25) + (Revenue Potential × 0.30) + (Engagement × 0.25) + (Sales Readiness × 0.20)
```

Multiply result × 20 to normalize to a 0–100 scale.

### Step 4: Assign Tier

| Score | Tier | Recommended Action |
|-------|------|--------------------|
| 80–100 | Tier 1 — Priority | Multi-touch outreach this week, executive alignment, custom proposal |
| 60–79 | Tier 2 — Active | Scheduled cadence, nurture with relevant content, qualify deeper |
| 40–59 | Tier 3 — Monitor | Low-touch nurture, reassess in 30–60 days |
| Below 40 | Tier 4 — Deprioritize | Remove from active pipeline, move to long-cycle nurture or disqualify |

### Step 5: Identify Quick Wins vs. Strategic Bets
- **Quick Wins**: Tier 1 or 2 accounts with Sales Readiness score ≥ 4
- **Strategic Bets**: Tier 1 or 2 accounts with high ICP + Revenue but low Sales Readiness (invest in building champion)
- **Flag for Review**: Any account where ICP Fit < 2 regardless of other scores

## Output Format

Produce a structured account prioritization table followed by a narrative summary:

**1. Scored Account Table**
One row per account with columns: Account Name | ICP Fit | Revenue Potential | Engagement | Sales Readiness |
