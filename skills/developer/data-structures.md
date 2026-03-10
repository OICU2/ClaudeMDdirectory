---
name: data-structures
description: >
  Analyzes code and requirements to recommend and implement the most appropriate data structures for a given problem. Use when someone asks "what data structure should I use," wants to optimize slow lookups or memory usage, or needs help choosing between arrays, maps, sets, trees, or graphs. Also activates when someone says their code is too slow or they need to store and retrieve data efficiently.
category: developer
tags: [data-structures, performance, algorithms, optimization, computer-science]
author: community
---

# Data Structures Advisor

This skill evaluates access patterns, performance requirements, and use cases to recommend and implement the best data structure for the job.

## Selection and Implementation Workflow

1. **Extract the use case** — Identify the core operations needed: lookup by key, ordered iteration, uniqueness enforcement, hierarchical relationships, or graph traversal.

2. **Analyze access patterns** — Determine read/write ratio, whether order matters, key vs. index access, frequency of insertions/deletions, and whether duplicates are allowed.

3. **Map to candidates** — Match the pattern to concrete options:
   - Frequent key-based lookup → Hash map / dictionary
   - Uniqueness + membership checks → Hash set
   - Ordered data with range queries → Sorted array, BST, or skip list
   - LIFO operations → Stack
   - FIFO operations → Queue or deque
   - Priority-based retrieval → Heap / priority queue
   - Hierarchical data → Tree (trie, B-tree, segment tree)
   - Relationship graphs → Adjacency list or matrix

4. **State time/space complexity** — Provide Big-O for the key operations (insert, delete, search, access) for each candidate.

5. **Eliminate suboptimal choices** — Explain why rejected options are worse for this specific case (e.g., "array gives O(n) lookup vs. O(1) for a hash map here").

6. **Implement the recommended structure** — Write clean, idiomatic code in the user's language showing initialization, insertion, lookup, and deletion with realistic data from their domain.

7. **Flag tradeoffs** — Note memory overhead, worst-case degradation, thread safety concerns, or language-specific pitfalls (e.g., hash collision behavior, tree balancing).

8. **Suggest when to switch** — Describe conditions under which the recommendation would change (e.g., "if your dataset exceeds RAM, consider an on-disk B-tree").

## Output Format

Produce a structured response with these sections:

**Recommendation:** One sentence naming the chosen data structure and the primary reason.

**Complexity Table:** Markdown table listing 2–4 candidate structures with columns: Structure | Insert | Lookup | Delete | Space | Notes.

**Implementation:** A code block in the user's language (20–50 lines) showing the structure initialized and used with the actual problem's data — not a generic example. Include comments on non-obvious lines.

**Why Not X:** 2–4 bullet points explaining why the runner-up options were rejected for this specific case.

**Tradeoffs:** 2–3 bullets covering memory, worst-case behavior, or concurrency concerns relevant to the chosen structure.

Keep the total response under 400 words of prose; let the code and table carry the information.