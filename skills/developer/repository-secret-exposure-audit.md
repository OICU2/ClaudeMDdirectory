---
name: repository-secret-exposure-audit
category: developer
description: >
  Scans commit history, configuration files, and environment definitions to identify leaked or improperly stored secrets and credentials. Use when someone says "check my repo for secrets," asks about leaked credentials, wants to audit their codebase for sensitive data, needs to find exposed API keys, or is concerned about accidentally committed passwords or tokens.
tags: [security, secrets, credentials, audit, git]
author: community
---

# Repository Secret Exposure Audit

This skill performs a systematic scan of a repository's commit history, config files, and environment definitions to surface leaked or improperly stored secrets, then delivers a prioritized remediation report.

## Audit Workflow

### 1. Identify Scan Targets
- Collect all tracked files: source code, config files (`.env`, `*.yaml`, `*.json`, `*.toml`, `*.ini`, `*.xml`), CI/CD definitions, Dockerfiles, shell scripts, and IaC files
- Flag files explicitly excluded via `.gitignore` that may still exist locally
- Note any `.env.example` or template files that may contain real values

### 2. Scan Current Working Tree
Search for these high-risk patterns in all files:

| Pattern Type | Indicators |
|---|---|
| API Keys | `AKIA`, `sk-`, `pk_live_`, `pk_test_`, `rk_live_` |
| Tokens | `ghp_`, `gho_`, `xox[baprs]-`, `ya29.`, `Bearer ` followed by long strings |
| Passwords | `password=`, `passwd=`, `pwd=`, `secret=`, `pass=` with assigned values |
| Connection strings | `mongodb+srv://`, `postgresql://`, `mysql://`, `redis://` with credentials embedded |
| Private keys | `-----BEGIN RSA PRIVATE KEY-----`, `-----BEGIN EC PRIVATE KEY-----`, `-----BEGIN OPENSSH PRIVATE KEY-----` |
| Cloud credentials | `AWS_SECRET_ACCESS_KEY`, `AZURE_CLIENT_SECRET`, `GOOGLE_APPLICATION_CREDENTIALS` with values |
| Generic high-entropy strings | Base64 or hex strings >32 chars assigned to credential-named variables |

### 3. Scan Git Commit History
```
git log --all --full-history --diff-filter=A -- '*.env' '*.pem' '*.key'
git log --all -p --follow -S "password" --pickaxe-regex
git log --all -p --follow -S "secret" --pickaxe-regex
git log --all -p --follow -S "api_key" --pickaxe-regex
git log --all -p --follow -S "PRIVATE KEY" --pickaxe-regex
```
- Check commits where sensitive files were added then deleted
- Inspect merge commits and squashed histories
- Review branch tips not reachable from HEAD

### 4. Check Environment and CI/CD Definitions
- Inspect `.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile`, `.circleci/config.yml` for hardcoded secrets vs. proper variable references
- Confirm secrets are referenced as `${{ secrets.NAME }}` or env variable substitution, not hardcoded
- Review `docker-compose.yml` for plaintext credentials in `environment:` blocks

### 5. Classify Each Finding
Assign a severity level:
- **CRITICAL**: Secret is present in current HEAD and was pushed to remote
- **HIGH**: Secret exists in git history (reachable commits); repo may be public or shared
- **MEDIUM**: Secret found in a local file not tracked by git but present in working directory
- **LOW**: Pattern matches a placeholder or example value (e.g., `your-api-key-here`)

### 6. Determine Exposure Risk
For each CRITICAL or HIGH finding:
- Check if the repo has any public remote (`git remote -v`)
- Note the earliest commit containing the secret
- Identify how many commits/branches reference it

### 7. Generate Remediation Steps
For each confirmed secret:
1. **Rotate immediately** — provide the service-specific rotation URL or process
2. **Remove from history** — specify the correct git command:
   - Single file: `git filter-repo --path <file> --invert-paths`
   - Specific string: `git filter-repo --replace-
