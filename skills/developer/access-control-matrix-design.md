---
name: access-control-matrix-design
category: developer
description: >
  Designs comprehensive role-based (RBAC) or attribute-based (ABAC) permission matrices that map every user role to allowed actions and data scopes for application resources. Use when someone says "define permissions for my app", asks about "who can access what", wants to "set up roles and permissions", needs to "design an access control system", or is trying to "figure out authorization rules" for their project.
tags: [security, authorization, rbac, abac, permissions]
author: community
---

# Access Control Matrix Design

This skill produces structured permission matrices mapping user roles to actions and data scopes, activated whenever someone needs to define, audit, or redesign authorization rules for an application.

## Permission Matrix Design Workflow

1. **Identify resources**: List every entity or resource type in the system (e.g., User, Document, Report, Settings, Invoice). Ask if not provided.

2. **Define actions per resource**: For each resource, enumerate applicable CRUD-plus operations: `create`, `read`, `update`, `delete`, `list`, `export`, `approve`, `assign`, `share`, `archive`.

3. **Define roles**: Extract or propose roles from context. Common sets: `superadmin`, `admin`, `manager`, `member`, `viewer`, `guest`. For ABAC, define attributes instead (department, ownership, clearance level).

4. **Determine data scope modifiers**: Annotate each permission with scope qualifiers:
   - `own` — only records owned by the user
   - `team` — records within the user's group/department
   - `all` — unrestricted access
   - `conditional` — access depends on a stated attribute or status

5. **Apply least-privilege principle**: Default to deny. Grant only what is explicitly justified by the role's business purpose.

6. **Flag conflicts and risks**: Identify privilege escalation risks (e.g., a role that can create users and assign roles), separation-of-duties violations, and overly broad `all`-scope grants.

7. **Generate ABAC policies if needed**: When attribute-based rules are required, express them as policy statements: `ALLOW <action> ON <resource> IF <attribute condition>`.

8. **Recommend enforcement layer**: Note where each rule should be enforced — API middleware, database row-level security, frontend UI gating, or service layer.

## Output Format

Produce the following sections in order:

**1. Role Definitions Table**
| Role | Description | Trust Level |
|------|-------------|-------------|
| ...  | ...         | ...         |

**2. Permission Matrix**
A table with roles as columns and `Resource: Action` pairs as rows. Cell values: `✅ all`, `✅ own`, `✅ team`, `⚠️ conditional`, `❌ deny`.

| Resource: Action     | superadmin | admin | manager | member | viewer |
|----------------------|------------|-------|---------|--------|--------|
| User: create         | ✅ all     | ✅ all| ❌      | ❌     | ❌     |
| Document: read       | ✅ all     | ✅ all| ✅ team | ✅ own | ✅ own |

**3. ABAC Policy Statements** *(if applicable)*
Bulleted list of natural-language or pseudocode policy rules for attribute-driven conditions.

**4. Risk Flags**
Bulleted list of identified conflicts, escalation paths, or over-privileged grants with a brief mitigation note each.

**5. Enforcement Recommendations**
Short list mapping each rule category to its recommended enforcement layer (API, DB, UI).

Keep the matrix exhaustive for all provided resources. Use `⚠️ conditional` sparingly and always explain the condition inline or in a footnote.
