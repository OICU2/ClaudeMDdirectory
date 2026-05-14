---
name: dependency-license-risk-report
description: >
  Audits third-party package licenses across a codebase to identify legal and compliance risks from incompatible, restrictive, or unreviewed licenses. Use when someone says "check our licenses," asks about license compliance, wants to audit dependencies for legal risk, needs to know if any packages are GPL-licensed, or is preparing for a security or legal review of their project.
category: developer
tags: [licensing, compliance, dependencies, legal, security]
author: community
---

# Dependency License Risk Report

Scans all package manifests and lock files in the codebase to identify third-party dependencies with licenses that pose legal, commercial, or compliance risk, then produces a prioritized risk report.

## Audit Workflow

1. **Discover package manifests** — Locate all relevant dependency files: `package.json`, `requirements.txt`, `Pipfile`, `pyproject.toml`, `Gemfile`, `go.mod`, `pom.xml`, `build.gradle`, `Cargo.toml`, `.csproj`, etc.

2. **Extract declared licenses** — For each dependency, read the license field from the manifest or lock file. For npm, check `node_modules/<pkg>/package.json` if present. For Python, check `dist-info/METADATA` or PyPI metadata references. Note when a license field is missing or ambiguous.

3. **Classify each license by risk tier**:
   - 🔴 **HIGH RISK / Incompatible**: GPL v2/v3, AGPL v3, SSPL, Commons Clause, proprietary/commercial-only — incompatible with closed-source or commercial use without explicit permission.
   - 🟡 **MEDIUM RISK / Restrictive**: LGPL v2/v3, MPL 2.0, EUPL, EPL — permissible in many cases but require careful compliance (e.g., dynamic linking, source disclosure of modifications).
   - 🟢 **LOW RISK / Permissive**: MIT, BSD 2/3-Clause, Apache 2.0, ISC, Unlicense, CC0 — generally safe for commercial and closed-source use.
   - ⚪ **UNKNOWN / UNREVIEWED**: No license field, custom license text, or ambiguous identifier — must be reviewed manually before use.

4. **Flag specific compliance concerns**:
   - Copyleft licenses used in commercial or proprietary codebases
   - AGPL packages in any SaaS or networked application
   - Dual-licensed packages where the open-source tier has copyleft conditions
   - Packages with no license (default copyright applies — use is legally prohibited without permission)
   - License conflicts between dependencies (e.g., GPL + Apache 2.0 incompatibility)

5. **Check for policy violations** — If a `LICENSE-POLICY`, `.licensee.json`, `allowed-licenses.txt`, or similar file exists in the repo, cross-reference findings against it and explicitly flag violations.

6. **Summarize counts** — Tally totals per risk tier and highlight the top 5 highest-risk dependencies by name, version, and license.

## Output Format

Produce a structured Markdown report with the following sections:

```
# Dependency License Risk Report

## Summary
- Total dependencies scanned: N
- 🔴 High Risk: N
- 🟡 Medium Risk: N
- 🟢 Low Risk: N
- ⚪ Unknown/Unreviewed: N

## 🔴 High Risk Dependencies
| Package | Version | License | Risk Reason |
|---------|---------|---------|-------------|
| ...     | ...     | ...     | ...         |

## 🟡 Medium Risk Dependencies
| Package | Version | License | Compliance Requirement |
|---------|---------|---------|----------------------|
| ...     | ...     | ...     | ...                  |

## ⚪ Unknown / Unreviewed Licenses
| Package | Version | License Field | Action Required |
|---------|---------|--------------|----------------|
| ...     | ...     | ...          | ...            |

## Recommendations
1. [Specific action for highest-priority finding]
2. [Replacement suggestion or legal review trigger]
3. [Policy enforcement recommendation if no policy file found]

## Notes
- Ecosystems
