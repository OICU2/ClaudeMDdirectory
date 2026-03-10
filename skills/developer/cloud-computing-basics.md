---
name: cloud-computing-basics
description: >
  Helps users deploy and manage applications on major cloud platforms including AWS, GCP, and Azure.
  Use when someone asks about hosting an app in the cloud, wants to set up cloud infrastructure,
  needs help choosing between cloud providers, asks how to deploy to AWS or Google Cloud,
  or wants to understand cloud storage, compute, or networking concepts.
category: developer
tags: [cloud, aws, gcp, azure, devops, deployment, infrastructure]
author: community
---

# Cloud Computing Basics

This skill guides users through deploying and managing applications on AWS, GCP, and Azure, from choosing the right service to running production workloads.

## Deployment and Management Workflow

1. **Clarify the use case** — Ask what the application does, expected traffic, budget constraints, and whether the user has an existing cloud provider preference.

2. **Recommend the right platform** — Base the recommendation on:
   - AWS: broadest service catalog, best for enterprises, strong ecosystem
   - GCP: best for data/ML workloads, Kubernetes (GKE is gold standard), competitive pricing
   - Azure: best for Microsoft-stack shops, strong Active Directory integration

3. **Identify the correct compute service** — Map the workload to a service:
   - Simple web app: AWS Elastic Beanstalk / GCP App Engine / Azure App Service
   - Containerized app: AWS ECS/EKS / GCP GKE / Azure AKS
   - Serverless function: AWS Lambda / GCP Cloud Functions / Azure Functions
   - Full VM control: AWS EC2 / GCP Compute Engine / Azure Virtual Machines

4. **Walk through the deployment steps** — Provide exact CLI commands or console steps:
   - Account setup and CLI installation (`aws configure`, `gcloud init`, `az login`)
   - Resource provisioning (compute, storage, networking)
   - Application packaging (Docker image, zip artifact, or source push)
   - Deploy command with flags and expected output
   - Verify deployment (health check URL, logs command)

5. **Configure networking and security** — Cover:
   - Firewall/security group rules to open required ports
   - IAM roles and least-privilege permissions
   - Custom domain and TLS/SSL setup if needed

6. **Set up monitoring and scaling** — Include:
   - Enable logging: CloudWatch / Cloud Logging / Azure Monitor
   - Set up a basic CPU/memory alert
   - Configure autoscaling policy if applicable

7. **Estimate cost** — Provide a rough monthly cost range for the recommended services using current pricing tiers and note free tier eligibility where applicable.

## Output Format

Produce a structured deployment guide with the following sections:

- **Recommended Platform & Services** — One paragraph justifying the choice
- **Prerequisites** — Bulleted list (CLI tools, accounts, Docker, etc.)
- **Step-by-Step Deployment** — Numbered steps with exact CLI commands in code blocks
- **Security Checklist** — 3-5 bulleted items specific to the chosen platform
- **Monitoring Setup** — 2-3 commands or console steps to enable basic observability
- **Estimated Monthly Cost** — Table or bullet list with service name and price range
- **Next Steps** — 2-3 suggestions for hardening or scaling the setup

Keep commands copy-paste ready. Use platform-specific terminology (e.g., "S3 bucket" not "cloud storage bucket" when discussing AWS). Flag any step that requires paid resources before the user executes it.
