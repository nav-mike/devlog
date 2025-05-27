import { test, expect } from '@playwright/test';

test('navigation from homepage to about page', async ({ page }) => {
  // Navigate to the homepage.
  // Assuming the dev server runs on http://localhost:4321 (default for Astro dev)
  await page.goto('/');

  // Find the "About" link in the header and click it.
  // The link has text "About" and href="/about".
  const aboutLink = page.locator('header nav >> text=About[href="/about"]');
  await aboutLink.click();

  // Check if the URL is now /about.
  await expect(page).toHaveURL(/.*\/about/);

  // Check if the main heading on the About page is visible.
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Hey there! 👋');
});
