---
name: digital-asset-management
description: >
  Organizes, categorizes, and manages digital files, media, and content assets across the business. Use when someone says "help me organize our files," asks about managing digital media, wants to set up a folder structure, needs to audit existing assets, or wants to establish a naming convention system.
category: operations
tags: [file-management, media, content, organization, assets]
author: community
---

# Digital Asset Management

This skill helps structure, organize, audit, and maintain digital files and media assets with consistent naming conventions, folder hierarchies, and retrieval workflows.

## Asset Management Workflow

### 1. Assess Current State
- Ask what types of assets exist (images, video, docs, audio, brand files, templates)
- Identify where assets currently live (local drives, cloud storage, DAM platforms)
- Determine team size and who needs access
- Note any existing structure or pain points

### 2. Define Folder Hierarchy
Build a logical top-level structure based on asset type and usage:
```
/Assets
  /Brand
    /Logos (SVG, PNG, EPS variants)
    /Colors-Typography
    /Guidelines
  /Marketing
    /Campaigns (subfolder per campaign: YYYY-MM-CampaignName)
    /Social (subfolder per platform)
    /Email
  /Product
    /Photography
    /Videos
    /Screenshots
  /Internal
    /Templates
    /Presentations
    /Documents
  /Archive
```
Adapt structure to the specific business context provided.

### 3. Establish Naming Conventions
Apply consistent file naming using this pattern:
`[Category]-[Descriptor]-[Version]-[Date].[ext]`

Examples:
- `logo-primary-horizontal-v2-2024.svg`
- `campaign-summer-sale-hero-banner-v1-20240601.jpg`
- `template-email-newsletter-v3.html`

Rules:
- Lowercase only
- Hyphens instead of spaces or underscores
- Include version numbers for iterated files (`v1`, `v2`)
- Use ISO date format (`YYYYMMDD`) when date is relevant
- Never use special characters: `! @ # $ % & * ( )`

### 4. Metadata and Tagging Standards
- Define required metadata fields: title, description, tags, owner, expiry date
- Assign ownership tags by department or project
- Mark assets with status: `active`, `draft`, `archived`, `expired`
- Tag assets with usage rights and licensing information

### 5. Access and Permissions Model
- Define roles: Admin, Editor, Contributor, Viewer
- Map roles to departments or job functions
- Identify assets that require restricted access (confidential, licensed)
- Document where permissions are managed

### 6. Audit Process
When auditing existing assets:
1. Export a full file list with metadata
2. Flag duplicates by name similarity and file size
3. Identify files with no naming convention applied
4. Mark assets older than [defined threshold] for archival review
5. Produce a migration or cleanup task list

### 7. Ongoing Governance Rules
- New assets must follow naming convention before upload
- Quarterly review of `/Archive` folder — delete after 1 year unless flagged
- Assign a DAM owner per department responsible for compliance
- Monthly check for broken links or missing files in shared repositories

## Output Format

Produce a structured DAM plan with the following sections:

1. **Folder Structure** — full tree diagram using code block formatting
2. **Naming Convention Guide** — pattern template + 5 real examples relevant to the business
3. **Metadata Fields Table** — markdown table with Field, Required/Optional, Example Value
4. **Access Roles Table** — markdown table with Role, Permissions, Who Gets It
5. **Audit Checklist** — numbered list of immediate action items if auditing existing files
6. **Governance Rules** — bullet list of 5–8 standing rules for the team to follow

Keep the total output scannable. Use headers, tables, and code blocks. Avoid prose paragraphs where a list or table works better.