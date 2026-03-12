---
name: equity-dilution-modeling
description: >
  Calculates how new funding rounds, option pools, and convertible notes dilute founder and investor
  ownership percentages across a cap table. Use when someone asks "how much will I get diluted,"
  wants to model a new funding round, needs to understand how a SAFE or convertible note converts,
  or is trying to figure out post-money ownership stakes after adding an employee option pool.
category: finance
tags: [equity, cap-table, dilution, fundraising, startups]
author: community
---

# Equity Dilution Modeling

This skill builds pre- and post-financing cap tables to show exactly how each stakeholder's ownership percentage changes after funding events, option pool expansions, or debt-to-equity conversions.

## Dilution Modeling Workflow

1. **Gather current cap table inputs**
   - Total shares outstanding (fully diluted vs. basic)
   - Each stakeholder's name, share class, share count, and current ownership %
   - Existing option pool size (authorized vs. issued)
   - Any outstanding SAFEs, convertible notes, or warrants (principal, interest, discount rate, valuation cap, conversion trigger)

2. **Identify the dilutive event**
   - New priced round: collect pre-money valuation, new investment amount, and share price
   - Option pool increase: collect new pool size as % of post-financing fully diluted shares
   - SAFE/note conversion: apply discount rate or valuation cap (whichever yields more shares to investor), then convert principal + accrued interest to shares at resulting price per share

3. **Calculate new share issuance**
   - New priced round: `new_shares = investment_amount / price_per_share` where `price_per_share = pre_money_valuation / pre_financing_fully_diluted_shares`
   - Option pool shuffle (if pre-money): increase pool before pricing the round so dilution hits existing holders; compute additional shares needed to reach target pool %
   - Convertible instruments: resolve each instrument individually before computing round price if they convert in this round

4. **Recompute post-financing ownership**
   - `post_fully_diluted_shares = pre_financing_shares + option_pool_increase + converted_instrument_shares + new_round_shares`
   - For each stakeholder: `new_ownership_% = stakeholder_shares / post_fully_diluted_shares * 100`

5. **Compute dilution impact**
   - `dilution_% = pre_ownership_% - post_ownership_%`
   - `dilution_factor = post_ownership_% / pre_ownership_%` (e.g., 0.80 = 20% diluted)

6. **Flag edge cases**
   - Anti-dilution provisions (broad-based weighted average vs. full ratchet)
   - Pro-rata rights that let existing investors maintain ownership
   - Pay-to-play clauses that convert non-participating preferred to common

## Output Format

Produce the following in order:

**1. Assumptions Summary** (bullet list)
- Pre-money valuation, investment amount, pre-financing share count, option pool target, any converting instruments with terms

**2. Pre-Financing Cap Table** (table)
| Stakeholder | Share Class | Shares | Ownership % |

**3. New Share Issuance Breakdown** (table)
| Event | Shares Issued | Notes |

**4. Post-Financing Cap Table** (table)
| Stakeholder | Share Class | Shares | Ownership % | Dilution (pp) |

**5. Key Metrics** (bullet list)
- Post-money valuation
- Price per share
- Effective pre-money per converting instrument (if applicable)
- Total dilution absorbed by founders vs. existing investors

**6. Plain-English Summary** (2–4 sentences)
Explain who got diluted, by how much, and why—written for a founder without a finance background.

If any required inputs are missing, list exactly what data is needed before proceeding rather than assuming values.
