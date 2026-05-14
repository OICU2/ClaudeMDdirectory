---
name: environment-variable-audit
description: >
  Scans a codebase to catalog every environment variable in use, identifies undocumented or missing variables, and generates a complete .env.example template with descriptions. Use when someone says "audit my environment variables," asks "what env vars does my app use," wants to "document my config variables," needs to "create an .env.example file," or is onboarding teammates and needs to capture all required environment configuration.
category: developer
tags: [environment-variables, configuration, documentation, devops, onboarding]
author: community
---

# Environment Variable Audit

Scans the entire codebase to find all environment variable references, cross-references them against existing documentation, flags any undocumented or potentially missing variables, and produces a ready-to-use `.env.example` template.

## Audit Workflow

1. **Scan for environment variable references** across all relevant file types:
   - JavaScript/TypeScript: `process.env.VAR_NAME`, `import.meta.env.VAR_NAME`
   - Python: `os.environ.get('VAR_NAME')`, `os.getenv('VAR_NAME')`, `environ['VAR_NAME']`
   - Ruby: `ENV['VAR_NAME']`, `ENV.fetch('VAR_NAME')`
   - Shell/Dockerfile: `$VAR_NAME`, `${VAR_NAME}`, `ENV VAR_NAME`, `ARG VAR_NAME`
   - Go: `os.Getenv("VAR_NAME")`
   - Any other language patterns referencing environment configuration

2. **Build a complete variable inventory** by recording for each variable found:
   - Variable name
   - File(s) and line number(s) where it appears
   - Whether a default value is specified in the code
   - Whether it appears required (no fallback) or optional (has fallback/default)

3. **Cross-reference existing documentation** by checking:
   - Existing `.env`, `.env.example`, `.env.sample`, `.env.template` files
   - `README.md` or `docs/` for any env var documentation
   - Any config schema files (e.g., `zod` schemas, `joi` schemas, `pydantic` models)

4. **Flag issues and gaps**:
   - Variables in code but absent from `.env.example` → mark as **UNDOCUMENTED**
   - Variables in `.env.example` but never referenced in code → mark as **ORPHANED**
   - Variables with no default and no documentation → mark as **REQUIRED / UNDOCUMENTED**
   - Sensitive-looking names (containing `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, `PRIVATE`) → mark as **SENSITIVE**

5. **Infer descriptions** where possible by examining:
   - Variable name semantics (e.g., `DATABASE_URL` → "Connection string for the primary database")
   - Context in which the variable is used in code
   - Any inline comments near the usage site

6. **Generate the `.env.example` file** with all discovered variables grouped by category (Database, Auth, API Keys, App Config, etc.), with placeholder values and descriptions as inline comments.

## Output Format

Produce three sections in your response:

### 1. Audit Summary Table

A markdown table with columns:

| Variable | Status | Required | Sensitive | Files Found In | Existing Default |
|---|---|---|---|---|---|

Status values: `documented`, `undocumented`, `orphaned`

### 2. Issues List

A bullet list of actionable findings, e.g.:
- ⚠️ `JWT_SECRET` is used in `src/auth.ts:14` but missing from `.env.example`
- 🚨 `DATABASE_URL` has no default value and no documentation — required for app startup
- 🗑️ `OLD_API_KEY` exists in `.env.example` but is never referenced in code

### 3. Generated `.env.example`

A complete, copy-paste-ready file with:
- Variables grouped under comment headers by category
- Each variable on its own line with a safe placeholder value
- An inline comment describing the variable and whether it is required or optional
- Sensitive variables set to empty string placeholders, never example values

Example format:
```
# ─── Database ────────────────────────────────────────────
