---
name: byline-consistency-cross-publication-audit
description: >
  Audits an author's name, title, and bio details for consistency across all published bylines and contributor pages. Use when someone wants to check if their author information matches everywhere it appears, asks whether their bio is consistent across publications, notices their credentials look different on different sites, wants to standardize how their name or title appears across outlets, or needs to reconcile conflicting versions of their contributor profile.
category: writing
tags: [byline, author-bio, consistency, publishing, contributor-profile]
author: community
---

# Byline Consistency Cross-Publication Audit

This skill audits an author's name, title, and bio across multiple publications or contributor pages to identify inconsistencies and produce a standardized canonical version.

## Audit Workflow

1. **Collect all source material** — Ask the user to provide every version of their byline, bio, and contributor page text they have. Accept raw text, URLs to scrape mentally, or pasted content from each publication.

2. **Extract key data fields** from each source:
   - Full name (spelling, middle initial, suffixes)
   - Professional title or role
   - Affiliated organization or employer
   - Credentials or certifications listed
   - Bio length and tone (first vs. third person)
   - Social handles or contact links
   - Headshot or photo credit (if noted)

3. **Map discrepancies field by field** — Compare each field across all sources. Flag:
   - Spelling or capitalization differences in the name
   - Outdated titles or former employers
   - Missing credentials in some versions but not others
   - Inconsistent person (first vs. third)
   - Truncated or expanded bios that contradict each other on facts

4. **Identify the most current and accurate version** of each field by asking the user to confirm their current title, employer, and preferred name format if conflicts exist.

5. **Draft a canonical bio set** — Produce three standardized bio lengths using the confirmed accurate details:
   - Short (25–40 words)
   - Medium (75–100 words)
   - Full (150–200 words)

6. **Produce a correction checklist** listing every publication where a specific field needs updating, with the exact change required.

## Output Format

Produce four clearly labeled sections:

**1. Discrepancy Report**
A table with columns: Publication | Field | Current Text | Issue. List every mismatch found.

**2. Canonical Data Sheet**
A simple reference list of the confirmed correct values for each field (name, title, employer, credentials, preferred bio person/tone).

**3. Standardized Bio Set**
Three ready-to-paste bios labeled Short, Medium, and Full, all in the author's confirmed preferred style.

**4. Correction Checklist**
A checklist formatted as: `[ ] [Publication Name] — Update [field] from "[old text]" to "[new text]"`. One line per required change, ordered by publication.
