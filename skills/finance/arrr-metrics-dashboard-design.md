---
name: arrr-metrics-dashboard-design
description: >
  Structures a complete ARRR (Acquisition, Activation, Retention, Referral, Revenue) metrics framework with formulas, benchmarks, and data source mappings for recurring revenue businesses. Use when someone asks about building a growth metrics dashboard, wants to define KPIs for a SaaS or subscription business, or needs to set up a pirate metrics framework. Also activates when someone says "help me track my funnel metrics" or "what metrics should I measure for my recurring revenue business."
category: finance
tags: [saas-metrics, growth-framework, kpis, recurring-revenue, dashboard]
author: community
---

# ARRR Metrics Dashboard Design

This skill builds a structured ARRR metrics framework with explicit formulas, data source mappings, and benchmark ranges for any recurring revenue business when asked to define growth KPIs or design a metrics dashboard.

## Framework Construction Steps

### 1. Gather Business Context First
Ask or infer before building:
- Business model (B2B SaaS, B2C subscription, marketplace, etc.)
- Revenue model (monthly/annual subscriptions, usage-based, tiered)
- Current stage (pre-revenue, early traction, scaling, mature)
- Primary data tools (Mixpanel, Amplitude, Stripe, Segment, custom DB)

### 2. Define Each ARRR Layer with Precision

**Acquisition**
- Identify top-of-funnel entry points (organic, paid, referral, direct)
- Core metrics:
  - CAC = Total Sales & Marketing Spend / New Customers Acquired
  - CAC Payback Period = CAC / (ARPU × Gross Margin %)
  - Channel-level conversion rate = Signups / Unique Visitors by source
- Benchmark: CAC Payback < 12 months (B2B), < 6 months (B2C)
- Data sources: Google Analytics, ad platforms, CRM (HubSpot/Salesforce)

**Activation**
- Define the "aha moment" specific to the product (first value delivery event)
- Core metrics:
  - Activation Rate = Users who hit aha moment / Total signups × 100
  - Time to Activate = Median hours/days from signup to aha moment
  - Onboarding Completion Rate = Users completing all onboarding steps / Total new users
- Benchmark: Activation Rate > 40% within first session (varies by product complexity)
- Data sources: Product analytics (Mixpanel, Amplitude, Heap), event tracking

**Retention**
- Distinguish between early retention (Day 1/7/30) and long-term retention curves
- Core metrics:
  - D1/D7/D30 Retention = Users active on day N / Users who activated on day 0
  - Net Revenue Retention (NRR) = (Starting MRR + Expansion − Contraction − Churn) / Starting MRR × 100
  - Logo Churn Rate = Churned customers / Total customers at start of period
  - Revenue Churn Rate = Churned MRR / Total MRR at start of period
- Benchmark: NRR > 100% (world-class > 120% for B2B SaaS); Monthly logo churn < 2%
- Data sources: Subscription platform (Stripe, Chargebee), CRM, product analytics

**Referral**
- Map referral loops (invite flows, word-of-mouth, affiliate programs)
- Core metrics:
  - Viral Coefficient (K) = Average invites sent per user × Invite conversion rate
  - Referral Rate = New customers from referral / Total new customers × 100
  - Net Promoter Score (NPS) = % Promoters − % Detractors
- Benchmark: K > 1 means organic growth loop is self-sustaining; NPS > 40 is strong
- Data sources: Referral platform (ReferralHero, Friendbuy), NPS tools (Delighted), CRM

**Revenue**
- Focus on quality and predictability of revenue, not just volume
- Core metrics:
  - MRR = Sum of all active monthly subscription values
  - ARR = MRR × 12
  - ARPU = MRR / Total active customers
  -
