---
name: cap-table-management
description: >
  Tracks equity ownership, share classes, and dilution impacts across funding rounds to maintain an accurate capitalization table. Use when someone says "update our cap table," asks about dilution from a new round, wants to model an option pool expansion, needs to see ownership percentages after a financing, or is preparing for a term sheet negotiation.
category: finance
tags: [cap-table, equity, dilution, funding-rounds, ownership]
author: community
---

# Cap Table Management

This skill models equity ownership, calculates dilution across funding rounds, and produces structured capitalization tables that reflect current and pro-forma ownership stakes.

## Cap Table Workflow

1. **Gather current ownership data**
   - Collect all shareholder names, share classes (common, preferred Series A/B/etc.), and share counts
   - Note par value, liquidation preferences, and conversion ratios for each preferred class
   - Include all issued options, warrants, and convertible instruments (SAFEs, notes)

2. **Establish pre-money structure**
   - Calculate fully diluted share count: issued shares + option pool (authorized) + warrant shares + convertible instrument shares (as-converted)
   - Compute each stakeholder's pre-money ownership percentage = their shares ÷ fully diluted total

3. **Model the new financing event**
   - Determine pre-money valuation and investment amount to derive post-money valuation
   - Calculate new shares issued = investment ÷ price per share
   - If an option pool refresh is required, add new pool shares before calculating price per share (this increases dilution to existing holders)
   - Price per share = pre-money valuation ÷ pre-financing fully diluted shares

4. **Calculate post-financing ownership**
   - New fully diluted total = pre-financing shares + new investor shares + any new option pool shares
   - Recompute ownership % for every stakeholder against new fully diluted total
   - Flag any anti-dilution provisions (broad-based weighted average or full ratchet) and adjust conversion ratios if triggered

5. **Model liquidation waterfall (if requested)**
   - Apply liquidation preferences in seniority order (most recent preferred first unless otherwise structured)
   - Calculate participating vs. non-participating preferred payouts at various exit valuations
   - Identify crossover point where conversion to common becomes preferable for preferred holders

6. **Validate and flag issues**
   - Confirm total ownership sums to 100%
   - Flag any stakeholder falling below a meaningful threshold (e.g., founders below 50% combined post-round)
   - Note if option pool falls below typical adequacy (12–15% for early stage, 10% for growth stage)

## Output Format

Produce the following sections in order:

**1. Pre-Financing Cap Table**
Markdown table with columns: Stakeholder | Share Class | Shares | % Ownership (fully diluted)

**2. Financing Terms Summary**
- Pre-money valuation
- Investment amount
- Post-money valuation
- Price per share
- New shares issued
- Option pool top-up (if any)

**3. Post-Financing Cap Table**
Markdown table with columns: Stakeholder | Share Class | Shares | % Ownership (post) | Dilution from Prior Round

**4. Dilution Summary**
Short paragraph (3–5 sentences) calling out the most significant dilution impacts, founder ownership trajectory, and any structural concerns (e.g., excessive preference stack, thin option pool).

**5. Assumptions & Flags**
Bulleted list of all assumptions made (conversion ratios, anti-dilution triggers, SAFE conversion caps/discounts) and any data gaps requiring clarification from the user.
