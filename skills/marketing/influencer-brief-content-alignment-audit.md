---
name: influencer-brief-content-alignment-audit
description: >
  Compares influencer-published content against the original campaign brief to identify brand voice deviations, missing disclosures, and off-message claims. Use when someone says "check if this influencer post matches our brief," asks about whether a creator stayed on message, wants to audit influencer deliverables for compliance, needs to verify FTC disclosure requirements were met, or is reviewing content before approving payment to a creator.
category: marketing
tags: [influencer-marketing, brand-compliance, content-audit, FTC-disclosure, campaign-management]
author: community
---

# Influencer Brief Content Alignment Audit

This skill systematically compares influencer-published content against the original campaign brief to surface brand voice violations, missing legal disclosures, and off-message claims, and will activate whenever someone needs to evaluate creator deliverables against agreed-upon campaign requirements.

## Audit Workflow

1. **Ingest both documents.** Ask the user to provide (a) the original campaign brief and (b) the influencer's published content (URL, screenshot transcript, or pasted text). Do not proceed until both are available.

2. **Extract brief requirements.** Parse the brief into discrete checkable items across these categories:
   - Required key messages and claims
   - Prohibited claims, competitors, or topics
   - Mandatory brand voice descriptors (e.g., "playful," "authoritative," "inclusive")
   - Required disclosures (#ad, #sponsored, #gifted, or platform-native tags)
   - Required visual or verbal mentions (product name, tagline, URL, promo code)
   - Posting platform and format specifications
   - Timing or sequencing requirements

3. **Analyze the published content.** Map every element of the influencer's content against the extracted brief requirements. Flag each item as:
   - ✅ **Compliant** — requirement clearly met
   - ⚠️ **Partial** — requirement attempted but incomplete or ambiguous
   - ❌ **Non-compliant** — requirement missing or directly violated

4. **Check FTC and platform disclosure compliance.**
   - Confirm disclosure appears at the start of the caption or within the first 3 seconds of video, not buried
   - Verify the disclosure uses clear language ("Ad," "Paid partnership," "Sponsored") — not vague terms like "collab" or "sp"
   - Check platform-native disclosure tools are used where applicable (Instagram Paid Partnership label, YouTube paid promotion checkbox)
   - Flag if disclosure is present only in hashtags buried after a "more" cutoff

5. **Evaluate brand voice alignment.** Score the overall tone against the brief's voice descriptors on a 1–5 scale with a one-sentence rationale per descriptor.

6. **Identify off-message or harmful claims.** Flag any claims not substantiated in the brief, competitive references, exaggerated efficacy statements, or statements that could create legal liability.

7. **Generate remediation recommendations.** For every ❌ and ⚠️ item, provide a specific, actionable fix the influencer can implement (e.g., exact caption language, timestamp for re-edit, specific hashtag placement).

## Output Format

Produce a structured audit report with the following sections:

---

**INFLUENCER BRIEF ALIGNMENT AUDIT**
**Creator:** [name/handle]
**Platform:** [platform]
**Content reviewed:** [URL or description]
**Audit date:** [date]

---

**COMPLIANCE SUMMARY**
| Category | Status | Notes |
|---|---|---|
| Key messages | ✅ / ⚠️ / ❌ | |
| Prohibited content | ✅ / ⚠️ / ❌ | |
| Brand voice | ✅ / ⚠️ / ❌ | |
| FTC/platform disclosure | ✅ / ⚠️ / ❌ | |
| Required mentions | ✅ / ⚠️ / ❌ | |
| Format/platform specs | ✅ / ⚠️ / ❌ | |

---

**DETAILED FINDINGS**
List each non-compliant or partial item with:
- **Issue:** What is wrong or missing
- **Brief requirement:** Exact language from the brief
- **What was published:** Exact quote
