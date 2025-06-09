import { test, expect } from '@playwright/test';

test('week 2-3 blog post page has correct content', async ({ page }) => {
  await page.goto('/devlog/week-2-3');

  // Check page title
  await expect(page).toHaveTitle(/My weeks 2 - 3 in Game Development: A Stardew Valley Inspired Game - Weekly Devlog #2/);

  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('My weeks 2 - 3 in Game Development: A Stardew Valley Inspired Game - Weekly Devlog #2');

  // Check publication date
  const dateElement = page.locator('div.date time');
  await expect(dateElement).toBeVisible();
  await expect(dateElement).toHaveAttribute('datetime', /^2025-06-09/);
  await expect(dateElement).toHaveText('June 9, 2025'); // Assuming similar formatting to week-1 test

  // Check hero image
  const heroImage = page.locator('img[src="/w2-3.png"]');
  await expect(heroImage).toBeVisible();
  await expect(heroImage).toHaveAttribute('src', '/w2-3.png');

  // Check for keyword presence in the main content area
  const mainContent = page.locator('article'); // Assuming content is within <article> tag

  // Primary Keywords
  await expect(mainContent).toContainText('game development');
  await expect(mainContent).toContainText('Unity'); // This will also match "Unity game engine", "Unity development", etc.
  await expect(mainContent).toContainText('Stardew Valley'); // This will also match "Stardew Valley inspired"

  // Secondary Keywords
  await expect(mainContent).toContainText('indie game dev');
  await expect(mainContent).toContainText('pixel art');
  await expect(mainContent).toContainText('devlog');

  // Check for specific phrases from elaborated points
  await expect(mainContent).toContainText('tilemap'); // From "Unity's tilemap feature"
  await expect(mainContent).toContainText('Tilemaps'); // From "Mastering Tilemaps"
  await expect(mainContent).toContainText('Unity Fundamentals'); // From "Unity Fundamentals Deep Dive"
  await expect(mainContent).toContainText('C# scripting');
  await expect(mainContent).toContainText('pixel art asset'); // From "pixel art asset pack"
  await expect(mainContent).toContainText('game assets'); // From "quality game assets"
  await expect(mainContent).toContainText('Stay tuned for more updates'); // From conclusion

  // Irrelevant assertions from week-1 are removed.
  // Specific link checks or other content checks for week-2-3 can be added in subsequent steps.
});
