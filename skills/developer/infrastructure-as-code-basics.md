---
name: infrastructure-as-code-basics
description: >
  Helps define, provision, and manage cloud infrastructure using code-based tools like Terraform, Pulumi, or CloudFormation. Use when someone wants to set up infrastructure as code, asks about provisioning cloud resources programmatically, needs help writing Terraform modules or CloudFormation templates, wants to manage AWS/GCP/Azure resources with code, or is trying to understand IaC concepts and workflows.
category: developer
tags: [terraform, pulumi, cloudformation, devops, cloud-infrastructure]
author: community
---

# Infrastructure as Code Basics

This skill helps users write, structure, and manage infrastructure definitions using Terraform, Pulumi, or CloudFormation, covering everything from initial setup to modular, production-ready configurations.

## IaC Workflow

1. **Identify the tool** — Confirm which IaC tool the user is working with (Terraform, Pulumi, CloudFormation). If unspecified, default to Terraform as it is the most common.
2. **Clarify the target cloud** — Determine the cloud provider (AWS, GCP, Azure) and region, as this affects provider configuration and resource naming.
3. **Define the resource scope** — Ask or infer what infrastructure is needed (VPC, compute, storage, databases, IAM, etc.) and the environment (dev/staging/prod).
4. **Write the configuration** — Produce complete, working configuration files following these rules:
   - **Terraform**: Use `main.tf`, `variables.tf`, `outputs.tf`, and `providers.tf` as separate files. Pin provider versions. Use `terraform.tfvars` for environment-specific values.
   - **Pulumi**: Use typed SDK code (TypeScript, Python, or Go based on user preference). Export all resource outputs. Use `Pulumi.<stack>.yaml` for config.
   - **CloudFormation**: Use YAML over JSON. Separate Parameters, Resources, and Outputs sections. Use `!Sub` and `!Ref` correctly.
5. **Apply best practices**:
   - Never hardcode secrets — reference environment variables or secret managers.
   - Tag all resources with at minimum `environment`, `project`, and `owner`.
   - Use variables/parameters for anything environment-specific (region, instance size, CIDR blocks).
   - Enable remote state (S3 + DynamoDB for Terraform, SSM for CloudFormation).
   - Add comments explaining non-obvious resource relationships.
6. **Provide the operational commands** — Include the exact CLI commands to initialize, plan/preview, and apply the configuration.
7. **Flag risks** — Call out any destructive changes (resource replacement, deletion), cost implications, or security concerns (open security groups, public buckets).

## Terraform-Specific Rules

- Always include `required_providers` block with version constraints.
- Use `terraform fmt` formatting conventions (2-space indent, aligned `=` signs).
- Prefer `for_each` over `count` for resources that may need individual management.
- Use data sources (`data "aws_ami"`) instead of hardcoding IDs.
- Module calls should specify `source` and `version`.

## CloudFormation-Specific Rules

- Use `DeletionPolicy: Retain` for stateful resources (RDS, S3).
- Validate templates with `aws cloudformation validate-template` before deploying.
- Use Nested Stacks for configurations exceeding 200 resources.

## Pulumi-Specific Rules

- Use `pulumi.Output` types correctly — avoid `.apply()` unless necessary.
- Store sensitive config with `pulumi config set --secret`.
- Export resource URNs and IDs as stack outputs.

## Output Format

Produce the following for every request:

1. **File tree** — Show the directory structure of all files to be created.
2. **Complete file contents** — Each file in a labeled fenced code block with the correct language tag (e.g., ` ```hcl `, ` ```yaml `, ` ```typescript `). No truncation — all files must be complete and runnable.
3. **CLI commands** — A fenced `bash` block with the exact commands to deploy, in order.
4. **What this creates** — A 3–5 bullet plain-English summary of the resources being provisioned.
5. **Estimated cost note** — One sentence rough estimate or a note to check the provider's pricing