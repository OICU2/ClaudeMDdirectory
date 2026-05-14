---
name: b2b-demand-generation-content-audit
description: >
  Audits existing B2B content assets against the full buying journey to surface coverage gaps and prioritize creation opportunities. Use when someone says "we don't know if our content is working," asks about mapping content to the funnel, wants to find gaps in their content library, needs to prioritize what content to create next, or is preparing a demand generation strategy review.
category: marketing
tags: [b2b, content-audit, demand-generation, buying-journey, content-strategy]
author: community
---

# B2B Demand Generation Content Audit

This skill maps existing content assets to each stage of the B2B buying journey, identifies gaps where no content exists to advance prospects, and produces a prioritized list of missing content with rationale.

## Audit Workflow

### Step 1: Establish the Buying Journey Framework
Use this six-stage B2B buying journey as the audit backbone:
1. **Problem Unaware** — prospect doesn't know they have the problem
2. **Problem Aware** — prospect recognizes the pain but hasn't defined the solution category
3. **Solution Aware** — prospect is evaluating solution types (e.g., software vs. services)
4. **Vendor Aware** — prospect is comparing specific vendors
5. **Decision/Validation** — prospect needs internal justification, risk reduction, or approval
6. **Post-Purchase/Expansion** — customer needs onboarding, adoption, and upsell triggers

### Step 2: Collect Content Inventory
Ask the user to provide (or paste) their existing content list. If unavailable, prompt for:
- Content type (blog, whitepaper, case study, webinar, demo, email sequence, etc.)
- Title or topic
- Target audience/persona
- Approximate publish date or recency

If the user has no inventory, guide them to quickly list their top 10–20 assets by title and type before proceeding.

### Step 3: Map Each Asset to a Stage
For each content asset:
- Assign it to the single most appropriate buying journey stage
- Note the primary persona it addresses (if multiple personas exist)
- Flag assets that are persona-agnostic or too generic to move anyone forward

Use this mapping heuristic:
- Thought leadership / trend content → Problem Unaware
- Pain-point focused blogs, podcasts, educational guides → Problem Aware
- Category explainers, comparison guides, "why X matters" content → Solution Aware
- Competitive comparisons, product pages, analyst reports → Vendor Aware
- ROI calculators, security docs, customer references, proposal templates → Decision/Validation
- Onboarding guides, product tips, expansion case studies → Post-Purchase

### Step 4: Score Coverage by Stage
Count assets per stage and apply this coverage rating:
- **0 assets** → Critical Gap 🔴
- **1 asset** → Thin Coverage 🟡
- **2–3 assets** → Adequate 🟢
- **4+ assets** → Strong ✅ (flag if over-indexed relative to other stages)

Also flag if coverage exists for one persona but not others.

### Step 5: Identify and Prioritize Gaps
For each gap stage, generate a specific missing content recommendation:
- Name the content type best suited to fill the gap
- Write a working title or angle
- State the job-to-be-done for the prospect at that stage
- Assign a priority tier:
  - **P1** — stage has zero coverage or directly precedes a known drop-off point
  - **P2** — stage has only one asset or coverage is persona-incomplete
  - **P3** — stage is adequate but an additional format (e.g., video vs. text) would improve reach

## Output Format

Produce a structured audit report with these sections:

---

**Content Audit Summary**
- Total assets reviewed: [N]
- Stages with critical gaps: [list]
- Stages with strong coverage: [list]

**Stage-by-Stage Coverage Map**

| Buying Stage | # Assets | Coverage Rating | Assets (titles) |
|---|---|---|---|
| Problem Unaware | N | 🔴/🟡/🟢/✅ | [titles] |
| Problem Aware | N | ... | ... |
| Solution Aware | N | ... | ... |
| Vendor Aware | N | ...
