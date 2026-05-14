---
name: multi-product-cross-sell-trigger-map
description: >
  Maps customer product usage milestones and behavioral signals to targeted cross-sell opportunities,
  generating a structured playbook for account expansion conversations. Use when someone says "we want
  to grow accounts beyond the initial sale," asks about "identifying the right moment to introduce
  new products," wants to "build a trigger-based expansion strategy," needs to "map usage signals to
  upsell offers," or is trying to "create a cross-sell playbook for customer success or sales teams."
category: sales
tags: [cross-sell, account-expansion, triggers, playbook, customer-success]
author: community
---

# Multi-Product Cross-Sell Trigger Map

This skill builds a trigger-based cross-sell playbook by mapping specific customer usage milestones and behavioral signals to targeted product offers and conversation starters for account expansion.

## Trigger Mapping Workflow

### Step 1: Collect Input
Ask the user to provide:
- **Products/services** in their portfolio (existing + cross-sell candidates)
- **Customer segments** (e.g., SMB, mid-market, enterprise, industry verticals)
- **Usage data signals** available (logins, feature adoption, volume thresholds, support tickets, NPS scores, contract milestones)
- **Sales motion** (CSM-led, AE-led, product-led, or hybrid)

If any input is missing, prompt for it before proceeding. Do not guess product names or signals.

### Step 2: Define Trigger Categories
For each product pairing (core product → cross-sell product), identify triggers across four categories:

**Usage Milestones**
- Threshold reached (e.g., "used 80% of seat licenses")
- Feature adoption depth (e.g., "activated 3+ core features")
- Frequency spike (e.g., "daily active users doubled in 30 days")

**Behavioral Signals**
- Support ticket patterns (e.g., "3+ tickets requesting functionality Product B covers")
- Feature request submissions related to cross-sell product
- Integration or API usage indicating workflow gaps

**Relationship Signals**
- Renewal within 90 days
- Executive sponsor change or champion promotion
- Expansion in headcount or new department onboarding

**Business Event Signals**
- Funding round, acquisition, or geographic expansion
- Seasonal volume increases
- Compliance or regulatory changes relevant to cross-sell product

### Step 3: Map Triggers to Offers
For each trigger identified:
1. Name the **trigger event** precisely
2. Assign a **urgency tier** (Hot = act within 7 days, Warm = act within 30 days, Nurture = act within 90 days)
3. Specify the **recommended cross-sell product or bundle**
4. Write a **conversation starter** — one natural opening line the rep or CSM can use
5. Define the **value bridge** — one sentence connecting the trigger to the cross-sell benefit
6. List **proof points or assets** to deploy (case study, ROI calculator, demo, trial offer)

### Step 4: Build the Playbook Structure
Organize triggers into a sequential expansion path per customer segment:
- Entry trigger (first cross-sell opportunity, typically 60–90 days post-onboarding)
- Growth trigger (second expansion, based on deepened adoption)
- Scale trigger (enterprise-level expansion or multi-product bundle)

Flag any triggers that indicate **churn risk** that should be resolved before cross-sell motion begins.

### Step 5: Assign Ownership and Cadence
For each trigger tier:
- Specify who owns the outreach (CSM, AE, automated in-app, email sequence)
- Define the outreach cadence (immediate, weekly check-in, QBR)
- Note required CRM fields or product analytics integrations needed to detect the trigger

## Output Format

Produce a structured **Cross-Sell Trigger Map** with the following sections:

---

**CROSS-SELL TRIGGER MAP**
*Customer Segment: [Segment Name] | Products: [Core Product] → [Cross-Sell Product(s)]*

| Trigger Event | Category | Urgency | Cross-Sell Offer | Conversation Starter | Value Bridge | Assets | Owner |
|---|---|---|---|---|---|---|---|
| [Specific trigger] | [Usage/Behavioral/Relationship
