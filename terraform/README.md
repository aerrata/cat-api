# 🐈 ✨ Cat Facts API Terraform

The IAC to provision AWS infra for Cat Facts API app. 

For this case, we will provision 2 private repo for our app images.

## Setup

1. Make sure your AWS CLI already installed and configured with `aws configure`. You should also set the following IAM policy.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "TerraformApply",
            "Effect": "Allow",
            "Action": [
                "ecr:CreateRepository",
                "ecr:TagResource",
                "ecr:DescribeRepositories",
                "ecr:ListTagsForResource",
                "ecr:DeleteRepository"
            ],
            "Resource": "*"
        }
    ]
}
```

2. Change directory to `terraform`. Create a new file named `.production.tfvars` from `.tfvars.example`. Adjust the variables if needed.

3. Run the follwoing

```bash
terraform init
terraform plan -var-file=".production.tfvars" # Shows what changes will be made
terraform apply -var-file=".production.tfvars" # Apply the changes
```

## Output

With the default options, this Terraform will configure 2 private ECS repo:

1. `cat-api/node`: for cat-api-node docker images.
2. `cat-api/py`: for cat-api-api docker images.