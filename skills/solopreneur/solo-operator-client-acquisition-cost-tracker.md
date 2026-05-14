---
name: solo-operator-client-acquisition-cost-tracker
description: >
  Estimates the true cost to acquire each client by tallying time, tools, and ad spend across every lead source a solopreneur uses. Use when someone says "I don't know if my marketing is worth it," asks about how much it costs to get a new client, wants to figure out which lead source is most profitable, wonders if they're spending too much on ads relative to what they earn, or needs to understand their real client acquisition cost. Surfaces hidden time and tool costs most solopreneurs ignore.
category: solopreneur
tags: [client-acquisition, cac, marketing-roi, lead-generation, solopreneur-finances]
author: community
---

# Solo Operator Client Acquisition Cost Tracker

This skill calculates the true Cost to Acquire a Client (CAC) per lead source by combining ad spend, tool costs, and the dollar value of time spent — and uses it to rank which channels are actually worth keeping.

## Data Gathering Workflow

**Step 1 — Define the time period**
Ask the user to pick a window (last 30 days, last quarter, last 6 months). All inputs must cover the same period.

**Step 2 — Collect lead sources**
Ask them to list every channel where they got leads (e.g., Instagram DMs, cold email, referrals, Google Ads, LinkedIn, networking events, podcast appearances). One source at a time is fine.

**Step 3 — For each lead source, collect:**
- Number of leads generated
- Number of those leads that became paying clients
- Direct ad or platform spend ($)
- Tools used exclusively or partially for that channel (e.g., email software, scheduling tool, ad manager) — estimate monthly cost and what % of use goes to this channel
- Hours spent per week on this channel (outreach, content creation, follow-up, calls) × hourly rate (if unsure, use target hourly rate or $50/hr default, flagged as assumed)

**Step 4 — Calculate per lead source**

Use this formula:

```
Total Channel Cost = Ad Spend + (Tool Cost × Attribution %) + (Hours × Hourly Rate)
CAC = Total Channel Cost ÷ Number of Clients Acquired
Revenue Per Client = Average contract or project value
CAC-to-Revenue Ratio = CAC ÷ Revenue Per Client (lower is better; flag anything above 0.30 as a warning)
```

**Step 5 — Identify hidden costs**
Prompt the user to consider costs they may have skipped:
- Time spent on proposals or discovery calls that didn't convert
- Contractor or VA hours attributed to that channel
- Subscriptions they "share" across channels (CRM, Canva, Calendly)

Reallocate shared tool costs proportionally if the user can estimate usage split.

**Step 6 — Rank and interpret**
Sort channels by CAC (lowest to highest). Flag:
- Best performer: lowest CAC with meaningful client volume
- Worst performer: highest CAC or zero conversions despite spend/time
- High-volume trap: channel with many leads but low conversion (high hidden time cost)
- Referral baseline: if referrals are present, use their CAC as the benchmark for paid channels

## Output Format

Produce a structured report with these sections:

**1. Assumptions Summary**
Bullet list of any assumed values (hourly rate, tool attribution %) so the user can adjust them.

**2. CAC Breakdown Table**

| Lead Source | Clients | Ad Spend | Tool Cost | Time Cost | Total Cost | CAC | Avg Revenue | CAC Ratio |
|---|---|---|---|---|---|---|---|---|
| [source] | # | $ | $ | $ | $ | $ | $ | % |

**3. Channel Rankings**
Numbered list from best to worst CAC, with one plain-English sentence explaining each channel's performance.

**4. Red Flags**
Bullet list of any channels where CAC ratio exceeds 30%, zero clients were acquired, or time investment is disproportionately high.

**5. Recommended Actions**
3–5 specific, prioritized actions. Examples:
- "Pause [channel] — you spent $X and acquired 0 clients this quarter."
- "Double referral activity — your CAC is $Y versus $Z on paid ads."
- "Renegotiate
