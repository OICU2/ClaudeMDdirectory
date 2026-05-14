---
name: brand-color-usage-consistency-audit
description: >
  Audits marketing assets across channels to identify inconsistencies in brand color usage and generates a prioritized remediation checklist for design alignment. Use when someone says "our brand colors look off across platforms," asks about color consistency in marketing materials, wants to audit their visual brand identity, needs to find where brand guidelines are being violated, or is preparing for a brand refresh and wants a baseline assessment.
category: marketing
tags: [brand-consistency, color-audit, design-systems, marketing-assets, brand-guidelines]
author: community
---

# Brand Color Usage Consistency Audit

This skill audits marketing assets across channels to surface color inconsistencies against brand guidelines and produces a structured remediation checklist designers and marketers can act on immediately.

## Audit Workflow

### 1. Gather Brand Color Reference
- Request the official brand color palette (hex, RGB, CMYK, Pantone values)
- If no formal guidelines exist, extract the dominant colors from the provided primary asset (e.g., logo file or brand kit)
- Document primary, secondary, and accent colors separately
- Note approved usage rules (e.g., "primary blue for CTAs only," "never use gradient on dark backgrounds")

### 2. Inventory Assets by Channel
Collect and categorize assets across:
- **Digital**: website, email templates, social media (each platform separately), display ads, app UI
- **Print**: brochures, business cards, signage, packaging
- **Presentations**: slide decks, pitch templates, internal docs
- **Video/Motion**: intros, lower thirds, thumbnail templates

For each asset, record: asset name, channel, file type, and who owns it.

### 3. Identify Color Inconsistencies
For each asset, check:
- Exact hex/RGB values used vs. approved values (flag any deviation > 5% in any channel)
- Unauthorized color substitutions (e.g., a slightly different blue used as a "close enough" replacement)
- Platform-specific drift (colors that render differently due to missing color profiles or incorrect color space — RGB vs. CMYK vs. sRGB)
- Outdated palette usage (assets predating a rebrand still using old colors)
- Accessibility violations (insufficient contrast ratios per WCAG 2.1 AA: 4.5:1 for text, 3:1 for UI components)

### 4. Severity Classification
Assign each inconsistency a severity level:
- **Critical**: Customer-facing assets with wrong brand colors, accessibility failures
- **High**: High-traffic digital assets with noticeable deviation
- **Medium**: Internal or low-traffic assets with minor deviation
- **Low**: Legacy assets scheduled for retirement or rarely used

### 5. Root Cause Tagging
Tag each issue with its likely cause:
- `[NO-GUIDELINES]` — brand guidelines were never distributed
- `[OUTDATED-ASSET]` — asset predates current palette
- `[PLATFORM-DRIFT]` — color space or rendering issue
- `[HUMAN-ERROR]` — wrong value entered manually
- `[VENDOR-PRODUCED]` — third-party created without proper specs

## Output Format

Produce three sections:

**Section 1 — Audit Summary Table**
A markdown table with columns: Asset Name | Channel | Issue Description | Severity | Root Cause Tag | Current Value | Correct Value

**Section 2 — Remediation Checklist**
A prioritized checklist ordered by severity (Critical → Low). Each item must include:
- [ ] Asset name and location
- Specific fix required (e.g., "Update CTA button hex from #2A5FBF to #1E4FCC in email header template")
- Assigned owner role (Designer / Developer / Vendor)
- Suggested deadline tier (Immediate / This Sprint / Next Quarter)

**Section 3 — Prevention Recommendations**
3–5 bullet points addressing systemic fixes based on the root causes found (e.g., distribute a color swatch library, implement design tokens, set up automated brand compliance tooling). Keep each recommendation to 2 sentences maximum.

Total output length: scale with asset volume. For audits under 20 assets, expect 1–2 pages. For 20+ assets, use the table format to keep output scannable.
