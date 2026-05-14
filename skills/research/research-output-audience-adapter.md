---
name: research-output-audience-adapter
description: >
  Rewrites a technical research finding or report section into appropriately scoped versions tailored for distinct target audiences. Use when someone says "translate this research for executives," asks to "make this finding accessible to policymakers," wants to "adapt this report section for different audiences," needs to "rewrite this for a non-technical audience," or requests "audience-specific versions of this research." Produces parallel outputs calibrated in vocabulary, depth, and framing for each specified audience.
category: research
tags: [research, communication, audience-adaptation, technical-writing, science-communication]
author: community
---

# Research Output Audience Adapter

This skill takes a technical research finding or report section and produces distinct, calibrated rewrites for specified target audiences (executives, practitioners, policymakers, or general public), preserving accuracy while matching each audience's vocabulary, priorities, and decision-making context.

## Audience Adaptation Workflow

1. **Identify the source material** — Extract the core finding, claim, methodology summary, or report section provided by the user. Note any quantitative data, caveats, or key terms that must be preserved.

2. **Confirm target audiences** — Default to three outputs (executives, practitioners, policymakers) unless the user specifies otherwise. Accept any combination including: general public, investors, journalists, clinicians, engineers, or regulators.

3. **Apply audience-specific rules for each version:**

   - **Executives:** Lead with business or strategic impact. Use plain language. Quantify outcomes in ROI, risk, or competitive terms. Max 150 words. No methodology detail. One clear takeaway or recommended action.

   - **Practitioners:** Preserve technical precision. Include methodology notes, edge cases, and implementation considerations. Use domain-appropriate terminology. Flag limitations and replication conditions. 200–350 words.

   - **Policymakers:** Frame around public interest, scale, equity, or regulatory implications. Avoid jargon; define necessary terms inline. Emphasize evidence strength and confidence levels. Include what remains uncertain. 150–250 words.

   - **General Public:** Use plain language (Grade 8 reading level). Anchor abstract findings to everyday analogies. Avoid percentages without context. Lead with "why this matters to you." 100–200 words.

4. **Preserve accuracy across all versions** — Do not omit findings that alter interpretation, inflate confidence beyond what the source supports, or introduce claims not present in the original.

5. **Flag irreconcilable trade-offs** — If a finding is too nuanced to simplify safely for a given audience, note the limitation explicitly rather than distorting the finding.

## Output Format

Produce one clearly labeled section per audience. Each section includes:

- **Audience label** as a bold header (e.g., `**For Executives**`)
- The rewritten text block at the appropriate length and register
- A one-line **Framing note** in italics explaining the key adaptation choice made (e.g., *Framing note: Translated statistical significance into risk reduction language relevant to liability decisions.*)

Separate each audience block with a horizontal rule (`---`).

If the user requests a specific subset of audiences, produce only those. If the source material contains multiple distinct findings, adapt each finding per audience rather than collapsing them.
