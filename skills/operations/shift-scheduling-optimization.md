---
name: shift-scheduling-optimization
description: >
  Builds optimized staff shift schedules by balancing employee availability, skill requirements, labor cost constraints, and minimum coverage thresholds across time periods. Use when someone says "create a shift schedule," asks about "staff coverage gaps," wants to "optimize my roster," needs to "assign shifts for the week," or is trying to "reduce overtime costs" while maintaining service levels.
category: operations
tags: [scheduling, workforce, optimization, staffing, operations]
author: community
---

# Shift Scheduling Optimization

This skill generates optimized staff shift schedules that satisfy coverage minimums, respect employee availability and skills, and minimize labor costs — activated whenever someone needs to build, fix, or optimize a work roster.

## Scheduling Workflow

1. **Gather inputs before proceeding.** Ask for: time period (days/weeks), shift windows (start/end times), roles or skill categories needed, minimum headcount per shift, employee list with availability and skills, max hours per employee, and any cost or overtime constraints. Do not guess missing values.

2. **Define coverage requirements.** Map each time slot to its minimum and ideal headcount by role. Flag any periods with known high demand (weekends, peak hours) and treat them as hard constraints.

3. **Categorize employees.** Group staff by: available days/hours, qualified roles/skills, employment type (full-time, part-time, on-call), and current weekly hours to avoid overtime thresholds.

4. **Apply scheduling rules in priority order:**
   - Hard constraints first: legal rest periods (minimum 8–11 hours between shifts), contracted hours limits, role-mandatory certifications.
   - Coverage minimums second: ensure every slot meets the floor headcount for each required role.
   - Cost optimization third: prefer lower-cost employees when equally qualified; minimize overtime; distribute hours to avoid unplanned premium pay.
   - Fairness last: distribute desirable and undesirable shifts equitably across eligible staff.

5. **Detect and resolve conflicts.** Identify: uncovered slots, employees scheduled beyond availability, role mismatches, overtime violations. Propose substitutions or flag for manager decision if unresolvable.

6. **Calculate labor cost estimate.** Multiply scheduled hours by employee rate (if provided) per shift, sum by day and week, and flag shifts where overtime premiums apply.

7. **Validate the schedule.** Confirm every shift has required roles filled, no employee exceeds constraints, and total cost is within budget (if given).

## Output Format

Produce the following sections in order:

**Schedule Table** — A day-by-day, shift-by-shift grid showing:
- Shift name/time window
- Employee name assigned per role
- Hours worked per employee that day

**Weekly Summary Table** — One row per employee:
| Employee | Role | Total Hours | Overtime Hours | Est. Cost |

**Coverage Report** — List each shift period and confirm: ✅ Met / ⚠️ Understaffed / ❌ Uncovered, with headcount achieved vs. required.

**Conflicts & Flags** — Bulleted list of unresolved issues, constraint violations, or decisions requiring manager input.

**Optimization Notes** — 3–5 bullets summarizing cost-saving moves made, trade-offs accepted, and recommendations (e.g., "Add one part-time hire on Sundays to eliminate recurring gap").

Format as Markdown. If data was assumed due to missing inputs, list all assumptions in a clearly labeled block at the top.
