# Cat Facts API - DevOps Assignment

## Overview

This repo demonstrates a DevOps pipeline workflow for multi language microservice apps using Github Actions, Terraform and AWS ECR. It includes:

- Provision ECR repo using Terraform
- CI/CD pipeline with build, test and push workflows
- App containerization
- Git branching strategy for multiple collaborator

## Project Structure

```bash
.
├── .github
│   └── workflows
│       ├── core.yml  # Reusable pipeline
│       └── main.yml  # Main pipeline
├── README.md  # Documentation
├── cat-api-node  # Node.js app
├── cat-api-py  # Node.js app
└── terraform  # Infrastructure provisioning
```

## How to Use?

1. Fork or clone this repo.
2. Configure your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID` secrets in the repository settings.
3. Apply Terraform under the `terraform/` directory to create ECR repos.
4. Push new code to a `feature/*` branch, create a PR to `main`, and merge.
5. The CI/CD pipeline will build, test, and deploy your containers to ECR.

## CI/CD Pipeline

### Github Actions Workflows

1. `main.yml`: Main pipeline

blabla

2. `core.yml`: Reusable pipeline

blabla

## Git Branching Strategy

### Branches

- `main`: Production code.
- `develop`: Integration branch.
- `release/*`: Prep for production. Branched from `develop`, merged into `main`.
- `feature/*`: New features. Merged into `develop`.
- `hotfix/*`: Critical fixes. Branched from and merged into `main` and `develop`.

### CI/CD Triggers

The pipeline will be triggered if changes were made within this file:

- `cat-api-node/**`
- `cat-api-py/**`
- `.github/workflows/**`

1. `main` branch:

- Triggers on PRs are closed
- Pushes Docker images to ECR

2. `develop`, `release/*`, `feature/*`, `hotfix/*` branch:

- Triggers on push events
- Runs tests but doesn't push images to ECR

## Notes

- Terraform must be applied first before the pipeline can push to ECR.
- Apps are assumed to follow standard file structure.
- Some configuration need to be added to the pipeline for app language other than Nodejs and Python.
- AWS credentials must be stored in Github Actions secrets in the repo settings.
- No linter and code security scanning steps yet.
