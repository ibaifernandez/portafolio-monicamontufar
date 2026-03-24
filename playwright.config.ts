import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4321',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Start the Astro preview server before running tests in CI
  webServer: process.env.CI
    ? {
        command: 'npm run preview -- --port 4321',
        url: 'http://localhost:4321',
        reuseExistingServer: false,
        timeout: 60_000,
      }
    : undefined,
});
