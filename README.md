# 🐈 Cat Facts API - DevOps Assignment

## 📌 Overview

This repo contains *Cat Facts* microservice app that generates random cat facts. It also demonstrates a DevOps pipeline workflow for multi language app using **Github Actions**, **Terraform** and **AWS ECR**. It includes:

- Provision ECR repos using Terraform
- CI/CD pipeline with build, test and push workflows
- App containerization
- Git branching strategy for multiple collaborator

## 📂 Project Structure

```bash
├── .github
│   └── workflows
│       ├── core.yml  # Reusable pipeline
│       └── main.yml  # Main pipeline
├── README.md         # Documentation
├── cat-api-node      # Node.js app
├── cat-api-py        # Node.js app
└── terraform         # Infrastrcture provisioning
```

## 📕 How to Use?

1. Fork or clone this repo.
2. Configure your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID` secrets in the repository settings.
3. Apply Terraform under the `terraform/` directory to create ECR repos.
4. Push new code to a `feature/*` branch, create a PR to `main`, and merge.
5. The CI/CD pipeline will build, test, and deploy your containers to ECR.

## 🔄 CI/CD Pipeline

`main.yml`: Main pipeline

1. Define triggers
2. Define jobs, accepts input to be used in `core.yml`

`core.yml`: Reusable pipeline

1. Download the code
2. Set up AWS creds
3. Login to AWS ECR
4. Set up the correct language
5. Install project dependencies
6. Run tests
7. Build dokcer image
    * Build the image
    * Tag the image with 'latest' tag and commit hash
    * Push the image to AWS ECR

## 🔀 Git Branching Strategy

### Branches

- `main`: Production code.
- `develop`: Integration branch.
- `release/*`: Prep for production. Branched from `develop`, merged into `main`.
- `feature/*`: New features. Merged into `develop`.
- `hotfix/*`: Critical fixes. Branched from and merged into `main` and `develop`.

### CI/CD Triggers

1. `main` branch:

- Triggers on PRs are closed
- Pushes Docker images to ECR

2. `develop`, `release/*`, `feature/*`, `hotfix/*` branch:

- Triggers on push events
- Runs tests but doesn't push images to ECR

> The pipeline will only be triggered if changes were made within this file:
> - `cat-api-node/**`
> - `cat-api-py/**`
> - `.github/workflows/**`

## 📝 Notes

- Terraform must be applied first before the pipeline can push to ECR.
- Apps are assumed to follow standard file structure.
- Some configuration need to be added to the pipeline for app language other than Nodejs and Python.
- AWS creds must be stored in Github Actions secrets in the repo settings.
- No lint and code security scanning steps yet.
