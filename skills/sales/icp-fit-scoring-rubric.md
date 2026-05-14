---
name: icp-fit-scoring-rubric
description: >
  Builds a weighted scoring rubric that rates prospects against ideal customer profile (ICP) criteria to help sales reps prioritize outreach. Use when someone says "help me score my leads," asks about qualifying prospects, wants to rank accounts by fit, needs to build a lead scoring model, or is trying to figure out which prospects to contact first.
category: sales
tags: [icp, lead-scoring, prospecting, qualification, prioritization]
author: community
---

# ICP Fit Scoring Rubric Builder

This skill constructs a customized, weighted scoring rubric that evaluates inbound and outbound prospects against ICP criteria so reps can rank accounts by fit and prioritize outreach accordingly.

## Workflow

### Step 1: Extract ICP Parameters
Ask the user (or infer from context) for the following ICP dimensions:
- **Firmographic**: industry, company size (employees/revenue), geography, business model (B2B/B2C/SaaS/etc.)
- **Technographic**: current tech stack, tools they use or must have
- **Behavioral**: buying signals, intent data, engagement history
- **Situational**: growth stage, funding status, recent triggers (hiring, expansion, new leadership)
- **Stakeholder**: title/role of buyer, team size, decision-making structure

If the user has not defined their ICP, prompt them with: "What does your best current customer look like? Describe 2–3 of your top accounts."

### Step 2: Assign Criteria Categories and Weights
Map each ICP dimension to a scoring category and assign weights that sum to 100%:

| Category | Default Weight | Adjustable? |
|---|---|---|
| Firmographic fit | 30% | Yes |
| Technographic fit | 20% | Yes |
| Behavioral/intent signals | 25% | Yes |
| Situational triggers | 15% | Yes |
| Stakeholder alignment | 10% | Yes |

Ask the user if these weights reflect their sales motion or if they need adjustment (e.g., PLG companies may weight behavioral signals higher).

### Step 3: Build Scoring Scale Per Criterion
For each criterion, define a 0–3 or 0–5 point scale with explicit definitions:

**Example — Company Size (using 0–3):**
- 3: 200–1,000 employees (ideal range)
- 2: 1,001–2,500 or 50–199 employees (acceptable)
- 1: 2,501–5,000 or 10–49 employees (borderline)
- 0: <10 or >5,000 employees (disqualifying)

Repeat this for every criterion identified in Step 1. Disqualifying criteria (hard DQs) should automatically set total score to 0 regardless of other scores.

### Step 4: Define Fit Tiers
Map total weighted scores to fit tiers:

| Tier | Score Range | Action |
|---|---|---|
| Tier 1 – Strong Fit | 80–100 | Prioritize immediately; personalized outreach within 24h |
| Tier 2 – Good Fit | 60–79 | Add to active sequence; outreach within 1 week |
| Tier 3 – Possible Fit | 40–59 | Nurture; revisit in 30–60 days |
| Tier 4 – Poor Fit | 0–39 | Deprioritize or disqualify |

### Step 5: Apply and Test the Rubric
Ask the user to provide 2–3 real or hypothetical prospect accounts. Score each one using the rubric to validate that the outputs match their intuition. Adjust weights or scale definitions if results feel off.

### Step 6: Deliver Final Rubric
Compile the complete rubric as a structured, copy-paste-ready document (see Output Format).

## Output Format

Produce a single document with these sections:

1. **Rubric Summary Table** — All criteria, weights, point scale (0–3 or 0–5), and max weighted score per criterion, formatted as a Markdown table.

2. **Scoring Definitions** — For each criterion, a bulleted breakdown of what earns each point value (e.g., "3 pts = X, 2 
