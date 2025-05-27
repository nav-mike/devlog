# Test info

- Name: navigation from homepage to about page
- Location: /app/tests/navigation.spec.ts:3:1

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
>  3 | test('navigation from homepage to about page', async ({ page }) => {
     | ^ Error: browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/webkit-2158/pw_run.sh
   4 |   // Navigate to the homepage.
   5 |   // Assuming the dev server runs on http://localhost:4321 (default for Astro dev)
   6 |   await page.goto('/');
   7 |
   8 |   // Find the "About" link in the header and click it.
   9 |   // The link has text "About" and href="/about".
  10 |   const aboutLink = page.locator('#nav-menu a[href="/about"]');
  11 |   await aboutLink.click();
  12 |
  13 |   // Check if the URL is now /about.
  14 |   await expect(page).toHaveURL(/.*\/about/);
  15 |
  16 |   // Check if the main heading on the About page is visible.
  17 |   const heading = page.locator('h1');
  18 |   await expect(heading).toBeVisible();
  19 |   await expect(heading).toHaveText('Hey there! 👋');
  20 | });
  21 |
```