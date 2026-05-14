---
name: cli-tool-design
category: developer
description: >
  Scaffolds a well-structured CLI tool with argument parsing, help text, subcommands, and platform-specific error handling. Use when someone asks to build a command-line tool, wants to create a CLI application, needs to add subcommands to a script, or says their CLI needs better argument parsing or help output.
tags: [cli, tooling, argument-parsing, developer-tools, scaffolding]
author: community
---

# CLI Tool Design

Generates complete, production-ready CLI tool scaffolding with argument parsing, subcommand routing, help text, and idiomatic error handling for the target language and platform.

## CLI Design Workflow

1. **Identify target language and platform** — Detect from context (Python, Node.js, Go, Rust, Bash, etc.) and apply the idiomatic CLI library for that ecosystem (argparse, yargs, cobra, clap, etc.).

2. **Define the command surface** — Extract from the request:
   - Top-level command name and one-line description
   - Subcommands (if any) with their own flags and descriptions
   - Required vs optional arguments
   - Flags with short (`-v`) and long (`--verbose`) forms
   - Positional arguments and their validation rules

3. **Generate argument parsing scaffolding** — Include:
   - Auto-generated `--help` / `-h` output with usage examples
   - `--version` flag wired to a version constant
   - Validation with actionable error messages (e.g., `error: --output is required`)
   - Exit codes: `0` for success, `1` for usage errors, `2` for runtime errors

4. **Scaffold subcommand routing** — If subcommands are needed:
   - Create a dispatcher that routes to handler functions
   - Give each subcommand its own help text and flag set
   - Handle unknown subcommands with a suggestion (e.g., "Did you mean X?")

5. **Apply platform conventions** — Follow stderr for errors, stdout for output, POSIX flag conventions on Unix, and Windows-compatible paths/line endings where relevant.

6. **Add error handling patterns** — Wrap execution entry point to:
   - Catch unhandled exceptions and print clean messages (no stack traces in production mode)
   - Support `--debug` flag to expose full stack traces
   - Return meaningful exit codes to the calling shell

7. **Include a usage example block** — Show 3–5 realistic invocation examples in the help text and inline code comments.

## Output Format

Produce the following, in order:

1. **File tree** — A short ASCII tree of all generated files (e.g., `cli.py`, `commands/`, `utils/error.py`)
2. **Full source files** — Each file in a fenced code block with the filename as the label; no placeholders, no `TODO` stubs unless explicitly noted
3. **Help output preview** — A fenced block showing exactly what `mytool --help` and `mytool <subcommand> --help` would print
4. **Usage examples** — 4–6 shell invocations demonstrating common workflows, with brief inline comments

Length: Complete and runnable. Do not truncate. If the tool is large, split into logical files rather than shortening any single file.
