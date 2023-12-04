# Documentation with SST and swagger ui

## Description

This TypeScript application, utilizing the Serverless Stack (SST) framework and Docker, is specifically designed to provide a Swagger UI container for showcasing API documentation. It leverages the power of Docker to create a consistent and scalable environment where the Swagger UI is hosted, offering a user-friendly interface to interact with and understand the API's capabilities and endpoints.

Learn more about SST at [sst.dev](https://sst.dev).

## Architecture

- **Docker Containerization**:
  - Dockerfile located at `./services/Dockerfile`.
  - Configured health checks for container stability.

- **AWS Services**:
  - Application Load Balancer (ALB) for traffic management.
  - Custom domain integration for accessibility.

- **SST Constructs**:
  - Utilizes the `Service` construct for deployment.

## Setup

### Prerequisites

- Node.js and npm.
- Docker.
- AWS CLI configured.
- SST installed globally (`npm install -g sst`).

### AWS CLI Configuration

1. Install and configure the AWS CLI as instructed at [AWS CLI website](https://aws.amazon.com/cli/).
2. Use `aws configure` to set up AWS credentials.

### Installation

1. Clone the repository.
2. Run `npm i` in the project folder.

### Environment Variables

Set up:
- `HOSTED_ZONE` for the AWS Route53 custom domain.
- Custom domain in format: `docs.${app.name}.${app.stage}.${process.env.HOSTED_ZONE}`.

### Deployment

Deploy using `npm run deploy` or `npm run deploy -- --profile myProfile` if using AWS profile. It handles Docker containerization and service setup on AWS.

## Usage

Post-deployment, the service is accessible via the custom domain, offering a containerized environment for document management.

## Outputs

Deployment outputs:
- Custom domain URL of the API.
- Docker container and ALB configuration details.

## Contributing

Contributions are welcome. Submit pull requests or open issues for discussion.

## License

[MIT License](https://opensource.org/licenses/MIT).

## Contact

- Email: giovanni@diaumempreendedor.com.br
- Website: https://dia1tech.com.br
