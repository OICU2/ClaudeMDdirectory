---
name: overhead-allocation-method-comparison
description: >
  Analyzes and compares three overhead allocation methods—activity-based costing (ABC), direct labor hours, and machine hours—to reveal how each method affects product-level margins and cost accuracy. Use when someone asks "how should we allocate overhead," wants to compare costing methods, is concerned that certain products look artificially profitable or unprofitable, or needs to understand why margins differ across allocation approaches. Also activates when someone mentions overhead distortion, cost cross-subsidization, or switching from a single overhead rate to a more granular method.
category: finance
tags: [overhead-allocation, activity-based-costing, cost-accounting, product-margins, managerial-accounting]
author: community
---

# Overhead Allocation Method Comparison

This skill compares activity-based costing, direct labor hour, and machine hour overhead allocation methods side-by-side to show how each method assigns indirect costs to products and what that means for reported margins.

## Analysis Workflow

### Step 1: Gather Inputs
Collect the following from the user before proceeding:
- Total overhead cost pool(s) to be allocated
- List of products (at least 2) with their volume, revenue, and direct costs
- For each product: direct labor hours consumed, machine hours consumed
- For ABC: identify 2–4 cost drivers (e.g., setups, purchase orders, inspections, machine hours) and their total activity levels and per-product consumption

If inputs are missing, ask for them explicitly. Do not fabricate data; use clearly labeled placeholders if the user wants a template.

### Step 2: Calculate Overhead Rates for Each Method

**Direct Labor Hour (DLH) Method**
- Rate = Total Overhead ÷ Total Direct Labor Hours
- Allocated overhead per product = Rate × Product DLH

**Machine Hour (MH) Method**
- Rate = Total Overhead ÷ Total Machine Hours
- Allocated overhead per product = Rate × Product MH

**Activity-Based Costing (ABC)**
- Segment overhead into activity pools (e.g., machine setup cost pool, quality inspection pool)
- Rate per activity = Activity Pool Cost ÷ Total Activity Volume
- Allocated overhead per product = Σ (Activity Rate × Product's Activity Consumption)

### Step 3: Compute Product Margins Under Each Method
For each product and each method:
- Gross Profit = Revenue − Direct Costs − Allocated Overhead
- Gross Margin % = Gross Profit ÷ Revenue × 100

### Step 4: Identify Distortions and Cross-Subsidization
- Flag products where margin swings more than 5 percentage points across methods
- Identify which products are over-costed or under-costed under simpler methods vs. ABC
- Note which allocation base (labor, machine, or activity) best reflects actual resource consumption for this business
- Call out any high-volume/low-complexity products subsidizing low-volume/high-complexity products (or vice versa)

### Step 5: Provide a Method Recommendation
Based on the data:
- Recommend the most appropriate method with a one-paragraph rationale
- State the conditions under which a simpler method is acceptable (e.g., homogeneous products, single dominant cost driver)
- Note implementation complexity and data requirements for ABC if recommending it

## Output Format

Produce the following sections in order:

**1. Input Summary Table**
A table confirming: products, volumes, direct costs, revenue, and activity/hour data used.

**2. Overhead Rate Summary**
A small table showing the calculated rate for each method (DLH rate, MH rate, and each ABC activity rate).

**3. Allocated Overhead by Product — All Three Methods**
A table with rows = products, columns = DLH Allocated, MH Allocated, ABC Allocated.

**4. Product Margin Comparison Table**
Rows = products; columns = Gross Profit ($) and Gross Margin (%) under DLH, MH, and ABC methods. Bold the method that shows the widest margin spread across products.

**5. Distortion Analysis**
Bullet list: which products are over/under-costed under each simplified method vs. ABC, and by how much in dollar and percentage terms.

**6. Recommendation**
2–3 sentences: recommended method, key reason, and one caveat or implementation note.

Total length: concise enough to
