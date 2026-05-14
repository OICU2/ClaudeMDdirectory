---
name: client-proposal-template-builder
category: solopreneur
description: >
  Drafts a professional, customizable client proposal template tailored to a solopreneur's specific service type, including scope of work, deliverables, timeline, pricing structure, and terms. Use when someone says "I need a proposal for a client," asks about how to write a project proposal, or wants to create a template for pitching their services. Also activates when someone mentions sending a quote to a new client or needs help structuring a freelance agreement.
tags: [proposals, client-management, freelance, templates, sales]
author: community
---

# Client Proposal Template Builder

Generates a polished, ready-to-use client proposal template customized to a solopreneur's service type so they can pitch professionally and win more business.

## Workflow

1. **Identify the service type** — Ask the user what service they offer (e.g., web design, copywriting, consulting, photography, bookkeeping). If already stated, proceed without asking.

2. **Gather key variables** — Collect or infer: client industry/type, typical project scope, pricing model (fixed, hourly, retainer), and any standard terms (payment schedule, revision limits, kill fee).

3. **Draft the proposal sections in order:**
   - **Cover / Introduction** — One personalized paragraph addressing the client's need and the solopreneur's unique value.
   - **Understanding of the Project** — 2–3 sentences restating the client's problem or goal to show alignment.
   - **Scope of Work** — Bulleted list of exactly what is included. Be specific (e.g., "3 rounds of revisions," "delivery of source files").
   - **What's Not Included** — Short list of common exclusions to prevent scope creep (e.g., ongoing maintenance, additional platforms, print production).
   - **Deliverables** — Numbered list of final outputs the client will receive, with file formats or formats where relevant.
   - **Timeline** — Table or phased breakdown with milestone names, descriptions, and estimated durations.
   - **Investment / Pricing** — Line-item breakdown of costs, payment schedule (e.g., 50% upfront, 50% on delivery), and accepted payment methods.
   - **Terms & Conditions** — Concise clauses covering: revision policy, kill fee, intellectual property transfer, confidentiality, and late payment fees.
   - **Next Steps** — Clear call to action (e.g., "Sign and return the attached agreement to confirm your project start date.").

4. **Add placeholder tokens** — Wrap all variables in `[BRACKETS]` so the user can easily find and replace them (e.g., `[CLIENT NAME]`, `[PROJECT START DATE]`, `[RATE]`).

5. **Tailor tone and terminology** — Match professional language to the service category (e.g., "creative brief" for design, "engagement scope" for consulting).

## Output Format

Produce the full proposal template as a single, cleanly formatted document using Markdown headers for each section. Length should be 400–700 words of actual template content, not counting instructions. Include:

- `##` headers for each section
- Bullet or numbered lists where appropriate
- A timeline rendered as a Markdown table
- A pricing section rendered as a Markdown table with columns: Item, Description, Cost
- All placeholder variables in `[ALL CAPS BRACKETS]`
- A brief one-line annotation in italics below any section that commonly needs customization, e.g., *Adjust revision rounds based on your standard package.*
