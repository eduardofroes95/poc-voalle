const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://grupovoalle.com.br',
    viewportWidth: 1920,
    viewportHeight:1080
  },
});
