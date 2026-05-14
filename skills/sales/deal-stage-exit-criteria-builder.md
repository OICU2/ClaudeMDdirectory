---
name: deal-stage-exit-criteria-builder
description: >
  Defines clear, measurable conditions a deal must meet before advancing to the next pipeline stage, replacing gut-feel forecasting with objective gates. Use when someone says "our pipeline stages feel fuzzy," asks about reducing forecast inaccuracy, wants to standardize how reps qualify deals, needs to define what it takes to move a deal forward, or is trying to get their team aligned on pipeline hygiene.
category: sales
tags: [pipeline, forecasting, qualification, crm, sales-process]
author: community
---

# Deal Stage Exit Criteria Builder

This skill constructs explicit, measurable exit criteria for each stage of a sales pipeline so reps and managers share a common, objective standard for deal progression.

## Workflow

1. **Gather pipeline stages**: Ask the user to list their current pipeline stages in order (e.g., Prospecting → Discovery → Proposal → Negotiation → Closed Won/Lost). If they don't have named stages, propose a standard B2B or B2C template based on their context.

2. **Identify deal context**: Collect key details that shape criteria relevance:
   - Average deal size and sales cycle length
   - B2B or B2C, transactional or complex sale
   - Number of stakeholders typically involved
   - Primary qualification framework in use (MEDDIC, BANT, SPICED, etc.) — if none, note that

3. **Build exit criteria per stage**: For each stage, generate 4–6 criteria using this logic:
   - Criteria must be **verifiable by evidence**, not rep opinion (e.g., "Economic buyer identified and met" not "rep thinks budget exists")
   - Criteria must be **completable by the rep**, not dependent on the prospect's internal timing alone
   - Include at least one criterion tied to **buyer action or commitment** (not just rep activity)
   - Include at least one criterion tied to **information confirmed** (pain, timeline, authority, budget, or competition)
   - Flag any criterion that is a **hard gate** (deal cannot advance without it) vs. a **soft gate** (strongly preferred but exceptions allowed)

4. **Add a stage summary line**: For each stage, write one sentence describing what a deal in that stage has proven.

5. **Identify common failure modes**: For each stage transition, name 1–2 reasons deals typically stall or get miscategorized at that gate so managers can coach to them.

6. **Optional CRM mapping**: If the user mentions a CRM (Salesforce, HubSpot, Pipedrive, etc.), note which criteria map well to existing CRM fields and flag any that would require a custom field or note convention.

## Output Format

Produce a structured document with the following layout:

```
## Pipeline Stage Exit Criteria

---

### Stage: [Stage Name]
**What this stage proves:** [1-sentence summary]

**Exit Criteria (must be met to advance):**
- [ ] [Criterion 1] — [HARD/SOFT gate]
- [ ] [Criterion 2] — [HARD/SOFT gate]
- [ ] [Criterion 3] — [HARD/SOFT gate]
- [ ] [Criterion 4] — [HARD/SOFT gate]
- [ ] [Criterion 5] — [HARD/SOFT gate] *(if applicable)*

**Common reasons deals stall or skip this gate incorrectly:**
- [Failure mode 1]
- [Failure mode 2]

---
[Repeat for each stage]
```

After all stages, append:

```
## Implementation Notes
- [Any CRM field mapping suggestions]
- [Recommended review cadence for criteria accuracy]
- [Suggested owner: who enforces the gates — manager, RevOps, etc.]
```

Total length: 400–700 words for a 5-stage pipeline. Scale proportionally. Use plain language reps will recognize, not abstract frameworks jargon.
