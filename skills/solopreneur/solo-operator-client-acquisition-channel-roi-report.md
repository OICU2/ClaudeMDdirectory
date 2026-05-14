---
name: solo-operator-client-acquisition-channel-roi-report
description: >
  Analyzes time and money invested across client acquisition channels to surface which sources deliver the highest-value clients at the lowest total cost. Use when someone says "I don't know which marketing channels are worth it," asks about where their best clients come from, wants to stop wasting money on client acquisition, is trying to figure out which lead sources to cut or double down on, or needs to understand their true cost per client by channel.
category: solopreneur
tags: [client-acquisition, roi-analysis, marketing-channels, solopreneur, lead-generation]
author: community
---

# Client Acquisition Channel ROI Report

This skill builds a channel-by-channel ROI breakdown showing exactly where a solo operator's best clients come from, what each channel truly costs in time and money, and which channels to cut, maintain, or scale.

## Data Gathering

Ask the user to provide the following for each acquisition channel they use (e.g., referrals, LinkedIn, cold email, paid ads, content/SEO, networking events, directories):

1. **Channels used** — List every channel they've tried in the past 6–12 months
2. **Monthly time investment** — Hours per month spent on each channel (creating content, attending events, following up, etc.)
3. **Monthly cash spend** — Direct costs per channel (ad spend, event tickets, tools, subscriptions)
4. **Leads generated** — Number of qualified leads per channel over the period
5. **Clients closed** — How many leads from each channel converted to paying clients
6. **Average client value** — Either first project value or LTV if known
7. **Hourly rate** — Their effective or target hourly rate (used to monetize time cost)

If the user can't provide exact numbers, ask for honest estimates and note them as approximate.

## Analysis Steps

1. **Calculate total cost per channel**
   - Time cost = hours/month × hourly rate × months in period
   - Cash cost = monthly spend × months in period
   - Total cost = time cost + cash cost

2. **Calculate conversion rate per channel**
   - Lead-to-client rate = clients closed ÷ leads generated

3. **Calculate cost per client acquired**
   - Cost per client = total cost ÷ clients closed

4. **Calculate revenue generated per channel**
   - Revenue = clients closed × average client value

5. **Calculate ROI per channel**
   - ROI = (revenue − total cost) ÷ total cost × 100

6. **Calculate time efficiency**
   - Revenue per hour invested = revenue ÷ total hours invested

7. **Rank channels** by ROI, then by revenue per hour as a tiebreaker

8. **Identify patterns**
   - Which channel has the lowest cost per client?
   - Which has the highest-value clients (not just most clients)?
   - Which consumes the most time relative to return?
   - Which channels are cash traps (high spend, low ROI)?

## Recommendations

Based on the analysis, produce three clear directives:

- **Cut or pause** — Channels with negative or sub-20% ROI and high time/cash cost
- **Maintain or optimize** — Channels with moderate ROI that could improve with small changes
- **Double down** — Channels with highest ROI and revenue per hour; recommend specific ways to scale them

Flag any channel where the user is spending significant time but has zero or near-zero client attribution — this is often the biggest hidden drain.

## Output Format

Produce a structured report with these sections:

---

**Client Acquisition Channel ROI Report**
*Period analyzed: [X months] | Hourly rate used: $[X]*

**Channel Summary Table**

| Channel | Total Cost | Clients Closed | Cost per Client | Revenue Generated | ROI % | Rev/Hour |
|---|---|---|---|---|---|---|
| [Channel 1] | $X | X | $X | $X | X% | $X |
| [Channel 2] | ... | | | | | |

*Sorted highest to lowest ROI*

**Top Performer:** [Channel name] — [1-sentence reason why]

**Biggest Drain:** [Channel name] — [1-sentence reason why]

**Key Insight:** [2–3 sentences identifying the single most important pattern in the data — e.g., "80% of your revenue comes from
