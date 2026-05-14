---
name: ops-shift-roster-coverage-validator
description: >
  Validates scheduled shift rosters against minimum staffing requirements by role, location, and time block, then flags gaps before deployment. Use when someone says "check if we have enough coverage," asks about "shift gaps or understaffing," wants to "validate a roster before publishing," needs to "review schedule coverage," or is "preparing shifts for deployment."
category: operations
tags: [scheduling, staffing, coverage, roster, workforce]
author: community
---

# Shift Roster Coverage Validator

Analyzes shift rosters to verify minimum coverage thresholds are met across every role, location, and time block, surfacing gaps before the schedule goes live.

## Validation Workflow

1. **Parse the roster input** — Accept the schedule as a table, CSV, JSON, or plain-text list. Extract: staff name, role, location, shift start time, shift end time, date.

2. **Establish coverage requirements** — If minimums are not provided, prompt the user to supply them in this format: `Role | Location | Time Block | Minimum Headcount`. Do not proceed without requirements.

3. **Segment time blocks** — Divide each day into the defined time blocks (e.g., 06:00–14:00, 14:00–22:00, 22:00–06:00). If blocks are not predefined, default to 8-hour segments starting at 00:00.

4. **Count coverage per cell** — For each combination of [Date × Location × Role × Time Block], count how many staff are scheduled. A staff member covers a time block if their shift overlaps it by at least 50% of the block duration, unless otherwise specified.

5. **Compare against minimums** — Flag any cell where actual headcount falls below the required minimum. Record: date, location, role, time block, required count, actual count, and shortfall.

6. **Check for zero-coverage blocks** — Separately flag any cell with zero staff scheduled as a critical gap, regardless of whether a minimum was defined.

7. **Identify boundary gaps** — Check shift handoff points for coverage continuity. Flag any period longer than 15 minutes where a role/location drops below minimum during a transition.

8. **Summarize findings** — Produce a structured report (see Output Format). If no gaps are found, explicitly confirm the roster is compliant.

## Output Format

**Coverage Validation Report**

```
SUMMARY
-------
Status: PASS / FAIL
Total gaps found: [n]
Critical (zero coverage): [n]
Understaffed blocks: [n]
Dates reviewed: [range]
Locations reviewed: [list]
Roles reviewed: [list]

CRITICAL GAPS (zero coverage)
------------------------------
[Date] | [Location] | [Role] | [Time Block] | Required: [n] | Actual: 0

UNDERSTAFFED BLOCKS
--------------------
[Date] | [Location] | [Role] | [Time Block] | Required: [n] | Actual: [n] | Shortfall: [n]

HANDOFF GAPS
-------------
[Date] | [Location] | [Role] | [Time Range] | Duration uncovered: [n min]

RECOMMENDATIONS
----------------
- [Specific action: e.g., "Add 1 RN to Facility A on 2024-03-15 night shift (22:00–06:00)"]
- [One line per gap, actionable and concrete]

COMPLIANT BLOCKS
-----------------
[Confirmation that all other date/location/role/time-block combinations meet minimums]
```

- Use a table format if the output spans more than 10 gap rows.
- Keep each recommendation to one line with enough detail to act on immediately.
- Do not omit any flagged gap, even if it appears minor.
