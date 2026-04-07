import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "http://localhost:4000/api/docs/json",
    },
    output: {
      mode: "tags-split",
      target: "src/api/generated",
      client: "react-query",
      override: {
        mutator: {
          path: "src/api/axios-instance.ts",
          name: "axiosInstance",
        },
      },
    },
  },
});
