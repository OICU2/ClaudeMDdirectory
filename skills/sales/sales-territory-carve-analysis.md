---
name: sales-territory-carve-analysis
description: >
  Evaluates territory boundaries, account distribution, and revenue potential to recommend balanced territory assignments across a sales team. Use when someone says "our territories feel unbalanced," asks about splitting or merging territories, wants to realign accounts across reps, needs to onboard a new rep and redistribute accounts, or is concerned that some reps have too many or too few accounts.
category: sales
tags: [territory-planning, account-distribution, sales-ops, revenue-analysis, team-alignment]
author: community
---

# Sales Territory Carve Analysis

This skill analyzes existing territory structures and account data to produce balanced, revenue-fair territory recommendations when sales leaders need to restructure or validate rep assignments.

## Analysis Workflow

### 1. Gather Inputs
Request the following data if not already provided:
- Current rep list with names, regions, or geo assignments
- Account list with: account name, current owner, annual revenue or ARR, industry vertical, and location (city/state or zip)
- Number of target territories or reps to plan for
- Any hard constraints (named accounts, strategic accounts that must stay with specific reps, geographic boundaries that cannot be crossed)

### 2. Baseline the Current State
- Calculate total addressable revenue across all accounts
- Count total accounts and segment by size tier (e.g., Enterprise >$500K, Mid-Market $100K–$500K, SMB <$100K)
- Map current distribution: accounts per rep, revenue per rep, segment mix per rep
- Flag imbalances: reps with >20% above or below average revenue load, reps with heavily skewed segment mix, geographic overlaps or gaps

### 3. Define Carve Principles
Apply these rules in order of priority:
1. Revenue equity — each territory should fall within ±15% of average territory revenue
2. Account count equity — each territory should fall within ±20% of average account count
3. Segment balance — each rep should carry a proportional mix of Enterprise, Mid-Market, and SMB accounts unless specialization is intentional
4. Geographic coherence — minimize rep travel burden by clustering contiguous regions
5. Respect hard constraints (named accounts, existing strategic relationships)

### 4. Generate Territory Recommendations
- Propose specific account-to-rep assignments for each territory
- Show before/after comparison for each rep: account count, total revenue, segment breakdown
- Identify accounts being moved and flag any with active deals or high churn risk as "handle with care"
- If geographic data is available, describe each territory boundary in plain language (e.g., "Pacific Northwest: WA, OR, ID, MT")

### 5. Highlight Trade-offs
- Note any territories where perfect balance required sacrificing geographic coherence
- Flag accounts where relationship disruption risk is high
- Identify whitespace or uncovered accounts if total accounts exceed rep capacity (assume 150 accounts max per rep for SMB-heavy books, 40 accounts max for Enterprise-heavy books)

## Output Format

Produce a structured territory carve report with the following sections:

**Summary Table** — one row per rep showing:
| Rep Name | Territory Label | # Accounts | Total Revenue | Enterprise | Mid-Market | SMB | Delta vs. Avg Revenue |

**Territory Detail Blocks** — for each rep:
- Territory name and geographic scope (if applicable)
- Full account list with account name, size tier, and revenue
- Accounts moved in / moved out vs. current state
- Any flagged accounts (active deals, churn risk, strategic relationships)

**Balance Scorecard** — 3–5 bullet points summarizing how well the proposed carve meets the equity principles

**Recommended Next Steps** — 2–4 actions, such as rep notification sequencing, CRM update timing, or accounts needing relationship transition calls

Length: Scale with data volume. For teams of 5 or fewer reps, full detail is appropriate. For 10+ reps, provide the summary table and flag outliers; offer to drill into specific territories on request.
