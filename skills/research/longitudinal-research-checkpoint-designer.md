---
name: longitudinal-research-checkpoint-designer
category: research
description: >
  Designs structured checkpoint protocols for longitudinal studies to assess data consistency,
  participant retention health, and methodology adherence at defined intervals. Use when someone
  says they are running a multi-wave study, asks how to monitor data quality over time, wants to
  track participant dropout patterns, needs to schedule study check-ins, or is designing a
  long-term research protocol.
tags: [longitudinal-studies, research-design, data-quality, participant-retention, protocol-design]
author: community
---

# Longitudinal Research Checkpoint Designer

This skill generates structured checkpoint protocols for longitudinal studies, defining what to assess, when, and how at each interval to protect data integrity and participant retention.

## Checkpoint Design Workflow

1. **Gather study parameters** — Collect total study duration, number of waves/time points, participant population size, primary outcome variables, and any known attrition risks before designing checkpoints.

2. **Map checkpoint intervals** — Place mandatory checkpoints at: study launch (T0 baseline), 25%, 50%, and 75% of study duration, each data collection wave, and study close. Add interim checkpoints if wave gaps exceed 6 months.

3. **Define three assessment domains per checkpoint:**
   - **Data Consistency Review**: Check for missing data rates per variable (flag if >5%), response range violations, inter-rater reliability scores (if applicable), and instrument drift indicators.
   - **Retention Health Metrics**: Calculate current retention rate, compare to projected attrition curve, identify sub-groups with elevated dropout risk, and log reasons for withdrawal.
   - **Methodology Adherence Audit**: Verify protocol deviations were logged, confirm data collection procedures match the approved protocol, check staff training compliance, and validate equipment or tool calibration records.

4. **Assign severity thresholds** — For each metric, define green (on track), yellow (monitor closely), and red (immediate action required) thresholds based on study-specific tolerances.

5. **Specify responsible roles** — Assign a named role (PI, study coordinator, data manager, IRB liaison) to each checkpoint task. Avoid unassigned action items.

6. **Build contingency triggers** — For each red-threshold condition, specify the exact corrective action: protocol amendment, participant re-contact campaign, data imputation review, or IRB notification.

7. **Schedule documentation outputs** — Each checkpoint must produce a checkpoint summary report filed in the study log within 5 business days of the checkpoint date.

## Output Format

Produce a checkpoint protocol document with the following structure:

**Study Overview Block** (3–5 lines): Study name, total duration, wave schedule, target N, and primary outcomes.

**Checkpoint Table**: One row per checkpoint with columns for Checkpoint ID, Date/Study Month, Assessment Domain, Specific Metrics to Evaluate, Responsible Role, Green/Yellow/Red Thresholds, and Contingency Action.

**Retention Tracking Template**: A simple table shell with columns for Wave, Target N, Actual N, Retention %, Dropout Reasons (coded), and Risk Flag.

**Methodology Adherence Checklist**: A bulleted checklist formatted for direct use at each checkpoint, with checkboxes for each audit item.

**Escalation Decision Tree**: A short flowchart description (text-based, using indented if/then logic) showing when to escalate findings to PI, IRB, or funders.

Length: Sized to study complexity — minimum 400 words for simple two-wave studies, 800–1200 words for studies with four or more waves. Use tables wherever data is comparative across time points.
