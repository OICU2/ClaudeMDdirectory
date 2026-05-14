---
name: api-consumer-breaking-change-impact-report
description: >
  Analyzes a proposed API change and identifies every known consumer affected by breaking modifications to contracts, schemas, or payloads. Use when someone says "what breaks if I change this API", asks about the impact of removing or renaming a field, wants to audit downstream consumers before a deprecation, needs to assess blast radius of a contract change, or is planning an API version migration. Produces a structured impact report listing affected services, severity, and recommended actions.
category: developer
tags: [api, breaking-changes, impact-analysis, consumers, deprecation]
author: community
---

# API Consumer Breaking Change Impact Report

This skill scans a codebase and its known API consumers to generate a structured report identifying every service, client, or integration affected by a proposed breaking API change.

## Analysis Workflow

### 1. Identify the Breaking Change
- Extract the specific change: field removal, rename, type change, endpoint removal, auth scheme change, payload restructure, or status code alteration.
- Classify severity: **Critical** (consumers will fail at runtime), **High** (consumers will receive unexpected data), **Medium** (consumers require code changes but have fallbacks), **Low** (optional fields, additive changes with deprecation warnings).

### 2. Locate All Consumers
Search the repository and any linked consumer repositories for references to the affected API:
- Grep for endpoint paths, field names, and schema identifiers across all service directories.
- Check API client libraries, SDK usage, and generated client code.
- Scan configuration files, environment variable references, and integration test fixtures.
- Look for contract tests (Pact, OpenAPI validators) that assert the current shape.
- Check documentation, changelogs, and API gateway route definitions.

### 3. Assess Each Consumer
For every affected consumer found:
- Identify the owning team or service name.
- Locate the exact file(s) and line(s) where the dependency exists.
- Determine whether the consumer reads, writes, or both reads and writes the affected field/endpoint.
- Estimate migration effort: trivial (rename), moderate (logic change), complex (architectural impact).
- Flag whether the consumer has its own downstream consumers that may cascade.

### 4. Check for Compatibility Mitigations
- Determine if versioning (v1/v2 routing) can isolate the change.
- Check if a deprecation period with a compatibility shim is feasible.
- Identify whether the change can be made additive (e.g., keep old field, add new field).

## Output Format

Produce a Markdown report with the following structure:

```markdown
# Breaking Change Impact Report

## Proposed Change
- **API / Endpoint:** `[method] /path/to/endpoint`
- **Change Type:** [Field removal / Rename / Type change / Endpoint removal / etc.]
- **Description:** [One sentence describing the exact change]
- **Severity:** [Critical / High / Medium / Low]

## Summary
- **Total Consumers Affected:** N
- **Critical Impact:** N services
- **High Impact:** N services
- **Medium/Low Impact:** N services
- **Estimated Total Migration Effort:** [X–Y developer days]

## Affected Consumers

### 1. [Service/Consumer Name] — [Severity]
| Field | Detail |
|---|---|
| Owner | Team or individual |
| Files Affected | `path/to/file.ts:42`, `path/to/other.ts:87` |
| Dependency Type | Reads / Writes / Both |
| Current Usage | How it uses the field or endpoint |
| Required Change | What must be updated |
| Migration Effort | Trivial / Moderate / Complex |
| Cascading Risk | Yes/No — [explanation if yes] |

[Repeat for each consumer]

## Contract & Test Coverage
- **Contract Tests Found:** [List or "None"]
- **Integration Tests Asserting Current Shape:** [List or "None"]
- **OpenAPI/Schema Validators:** [List or "None"]

## Compatibility Options
1. **Versioning:** [Feasible / Not feasible — reason]
2. **Deprecation Shim:** [Feasible / Not feasible — reason]
3. **Additive Approach:** [Feasible / Not feasible — reason]

## Recommended Rollout Plan
1. [Step 1]
2
