---
name: research-archive-indexing-plan
description: >
  Designs a structured naming convention, folder taxonomy, and metadata tagging system for organizing raw data, transcripts, codebooks, and outputs from a research project for long-term retrieval. Use when someone says "help me organize my research files," asks about "how to archive qualitative data," wants to "set up a folder structure for my study," needs to "create a naming system for research documents," or is trying to "make my research project findable long-term."
category: research
tags: [archiving, file-organization, metadata, naming-conventions, research-data-management]
author: community
---

# Research Archive Indexing Plan

This skill generates a complete, project-specific archival system — including folder hierarchy, file naming conventions, and metadata tagging schema — for organizing and retrieving research project assets over the long term.

## Workflow

1. **Gather project context** — Before generating the plan, ask (or infer from context): research type (qualitative, quantitative, mixed), asset types present (transcripts, survey data, codebooks, memos, outputs), team size, and approximate project lifespan. If the user has already provided this, skip directly to generation.

2. **Design folder taxonomy** — Create a top-level folder structure with no more than 6 root folders. Use these canonical categories as a baseline and adapt to the project:
   - `00_admin` — protocols, IRB docs, consent forms, project management files
   - `01_raw-data` — unmodified source files (audio, video, survey exports, scraped data)
   - `02_transcripts` — verbatim transcripts, field notes, interview logs
   - `03_codebooks-and-instruments` — coding schemes, survey instruments, interview guides, data dictionaries
   - `04_analysis` — working files, annotated transcripts, intermediate outputs, memos
   - `05_outputs` — final reports, presentations, publications, visualizations

3. **Define file naming convention** — Construct a naming pattern using these components in order:
   - `[ProjectCode]_[AssetType]_[ParticipantOrSourceID]_[DateYYYYMMDD]_[Version].[ext]`
   - Example: `HLTH01_TRANS_P007_20240315_v1.docx`
   - Specify rules: no spaces (use hyphens or underscores), dates always ISO 8601, version always zero-padded (`v01`, `v02`), asset type codes defined in a legend.

4. **Define asset type codes** — Provide a short legend table mapping abbreviations to asset types:
   - `TRANS` = transcript, `RAW` = raw data file, `CODE` = codebook, `MEMO` = analytic memo, `INSTR` = instrument, `RPT` = report, `PRES` = presentation, `DICT` = data dictionary, `CONSENT` = consent form, `LOG` = process log.

5. **Design metadata tagging schema** — Specify a minimum set of metadata fields to embed in file headers, README files, or a master index spreadsheet:
   - Required fields: `project_id`, `asset_type`, `participant_id` (if applicable), `date_created`, `date_modified`, `version`, `status` (raw/working/final), `analyst`, `description` (1–2 sentences), `related_files`.
   - Recommend a `_INDEX.csv` master log at the project root with one row per file.

6. **Write a versioning and deprecation policy** — State clear rules: how to mark superseded files (`_DEPRECATED` suffix or archived subfolder), when to increment minor vs. major version numbers, and how to handle sensitive or embargoed files (separate `_restricted` subfolder with access notes).

7. **Provide a README template** — Write a short `README.md` template for the project root that captures: project title, lead researcher, dates, funding source, asset inventory summary, and a link to the master index.

## Output Format

Produce a single, self-contained archival plan document structured as follows:

1. **Project Archive Summary** — 2–3 sentence overview of the system tailored to the stated research type.
2. **Folder Taxonomy** — Rendered as an indented directory tree using ASCII art, showing root folders and key subfolders with inline descriptions.
3. **
