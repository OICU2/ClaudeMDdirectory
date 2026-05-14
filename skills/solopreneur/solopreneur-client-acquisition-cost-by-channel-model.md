---
name: solopreneur-client-acquisition-cost-by-channel-model
description: >
  Calculates the true cost of acquiring each client broken down by outreach channel so a solo operator knows where to focus prospecting effort. Use when someone says "I don't know which channel brings in clients most cheaply," asks about where their marketing spend is actually going, or wants to figure out if cold outreach or referrals is worth the effort. Also activates when someone wants to compare lead generation costs across channels or says their client acquisition feels expensive but can't pinpoint why.
category: solopreneur
tags: [client-acquisition, CAC, channel-analysis, solopreneur, prospecting]
author: community
---

# Client Acquisition Cost by Channel Model

This skill builds a per-channel cost breakdown showing exactly what each new client costs to acquire across every outreach method a solopreneur uses, so they can cut losing channels and double down on winners.

## Data Collection

Ask the user to provide (or estimate) the following for each channel they use (e.g., cold email, LinkedIn DMs, referrals, paid ads, content/SEO, networking events, partnerships):

1. **Time invested per month** — hours spent on outreach, follow-up, content creation, and admin for that channel
2. **Hard costs per month** — tools, ad spend, event tickets, subscription fees tied to that channel
3. **Leads generated per month** — number of prospects who expressed interest
4. **Clients closed per month** — number who actually paid
5. **Average contract value (ACV)** — revenue per client (use a single blended number if it varies)

If the user doesn't track this, prompt them to estimate based on the last 90 days and round liberally — rough numbers are better than no numbers.

## Calculation Steps

For each channel, compute:

1. **Hourly rate equivalent** — Ask the user their effective hourly rate or target rate (default to $100/hr if unsure)
2. **Time cost** = hours/month × hourly rate
3. **Total channel cost** = time cost + hard costs
4. **Lead-to-client conversion rate** = clients closed ÷ leads generated
5. **CAC (Client Acquisition Cost)** = total channel cost ÷ clients closed
6. **CAC-to-ACV ratio** = CAC ÷ ACV (expressed as a percentage; under 20% is healthy, over 50% is a warning sign)
7. **Payback period** = CAC ÷ (ACV ÷ 12) in months (assumes one-time or monthly retainer math)

## Analysis Rules

- Flag any channel where CAC > 50% of ACV as **"Drain"**
- Flag any channel where CAC is between 20–50% of ACV as **"Watch"**
- Flag any channel where CAC < 20% of ACV as **"Scale"**
- If a channel has zero closed clients, mark CAC as "∞ — no conversions yet" and note minimum trial period needed before cutting it
- Highlight the single lowest-CAC channel as the **Primary Focus Channel**
- If time cost exceeds 80% of total channel cost, flag it as a **Time Trap** — automation or delegation should be explored

## Output Format

Produce a structured table followed by a short action summary:

**Channel CAC Breakdown Table**

| Channel | Monthly Cost (Time + Hard) | Leads | Clients | CAC | ACV | CAC/ACV % | Status |
|---|---|---|---|---|---|---|---|
| [Channel name] | $X | X | X | $X | $X | X% | Scale / Watch / Drain |

*(One row per channel)*

**Summary section (4–6 bullet points):**
- Best-performing channel and why
- Worst-performing channel and recommended action (cut, pause, or restructure)
- Total blended CAC across all channels
- One specific reallocation recommendation (e.g., "Move 3 hrs/week from LinkedIn to referral follow-up")
- If total monthly acquisition spend exceeds 30% of monthly revenue, flag as unsustainable and suggest a threshold target

Keep the table clean and the summary punchy. No filler sentences. If data is incomplete, show the table with available data and note what inputs would sharpen the numbers.
