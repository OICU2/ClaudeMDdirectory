---
name: feature-flag-state-dependency-mapper
description: >
  Analyzes a codebase to map every active feature flag to the features, services, API endpoints, UI components, and code paths that depend on it, producing a safe-removal risk report. Use when someone says "which code depends on this flag", asks about removing or cleaning up a feature flag, or wants to audit flag dependencies before a rollout or deprecation.
category: developer
tags: [feature-flags, dependency-analysis, refactoring, technical-debt, code-audit]
author: community
---

# Feature Flag State Dependency Mapper

This skill scans the codebase for feature flag references and builds a structured dependency map showing what breaks, changes, or becomes unreachable if a flag is removed or toggled.

## Dependency Mapping Workflow

1. **Identify flag sources**: Locate where flags are defined — config files, environment variables, database tables, SDK initialization calls (LaunchDarkly, Unleash, Flagsmith, custom wrappers). Extract all flag names and their current default states.

2. **Search for flag references**: Grep or AST-search the codebase for each flag name. Look in:
   - Conditional branches (`if`, `switch`, ternaries)
   - Middleware and route guards
   - Component render logic
   - Backend service method bodies
   - Infrastructure-as-code and CI/CD configs

3. **Classify each reference by type**:
   - `GATE`: Entire feature or endpoint is blocked/enabled by the flag
   - `BRANCH`: Flag controls one path in a multi-path flow
   - `CONFIG`: Flag changes a value or parameter, not a code path
   - `KILL_SWITCH`: Flag disables a running feature without deployment

4. **Trace downstream dependencies**: For each reference, identify:
   - Which services or modules call this code path
   - Whether the flag-gated path is on the hot path or critical flow
   - Any other flags that are evaluated in combination (compound conditionals)
   - Tests that mock or assert against the flag state

5. **Assess removal risk**: For each flag, score risk as:
   - `HIGH`: Flag guards production traffic, has no fallback, or is referenced in >5 locations
   - `MEDIUM`: Flag is in a non-critical path or has a safe default
   - `LOW`: Flag is only in tests or dead code

6. **Check for flag state inconsistencies**: Identify flags that are hardcoded to `true`/`false` in tests but live in configs — these indicate stale flags that were never cleaned up.

## Output Format

Produce a structured report with one section per flag:

```
## Flag: `enable_new_checkout_flow`
- **State**: ON (default: true)
- **Risk Level**: HIGH
- **Reference Count**: 8

### Dependencies
| Location | File | Type | Notes |
|---|---|---|---|
| CheckoutController.process() | src/controllers/checkout.ts:42 | GATE | Entire new flow blocked if OFF |
| CartSummary component | src/components/CartSummary.tsx:17 | BRANCH | Falls back to legacy layout |
| /api/checkout/v2 route | src/routes/api.ts:91 | GATE | 404s if flag is OFF |
| integration.test.ts | tests/checkout.test.ts:203 | TEST | Mocked as true — must update |

### Compound Dependencies
- Evaluated together with `enable_payment_v3` in PaymentService.charge() — both must be ON for new flow to complete

### Safe Removal Checklist
- [ ] Confirm `enable_new_checkout_flow` is ON for 100% of users
- [ ] Delete legacy branch in CheckoutController
- [ ] Remove route guard on /api/checkout/v2
- [ ] Update CartSummary to remove conditional render
- [ ] Update tests to remove flag mock
- [ ] Remove flag from config and SDK dashboard
```

After all flags, append a **Summary Table**:

```
| Flag | Risk | References | Recommended Action |
|---|---|---|---|
| enable_new_checkout_flow | HIGH | 8 | Remove after full rollout confirmed |
| legacy_search_fallback | LOW | 1 | Safe to delete immediately |
```

- Group HIGH-risk flags first
- Flag any flag with zero references as a
