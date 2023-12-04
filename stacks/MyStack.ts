import { Duration } from "aws-cdk-lib/core";
import { StackContext, Service } from "sst/constructs";

export function DOC({ stack, app }: StackContext) {
  const service = new Service(stack, "MyService", {
    path: ".",
    file: "./services/Dockerfile",
    port: 80,
    cdk: {
      container: {
        healthCheck: {
          command: ["CMD-SHELL", "curl -f http://localhost || exit 1"],
          interval: Duration.minutes(1),
          retries: 2,
          startPeriod: Duration.minutes(1),
          timeout: Duration.seconds(30),
        },
      },
      applicationLoadBalancerTargetGroup: {
        healthCheck: {
          healthyHttpCodes: "200,301,302",
          path: "/",
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
