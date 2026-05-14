---
name: solo-operator-bottleneck-finder
description: >
  Analyzes a solopreneur's weekly task log to identify the single biggest time or revenue bottleneck limiting growth. Use when someone says "I feel stuck in my business," shares what they've been working on all week, asks why they can't seem to grow, or wants to know where their time is actually going. Also triggers when someone says "I wear too many hats" or "I don't know what to focus on."
category: solopreneur
tags: [productivity, bottleneck-analysis, time-audit, solopreneur, growth]
author: community
---

# Solo Operator Bottleneck Finder

Ingests a solopreneur's weekly task log or activity dump and surfaces the single highest-leverage bottleneck — either a time drain or a revenue ceiling — so they know exactly what to fix, delegate, or cut first.

## Bottleneck Analysis Workflow

1. **Collect the task log.** Ask the user to paste or describe everything they worked on in the past 7 days — tasks, meetings, admin, client work, content, anything. If they haven't tracked it, ask them to do a 10-minute brain dump from memory. Do not proceed with vague input like "I just worked on business stuff."

2. **Categorize every task** into one of four buckets:
   - **Revenue-generating** (directly brings in money or closes deals)
   - **Revenue-enabling** (builds pipeline, audience, or product — pays off later)
   - **Operational overhead** (keeps the business running but doesn't grow it)
   - **Low-value drag** (could be eliminated, automated, or delegated without loss)

3. **Estimate time allocation.** If the user didn't provide hours, ask for rough estimates per task. If they resist, prompt: "Even a guess is fine — 30 min, 2 hours, half a day." Tally the total hours per bucket.

4. **Identify the bottleneck type.** Determine whether the primary bottleneck is:
   - **Time bottleneck:** >40% of hours consumed by overhead or low-value drag
   - **Revenue bottleneck:** <25% of hours spent on revenue-generating or revenue-enabling work
   - **Focus bottleneck:** Tasks are spread across too many areas with no dominant priority
   - **Capacity bottleneck:** Revenue-generating work exists but can't scale because the operator is the only one doing it

5. **Find the single biggest constraint.** Do not list five problems. Identify the ONE task, category, or pattern that, if removed or restructured, would have the largest compounding effect on growth. Use the 80/20 rule — what is consuming the most time or blocking the most revenue?

6. **Generate a specific fix.** For the identified bottleneck, produce one concrete action: eliminate it, automate it, batch it, delegate it, or replace it with a higher-leverage activity. Name the specific task, not a general category.

## Output Format

Produce a structured report with these exact sections:

**⏱ Time Breakdown**
A simple table or bulleted list showing estimated hours per bucket (Revenue-Generating, Revenue-Enabling, Overhead, Low-Value Drag) and the percentage of total work week each represents.

**🚨 Primary Bottleneck**
One sentence naming the bottleneck type and the specific task or pattern causing it. Example: "Your biggest bottleneck is a time drain — you spent ~9 hours this week on manual invoice follow-up and scheduling, which is 30% of your working hours and zero percent of your growth."

**💡 The Single Fix**
Two to four sentences describing exactly what to do about it. Be specific: name a tool, a script, a person to hire, a task to drop. Do not offer multiple options — commit to one recommendation.

**📈 Expected Unlock**
One to two sentences on what becomes possible once this bottleneck is removed. Quantify if possible ("This could free 6–8 hours per week for client acquisition").

**⏭ Optional Next Bottleneck**
One line noting what the second-biggest constraint is, so the user knows what to tackle after the first fix is in place. Do not elaborate — this is a teaser, not a second analysis.

Total output length: 200–350 words. Avoid bullet-point overload. Be direct, not diplomatic.
