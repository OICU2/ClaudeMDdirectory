---
name: software-dependency-end-of-life-tracker
description: >
  Scans a project's dependency manifest files and produces a structured timeline of upcoming end-of-life dates so engineers know which packages require upgrades before support or security patches cease. Use when someone asks about dependency lifecycle status, wants to know which libraries are nearing end of life, needs an EOL audit of their project, is concerned about unsupported packages in production, or wants a timeline of required dependency upgrades.
category: developer
tags: [dependencies, security, eol, maintenance, upgrades]
author: community
---

# Software Dependency End-of-Life Tracker

Reads dependency manifest files in the current project, cross-references known EOL schedules, and produces a prioritized timeline of packages requiring action before support or security patches end.

## Workflow

1. **Locate manifest files** — Search the project root and subdirectories for dependency files: `package.json`, `requirements.txt`, `Pipfile`, `pyproject.toml`, `Gemfile`, `pom.xml`, `build.gradle`, `go.mod`, `Cargo.toml`, `composer.json`, `.csproj`, and `packages.config`.

2. **Extract dependencies and versions** — Parse each manifest to collect every direct dependency with its pinned or constrained version. Note the ecosystem (npm, PyPI, RubyGems, Maven, etc.) for each entry.

3. **Determine EOL dates** — For each dependency, apply the following knowledge sources in order:
   - Known EOL schedules for major runtimes and frameworks (Node.js LTS calendar, Python version schedule, Ruby, Java LTS, .NET, etc.)
   - Package-level deprecation notices where widely documented (e.g., `request` npm package, Python 2.x libraries)
   - If a specific date is unknown, flag the package as "EOL status unverified — check endoflife.date"

4. **Classify urgency** — Assign each dependency one of four statuses:
   - 🔴 **EOL / Already Unsupported** — no active patches being issued
   - 🟠 **Critical (< 3 months)** — EOL date within 90 days
   - 🟡 **Warning (3–12 months)** — EOL date within one year
   - 🟢 **Supported (> 12 months)** — actively maintained beyond one year

5. **Identify upgrade paths** — For each 🔴 or 🟠 item, state the current version, the recommended upgrade target (latest stable or next LTS), and any known breaking-change warnings (e.g., major version bumps, API removals).

6. **Assess runtime/platform EOL** — Check not just libraries but the language runtime or platform version itself (e.g., Node 18, Python 3.9, Java 11) and include it in the timeline.

7. **Note transitive risk** — If a direct dependency pins a transitive dependency that is EOL, flag it with a note that the parent package must be upgraded to resolve the chain.

## Output Format

Produce a Markdown report with the following sections:

```
## Dependency EOL Report — [Project Name or Directory]
**Scan date:** YYYY-MM-DD  
**Manifests found:** [list files]

---

### 🔴 EOL / Already Unsupported
| Package | Current Version | EOL Date | Recommended Upgrade | Notes |
|---------|----------------|----------|--------------------|----|
| ...     | ...            | ...      | ...                | ... |

### 🟠 Critical — EOL Within 3 Months
[same table structure]

### 🟡 Warning — EOL Within 12 Months
[same table structure]

### 🟢 Supported — No Immediate Action Required
[condensed list, not full table]

---

### Recommended Action Plan
1. [Highest-priority upgrade with rationale]
2. [Next priority...]
...

### Unverified Packages
List any packages where EOL date could not be confirmed, with a link to https://endoflife.date/[package] for manual verification.
```

Keep the action plan to the 5 most critical items maximum. Flag security implications (no more CVE patches) explicitly in the Notes column where applicable.
