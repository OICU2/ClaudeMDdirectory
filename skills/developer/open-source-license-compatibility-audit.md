---
name: open-source-license-compatibility-audit
description: >
  Scans and evaluates all project dependencies for open-source license compatibility against the project's intended distribution model. Use when someone says "check our licenses," asks about license conflicts, wants to audit dependencies for legal compliance, needs to verify open-source compatibility before shipping, or is worried about GPL contamination in a commercial product.
category: developer
tags: [licensing, compliance, dependencies, open-source, legal]
author: community
---

# Open-Source License Compatibility Audit

This skill reviews all project dependencies, identifies their licenses, and flags any incompatibilities with the project's intended distribution model (proprietary, open-source, SaaS, etc.).

## Audit Workflow

1. **Identify the distribution model** — Ask or confirm: Is this proprietary/commercial software, an open-source project (and under what license), a SaaS product, or an internal tool? This determines what is compatible.

2. **Extract dependency list** — Read the relevant dependency manifest(s):
   - Node.js: `package.json` + `package-lock.json` or `yarn.lock`
   - Python: `requirements.txt`, `Pipfile`, `pyproject.toml`
   - Java/Kotlin: `pom.xml`, `build.gradle`
   - Ruby: `Gemfile.lock`
   - Go: `go.mod`
   - Rust: `Cargo.toml`

3. **Resolve licenses for each dependency** — Check declared license fields, `LICENSE` files, and known registries (npm, PyPI, Maven Central). Flag any dependency where the license is unknown or unlicensed.

4. **Apply compatibility rules by distribution model**:
   - **Proprietary/commercial**: Flag GPL-2.0, GPL-3.0, AGPL-3.0, EUPL as incompatible. LGPL requires scrutiny (dynamic vs. static linking). MIT, Apache-2.0, BSD variants are generally safe.
   - **Open-source (MIT/Apache/BSD)**: Flag AGPL and GPL if your license is permissive and you're distributing combined works. Copyleft licenses may force relicensing.
   - **SaaS (no binary distribution)**: GPL is generally safe; AGPL is a hard conflict since it triggers on network use.
   - **Internal tools**: Most licenses are permissible; note any redistribution restrictions if the tool may later be shipped.

5. **Check for license conflicts between dependencies** — Identify cases where two dependencies have mutually incompatible licenses (e.g., GPL-2.0-only vs. Apache-2.0 in a combined binary).

6. **Flag dual-licensed packages** — Note packages offering a commercial license option that may require purchase for proprietary use (e.g., Qt, MongoDB SSPL, Elasticsearch SSPL).

7. **Categorize every dependency** as:
   - ✅ Compatible
   - ⚠️ Requires review (LGPL, MPL, dual-license, or ambiguous)
   - ❌ Incompatible (must replace or obtain commercial license)
   - ❓ Unknown license (must investigate before shipping)

## Output Format

Produce a structured audit report with these sections:

**Project Distribution Model**: One line stating the confirmed model.

**Summary**: counts of ✅ Compatible / ⚠️ Review / ❌ Incompatible / ❓ Unknown.

**Incompatible Dependencies** (❌): Table with columns — Package, Version, License, Reason it's incompatible, Suggested replacement or resolution.

**Requires Review** (⚠️): Table with columns — Package, Version, License, Specific concern, Recommended action.

**Unknown Licenses** (❓): List of packages with no resolvable license. Mark as blocked until resolved.

**Compatible Dependencies** (✅): Collapsed list or count only — no need to detail each.

**Recommendations**: Bullet list of concrete next steps (replace X with Y, obtain commercial license for Z, consult legal for W).

Keep the report factual and actionable. Do not give legal advice — recommend consulting counsel for any ❌ or ⚠️ items before distribution.
