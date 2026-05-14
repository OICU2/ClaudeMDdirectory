---
name: rfp-response-builder
description: >
  Parses incoming RFP documents and maps each requirement to pre-approved company responses, flagging gaps that need custom answers from subject matter experts. Use when someone says "we received an RFP," asks to "respond to this proposal request," wants to "build out our RFP response," needs to "map requirements to our capabilities," or is trying to "identify gaps in our RFP coverage."
category: sales
tags: [rfp, proposals, sales-enablement, response-management, bid-management]
author: community
---

# RFP Response Builder

This skill parses RFP documents section by section, matches each requirement against a library of pre-approved responses, and produces a structured response draft with clearly flagged gaps requiring SME input.

## RFP Parsing and Response Mapping Workflow

### Step 1: Ingest and Structure the RFP
- Accept the RFP as pasted text, uploaded document, or URL
- Extract and number every discrete requirement, question, or evaluation criterion
- Categorize each item by section (e.g., Technical, Security, Pricing, Legal, Company Background, References)
- Note mandatory vs. optional requirements and any stated word/page limits

### Step 2: Match Requirements to Pre-Approved Responses
- For each numbered requirement, check against the provided response library (boilerplate, case studies, certifications, standard SLA language, etc.)
- Assign one of three match statuses to each requirement:
  - **COVERED** — existing approved content directly addresses the requirement
  - **PARTIAL** — existing content partially addresses it but needs customization
  - **GAP** — no approved content exists; requires SME input
- Pull the exact approved text or excerpt for COVERED and PARTIAL items

### Step 3: Flag and Prioritize Gaps
- List all GAP and PARTIAL items in a prioritized queue
- For each gap, specify: the requirement text, why existing content doesn't cover it, the suggested SME owner (e.g., Legal, Engineering, Finance), and the deadline impact if unanswered
- Highlight any gaps in mandatory sections as CRITICAL

### Step 4: Draft the Response Document
- For COVERED items, insert approved content verbatim or with minimal formatting edits
- For PARTIAL items, insert approved content with [CUSTOMIZE: instruction] inline markers showing exactly what needs adjustment
- For GAP items, insert a placeholder: [SME INPUT NEEDED: @owner — requirement summary — due date]
- Preserve the RFP's original section order and numbering throughout

### Step 5: Generate the SME Action List
- Compile all flagged items into a separate action list grouped by SME owner
- Include: item number, section name, full requirement text, context on why it's a gap, and suggested response angle if inferable

## Output Format

Produce two distinct blocks:

**Block 1 — Draft RFP Response**
- Mirrors the RFP's original structure and numbering
- Each response entry contains: requirement number, requirement text (quoted), response status badge (COVERED / PARTIAL / GAP), and response content or placeholder
- Inline markers use bracket notation for all customization and SME input points
- Length matches RFP scope; no padding

**Block 2 — SME Action Log**
- Table format with columns: Item # | Section | Requirement Summary | Gap Reason | SME Owner | Priority (Critical / High / Medium) | Suggested Angle
- Sorted by Priority descending
- Includes a summary line: total requirements, covered count, partial count, gap count, and estimated completion risk if gaps remain unaddressed
