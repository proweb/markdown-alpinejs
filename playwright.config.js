const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm start',
    url: 'http://localhost:1234',
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:1234',
  },
});
