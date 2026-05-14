---
name: competitor-positioning-map
description: >
  Plots competitors across key differentiating axes using public data to reveal positioning gaps and whitespace opportunities for brand strategy decisions. Use when someone wants to map their competitive landscape, asks where competitors are positioned in the market, or needs to find whitespace for brand differentiation. Also triggers when someone says they want to understand how rivals are perceived, wants to identify under-served market segments, or is preparing a go-to-market or brand repositioning strategy.
category: marketing
tags: [competitive-analysis, brand-strategy, market-positioning, differentiation, go-to-market]
author: community
---

# Competitor Positioning Map

This skill analyzes competitors across key differentiating dimensions and surfaces positioning gaps and whitespace opportunities to inform brand strategy decisions.

## Workflow

### 1. Define the Competitive Arena
- Ask the user for: their product/brand, the target market, and 3–8 competitors to include (or generate a list from context).
- Confirm the industry and customer segment so axes are relevant.

### 2. Identify Differentiating Axes
- Select 2 primary axes that most meaningfully separate competitors in this market. Good axis pairs:
  - Price (low → premium) vs. Complexity (simple → enterprise-grade)
  - Niche Focus (specialist → generalist) vs. Brand Tone (functional → aspirational)
  - Speed/Time-to-Value (slow → fast) vs. Customization (rigid → flexible)
  - Innovation pace (incremental → disruptive) vs. Market maturity (emerging → established)
- Explain why these axes were chosen for this specific market.

### 3. Score Each Competitor
- For each competitor, assign a score of 1–10 on each axis using publicly available signals: website messaging, pricing pages, reviews (G2, Trustpilot, Reddit), press coverage, and product positioning.
- Document the reasoning for each score in 1 sentence.

### 4. Plot the Map (Text-Based Grid)
- Render a 2D ASCII/text grid with Axis X (horizontal) and Axis Y (vertical), divided into four quadrants.
- Place each competitor's name at the approximate coordinates.
- Label quadrants descriptively (e.g., "Budget Specialists," "Premium Generalists").

### 5. Identify Whitespace
- Identify 1–3 quadrants or zones that are sparsely populated or entirely empty.
- Describe who the under-served customer segment in that whitespace would be.
- State explicitly what a brand entering that space would need to deliver.

### 6. Strategic Recommendations
- Provide 2–3 positioning options for the user's brand, ranked by opportunity size and fit.
- For each option: name the position, describe the core promise, and flag risks or incumbents that could challenge it.

## Output Format

**Section 1 — Axis Rationale** (2–4 sentences explaining the chosen axes)

**Section 2 — Competitor Scores Table**
| Competitor | Axis X Score | Axis Y Score | Rationale |
|---|---|---|---|
| ... | ... | ... | ... |

**Section 3 — Positioning Map**
ASCII grid (minimum 20×10 characters) with labeled axes, quadrant names, and competitor names placed at coordinates.

**Section 4 — Whitespace Analysis**
Bullet list: each whitespace zone, the under-served segment, and what a brand there must deliver.

**Section 5 — Strategic Positioning Options**
Numbered list of 2–3 options, each with: position name, core promise (1 sentence), target customer, and key risk.

Total length: 400–700 words excluding the grid and table.
