---
name: cross-platform-build-matrix-design
description: >
  Designs CI/CD build matrices that systematically test code across multiple operating systems, runtime versions, and CPU architectures to surface platform-specific failures before release. Use when someone says "my code breaks on Windows but not Mac," asks about setting up CI for multiple platforms, wants to test across different Node/Python/Go versions, needs to catch architecture-specific bugs, or is building a library that must support diverse environments.
category: developer
tags: [ci-cd, testing, build-matrix, cross-platform, devops]
author: community
---

# Cross-Platform Build Matrix Design

This skill generates structured CI build matrices that enumerate OS, runtime, and architecture combinations, then produces ready-to-use configuration for GitHub Actions, GitLab CI, or other pipelines.

## Build Matrix Design Process

### 1. Identify Dimensions
Determine which axes matter for the project:
- **OS**: Linux (ubuntu-latest, ubuntu-20.04), macOS (macos-13, macos-14-arm), Windows (windows-latest, windows-2019)
- **Runtime versions**: LTS + current + minimum-supported (e.g., Node 18, 20, 22; Python 3.9–3.12)
- **Architecture**: x86_64, arm64, arm/v7 — especially relevant for Docker, Rust, Go, C/C++
- **Dependency variants**: database versions, optional feature flags, compiler versions

### 2. Apply the Reduction Rules
Avoid combinatorial explosion:
- Start with the **full Cartesian product**, then prune
- Run the full matrix only on `push` to main/release branches; run a **fast subset** on PRs
- Use `include` overrides for rare but critical combos (e.g., Python 3.9 on Windows only)
- Use `exclude` for known unsupported combinations; document *why* in a comment
- Mark end-of-life runtime versions as `allow-failure: true` or `continue-on-error: true`

### 3. Define the Fast Subset (PR Matrix)
Pick one representative per axis:
- Latest stable runtime on ubuntu-latest
- Minimum supported runtime on windows-latest
- Latest runtime on macos-14 (arm64 if relevant)

### 4. Add Platform-Specific Setup Steps
- **Windows**: normalize line endings (`core.autocrlf`), use `pwsh` for scripts, handle `%PATH%` vs `$PATH`
- **macOS**: Homebrew caching, code-signing stubs for release jobs
- **Linux**: libc variant awareness (glibc vs musl for Alpine-based Docker)
- **Architecture**: cross-compilation toolchain installation, QEMU setup for emulated builds

### 5. Surface Failures Usefully
- Name matrix jobs explicitly: `test (os=ubuntu-20.04, runtime=python3.9, arch=x86_64)`
- Upload test reports and binaries as artifacts per matrix leg
- Add a `report` job with `needs: [test]` and `if: always()` to aggregate results

### 6. Validate the Matrix
Before finalizing, confirm:
- Every supported OS/runtime combination in the project's stated support policy is covered
- No dimension has only one value (collapse it to a constant instead)
- Total job count is under 50 for PR runs; use scheduled nightly jobs for exhaustive coverage

## Output Format

Produce the following, in order:

1. **Matrix Summary Table** — Markdown table listing every combination, annotated with `full`, `pr`, `nightly`, or `excluded` and a reason for exclusions.

2. **CI Configuration** — Complete, copy-paste-ready YAML for the target CI system (default: GitHub Actions). Include:
   - `strategy.matrix` block with `include`/`exclude` entries
   - Per-platform setup steps with inline comments
   - Artifact upload steps
   - A separate `fast-matrix` job for PR runs
   - A `report` summary job

3. **Platform Gotchas List** — Bullet list of known cross-platform pitfalls specific to the detected language/ecosystem (e.g., path separators, signal handling, filesystem case sensitivity, locale differences).

4. **Recommended Next Steps** — 3–5 concrete actions: adding architecture emulation, pinning runner images for reproducibility, enabling dependency caching per matrix
