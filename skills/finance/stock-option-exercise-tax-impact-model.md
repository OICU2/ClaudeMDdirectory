---
name: stock-option-exercise-tax-impact-model
description: >
  Models estimated tax liability for employees exercising stock options across different timing and holding period scenarios. Use when someone asks about the tax impact of exercising stock options, wants to know when to exercise employee stock options, is deciding between ISO and NSO exercise strategies, needs to understand AMT exposure from incentive stock options, or wants to compare tax outcomes across different exercise and sale timing combinations.
category: finance
tags: [stock-options, tax-planning, equity-compensation, ISO, NSO, AMT]
author: community
---

# Stock Option Exercise Tax Impact Model

This skill builds a structured tax liability model for stock option exercises, comparing after-tax outcomes across multiple exercise timing and holding period scenarios so employees can make informed decisions about when and how to exercise.

## Modeling Workflow

1. **Gather inputs** — Collect: option type (ISO or NSO/NQ), number of options, strike price, current FMV, anticipated sale price (if known), grant date, vesting schedule, and the employee's estimated federal/state tax bracket.

2. **Identify relevant scenarios** — Model at least four scenarios:
   - Exercise and immediate sale (same-day cashless)
   - Exercise and hold for short-term capital gain (held < 12 months before sale)
   - Exercise and hold for long-term capital gain (held ≥ 12 months after exercise AND ≥ 2 years after grant for ISOs)
   - Early exercise (83(b) election scenario, if pre-vesting exercise is allowed)

3. **Calculate per-scenario tax components**:
   - **NSOs**: Spread at exercise (FMV − strike) is ordinary income; apply federal income tax rate + applicable state rate + FICA (if not already maxed). Subsequent gain taxed at short- or long-term capital gains rate.
   - **ISOs — regular tax**: No ordinary income at exercise. Full gain taxed as long-term capital gain if qualifying disposition requirements are met. Disqualifying disposition triggers ordinary income on the spread.
   - **ISOs — AMT**: Compute AMT preference item (spread at exercise × 28% AMT rate after exemption phase-out). Flag if projected AMT liability exceeds regular tax liability.
   - **83(b) elections**: Tax ordinary income on FMV at early exercise date; zero spread if exercised at FMV. Lock in capital gain holding period clock from exercise date.

4. **Compute net proceeds per scenario**:
   - Gross proceeds = shares × sale price
   - Minus: total tax liability (federal + state + FICA where applicable)
   - Minus: exercise cost (shares × strike price)
   - Net after-tax proceeds = result

5. **Flag key risks and decision factors**:
   - AMT crossover point (the FMV at which ISO exercise triggers net AMT liability)
   - Concentration risk if holding post-exercise
   - Cash-flow requirement for exercise cost + tax withholding
   - Blackout periods, expiration dates, and company liquidity events

6. **State assumptions explicitly** — List assumed tax rates, filing status, no other AMT preference items, and that state rates vary. Note this is an estimate, not tax advice.

## Output Format

Produce a structured response with the following sections:

**1. Input Summary Table** — One-line recap of options, strike, FMV, option type, and assumed tax rates.

**2. Scenario Comparison Table** — Markdown table with columns: Scenario | Exercise Tax | Sale Tax | AMT Impact | Total Tax | Net Proceeds. One row per scenario.

**3. AMT Analysis** (ISO only) — Short paragraph stating the AMT preference item amount, estimated AMT liability, and whether it exceeds regular tax. Include the break-even FMV threshold if relevant.

**4. Recommended Considerations** — Bullet list (4–6 bullets) of key decision factors based on the numbers: e.g., which scenario maximizes after-tax proceeds, cash needed upfront, holding period risk/reward, expiration urgency.

**5. Assumptions & Disclaimers** — Bulleted list of all assumed rates and a one-line note that output is educational modeling, not professional tax advice.

Total length: 400–700 words. Use markdown tables and headers. Keep numbers precise to two decimal places.
