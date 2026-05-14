---
name: developer-toil-reduction-opportunity-log
description: >
  Identifies repetitive manual tasks in a developer's workflow and ranks them by automation ROI.
  Use when someone says "I keep doing this manually," asks about reducing repetitive work, wants to
  find what to automate first, complains about tedious deployment steps, or describes a workflow
  that feels slow and error-prone.
category: developer
tags: [automation, productivity, toil, workflow, devops]
author: community
---

# Developer Toil Reduction Opportunity Log

Analyzes a developer's described workflow to surface repetitive manual tasks and ranks them by automation ROI so they know exactly where to invest effort first.

## Toil Identification Workflow

1. **Extract all manual tasks** from the developer's description. Ask clarifying questions if the workflow is vague: How often does this happen? How long does it take? How many people do it?

2. **Classify each task** into one of these toil categories:
   - **Repetitive execution** — same commands run repeatedly (deploys, test runs, restarts)
   - **Manual verification** — checking logs, statuses, or outputs by hand
   - **Context switching** — copying data between tools, reformatting outputs
   - **Gatekeeping steps** — waiting on approvals, pinging people for status
   - **Environment setup** — bootstrapping, credential wrangling, dependency installs

3. **Score each task** across three dimensions (1–5 scale):
   - **Frequency**: How often per week/sprint does this occur?
   - **Time cost**: How many minutes per occurrence, multiplied by people affected?
   - **Error risk**: How often does manual execution cause mistakes or incidents?

4. **Calculate ROI score**: `(Frequency × Time Cost × Error Risk) / Automation Effort`
   - Automation effort: estimate 1 (script in an hour) to 5 (requires new tooling or process change)

5. **Identify the top automation candidates** — highest ROI scores — and for each one:
   - Name the specific tool or approach (GitHub Actions, Makefile target, shell alias, pre-commit hook, Terraform, etc.)
   - Estimate time-to-automate
   - Estimate weekly time saved once automated

6. **Flag any quick wins** — tasks scorable as low effort (1–2) with high frequency or error risk. These belong at the top regardless of full ROI score.

## Output Format

Produce a structured **Toil Reduction Opportunity Log** with these sections:

### Toil Inventory Table
| Task | Category | Frequency (×/wk) | Time Cost (min) | Error Risk (1–5) | Automation Effort (1–5) | ROI Score |
|------|----------|-------------------|-----------------|-------------------|--------------------------|-----------|
| ...  | ...      | ...               | ...             | ...               | ...                      | ...       |

### Ranked Automation Targets
Numbered list from highest to lowest ROI. For each:
- **Task name**
- **Recommended automation**: specific tool/approach
- **Estimated time to automate**: X hours/days
- **Estimated weekly savings**: X minutes/hours across Y people
- **Implementation hint**: one concrete next step (e.g., "Add a `make deploy` target that wraps these 4 commands")

### Quick Wins (if any)
Bullet list of tasks automatable in under 2 hours with immediate payoff.

### What to Ignore for Now
Brief list of low-ROI tasks not worth automating yet, with one-line reasoning.

Keep the full output scannable. Use tables and bullets. Avoid prose paragraphs except for implementation hints.
