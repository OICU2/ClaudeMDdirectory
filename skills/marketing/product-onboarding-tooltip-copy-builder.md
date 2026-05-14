---
name: product-onboarding-tooltip-copy-builder
description: >
  Drafts in-app tooltip text, onboarding popups, and microcopy that guides new users toward key activation milestones using benefit-focused, action-oriented language. Use when someone says "write tooltip copy for my app," asks about "onboarding microcopy," or wants to "help users reach their first activation moment." Also triggers when someone needs to "reduce drop-off during signup" or wants to "explain a feature to new users without overwhelming them."
category: marketing
tags: [microcopy, onboarding, tooltips, activation, ux-writing]
author: community
---

# Product Onboarding Tooltip Copy Builder

This skill generates concise, benefit-led tooltip and onboarding microcopy that moves new users from confusion to activation by surfacing value at exactly the right moment.

## Workflow

1. **Identify the activation milestone** — Ask (or infer from context) what user action defines success: completing a profile, sending a first message, connecting an integration, importing data, etc.

2. **Map the friction point** — Determine where the user is likely to hesitate or abandon: a complex form field, an unfamiliar UI element, a permission request, a blank-state screen, or a multi-step wizard.

3. **Gather context inputs** — Collect or infer:
   - Product name and category (e.g., project management SaaS, e-commerce platform)
   - The specific UI element or screen the tooltip appears on
   - Target user persona (technical vs. non-technical, B2B vs. consumer)
   - Tone (friendly, professional, playful, minimal)

4. **Apply microcopy rules** — Every piece of copy must:
   - Lead with the user benefit, not the feature mechanic ("See your progress at a glance" not "This is the dashboard")
   - Use second-person ("you / your") and active voice
   - Stay under 25 words for tooltips; under 50 words for onboarding modals
   - Include a clear next action or implicit nudge toward the activation step
   - Avoid jargon, filler phrases ("simply," "just," "easy"), and passive constructions

5. **Write 3 copy variants per element** — Vary tone or angle (benefit-focused, urgency-light, curiosity-driven) so the team can A/B test or choose the best fit.

6. **Add CTA microcopy** — For each tooltip or popup, include a matching button label or link text (e.g., "Get started," "Connect now," "See how it works") that continues the momentum.

7. **Flag empty states and error messages** — If the user describes a blank-state or error scenario, generate supportive microcopy that reassures and redirects rather than dead-ending the user.

## Output Format

Produce a structured block for each UI element or onboarding step:

---
**Element:** [Name of UI component or screen, e.g., "Dashboard tooltip — Projects widget"]
**Activation milestone:** [The goal this copy supports]
**Friction being addressed:** [What confusion or hesitation this resolves]

| Variant | Tooltip / Microcopy | CTA Label |
|---------|---------------------|-----------|
| A (Benefit-led) | [≤25 words] | [2–4 words] |
| B (Action-led) | [≤25 words] | [2–4 words] |
| C (Curiosity/social proof) | [≤25 words] | [2–4 words] |

**Empty state version (if applicable):** [1–2 sentences max, reassuring + redirecting]
**UX note:** [One optional sentence flagging placement, timing, or dismissal behavior if relevant]

---

Repeat this block for each element requested. If multiple elements are provided at once, group them by onboarding stage (e.g., Signup → First Login → First Action → Activation).
