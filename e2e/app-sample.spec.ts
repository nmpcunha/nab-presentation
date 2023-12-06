import { test, expect } from '@playwright/test';

test('Should show "APP Sample" as page title', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  await expect(page).toHaveTitle(/APP Sample/);
});

test('Should read "🏗️ Application is still under development 🚧" inside custom element', async ({
  page,
}) => {
  await page.goto('http://localhost:8000/');

  await expect(page.locator('app-sample')).toContainText(
    '🏗️ Application is still under development 🚧'
  );
});
