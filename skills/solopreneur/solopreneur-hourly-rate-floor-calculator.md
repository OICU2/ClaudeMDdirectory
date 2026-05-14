---
name: solopreneur-hourly-rate-floor-calculator
description: >
  Calculates the minimum viable hourly rate a solo operator must charge to cover taxes, overhead, and reach their target take-home income. Use when someone asks "what should I charge per hour," wants to figure out their minimum billable rate, is worried they're undercharging clients, needs to set a freelance rate from scratch, or says they don't know how to price their time.
category: solopreneur
tags: [pricing, freelance, hourly-rate, income-planning, solopreneur]
author: community
---

# Solopreneur Hourly Rate Floor Calculator

Computes the absolute minimum hourly rate a solo operator must charge to hit their income goal after taxes and business costs, and activates whenever someone needs help setting or validating their freelance or consulting rate.

## Calculation Workflow

### Step 1 — Gather Inputs
Ask the user for the following if not already provided. Provide sensible defaults where noted:

- **Annual take-home income target** (net, after taxes — what they want in their pocket)
- **Billable hours per week** (default: 20 hours — realistic after admin, marketing, and unpaid work)
- **Weeks worked per year** (default: 48 — accounts for vacation, sick days, holidays)
- **Self-employment / income tax rate** (default: 30% combined federal + self-employment for US solopreneurs)
- **Annual overhead costs** (software, equipment, insurance, accountant, coworking, etc. — default: $5,000)

If the user is vague, use defaults and state them explicitly.

### Step 2 — Run the Calculation

1. **Gross income needed before tax:**
   `Gross = Take-home target ÷ (1 − Tax rate)`

2. **Total revenue needed (gross + overhead):**
   `Total Revenue = Gross + Annual Overhead`

3. **Total billable hours per year:**
   `Billable Hours = Hours per week × Weeks per year`

4. **Minimum hourly rate floor:**
   `Rate Floor = Total Revenue ÷ Billable Hours`

5. **Recommended rate (add 20% buffer for scope creep, discounts, and dry spells):**
   `Recommended Rate = Rate Floor × 1.20`

### Step 3 — Sense-Check and Annotate
- Flag if billable hours exceed 25/week (burnout risk for solopreneurs)
- Flag if the rate floor seems low relative to the user's stated industry (e.g., under $50/hr for knowledge work)
- Note if tax rate assumption differs significantly from the user's country or situation
- Remind user this is a *floor*, not a ceiling — market rates, expertise, and positioning can push rates much higher

### Step 4 — Offer Follow-On Calculations
Ask if they want:
- A project minimum (rate × estimated hours)
- A retainer minimum (rate × fixed monthly hours)
- A comparison of what happens if they increase billable hours vs. raise their rate

## Output Format

Produce a clean, scannable summary with the following structure:

---

**Your Hourly Rate Floor**

| Input | Value |
|---|---|
| Take-home target | $X,XXX |
| Tax rate | XX% |
| Annual overhead | $X,XXX |
| Billable hours/week | XX hrs |
| Weeks worked/year | XX wks |

**Calculation Results**

- Gross income needed: **$XX,XXX**
- Total revenue needed: **$XX,XXX**
- Total billable hours/year: **XXX hrs**
- ✅ Minimum rate floor: **$XX/hr**
- ⭐ Recommended rate (with buffer): **$XX/hr**

**What this means:**
[1–2 sentence plain-English interpretation — e.g., "Charging less than $85/hr means you will not hit your income goal, even if fully booked."]

**Watch out for:**
[Any flags triggered in Step 3, as a brief bulleted list]

---

Keep the output under 300 words. Use bold and table formatting. Do not pad with generic freelancing advice unless the user asks.
