const { test, expect } = require('@playwright/test');

test('markdown rendering works', async ({ page }) => {
  await page.goto('/');

  const textarea = page.locator('textarea#text');
  await textarea.fill('## Hello World');

  // Wait for the interval to trigger preview
  await page.waitForTimeout(3000);

  const preview = page.locator('#preview div[x-html="markdown"]');
  await expect(preview).toContainText('Hello World');
  const h2 = preview.locator('h2');
  await expect(h2).toHaveText('Hello World');
});

test('reset button works', async ({ page }) => {
  await page.goto('/');

  const textarea = page.locator('textarea#text');
  await textarea.fill('Some text');

  const resetButton = page.locator('button:text("Reset")');
  await resetButton.click();

  await expect(textarea).toHaveValue('');
});
