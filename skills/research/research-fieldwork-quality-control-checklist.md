---
name: research-fieldwork-quality-control-checklist
description: >
  Generates a standardized quality control checklist for fieldwork operations covering interviewer compliance, data entry accuracy, and response validity. Use when someone asks about fieldwork quality checks, needs to validate survey data collection, wants to audit interviewer performance, is preparing for fieldwork QC review, or needs to ensure data integrity in field research operations.
category: research
tags: [fieldwork, quality-control, survey-research, data-validation, interviewer-management]
author: community
---

# Research Fieldwork Quality Control Checklist

This skill generates a comprehensive, structured QC checklist for fieldwork operations that research teams can use to audit interviewers, validate data, and ensure response integrity across field data collection projects.

## Workflow

1. **Gather context** — Ask the user for: study type (quantitative/qualitative), data collection method (CAPI, CATI, PAPI, online), sample size, number of interviewers, and any known problem areas or prior QC failures.

2. **Structure the checklist into five core domains:**

   - **Interviewer Compliance** — Verify interviewers followed screening criteria, read questions verbatim, did not prompt or lead respondents, adhered to skip logic, and obtained proper consent.
   - **Data Entry Accuracy** — Check for completeness of mandatory fields, correct data type entry, within-range values, consistent coding of open-ended responses, and absence of duplicate records.
   - **Response Validity** — Flag straight-lining in scale questions, unusually short interview durations, contradictory response patterns (e.g., claims no car but rates car features), and implausible demographic combinations.
   - **Sampling & Quota Compliance** — Confirm quotas are met by segment (age, gender, region, etc.), verify respondent eligibility against screening criteria, and check geographic distribution matches target.
   - **Back-check & Verification** — List back-check questions to re-contact a defined percentage of respondents (typically 10–20%), confirm interview occurrence, validate key responses, and check respondent identity.

3. **Assign severity levels** to each checklist item:
   - **Critical** — Data cannot be used if failed (e.g., ineligible respondent interviewed)
   - **Major** — Requires correction or re-interview before use
   - **Minor** — Flag for monitoring; data usable with notation

4. **Add thresholds and decision rules** — Specify acceptable error rates per interviewer (e.g., >5% critical errors triggers suspension), define batch rejection criteria, and note escalation steps.

5. **Tailor to method** — If CATI/CAPI, include system log checks (GPS timestamps, call recordings, paradata). If PAPI, include legibility checks, supervisor sign-off fields, and physical form handling protocol.

## Output Format

Produce a structured markdown checklist with the following layout:

```
# Fieldwork QC Checklist — [Study Name / Method]

## Pre-fieldwork Sign-off
- [ ] [Item] — [Severity: Critical/Major/Minor]

## Interviewer Compliance
- [ ] [Item] — [Severity]

## Data Entry Accuracy
- [ ] [Item] — [Severity]

## Response Validity Checks
- [ ] [Item] — [Severity]

## Sampling & Quota Verification
- [ ] [Item] — [Severity]

## Back-check Protocol
- [ ] [Item] — [Severity]

## Decision Rules & Thresholds
[Short table or bullet list: condition → action]

## Sign-off
Reviewer: ____________  Date: ____________  Batch ID: ____________
```

- Length: 40–70 checklist items total across all sections
- Each item must be a binary pass/fail check (yes/no or met/not met)
- Include a summary decision rules table at the end
- Deliver in markdown; note if a Word/Excel version would be more practical for field use
