import { test, expect } from '@playwright/test';

test('homepage has correct title and heading', async ({ page }) => {
  // Navigate to the homepage.
  // The baseURL is not set in playwright.config.ts, so we use a relative path.
  // Assuming the dev server runs on http://localhost:4321 (default for Astro dev)
  await page.goto('/');

  // Check if the page title is correct.
  // We need to find the correct title from src/components/BaseHead.astro or src/consts.ts
  // For now, let's use a placeholder and update it later if needed.
  await expect(page).toHaveTitle(/Pixel Valley Devlog/); // Update this with the actual SITE_TITLE if different

  // Check if the main heading is visible and has the correct text.
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('🌱 Welcome to Pixel Valley Devlog');
});
