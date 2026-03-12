---
name: brand-audit
description: >
  Systematically reviews all brand touchpoints, assets, and messaging consistency to identify gaps between intended and perceived brand identity. Use when someone says "our brand feels inconsistent," asks about evaluating brand health, wants to audit their marketing materials, needs to assess brand alignment across channels, or is preparing for a brand refresh. Produces a structured gap analysis with prioritized action items.
category: marketing
tags: [brand, audit, consistency, messaging, identity]
author: community
---

# Brand Audit Skill

This skill conducts a comprehensive review of brand touchpoints, visual identity, and messaging to surface inconsistencies and alignment gaps, and Claude will use it whenever someone needs to evaluate how cohesively their brand is presented across channels.

## Brand Audit Workflow

### Step 1: Establish Brand Foundation Baseline
- Ask for or extract the brand's stated mission, vision, values, and positioning statement
- Identify the intended target audience and brand personality descriptors (e.g., "bold, approachable, expert")
- Document the brand's claimed differentiators and key messages
- If these don't exist, flag that as the first critical gap

### Step 2: Inventory Touchpoints
Systematically catalog all brand touchpoints across these categories:
- **Visual**: logo, color palette, typography, imagery style, iconography, templates
- **Digital**: website, social profiles, email signatures, ad creatives, app UI
- **Written**: tagline, boilerplate, headlines, product descriptions, CTAs, error messages
- **Verbal**: sales scripts, support language, auto-replies, video scripts
- **Physical**: packaging, signage, business cards, merchandise, office environment
- **Behavioral**: customer service tone, response time standards, onboarding experience

### Step 3: Consistency Scoring
For each touchpoint category, evaluate against three dimensions:
1. **Visual Consistency** — Does it match brand guidelines (colors, fonts, logo usage)?
2. **Tonal Consistency** — Does the voice and language match the brand personality?
3. **Message Consistency** — Does it reinforce the core positioning and key messages?

Score each: Aligned / Partially Aligned / Misaligned / Missing

### Step 4: Gap Analysis
- Compare intended brand identity (Step 1) against actual touchpoint presentation (Steps 2–3)
- Identify patterns: where do misalignments cluster? (e.g., social media is off-tone, print materials use outdated logo)
- Distinguish between **critical gaps** (visible to customers, damages credibility) and **minor gaps** (internal or low-visibility)
- Note any touchpoints that are entirely absent but should exist

### Step 5: Competitive and Perception Check
- If competitor examples or customer feedback are available, assess whether the brand is differentiated or blending in
- Flag any touchpoints that may send unintended signals (e.g., formal language on a brand positioned as approachable)

### Step 6: Prioritized Recommendations
Rank findings by impact and effort:
- **Quick wins**: High-impact, low-effort fixes (e.g., update footer logo, standardize email signature)
- **Strategic fixes**: High-impact, higher-effort (e.g., rewrite website copy to match brand voice)
- **Long-term initiatives**: Brand system overhauls, new asset creation, guidelines documentation

## Output Format

Produce a structured Brand Audit Report with these sections:

**1. Brand Foundation Summary** (3–5 bullets)
State the intended identity as understood from inputs.

**2. Touchpoint Inventory Table**
| Touchpoint | Category | Consistency Score | Notes |
|---|---|---|---|
List every reviewed touchpoint with score and one-line observation.

**3. Gap Analysis** (organized by severity)
- Critical Gaps: bulleted list with specific examples
- Minor Gaps: bulleted list
- Missing Touchpoints: what should exist but doesn't

**4. Key Patterns** (2–4 sentences)
Synthesize where the brand breaks down most frequently and why it matters.

**5. Prioritized Action Plan**
- Quick Wins (label with estimated effort: hours)
- Strategic Fixes (label with estimated effort: days/weeks)
- Long-Term Initiatives (label with estimated effort: months)

**6. Brand Health Score**
Overall alignment rating: Strong / Moderate / Fragmented — with one paragraph of justification.

Length: Comprehensive audits should run 600
