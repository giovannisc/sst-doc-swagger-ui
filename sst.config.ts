import { SSTConfig } from "sst";
import { DOC } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-doc-swagger-ui",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DOC);
  }
} satisfies SSTConfig;
