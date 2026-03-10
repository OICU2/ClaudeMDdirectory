---
name: algorithm-design
description: >
  Designs efficient algorithms and data structures to solve computational problems. Use when someone
  asks "how do I solve this efficiently," wants to optimize a slow algorithm, needs help with
  algorithmic complexity, or says "what's the best approach for this problem." Also activates when
  someone is working through coding interview problems or asks about time and space tradeoffs.
category: developer
tags: [algorithms, data-structures, complexity, optimization, problem-solving]
author: community
---

# Algorithm Design

Analyzes computational problems and produces well-reasoned algorithm designs with complexity analysis, used whenever someone needs an efficient solution strategy before or during implementation.

## Algorithm Design Process

1. **Clarify constraints** — Identify input size, value ranges, edge cases, and performance requirements (time/space budgets) before proposing any solution.

2. **Identify problem class** — Categorize the problem: search, sort, graph traversal, dynamic programming, greedy, divide-and-conquer, or combinatorial optimization. This narrows the solution space immediately.

3. **Start with brute force** — State the naive solution and its complexity explicitly. This establishes a baseline and makes the improvement concrete.

4. **Apply appropriate technique** — Choose the right paradigm:
   - **Memoization/DP** for overlapping subproblems
   - **Greedy** when local optimal choices lead to global optimum (prove or disprove)
   - **Binary search** when the search space is monotonic
   - **Two pointers / sliding window** for array/string subproblems
   - **BFS/DFS** for graph reachability and shortest paths
   - **Heap/priority queue** for repeated min/max extraction

5. **Select data structures** — Choose structures that match the access pattern: hash maps for O(1) lookup, heaps for priority, tries for prefix search, union-find for connectivity, segment trees for range queries.

6. **Analyze complexity** — Provide Big-O for time and space in best, average, and worst cases. Call out amortized complexity where relevant.

7. **Check for edge cases** — Empty input, single element, duplicates, negative numbers, integer overflow, cycles in graphs.

8. **Verify correctness** — Trace through a small example step by step to confirm the algorithm produces the right output before presenting it as final.

## Output Format

Produce the following sections in order:

**Problem Restatement** (2–3 lines): Restate the problem in your own words, including key constraints.

**Approach** (numbered list): Walk through the algorithm logic step by step in plain English before any code.

**Complexity Analysis**:
- Time: O(?) — explain why
- Space: O(?) — explain why

**Implementation** (code block): Clean, commented pseudocode or the target language. Include variable names that reflect their purpose.

**Dry Run** (small example): Trace the algorithm on a concrete input (5–10 elements) showing state at each step.

**Tradeoffs** (bullet list): Note alternative approaches considered, why they were rejected or when they would be preferable.

Keep the total response focused — avoid restating obvious steps, but never skip complexity analysis or the dry run.
