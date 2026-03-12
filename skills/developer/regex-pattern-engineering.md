---
name: regex-pattern-engineering
description: >
  Builds, tests, and documents complex regular expressions for specific parsing or validation requirements with annotated explanations and edge case coverage. Use when someone says "I need a regex for", asks about pattern matching or input validation, wants to parse structured text like logs or URLs, needs to validate formats like emails or phone numbers, or says "help me write a regular expression". Covers construction, testing, and documentation of patterns across multiple regex flavors.
category: developer
tags: [regex, parsing, validation, pattern-matching, developer-tools]
author: community
---

# Regex Pattern Engineering

This skill constructs, tests, and documents complex regular expressions with full annotations and edge case coverage when users need to match, parse, or validate text patterns.

## Regex Engineering Workflow

1. **Clarify requirements before building**
   - Identify the target language/engine (JavaScript, Python `re`, PCRE, Go, etc.) — flavor matters
   - Ask for 3–5 concrete examples of strings that should match
   - Ask for 2–3 examples that must NOT match
   - Identify if the match needs to capture groups or just test presence

2. **Construct the pattern incrementally**
   - Build from left to right, one logical component at a time
   - Use named capture groups (`(?P<name>...)` or `(?<name>...)`) when extracting structured data
   - Prefer explicit character classes over shortcuts where clarity matters (`[0-9]` vs `\d` when engine support is uncertain)
   - Anchor appropriately: use `^`/`$` for full-string validation, omit for substring search
   - Apply possessive quantifiers or atomic groups where available to prevent catastrophic backtracking

3. **Annotate every non-trivial token**
   - Provide a line-by-line breakdown using the verbose/extended format (`(?x)` flag) when the engine supports it
   - For engines without `(?x)`, provide the breakdown as a separate comment block
   - Call out greedy vs. lazy quantifiers explicitly and explain the choice

4. **Cover edge cases systematically**
   - Unicode and non-ASCII input
   - Empty strings and single-character inputs
   - Maximum-length inputs
   - Ambiguous delimiters or nested structures
   - Leading/trailing whitespace
   - Case sensitivity variants

5. **Provide a test matrix**
   - List every example as: input → expected result (match/no-match) → which group captures what
   - Flag any inputs the regex intentionally excludes with a reason

6. **Warn about known limitations**
   - State explicitly if the pattern cannot handle a class of inputs (e.g., nested brackets require a parser, not regex)
   - Note engine-specific gotchas (e.g., JavaScript lacks lookbehind in older engines, Python `re` vs `regex` module differences)

7. **Offer alternatives when appropriate**
   - If a simpler string method (`split`, `startswith`, `indexOf`) would be more readable and sufficient, say so
   - If the requirement genuinely needs a parser (HTML, JSON, nested structures), recommend one and explain why regex is the wrong tool

## Output Format

Produce the following sections in order:

**Pattern (ready to use)**
```
/your-pattern-here/flags
```

**Verbose Annotated Version**
```
(?x)          # extended mode — whitespace ignored
^             # start of string
...           # token-by-token explanation inline
```

**Component Breakdown Table**

| Token | Meaning | Notes |
|-------|---------|-------|
| `\d{4}` | Exactly 4 digits | Year component |
| ... | ... | ... |

**Test Matrix**

| Input | Match? | Captured Groups | Notes |
|-------|--------|-----------------|-------|
| `2024-01-15` | ✅ | year=2024, month=01, day=15 | Standard case |
| `99-1-1` | ❌ | — | Year must be 4 digits |
| ... | ... | ... | ... |

**Known Limitations & Edge Cases**
- Bullet list of what the pattern does not handle and why
- Engine-specific caveats

**Usage Example**
Minimal runnable code snippet in the user's language showing the pattern in context (compile, test, extract groups).

Length: as long as the
