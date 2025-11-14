import { test, expect } from '@playwright/test';
//this is my first test.
test('Test automation title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Register/);
});


