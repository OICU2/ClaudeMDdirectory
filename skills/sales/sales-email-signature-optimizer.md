---
name: sales-email-signature-optimizer
description: >
  Analyzes and rewrites sales rep email signatures to maximize credibility and drive responses. Use when someone says "my email signature isn't converting," asks about improving their email closing, or wants to add social proof to their signature. Also activates when a rep shares their current signature for feedback or wants to make their emails look more professional and trustworthy.
category: sales
tags: [email, sales, conversion, personal-branding, outreach]
author: community
---

# Sales Email Signature Optimizer

This skill audits an existing email signature (or builds one from scratch) and rewrites it to include credibility signals, social proof, and a single conversion-oriented CTA that drives prospects to take a next step.

## Optimization Workflow

1. **Audit the current signature** — Identify what's missing or weak across five dimensions: identity clarity, credibility signals, social proof, contact accessibility, and call-to-action.

2. **Extract rep context** — If not provided, ask for: full name and title, company name and one-line value prop, top 1–2 customer wins or metrics (e.g., "helped 40+ SaaS teams cut churn by 30%"), LinkedIn URL or calendar link, and primary CTA goal (book a call, view a case study, start a trial, etc.).

3. **Apply the signature framework** — Build the rewritten signature using this structure:
   - **Line 1:** Full name | Title at Company
   - **Line 2:** One punchy credibility hook (award, metric, notable client, press mention, or years of specialty experience)
   - **Line 3:** Social proof micro-statement (e.g., "Trusted by [X] companies in [industry]" or a one-sentence customer result)
   - **Line 4:** Primary CTA — one link, one action, low friction (e.g., "📅 Grab 15 min: [calendar link]" or "📊 See how [Customer] did it: [case study link]")
   - **Line 5:** Contact details (phone optional, LinkedIn required)

4. **Apply conversion copywriting rules:**
   - CTA must be singular — never list two links
   - Use a benefit-framing verb for the CTA (e.g., "See," "Grab," "Steal," "Get") not "Click here"
   - Credibility hook must be specific and verifiable — no vague claims like "experienced" or "passionate"
   - Social proof must reference a real number, named customer type, or outcome
   - Keep total character count under 400 to avoid truncation on mobile

5. **Provide a variant** — Offer a shorter "plain text safe" version stripped of emoji and formatting for reps using plain-text email clients.

6. **Flag gaps** — If the rep cannot supply a real metric or social proof element, suggest three specific types of proof they could gather quickly (e.g., a G2 rating, a customer quote, a published case study stat).

## Output Format

Produce the following sections in order:

**🔍 Signature Audit**
A 3–5 bullet diagnosis of what the current signature is missing or doing wrong (skip if no existing signature was provided).

**✅ Optimized Signature**
The fully rewritten signature, formatted as it would appear in an email client. Use line breaks to separate each element. Bold the name line. Include emoji only where appropriate for the rep's industry tone.

**📱 Plain Text Version**
A stripped-down version with no emoji, no bold, no special characters — safe for all email clients.

**💡 Why This Works**
A 3-bullet explanation of the specific conversion principles applied, so the rep understands the reasoning and can adapt it in the future.

**⚡ Quick Wins (Optional)**
If the rep's social proof is thin, list 2–3 fast actions they can take this week to gather real credibility signals to plug into the signature.
