---
name: resource-utilization-heatmap-design
description: >
  Designs a resource utilization heatmap that visualizes team or equipment capacity usage across time periods to surface over- and under-allocation patterns. Use when someone says "show me who is overloaded," asks about visualizing team capacity, wants to identify scheduling bottlenecks, needs to see resource allocation across a timeline, or wants to spot underutilized staff or equipment.
category: operations
tags: [resource-management, heatmap, capacity-planning, visualization, scheduling]
author: community
---

# Resource Utilization Heatmap Design

This skill produces a structured heatmap design — including data schema, color scale logic, and layout recommendations — to visualize how team members or equipment are allocated across time, and when Claude detects questions about capacity visibility or over/under-allocation.

## Heatmap Design Workflow

### 1. Clarify Inputs
Collect or infer the following before designing:
- **Resources**: Who or what is being tracked (people, machines, rooms, vehicles)
- **Time axis**: Granularity needed (hours, days, weeks, sprints, months)
- **Allocation metric**: How utilization is measured (% of capacity, hours booked, task count)
- **Threshold values**: What counts as under-allocated, normal, and over-allocated (e.g., <50%, 50–80%, >80%)
- **Data source**: Spreadsheet, project tool export, or manual input

### 2. Define the Data Schema
Specify the minimum required data structure:
```
| Resource Name | Time Period | Allocated Hours | Capacity Hours | Utilization % |
|---------------|-------------|-----------------|----------------|---------------|
| Alice          | Week 1      | 36              | 40             | 90%           |
| Bob            | Week 1      | 18              | 40             | 45%           |
```
Flag missing fields and recommend defaults (e.g., standard 40-hour capacity if not provided).

### 3. Design the Color Scale
Map utilization ranges to colors using a traffic-light or diverging palette:
- **0–40%**: Blue or light gray → Under-allocated, capacity wasted
- **41–70%**: Green → Healthy utilization
- **71–89%**: Yellow/amber → Approaching limit, monitor closely
- **90–100%**: Orange → At capacity, risk of burnout or delays
- **>100%**: Red → Over-allocated, immediate action needed

Recommend a colorblind-accessible palette (e.g., Blue–White–Red diverging scale with pattern overlays for accessibility).

### 4. Define Layout and Axes
- **X-axis**: Time periods (left to right, chronological)
- **Y-axis**: Resources (rows), sorted by role, team, or alphabetically
- **Cell content**: Display the utilization percentage number inside each cell when space allows
- **Grouping**: Add visual separators between teams or resource types if multiple groups exist
- **Tooltips / annotations**: Recommend hover-state details showing allocated hours, capacity, and project breakdown

### 5. Highlight Patterns
Instruct the rendering tool or analyst to flag:
- **Consecutive red cells**: Sustained overload risk
- **Consecutive blue/gray cells**: Chronic underuse — reallocate or reassign
- **Diagonal patterns**: Workload shifting across resources over time
- **Isolated spikes**: One-off overload that may indicate poor sprint planning

### 6. Recommend Tooling
Match tool recommendation to context:
- **Spreadsheet-based**: Google Sheets conditional formatting or Excel heat map with color scales
- **BI tools**: Power BI matrix visual, Tableau highlight table, Looker pivot
- **Project management**: Notion database with formula-based color tags, or export to dedicated tools
- **Custom code**: Python (seaborn `heatmap`, pandas pivot) or JavaScript (D3.js, Observable)

Provide a ready-to-use Python snippet if the user has raw data:
```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# pivot: rows = resources, columns = time periods, values = utilization %
pivot = df.pivot("Resource", "Period", "Utilization_Pct")
sns.heatmap(pivot, annot=True, fmt=".0f", cmap="RdYlG
