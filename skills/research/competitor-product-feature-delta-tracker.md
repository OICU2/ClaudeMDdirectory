---
name: competitor-product-feature-delta-tracker
description: >
  Compares two versions of a competitor's product feature set and produces a structured changelog highlighting what changed between them. Use when someone says "what changed in competitor X's product," asks about "new features added by a rival," wants to "track differences between two versions of a competitor's offering," needs to "see what a competitor removed or updated," or is trying to "understand feature drift in a competing product."
category: research
tags: [competitive-intelligence, product-research, feature-analysis, changelog, market-research]
author: community
---

# Competitor Product Feature Delta Tracker

This skill takes two snapshots of a competitor's feature set (as text, lists, screenshots descriptions, or URLs) and produces a clean, structured delta report showing additions, removals, and modifications across product areas.

## Delta Analysis Workflow

1. **Ingest both versions**: Accept the "before" and "after" feature data in any format — pasted text, bullet lists, feature page descriptions, or structured data. Label them Version A (older) and Version B (newer).

2. **Normalize the data**: Flatten both inputs into comparable feature-level units. Group features by product area or category if discernible (e.g., Integrations, Pricing, Core Functionality, UI/UX, Security, API).

3. **Classify each delta**:
   - **Added**: Features present in Version B but absent in Version A
   - **Removed**: Features present in Version A but absent in Version B
   - **Modified**: Features present in both but with changed descriptions, scope, limits, pricing, or behavior
   - **Unchanged**: Features identical in both (summarize count only, do not list individually)

4. **Assess significance**: For each changed feature, assign a weight:
   - `High` — core workflow impact, pricing change, or major capability shift
   - `Medium` — meaningful improvement or deprecation but not blocking
   - `Low` — cosmetic, minor wording, or peripheral feature

5. **Identify strategic signals**: After cataloging changes, note 2–4 inferences about product direction, competitive positioning shifts, or potential gaps this creates relative to the user's own product.

6. **Flag ambiguities**: If a feature appears to have changed but the input is unclear, flag it explicitly rather than guessing.

## Output Format

Produce a structured markdown report with the following sections:

---

**Competitor:** [Name if provided]
**Version A:** [Label or date]
**Version B:** [Label or date]
**Total Changes:** X added, Y removed, Z modified

---

### ➕ Added Features
| Feature | Product Area | Significance | Notes |
|---|---|---|---|
| ... | ... | High/Med/Low | ... |

### ➖ Removed Features
| Feature | Product Area | Significance | Notes |
|---|---|---|---|
| ... | ... | High/Med/Low | ... |

### ✏️ Modified Features
| Feature | Product Area | Before | After | Significance |
|---|---|---|---|---|
| ... | ... | ... | ... | High/Med/Low |

### ↔️ Unchanged
X features remained the same (not listed individually).

### 🔍 Strategic Signals
- [Signal 1]
- [Signal 2]
- [Signal 3]

### ⚠️ Ambiguities / Data Gaps
- [Any unclear items that need clarification]

---

Keep the report scannable. Use tables for all change categories. Limit strategic signals to 2–4 sharp observations — no speculation beyond what the data supports.
