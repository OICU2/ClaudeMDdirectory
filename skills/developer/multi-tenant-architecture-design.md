---
name: multi-tenant-architecture-design
description: >
  Architects multi-tenancy models with appropriate data isolation, authentication scoping, and
  resource partitioning strategies. Use when someone asks about building a multi-tenant SaaS
  application, wants to isolate tenant data in a shared database, needs to design tenant-aware
  authentication, or is deciding between silo, pool, and bridge tenancy models. Also activates
  when someone says their application needs to support multiple customers on shared infrastructure.
category: developer
tags: [multi-tenancy, saas, architecture, database-design, authentication]
author: community
---

# Multi-Tenant Architecture Design

Guides the design of multi-tenant systems by selecting isolation models, defining data partitioning strategies, scoping authentication and authorization per tenant, and partitioning shared infrastructure resources.

## Multi-Tenancy Architecture Workflow

### 1. Determine Isolation Model
Evaluate and recommend one of three models based on scale, compliance, and cost requirements:

- **Silo (Full Isolation):** Separate database, schema, and infrastructure per tenant. Use when tenants have strict compliance requirements (HIPAA, SOC2), need guaranteed performance SLAs, or demand data residency controls. Highest cost, lowest cross-tenant risk.
- **Pool (Shared Everything):** Single database and schema with a `tenant_id` discriminator column on every table. Use for cost-sensitive SaaS with many small tenants and no strict compliance requirements. Lowest cost, highest implementation discipline required.
- **Bridge (Shared Database, Separate Schema):** One database server, one schema per tenant. Balances isolation and cost. Use when tenants need logical separation but infrastructure cost of full silo is prohibitive.

### 2. Data Isolation Implementation

**Pool Model:**
- Add `tenant_id UUID NOT NULL` to every tenant-scoped table with a foreign key to a `tenants` table.
- Enforce row-level security (RLS) at the database level (PostgreSQL `ENABLE ROW LEVEL SECURITY`, `CREATE POLICY`).
- Never rely solely on application-layer filtering — always back it with database-enforced policies.
- Create indexes on `(tenant_id, primary_key)` and `(tenant_id, <query_columns>)` for every multi-tenant table.

**Bridge Model:**
- Provision a schema per tenant on onboarding (e.g., `tenant_abc.users`).
- Use a connection pool with schema `search_path` set per request context.
- Run migrations across all tenant schemas via a migration orchestrator (not a single shared migration).

**Silo Model:**
- Provision separate databases or database instances per tenant.
- Use a tenant registry (central metadata store) mapping `tenant_id` → connection string.
- Manage credentials per tenant via a secrets manager (AWS Secrets Manager, Vault).

### 3. Tenant-Scoped Authentication & Authorization

- **Tenant Resolution:** Resolve tenant context at the boundary (subdomain `tenant.app.com`, custom domain, JWT claim, or API key prefix) before any business logic executes.
- **JWT Claims:** Embed `tenant_id` and `tenant_roles` in access tokens. Validate `tenant_id` on every authenticated request server-side — never trust client-provided tenant context.
- **Authorization Scoping:** Implement a permission model where every permission check is `(tenant_id, user_id, resource, action)`. Use attribute-based access control (ABAC) or a policy engine (OPA, Casbin) for complex tenant-level permission hierarchies.
- **Cross-Tenant Access Prevention:** Explicitly reject requests where the authenticated `tenant_id` does not match the resource's `tenant_id`. Log and alert on cross-tenant access attempts.
- **Admin vs. Tenant Roles:** Distinguish platform-admin roles (can act across tenants) from tenant-admin roles (scoped to one tenant). Platform admins must use explicit impersonation with audit logging, not implicit access.

### 4. Resource Partitioning on Shared Infrastructure

- **Compute:** Use tenant-aware rate limiting (per-tenant request quotas, compute time budgets). Implement fair-queue scheduling if tenants share async workers.
- **Storage:** Prefix object storage keys with `tenant_id/` (e.g., `s3://bucket/tenant_abc/uploads/file.pdf`). Apply bucket policies or IA
