import { test, expect } from '@playwright/test';

test('week 1 blog post page has correct content', async ({ page }) => {
  await page.goto('/devlog/week-1');

  // Check page title
  await expect(page).toHaveTitle(/My First Week in Game Development: A Stardew Valley Inspired Game - Weekly Devlog #1/);

  // Check main heading
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('My First Week in Game Development: A Stardew Valley Inspired Game - Weekly Devlog #1');

  // Check publication date
  const dateElement = page.locator('div.date time');
  await expect(dateElement).toBeVisible();
  await expect(dateElement).toHaveAttribute('datetime', /^2025-05-25/);
  await expect(dateElement).toHaveText('May 25, 2025');

  // Check hero image
  const heroImage = page.locator('img[src="/w1.jpg"]');
  await expect(heroImage).toBeVisible();
  await expect(heroImage).toHaveAttribute('src', '/w1.jpg');

  // Check CodeMonkey link
  const codeMonkeyLink = page.locator('a[href="https://unitycodemonkey.com/kitchenchaoscourse.php"]');
  await expect(codeMonkeyLink).toBeVisible();
  await expect(codeMonkeyLink).toHaveText("CodeMonkey’s Kitchen Chaos course");
  await expect(codeMonkeyLink).toHaveAttribute('href', 'https://unitycodemonkey.com/kitchenchaoscourse.php');

  // Check game build link
  const gameBuildLink = page.locator('a[href="https://github.com/nav-mike/devlog/releases/tag/week1"]');
  await expect(gameBuildLink).toBeVisible();
  await expect(gameBuildLink).toHaveText('build');
  await expect(gameBuildLink).toHaveAttribute('href', 'https://github.com/nav-mike/devlog/releases/tag/week1');

  // Check for Conclusion heading
  const conclusionHeading = page.locator('h2', { hasText: 'Wrapping Up Week 1 and Looking Ahead' });
  await expect(conclusionHeading).toBeVisible();
});
