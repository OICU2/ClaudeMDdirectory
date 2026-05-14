---
name: opt-in-form-conversion-audit
description: >
  Evaluates opt-in and lead capture forms across a site for conversion effectiveness, covering placement, copy, offer clarity, friction, and mobile rendering. Use when someone says their forms aren't converting, asks why sign-ups are low, or wants to improve email list growth. Also activates when someone needs a lead generation audit, wants to reduce form abandonment, or is reviewing their opt-in strategy.
category: marketing
tags: [conversion-optimization, lead-generation, forms, cro, email-marketing]
author: community
---

# Opt-In Form Conversion Audit

This skill audits lead capture forms across a website to identify conversion blockers and produce a prioritized list of improvement recommendations with specific, actionable fixes.

## Audit Workflow

### 1. Inventory All Forms
- List every opt-in form on the site: popups, inline, sticky bars, exit-intent, landing pages, footer forms
- Note the URL, form type, and placement context for each
- Identify which pages have no forms but high traffic (missed capture opportunities)

### 2. Evaluate Placement
- Is the form above the fold on key entry pages?
- Does the form appear at natural decision points (end of blog posts, after value delivery)?
- Are popups timed appropriately (not immediate on load)?
- Is there a form on the homepage, pricing page, and top traffic pages?
- Flag forms buried in footers with no supporting copy as low-priority placements

### 3. Audit the Offer Clarity
- Is there a specific, tangible lead magnet or incentive stated clearly?
- Does the headline communicate what the subscriber gets, not just "sign up for updates"?
- Is the value proposition visible without scrolling or expanding?
- Check for vague offers (e.g., "join our newsletter") vs. specific offers (e.g., "get the 10-point checklist")

### 4. Review Copy and Messaging
- Headline: benefit-driven or curiosity-driven? Does it speak to a specific pain or desire?
- Subheadline: does it handle an objection or reinforce the benefit?
- CTA button: is it first-person and action-specific (e.g., "Send Me the Guide") or generic ("Submit", "Subscribe")?
- Privacy microcopy: is there a short trust line near the button (e.g., "No spam. Unsubscribe anytime.")?
- Check for mismatches between form copy and the page content it appears on

### 5. Assess Friction Points
- Count the number of fields — flag anything beyond name + email for a free offer
- Are required fields clearly marked?
- Is there CAPTCHA or extra verification creating unnecessary steps?
- Does the form auto-fill on mobile?
- Is the confirmation/thank-you experience clear about next steps?

### 6. Check Mobile Rendering
- Is the form fully visible and usable on a 375px viewport?
- Are tap targets (buttons, fields) at least 44px height?
- Does any popup block the entire screen without a visible close button?
- Is the keyboard obscuring the submit button on mobile?
- Flag popups that violate Google's intrusive interstitials policy

### 7. Score Each Form
Rate each form on a 1–5 scale across five dimensions:
- Placement (1 = buried, 5 = optimal positioning)
- Offer Clarity (1 = vague, 5 = specific and compelling)
- Copy Quality (1 = generic, 5 = benefit-driven and trust-building)
- Friction Level (1 = high friction, 5 = minimal friction)
- Mobile Experience (1 = broken/blocking, 5 = seamless)

Calculate a total score out of 25 per form.

## Output Format

Produce a structured audit report with these sections:

**Audit Summary**
- Total forms found and URLs audited
- Overall conversion health rating (Poor / Needs Work / Good / Strong)
- Top 3 highest-impact issues identified site-wide

**Form-by-Form Scorecard**
For each form, provide:
- Form name/location (URL + placement type)
- Scores across all 5 dimensions with a one-line rationale each
- Total score out of 25
- 2–3 specific fixes ranked by impact

**Ranked Recommendations List**
A numbered list of
