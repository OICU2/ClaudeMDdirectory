---
name: research-finding-to-stakeholder-action-matrix
description: >
  Converts finalized research findings into a structured matrix that maps each insight to a specific stakeholder group and recommended action. Use when someone says "turn our research into actions," asks to "map findings to stakeholders," wants to "translate insights into a stakeholder plan," needs to "assign research outcomes to teams," or says "who should act on each finding."
category: research
tags: [research, stakeholders, action-planning, matrix, insights]
author: community
---

# Research Finding to Stakeholder Action Matrix

This skill transforms a set of finalized research findings into a structured matrix that clearly assigns each insight to a responsible stakeholder group with a concrete recommended action, so research drives decisions rather than sitting in a report.

## Workflow

1. **Collect findings**: Ask the user to provide all finalized research findings. If they paste a report or bullet list, extract the distinct insights — do not summarize or merge findings unless they are exact duplicates.

2. **Identify stakeholder groups**: Ask the user to name the relevant stakeholder groups (e.g., Product, Marketing, Engineering, Leadership, Customer Success). If they don't know, infer reasonable groups from the nature of the findings and ask for confirmation.

3. **Map each finding to a primary stakeholder**: For every finding, determine which single stakeholder group is most responsible for acting on it. Avoid splitting one finding across multiple owners — assign a primary owner and optionally note secondary stakeholders.

4. **Define the recommended action**: For each finding-stakeholder pair, write one specific, verb-led action the stakeholder should take (e.g., "Redesign the onboarding checklist to surface the key feature within the first session").

5. **Assign priority and timeframe**: Label each row with a priority (High / Medium / Low) and a suggested timeframe (Immediate / Short-term / Long-term) based on impact and feasibility signals in the research.

6. **Flag blockers or dependencies**: If an action depends on another team or finding, note it in a brief "Dependencies" column entry.

7. **Review for gaps**: After drafting the matrix, check whether any stakeholder group has no assigned actions (which may signal a gap in coverage) and whether any finding is left without a clear owner.

## Output Format

Produce a Markdown table with the following columns:

| # | Research Finding | Primary Stakeholder | Secondary Stakeholder(s) | Recommended Action | Priority | Timeframe | Dependencies |
|---|-----------------|--------------------|--------------------------|--------------------|----------|-----------|--------------|

- **#**: Sequential row number.
- **Research Finding**: One concise sentence restating the finding verbatim or near-verbatim.
- **Primary Stakeholder**: Single named group (e.g., "Product Team").
- **Secondary Stakeholder(s)**: Additional groups who should be informed or involved; leave blank if none.
- **Recommended Action**: One specific, verb-led action sentence.
- **Priority**: High / Medium / Low.
- **Timeframe**: Immediate (≤2 weeks) / Short-term (1–3 months) / Long-term (3+ months).
- **Dependencies**: Brief note on blockers or prerequisite actions; leave blank if none.

After the table, include a **Summary** section (3–5 bullet points) highlighting the highest-priority actions, the most action-heavy stakeholder group, and any critical dependencies that could block progress.
