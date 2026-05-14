---
name: survey-response-rate-risk-predictor
description: >
  Estimates the likelihood of achieving a target response rate based on audience type, survey length, and incentive level, then recommends concrete mitigation tactics. Use when someone asks "will people actually respond to this survey," wants to know if their response rate goal is realistic, or is planning a survey and worried about low participation. Also triggers when someone mentions struggling with survey completion rates or needs to justify a sample size plan.
category: research
tags: [survey, research-design, response-rate, risk-assessment, sampling]
author: community
---

# Survey Response Rate Risk Predictor

This skill evaluates the realistic probability of hitting a target response rate given audience, length, and incentive factors, then produces a risk rating and prioritized mitigation tactics.

## Assessment Workflow

1. **Collect inputs** — If not already provided, ask for:
   - Audience type (general public, customers, employees, professionals, students, cold outreach)
   - Survey length (number of questions or estimated completion time in minutes)
   - Incentive level (none, token/raffle, moderate cash/gift card $10–$25, high value >$25)
   - Delivery channel (email, SMS, in-app, phone, intercept)
   - Relationship to respondents (warm list, cold list, captive audience, panel)
   - Target response rate (%) and required sample size

2. **Apply baseline benchmarks** — Use these evidence-based starting points:
   - General public cold outreach: 5–10% baseline
   - Customer email list (warm): 15–30%
   - Employee surveys (internal): 25–60%
   - Professional panels (paid): 20–40%
   - In-app or intercept: 10–25%

3. **Apply adjustment multipliers** for each factor:
   - **Length penalties**: <5 min = no penalty; 5–10 min = −5pp; 10–20 min = −10–15pp; >20 min = −20pp or more
   - **Incentive boosts**: None = 0; token/raffle = +2–5pp; moderate ($10–$25) = +5–15pp; high (>$25) = +15–25pp
   - **Channel modifiers**: SMS = +5–10pp vs email; phone = variable; in-app (engaged users) = +10pp
   - **Relationship modifier**: Cold list = −10pp; warm/loyal = +10pp; captive (employees, class) = +15pp

4. **Calculate adjusted rate range** — Combine baseline + all modifiers to produce a low/mid/high estimate.

5. **Assess risk level**:
   - **Low risk**: Adjusted mid estimate exceeds target by ≥10pp
   - **Medium risk**: Adjusted mid estimate is within 10pp of target (above or below)
   - **High risk**: Adjusted mid estimate falls more than 10pp below target
   - **Critical risk**: Even the high estimate does not reach the target

6. **Generate mitigation tactics** ranked by impact-to-effort ratio:
   - If length is the main penalty: recommend trimming questions, using skip logic, or splitting into waves
   - If incentive is low: recommend specific incentive structures appropriate to audience
   - If channel is suboptimal: suggest alternative or multi-channel approach
   - If list is cold: recommend pre-notification emails, social proof messaging, or list warming
   - If sample math doesn't work: recommend oversampling targets or extending field period
   - Always include: personalized subject lines, mobile optimization check, optimal send timing, reminder cadence (1–2 reminders, not more)

## Output Format

Produce a structured report with these sections:

**Risk Summary**
- Risk Level: [Low / Medium / High / Critical] with a one-line rationale
- Projected Response Rate: [X%–Y%] range (low / mid / high estimate)
- Target Response Rate: [user's target]
- Gap to Target: [+/− pp]

**Key Risk Factors**
Bullet list of the 2–4 factors most suppressing response rate, each with the estimated pp impact.

**Mitigation Tactics** (ordered highest to lowest impact)
Numbered list of 4–6 specific, actionable tactics. Each tactic includes: what to do, why it helps, and estimated pp gain if
