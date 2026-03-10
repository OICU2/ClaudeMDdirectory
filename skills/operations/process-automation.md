---
name: process-automation
description: >
  Designs and implements automation workflows for repetitive operational tasks using tools like n8n,
  Zapier, Make, or custom scripts. Use when someone says "automate this process," asks about
  connecting apps together, wants to eliminate manual repetitive work, needs to schedule recurring
  tasks, or is looking to build a workflow that triggers on specific events.
category: operations
tags: [automation, workflows, n8n, zapier, scripting, operations]
author: community
---

# Process Automation

Analyzes repetitive operational tasks and produces complete automation blueprints — including tool selection, trigger/action logic, and implementation steps — whenever a user wants to reduce manual work or connect systems together.

## Automation Design Workflow

1. **Identify the trigger**: Determine what initiates the process (webhook, schedule, form submission, new file, email received, database change).
2. **Map the current manual steps**: List every action a human currently performs, in order, including decisions and edge cases.
3. **Select the right tool**:
   - n8n: self-hosted, complex multi-step flows, requires technical setup
   - Zapier: quick SaaS-to-SaaS connections, minimal setup, limited logic
   - Make (Integromat): visual logic, iterators, complex branching
   - Python/Bash script: file system tasks, APIs without connectors, cron jobs
   - GitHub Actions: developer workflows, CI/CD adjacent tasks
4. **Define nodes/steps**: For each manual step, specify the exact automation node, its configuration, and inputs/outputs.
5. **Handle errors and edge cases**: Identify failure points and specify fallback behavior (retry logic, error notifications, dead-letter queues).
6. **Specify credentials and permissions**: List every API key, OAuth scope, or service account needed.
7. **Define success criteria**: State what "working correctly" looks like and how to verify it.

## Implementation Rules

- Always specify the exact trigger type, not just "when X happens"
- Include field mappings (e.g., `{{trigger.email}}` → `To:` field)
- Note rate limits or API quotas that could affect the workflow
- Flag steps that require human approval or cannot be safely automated
- For scripts: include the full script, not pseudocode
- For n8n/Zapier/Make: describe each node name, type, and configuration in sequence

## Output Format

Produce the following sections in order:

**Automation Summary**
- Tool recommended and why (1–2 sentences)
- Trigger type and source
- Estimated time saved per week

**Workflow Steps**
Numbered list of every node/step:
```
Step 1 — [Node Type]: [What it does]
  - Input: [field or data source]
  - Config: [key settings]
  - Output: [what passes to next step]
```

**Error Handling**
- List each failure scenario and the fallback action

**Setup Checklist**
- Bullet list of credentials, permissions, and one-time configuration tasks

**Verification Test**
- Exact steps to confirm the automation works end-to-end after setup

For custom scripts, include the complete, runnable code in a fenced code block with the correct language tag.
