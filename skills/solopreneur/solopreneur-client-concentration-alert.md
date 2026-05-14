---
name: solopreneur-client-concentration-alert
description: >
  Analyzes revenue distribution across clients and flags dangerous over-reliance on any single client or small group of clients. Use when someone shares their client revenue breakdown, worries about losing a big client, asks if their client mix is healthy, wants to know if they're too dependent on one customer, or is thinking about how to diversify their income. Delivers a concentration risk score, clear warnings, and concrete diversification action steps.
category: solopreneur
tags: [revenue, risk-management, client-diversification, business-health, solopreneur]
author: community
---

# Client Concentration Risk Analyzer

Calculates revenue concentration across a solopreneur's client base, flags dangerous dependency thresholds, and produces a prioritized action plan to reduce single-client risk.

## Analysis Workflow

### Step 1: Gather Revenue Data
Ask the user to provide (or confirm existing):
- List of all active clients
- Monthly or annual revenue from each client
- Total revenue across all clients
- Contract status for top clients (month-to-month, annual, multi-year)

If exact figures aren't available, work with percentages or estimates and note the assumption.

### Step 2: Calculate Concentration Metrics
For each client, calculate their revenue share as a percentage of total revenue.

Apply these thresholds:
- **Critical risk**: Any single client > 50% of revenue
- **High risk**: Any single client 30–50% of revenue
- **Moderate risk**: Any single client 20–30% of revenue
- **Healthy**: No single client > 20% of revenue

Also calculate:
- **Top-2 concentration**: Combined share of the two largest clients (flag if > 60%)
- **Top-3 concentration**: Combined share of the three largest clients (flag if > 75%)
- **HHI score** (Herfindahl-Hirschman Index): Sum of squared percentages. Score > 2500 = high concentration; 1500–2500 = moderate; < 1500 = healthy

### Step 3: Assess Compounding Risk Factors
For each high-concentration client, note any of these multipliers:
- Month-to-month contract (no guaranteed future revenue)
- Single point of contact at the client (key person dependency)
- Client is in a volatile industry
- Revenue from this client has been declining
- No signed contract at all

Each factor increases urgency of the warning.

### Step 4: Generate Action Steps
Based on concentration level, prescribe specific actions:

**Critical (>50% single client):**
1. Immediately cap new work accepted from this client to avoid deepening dependency
2. Set a 90-day goal to sign at least 2 new clients
3. Identify and outreach to 10 prospects this week
4. Raise rates with the concentrated client at next contract renewal to reduce hours while maintaining revenue

**High (30–50%):**
1. Launch active outreach to 5–7 prospects within 30 days
2. Define a target: reduce top client to <30% within 6 months
3. Consider productizing one service to sell to multiple smaller clients simultaneously
4. Ask current secondary clients for referrals or expanded scope

**Moderate (20–30%):**
1. Maintain consistent pipeline activity (1–2 outreach contacts per week)
2. Set a quarterly review checkpoint to check concentration hasn't crept up
3. Explore retainer agreements with mid-tier clients to stabilize their share

**Healthy (<20% per client):**
1. Document what's working in business development and systematize it
2. Monitor annually or when any client relationship changes significantly

## Output Format

Produce a structured report with these exact sections:

**CLIENT CONCENTRATION REPORT**

| Client | Revenue | Share % | Risk Level |
|--------|---------|---------|------------|
| [name] | [amount] | [%] | [Critical/High/Moderate/Healthy] |

**Concentration Summary**
- Top client share: X%
- Top-2 combined: X%
- Top-3 combined: X%
- HHI Score: XXXX ([High/Moderate/Healthy])
- Overall Risk Rating: [Critical / High / Moderate / Healthy]

**Risk Flags**
Bullet list of specific warnings (e.g., "Client A represents 62% of revenue on a month-to-month
