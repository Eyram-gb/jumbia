import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "0pwar669",
  dataset: "production",
  title: "Jumbia",
  apiVersion: "2023-10-13",
  basePath: "/admin",
  plugins: [deskTool()],
  //   schema: { types: schemas },
});

export default config;
