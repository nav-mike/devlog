# Test info

- Name: week 1 blog post page has correct content
- Location: /app/tests/week-1.spec.ts:3:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('week 1 blog post page has correct content', async ({ page }) => {
     | ^ Error: browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/chromium_headless_shell-1169/chrome-linux/headless_shell
   4 |   await page.goto('/devlog/week-1');
   5 |
   6 |   // Check page title
   7 |   await expect(page).toHaveTitle(/Week 1/);
   8 |
   9 |   // Check main heading
  10 |   const heading = page.locator('h1');
  11 |   await expect(heading).toBeVisible();
  12 |   await expect(heading).toHaveText('Week 1');
  13 |
  14 |   // Check publication date
  15 |   await expect(page.locator('*:has-text("May 25 2025")').first()).toBeVisible();
  16 |
  17 |   // Check hero image
  18 |   const heroImage = page.locator('img[src="/w1.jpg"]');
  19 |   await expect(heroImage).toBeVisible();
  20 |   await expect(heroImage).toHaveAttribute('src', '/w1.jpg');
  21 |
  22 |   // Check CodeMonkey link
  23 |   const codeMonkeyLink = page.locator('a[href="https://unitycodemonkey.com/kitchenchaoscourse.php"]');
  24 |   await expect(codeMonkeyLink).toBeVisible();
  25 |   await expect(codeMonkeyLink).toHaveText('CodeMonkey');
  26 |   await expect(codeMonkeyLink).toHaveAttribute('href', 'https://unitycodemonkey.com/kitchenchaoscourse.php');
  27 |
  28 |   // Check game build link
  29 |   const gameBuildLink = page.locator('a[href="https://github.com/nav-mike/devlog/releases/tag/week1"]');
  30 |   await expect(gameBuildLink).toBeVisible();
  31 |   await expect(gameBuildLink).toHaveText('build');
  32 |   await expect(gameBuildLink).toHaveAttribute('href', 'https://github.com/nav-mike/devlog/releases/tag/week1');
  33 | });
  34 |
```