---
name: developer-portal-content-gap-audit
description: >
  Reviews existing developer portal documentation to identify missing guides, outdated API references,
  and absent code samples that block third-party integration success. Use when someone says their
  developer portal feels incomplete, asks why third-party developers are struggling to integrate,
  or wants to find gaps in their API documentation. Also activates when someone needs to audit
  documentation coverage, identify missing tutorials, or benchmark their portal against integration requirements.
category: developer
tags: [documentation, api, developer-experience, audit, content-strategy]
author: community
---

# Developer Portal Content Gap Audit

This skill systematically audits a developer portal to surface missing guides, stale API references, and absent code samples that create friction for third-party integrators.

## Audit Workflow

### 1. Inventory What Exists
Request or accept a list of current portal contents. Categorize each item into:
- **Getting Started / Quickstart guides**
- **Authentication & authorization docs**
- **API reference pages** (per endpoint or resource)
- **SDK / client library docs**
- **Code samples and tutorials**
- **Changelog / versioning info**
- **Error reference and troubleshooting**
- **Webhooks / event docs** (if applicable)

### 2. Map Against Integration Lifecycle
Check coverage across every stage a third-party developer must pass through:

| Stage | Required Content | Present? | Gap Severity |
|---|---|---|---|
| Discovery | Overview, use cases, architecture diagram | | |
| Onboarding | Account setup, credential generation, first API call | | |
| Authentication | OAuth, API key, token refresh flows with examples | | |
| Core Integration | All primary endpoints documented with request/response examples | | |
| Error Handling | Status codes, error payloads, retry guidance | | |
| Edge Cases | Rate limits, pagination, field validation rules | | |
| Production Readiness | Security checklist, SLA info, monitoring guidance | | |
| Maintenance | Changelog, deprecation policy, migration guides | | |

### 3. Assess API Reference Completeness
For each documented endpoint, verify:
- HTTP method and full URL path
- All path, query, header, and body parameters with types and constraints
- At least one request example (curl + one SDK language minimum)
- Full response schema with field descriptions
- All possible error responses documented
- Authentication requirement stated explicitly
- Last-updated date present and within 6 months of latest API version

Flag any endpoint missing two or more of the above as a **critical gap**.

### 4. Evaluate Code Sample Coverage
Check that code samples exist for:
- Authentication flow (every supported method)
- The three most common use cases for the API
- Error handling and retry logic
- Webhook signature verification (if webhooks exist)
- At least two programming languages or the languages matching the target developer audience

### 5. Identify Staleness Signals
Flag content as potentially outdated if:
- API version in docs does not match current production version
- Screenshots reference deprecated UI
- Code samples use deprecated libraries or syntax
- Endpoints documented do not match actual API responses
- "Coming soon" labels exist with no date or have been present more than 90 days

### 6. Prioritize Gaps
Assign each gap a severity:
- **P0 — Blocker**: Missing content that stops a developer from completing a basic integration (e.g., no auth docs, undocumented required parameter)
- **P1 — High**: Missing content that causes significant trial-and-error (e.g., no error reference, missing pagination docs)
- **P2 — Medium**: Missing content that reduces confidence or increases support load (e.g., no code samples, no changelog)
- **P3 — Low**: Nice-to-have improvements (e.g., missing secondary language example, no architecture diagram)

## Output Format

Produce a structured audit report with these sections:

---

**Executive Summary** (3–5 sentences)
Overall portal health, top three blockers for third-party integrators, and recommended immediate actions.

**Coverage Scorecard**
A table scoring each documentation category (Getting Started, Auth, API Reference, Code Samples, Error Handling, Changelog) on a 0–100% completeness scale with a one-line rationale.

**Critical Gaps (P0 & P1)**
Bulleted list. Each item includes:
- Gap description (one
