---
name: content-to-sales-enablement-asset-converter
description: >
  Repurposes existing marketing content into structured sales enablement assets ready for use in deals. Use when someone says "turn this blog post into a one-pager," asks to "create a battle card from this case study," wants to "pull email snippets from our whitepaper," needs to "convert this content for the sales team," or requests "make this easier for reps to use."
category: marketing
tags: [sales-enablement, content-repurposing, battle-cards, one-pagers, email-snippets]
author: community
---

# Content to Sales Enablement Asset Converter

This skill transforms existing blog posts, case studies, and whitepapers into polished, rep-ready sales assets including one-pagers, battle cards, and email snippets whenever a user provides source content and specifies a target format.

## Conversion Workflow

1. **Identify the source content type** — Determine if input is a blog post, case study, whitepaper, or other long-form content. Ask for clarification if ambiguous.

2. **Identify the target asset type** — Confirm which asset(s) to produce:
   - **One-pager**: Executive summary for prospect meetings
   - **Battle card**: Competitive positioning for live deals
   - **Email snippet**: Short, copy-paste-ready rep outreach blocks

3. **Extract the core sales signals from the source**:
   - Primary pain point addressed
   - Key proof points, stats, or outcomes
   - Differentiators vs. alternatives
   - Target buyer persona or industry
   - Call to action or next step

4. **Apply asset-specific formatting rules**:

   **One-Pager**
   - Lead with a single bold problem statement
   - List 3–5 solution benefits as short bullets
   - Include 1–2 concrete proof points or metrics
   - End with a clear CTA (demo, trial, contact)
   - Tone: professional, concise, buyer-facing

   **Battle Card**
   - Structure around: Us vs. Them, Key Objections, Winning Moves
   - Include 3–5 objection/response pairs pulled from source content
   - Highlight 3 unique differentiators with one-line proof statements
   - Add a "When you hear X, say Y" section if source supports it
   - Tone: direct, rep-facing, tactical

   **Email Snippet**
   - Write 3 variants: cold outreach, follow-up, and re-engagement
   - Each snippet: 3–5 sentences max, one clear value hook, one CTA
   - Personalization placeholder tokens where relevant: [FirstName], [Company], [Pain Point]
   - Subject line included for each variant
   - Tone: conversational, human, low-friction

5. **Flag gaps** — If the source content lacks proof points, competitor mentions, or a clear CTA, note what's missing and suggest what the user should add before finalizing.

## Output Format

Deliver each requested asset as a clearly labeled section with a header (e.g., `## One-Pager`, `## Battle Card`, `## Email Snippets`).

- **One-pager**: 150–250 words, structured with labeled subsections (Problem, Solution, Proof, CTA)
- **Battle card**: Table or labeled block format with Us/Them comparison, objections, and responses; 200–350 words
- **Email snippets**: Three labeled variants (Cold, Follow-Up, Re-Engagement), each with subject line and body; 50–75 words per body
- All assets delivered in the same response unless the user requests a specific format only
- Use plain text or markdown depending on user context; default to markdown
