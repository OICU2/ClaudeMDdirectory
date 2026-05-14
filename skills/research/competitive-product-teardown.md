---
name: competitive-product-teardown
description: >
  Systematically documents competitor product features, pricing tiers, and UX patterns into a structured analysis template for strategic comparison. Use when someone says "analyze a competitor," asks to "break down how X product works," wants to "compare competitor pricing," needs to "understand what features rival products have," or requests a "competitive analysis" of a specific tool or service.
category: research
tags: [competitive-analysis, product-research, market-intelligence, ux-patterns, pricing]
author: community
---

# Competitive Product Teardown

This skill produces a structured, section-by-section teardown of a competitor's product covering features, pricing, UX patterns, strengths, and weaknesses for strategic decision-making.

## Teardown Workflow

1. **Identify the target**: Confirm the exact product or product tier being analyzed. If ambiguous, ask for a URL or specific product name before proceeding.

2. **Extract core product information**:
   - Product category and primary use case
   - Target customer segment (SMB, enterprise, consumer, developer, etc.)
   - Core value proposition as the company states it

3. **Document feature inventory**:
   - List all major feature categories (e.g., integrations, collaboration, automation, reporting)
   - Note which features are gated behind paid tiers
   - Identify any flagship or differentiating features competitors highlight in marketing
   - Flag features that are missing but expected for the category

4. **Deconstruct pricing tiers**:
   - List every pricing tier with exact prices (monthly and annual if available)
   - Document what each tier includes and excludes
   - Note pricing model (per seat, flat fee, usage-based, freemium, etc.)
   - Identify trial or free tier limitations
   - Calculate cost at common scale points (e.g., 10, 50, 100 users)

5. **Analyze UX patterns**:
   - Describe the primary navigation model (sidebar, top nav, dashboard-first, etc.)
   - Note onboarding approach (guided setup, blank slate, template-first)
   - Identify any notable UI conventions or interaction patterns
   - Document mobile experience quality if relevant

6. **Assess positioning signals**:
   - Who they mention as their own competitors in marketing copy
   - Keywords and messaging they emphasize
   - Awards, certifications, or social proof they surface prominently

7. **Synthesize strategic insights**:
   - Three concrete strengths with evidence
   - Three concrete weaknesses or gaps with evidence
   - One or two strategic opportunities a competitor could exploit

## Output Format

Produce a structured markdown document with the following sections in order:

```
# Competitive Teardown: [Product Name]
**Date:** [current date]
**Category:** [product category]
**Website:** [URL if provided]

## Product Overview
- **Primary use case:** [1 sentence]
- **Target segment:** [specific customer type]
- **Core value prop:** [their stated positioning, quoted or paraphrased]

## Feature Inventory
| Feature Area | Available | Notes / Tier Restriction |
|---|---|---|
| [feature] | ✅ / ❌ / ⚠️ Paid only | [detail] |

## Pricing Breakdown
| Tier | Price | Key Inclusions | Key Exclusions |
|---|---|---|---|
| [tier name] | $X/mo | [what's in] | [what's out] |

**Pricing model:** [per seat / flat / usage-based / etc.]
**Free trial:** [yes/no + duration + card required]

## UX Patterns
- **Navigation:** [description]
- **Onboarding:** [description]
- **Notable conventions:** [bullet list of 2-4 patterns]
- **Mobile:** [rating + notes]

## Positioning Signals
- **Self-identified competitors:** [list]
- **Key messaging themes:** [list]
- **Social proof / trust signals:** [list]

## Strategic Assessment
**Strengths:**
1. [strength + evidence]
2. [strength + evidence]
3. [strength + evidence]

**Weaknesses / Gaps:**
1. [weakness + evidence]
2. [weakness + evidence]
3. [weakness + evidence]

**Opportunities to exploit:**
- [specific, actionable opportunity]
- [specific, actionable opportunity]
