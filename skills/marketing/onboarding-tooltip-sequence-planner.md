---
name: onboarding-tooltip-sequence-planner
description: >
  Maps and drafts in-product tooltip and coach mark copy that guides new users
  to activation milestones and reduces early churn. Use when someone says "users
  are dropping off before they get value," asks about writing onboarding tooltips,
  wants to reduce time-to-activation, needs to plan a coach mark sequence, or is
  trying to improve new user retention in their product.
category: marketing
tags: [onboarding, tooltips, ux-copy, activation, retention]
author: community
---

# Onboarding Tooltip Sequence Planner

Plans and writes complete in-product tooltip and coach mark sequences that move new users from signup to their first activation milestone, reducing early churn through contextual, action-oriented microcopy.

## Workflow

### 1. Gather Context (ask if not provided)
- **Product type**: What does the product do? (SaaS, mobile app, marketplace, etc.)
- **Activation milestone**: What is the single action that defines "activated"? (e.g., first report created, first team member invited, first transaction)
- **Key steps to activation**: What are the 3–7 UI steps a user must complete to reach that milestone?
- **User segment**: Who is this user? (technical/non-technical, role, familiarity with the problem space)
- **Drop-off points**: Are there known spots where users abandon? (if available)

### 2. Map the Sequence
Build a step-by-step tooltip map using this logic:
- **Entry point**: Trigger tooltip #1 at the first meaningful UI interaction after signup (not a welcome modal)
- **Progressive disclosure**: Only show the next tooltip after the user completes the current step — never front-load all tips
- **Activation path**: Every tooltip must move the user one step closer to the defined activation milestone
- **Maximum sequence length**: 5–7 tooltips; if more steps exist, consolidate or defer non-critical ones
- **Exit condition**: Sequence ends when the user hits the activation milestone, not before

### 3. Write Tooltip Copy
For each tooltip, produce:
- **Headline** (≤6 words): Name the action or benefit, not the feature
- **Body** (1–2 sentences, ≤25 words): Tell the user exactly what to do and why it matters right now
- **CTA label** (2–4 words): Use a verb that matches the action (e.g., "Add your first item," not "Next")
- **Dismiss option**: Label as "Skip for now" — never "Close" or "X" only

### 4. Apply Microcopy Rules
- Write in second person ("You," "Your") — never passive voice
- Lead with outcome, not feature name ("See your revenue at a glance" not "The Dashboard shows...")
- If the step is optional, say so explicitly ("Optional — you can do this later")
- Use numbers when they reduce anxiety ("Takes ~10 seconds")
- Avoid jargon unless the user segment is confirmed technical

### 5. Flag Churn Risks
After drafting, flag any step where:
- The user must leave the product (OAuth, email verification, billing)
- The required action has high cognitive load (form with 5+ fields, configuration choice)
- The value isn't obvious until a later step

For each flagged step, suggest a copy adjustment or a UI note (e.g., "Consider adding social proof here," "Show a progress indicator").

## Output Format

Produce a **Tooltip Sequence Table** followed by **Churn Risk Notes**.

**Tooltip Sequence Table** — one row per tooltip:

| # | Trigger (UI element/moment) | Headline | Body Copy | CTA Label | Dismiss Label |
|---|----------------------------|----------|-----------|-----------|---------------|
| 1 | ... | ... | ... | ... | Skip for now |
| 2 | ... | ... | ... | ... | Skip for now |
| … | … | … | … | … | … |

**Churn Risk Notes** — bulleted list:
- Step [#]: [Risk description] → [Suggested fix]

**Optional**: If the product context is clear, append a one-paragraph **Sequence Rationale** explaining the activation logic and any major copy decisions.

Total output length: typically 300–600 words depending on sequence
