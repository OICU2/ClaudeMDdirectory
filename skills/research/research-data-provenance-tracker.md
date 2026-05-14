---
name: research-data-provenance-tracker
description: >
  Tracks and documents the complete origin, transformation history, and chain of custody for all datasets used in a research project to ensure full reproducibility. Use when someone says "where did this data come from," asks about dataset lineage, wants to document data transformations, needs to audit their data pipeline, or is preparing a reproducibility report. Automatically generates structured provenance records for each dataset step by step.
category: research
tags: [provenance, reproducibility, data-lineage, research-integrity, documentation]
author: community
---

# Research Data Provenance Tracker

This skill creates comprehensive provenance records for every dataset in a research project, capturing origin, transformations, and custody so any researcher can fully reproduce the work.

## Provenance Documentation Workflow

**Step 1: Identify All Datasets**
- List every dataset referenced in the project (raw inputs, intermediate files, final outputs)
- Assign each a unique ID (e.g., `DS-001`, `DS-002`)
- Note file names, formats, and approximate sizes

**Step 2: Document Origin for Each Dataset**
- Record the primary source: URL, DOI, database name, instrument, survey, or generator script
- Capture access date or collection date
- Note the license or data use agreement (e.g., CC-BY 4.0, proprietary, IRB-governed)
- Record the person or system responsible for acquisition

**Step 3: Map Transformation History**
- List every processing step applied in chronological order
- For each step record:
  - Operation performed (filter, merge, normalize, impute, aggregate, etc.)
  - Tool and version used (e.g., Python 3.11 / pandas 2.1.0, R 4.3 / dplyr 1.1.3)
  - Script or command that executed the transformation (file path or inline snippet)
  - Input dataset ID(s) → Output dataset ID
  - Operator who ran the step and timestamp

**Step 4: Record Chain of Custody**
- List every person or system that accessed or modified the dataset
- Note storage locations at each stage (local path, S3 bucket, institutional repository)
- Flag any transfer events (downloaded, shared, uploaded, archived)
- Record checksums (MD5 or SHA-256) for raw and final files to verify integrity

**Step 5: Flag Provenance Gaps**
- Identify any step where origin or transformation details are unknown or undocumented
- Mark gaps with `[MISSING]` and suggest how to recover the information (re-run logs, contact data provider, inspect version control history)

**Step 6: Link to Project Artifacts**
- Cross-reference each dataset record with the analysis scripts, figures, or tables that consume it
- Note which publication sections or results depend on each dataset

## Output Format

Produce one provenance record per dataset using this structure:

```
## Dataset: [Descriptive Name] | ID: DS-00X

**Origin**
- Source: [URL / DOI / instrument / database]
- Access/Collection Date: [YYYY-MM-DD]
- License: [license type]
- Acquired by: [name or system]

**Transformation History**
| Step | Operation | Tool + Version | Script/Command | Input → Output | Operator | Timestamp |
|------|-----------|---------------|----------------|----------------|----------|-----------|
| 1    | ...       | ...           | ...            | DS-00X → DS-00Y | ...    | ...       |

**Chain of Custody**
| Event | Person/System | Location | Date | Checksum |
|-------|--------------|----------|------|----------|
| Download | ... | ... | ... | SHA-256: ... |

**Provenance Gaps**
- [MISSING]: [description of gap and recovery suggestion]

**Linked Artifacts**
- Scripts: [file paths]
- Figures/Tables: [Figure 2, Table S1]
- Manuscript Sections: [Methods §2.3]
```

After all dataset records, append a **Provenance Summary Table** listing all dataset IDs, names, source types, and completeness status (Complete / Partial / Unknown) in a single markdown table.
