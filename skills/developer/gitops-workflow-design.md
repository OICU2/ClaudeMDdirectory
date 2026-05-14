---
name: gitops-workflow-design
category: developer
description: >
  Designs a complete GitOps deployment workflow including repository structure, environment promotion gates, secret management strategy, and rollback procedures. Use when someone says "set up a GitOps workflow", asks about "GitOps deployment pipeline design", wants to "implement GitOps for Kubernetes", needs to "design environment promotion with GitOps", or asks "how should I structure my GitOps repos".
tags: [gitops, kubernetes, devops, deployment, ci-cd]
author: community
---

# GitOps Workflow Design

Produces a complete, opinionated GitOps workflow design covering repo layout, promotion gates, secrets handling, and rollback strategies based on the user's stack and team size.

## Workflow Design Process

1. **Gather context** — Identify: target platform (Kubernetes, ECS, etc.), number of environments (dev/staging/prod), team size, existing tooling (Flux, ArgoCD, or none), and secret management preference (Vault, Sealed Secrets, External Secrets Operator).

2. **Define repository structure** — Choose mono-repo vs. poly-repo pattern based on team size and service count:
   - Mono-repo: one `gitops/` root with `apps/`, `infrastructure/`, and `clusters/` subdirectories per environment
   - Poly-repo: separate `app-source` repo and `app-config` repo; source CI writes image tags to config repo via PR
   - Always separate application source code from deployment manifests

3. **Design directory layout** — Specify exact folder tree:
   ```
   gitops-repo/
   ├── clusters/
   │   ├── dev/
   │   ├── staging/
   │   └── prod/
   ├── apps/
   │   ├── base/          # shared Kustomize base
   │   └── overlays/      # per-env patches
   └── infrastructure/
       ├── cert-manager/
       └── ingress/
   ```

4. **Define environment promotion gates** — Specify what must pass before promotion:
   - **dev → staging**: automated on merge to `main`; requires passing unit tests and image vulnerability scan below critical threshold
   - **staging → prod**: manual approval PR; requires passing integration tests, load test baseline, and change advisory board sign-off if required
   - Use branch protection rules or ArgoCD ApplicationSets with `syncPolicy.automated` only on non-prod
   - Tag commits with semver for prod promotions; use image digest pinning in prod overlays

5. **Design secret management** — Select and specify one approach:
   - **External Secrets Operator + AWS Secrets Manager / Vault**: `ExternalSecret` CRDs in Git, actual values in external store; recommended for regulated environments
   - **Sealed Secrets**: `SealedSecret` CRDs committed to Git, decrypted only by cluster controller; recommended for smaller teams
   - **Never commit plaintext secrets**; add pre-commit hooks (`detect-secrets`, `gitleaks`) to enforce this
   - Document key rotation procedure and which team role owns each secret path

6. **Define rollback procedures** — Specify three rollback tiers:
   - **Fast rollback (< 5 min)**: `git revert` the offending commit in the config repo; GitOps operator reconciles automatically
   - **Image rollback**: update image tag in overlay to last-known-good digest; open PR with `[emergency]` label to bypass approval gates if needed
   - **Full environment rollback**: restore cluster state from last Git tag; document exact `argocd app rollback` or `flux rollback` commands with flags
   - Automate rollback trigger via alert webhook to a rollback bot that opens the revert PR

7. **Specify observability hooks** — Define what to instrument:
   - Deployment frequency, lead time, change failure rate, MTTR (DORA metrics)
   - Alert on drift detection (ArgoCD `OutOfSync` or Flux `NotReady` for > 5 min)
   - Notify Slack/Teams on promotion events and failed reconciliation

## Output Format

Produce a structured design document with these sections:

**1. Repository Structure** — Annotated directory tree with a one-line purpose for each folder.

**2. Promotion Pipeline** — Table with columns: `From Env`, `
