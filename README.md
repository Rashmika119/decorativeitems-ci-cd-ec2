🚀 Automated CI/CD for React.js with Docker, AWS (ECR & EC2), and NGINX
This project demonstrates a complete CI/CD pipeline for a React.js frontend application, using Docker, GitHub Actions, Amazon ECR, EC2, and NGINX to ensure smooth and secure deployments.

🔧 Key Features
⚙️ Docker Image Build & Push to Amazon ECR
Automatically builds a Docker image on each push to the main branch.

Uses GitHub Actions to automate the build and push process.

Docker images are securely pushed to Amazon Elastic Container Registry (ECR).

AWS credentials are stored securely using GitHub repository secrets.

☁️ Deployment to EC2 with NGINX
Once pushed to ECR, the Docker image is deployed to an EC2 instance.

An NGINX server on the EC2 instance serves the built React application.

Ensures the latest version of the app is always available to users.

🧪 Quality & Security Enhancements
Integrated vulnerability scanning in the pipeline to detect security issues in Docker images.

Applied branch protection rules on the main branch:

Requires pull request reviews.

Ensures all status checks pass before merging.

🏷️ Automated Semantic Version Tagging
This project includes a script (git_update.sh) for automated semantic versioning:

Supports version types: major, minor, and patch.

Automatically calculates the next version based on Git tags.

Tags the current commit and pushes the tag to the repository.
