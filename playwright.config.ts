import process from 'node:process';
import { defineConfig, devices } from '@playwright/test';

const CI = !!process.env.CI;
const PORT = CI ? 4173 : 5173;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 1 : 0,
  reporter: CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  // CI tests the production build; locally the dev server gives a faster loop.
  webServer: {
    command: CI ? 'npm run build-only && npm run preview' : 'npm run dev',
    port: PORT,
    reuseExistingServer: !CI,
  },
});
