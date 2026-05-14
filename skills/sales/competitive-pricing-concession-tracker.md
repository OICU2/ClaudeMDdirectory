---
name: competitive-pricing-concession-tracker
description: >
  Logs, categorizes, and analyzes pricing concessions made during competitive sales deals to surface discount patterns, margin erosion trends, and negotiation leverage by competitor. Use when someone says "we had to drop price to beat [competitor]," asks "how much are we discounting against Oracle," or wants to understand "where we're losing margin in competitive deals." Also activates when reviewing "what concessions did we make last quarter" or analyzing "our discount patterns by competitor."
category: sales
tags: [pricing, competitive-intelligence, discounting, margin, negotiation]
author: community
---

# Competitive Pricing Concession Tracker

This skill captures and analyzes pricing concessions made in competitive deals to identify discount patterns, margin erosion trends, and negotiation leverage points by competitor.

## Concession Logging Workflow

### Step 1: Capture Concession Data
When a concession is reported, extract and record these fields:
- **Deal ID / Opportunity Name** — unique identifier
- **Competitor(s) involved** — which vendor(s) forced the concession
- **Concession type** — choose from: List Price Discount, Extended Payment Terms, Free Modules/Add-ons, Extended Trial, Multi-Year Lock-in Price, Professional Services Discount, SLA Upgrade
- **Discount depth** — percentage off list price or dollar amount conceded
- **Deal stage when concession made** — Early Evaluation, Late Stage, Final Negotiation, Renewal Defense
- **Outcome** — Won, Lost, Pending
- **Sales rep and region** — for pattern filtering
- **Justification given by prospect** — verbatim or summarized

### Step 2: Categorize Severity
Classify each concession:
- **Green (0–10% discount):** Within standard policy, no escalation needed
- **Yellow (11–20% discount):** Requires manager approval, flag for pattern review
- **Red (21%+ discount or multiple stacked concessions):** Executive approval, immediate pattern alert

### Step 3: Detect Patterns
After logging 3+ entries, automatically check for:
- Which competitors most frequently trigger deep discounts
- Whether specific deal stages correlate with larger concessions
- Whether certain reps or regions show higher concession rates
- Whether stacked concessions (price + terms + add-ons) are increasing over time
- Competitor bluff indicators: deals where deep discounts were refused and the deal was still won

### Step 4: Generate Leverage Insights
For each competitor with 3+ logged deals, produce:
- **Bluff rate** — percentage of times competitor's price was matched/beaten and deal still won without full concession
- **Minimum viable discount** — lowest discount at which wins occurred against this competitor
- **Most common concession type demanded** — indicates competitor's likely sales tactic
- **Counter-talking points** — based on win patterns, what held firm and still closed deals

## Output Format

### Single Concession Log Entry
```
CONCESSION LOG
──────────────────────────────
Deal: [Name/ID]
Date: [MM/DD/YYYY]
Competitor: [Name]
Concession Type: [Type]
Discount Depth: [X%] — Severity: [Green/Yellow/Red]
Deal Stage: [Stage]
Outcome: [Won/Lost/Pending]
Prospect Justification: "[Quote or summary]"
Rep/Region: [Name] / [Region]
```

### Competitor Pattern Summary (triggered when 3+ entries exist for one competitor)
```
COMPETITOR PATTERN REPORT: [Competitor Name]
──────────────────────────────
Deals Analyzed: [N]
Win Rate Overall: [X%]
Avg Discount When Won: [X%]
Avg Discount When Lost: [X%]
Bluff Rate: [X%] (won without matching full discount demand)
Most Common Concession Type: [Type]
Most Vulnerable Deal Stage: [Stage]

TOP LEVERAGE INSIGHTS:
1. [Specific, data-backed insight]
2. [Specific, data-backed insight]
3. [Specific, data-backed insight]

RECOMMENDED FLOOR DISCOUNT: [X%]
HOLD-FIRM TALKING POINTS:
- [Point 1]
- [Point 2]
```

### Margin Erosion Trend
