---
name: sales-content-usage-audit
description: >
  Audits sales enablement content usage across deal stages to identify gaps and recommend new materials. Use when someone asks "what content are we using in our sales process," wants to know why deals are stalling at a certain stage, needs to find gaps in their sales collateral, wants to improve their content strategy for closing deals, or is trying to figure out what materials reps are actually sharing with prospects.
category: sales
tags: [sales-enablement, content-audit, deal-stages, conversion-optimization, sales-collateral]
author: community
---

# Sales Content Usage Audit

This skill analyzes which sales enablement assets are being used at each deal stage, surfaces coverage gaps, and recommends specific new content to improve conversion rates.

## Audit Workflow

### Step 1: Gather Deal Stage Map
Ask the user to provide or confirm their deal stages (e.g., Prospecting → Discovery → Demo → Proposal → Negotiation → Close). If they don't have a formal map, use a standard 6-stage B2B framework as the baseline.

### Step 2: Inventory Existing Content
For each deal stage, collect:
- Asset name and type (case study, one-pager, deck, video, ROI calculator, battlecard, email template, etc.)
- Who created it and when (flag anything older than 12 months)
- Whether reps are actively using it (high/medium/low/unknown usage)
- What buyer persona or objection it addresses

If the user doesn't have usage data, prompt them to estimate based on rep feedback, CRM attachment data, or content platform analytics (Highspot, Seismic, Showpad, Google Drive, etc.).

### Step 3: Identify Gaps
Flag each stage using one of three statuses:
- **Covered**: Multiple assets exist, usage is active, personas are addressed
- **Thin**: Only 1-2 assets exist, usage is low, or assets are outdated
- **Gap**: No assets exist for this stage or buyer persona

Cross-reference gaps against common buyer questions and objections at each stage:
- Prospecting: Why talk to us? Why now?
- Discovery: What problems do we solve? Who else have we helped?
- Demo: How does it work? Can it fit our workflow?
- Proposal: What's the ROI? How do we compare to competitors?
- Negotiation: Why this price? What's the risk if we do/don't proceed?
- Close: What does implementation look like? Who else is on board?

### Step 4: Prioritize Recommendations
Rank gaps by impact using this logic:
1. Stages with the highest drop-off rates get priority
2. Gaps affecting the most common buyer persona come next
3. Content types with proven lift (ROI calculators, competitive battlecards, customer stories) are prioritized over generic collateral

For each gap, recommend a specific asset:
- Asset type
- Target persona and deal stage
- Key message or objection it should address
- Suggested format (1-pager, video, interactive tool, email sequence, etc.)
- Estimated effort to produce (low/medium/high)

### Step 5: Quick Wins vs. Strategic Builds
Separate recommendations into:
- **Quick wins** (repurpose existing content, update outdated assets, templatize email sequences) — can be done in under 2 weeks
- **Strategic builds** (new case studies, ROI tools, demo videos) — require dedicated production effort

## Output Format

Produce a structured audit report with these sections:

**1. Deal Stage Coverage Matrix**
A table with rows = deal stages, columns = content types. Each cell shows: asset name (or "NONE"), usage level, and gap status (✅ Covered / ⚠️ Thin / ❌ Gap).

**2. Top 3 Critical Gaps**
For each gap: stage, missing asset type, why it matters, and the specific buyer question left unanswered.

**3. Recommended New Assets**
A prioritized list (up to 10 items) formatted as:
- **Asset**: [Name/Type]
- **Stage**: [Deal stage]
- **Persona**: [Target buyer]
- **Purpose**: [Objection or question addressed]
- **Format**: [Recommended format]
- **Effort**: [Low / Medium / High]

**4. Quick Win Actions**
