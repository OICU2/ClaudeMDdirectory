---
name: service-contract-version-compatibility-matrix
description: >
  Generates and maintains a structured compatibility matrix mapping which versions of dependent services work together without integration failures. Use when someone asks about service version compatibility, wants to know which versions can be safely upgraded together, is planning a multi-service upgrade, or needs to prevent breaking changes during deployment. Also triggers when someone describes integration failures after upgrading a dependency or asks which version combinations are safe to run in production.
category: developer
tags: [versioning, compatibility, service-contracts, integration, microservices]
author: community
---

# Service Contract Version Compatibility Matrix

This skill generates a structured compatibility matrix showing which versions of dependent services are mutually compatible, enabling safe upgrade planning and preventing integration failures.

## Compatibility Matrix Workflow

1. **Identify services and version ranges** — Collect all services involved, their current versions, and the version ranges under consideration. If not provided, ask the user to list service names and semver ranges.

2. **Extract contract boundaries** — For each service pair, identify the API contracts, shared schemas, event formats, or protocol versions that define compatibility. Focus on breaking vs. non-breaking changes.

3. **Define compatibility rules** — Apply these checks for each version combination:
   - Does Service A's API contract at version X satisfy Service B's minimum requirements at version Y?
   - Are there known deprecations, removals, or schema changes between versions?
   - Does the communication protocol (REST, gRPC, message queue format) remain compatible?

4. **Build the matrix** — Create a grid where rows and columns represent service versions. Mark each cell:
   - ✅ Compatible — tested or logically verified safe
   - ⚠️ Conditional — compatible with configuration changes or migration steps
   - ❌ Incompatible — breaking change exists; describe reason
   - ❓ Unknown — insufficient information; flag for verification

5. **Annotate breaking changes** — For every ❌ or ⚠️ cell, add a footnote explaining the specific breaking change (e.g., removed endpoint, renamed field, changed auth scheme).

6. **Recommend upgrade paths** — Based on the matrix, list the safest sequential upgrade paths that avoid incompatible combinations. Prefer paths that minimize simultaneous breaking changes.

7. **Flag gaps** — Explicitly call out version combinations that have no compatibility data and recommend integration tests or changelog review to fill those gaps.

## Output Format

Produce the following sections in order:

**1. Services Inventory**
A bullet list of each service with its current version and the versions being evaluated.

**2. Compatibility Matrix Table**
A markdown table with service-version combinations on both axes. Use ✅ / ⚠️ / ❌ / ❓ symbols in cells. Example structure:

| | ServiceB v1.2 | ServiceB v1.3 | ServiceB v2.0 |
|---|---|---|---|
| **ServiceA v3.1** | ✅ | ✅ | ⚠️ |
| **ServiceA v3.2** | ✅ | ✅ | ❌ |

**3. Breaking Change Notes**
Numbered footnotes corresponding to ❌ and ⚠️ cells explaining the specific incompatibility and its cause.

**4. Recommended Upgrade Paths**
Ordered list of safe upgrade sequences with brief rationale for each recommendation.

**5. Verification Gaps**
Bullet list of version combinations marked ❓ with specific recommended actions to resolve uncertainty (e.g., "Review ServiceB v2.0 changelog for field removals in `/payments` endpoint").
