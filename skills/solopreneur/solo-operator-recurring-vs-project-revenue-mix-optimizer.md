---
name: solo-operator-recurring-vs-project-revenue-mix-optimizer
description: >
  Analyzes a solopreneur's current revenue composition and recommends an optimized split between
  recurring retainers and one-time projects to reduce cash flow volatility. Use when someone says
  "my income is too unpredictable," asks about stabilizing monthly revenue, wants to know how many
  retainer clients they need, is tired of feast-or-famine cycles, or is trying to figure out the
  right balance between ongoing contracts and project work.
category: solopreneur
tags: [revenue-mix, retainers, cash-flow, pricing-strategy, solopreneur]
author: community
---

# Solo Operator Recurring vs. Project Revenue Mix Optimizer

This skill audits a solo operator's current revenue breakdown and produces a concrete, adjusted retainer-to-project ratio with actionable steps to shift toward greater monthly income stability.

## Revenue Mix Analysis Workflow

### Step 1 — Gather Current Revenue Data
Ask the user for the following if not already provided:
- Average monthly revenue (last 3–6 months)
- Percentage or dollar amount from recurring retainers vs. one-time projects
- Number of active retainer clients and average retainer value
- Typical project size and frequency
- Monthly fixed expenses (floor they must reliably cover)
- Desired income target per month

If the user can't provide exact numbers, prompt them to estimate in ranges (e.g., "roughly 20% retainer, 80% project").

### Step 2 — Calculate Stability Score
Determine the current cash flow stability using this logic:
- **High risk:** Less than 30% recurring revenue — income is project-dependent and highly volatile
- **Moderate risk:** 30–60% recurring — some stability but still exposed to project droughts
- **Target zone:** 60–80% recurring — predictable base with room for higher-margin project work
- **Over-indexed:** 80%+ recurring — stable but potentially capped on upside; assess if growth is being sacrificed

Flag the user's current zone explicitly.

### Step 3 — Calculate the Retainer Floor
Compute the minimum recurring revenue needed to cover fixed expenses:
- **Retainer floor** = Monthly fixed expenses × 1.2 (20% buffer)
- Divide by average retainer value to get the **minimum retainer client count**
- Compare to current retainer client count and surface the gap

### Step 4 — Build the Recommended Mix
Recommend a specific target split based on their situation:
- If below the retainer floor: prioritize converting 1–2 existing project clients to retainers before taking new project work
- If at moderate risk: aim for 60% recurring / 40% project within 90 days; identify which current project clients are candidates for retainerization
- If in target zone: optimize retainer pricing upward rather than adding clients; protect project capacity for high-margin work only
- If over-indexed: introduce 1–2 scoped projects per quarter to increase ceiling without destabilizing base

### Step 5 — Identify Conversion Candidates
Guide the user to identify which project clients are retainer candidates by asking:
- Which clients hire you repeatedly (2+ times per year)?
- Which clients need ongoing support but currently book ad hoc?
- Which project engagements have a natural ongoing component (maintenance, reporting, strategy)?

For each candidate, suggest a retainer framing: what ongoing deliverable or outcome justifies a monthly fee.

### Step 6 — Set a 90-Day Action Plan
Produce a prioritized action list with 3–5 specific moves ranked by impact, such as:
- Pitch a retainer to the highest-frequency project client by [specific date]
- Restructure one service offering to include a retainer tier
- Set a rule: no new project work until retainer floor is met
- Raise retainer rates at next renewal to improve mix quality, not just quantity

---

## Output Format

Produce a structured response with these sections:

**1. Current Revenue Snapshot**
- Table or bullet list: monthly revenue, retainer %, project %, retainer client count, retainer floor gap

**2. Stability Zone Assessment**
- One-line verdict (e.g., "You're in the High Risk zone — 20% recurring leaves you exposed to a single slow month.")

**3. Recommended Target Mix**
- Specific split (
