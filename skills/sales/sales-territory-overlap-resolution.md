---
name: sales-territory-overlap-resolution
description: >
  Identifies and resolves conflicts where multiple sales reps are pursuing the same accounts by generating clear territory boundary rules and reassignment recommendations. Use when someone says "two reps are fighting over the same account," asks about territory conflicts or overlap disputes, wants to clean up messy sales territories, needs to define who owns which accounts, or is dealing with duplicate outreach complaints from prospects.
category: sales
tags: [territory-management, account-assignment, conflict-resolution, sales-ops, rep-alignment]
author: community
---

# Sales Territory Overlap Resolution

This skill analyzes overlapping sales territories, identifies root causes of account conflicts, and produces concrete boundary rules and reassignment recommendations to eliminate rep confusion and prospect friction.

## Conflict Analysis & Resolution Workflow

**Step 1: Extract conflict data**
Ask for or work with the following inputs:
- List of disputed accounts (company name, size, location, industry)
- Names and current territory definitions of involved reps
- How each rep claims ownership (e.g., first contact, named account list, geographic rule, industry vertical)
- Any existing territory documentation or CRM assignment rules

**Step 2: Identify the overlap type**
Classify each conflict into one of four categories:
- **Geographic overlap** — territory boundaries are ambiguous or drawn too broadly
- **Named account conflict** — the same account appears on multiple reps' named lists
- **Segmentation gap** — no clear rule exists for company size, industry, or subsidiary ownership
- **Historical claim conflict** — rep A worked the account before a territory restructure

**Step 3: Apply resolution logic by type**
- *Geographic*: Define a single tiebreaker rule (e.g., billing address of HQ wins over subsidiary location)
- *Named account conflict*: Assign to the rep with the earliest logged CRM activity; escalate ties to manager
- *Segmentation gap*: Write a new explicit rule (e.g., "Accounts with >500 employees in manufacturing go to enterprise segment regardless of zip code")
- *Historical claim*: Honor the historical owner unless a territory restructure document explicitly reassigned it; document the exception

**Step 4: Write boundary rules**
For each resolution, produce a rule statement in this format:
> "If [condition], then [rep role/segment] owns the account. Exception: [edge case handling]."

Rules must be unambiguous, testable against CRM data, and cover the specific conflict type raised.

**Step 5: Generate reassignment recommendations**
For each disputed account, produce a single recommended owner with justification. Flag any accounts requiring manager sign-off before moving in CRM.

**Step 6: Identify systemic fixes**
Note patterns across conflicts (e.g., all disputes involve a specific zip code range or company size band) and recommend one or two structural territory changes to prevent recurrence.

## Output Format

Produce three sections:

**1. Conflict Summary Table**
A markdown table with columns: Account Name | Rep A Claim | Rep B Claim | Conflict Type | Recommended Owner | Justification

**2. Territory Boundary Rules**
Numbered list of rule statements in the "If / then / exception" format. Each rule should be one to three sentences, precise enough to be entered into a CRM routing policy.

**3. Systemic Recommendations**
Two to five bullet points identifying root causes and structural fixes (e.g., redefine geographic boundaries, add a named account freeze list, implement a first-touch timestamp rule in CRM). Each bullet includes a specific action and who should own it (sales ops, sales manager, RevOps).

Total output length: 300–600 words depending on number of conflicts. Use plain language — output should be readable by both sales reps and sales operations managers.
