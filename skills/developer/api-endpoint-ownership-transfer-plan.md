---
name: api-endpoint-ownership-transfer-plan
description: >
  Generates a structured handoff document that reassigns API endpoint ownership between teams, covering documentation gaps, test coverage, and transition milestones. Use when someone says "we need to transfer ownership of our API," asks about handing off endpoints to another team, wants to document an API ownership change, needs to plan a service migration between teams, or is preparing an API handoff checklist.
category: developer
tags: [api, ownership, handoff, documentation, migration]
author: community
---

# API Endpoint Ownership Transfer Plan

This skill produces a comprehensive, structured handoff document when teams need to reassign ownership of API endpoints, ensuring nothing falls through the cracks during the transition.

## Workflow

1. **Gather context** — Ask for: current owning team, receiving team, list of endpoints (method + path), target handoff date, and any known issues or constraints. If the user provides partial info, proceed and mark missing fields as `[REQUIRED]`.

2. **Inventory endpoints** — For each endpoint, document:
   - HTTP method and full path
   - Purpose and business function
   - Current owner and new owner
   - SLA / uptime expectations
   - Dependencies (databases, third-party services, downstream consumers)

3. **Assess documentation gaps** — Flag each endpoint as one of:
   - ✅ Fully documented (OpenAPI/Swagger, README, runbook exist)
   - ⚠️ Partially documented (list what is missing)
   - ❌ Undocumented (receiving team must create docs before handoff completes)

4. **Evaluate test coverage** — For each endpoint report:
   - Unit test coverage percentage (or "unknown" if not provided)
   - Integration/contract tests present: Yes / No / Partial
   - Last test run status: Passing / Failing / Unknown
   - Critical untested paths or edge cases flagged explicitly

5. **Identify risks and blockers** — List open bugs, deprecation warnings, auth/security concerns, rate limiting configs not yet documented, and any infrastructure the receiving team doesn't currently have access to.

6. **Define transition milestones** — Generate a phased timeline:
   - **Phase 1 – Knowledge Transfer** (suggested: weeks 1–2): shadowing sessions, walkthroughs, access provisioning
   - **Phase 2 – Parallel Ownership** (suggested: weeks 3–4): receiving team handles incidents with current team on standby
   - **Phase 3 – Full Handoff** (target date): pager/alert routing switched, runbook ownership transferred, on-call schedule updated
   - **Phase 4 – Post-Handoff Review** (2 weeks after): retrospective, close remaining doc gaps

7. **List action items** — Produce a numbered checklist with owner (current team, receiving team, or shared) and due date for each item.

## Output Format

Produce a Markdown document with the following sections in order:

```
# API Ownership Transfer Plan
**From:** [Current Team]
**To:** [Receiving Team]
**Target Handoff Date:** [Date]
**Generated:** [Today's date]

---

## 1. Endpoint Inventory
[Table: Method | Path | Purpose | Dependencies | SLA]

## 2. Documentation Status
[Table: Endpoint | Status (✅/⚠️/❌) | Missing Items | Action Required]

## 3. Test Coverage Report
[Table: Endpoint | Unit Coverage | Integration Tests | Last Status | Gaps]

## 4. Risks and Blockers
[Numbered list with severity: HIGH / MEDIUM / LOW]

## 5. Transition Milestones
[Phased timeline with dates and owners]

## 6. Action Items Checklist
[Numbered list: [ ] Task — Owner — Due Date]

## 7. Sign-Off
[Placeholder signature block for both team leads]
```

- Length scales with number of endpoints; a 5-endpoint transfer should produce roughly 300–500 words of content plus tables.
- Use tables for inventory, documentation status, and test coverage sections.
- Flag every `[REQUIRED]` field clearly so stakeholders know what to fill in before circulating the document.
- Tone is professional and direct — this is an internal engineering artifact, not a proposal.
