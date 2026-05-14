---
name: marketing-asset-version-control-log
description: >
  Establishes a structured tracking system for all marketing creative assets that records version history, approval status, and active deployment locations. Use when someone says "track my marketing assets," asks about "managing creative versions," wants to "log asset approvals," needs to "document where assets are running," or wants to "set up a version control system for marketing files."
category: marketing
tags: [version-control, asset-management, creative-ops, approval-tracking, deployment]
author: community
---

# Marketing Asset Version Control Log

This skill creates and maintains a structured version control log for marketing creative assets, tracking every iteration, approval state, and deployment location in a single auditable system.

## Asset Log Workflow

### 1. Capture Asset Identity
For each asset, record:
- **Asset ID**: Unique identifier (format: `[BRAND]-[TYPE]-[CAMPAIGN]-[###]`, e.g., `ACME-BANNER-Q1LAUNCH-001`)
- **Asset Name**: Human-readable descriptive name
- **Asset Type**: Display ad / Social post / Email / Video / Print / Landing page / Copy / Other
- **Campaign**: Associated campaign or initiative name
- **Owner**: Responsible team member or department

### 2. Log Version History
For each version, capture:
- **Version Number**: Semantic format `v1.0`, `v1.1`, `v2.0` (major changes increment first digit)
- **Date Created**: ISO format `YYYY-MM-DD`
- **Created By**: Name or role
- **Change Summary**: One-line description of what changed from the prior version
- **File Location**: Full path or URL to the asset file (cloud storage, DAM, or local path)
- **File Format**: PNG / MP4 / PDF / DOCX / HTML / etc.
- **Dimensions/Specs**: Relevant technical specs (e.g., `1200x628px`, `30s`, `600px wide`)

### 3. Record Approval Status
Track approval state using these exact statuses:
- `DRAFT` — In progress, not submitted for review
- `IN REVIEW` — Submitted, awaiting stakeholder feedback
- `CHANGES REQUESTED` — Feedback received, revisions needed
- `APPROVED` — Signed off, cleared for deployment
- `REJECTED` — Not approved, requires major rework or retirement
- `ARCHIVED` — Retired from active use

For each status change, log:
- Status value
- Date of status change
- Approver name/role
- Notes or conditions attached to approval

### 4. Document Deployment Locations
For approved assets, record every active placement:
- **Channel**: Google Ads / Meta / Email / Website / Print / OOH / etc.
- **Placement**: Specific ad set, campaign, URL, publication, or location
- **Go-Live Date**: When the asset was deployed
- **End Date**: Scheduled or actual end of deployment (leave blank if ongoing)
- **Performance Tag**: Optional link to analytics report or campaign ID

### 5. Maintain the Master Log
- Never delete rows — mark outdated versions as `ARCHIVED`
- When a new version supersedes another, note the successor version in the old version's row
- Flag any asset deployed without `APPROVED` status as `⚠️ UNAUTHORIZED DEPLOYMENT`
- Review and reconcile the log at the end of each campaign sprint or monthly, whichever comes first

## Output Format

Produce a structured markdown table log with the following sections:

**Section 1 — Asset Registry Table**
| Asset ID | Asset Name | Type | Campaign | Owner |
One row per unique asset.

**Section 2 — Version History Table**
| Asset ID | Version | Date | Created By | Change Summary | File Location | Format | Specs |
One row per version of each asset.

**Section 3 — Approval Log Table**
| Asset ID | Version | Status | Status Date | Approver | Notes |
One row per status change event (multiple rows per version if status changed multiple times).

**Section 4 — Deployment Log Table**
| Asset ID | Version | Channel | Placement | Go-Live Date | End Date | Performance Tag |
One row per deployment instance.

**Section 5 — Summary Dashboard (text block)**
- Total assets tracked
- Count by approval status
- Assets currently deployed
- Versions flagged for unauthorized deployment
