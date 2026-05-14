---
name: api-changelog-generation
category: developer
description: >
  Automatically generates structured API changelogs by analyzing differences between OpenAPI specs or scanning commit history to surface breaking changes, deprecations, and new endpoints. Use when someone says "generate a changelog for my API", asks about "what changed between API versions", or wants to "document breaking changes" in their API. Also triggers when someone needs to "diff OpenAPI specs" or wants to "create release notes for an API update".
tags: [api, changelog, openapi, documentation, versioning]
author: community
---

# API Changelog Generation

This skill analyzes OpenAPI spec diffs or commit history to produce structured, developer-friendly API changelogs that clearly categorize breaking changes, deprecations, new features, and fixes.

## Changelog Generation Workflow

### 1. Identify the Source Material
- Ask for one of: two OpenAPI/Swagger spec files (before/after), a git log or commit range, or a list of raw API changes
- If OpenAPI specs are provided, parse both versions and extract endpoints, schemas, parameters, and response codes
- If commit history is provided, filter for API-relevant commits (routes, controllers, serializers, schema files)

### 2. Categorize Every Change
Apply this classification to each detected difference:

**🚨 Breaking Changes** (require major version bump)
- Removed endpoints or HTTP methods
- Renamed or removed required request parameters
- Changed response field types or removed response fields
- Modified authentication requirements
- Changed HTTP status codes for existing responses

**⚠️ Deprecations** (require minor version bump)
- Endpoints marked deprecated in spec
- Parameters with `deprecated: true`
- Response fields scheduled for removal (note target removal version)

**✨ New Features** (minor version bump)
- Added endpoints
- New optional request parameters
- New response fields
- New supported content types or media types

**🔧 Fixes & Non-Breaking Changes** (patch version bump)
- Corrected descriptions or examples
- Fixed typos in field names (only if additive/aliased)
- Updated validation constraints that are less strict

### 3. Infer Version Bump
- Any breaking change → bump major version
- No breaking changes but new features or deprecations → bump minor version
- Fixes only → bump patch version
- State the recommended new version explicitly

### 4. Enrich Each Entry
For every change, include:
- The affected endpoint (method + path) or schema name
- A plain-English description of what changed and why it matters to consumers
- Migration guidance for breaking changes (what callers must update)
- Affected client languages or SDKs if inferrable from context

## Output Format

Produce a markdown changelog following the [Keep a Changelog](https://keepachangelog.com) convention:

```markdown
# API Changelog

## [X.Y.Z] - YYYY-MM-DD

> **Recommended version bump:** MAJOR | MINOR | PATCH
> **Summary:** One sentence describing the most significant change.

### 🚨 Breaking Changes
- **[METHOD /path/to/endpoint]** — Description of what changed.
  - **Migration:** What API consumers must change in their code.

### ⚠️ Deprecated
- **[METHOD /path/to/endpoint]** — What is deprecated and when it will be removed.
  - **Migration:** Recommended replacement.

### ✨ Added
- **[METHOD /path/to/endpoint]** — Description of new capability.

### 🔧 Fixed
- **[METHOD /path/to/endpoint]** — Description of correction.

---
**Full diff:** [link or reference if available]
```

- Use one bullet per discrete change — do not bundle multiple changes into one bullet
- If no changes exist in a category, omit that section entirely
- If migration guidance is unknown, write "Review integration and test against the new spec"
- Keep descriptions under 2 sentences; link to external docs if provided
