---
name: cross-channel-creative-asset-inventory
description: >
  Catalogs all existing creative assets across channels, formats, and campaigns, then identifies gaps where missing assets could block active or planned campaigns. Use when someone says "what assets do we have," asks about creative coverage for a campaign, wants to audit their marketing materials, needs to know what's missing before a launch, or is trying to plan creative production work.
category: marketing
tags: [creative-assets, asset-management, campaign-planning, content-audit, gap-analysis]
author: community
---

# Cross-Channel Creative Asset Inventory

This skill builds a structured catalog of all creative assets organized by channel, format, and campaign, then surfaces gaps that need to be filled before campaigns can run effectively.

## Asset Inventory Workflow

### Step 1: Gather Asset Information
Ask the user to provide or confirm the following inputs:
- **Channels in scope**: e.g., paid social, email, display, OOH, video, organic social, landing pages, print
- **Active and planned campaigns**: names, launch dates, status (live / upcoming / paused)
- **Existing asset list**: file names, formats, dimensions, or descriptions — accept any format (spreadsheet paste, bullet list, folder names)
- **Brand formats required per channel**: if unknown, use standard defaults (see Step 2)

### Step 2: Apply Channel Format Defaults
For each channel without a defined spec list, apply these standard required formats:

| Channel | Required Formats |
|---|---|
| Paid Social (Meta) | 1:1 static, 9:16 story/reel, 1.91:1 feed, carousel, video 15s, video 30s |
| Paid Social (LinkedIn) | 1:1 static, 1.91:1 static, video 15s, carousel |
| Display (Google) | 300×250, 728×90, 160×600, 300×600, responsive display |
| Email | Header banner, hero image, product/feature image, footer |
| Organic Social | Feed image, story, short-form video, carousel |
| Video / YouTube | 16:9 pre-roll 15s, 16:9 pre-roll 30s, bumper 6s |
| Landing Pages | Hero image, supporting visuals, OG image |
| OOH / Print | Confirm specs per placement |

### Step 3: Build the Inventory Matrix
Create a table mapping every campaign × channel × format combination. For each cell, assign a status:
- ✅ **Exists** — asset confirmed available and spec-compliant
- ⚠️ **Exists but needs update** — asset exists but is outdated, off-brand, or wrong spec
- ❌ **Missing** — no asset exists; production required
- 🔲 **Not applicable** — channel/format not used for this campaign

### Step 4: Prioritize Gaps
After completing the matrix, rank all ❌ and ⚠️ items by:
1. **Urgency**: Days until campaign launch (soonest = highest priority)
2. **Reach impact**: High-volume channels (paid social, email) ranked above low-volume
3. **Effort estimate**: Flag which gaps can be filled by resizing/adapting existing assets vs. require net-new creative

### Step 5: Produce Gap Summary
Summarize findings with:
- Total assets inventoried
- Total gaps identified (split: missing vs. needs update)
- Top 5 critical gaps by priority score
- Recommended production sequence

## Output Format

Produce three sections in this order:

**1. Asset Inventory Matrix**
A markdown table with rows = Campaign Name, columns = Channel : Format. Each cell contains a status emoji (✅ / ⚠️ / ❌ / 🔲) and optionally a short note (e.g., "wrong size," "Q3 version").

**2. Gap Priority List**
A numbered list of all ❌ and ⚠️ items sorted by priority. Each line includes:
`[Priority #] | [Campaign] | [Channel] | [Format] | [Gap Type] | [Effort: Resize / Adapt / Net-new] | [Needed by: date or "ASAP"]`

**3. Inventory Summary**
4–6 bullet points covering:
- Total
