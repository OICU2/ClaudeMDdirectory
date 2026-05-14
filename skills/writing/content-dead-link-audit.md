---
name: content-dead-link-audit
description: >
  Checks all hyperlinks embedded in a piece of content and flags broken or redirected URLs for replacement or removal. Use when someone says "audit the links in my article," asks to "check for dead links," wants to "verify all URLs still work," needs to "clean up broken links before publishing," or requests a "link health check" on their content.
category: writing
tags: [links, seo, content-quality, audit, urls]
author: community
---

# Content Dead Link Audit

This skill systematically extracts, categorizes, and evaluates every hyperlink in a given piece of content, producing a prioritized report of broken, redirected, and risky URLs so the writer can act immediately.

## Link Audit Workflow

1. **Extract all URLs** — Parse the provided content and list every hyperlink, including anchor text, the full URL, and its location (e.g., paragraph number, section heading, or line number).

2. **Categorize by type before checking** — Group links into: internal (same domain), external (third-party), and resource links (PDFs, downloads, images). Different categories carry different risk profiles.

3. **Assess each link** — For each URL, determine its likely status using available signals (domain age, URL patterns, known defunct services, redirect chains visible in the URL itself). Flag:
   - **Broken (404/gone)** — Domain no longer exists, URL returns obvious error pattern, or service is known to have shut down.
   - **Likely redirected** — URL structure suggests a moved page (old slugs, deprecated paths, legacy subdomains).
   - **Risky/suspicious** — Links to sites with known instability, paywalled content, social media posts that could be deleted, or content that may have changed meaning.
   - **Healthy** — No red flags detected.

4. **Assign priority** — Rate each flagged link as High (must fix before publishing), Medium (fix soon), or Low (monitor).

5. **Suggest replacements** — For broken or outdated links, suggest one of: find an updated version of the same source, replace with an archived version (Wayback Machine URL pattern), find an equivalent authoritative source, or remove the link entirely if the anchor text stands alone.

6. **Surface structural issues** — Note if the content is over-reliant on a single domain, links to social posts or ephemeral content, or uses bare URLs instead of descriptive anchor text.

## Output Format

Produce a structured audit report with the following sections:

**Summary**
- Total links found
- Count by status (broken / redirected / risky / healthy)
- Overall link health score (Healthy / Needs Attention / Critical)

**Flagged Links Table**
For each problematic link, one row containing:
| # | Anchor Text | URL | Issue | Priority | Recommended Action |

**Healthy Links**
A collapsed or brief list of URLs with no issues detected.

**Structural Observations**
2–5 bullet points on patterns — over-reliance on one source, ephemeral links, missing anchor text, etc.

**Next Steps**
A numbered list of the top 3–5 actions the writer should take, ordered by priority.

Keep the report scannable. Use tables and bullets. Do not write prose paragraphs in the flagged links section.
