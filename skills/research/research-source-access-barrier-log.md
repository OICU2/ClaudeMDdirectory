---
name: research-source-access-barrier-log
description: >
  Systematically documents access barriers encountered during literature searches and identifies alternative retrieval strategies. Use when someone says they hit a paywall, asks how to access a locked paper, wants to find a restricted article, mentions they can't download a source, or needs to get around institutional access limitations. Produces a structured barrier log with concrete alternative paths for each blocked source.
category: research
tags: [research, access, paywall, literature-search, open-access]
author: community
---

# Research Source Access Barrier Log

This skill documents paywalls, login walls, and institutional access restrictions encountered during literature searches and proposes ranked alternative retrieval paths for each blocked source.

## Barrier Logging Workflow

1. **Capture the blocked source** — Record full citation details: title, authors, journal/publisher, DOI or URL, publication year.

2. **Classify the barrier type** — Categorize as one of:
   - Hard paywall (purchase required, no institutional route visible)
   - Institutional subscription gap (library doesn't hold this title)
   - Login wall (account required, affiliation unclear)
   - Embargo (open access delayed, specify embargo lift date if known)
   - Geo-restriction (content blocked by region)
   - Retracted or removed (source no longer available)

3. **Assess institutional access** — Note whether the user has university library access, interlibrary loan (ILL) eligibility, or professional association membership that may unlock the source.

4. **Generate alternative retrieval paths** — For each blocked source, propose in priority order:
   - **Unpaywall / open version**: Check for PubMed Central, institutional repositories, author personal pages, or preprint servers (arXiv, bioRxiv, SSRN, OSF).
   - **Direct author contact**: Draft a one-sentence email request to the corresponding author.
   - **Interlibrary Loan**: Flag if ILL is viable and estimate typical turnaround (3–7 business days).
   - **Legal free platforms**: Suggest Semantic Scholar, ResearchGate (where author-posted), Google Scholar PDF links, or OA Button.
   - **Substitute sources**: Identify equivalent sources (same findings, same data) that are openly accessible, if the specific paper is unrecoverable.

5. **Flag research impact** — Note whether the barrier is a minor gap (supplementary source) or a critical gap (central to the research question), so the user can prioritize retrieval effort.

6. **Update the log iteratively** — When a source is successfully retrieved, mark it resolved with the method used, so the log reflects current retrieval status.

## Output Format

Produce a structured markdown table followed by a retrieval action list.

**Barrier Log Table:**

| # | Source (Author, Year, Title) | DOI/URL | Barrier Type | Severity | Status |
|---|------------------------------|---------|--------------|----------|--------|
| 1 | Smith et al. 2021, "..." | doi:... | Hard paywall | Critical | Unresolved |

**Retrieval Action List** (one block per source):

```
Source #1 — Smith et al. 2021
Barrier: Hard paywall ($35 purchase, Elsevier)
Priority: Critical — central argument depends on this data

Alternative paths (in order):
1. Unpaywall: No OA version detected via Unpaywall extension
2. Preprint: Search arXiv/bioRxiv for "Smith 2021 [keywords]"
3. Author contact: Email j.smith@university.edu — "Dear Dr. Smith, could you share a reprint of [title]?"
4. ILL: Submit ILL request via your library portal; est. 3–5 days
5. Substitute: Chen et al. 2020 (PubMed Central, free) covers same dataset
```

Keep the log concise — one table row and one action block per source. Do not summarize retrieved sources; only document barriers and paths forward.
