---
name: financing-round-dilution-scenario-planner
description: >
  Projects founder and existing investor dilution across multiple fundraising scenarios by modeling pre-money valuation, round size, and option pool expansion. Use when someone says "how much will I be diluted," asks about running dilution scenarios for a fundraise, wants to model a cap table across multiple term sheet options, is planning a Series A or seed round and wants to see ownership impact, or needs to compare investor dilution under different valuation assumptions.
category: finance
tags: [cap-table, dilution, fundraising, venture-capital, equity]
author: community
---

# Financing Round Dilution Scenario Planner

This skill models founder and investor dilution across multiple fundraising scenarios, comparing pre-money valuation, round size, and option pool expansion to show post-money ownership percentages side by side.

## Scenario Modeling Workflow

1. **Gather current cap table inputs**
   - Ask for current shares outstanding (or percentages) broken down by: founders, existing investors, option pool (issued + unissued)
   - If the user only has percentages, work in percentage terms; if they have share counts, work in shares
   - Confirm the current pre-money shares outstanding total

2. **Collect scenario parameters**
   - Ask for 2–4 scenarios to compare; each scenario needs:
     - Pre-money valuation
     - Round size (new capital raised)
     - Option pool top-up required before close (if any) — note whether it comes pre- or post-money
   - If the user provides a single scenario, generate two additional bracketing scenarios (e.g., ±20% on valuation) automatically

3. **Calculate for each scenario**
   - Post-money valuation = pre-money valuation + round size
   - New investor ownership % = round size ÷ post-money valuation
   - If option pool expansion is pre-money: add new option shares to denominator before calculating investor %, then recompute all existing holder percentages
   - Diluted ownership for each existing holder = current % × (1 − new investor %) × (1 − option pool expansion %)
   - Price per share = pre-money valuation ÷ pre-money shares outstanding
   - New shares issued to investors = round size ÷ price per share

4. **Flag key thresholds**
   - Warn if founder ownership drops below 50% (majority control risk)
   - Warn if any existing investor drops below a likely pro-rata threshold (typically 5–10%)
   - Note if option pool expansion exceeds 15% of post-money shares (aggressive dilution signal)

5. **Clarify assumptions explicitly**
   - State whether SAFEs or convertible notes are included (ask if not clear)
   - Note if anti-dilution provisions are ignored (full ratchet or weighted average adjustments are out of scope unless user requests)
   - Assume standard non-participating preferred unless told otherwise

## Output Format

Produce a structured comparison with the following sections:

**Summary Table** (one column per scenario):
| Metric | Scenario A | Scenario B | Scenario C |
|---|---|---|---|
| Pre-money valuation | | | |
| Round size | | | |
| Post-money valuation | | | |
| Price per share | | | |
| New investor ownership | | | |
| Option pool (post-close) | | | |
| Founder ownership | | | |
| [Each existing investor] | | | |

**Ownership Waterfall** (per scenario, bullet list):
- List each stakeholder and their post-close ownership % in descending order

**Key Observations** (3–5 bullets):
- Highlight the scenario with least founder dilution
- Call out any control or threshold warnings from Step 4
- Note the valuation sensitivity (how much ownership changes per $1M shift in pre-money)

**Assumptions Block**:
- Bullet list of every assumption made (option pool timing, note conversion excluded, etc.)

Keep all tables aligned and numeric values to two decimal places. Use dollar shorthand (e.g., $8M, $2.5M) for readability. If the user provided share counts, include a shares-outstanding row in the summary table.
