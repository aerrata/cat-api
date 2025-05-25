output "ecr_repository_urls" {
  description = "ECR repository URLs"
  value = {
    for repo in aws_ecr_repository.app_repos :
    repo.name => repo.repository_url
  }
}
