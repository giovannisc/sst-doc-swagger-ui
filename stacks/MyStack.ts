import { Duration } from "aws-cdk-lib/core";
import { StackContext, Service } from "sst/constructs";

export function DOC({ stack, app }: StackContext) {
  const service = new Service(stack, "MyService", {
    path: ".",
    file: "./services/Dockerfile",
    port: 3002,
    cdk: {
      container: {
        healthCheck: {
          command: ["CMD-SHELL", "curl -f http://localhost:3002/health || exit 1"],
          interval: Duration.minutes(2),
          retries: 3,
          startPeriod: Duration.minutes(5),
          timeout: Duration.minutes(1),
        },
      },
      applicationLoadBalancerTargetGroup: {
        healthCheck: {
          healthyHttpCodes: "200,301,302",
          path: "/health",
        },
      }
    },
    customDomain: {
      domainName: `docs.${app.name}.${app.stage}.${process.env.HOSTED_ZONE}`,
      hostedZone: `${process.env.HOSTED_ZONE}`
    }
  });
  stack.addOutputs({
    ApiEndpoint: service.customDomainUrl
  });
}
