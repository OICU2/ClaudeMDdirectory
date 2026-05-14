---
name: economic-nexus-threshold-tracker
description: >
  Monitors cumulative sales revenue and transaction counts per state to identify when a business crosses economic nexus thresholds that trigger mandatory sales tax registration. Use when someone asks about sales tax obligations by state, wants to know if they need to register for sales tax, is tracking nexus exposure across multiple states, or needs to understand which states require tax registration based on their revenue. Also activates when someone mentions crossing a sales threshold or hitting nexus limits.
category: finance
tags: [sales-tax, nexus, compliance, state-tax, ecommerce]
author: community
---

# Economic Nexus Threshold Tracker

This skill analyzes sales volume and transaction data by state to flag when a business crosses economic nexus thresholds, triggering sales tax registration obligations under each state's current rules.

## Core Workflow

### Step 1: Collect Sales Data
Request the following inputs from the user:
- Sales revenue per state (current calendar or fiscal year)
- Transaction count per state (if available)
- Business type (physical goods, digital goods, services, or mixed)
- Time period covered
- Any states where the business already has physical presence (creates automatic nexus)

### Step 2: Apply State Thresholds
Compare provided data against each relevant state's economic nexus thresholds. Use these standard rules:

**Most Common Threshold (40+ states):**
- $100,000 in sales revenue OR 200 transactions in the state in the current or prior calendar year

**Notable Exceptions:**
- **California:** $500,000 revenue only (no transaction count threshold)
- **New York:** $500,000 revenue AND 100 transactions
- **Texas:** $500,000 revenue only
- **Kansas:** No threshold — any remote sale creates nexus (as of 2022)
- **Missouri:** $100,000 revenue only (no transaction threshold)
- **Pennsylvania:** $100,000 revenue only
- **Tennessee:** $100,000 revenue only (marketplace facilitators may differ)
- **Puerto Rico:** $100,000 revenue or 200 transactions

**States with No Sales Tax (no nexus obligation):**
- Alaska (no statewide tax; some local jurisdictions have home-rule taxes)
- Delaware
- Montana
- New Hampshire
- Oregon

### Step 3: Flag Threshold Status
For each state with sales activity, categorize status as:

- 🔴 **CROSSED** — Threshold already exceeded; registration required immediately
- 🟡 **APPROACHING** — Within 20% of threshold on revenue OR within 40 transactions of count threshold
- 🟢 **SAFE** — Well below threshold
- ⚫ **EXEMPT** — No sales tax obligation in this state

### Step 4: Calculate Proximity Metrics
For APPROACHING states, calculate:
- Dollar amount remaining before revenue threshold is crossed
- Transaction count remaining before count threshold is crossed
- Estimated date threshold will be crossed based on current run rate (if monthly data is provided)

### Step 5: Prioritize Action Items
Rank CROSSED states by:
1. Magnitude of threshold exceedance (most over first)
2. Time elapsed since threshold was crossed (longest exposure first)
3. States with highest ongoing sales volume (greatest future liability)

### Step 6: Identify Registration Deadlines
Note that most states require registration:
- Before making the next sale after crossing the threshold, OR
- Within 30 days of crossing (varies by state)

Flag any retroactive liability risk if the threshold was crossed in a prior period.

## Output Format

Produce a structured report with the following sections:

---

### Economic Nexus Status Report
**Period:** [Date range analyzed]
**Business Type:** [Type]

---

#### 🔴 Action Required — Register Now
| State | Revenue | Threshold | Over By | Transactions | Transaction Threshold | Status |
|-------|---------|-----------|---------|--------------|----------------------|--------|
| [State] | $X | $X | $X | X | X or N/A | Crossed [date if known] |

**Immediate next steps for each state listed above.**

---

#### 🟡 Watch List — Approaching Threshold
| State | Revenue | Threshold | Remaining | Transactions | Remaining | Est. Crossing Date |
|-------|---------|-----------|-----------|--------------|-----------|-------------------|
| [State] | $X | $
