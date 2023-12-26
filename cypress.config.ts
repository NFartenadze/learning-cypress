import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://www.gsmarena.com/",
    viewportHeight: 800,
    viewportWidth: 1440,
  },
});
