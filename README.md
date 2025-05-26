# Cat Facts API - DevOps Assignment

### Intro

This repo demonstrates a DevOps pipeline workflow for multi language microservice apps using Github Actions, Terraform and AWS ECR.

- Provision ECR repo using Terraform
- A CI/CD pipeline with build, test and push workflows
- App containerization
- Git branching strategy for multiple collaborator

### Project Structure

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

### How to Use?

1. Fork or clone the repo.
2. Configure your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ACCOUNT_ID` secrets in the repository settings.
3. Apply Terraform under the `terraform/` directory to create ECR repos.
4. Push new code to a `feature/*` branch, create a PR to main, and merge.
5. The CI/CD pipeline will build, test, and deploy your containers to ECR.

### CI/CD Pipeline

#### Github Actions Workflows

1. `main.yml`: Main pipeline

blabla

2. `core.yml`: Reusable pipeline

blabla

### Git Branching Strategy

#### Branches

- `main`: Production code. Protected. Only updated via pull requests.
- `develop`: Development code.
- `release/*`: Prepare code for production branch.
- `feature/*`: Feature specific branch.
- `hotfix/*`: Direct production fixes.

#### CI/CD Triggers

| Branch      | Environment    | Action                   |
| ----------- | -------------- | ------------------------ |
| `main`      | Production     | Build, test, push to ECR |
| `develop`   | Dev            | Build, test, push to ECR |
| `release/*` | Pre production | Build, test, push to ECR |
| `feature/*` | -              | -                        |

The pipeline will be triggered if changes were made within this file:

- `cat-api-node/**`
- `cat-api-py/**`
- `.github/workflows/**`

### Notes

1. Apps are assumed to follow standard Docker and test structure.
1. New app with different language should follow the standard and update the workflow as needed.
1. Terraform infra must be applied first before the pipeline can push to ECR.
1. AWS credentials must be stored in Github Actions secrets in the repo settings.
1. No linter and code security scanning steps yet.