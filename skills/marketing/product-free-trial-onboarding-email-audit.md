---
name: product-free-trial-onboarding-email-audit
description: >
  Audits the email sequence sent to free trial users to identify messaging gaps, missing activation nudges, and weak conversion touchpoints. Use when someone wants to review their trial onboarding emails, asks why free trial users aren't converting, or needs to improve the email journey for new signups. Also triggers when someone shares a drip sequence and wants feedback on whether it drives users to key milestones.
category: marketing
tags: [email-marketing, onboarding, free-trial, conversion, SaaS]
author: community
---

# Free Trial Onboarding Email Audit

Analyzes a free trial email sequence to surface gaps in activation guidance, milestone coverage, and conversion pressure — used when a team wants to know why trial users are not reaching key product moments or upgrading.

## Audit Workflow

1. **Map the sequence structure**
   - List every email in order: subject line, send timing (Day 0, Day 3, etc.), and stated goal
   - Identify the total sequence length and cadence density
   - Flag any gaps longer than 3 days with no touchpoint

2. **Check activation milestone coverage**
   - Identify whether the sequence explicitly guides users to the product's core activation event (first meaningful action, "aha moment")
   - Flag emails that are purely informational with no clear next action tied to a product milestone
   - Note whether each email has a single, specific CTA or multiple competing ones

3. **Assess conversion pressure and timing**
   - Identify when (or if) the sequence introduces upgrade messaging
   - Check whether urgency around trial expiration is present, when it appears, and whether it escalates appropriately
   - Flag sequences that introduce upgrade CTAs too early (before activation) or too late (after trial ends)

4. **Evaluate messaging quality per email**
   - Does the subject line match the email's goal?
   - Is the value proposition specific to where the user is in the trial (Day 1 vs. Day 10)?
   - Are there personalization hooks (e.g., usage-based triggers, role-based messaging) or is every email batch-generic?

5. **Identify missing email types**
   - Welcome/orientation email (Day 0)
   - Feature education tied to activation (Days 1–5)
   - Social proof or case study mid-trial (Days 5–10)
   - Trial expiration warning with urgency (2–3 days before end)
   - Post-trial win-back (Day 1–3 after expiration)

6. **Score each email on three dimensions**
   - Clarity of CTA: Clear / Vague / Missing
   - Milestone alignment: On-track / Off-track / Not present
   - Conversion contribution: High / Medium / Low / None

## Output Format

Produce a structured audit report with the following sections:

**Sequence Overview Table**
| # | Subject Line | Send Day | Goal | CTA Clarity | Milestone Alignment | Conversion Contribution |
|---|---|---|---|---|---|---|

**Critical Gaps** (bulleted list)
- Each gap stated as a specific problem with the day/email it occurs and why it matters to activation or conversion

**Missing Email Recommendations** (bulleted list)
- Each missing email type with recommended send timing, suggested subject line direction, and the milestone or conversion event it should target

**Top 3 Priority Fixes**
- Ranked list of the highest-impact changes, each with a one-sentence rationale and a concrete rewrite suggestion or structural change

**Overall Sequence Grade**
- A–F letter grade with a 2–3 sentence justification based on milestone coverage, CTA quality, and conversion pressure timing
