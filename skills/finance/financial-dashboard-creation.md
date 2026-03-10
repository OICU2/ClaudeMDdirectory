---
name: financial-dashboard-creation
description: >
  Builds interactive, real-time financial dashboards that surface key metrics and KPIs for business decision-making. Use when someone says "build me a financial dashboard," asks about visualizing revenue or cash flow, wants to track financial performance in real time, needs to display P&L metrics visually, or requests a finance reporting interface.
category: finance
tags: [dashboard, visualization, financial-metrics, real-time, reporting]
author: community
---

# Financial Dashboard Creation

This skill generates complete financial dashboard implementations — including layout, data binding, charts, and metric cards — whenever a user needs to visualize financial data or KPIs in an interactive interface.

## Dashboard Creation Workflow

1. **Identify the financial domain** — Determine the focus: P&L, cash flow, revenue analytics, budget vs. actuals, KPIs, or a combined executive summary. Ask if not specified.

2. **Define key metrics** — Map out the core metrics to surface:
   - Revenue metrics: MRR, ARR, gross revenue, revenue growth rate
   - Profitability: gross margin, EBITDA, net income, operating margin
   - Liquidity: cash on hand, burn rate, runway, current ratio
   - Operational: customer acquisition cost, LTV, churn rate, accounts receivable aging

3. **Choose the tech stack** — Default to React + Recharts unless the user specifies otherwise. Offer alternatives: Chart.js, D3.js, Plotly, or Streamlit (Python).

4. **Design the layout** — Use a grid-based layout with:
   - Top row: 4–6 summary KPI cards (metric name, value, delta %, trend arrow)
   - Middle section: Primary chart (line for time-series revenue/cash flow, bar for comparisons)
   - Bottom section: Secondary charts (pie for revenue breakdown, table for top transactions)

5. **Implement real-time data binding** — Wire components to a data source:
   - Mock data with `setInterval` refresh for demos
   - REST API fetch with polling interval for live data
   - WebSocket connection for true real-time streaming
   - Include a data refresh timestamp indicator

6. **Apply financial formatting** — Format all values correctly:
   - Currency: `$1,234,567.89` or abbreviated `$1.2M`
   - Percentages: `+12.4%` with color coding (green positive, red negative)
   - Dates: ISO format internally, human-readable in UI (`Jan 2025`)

7. **Add interactivity** — Include:
   - Date range picker (last 7d, 30d, 90d, 1y, custom)
   - Metric toggle to show/hide chart series
   - Drill-down on chart click for transaction-level detail
   - Export button for CSV/PDF

8. **Handle edge cases** — Account for:
   - Loading skeleton states while data fetches
   - Error boundaries with retry logic
   - Zero or null values (show `—` not `$0.00` for missing data)
   - Responsive breakpoints for mobile viewing

## Output Format

Produce the following in a single response:

**1. File structure listing** — Show the complete file tree for the dashboard component(s).

**2. Complete source code** — Provide full, runnable code files (no truncation) in this order:
   - Main dashboard component (`Dashboard.jsx` or equivalent)
   - Sub-components (KPICard, RevenueChart, MetricsTable)
   - Mock data file or API service layer (`financialData.js`)
   - CSS/Tailwind styles (inline or separate file)

**3. Inline comments** — Every major block must have a `//` comment explaining what it renders or calculates.

**4. Setup instructions** — 3–5 lines covering install command, how to run, and how to connect real data.

**5. Customization notes** — Bullet list of the 3–5 most likely things the user will want to change (colors, metrics, data source, refresh interval).

Length: Full implementation, no stubs or placeholder functions. All chart components must render with mock data out of the box.
