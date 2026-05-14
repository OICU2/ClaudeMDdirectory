---
name: research-data-access-rights-log
description: >
  Maintains a structured log of licensing terms, access restrictions, and permissible uses for each data source in a research project. Use when someone asks about tracking data source licenses, wants to document what they're allowed to do with a dataset, needs to check usage rights before publishing results, is worried about data compliance for a research project, or wants to record access conditions for proprietary or restricted datasets.
category: research
tags: [data-governance, licensing, compliance, research-management, data-access]
author: community
---

# Research Data Access Rights Log

Builds and maintains a comprehensive rights log for all data sources in a research project, capturing licensing terms, access restrictions, and permitted uses so researchers can verify compliance before analysis or publication.

## Workflow

1. **Identify the data source** — Capture the dataset name, version, provider/owner, URL or DOI, and date accessed.
2. **Extract license type** — Record the exact license (e.g., CC BY 4.0, proprietary agreement, DUA, public domain, restricted institutional license). If unknown, flag as `UNVERIFIED`.
3. **Document access conditions** — Note how access was obtained (open download, registration, data use agreement, IRB approval, paid subscription, etc.).
4. **Enumerate permitted uses** — List explicitly what is allowed: academic research, commercial use, redistribution, derivative works, sublicensing, training ML models.
5. **Enumerate restrictions** — List what is prohibited or requires additional approval: publication of raw data, sharing with third parties, use beyond stated research purpose, geographic restrictions.
6. **Record attribution requirements** — Capture any required citations, acknowledgment language, or logos that must appear in publications.
7. **Set expiry and renewal flags** — Note if access expires, requires annual renewal, or is tied to an active subscription or agreement.
8. **Assign a compliance status** — Label each source as `CLEAR`, `CONDITIONAL`, `RESTRICTED`, or `UNVERIFIED` based on the gathered information.
9. **Flag conflicts** — If any source's terms conflict with the intended research use (e.g., publication plans, open-access requirements from a funder), raise an explicit warning.

## Output Format

Produce a Markdown table followed by a per-source detail block.

**Summary Table:**
| # | Dataset Name | Version | Provider | License | Access Method | Compliance Status |
|---|-------------|---------|----------|---------|---------------|-------------------|

**Per-Source Detail Block** (one per dataset):
```
### [Dataset Name]
- **Version:** ...
- **Provider/Owner:** ...
- **URL/DOI:** ...
- **Date Accessed:** ...
- **License:** ...
- **Access Method:** ...
- **Permitted Uses:** ...
- **Restrictions:** ...
- **Attribution Required:** ...
- **Expiry/Renewal:** ...
- **Compliance Status:** CLEAR | CONDITIONAL | RESTRICTED | UNVERIFIED
- **⚠ Conflicts/Warnings:** (if any)
```

If information is missing, insert `[NEEDS VERIFICATION]` rather than omitting the field. End the log with a **Compliance Summary** paragraph stating which sources require follow-up action before the project proceeds.
