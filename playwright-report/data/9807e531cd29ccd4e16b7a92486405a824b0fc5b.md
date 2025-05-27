# Test info

- Name: homepage has correct title and heading
- Location: /app/tests/homepage.spec.ts:3:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/webkit-2158/pw_run.sh
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
>  3 | test('homepage has correct title and heading', async ({ page }) => {
     | ^ Error: browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/webkit-2158/pw_run.sh
   4 |   // Navigate to the homepage.
   5 |   // The baseURL is not set in playwright.config.ts, so we use a relative path.
   6 |   // Assuming the dev server runs on http://localhost:4321 (default for Astro dev)
   7 |   await page.goto('/');
   8 |
   9 |   // Check if the page title is correct.
  10 |   // We need to find the correct title from src/components/BaseHead.astro or src/consts.ts
  11 |   // For now, let's use a placeholder and update it later if needed.
  12 |   await expect(page).toHaveTitle(/Pixel Valley Devlog/); // Update this with the actual SITE_TITLE if different
  13 |
  14 |   // Check if the main heading is visible and has the correct text.
  15 |   const heading = page.locator('h1');
  16 |   await expect(heading).toBeVisible();
  17 |   await expect(heading).toHaveText('🌱 Welcome to Pixel Valley Devlog');
  18 | });
  19 |
```