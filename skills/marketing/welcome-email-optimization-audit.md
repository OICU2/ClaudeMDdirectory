---
name: welcome-email-optimization-audit
description: >
  Analyzes welcome emails to identify weaknesses in personalization, timing, call-to-action clarity, and onboarding flow that reduce activation rates. Use when someone shares their welcome email copy, asks why new subscribers aren't converting, or wants to improve their onboarding sequence. Also triggers when someone says their email open rates are low, new users aren't activating, or they want to audit their first-touch email.
category: marketing
tags: [email-marketing, onboarding, conversion-optimization, copywriting, activation]
author: community
---

# Welcome Email Optimization Audit

This skill audits a welcome email end-to-end and returns a prioritized list of specific improvements across personalization, timing, structure, and CTA effectiveness to increase subscriber or customer activation rates.

## Audit Process

1. **Extract the email components** — Identify subject line, preheader, greeting, body copy, CTA(s), footer, and any personalization tokens present.

2. **Evaluate subject line and preheader**
   - Is the subject line specific or generic (e.g., "Welcome!" = generic)
   - Does the preheader add context or repeat the subject line
   - Flag missed personalization opportunities (first name, product used, plan selected)

3. **Assess the opening and tone**
   - Does the first sentence focus on the subscriber's goal or the company's excitement
   - Is tone consistent with the brand and appropriate for the audience
   - Flag any jargon, filler phrases ("We're so excited you're here"), or passive voice

4. **Audit personalization depth**
   - Check for dynamic fields (name, company, use case, signup source)
   - Identify what data was likely collected at signup but not used
   - Flag missed segmentation opportunities (e.g., different copy for trial vs. paid)

5. **Evaluate timing context**
   - Is the email sent immediately, within 5 minutes, or delayed — and does the copy reflect that
   - Does the email acknowledge what the subscriber just did (signed up, purchased, downloaded)
   - Flag any mismatch between assumed timing and copy urgency

6. **Analyze call-to-action(s)**
   - Count the number of CTAs — flag if more than two primary actions exist
   - Evaluate CTA specificity: "Get Started" vs. "Set Up Your First Campaign"
   - Check if the CTA maps to the single most important activation action
   - Flag if the CTA destination is likely mismatched with subscriber intent

7. **Check onboarding clarity**
   - Does the email tell the subscriber exactly what to do next in one sentence
   - Is there a clear value statement tied to the first action
   - Flag missing social proof, onboarding milestones, or next-step sequencing hints

8. **Identify quick wins vs. structural changes**
   - Separate findings into: copy tweaks (low effort), structural changes (medium), and sequence redesign (high effort)

## Output Format

Produce a structured audit report with the following sections:

**Overall Assessment** (2–3 sentences summarizing the email's biggest strengths and critical gaps)

**Findings by Category** — use this exact structure for each issue found:
- **Issue:** One-sentence description of the problem
- **Location:** Which part of the email (subject line, body paragraph 2, CTA button, etc.)
- **Impact:** Why this hurts activation (be specific, e.g., "reduces click-through by creating decision paralysis")
- **Fix:** Rewrite the specific element or provide a concrete alternative

**Priority Action List** — ranked 1–5 by expected activation impact, labeled as Quick Win / Structural Change / Sequence Redesign

**Rewritten Subject Line + CTA** — provide one improved version of each, even if the originals are adequate

Length: 400–700 words. Use headers and bullets. No padding or general email marketing advice unless directly tied to a specific finding in this email.
