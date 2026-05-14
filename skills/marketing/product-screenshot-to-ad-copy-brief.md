---
name: product-screenshot-to-ad-copy-brief
description: >
  Analyzes product screenshots and UI flows to generate contextually relevant ad copy briefs
  aligned to visible features and benefits. Use when someone shares a product screenshot and
  wants ad copy, asks how to advertise a specific feature they've shown, wants to turn their
  UI into a marketing brief, needs copy ideas based on what their product looks like, or is
  trying to write ads from their app's actual functionality.
category: marketing
tags: [ad-copy, screenshot-analysis, product-marketing, brief-generation, ui-to-copy]
author: community
---

# Screenshot-to-Ad-Copy Brief

This skill extracts visible features, UX patterns, and implied user benefits from product screenshots or UI flow descriptions to produce structured ad copy briefs ready for a copywriter or campaign tool.

## Analysis & Brief Generation Workflow

**Step 1 — Extract Visual Evidence**
Identify every visible element in the screenshot: UI components (buttons, forms, dashboards, charts), feature labels, status indicators, onboarding steps, empty states, and any visible copy or microcopy. List these as raw observations, not interpretations.

**Step 2 — Map Features to Benefits**
For each identified element, translate it into a user benefit using the format: "[Feature] means the user can [outcome]." Prioritize benefits that are immediately visible or inferable without product knowledge. Avoid benefits that require assumption.

**Step 3 — Identify the Target Moment**
Determine the job-to-be-done visible in the screenshot: Is the user setting something up? Monitoring results? Completing a task? Collaborating? This moment defines the emotional and functional context for the ad.

**Step 4 — Define the Audience Signal**
Based on UI complexity, terminology, and workflow visible, infer the likely user persona (e.g., technical user, small business owner, marketing manager). Note any persona signals explicitly seen in the UI (role labels, team features, pricing tiers).

**Step 5 — Generate Headline and Hook Variants**
Write 3 headline options per ad format requested (default: social, search, and display). Each headline must reference a specific visible feature or benefit — no generic claims. Headlines should be under 10 words.

**Step 6 — Write the Body Copy Brief**
Produce one body copy block per format. Each must include: a pain point addressed, the specific feature that solves it, and a call-to-action aligned to the visible stage of the user journey (awareness, consideration, or conversion).

**Step 7 — Flag Missing Context**
List any benefits that would strengthen the brief but cannot be confirmed from the screenshot alone (e.g., pricing, integrations, performance metrics). Mark these as "unverified — confirm before use."

## Output Format

Produce a structured brief using the following sections:

---

**Product Ad Copy Brief**

**Source:** [Screenshot description or filename]
**Target Moment:** [1 sentence describing the user action/state visible]
**Inferred Persona:** [Role + context, 1 sentence]
**Confirmed Features:** [Bulleted list of visible features]
**Feature-to-Benefit Map:** [Table: Feature | User Benefit]

---

**Social Ad (e.g., LinkedIn/Meta)**
- Headline 1: [under 10 words]
- Headline 2: [under 10 words]
- Headline 3: [under 10 words]
- Body Copy: [2–3 sentences, pain → feature → CTA]

**Search Ad (e.g., Google)**
- Headline 1: [30 chars max]
- Headline 2: [30 chars max]
- Headline 3: [30 chars max]
- Description: [90 chars max, feature-specific]

**Display Ad**
- Headline: [under 8 words, visual-hook focused]
- Subhead: [1 sentence benefit statement]
- CTA Button Text: [2–4 words]

---

**Unverified Claims to Confirm:** [Bulleted list]
**Recommended A/B Test:** [One specific element to test and why]

---
