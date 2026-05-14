---
name: api-field-addition-backward-compatibility-checklist
description: >
  Validates that new fields added to an API response or request body will not break existing consumers by auditing serialization behavior, validation rules, and contract assumptions. Use when someone says "I'm adding a new field to the API", asks about backward compatibility for API changes, wants to safely extend a request or response schema, is worried about breaking existing clients, or needs to review an API diff before deploying.
category: developer
tags: [api, backward-compatibility, schema, validation, contracts]
author: community
---

# API Field Addition Backward Compatibility Checklist

This skill runs a structured compatibility audit whenever new fields are being added to an API request or response, ensuring existing consumers are not broken by the change.

## Compatibility Audit Steps

### 1. Classify the Change
- Determine if the field is being added to a **request** (input) or **response** (output).
- Determine if the field is **required** or **optional**.
- Identify the API style: REST/JSON, GraphQL, gRPC/Protobuf, or other.

### 2. Response Field Additions
Check each of the following:

- **Unknown field handling**: Do existing consumers use strict deserialization (e.g., `@JsonIgnoreProperties(false)` in Jackson, `additionalProperties: false` in JSON Schema)? Strict parsers will reject unknown fields.
- **Schema validation at consumer**: Do consumers validate the response against a stored schema? A new field may fail validation if the schema is not updated.
- **Contract tests**: Are there Pact or similar consumer-driven contract tests that will fail when a new field appears?
- **Typed SDKs**: Do auto-generated or hand-written client SDKs use exhaustive type mappings that need regeneration?
- **Null/absence handling**: If the field is conditionally present, do consumers handle missing fields gracefully?

### 3. Request Field Additions
Check each of the following:

- **Required vs. optional**: Adding a **required** field is a breaking change for all existing callers. It must be optional or have a default value.
- **Default value safety**: If a default is provided server-side, confirm the default behavior is safe and does not silently alter existing request semantics.
- **Validation rules**: Does the new field have validation constraints (min/max, regex, enum)? Existing callers sending no value must not trigger a validation error.
- **Idempotency and side effects**: Does the new field alter business logic when absent? Absence must be equivalent to the previous behavior.
- **Forwarded or stored requests**: Are requests stored, replayed, or forwarded? Old payloads without the new field must still be processable.

### 4. Serialization & Transport Layer
- **Null vs. omitted**: Clarify whether the field is serialized as `null` or omitted entirely when not set. These are often treated differently by consumers.
- **Protobuf/gRPC**: New fields must use a new field number; default values (zero/empty) must not change existing behavior.
- **Versioned APIs**: If the API is versioned, confirm whether the change targets the current version or requires a new version.

### 5. Documentation & Communication
- Is the field documented in the OpenAPI/Swagger spec, AsyncAPI, or equivalent?
- Has a changelog entry been written?
- Do internal or external consumers need advance notice?

### 6. Risk Rating
Assign one of:
- 🟢 **Safe**: Optional field, consumers handle unknowns gracefully, no contract tests affected.
- 🟡 **Caution**: Some consumers may need updates; staged rollout or feature flag recommended.
- 🔴 **Breaking**: Required field added to request, strict deserialization in use, or contract tests will fail. Must not deploy without coordinated consumer updates or a new API version.

## Output Format

Produce a checklist report with the following structure:

```
## API Field Addition Compatibility Report

**Field name**: `<field_name>`
**Location**: Request / Response
**Required**: Yes / No
**API style**: REST+JSON / gRPC / GraphQL / Other

### Checklist Results
- [ ] Unknown field handling verified
- [ ] Schema validation at consumer checked
- [ ] Contract tests reviewed
- [ ] SDK regeneration assessed
- [ ] Null/omission behavior defined
- [ ] Default value safety
