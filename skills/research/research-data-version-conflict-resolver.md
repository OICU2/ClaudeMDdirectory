---
name: research-data-version-conflict-resolver
description: >
  Detects and documents conflicting versions of the same dataset used across multiple research workstreams and recommends a canonical source. Use when someone says "our teams are using different versions of the data," asks about why results don't match across analyses, or wants to figure out which dataset version is correct. Also triggers when someone notices version mismatches in reports, needs to standardize data sources across a project, or is trying to reconcile inconsistent findings between research groups.
category: research
tags: [data-versioning, research-ops, data-governance, reproducibility, conflict-resolution]
author: community
---

# Research Data Version Conflict Resolver

This skill systematically identifies, documents, and resolves dataset version conflicts across research workstreams by auditing sources, mapping discrepancies, and recommending a single canonical version.

## Conflict Detection and Resolution Workflow

**Step 1: Inventory All Dataset References**
- Ask the user to provide or list all dataset references in use across workstreams (file names, paths, database table names, version tags, download dates, DOIs, or source URLs)
- If working inside a codebase, scan for import statements, data loading calls, config files, and hardcoded paths that reference datasets
- Record: workstream name, dataset identifier, version label or timestamp, source location, and who owns or maintains it

**Step 2: Fingerprint Each Dataset Version**
- For each unique dataset reference, extract identifying metadata: row count, column count, date range, checksum or hash if available, file size, and schema/column names
- Flag any two references to the "same" dataset that differ on any of these dimensions
- Group references into conflict clusters — sets of files or tables that are supposed to be the same data but are not identical

**Step 3: Trace the Origin of Each Version**
- For each version in a conflict cluster, determine: original source (URL, database, vendor, instrument), download or export date, any transformations applied (filtering, imputation, normalization), and who performed them
- Identify if version differences stem from: update cycles (one team has newer data), preprocessing choices, data access tier differences, or simple retrieval errors

**Step 4: Score Versions for Canonicality**
Apply these criteria to rank versions and select the canonical one:
1. **Provenance completeness** — version with the most documented lineage scores highest
2. **Recency** — prefer the most recent stable release unless reproducibility requires an older snapshot
3. **Official source alignment** — prefer versions pulled directly from the authoritative source (e.g., official registry, vendor API, published repository)
4. **Community or institutional adoption** — prefer the version already used in published or peer-reviewed outputs from the team
5. **Schema completeness** — prefer the version with the most complete, uncorrupted fields

**Step 5: Document the Conflict and Decision**
- Write a structured conflict report (see Output Format)
- Specify exactly what each non-canonical workstream must do to migrate: re-download, re-run preprocessing, update config references, or re-run downstream analyses

**Step 6: Recommend Governance Actions**
- Suggest a single shared data store or pointer (e.g., a pinned S3 path, a locked database snapshot, a DOI-referenced archive)
- Recommend a version-locking mechanism: checksums in config files, DVC tracking, or a data manifest file
- Flag any analyses that must be rerun due to the version switch

## Output Format

Produce a structured **Data Version Conflict Report** with these sections:

```
## Data Version Conflict Report

**Dataset:** [name of the dataset in conflict]
**Date of Audit:** [today's date]
**Conflict Severity:** [Low / Medium / High — based on how much results diverge]

---

### Versions Detected

| Workstream | Version ID / Date | Source | Rows | Key Differences |
|---|---|---|---|---|
| [Team A] | [v2.1 / 2024-03-01] | [URL or path] | [N] | [e.g., missing Q4 data] |
| [Team B] | [v2.3 / 2024-11-15] | [URL or path] | [N] | [e.g., includes updated corrections] |

---

### Root Cause
[1–3 sentences explaining why the versions diverged — e.g., teams downloaded at different
