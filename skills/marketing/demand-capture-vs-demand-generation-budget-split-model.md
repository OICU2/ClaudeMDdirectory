---
name: demand-capture-vs-demand-generation-budget-split-model
description: >
  Analyzes marketing spend and pipeline data to recommend the optimal budget split between demand capture (in-market buyers) and demand generation (future pipeline creation). Use when someone asks how to allocate their marketing budget, wants to know how much to spend on brand vs. performance, is deciding between SEO/paid search and awareness campaigns, needs to justify their marketing mix to finance, or says their pipeline is drying up and wants to rebalance spend.
category: marketing
tags: [budget-allocation, demand-generation, demand-capture, marketing-mix, pipeline-strategy]
author: community
---

# Demand Capture vs. Demand Generation Budget Split Model

This skill analyzes current marketing spend, pipeline health, and business stage to produce a recommended budget allocation between in-market demand capture tactics and longer-term demand creation activities.

## Analysis Workflow

### Step 1: Gather Inputs
Ask the user for the following (or extract from provided data):
- Total marketing budget (monthly or annual)
- Current pipeline coverage ratio (pipeline / quota)
- Average sales cycle length
- Business stage: early-stage (<$5M ARR), growth ($5M–$50M ARR), or scale (>$50M ARR)
- Current revenue growth rate (%)
- Primary channel mix (paid search, SEO, content, events, social, outbound, etc.)
- Current split between capture and creation tactics (if known)
- Category awareness level: niche/unknown, emerging, or established

### Step 2: Apply the Baseline Split Framework
Use these starting benchmarks based on business stage:

| Stage | Demand Capture | Demand Generation |
|---|---|---|
| Early-stage | 30–40% | 60–70% |
| Growth | 45–55% | 45–55% |
| Scale | 55–65% | 35–45% |

**Demand Capture tactics** (in-market, short-cycle): paid search/SEM, review site ads (G2, Capterra), retargeting, competitive conquest, bottom-funnel SEO, SDR outbound to active intent signals.

**Demand Generation tactics** (future pipeline, long-cycle): brand campaigns, thought leadership content, social media, podcasts, events, community, top-funnel SEO, category education.

### Step 3: Apply Adjustment Modifiers
Shift the baseline split based on these signals:

**Shift toward Demand Capture (+5–15%):**
- Pipeline coverage ratio below 3x
- Sales cycle under 30 days
- High category awareness (buyers know the solution exists)
- Revenue growth below target and board pressure for near-term results
- Established competitor presence with active comparison searches

**Shift toward Demand Generation (+5–15%):**
- Pipeline coverage ratio above 4x but growth is decelerating
- New category or low category awareness
- Long sales cycle (90+ days)
- Overdependence on one capture channel (>60% budget in single channel)
- Increasing CAC in current capture channels (diminishing returns signal)

### Step 4: Calculate Recommended Split
Apply the base split + modifiers and output a specific percentage recommendation. Clamp final ranges to ensure no single bucket drops below 25% or exceeds 75% unless extreme circumstances are justified.

### Step 5: Map Budget to Specific Channels
Distribute the recommended percentages across actual channels provided by the user. Flag any channels that are misclassified in their current model (e.g., treating brand awareness spend as demand capture).

### Step 6: Flag Risks and Trade-offs
Identify the primary risk of the recommended allocation:
- Over-indexed on capture: pipeline cliff risk in 2–3 quarters
- Over-indexed on generation: short-term quota miss risk
- State the lag time before demand generation investments show pipeline impact (typically 3–9 months)

## Output Format

Produce a structured recommendation with these sections:

**1. Input Summary** — Bullet list of key inputs received and any assumptions made for missing data.

**2. Recommended Budget Split** — Single clear ratio (e.g., "55% Demand Capture / 45% Demand Generation") with a one-sentence rationale.

**3. Adjustment Rationale** — 3–5 bullet points explaining which modifiers moved the recommendation away from the baseline and why.

**4. Channel-Level Budget Breakdown** — Table
