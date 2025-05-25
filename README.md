## 🚀 Automated CI/CD for React.js with Docker, AWS (ECR & EC2), and NGINX

This project showcases a complete CI/CD pipeline for a **React.js frontend application**, integrating **Docker**, **GitHub Actions**, **Amazon ECR**, **EC2**, and **NGINX** to ensure reliable and automated deployments.

---

### 🔧 Key Features

#### ⚙️ Docker Image Build & Push to Amazon ECR
- Automatically builds a Docker image whenever code is pushed to the `main` branch.
- Uses **GitHub Actions** for the entire automation process.
- Pushes Docker images to **Amazon Elastic Container Registry (ECR)**.
- AWS credentials are securely stored using **GitHub Secrets**.

#### ☁️ Deployment to EC2 with NGINX
- The pushed Docker image is deployed to an **EC2 instance**.
- An **NGINX server** inside the container serves the React build.
- Ensures users always access the **latest deployed version**.

#### 🧪 Quality & Security Enhancements
- A dedicated pipeline runs **unit tests** when a pull request is opened.
- Integrated **vulnerability scanning** to identify security issues in the Docker image.
- Enforced **branch protection rules** on the `main` branch:
  - Requires pull request approvals.
  - Ensures all status checks pass before merging.

#### 🏷️ Automated Semantic Version Tagging

Includes a custom script (`tag.sh`) to handle **automated semantic versioning** as per [semver.org](https://semver.org/):

- Detects the latest Git tag and automatically increments it.
- Supports version types: `major`, `minor`, `patch`.
- Tags the current commit and pushes the new tag to the remote repository.

**Purpose**:  
To maintain clear version control of deployments and track feature releases or fixes.

**Usage Example:**
```bash
./tag.sh -v patch   # Incre
