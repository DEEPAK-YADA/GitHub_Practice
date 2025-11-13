import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Register/);
});


