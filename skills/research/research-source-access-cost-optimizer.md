---
name: research-source-access-cost-optimizer
description: >
  Analyzes required research sources and maps the lowest-cost legal access path for each one by comparing paywalled, open-access, and institutional routes. Use when someone says "I need access to these papers," asks about "how to get articles without paying," or wants to "find the cheapest way to access research sources." Also activates when someone mentions "journal paywall," "can't afford this article," or "need to access academic papers on a budget."
category: research
tags: [research, access, cost-optimization, open-access, academic]
author: community
---

# Research Source Access Cost Optimizer

This skill evaluates every required source against multiple access channels and returns a prioritized, cost-ranked access plan so researchers spend the minimum necessary to get all required materials legally.

## Access Route Evaluation Workflow

**Step 1: Inventory the sources**
- Collect the full list of required sources (DOI, title, journal, author, year).
- Flag each source type: journal article, book, conference paper, report, dataset.

**Step 2: Check free routes first (in priority order)**
For each source, check these channels in sequence and stop at the first viable free option:

1. **Open Access repositories** — Search Unpaywall, PubMed Central, Europe PMC, arXiv, SSRN, bioRxiv, DOAJ.
2. **Author-hosted copies** — Check ResearchGate, Academia.edu, author institutional pages, Google Scholar "All versions."
3. **Institutional repository** — Check the publishing institution's own repository.
4. **Library Genesis / Anna's Archive** — Note availability but flag legal ambiguity by jurisdiction.
5. **Open Access journal version** — Check if a Gold or Diamond OA version exists on the publisher site.

**Step 3: Check low-cost institutional routes**
If free routes fail:
- **Interlibrary Loan (ILL)** — Free if the user has any library card (public, university, alumni). Note typical wait time (1–5 business days).
- **GetItNow / Reprints Desk** — Pay-per-article services, typically $8–$35.
- **University library day pass or alumni access** — Often free or $10–$25/day.
- **Personal subscription vs. one-off purchase** — Calculate break-even if accessing 5+ articles from the same publisher.

**Step 4: Fallback — direct purchase**
If all above fail, record the publisher's direct purchase price and note any applicable discounts (author request, research4life eligibility for low-income countries).

**Step 5: Assign a cost tier to each source**
- 🟢 **Free** — Confirmed available via OA or repository
- 🟡 **Free with effort** — ILL, author email request, library card required
- 🟠 **Low cost** — $1–$25 via pay-per-article or library pass
- 🔴 **Full price** — Publisher direct purchase, no discount available

**Step 6: Aggregate and optimize**
- Total estimated cost for the full source list.
- Flag if a single subscription or bundle would be cheaper than buying articles individually.
- Identify sources where emailing the corresponding author is likely to succeed (recent papers, active researchers).

## Output Format

Produce a markdown table with one row per source, followed by a summary block.

**Per-source table columns:**
| # | Source (Author, Year, Title) | Free Route Found | Access Method | Estimated Cost | Action Required |

**After the table, include:**

**Cost Summary**
- Total sources: N
- Free/no-cost: N (list methods)
- Low-cost: N (estimated total: $X)
- Full price: N (estimated total: $X)
- **Estimated total spend: $X–$Y**

**Recommended Action Sequence**
1. [Specific first action — e.g., "Download these 4 papers directly from PubMed Central: [links or search strings]"]
2. [Second action — e.g., "Submit ILL requests for these 3 sources today to meet your deadline"]
3. [Third action — e.g., "Email these 2 authors requesting a preprint copy"]
4. [Final action — e.g., "Purchase these 1–2 remaining sources via GetItNow
