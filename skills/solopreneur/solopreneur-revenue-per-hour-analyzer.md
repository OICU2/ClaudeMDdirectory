---
name: solopreneur-revenue-per-hour-analyzer
description: >
  Calculates true revenue per hour across all client work and offer types to reveal which projects and services actually pay the best. Use when someone says "I don't know if this client is worth it," asks about which services make the most money, wants to figure out where their time is best spent, wonders if a retainer or project-based work pays better, or needs to decide which offers to keep, cut, or raise prices on.
category: solopreneur
tags: [revenue, time-tracking, pricing, profitability, offers]
author: community
---

# Solopreneur Revenue Per Hour Analyzer

This skill collects billing data and time investment across all client projects and offer types, then calculates true revenue per hour for each to surface what work is actually most profitable.

## Analysis Workflow

### Step 1: Gather Revenue Data
Ask the user to list every active client or offer type. For each, collect:
- Total revenue received or invoiced in the last 30, 60, or 90 days (let them choose the window)
- Payment structure: hourly, retainer, project flat fee, productized, or passive

### Step 2: Gather Time Investment Data
For each client or offer, collect total hours invested including:
- Direct delivery time (calls, writing, building, designing)
- Admin time (emails, invoicing, proposals, revisions, reporting)
- Sales and onboarding time amortized over the client relationship length
- If they track time with a tool, ask them to pull the numbers; if not, ask for honest estimates

### Step 3: Calculate True Revenue Per Hour
For each entry:
- **Gross RPH** = Total Revenue ÷ Delivery Hours Only
- **Net RPH** = Total Revenue ÷ (Delivery + Admin + Sales Hours)
- Flag any entry where Net RPH is less than 60% of Gross RPH (hidden time drain)
- If they know their effective tax rate or contractor costs, optionally calculate **After-Tax RPH**

### Step 4: Benchmark and Rank
- Rank all clients and offers from highest to lowest Net RPH
- Calculate a **blended average RPH** across all work combined
- Identify the top performer and the bottom performer
- Flag any client or offer earning below their blended average

### Step 5: Identify Patterns
Look for and name these patterns explicitly:
- **Time Vampire**: High revenue, low RPH due to excessive admin or scope creep
- **Hidden Gem**: Modest revenue but very high RPH — candidate for scaling
- **Anchor Client**: Large revenue share but below-average RPH — creates false security
- **Offer Sweet Spot**: Highest Net RPH with repeatable delivery

### Step 6: Generate Decisions
For each client or offer, recommend one of:
- **Keep and protect** — high RPH, replicate this model
- **Raise prices or restructure** — good client fit but RPH too low
- **Cap or phase out** — consistently low RPH with no path to improvement
- **Productize or delegate** — strong demand but time-heavy delivery dragging RPH down

## Output Format

Produce a structured report with these sections:

**1. Revenue Per Hour Breakdown Table**
A ranked table with columns: Client/Offer | Revenue | Total Hours | Gross RPH | Net RPH | Pattern Label

**2. Key Numbers**
- Blended average RPH across all work
- Highest RPH work and the dollar figure
- Lowest RPH work and the dollar figure
- Total hours analyzed and total revenue in the period

**3. Pattern Flags**
Bullet list of any Time Vampires, Hidden Gems, Anchor Clients, or Offer Sweet Spots found, with one sentence explaining each

**4. Action Recommendations**
Numbered list of 3–5 specific actions ranked by revenue impact, each written as: [Action] → [Expected outcome] → [Do this by: timeframe]

**5. One Insight They Probably Haven't Seen**
A single sharp observation about their time allocation vs. revenue distribution that isn't obvious from the raw numbers alone — for example, a mismatch between where they spend most hours and where most revenue actually comes from

Keep the tone direct and analytical. No filler sentences. Flag data gaps clearly and ask follow-up questions only if missing information would materially change the RPH calculation.
