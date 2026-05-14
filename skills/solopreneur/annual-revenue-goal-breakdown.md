---
name: annual-revenue-goal-breakdown
description: >
  Reverse-engineers an annual income target into a concrete operating plan with client slots, pricing tiers, and weekly sales benchmarks. Use when someone says "I want to make $X this year," asks how many clients they need to hit their income goal, or wants to figure out what to charge based on a revenue target. Also activates when someone is planning their solopreneur business model or trying to back-calculate offers from a desired salary.
category: solopreneur
tags: [revenue-planning, pricing, client-capacity, sales-benchmarks, business-model]
author: community
---

# Annual Revenue Goal Breakdown

Converts a solopreneur's annual income target into a month-by-month operating model with required client slots, pricing structure, and minimum sales activity to hit the number.

## Revenue Breakdown Workflow

### Step 1: Establish the Real Target
- Ask for gross annual revenue goal (or net take-home if that's what they stated)
- If they gave net/take-home, gross it up: divide by 0.65 to account for ~20% taxes and ~15% business expenses (adjust if they provide actuals)
- Confirm whether the number includes their own salary or is pure business revenue

### Step 2: Define the Offer Structure
- Ask what service(s) they sell or intend to sell
- Identify delivery model: 1:1 retainer, project-based, productized service, cohort, or hybrid
- If they have no pricing yet, propose 3 tiers based on market norms for their category:
  - **Entry**: lower-touch, lower price
  - **Core**: primary offer, best margin
  - **Premium**: high-touch, highest price
- Assign placeholder prices if they can't decide; label them clearly as assumptions

### Step 3: Calculate Client Capacity
- Establish available working hours per week (default: 40h if not stated)
- Subtract estimated admin/marketing hours (default: 10h/week)
- Divide remaining hours by estimated hours-per-client-per-month to get max active client slots
- Flag if the revenue math requires more clients than capacity allows — that's a pricing problem, not a sales problem

### Step 4: Build the Monthly Model
For each offer tier, calculate:
- **Clients needed at that price** to hit annual goal alone
- **Blended scenario**: realistic mix across tiers that hits the goal
- **Monthly recurring revenue (MRR) needed** = Annual goal ÷ 12
- **One-time project equivalent** if they sell projects, not retainers

### Step 5: Set Sales Activity Benchmarks
Work backward from close rate assumptions:
- Default assumptions (state these explicitly): 20% close rate on discovery calls, 10% conversion from cold outreach to booked call
- Calculate: discovery calls needed per month → outreach touchpoints needed per week
- Output a weekly minimum activity number: e.g., "You need 3 discovery calls/month, which means 15 qualified conversations started per month, or roughly 4 per week"
- If they know their actual close rate, replace the defaults

### Step 6: Identify the Constraint
Explicitly name the bottleneck:
- **Pricing constraint**: capacity math works but revenue doesn't → raise prices
- **Volume constraint**: price is fine but not enough leads → fix top-of-funnel
- **Capacity constraint**: revenue math requires more hours than available → add leverage (group offers, productize, hire)

## Output Format

Produce a structured breakdown with these sections:

**1. Your Real Revenue Target**
- Stated goal, grossed-up goal (if applicable), and assumptions used

**2. Offer + Pricing Structure**
| Offer | Price | Delivery | Hours/Client/Mo |
|-------|-------|----------|-----------------|
| [Entry] | $X | [format] | [Xh] |
| [Core] | $X | [format] | [Xh] |
| [Premium] | $X | [format] | [Xh] |

**3. Client Slots Required**
- Max capacity: X active clients
- Clients needed (by scenario): solo Core offer / blended mix / solo Premium
- Recommended mix with rationale

**4. Monthly Revenue Model**
- MRR target: $X
- Breakdown: X Core clients ($X) + X Premium clients ($X)
