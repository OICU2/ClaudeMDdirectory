---
name: continuous-integration-systems
description: >
  Sets up CI pipelines that automatically build, test, and validate code changes across popular platforms. Use when someone says "set up CI for my project", asks about automating tests on pull requests, wants to configure GitHub Actions or GitLab CI, needs to add automated checks to their repository, or wants to prevent broken code from merging.
category: developer
tags: [ci-cd, github-actions, automation, testing, devops]
author: community
---

# Continuous Integration Systems

This skill designs and implements complete CI pipeline configurations that automatically build, test, lint, and validate code on every push or pull request.

## CI Pipeline Setup Workflow

### 1. Identify Platform and Project Context
- Detect or ask: GitHub Actions, GitLab CI, CircleCI, Bitbucket Pipelines, Jenkins, or other
- Identify language/framework (Node, Python, Go, Java, etc.)
- Identify existing test commands, build scripts, and package managers
- Note deployment targets if CD is also needed

### 2. Design Pipeline Stages
Always include these stages in order:
1. **Trigger conditions** — on push, pull_request, or specific branches
2. **Environment setup** — OS matrix, language version, caching dependencies
3. **Install dependencies** — using lockfiles for reproducibility
4. **Lint/format check** — fail fast on style violations
5. **Build** — compile or bundle the application
6. **Test** — unit tests, integration tests, coverage thresholds
7. **Security scan** — dependency audit, static analysis if applicable
8. **Artifact upload** — store build outputs, test reports, coverage reports

### 3. Write the Configuration File
- Use the correct syntax and file path for the platform:
  - GitHub Actions: `.github/workflows/ci.yml`
  - GitLab CI: `.gitlab-ci.yml`
  - CircleCI: `.circleci/config.yml`
- Pin action/image versions for reproducibility (e.g., `actions/checkout@v4`)
- Add dependency caching to reduce build time
- Set `fail-fast: false` on matrix builds unless speed is critical
- Use environment variables for secrets, never hardcode credentials
- Add branch protection rules recommendation if on GitHub

### 4. Handle Common Patterns
- **Monorepos**: Use path filters to run jobs only when relevant directories change
- **Multiple environments**: Separate jobs for Node 18/20, Python 3.10/3.11, etc.
- **PR checks**: Add status checks that block merge on failure
- **Scheduled runs**: Add nightly full test suite for long-running tests
- **Notifications**: Slack or email alerts on failure for main branch

### 5. Validate and Explain
- Verify YAML syntax is correct
- Call out any secrets or environment variables the user must configure
- Explain what each job/step does in plain English
- Note estimated run time and how to optimize if slow

## Output Format

Produce the following in order:

1. **Complete configuration file** in a fenced code block with the correct filename as a comment header (e.g., `# .github/workflows/ci.yml`)
2. **Setup checklist** — a short bulleted list of manual steps required (add secrets, enable branch protection, install badges, etc.)
3. **Pipeline summary** — a 3–5 line explanation of what the pipeline does, what triggers it, and what will cause it to fail
4. **Optional enhancements** — 2–4 suggestions for extending the pipeline (e.g., deploy on merge to main, add code coverage badge, matrix testing)

Keep configuration files complete and copy-paste ready. Do not omit sections with placeholder comments unless the user has not provided enough context, in which case ask one focused clarifying question before proceeding.