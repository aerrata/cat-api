# Cat API Terraform

IAC to provision AWS infra for Cat API app

### Setup

1. Make sure your AWS CLI already configured with you AWS credentials

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"ecr:CreateRepository",
				"ecr:TagResource"
			],
			"Resource": "arn:aws:ecr:*:*:*"
		}
	]
}
```

3. Change directory to `terraform`. Create a new file named `.production.tfvars` from `.tfvars.example`. Adjust the variables if needed.

3. Run the follwoing

```bash
terraform init
terraform plan -var-file=".production.tfvars" # Shows what changes will be made
terraform apply -var-file=".production.tfvars" # Apply the changes
```

