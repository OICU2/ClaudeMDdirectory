---
name: environment-variable-schema-documentation
category: developer
description: >
  Generates a structured schema document for all required environment variables, including types, defaults, validation rules, and descriptions to reduce misconfiguration errors. Use when someone says "document my environment variables", asks about "what env vars does my app need", or wants to "create a config schema", "standardize environment configuration", or "prevent misconfiguration with env var docs".
tags: [environment-variables, configuration, documentation, schema, devops]
author: community
---

# Environment Variable Schema Documentation

This skill scans a codebase for all environment variable references and produces a structured schema document with types, defaults, validation rules, and descriptions to prevent misconfiguration.

## Workflow

1. **Discover all env var references** by scanning for patterns: `process.env.VAR`, `os.environ.get('VAR')`, `ENV['VAR']`, `getenv('VAR')`, `.env` files, `docker-compose.yml`, `Dockerfile`, CI config files, and any config loading modules.

2. **Classify each variable** by determining:
   - **Type**: string, boolean, integer, float, URL, path, comma-separated list, JSON, enum
   - **Required vs optional**: required if no fallback/default exists in code; optional if a default is provided
   - **Default value**: extract from code if present; mark as `none` if absent
   - **Scope**: which service, module, or environment (production, development, test) uses it

3. **Infer validation rules** from usage context:
   - Boolean: must be `true` or `false` (or `1`/`0`)
   - URL: must match URL format; note if `https` is required
   - Integer/float: note if there are min/max values used in comparisons
   - Enum: list allowed values if conditionals reveal them (e.g., `if (ENV === 'production')`)
   - Path: note if the path must exist or be writable

4. **Flag security-sensitive variables** by detecting names containing: `SECRET`, `KEY`, `PASSWORD`, `TOKEN`, `CREDENTIAL`, `PRIVATE`, `AUTH`. Mark these as `sensitive: true`.

5. **Group variables** into logical sections based on naming prefixes or functional area (e.g., `DATABASE_*`, `REDIS_*`, `AUTH_*`, `FEATURE_*`).

6. **Generate the schema document** in the output format below.

7. **Identify gaps**: list any variables that appear undocumented, have no defaults but no validation guard, or are referenced inconsistently across environments.

## Output Format

Produce a Markdown file named `ENV_SCHEMA.md` with the following structure:

```markdown
# Environment Variable Schema

> Auto-generated schema. Last updated: [date]. Total variables: [N].

## Summary
- Required: [N]
- Optional: [N]  
- Sensitive: [N]
- Ungrouped/Unknown: [N]

---

## [Group Name] (e.g., Database, Auth, App)

### `VARIABLE_NAME`
| Field        | Value                          |
|--------------|--------------------------------|
| Type         | string / boolean / integer / URL / enum / path |
| Required     | yes / no                       |
| Default      | `value` or none                |
| Sensitive    | yes / no                       |
| Used in      | production / development / all |
| Validation   | e.g., must be a valid URL; must be one of: `a`, `b`, `c` |

**Description:** One sentence explaining what this variable controls and its impact.

**Example:**
```
VARIABLE_NAME=example_value
```

---
[Repeat for each variable]

## ⚠️ Gaps & Warnings

- `VAR_NAME`: Required but no validation guard found — app may crash silently if unset.
- `VAR_NAME`: Referenced in 3 files with inconsistent fallback values.
- `VAR_NAME`: Appears to be a secret but is logged in `src/logger.js:42`.
```

After the schema, append a ready-to-use `.env.example` file containing all variables with safe placeholder values and inline comments.
