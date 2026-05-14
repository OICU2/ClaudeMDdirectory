---
name: technical-decision-log-template
description: >
  Creates a structured architecture decision record (ADR) template that captures context, options evaluated, trade-offs, and final rationale for significant technical choices. Use when someone says "document this technical decision," asks to "create an ADR," wants to "log why we chose this architecture," needs to "record a technology choice," or says "capture the reasoning behind this decision."
category: developer
tags: [architecture, documentation, decision-records, adr, technical-writing]
author: community
---

# Technical Decision Log Template

This skill generates a complete Architecture Decision Record (ADR) template populated with context from the user's description, used whenever a significant technical choice needs to be documented for future reference.

## Workflow

1. **Extract decision context** — Identify the technical choice being made (framework, pattern, infrastructure, library, API design, etc.) from the user's description.
2. **Identify the forcing function** — Determine what triggered this decision: a new requirement, scaling issue, migration, tech debt, security concern, or greenfield choice.
3. **Enumerate options** — List at minimum 2–3 alternatives that were or should be considered, including the status quo if applicable.
4. **Map trade-offs** — For each option, surface concrete pros and cons: performance, cost, team expertise, maintainability, vendor lock-in, time to implement, operational burden.
5. **State the decision and rationale** — Clearly name the chosen option and explain *why* it was selected over alternatives using the trade-off analysis.
6. **Define consequences** — List what changes as a result: new dependencies, required migrations, team training, monitoring needs, future constraints.
7. **Set metadata** — Assign a status (Proposed / Accepted / Deprecated / Superseded), date, and decision owners.

## Output Format

Produce a Markdown document with the following exact structure:

```markdown
# ADR-[NUMBER]: [Short Decision Title]

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXX
**Deciders:** [Names or roles]
**Technical Area:** [e.g., Infrastructure, API Design, Data Storage, Frontend]

---

## Context

[2–4 sentences describing the situation, problem, or requirement that necessitates this decision. Include relevant constraints, scale, and team context.]

## Decision Drivers

- [Key requirement or constraint #1]
- [Key requirement or constraint #2]
- [Key requirement or constraint #3]

## Options Considered

### Option 1: [Name]
**Description:** [1–2 sentences]
**Pros:**
- [Specific advantage]
- [Specific advantage]
**Cons:**
- [Specific drawback]
- [Specific drawback]

### Option 2: [Name]
**Description:** [1–2 sentences]
**Pros:**
- [Specific advantage]
**Cons:**
- [Specific drawback]

### Option 3: [Name] *(if applicable)*
...

## Decision

**Chosen Option:** [Option Name]

[3–5 sentences explaining the rationale. Reference specific decision drivers. Explain why this option's trade-offs are acceptable given the context.]

## Consequences

### Positive
- [Concrete benefit that results from this decision]
- [Concrete benefit]

### Negative / Risks
- [Known drawback or risk introduced]
- [Mitigation strategy if applicable]

### Neutral / Follow-up Actions
- [ ] [Action item with owner and deadline]
- [ ] [Action item]

## Links & References

- [Related ADR, ticket, RFC, or documentation]
- [Benchmark, article, or prior art that informed the decision]
```

If the user provides partial information, fill in what is known and use `[TBD — requires input from team]` placeholders for missing fields. Never omit a section; every section must appear in the output.
