---
name: utm-parameter-management
description: >
  Generates, standardizes, and documents UTM tracking parameters across all marketing campaigns to ensure consistent attribution reporting. Use when someone says "I need UTM links for my campaign," asks about tracking URLs, wants to set up campaign attribution, needs to standardize UTM naming conventions, or is building a UTM tracking spreadsheet.
category: marketing
tags: [utm, tracking, attribution, analytics, campaign-management]
author: community
---

# UTM Parameter Management

This skill generates, validates, and documents properly formatted UTM tracking parameters to ensure consistent campaign attribution across all marketing channels and reporting tools.

## UTM Generation Workflow

1. **Gather campaign inputs** — Collect the destination URL, campaign name, marketing channel, traffic source, and content type before generating any parameters.

2. **Apply naming convention rules:**
   - Use lowercase only — no uppercase letters anywhere in UTM values
   - Replace spaces with hyphens (`-`), never underscores or `%20`
   - Remove special characters except hyphens
   - Keep values concise but descriptive (3–5 words max per parameter)

3. **Assign the five UTM parameters correctly:**
   - `utm_source` — The referrer platform (e.g., `google`, `linkedin`, `newsletter`)
   - `utm_medium` — The marketing channel type (e.g., `cpc`, `email`, `organic-social`, `display`)
   - `utm_campaign` — The campaign name or initiative (e.g., `q4-product-launch`, `spring-sale-2024`)
   - `utm_content` — The specific ad or link variant (e.g., `hero-banner`, `cta-button-blue`) — use when A/B testing
   - `utm_term` — Paid keyword (e.g., `project-management-software`) — use for paid search only

4. **Build the final URL** — Append parameters using `?` before the first parameter and `&` between each subsequent one. Validate that the base URL does not already contain a `?`.

5. **Flag conflicts or inconsistencies** — If the user provides parameters that contradict the naming convention or conflict with existing conventions they've shared, flag the issue and suggest a corrected version.

6. **Document in a tracking table** — Always output a structured record of every URL generated in the session for use in a master UTM spreadsheet.

7. **Offer a naming convention guide** — If the user has not established conventions, propose a standardized taxonomy for sources, mediums, and campaign naming patterns before generating links.

## Output Format

Produce the following for each UTM URL generated:

**Destination URL:** `https://example.com/landing-page`

**UTM Parameters:**
| Parameter     | Value                  |
|---------------|------------------------|
| utm_source    | linkedin               |
| utm_medium    | cpc                    |
| utm_campaign  | q4-product-launch      |
| utm_content   | sidebar-ad-v1          |
| utm_term      | *(not applicable)*     |

**Final Tracking URL:**
```
https://example.com/landing-page?utm_source=linkedin&utm_medium=cpc&utm_campaign=q4-product-launch&utm_content=sidebar-ad-v1
```

**Session Log (append each URL generated):**
| # | Source | Medium | Campaign | Content | Term | Full URL |
|---|--------|--------|----------|---------|------|----------|
| 1 | linkedin | cpc | q4-product-launch | sidebar-ad-v1 | — | `https://...` |

If generating multiple URLs in one request, produce one parameter table and final URL per link, then a single combined session log at the end. Keep the log copyable for direct paste into Google Sheets or Excel.
