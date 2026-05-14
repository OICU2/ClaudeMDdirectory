---
name: api-backward-compatibility-checklist
description: >
  Evaluates proposed API changes against existing consumers to identify breaking changes before they are merged and deployed. Use when someone says "I'm changing an API endpoint," asks about whether a modification will break existing clients, or wants to review API changes for compatibility issues. Also triggers when someone shares a diff or PR touching API contracts, route definitions, response schemas, or SDK interfaces.
category: developer
tags: [api, backward-compatibility, breaking-changes, code-review, versioning]
author: community
---

# API Backward Compatibility Checklist

This skill audits proposed API changes against known consumers and contracts to flag breaking changes, categorize their severity, and recommend safe migration paths before code ships.

## Compatibility Evaluation Workflow

### 1. Identify the Change Surface
- Extract all modified endpoints, methods, parameters, headers, response fields, status codes, and error shapes from the provided diff, description, or code snippet.
- Note whether changes affect REST routes, GraphQL schema, gRPC proto definitions, webhook payloads, or SDK method signatures.

### 2. Classify Each Change by Breaking Risk

**Definitely Breaking (must flag):**
- Removing an endpoint, method, or route
- Renaming a required request parameter or field
- Changing a field's data type (e.g., `string` → `integer`, `object` → `array`)
- Making an optional field required
- Removing a response field that consumers may depend on
- Changing HTTP status codes for existing success or error conditions
- Altering authentication or authorization schemes
- Modifying enum values by removing or renaming existing members
- Changing idempotency behavior or side-effect semantics

**Potentially Breaking (flag with context):**
- Adding a new required field to request bodies
- Narrowing accepted input ranges or formats (e.g., stricter validation)
- Changing default values for optional parameters
- Modifying pagination behavior or cursor formats
- Altering rate-limit headers or retry-after semantics
- Reordering fields in ordered structures

**Non-Breaking (safe, but note):**
- Adding optional request parameters with defaults
- Adding new response fields (additive)
- Adding new endpoints or methods
- Relaxing validation (accepting more input)
- Adding new enum values (with caveat: can break exhaustive switches)

### 3. Check Against Consumers
- Ask for or examine known consumers: internal services, public SDK clients, third-party integrations, documentation examples, tests, or OpenAPI/Swagger specs.
- For each breaking or potentially breaking change, identify which consumer types are affected.
- If no consumer list is provided, flag the change as high-risk and note that impact is unknown.

### 4. Apply Versioning & Migration Rules
- Determine if the API is versioned (e.g., `/v1/`, `/v2/`). If yes, breaking changes must go in a new version.
- If unversioned or in a shared version, require a deprecation + sunset plan for any breaking change.
- Recommend backward-compatible alternatives where possible (e.g., accept both old and new field names during transition, use field aliasing, keep old endpoint as deprecated proxy).

### 5. Assign Severity
- **CRITICAL**: Change breaks existing consumers with no fallback path.
- **HIGH**: Change is breaking but a migration path exists; coordination required.
- **MEDIUM**: Change is potentially breaking depending on consumer behavior.
- **LOW**: Change is additive but carries edge-case risk (e.g., new enum values).

---

## Output Format

Produce a structured compatibility report with these sections:

### Summary
One sentence describing the overall risk level of the proposed changes (e.g., "This changeset contains 2 critical breaking changes and 1 medium-risk change that require action before merging.").

### Breaking Changes Found
A numbered list. For each issue:
- **Severity**: CRITICAL / HIGH / MEDIUM / LOW
- **Change**: What is being modified (field name, endpoint, type, etc.)
- **Why It Breaks**: One sentence explaining the consumer impact
- **Affected Consumers**: List known affected consumers, or "Unknown — audit required"
- **Recommended Fix**: Concrete alternative (e.g., "Keep old field, add new field alongside it; deprecate old field in changelog")

### Safe Changes Confirmed
A brief list of changes reviewed and confirmed non-breaking.

### Required Actions Before Merge
A checklist of concrete
