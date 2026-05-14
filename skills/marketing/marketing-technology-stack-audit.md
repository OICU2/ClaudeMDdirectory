---
name: marketing-technology-stack-audit
description: >
  Evaluates the current martech stack for redundancies, integration gaps, and underutilized tools, then recommends consolidations to reduce cost and improve data flow. Use when someone says "we're paying for too many tools," asks about auditing their marketing software, wants to reduce martech spend, is trying to consolidate marketing platforms, or needs to identify gaps in their marketing data pipeline.
category: marketing
tags: [martech, audit, consolidation, marketing-ops, tech-stack]
author: community
---

# Marketing Technology Stack Audit

This skill analyzes a marketing technology stack to surface redundancies, integration gaps, and underutilized tools, then produces a prioritized consolidation plan with cost and efficiency impact estimates.

## Audit Workflow

### 1. Inventory Collection
Ask the user to list all current martech tools across these categories if not already provided:
- **CRM & customer data** (e.g., Salesforce, HubSpot)
- **Email & marketing automation** (e.g., Marketo, Klaviyo, Mailchimp)
- **Analytics & attribution** (e.g., GA4, Mixpanel, Triple Whale)
- **Advertising & paid media** (e.g., Google Ads, Meta, programmatic DSPs)
- **Content & SEO** (e.g., Semrush, Contentful, WordPress)
- **Social media management** (e.g., Sprout Social, Hootsuite, Buffer)
- **Conversion & experimentation** (e.g., Optimizely, VWO, Hotjar)
- **Data & integration** (e.g., Segment, Zapier, Fivetran)

For each tool, request: monthly/annual cost, primary use case, team that owns it, and estimated usage level (heavy/moderate/light/unknown).

### 2. Redundancy Analysis
Cross-reference tools for overlapping core functionality:
- Flag any two or more tools that serve the same primary function
- Note where native features of one platform duplicate a paid standalone tool
- Identify tools purchased for a use case now covered by a newer platform in the stack

### 3. Integration Gap Mapping
Trace the data flow between tools:
- Map how customer/lead data moves from acquisition → CRM → activation → reporting
- Identify broken or manual handoffs (e.g., CSV exports, no native connector)
- Flag where the same data is duplicated across systems without a single source of truth
- Note any tools that operate as silos with no upstream or downstream connections

### 4. Utilization Assessment
Score each tool on utilization:
- **High**: Core workflows depend on it, used daily by multiple teams
- **Medium**: Used regularly but not mission-critical or limited to one team
- **Low**: Rarely used, unclear ownership, or superseded by another tool
- **Unknown**: No one can confirm active usage — escalate for immediate review

### 5. Consolidation Recommendations
For each recommended action, specify:
- **Action**: Eliminate, consolidate into [tool], replace with [tool], or renegotiate contract
- **Rationale**: Specific reason (redundancy, low utilization, integration cost)
- **Estimated savings**: Annual cost reduction or hours saved
- **Risk level**: Low / Medium / High (based on dependency and migration complexity)
- **Priority**: Quick win (under 30 days), medium-term (30–90 days), or strategic (90+ days)

## Output Format

Produce a structured audit report with the following sections:

**1. Stack Inventory Table**
Markdown table with columns: Tool | Category | Annual Cost | Owner | Utilization | Integration Status

**2. Redundancy Map**
Bulleted list of redundancy clusters — group overlapping tools together and name the winner/recommended keeper.

**3. Integration Gap Diagram (text-based)**
Simple ASCII or arrow-notation flow showing where data breaks down in the funnel (e.g., `Ads → [GAP] → CRM → [Manual export] → Reporting`).

**4. Consolidation Action Plan**
Prioritized table with columns: Action | Tools Affected | Estimated Annual Savings | Risk | Timeline

**5. Executive Summary**
3–5 bullet points suitable for a CMO or CFO: total estimated savings, number of tools to cut, biggest integration risk, and top recommended first step.

Keep the
