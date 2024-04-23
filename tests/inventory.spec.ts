import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/games/a_sample_game/index.htm');
});

test("should display that the inventory is empty", async ({ page }) => {
  await expect(page.locator('#contenuInventaire')).toHaveText(`(empty)`);
});

test("should display that we buy a pretty pickaxe if we got enough money", async ({ page }) => {
  // collect money by working
  await page.getByRole('link').filter({ hasText: "Go to the temp agency." }).click();
  await page.getByRole('link').filter({ hasText: 'Get out.' }).click();

  await page.getByRole('link').filter({ hasText: "Go to the temp agency." }).click();
  await page.getByRole('link').filter({ hasText: 'Get out.' }).click();

  await page.getByRole('link').filter({ hasText: "Go to the temp agency." }).click();
  await page.getByRole('link').filter({ hasText: 'Get out.' }).click();

  await page.getByRole('link').filter({ hasText: "Go to the temp agency." }).click();
  await page.getByRole('link').filter({ hasText: 'Get out.' }).click();

  await page.getByRole('link').filter({ hasText: 'Enter the shop.' }).click();
  await expect(page.locator('#titre')).toHaveText(`Go to the store (with 200 euros).`);

  await page.getByRole('link').filter({ hasText: 'Buy the pickaxe (200 euros).' }).click();
  await expect(page.locator('#texte')).toHaveText(/a beautiful pickaxe/);
  await expect(page.locator('#contenuInventaire')).not.toHaveText(`(empty)`);

});
