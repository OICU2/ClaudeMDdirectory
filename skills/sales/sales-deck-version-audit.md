---
name: sales-deck-version-audit
description: >
  Compares multiple versions of a sales deck to identify outdated statistics, inconsistent messaging, and slides that no longer align with current positioning. Use when someone says "our deck has gotten out of date," asks about inconsistencies across deck versions, or wants to clean up messaging before a major pitch. Also triggers when someone shares multiple deck files and asks which version is most accurate or whether the content still reflects current positioning.
category: sales
tags: [sales-deck, version-control, messaging, audit, presentation]
author: community
---

# Sales Deck Version Audit

This skill systematically compares multiple sales deck versions to surface outdated data, messaging drift, and positioning misalignment so sales teams can consolidate to a single accurate, on-brand deck.

## Audit Workflow

1. **Inventory all versions**: List each deck version provided (by filename, date, or version label). Note the total slide count and last modified date if available.

2. **Extract key content categories** from each version:
   - Statistics, percentages, and market data (with sources if cited)
   - Product names, feature descriptions, and pricing mentions
   - Customer logos, case studies, and testimonials
   - Company positioning statements and value propositions
   - CTAs and next-step language

3. **Flag outdated statistics**: Identify any numbers, market size claims, or data points that differ across versions. Mark each as: `[OUTDATED]`, `[CONFLICTING]`, or `[VERIFY NEEDED]` with the specific slide and version reference.

4. **Map messaging inconsistencies**: Compare value proposition language, taglines, and positioning statements side by side. Highlight where tone, terminology, or core claims contradict each other across versions.

5. **Identify deprecated content**: Flag slides referencing discontinued products, former customers who churned, resolved case studies, or old branding.

6. **Recommend the canonical version**: Based on recency, accuracy, and alignment with stated current positioning, identify which version is closest to correct and what patches it still needs.

7. **Produce a merge recommendation**: List the specific slides from non-canonical versions that contain content worth preserving.

## Output Format

Produce a structured audit report with the following sections:

**Version Inventory Table**
| Version | Slide Count | Notable Date/Label | Overall Status |

**Outdated Statistics Log**
Bullet list: `[Version X, Slide #] — Claim: "..." — Issue: conflicts with Version Y / likely stale — Recommended action`

**Messaging Inconsistency Matrix**
Side-by-side comparison of key positioning statements across versions, with a `Recommended` column.

**Deprecated Content List**
Slide-by-slide list of content that should be removed entirely, with a one-line reason for each.

**Canonical Version Recommendation**
One paragraph naming the best base version and summarizing the 3–7 specific changes needed to make it production-ready.

**Salvage List**
Bulleted list of slides from non-canonical versions worth merging in, with source version and slide number.

Keep the report scannable. Use tables and bullets throughout. Avoid narrative paragraphs except in the canonical version recommendation.
