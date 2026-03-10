---
name: data-visualization
description: >
  Transforms raw data into clear, compelling visual representations using best practices in data communication. Use when someone says "visualize this data," asks about "the best chart for," or wants to "show trends," "compare categories," or "make this data easier to understand." Selects appropriate chart types, defines structure, and produces ready-to-use visualization code or specifications.
category: research
tags: [data, visualization, charts, graphs, analysis]
author: community
---

# Data Visualization

This skill selects the right chart type, structures the data correctly, and produces visualization code or detailed specs whenever someone needs to communicate data visually.

## Visualization Workflow

1. **Identify the data story** — Determine what relationship the data shows: comparison, distribution, composition, trend over time, or correlation. This drives chart selection.

2. **Select the appropriate chart type**:
   - Trends over time → line chart
   - Category comparison → bar or column chart
   - Part-to-whole → pie chart (≤5 categories) or stacked bar
   - Distribution → histogram or box plot
   - Correlation between two variables → scatter plot
   - Geographic data → choropleth or bubble map
   - Many variables across categories → heatmap or radar chart

3. **Clean and structure the data** — Identify axes, labels, units, and any aggregation needed. Flag missing values, outliers, or scale issues that will affect readability.

4. **Apply visualization best practices**:
   - Use a descriptive title that states the insight, not just the topic (e.g., "Sales Peaked in Q3" not "Sales by Quarter")
   - Label axes with units; avoid legends when direct labels work
   - Start bar charts at zero; never truncate axes deceptively
   - Limit colors to 5–7 max; use a single accent color for emphasis
   - Remove chartjunk: drop gridlines, borders, and backgrounds that add no information

5. **Choose an implementation target** — Default to Python (matplotlib/seaborn/plotly) unless the user specifies another tool. Offer alternatives: Vega-Lite JSON spec, D3.js, R ggplot2, or Tableau-style instructions.

6. **Write the code or spec** — Produce complete, runnable code. Include data as a hardcoded sample or use the user's provided data. Add inline comments explaining non-obvious choices.

7. **Explain the design decisions** — Briefly state why this chart type was chosen and what insight it surfaces.

## Output Format

Produce the following sections in order:

**Chart Recommendation** (1–2 sentences): Name the chart type and state why it fits the data story.

**Code Block**: Complete, runnable implementation in the chosen language/library. Include imports, data definition, chart construction, labels, title, and export or display call. Minimum viable but production-quality.

**Design Notes** (3–5 bullet points): Axis choices, color rationale, any data transformations applied, and one suggestion for an alternative view if the user wants to explore further.