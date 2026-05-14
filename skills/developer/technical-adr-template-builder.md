---
name: technical-adr-template-builder
description: >
  Generates structured Architecture Decision Records (ADRs) that document the context, options considered, decision rationale, and consequences for technical design choices. Use when someone says "document this architecture decision," asks to "write an ADR for," wants to "record why we chose," needs to "capture the trade-offs of," or says "help me document a technical decision."
category: developer
tags: [architecture, documentation, decision-records, design, engineering]
author: community
---

# Technical ADR Template Builder

Generates complete, structured Architecture Decision Records when a user needs to formally document a technical design choice and its rationale.

## ADR Generation Workflow

1. **Extract decision context** — Identify the technical problem or question being decided. Ask clarifying questions if the problem statement is vague: What system or component does this affect? What constraints exist (time, cost, team skills, existing stack)?

2. **Identify the decision drivers** — List the forces influencing the decision: functional requirements, non-functional requirements (performance, scalability, security), team expertise, budget, and organizational standards.

3. **Enumerate options considered** — Document at least 2–3 alternatives, including the option that was ultimately rejected. For each option capture: a brief description, pros, cons, and any relevant data or benchmarks.

4. **State the decision clearly** — Write a single declarative sentence naming the chosen option. Avoid passive voice ("We decided to use X" not "X was chosen").

5. **Document consequences** — Separate consequences into:
   - **Positive**: benefits gained by this decision
   - **Negative**: trade-offs accepted or technical debt incurred
   - **Risks**: conditions under which this decision should be revisited

6. **Assign metadata** — Include status (Proposed / Accepted / Deprecated / Superseded), date, and decision owners or stakeholders.

7. **Link related decisions** — Note any ADRs this supersedes or is superseded by, and any ADRs it depends on.

## Output Format

Produce a single Markdown document using this exact structure:

```markdown
# ADR-[NNN]: [Short Title of Decision]

**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-NNN]
**Date:** [YYYY-MM-DD]
**Deciders:** [Names or roles]

---

## Context

[2–4 sentences describing the situation, problem, and forces at play. Include relevant constraints.]

## Decision Drivers

- [Driver 1]
- [Driver 2]
- [Driver 3]

## Options Considered

### Option 1: [Name]
[1–2 sentence description]
- **Pros:** ...
- **Cons:** ...

### Option 2: [Name]
[1–2 sentence description]
- **Pros:** ...
- **Cons:** ...

### Option 3: [Name] *(if applicable)*
[1–2 sentence description]
- **Pros:** ...
- **Cons:** ...

## Decision

We will **[chosen option]** because [1–2 sentence rationale tying back to decision drivers].

## Consequences

### Positive
- [Benefit 1]
- [Benefit 2]

### Negative
- [Trade-off or debt 1]
- [Trade-off or debt 2]

### Risks and Review Triggers
- [Condition under which this decision should be reconsidered]

## Related Decisions

- Supersedes: [ADR-NNN or None]
- Superseded by: [ADR-NNN or None]
- Related: [ADR-NNN or None]
```

Length: Aim for 300–600 words total. Each section should be concise but complete — avoid one-word bullets; each point must be self-explanatory to a new team member.
