import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/games/a_sample_game/index.htm');
});

test('should have the correct html title', async ({ page }) => {
  await expect(page).toHaveTitle(/Sample game/);
});

test("should have the correct episode title", async ({ page }) => {
  await expect(page.locator('#titre')).toHaveText(`A simple village`);
});


test("should display 0 euros in the shop", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Enter the shop.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Go to the store (with 0 euros).`);
});

test("should get back at the starting page if we get out of the shop", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Enter the shop.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Go to the store (with 0 euros).`);
  await page.getByRole('link').filter({ hasText: 'Get out.' }).click();
  await expect(page.locator('#titre')).toHaveText(`A simple village`);
});

test("should display that we don't have enough money if we try to buy the pickaxe.", async ({ page }) => {
  await page.getByRole('link').filter({ hasText: 'Enter the shop.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Go to the store (with 0 euros).`);
  await page.getByRole('link').filter({ hasText: 'Buy the pickaxe (200 euros).' }).click();
  await expect(page.locator('#texte')).toHaveText(`You don't have enough money.`);
});