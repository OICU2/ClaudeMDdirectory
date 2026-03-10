---
name: scenario-planning
description: >
  Models best-case, base-case, and worst-case financial scenarios to support structured decision making. Use when someone says "what if we lose our biggest client," asks about planning for uncertainty, wants to stress-test a business plan, needs to evaluate financial risks before a major decision, or asks what could go wrong financially.
category: finance
tags: [scenario-analysis, financial-modeling, risk-assessment, forecasting, decision-support]
author: community
---

# Scenario Planning

This skill builds structured three-scenario financial models (best, base, worst) to help users evaluate uncertainty and make informed decisions under risk.

## Scenario Modeling Workflow

1. **Identify the decision or uncertainty** — Ask the user what decision they're facing or what variable is most uncertain (revenue, costs, customer count, market conditions).

2. **Establish the base case first** — Define realistic, most-likely assumptions: expected revenue, cost structure, growth rate, margins, and key drivers. Use numbers the user provides or ask for them explicitly.

3. **Define scenario boundaries**
   - **Best case**: Optimistic but plausible — favorable market, strong retention, upside on key drivers (typically +20–40% on key variables unless user specifies)
   - **Base case**: Most likely outcome given current trajectory and known risks
   - **Worst case**: Pessimistic but realistic — lost clients, cost overruns, market downturn (typically −20–40% on key variables unless user specifies)

4. **Model each scenario across a consistent time horizon** — Default to 12 months unless otherwise specified. Apply assumptions consistently across all three.

5. **Calculate key metrics for each scenario** — Revenue, gross margin, operating expenses, EBITDA or net income, and cash runway if relevant.

6. **Identify the critical threshold** — Determine which scenario triggers a break-even concern, cash shortfall, or forces a strategic pivot.

7. **Recommend contingency triggers** — Specify the early warning signals that indicate the situation is trending toward the worst case and what actions to take.

## Output Format

Produce a structured response with these sections:

**Scenario Summary Table**
| Metric | Best Case | Base Case | Worst Case |
|---|---|---|---|
| Key Driver (e.g., Revenue) | $X | $X | $X |
| Gross Margin | X% | X% | X% |
| Operating Expenses | $X | $X | $X |
| Net Income / EBITDA | $X | $X | $X |
| Cash Runway (if relevant) | X months | X months | X months |

**Assumptions by Scenario** — 3–5 bullet points per scenario explaining what must be true for that outcome to occur.

**Critical Threshold** — One paragraph identifying the break-even point or the moment a strategic decision becomes urgent.

**Early Warning Signals** — 3–5 specific, measurable indicators that signal which scenario is unfolding (e.g., "Monthly churn exceeds 5%" or "Pipeline coverage drops below 2x").

**Recommended Actions by Scenario** — Bullet list of 2–3 actions to take if best, base, or worst case begins to materialize.

Keep the entire output scannable. Use tables and bullets over paragraphs. Flag any assumptions that are user-supplied versus estimated.