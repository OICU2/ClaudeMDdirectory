---
name: package-management
description: >
  Manages project dependencies across multiple package ecosystems including npm, pip, cargo, poetry, and more.
  Use when someone says "add a dependency," asks about "installing packages," wants to "update libraries,"
  needs to "resolve dependency conflicts," or asks "what package should I use for X."
category: developer
tags: [npm, pip, cargo, dependencies, packages]
author: community
---

# Package Management

Handles dependency installation, updates, conflict resolution, and package selection across npm, pip, cargo, poetry, gem, and other package managers.

## Workflow

1. **Detect the ecosystem** — Identify the package manager from project files (`package.json` → npm/yarn/pnpm, `requirements.txt`/`pyproject.toml` → pip/poetry, `Cargo.toml` → cargo, `Gemfile` → bundler).
2. **Check existing state** — Read the lock file and manifest before making changes. Never suggest installing a package that already exists.
3. **Select the right command** — Use the project's existing package manager; never switch managers mid-project unless explicitly asked.
4. **Pin versions appropriately** — Use exact versions for applications, semver ranges for libraries.
5. **Handle conflicts** — When conflicts arise, explain the dependency chain, identify the root cause, and provide a resolution strategy (upgrade, downgrade, or alias).
6. **Security awareness** — Flag packages with known vulnerabilities, prefer well-maintained packages with recent releases and high download counts.
7. **Dev vs. production** — Always distinguish between runtime and development dependencies (`--save-dev`, `[dev-dependencies]`, `--group dev`).

## Package Selection Criteria

When recommending packages:
- Prefer packages with active maintenance (commits within 6 months)
- Check weekly downloads and GitHub stars as proxy for community adoption
- Favor packages with TypeScript types, or `@types/` availability for JS
- Avoid packages with unresolved critical CVEs
- Suggest the standard/official package when one exists before third-party alternatives

## Common Commands Reference

| Task | npm | pip/poetry | cargo |
|------|-----|------------|-------|
| Install all | `npm install` | `pip install -r requirements.txt` / `poetry install` | `cargo build` |
| Add package | `npm install pkg` | `pip install pkg` / `poetry add pkg` | `cargo add pkg` |
| Add dev dep | `npm install -D pkg` | `poetry add --group dev pkg` | `cargo add --dev pkg` |
| Remove | `npm uninstall pkg` | `pip uninstall pkg` / `poetry remove pkg` | `cargo remove pkg` |
| Update | `npm update` | `pip install -U pkg` / `poetry update` | `cargo update` |
| Audit | `npm audit` | `pip-audit` | `cargo audit` |

## Output Format

Produce a response with these sections when managing dependencies:

1. **Command block** — Exact shell command(s) to run, in a fenced code block with the shell language tag
2. **What this does** — One sentence explaining the effect
3. **Manifest change** — Show the exact line added/changed in `package.json`, `pyproject.toml`, `Cargo.toml`, etc.
4. **Caveats** (if any) — Peer deps, breaking changes, version constraints, or platform limitations — only include if relevant

Keep responses concise. Do not explain basic concepts unless asked. Do not list alternatives unless the user is choosing between options.