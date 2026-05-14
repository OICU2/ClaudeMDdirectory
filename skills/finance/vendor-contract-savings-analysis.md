---
name: vendor-contract-savings-analysis
description: >
  Compares current vendor contract terms against market benchmarks and renewal alternatives to surface actionable cost reduction opportunities. Use when someone says "we're renewing a vendor contract," asks about "reducing software or supplier costs," wants to "audit what we're paying vendors," mentions "contract negotiation coming up," or needs to "benchmark our vendor pricing." Produces a structured savings analysis with concrete negotiation recommendations.
category: finance
tags: [vendor-management, cost-reduction, contract-negotiation, procurement, benchmarking]
author: community
---

# Vendor Contract Savings Analysis

This skill analyzes vendor contract terms, benchmarks them against market rates and alternatives, and delivers prioritized cost reduction opportunities with specific negotiation tactics Claude will apply whenever someone needs to evaluate or renegotiate vendor spending.

## Analysis Workflow

**Step 1 — Gather Contract Inputs**
Ask the user to provide (or estimate) for each vendor:
- Current annual spend and contract end date
- Key terms: payment schedule, auto-renewal clause, SLA penalties, volume commitments, and exit clauses
- Vendor category (SaaS, infrastructure, professional services, supplies, logistics, etc.)
- Satisfaction level and switching friction (low / medium / high)

**Step 2 — Apply Market Benchmarking**
For each vendor, assess pricing against known benchmarks:
- SaaS tools: benchmark per-seat cost against category averages (e.g., CRM, HR, project management tiers)
- Infrastructure/cloud: compare against published list prices and known discount thresholds (10–30% off list is standard at volume)
- Professional services: benchmark hourly/project rates against industry surveys by region and specialization
- Supplies/logistics: flag if unit pricing hasn't been renegotiated in 18+ months as a default risk signal
- Flag any contract where spend exceeds $10K/year with no renegotiation in the past 24 months as a priority target

**Step 3 — Identify Savings Levers**
For each vendor, evaluate these specific levers:
- **Volume consolidation**: Can usage be consolidated to hit a higher discount tier?
- **Prepayment discount**: Does paying annually vs. monthly yield 10–20% savings?
- **Competitive bid pressure**: Is there a credible alternative vendor that can be named in negotiation?
- **Scope right-sizing**: Are unused seats, features, or service tiers being paid for?
- **Term extension trade**: Would the vendor accept a lower rate in exchange for a longer commitment?
- **Auto-renewal leverage**: Is an upcoming auto-renewal date a negotiation deadline to exploit?
- **Bundle negotiation**: Are multiple contracts with the same vendor that could be consolidated for a bundle discount?

**Step 4 — Score and Prioritize**
Rank each vendor opportunity by a simple Priority Score:
- High: savings potential >15% AND switching friction is low or a renewal is within 90 days
- Medium: savings potential 5–15% OR renewal within 6 months
- Low: savings potential <5% AND high switching friction

**Step 5 — Draft Negotiation Talking Points**
For each High and Medium priority vendor, generate 2–3 specific, ready-to-use negotiation statements the user can deploy in calls or emails.

## Output Format

Produce a structured report with the following sections:

---

**Vendor Contract Savings Analysis**
*Analysis date | Total vendors reviewed | Estimated total annual spend*

---

**Executive Summary**
- Total identified savings opportunity: $X–$Y (low/high estimate)
- Number of High-priority vendors: N
- Recommended immediate actions (top 3 bullets)

---

**Vendor-by-Vendor Breakdown**
For each vendor, a table row or card containing:
| Vendor | Annual Spend | Contract End | Priority | Savings Lever | Est. Savings | Negotiation Talking Point |

---

**Negotiation Scripts**
For each High/Medium vendor, 2–3 bullet-point statements ready to use verbatim:
- *"We've benchmarked your pricing against [Competitor X] and are seeing rates approximately 20% lower for equivalent functionality. We'd like to discuss aligning our renewal to market rate before we finalize."*

---

**Quick Wins (Action in Next 30 Days)**
Bulleted list of the 3–5 actions the user can take immediately, each with
