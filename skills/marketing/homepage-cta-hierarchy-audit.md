---
name: homepage-cta-hierarchy-audit
description: >
  Audits every call-to-action on a homepage and scores each one across placement, visual contrast, copy quality, and alignment with primary conversion goals to surface the highest-priority fixes. Use when someone says their homepage isn't converting, asks why visitors aren't clicking their main button, wants to improve their homepage CTA strategy, needs to prioritize which CTAs to fix first, or is wondering if their homepage messaging is driving the right actions.
category: marketing
tags: [cta, conversion, homepage, audit, ux]
author: community
---

# Homepage CTA Hierarchy Audit

This skill systematically reviews every call-to-action on a homepage, scores each across four dimensions, and delivers a ranked fix list so Claude can tell you exactly what to change and why.

## Audit Workflow

### Step 1: Inventory All CTAs
Identify every CTA on the page — primary buttons, secondary links, inline text links, form submits, chat widgets, sticky bars, and nav CTAs. List each one with:
- Exact copy text
- Location on page (above fold, mid-page, footer, nav, etc.)
- Visual weight (primary button, secondary button, text link, icon)

### Step 2: Define the Primary Conversion Goal
Before scoring, establish the single most important action the homepage should drive (e.g., free trial signup, demo request, purchase, email capture). Everything gets scored relative to this goal.

### Step 3: Score Each CTA on Four Dimensions (1–5 scale)

**Placement (1–5)**
- 5: Above fold, in primary visual path (top-left to center)
- 3: Mid-page, requires scrolling but in natural reading flow
- 1: Below fold, hidden in footer, or buried in navigation

**Contrast (1–5)**
- 5: High contrast color vs. background, minimum 4.5:1 ratio, large enough tap target (44px+)
- 3: Visible but competes with other elements
- 1: Low contrast, blends into background, or undersized

**Copy Quality (1–5)**
- 5: Action-specific, benefit-forward, creates urgency or clarity (e.g., "Start my free trial" not "Submit")
- 3: Generic but clear (e.g., "Get started")
- 1: Vague, passive, or feature-focused without benefit (e.g., "Learn more," "Click here")

**Goal Alignment (1–5)**
- 5: Directly drives the primary conversion goal
- 3: Drives a secondary action that feeds toward the primary goal
- 1: Unrelated to primary goal or actively pulls attention away from it

### Step 4: Calculate Total Score and Priority Tier
- **Total Score**: Sum of all four dimensions (max 20)
- **Priority Tiers**:
  - 15–20: Performing well, monitor only
  - 10–14: Moderate issue, fix in next sprint
  - 5–9: High priority, fix this week
  - 1–4: Critical issue, fix immediately

### Step 5: Generate Specific Fix Recommendations
For each CTA scoring below 15, write one concrete rewrite or change recommendation per dimension that scored below 4. Be prescriptive — provide the actual new copy, the specific color contrast fix, or the exact placement change.

## Output Format

Produce a structured audit report with these sections:

**1. Primary Conversion Goal**
One sentence stating the agreed primary goal all CTAs are evaluated against.

**2. CTA Inventory & Scorecard**
A markdown table with columns: CTA Copy | Location | Placement Score | Contrast Score | Copy Score | Goal Alignment Score | Total | Priority Tier

**3. Priority Fix List**
Ranked from lowest total score to highest. For each CTA needing fixes:
- Current state (quote exact copy and describe placement)
- Specific fixes needed per dimension (skip dimensions scoring 4–5)
- Recommended new copy (provide the actual rewritten CTA text)
- Estimated impact: High / Medium / Low based on page position and goal alignment

**4. Quick Wins**
Bullet list of fixes that require no design work — copy changes only — that can be implemented immediately.

**5. One-Sentence Summary**
The single most important change to make on this homepage right now.

Length: Scorecard covers all CT
