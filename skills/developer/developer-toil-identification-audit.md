---
name: developer-toil-identification-audit
description: >
  Audits recurring manual developer tasks across build, deploy, and maintenance workflows to surface high-value automation targets ranked by time cost and error risk. Use when someone says "we keep doing this manually," asks about reducing developer toil, or wants to find automation opportunities in their engineering workflow. Also activates when a team wants to prioritize CI/CD improvements or identifies repetitive operational pain points.
category: developer
tags: [automation, developer-experience, toil, devops, workflow]
author: community
---

# Developer Toil Identification Audit

Systematically interviews the user about their engineering workflows, then produces a prioritized list of automation targets ranked by time cost, error risk, and implementation effort.

## Audit Workflow

### Phase 1: Scope the Workflow Domains
Ask the user to confirm which domains apply to their team:
- **Build**: compiling, dependency management, code generation, linting, testing
- **Deploy**: staging, production, rollback, environment configuration, secrets rotation
- **Maintenance**: incident response, log analysis, dependency upgrades, certificate renewal, data migrations
- **Developer onboarding**: environment setup, access provisioning, documentation hunting
- **Release management**: changelogs, versioning, tagging, communication

### Phase 2: Extract Toil Signals
For each confirmed domain, ask targeted questions:
1. "What tasks do you or your team do more than once a week that feel mechanical?"
2. "What steps fail silently or require a human to notice something went wrong?"
3. "What do new engineers always get wrong or need help with?"
4. "What do you dread doing because it's error-prone or tedious?"
5. "What requires copy-pasting, tab-switching, or following a runbook step-by-step?"

Probe for specifics: who does it, how often, how long it takes, and what breaks when it goes wrong.

### Phase 3: Score Each Toil Item
Evaluate every identified task against three axes:

| Axis | Question | Score (1–5) |
|------|----------|-------------|
| **Frequency** | How often does this occur? | 1=yearly, 5=daily |
| **Time Cost** | How long does it take per occurrence? | 1=<5 min, 5=>2 hrs |
| **Error Risk** | How often does it cause incidents, delays, or rework? | 1=rarely, 5=frequently |

Compute a **Toil Score** = Frequency × Time Cost × Error Risk (max 125).

### Phase 4: Assess Automation Feasibility
For each item scoring above 20, assess:
- **Tooling fit**: Does an existing tool (GitHub Actions, scripts, Terraform, etc.) cover 80%+ of this?
- **Input clarity**: Are the inputs and outputs deterministic enough to automate?
- **Ownership**: Is there a clear owner who can implement and maintain the automation?
- **Blast radius**: What's the risk if the automation itself fails?

### Phase 5: Produce the Ranked Backlog
Combine toil score with feasibility to produce a prioritized action list.

## Output Format

Produce a structured audit report with these sections:

---

**Toil Audit Report — [Team/Project Name]**
*Date: [date] | Domains Audited: [list]*

---

**Executive Summary**
2–3 sentences: total toil items found, estimated weekly hours burned, top three targets.

---

**Ranked Toil Backlog**

| Priority | Task | Domain | Toil Score | Est. Weekly Hours | Error Risk | Recommended Action |
|----------|------|---------|------------|-------------------|------------|-------------------|
| 1 | [task name] | Deploy | 98 | ~6 hrs | High | GitHub Actions workflow |
| 2 | ... | | | | | |

Include 5–15 items minimum if enough input is provided.

---

**Deep-Dive: Top 3 Automation Targets**

For each top item:
- **Current State**: What the human does today, step by step
- **Pain Points**: What goes wrong and why
- **Proposed Automation**: Specific tool, approach, and implementation sketch
- **Effort Estimate**: Small (days) / Medium (1–2 weeks) / Large (1+ month)
- **
