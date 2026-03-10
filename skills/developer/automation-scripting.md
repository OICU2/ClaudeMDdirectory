---
name: automation-scripting
category: developer
description: >
  Writes shell, Python, or other scripts to automate repetitive development and operations tasks.
  Use when someone says "automate this", asks to "write a script that", wants to "stop doing this manually",
  needs to "batch process" files or data, or wants to "schedule" a recurring task.
tags: [automation, scripting, bash, python, devops]
author: community
---

# Automation Scripting

This skill generates complete, runnable scripts that eliminate repetitive manual tasks in development and operations workflows.

## Script Generation Workflow

1. **Identify the task pattern** — Determine what is being repeated, what inputs vary, and what the desired output or side effect is.

2. **Choose the right language** — Use Bash/shell for file system operations, CLI chaining, and OS-level tasks. Use Python for data transformation, API calls, or cross-platform needs. Use the language already present in the user's stack if mentioned.

3. **Handle edge cases explicitly**
   - Validate inputs and fail loudly with descriptive error messages
   - Add `set -euo pipefail` to Bash scripts by default
   - Handle missing files, empty inputs, permission errors, and network failures
   - Never silently swallow errors

4. **Make it configurable** — Extract hardcoded values (paths, credentials, thresholds) into variables at the top of the script or accept them as CLI arguments/environment variables.

5. **Add a dry-run or preview mode** when the script modifies, deletes, or moves files/data.

6. **Include logging** — Print what the script is doing at each major step using stderr for logs and stdout for output/results.

7. **Make it idempotent where possible** — Running the script twice should not cause errors or duplicate side effects.

8. **Add usage instructions** — Include a usage comment block or `--help` flag explaining arguments, examples, and dependencies.

9. **Test the logic** — Walk through at least one concrete example mentally to verify correctness before outputting.

## Output Format

Produce the following in order:

1. **Script file** in a fenced code block with the correct language tag (e.g., ```bash, ```python)
   - Shebang line at top
   - Configuration variables block
   - Main logic with inline comments on non-obvious steps
   - Error handling throughout
   - Usage/help block

2. **Usage examples** — 2–4 concrete command-line invocations showing common use cases

3. **Dependencies** — One-line list of any tools, packages, or permissions required to run the script

4. **Optional enhancements** — Bullet list of 2–3 ways to extend the script (e.g., add scheduling via cron, parallelize with xargs, add a config file)

Keep scripts under 150 lines unless complexity demands more. Prioritize clarity over cleverness.