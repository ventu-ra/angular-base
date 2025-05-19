import { expect, test } from '@playwright/test';

test('angular-base', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/AngularBase/);
});
